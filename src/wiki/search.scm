
(define (search-hash-tag hash-tag)
    (show-and-resize "fronkensteen-search-bar-container")
    (% "#search-field" "val" hash-tag)
    (display-search-results (find-matching-wiki-pages hash-tag)))

(define (.wiki-search_click)
  (show-and-resize "#fronkensteen-search-bar-container")
  (wire-ui)
  (% "#search-field" "focus")
  )


(define (show-search-result-dialog)
  (if (element-exists? "#search-result")
    #t
  (begin
    (build-fronkensteen-dialog "#search-dialog" "Search Results"
      (dv "#wiki-search-list.popup-list"
        ""
        ) "40em" "20em")
        (wire-ui))))

(define (generate-search-bar)
  (% "#fronkensteen-search-bar-container" "html"
    (<<
      (fa-icon "#close-search-bar" "times-circle" "")
      "&nbsp;"
      (input "#search-field!type='text'!placeholder='Find'")
      "&nbsp;"
      (input "#replace-field!type='text'!placeholder='Replace'")
      (button "#find-next-button" "Next" )
      (button "#replace-button" "Replace")
      (button "#replace-and-find-button" "Replace and Find")
      (button "#replace-all-button" "Replace All")
      (input "#search-all-pages-checkbox!type='checkbox'")
      "All pages &nbsp;"
      (input "#search-case-sensitive-checkbox!type='checkbox'")
      "Case-sensitive&nbsp;"
      (input "#search-regex-checkbox!type='checkbox'")
      "Regex&nbsp;"
      (input  "#search-backward-checkbox!type='checkbox'")
      "Backward&nbsp;"
      (input "#search-wrap-checkbox!type='checkbox'")
      "Wrap")))


