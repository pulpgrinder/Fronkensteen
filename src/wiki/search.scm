
(define (search-hash-tag hash-tag)
    (init-wiki-search-display)
    (% "#fronkensteen-wiki-search-field" "val" hash-tag)
    (display-search-results (find-matching-wiki-pages hash-tag)))


(define (display-search-results matching-pages)
  (if (eqv? matching-pages '())
    (% "#fronkensteen-wiki-search-list" "html" "(no results)")
    (begin
      (% "#fronkensteen-wiki-search-list" "html" (generate-wiki-search-results matching-pages))
      (% ".fronkensteen-wiki-search-entry" "on" "click" (lambda (ev)
      (let ((target (js-ref ev "currentTarget")))
      (let ((target  (element-read-attribute target "target")))
        (display-wiki-page target)
  )))))))

(define (wiki-base-name filename)
    (file-path-no-extension (str-replace filename "/user-files/wiki/" "")))

(define (wiki-display-name filename)
  (let ((path (str-replace filename "user-files/wiki/" "")))
    (if (eqv? (file-extension path) "fmk")
      (file-path-no-extension path)
      path)))

(define (generate-wiki-search-results page-list)
    (if (eqv? page-list '())
      ""
      (let ((filename (wiki-display-name (car page-list))))
      (<<
        (li (<< ".fronkensteen-wiki-search-entry!target='" filename "'") filename)
        (generate-wiki-search-results (cdr page-list))))))

(define (init-wiki-search-display)

(build-fronkensteen-dialog "#fronkensteen-search" "Search"
  (<<
    (dv ".fronkensteen-dialog-controls" (<<
      (dv (<<
        "Search:&nbsp;"
        (input "#fronkensteen-wiki-search-field")
          (input "#fronkensteen-wiki-search-case-sensitive!type='checkbox'")
          "&nbsp;case-sensitive&nbsp;&nbsp;"
          (input "#fronkensteen-wiki-search-regex!type='checkbox'")
          "&nbsp;regex"
          ))

          ))
    (dv "#fronkensteen-wiki-search-list-wrapper"
      (ul "#fronkensteen-wiki-search-list" "")))

     "30em" "10em")
     (wire-ui)
     (% "#fronkensteen-wiki-search-case-sensitive" "on" "change" (lambda (ev)
       (set-checkbox-checked! "#fronkensteen-wiki-search-regex" #f)
       (run-wiki-search)
     ))
     (% "#fronkensteen-wiki-search-regex" "on" "change" (lambda (ev)
       (set-checkbox-checked! "#fronkensteen-wiki-search-case-sensitive" #f)
       (run-wiki-search)
     ))
  )


(define (find-matching-wiki-pages text)
    (let ((search-mode
        (cond ((checkbox-checked?  "#fronkensteen-wiki-search-case-sensitive") "case-sensitive")
              ((checkbox-checked?  "#fronkensteen-wiki-search-regex") "regex"
              )
              (#t "case-insensitive")
              )))
    (console-log "Search mode is ")
    (console-log search-mode)
    (let ((wiki-files (vector->list (get-internal-dir "user-files/wiki"))))
        (collect-matching-wiki-pages text wiki-files search-mode))))


(define (wiki-file-name-match text file-path search-mode)
  (case-search (decode-uri file-path) text search-mode))

(define (case-search str1 str2 search-mode)
(cond ((eqv? search-mode "case-sensitive") (>= (indexOf str1 str2) 0))
      ((eqv? search-mode "case-insensitive") (>= (indexOf (string-downcase str1) (string-downcase str2)) 0))
      ((eqv? search-mode "regex") (str-match? str1 str2 ""))
      (#t (begin
          (console-error (<< "Invalid option to case-search: " search-mode))
          #f
        ))))

(define (wiki-file-text-match text file-path search-mode)
  (if (eqv? (file-extension file-path) "fmk")
    (case-search (read-internal-text-file file-path) text search-mode)
   #f
  ))

(define (collect-matching-wiki-pages text file-list search-mode)
  (if (eqv? file-list '())
      '()
      (let ((current-filename (car file-list)))
        (if
          (or
            (wiki-file-name-match text current-filename search-mode)
            (wiki-file-text-match text current-filename search-mode))
           (cons (decode-uri current-filename) (collect-matching-wiki-pages text (cdr file-list) search-mode))
           (collect-matching-wiki-pages text (cdr file-list) search-mode)
        ))))



(define (fronkensteen-wiki-search-field_input ev)
  (run-wiki-search))

(define (run-wiki-search)
  (let ((search-term (% "#fronkensteen-wiki-search-field" "val")))
    (console-log (<< "Search term is " search-term))
    (if (eqv? search-term "")
      (display-search-results '())
      (display-search-results (find-matching-wiki-pages search-term)))))

(define (fronkensteen-wiki-search-button_click)
  (init-wiki-search-display))

(define (fronkensteen-wiki-incoming-links-button_click ev)
  (let ((matching-pages (collect-linked-pages current-title (vector->list (get-internal-dir "user-files/wiki")))))
    (display-incoming-links matching-pages)))

(define (display-incoming-links matching-pages)
  (if (eqv? (length matching-pages) 0)
    (alert "No other pages link here.")
    (begin
      (build-fronkensteen-dialog "#fronkensteen-incoming-links" "Pages That Link Here" (round-list (render-incoming-links matching-pages)) "20em" "20em")
      (% ".fronkensteen-incoming-link" "off" "click")
      (% ".fronkensteen-incoming-link" "on" "click"
      (lambda (ev)
        (let ((target (js-ref ev "currentTarget")))
          (let ((title  (element-read-attribute target "target")))
              (display-wiki-page title))))))))

(define (render-incoming-links matching-pages)
  (if (eqv? matching-pages '())
      ""
      (let ((page-name (file-basename-no-extension (car matching-pages))))
        (<< (round-list-item (<< ".fronkensteen-incoming-link!target='" page-name "'" ) page-name) (render-incoming-links (cdr matching-pages))))))

(define (collect-linked-pages title page-list)
    (collect-matching-wiki-pages (<< "[link " title) page-list "case-sensitive"))
