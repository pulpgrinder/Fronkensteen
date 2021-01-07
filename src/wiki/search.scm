
(define (search-hash-tag hash-tag)
    (show-and-resize "fronkensteen-search-bar-container")
    (% "#search-field" "val" hash-tag)
    (display-search-results (find-matching-wiki-pages hash-tag)))

(define (.wiki-search_click)
  (show-and-resize "#fronkensteen-search-bar-container")
  (run-wiki-search)
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
      (input "#search-field!type='text'!placeholder='Find'!autocorrect='off'!autocapitalize='none'")
      (button "#find-next-button" "Find Next" )
      (button "#find-previous-button" "Find Previous" )
      "&nbsp;"
      "&nbsp;"
      (input "#replace-field.editor-search.fronkensteen-edit-replace!type='text'!placeholder='Replace'!autocorrect='off'!autocapitalize='none'")

      (button "#replace-button.fronkensteen-edit-replace.editor-search" "Replace")
      (button "#replace-all-button.fronkensteen-edit-replace.editor-search" "Replace All")
      (input "#search-all-pages-checkbox!type='checkbox'")
      "All pages &nbsp;"
      (input "#search-case-sensitive-checkbox!type='checkbox'")
      "Case-sensitive&nbsp;"
      (input "#search-regex-checkbox!type='checkbox'")
      "Regex&nbsp;")))


(define (#close-search-bar_click)
    (% ".fronkensteen-page-content mark" "removeClass" "activeSearchResult")
    (remove-search-marks ".fronkensteen-page-content")
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
        (display-wiki-page wiki-title)
        (run-wiki-search)

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


(define (#replace-button_click)
  (if (in-editor?)
  (begin
  (if (> (string-length (cm-editor-get-selected-text (get-tos-page-id))) 0)
    (cm-editor-replace-selected-text (get-tos-page-id) (% "#replace-field" "val")))
  (run-editor-search "after"))))

(define (#replace-all-button_click)
  (if (in-editor?)
    (let ((re
              (if (checkbox-checked?  "#search-regex-checkbox")
                (escape-regex (% "#search-field" "val"))
                (% "#search-field" "val")))
          (remod
            (if (checkbox-checked?  "#search-case-sensitive-checkbox")
                "g"
                "gi"))
          (editor-id (get-tos-page-id)))
            (cm-editor-set-text editor-id (str-replace-re (cm-editor-get-text editor-id) re remod (% "#replace-field" "val"))))))

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
  (set! last-search-lemma #f)
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
    (run-editor-search "start")
    (run-page-search)))


(define page-search-results '())
(define page-search-index #f)


(define (search-result-handler result)
  (let ((nresults (vector-length result)))
      (if (eqv? nresults 0)
        (begin
          (set! page-search-results '())
          (set! page-search-index #f)
          (fronkensteen-toast "Not found." "c" "c" "2"))
        (begin
          (set! page-search-results result)
          (set! page-search-index 0)
          (display-page-search-result)
          ))))

(define (#do-search-button_click)
    (run-wiki-search))

(define (#find-next-button_click)
  (if (in-editor?)
    (run-editor-search "after")
    (run-current-page-search)))

(define (#find-previous-button_click)
  (if (in-editor?)
    (run-editor-search "before")
    (page-search-previous-result)))

(define (page-search-next-result)
(if (eqv? page-search-index #f)
  (fronkensteen-toast "No search results." "c" "c" "3")
  (begin
  (set! page-search-index (+ 1 page-search-index))
  (if (>= page-search-index (vector-length page-search-results))
    (begin
      (set! page-search-index 0)
      (fronkensteen-toast "Wrapped." "c" "c" "1")))
  (display-page-search-result))))

(define (page-search-previous-result)
  (if (eqv? page-search-index #f)
    (fronkensteen-toast "No search results." "c" "c" "2")
    (begin
    (set! page-search-index (- page-search-index 1))
    (if (< page-search-index 0)
      (begin
        (set! page-search-index (- (vector-length page-search-results) 1))
        (fronkensteen-toast "Wrapped." "c" "c" "1")))
    (display-page-search-result))))


(define (display-page-search-result)
  (if (eqv? page-search-index #f)
    (begin
      (fronkensteen-toast "No search results." "c" "c" "2"))
    (begin
      (let ((result (vector-ref page-search-results page-search-index)))
        (% ".fronkensteen-page-content mark" "removeClass" "activeSearchResult")
        (% result "addClass" "activeSearchResult")
        (scroll-into-view result))
        )))

(define last-search-lemma #f)
(define (run-page-search)
  (let ((search-lemma (% "#search-field" "val")))
    (if (eqv? search-lemma "")
      #t
    (if (eqv? search-lemma last-search-lemma)
      (page-search-next-result)
      (let ((content-id (<< (get-history-entry-id (car fronkensteen-page-history-list)) "-wrapper"
        " .fronkensteen-page-content")))
        (set! last-search-lemma search-lemma)
        (html-page-search content-id
            search-lemma
            (checkbox-checked? "#search-case-sensitive-checkbox")
          (checkbox-checked? "#search-regex-checkbox")
            search-result-handler
            ))))))


(define (in-editor?)
  (let ((page-type (cadr (car fronkensteen-page-history-list))))
  (if (eqv? page-type "editor")
    #t
    #f)))


(define (run-editor-search cursor-direction)
  (let ((search-lemma (% "#search-field" "val")))
    (if (eqv? search-lemma "")
      #t
      (let ((result (cm-find (get-tos-page-id) search-lemma cursor-direction
      (not (checkbox-checked? "#search-case-sensitive-checkbox"))
      (checkbox-checked? "#search-regex-checkbox")
      (if (or (eqv? cursor-direction "to") (eqv? cursor-direction "start"))
        #f
        #t
      )
      #t ; wrap
       ) #f))
       (if (eqv? result #f)
        (fronkensteen-toast "Not found." "c" "c" "2 "))
       (if (eqv? result "wrapped")
           (fronkensteen-toast "Wrapped." "c" "c" "1"))
       )))
)


(define (#fronkensteen-page-incoming-links-button_click)
  (let ((matching-pages (collect-linked-pages (get-tos-page-title) (vector->list (get-internal-dir "user-files/wiki")))))
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
              (display-wiki-page title))))))))

(define (render-incoming-links matching-pages)
  (if (eqv? matching-pages '())
      ""
      (let ((page-name (file-basename-no-extension (car matching-pages))))
        (<< (menu-list-item (<< ".wiki-incoming-link!target='" page-name "'" ) page-name) (render-incoming-links (cdr matching-pages))))))

(define (collect-linked-pages title page-list)
    (collect-matching-wiki-pages (<< "[link " title) page-list #f #t))

(define (collect-menu-pages title page-list)
        (collect-matching-wiki-pages (<< "\\[menu[\\s\\S]*" title "[\\s\\S]*menu\\]") page-list #t #t))

(define (collect-include-pages title page-list)
        (collect-matching-wiki-pages (<< "\\[\\!include[\\s\\S]*" title "[\\s\\S]*include\\!\\]") page-list #t #t))