(define (#close-search-bar_click)
    (hide-and-resize "#fronkensteen-search-bar-container")
    )

(define (display-search-results matching-pages)
  (show-search-result-dialog)
  (if (eqv? matching-pages '())
    (% "#wiki-search-list" "html" "(no results)")
    (begin
      (% "#wiki-search-list" "html" (generate-wiki-search-results matching-pages))
      (% ".wiki-search-entry" "on" "click" (lambda (ev)
      (let ((target (js-ref ev "currentTarget")))
      (let ((wiki-title  (element-read-attribute target "target")))
        (display-wiki-page wiki-title #t)
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
        (popup-list-item (<< ".wiki-search-entry!target='" filename "'") filename)
        (generate-wiki-search-results (cdr page-list))))))


(define (#search-all-pages-checkbox_change)
    (run-wiki-search))

(define (#search-case-sensitive-checkbox_change)
    (run-wiki-search))

(define (#search-regex-checkbox_change)
    (run-wiki-search))

(define (#search-field_input)
    (run-wiki-search))

(define (find-matching-wiki-pages text)
    (let ((is-regex? (checkbox-checked?  "#search-regex-checkbox"))
          (is-case-sensitive? (checkbox-checked?  "#search-case-sensitive-checkbox")))
    (let ((wiki-files (vector->list (get-internal-dir "user-files/wiki"))))
        (collect-matching-wiki-pages text wiki-files is-regex? is-case-sensitive?))))


(define (wiki-file-name-match text file-path is-regex? is-case-sensitive?)
  (case-search (decode-uri file-path) text is-regex? is-case-sensitive?))

(define (case-search haystack needle is-regex? is-case-sensitive?)
    (let ((re (if is-regex?
               needle
               (escape-regex needle)))
          (remod (if is-case-sensitive?
                  "g"
                  "gi")))
      (str-match? haystack re remod)))

(define (wiki-file-text-match text file-path is-regex? is-case-sensitive?)
  (if (eqv? (file-extension file-path) "fmk")
    (case-search (read-internal-text-file file-path) text is-regex? is-case-sensitive?)
   #f
  ))

(define (collect-matching-wiki-pages text file-list is-regex? is-case-sensitive?)
  (if (eqv? file-list '())
      '()
      (let ((current-filename (car file-list)))
        (if
          (or
            (wiki-file-name-match text current-filename is-regex? is-case-sensitive?)
            (wiki-file-text-match text current-filename is-regex? is-case-sensitive?))
           (cons (decode-uri current-filename) (collect-matching-wiki-pages text (cdr file-list) is-regex? is-case-sensitive?))
           (collect-matching-wiki-pages text (cdr file-list) is-regex? is-case-sensitive?)
        ))))

(define (run-wiki-search)
  (if (eqv? (checkbox-checked? "#search-all-pages-checkbox") #t)
      (run-global-page-search))
      (run-current-page-search))

(define (run-global-page-search)
  (let ((search-term (% "#search-field" "val")))
    (if (eqv? search-term "")
      (display-search-results '())
      (display-search-results (find-matching-wiki-pages search-term)))))

(define (run-current-page-search)
  (if (in-editor?)
    (run-editor-search)
    (run-page-search)))


(define page-search-results '())
(define page-search-index #f)
(define (search-result-handler result)
  (let ((nresults (vector-length result)))
      (if (eqv? nresults 0)
        (begin
          (set! page-search-results '())
          (set! page-search-index #f))
        (begin
          (set! page-search-results result)
          (if (checkbox-checked? "#search-backward-checkbox")
            (set! page-search-index (- nresults 1))
            (set! page-search-index 0))
          (display-page-search-result)
          ))))

(define (#find-next-button_click)
  (if (in-editor?)
    (run-editor-search)
    (page-search-next-result)))

(define (page-search-next-result-forward)
  (set! page-search-index (+ 1 page-search-index))
  (if (>= page-search-index (vector-length page-search-results))
        (if (checkbox-checked? "#search-wrap-checkbox")
            (set! page-search-index 0)
            (begin
              (alert "No more results.")
              (set! page-search-index (- page-search-index 1))
            )))
  (display-page-search-result))

(define (page-search-next-result-backward)
  (set! page-search-index (- page-search-index 1))
  (if (< page-search-index 0)
        (if (checkbox-checked? "#search-wrap-checkbox")
            (set! page-search-index (- (vector-length page-search-results) 1))
            (begin
              (alert "No more results.")
              (set! page-search-index 0)
            )))
  (display-page-search-result))

(define (page-search-next-result)
(if (eqv? page-search-index #f)
  (alert "No search results.")
  (if (checkbox-checked? "#search-backward-checkbox")
    (page-search-next-result-backward)
    (page-search-next-result-forward))))

(define (display-page-search-result)
  (if (eqv? page-search-index #f)
    (alert "No search results.")
    (begin
      (let ((result (vector-ref page-search-results page-search-index)))
        (% ".wiki-page-content mark" "removeClass" "activeSearchResult")
        (% result "addClass" "activeSearchResult")
        (scroll-into-view result)))))

(define (run-page-search)
  (let ((content-id (<< "#wiki-content-" (encode-base-32 current-title)
    " .wiki-page-content")))
    (html-page-search content-id
        (% "#search-field" "val")
        (checkbox-checked? "#search-case-sensitive-checkbox")
        (checkbox-checked? "#search-regex-checkbox")
        search-result-handler
      )
))


(define (in-editor?)
  (let ((page-type (cadr (car wiki-history-list))))
  (if (eqv? page-type "editor")
    #t
    #f)))


(define (run-editor-search)
  (let ((search-lemma (% "#search-field" "val")))
    (if (eqv? search-lemma "")
      #t
    (let ((cursor-direction
        (if (eqv? (checkbox-checked? "#search-backward-checkbox") #t)
          "from"
          "to")))
      (if (eqv? (cm-find current-editor search-lemma
      (cm-editor-get-cursor-position current-editor cursor-direction)
      (not (checkbox-checked? "#search-case-sensitive-checkbox"))
      (checkbox-checked? "#search-regex-checkbox")
      (checkbox-checked? "#search-backward-checkbox")
      (checkbox-checked? "#search-wrap-checkbox")
       ) #f)
       (alert "Not found.")))

))
(focus-find))

(define (focus-find)
  (timer (lambda()
    (% "#search-field" "focus")) 0.1))


(define (#wiki-incoming-links-button_click ev)
  (let ((matching-pages (collect-linked-pages current-title (vector->list (get-internal-dir "user-files/wiki")))))
    (display-incoming-links matching-pages)))

(define (display-incoming-links matching-pages)
  (if (eqv? (length matching-pages) 0)
    (alert "No other pages link here.")
    (begin
      (% "#wiki-incoming-links" "remove")
      (build-fronkensteen-dialog "#wiki-incoming-links" "Pages That Link Here" (menu-list (render-incoming-links matching-pages)) "20em" "20em")
      (% ".wiki-incoming-link" "off" "click")
      (% ".wiki-incoming-link" "on" "click"
      (lambda (ev)
        (let ((target (js-ref ev "currentTarget")))
          (let ((title  (element-read-attribute target "target")))
              (display-wiki-page title #t))))))))

(define (render-incoming-links matching-pages)
  (if (eqv? matching-pages '())
      ""
      (let ((page-name (file-basename-no-extension (car matching-pages))))
        (<< (menulist-item (<< ".wiki-incoming-link!target='" page-name "'" ) page-name) (render-incoming-links (cdr matching-pages))))))

(define (collect-linked-pages title page-list)
    (collect-matching-wiki-pages (<< "[link " title) page-list #f #t))

(define (collect-menu-pages title page-list)
        (collect-matching-wiki-pages (<< "\\[menu[\\s\\S]*" title "[\\s\\S]*menu\\]") page-list #t #t))

(define (collect-include-pages title page-list)
        (collect-matching-wiki-pages (<< "\\[\\!include[\\s\\S]*" title "[\\s\\S]*include\\!\\]") page-list #t #t))
