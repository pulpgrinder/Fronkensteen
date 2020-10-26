(define current-editor #f)


(define (fronkensteen-wiki-edit-button_click ev)
    (edit-wiki-page current-title))


(define (edit-wiki-page title)
  (let ((content-name (<< "#fronkensteen-wiki-editor-" (encode-base-32 title))))
    (if (element-exists? content-name)
        (show-editor content-name (<< content-name "-textarea") title)
        (construct-wiki-editor content-name title))))

(define (construct-wiki-editor content-name title)
  (let ((filename (wiki-data-path title)))
    (let ((extension (file-extension filename))
          (textarea-id (<< content-name "-textarea")))
      (if (is-text-file? extension)
            (begin
              (% "#fronkensteen-wiki-content-container" "append" (dv (<< content-name  ".fronkensteen-wiki-content-wrapper!tabindex='-1'") (dv (<< content-name "-body.fronkensteen-wiki-editor.fronkensteen-wiki-content")
              (textarea (<< textarea-id "!rows='25'!cols='80'") "") )))
              (activate-wiki-editor content-name title filename textarea-id))
              (alert "Sorry, no editor for this file type at this time. Contributions welcome!")))))


(define (fronkensteen-wiki-new-page-button_click)
    (new-wiki-page))

(define (new-wiki-page)
  (let ((page-title (unique-page-title 1)))
    (edit-wiki-page page-title)))

(define (unique-page-title sequence)
  (let ((page-title (<< "Untitled " (number->string sequence))))
    (if (or (file-exists? (wiki-data-path page-title))
            (element-exists? (<< "#fronkensteen-wiki-editor-" (encode-base-32 page-title))))
        (unique-page-title (+ 1 sequence))
        page-title)))

(define (activate-wiki-editor content-name title filename textarea-id)
  (init-cm-editor! textarea-id "fronkenmark")
  (if (file-exists? filename)
    (cm-editor-set-text textarea-id (read-internal-text-file filename))
    (cm-editor-set-text textarea-id "(new page)")
  )
  (show-editor content-name textarea-id title)
  )

(define (show-editor content-name textarea-id title)
  (set! current-editor textarea-id)
  (% ".fronkensteen-wiki-content-wrapper" "hide")
  (% content-name "show")
  (timer (lambda ()
    (% content-name "focus")) 0.5)
  (cm-editor-show current-editor)
  (% ".fronkensteen-toolbar" "hide")
  (% "#fronkensteen-editor-toolbar" "show")
  (% "#fronkensteen-editor-page-title" "val" title)
  (add-wiki-history title "editor")
)

(define (fronkensteen-preview-done-button_click)
  (let ((history-entry (car fronkensteen-wiki-history-list)))
    (let ((title (car history-entry))
          (type (cadr history-entry)))
          (if (eqv? type "page")
            (display-wiki-page title)
            (edit-wiki-page title)))))

(define (fronkensteen-editor-close-button_click)
  (if (confirm "Close without saving? Are you sure?")
    (fronkensteen-editor-close-and-display-page)))


(define (fronkensteen-wiki-history-button_click)
  (show-wiki-history-dialog))

(define (show-wiki-history-dialog)
  (build-fronkensteen-dialog "#fronkensteen-history-dialog" "History"
  ;(dv "#fronkensteen-wiki-history-list-wrapper"
    (ul "#fronkensteen-wiki-history-list.round-list" "")
  ;)
    "20em" "20em")
  (display-wiki-history))

(define (fronkensteen-editor-doc-button_click)
    (build-fronkensteen-dialog "#fronkensteen-editor-docs" "Available Tags" (fronkenmark (
      retrieve-wiki-data "docs/Fronkenmark Text Formatting"
      ) #t #t) "40em" "20em"))

(define (fronkensteen-editor-close-and-display-page)
    (let ((title (caar fronkensteen-wiki-history-list)))
      (close-editor title)
      (display-wiki-page title)))

(define (fronkensteen-editor-save-and-close-button_click)
  (fronkensteen-editor-save-button_click)
  (fronkensteen-editor-close-and-display-page))

  (define (fronkensteen-editor-save-button_click)
    (if (eqv? current-editor #f)
        #f
       (let ((title (% "#fronkensteen-editor-page-title" "val")))
        (if (eqv? title "")
          (alert "No title specified!")
          (begin
            (console-log (<< "attempting to write " (wiki-data-path title)))
            (write-internal-text-file (wiki-data-path title)
              (cm-editor-get-text current-editor))
            (check-editor-title-change title)
            (make-page-dirty title)
            )
    ))))


(define (check-editor-title-change title)
  (let ((old-title (caar fronkensteen-wiki-history-list)))
    (if (not (eqv? title old-title))
        (begin
           (alert "Title has changed. Reopening.")
            (close-editor old-title)
            (let ((filename (wiki-data-path old-title)))
              (console-log (<<  "Attempting to delete " filename))
              (delete-internal-file filename)
              (set! fronkensteen-wiki-history-list (remove-wiki-history old-title "page" fronkensteen-wiki-history-list))
              )
            (edit-wiki-page title)))))

(define (close-editor title)
  (let ((content-name (<< "#fronkensteen-wiki-editor-" (encode-base-32 title))))
    (if (element-exists? content-name)
      (begin
        (destroy-cm-editor! (<< content-name "-textarea"))
        (% content-name "remove")
        (set! fronkensteen-wiki-history-list (cdr fronkensteen-wiki-history-list))
        (display-wiki-history)
        ))))
