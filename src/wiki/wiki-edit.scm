(define current-editor #f)


(define (#fronkensteen-wiki-edit-button_click ev)
    (edit-wiki-page current-title))


(define (edit-wiki-page title)
  (% "#wiki-page-title" "hide")
  (% "#wiki-editor-page-title" "show")
  (% "#wiki-editor-page-title" "val" title)
  (let ((content-name (<< "#wiki-editor-" (encode-base-32 title))))
    (if (element-exists? content-name)
        (show-editor content-name (<< content-name "-textarea") title)
        (construct-wiki-editor content-name title))))

(define (construct-wiki-editor content-name title)
  (let ((filename (wiki-data-path title)))
    (let ((extension (file-extension filename))
          (textarea-id (<< content-name "-textarea")))
      (if (is-text-file? extension)
            (begin
                (% "#fronkensteen-content" "append" (dv (<< content-name  ".wiki-page-wrapper!tabindex='-1'") (dv (<< content-name "-body.wiki-editor.wiki-content")
              (textarea (<< textarea-id "!rows='25'!cols='80'") "") )))
              (activate-wiki-editor content-name title filename textarea-id))
              (alert "Sorry, no editor for this file type at this time. Contributions welcome!")))))

(define (#fronkensteen-wiki-new-page-button_click)
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
  (show-bottom-toolbar "#editor-control-bar")
  (% ".editor-search" "show")
  (set! current-editor textarea-id)
  (% ".wiki-page-wrapper" "hide")
  (% content-name "show")
  (% "#wiki-page-title" "hide")
  (% "#wiki-editor-page-title" "show")
  (% "#wiki-editor-page-title" "val" title)
  (timer (lambda ()
    (% content-name "focus")) 0.5)
  (cm-editor-show current-editor)
;  (% "#fronkensteen-editor-page-title" "val" title)
  (add-wiki-history title "editor")
  (enable-wiki-nav-buttons)
)

(define (#fronkensteen-editor-fullscreen-button_click)
  (request-fullscreen))


(define (#fronkensteen-editor-close-button_click)
  (if (confirm "Close without saving? Are you sure?")
    (fronkensteen-editor-close-and-display-page)))



(define (#fronkensteen-editor-doc-button_click)
    (build-fronkensteen-dialog "#fronkensteen-editor-docs" "Available Tags" (fronkenmark (
      retrieve-wiki-data "docs/2-Fronkenmark Text Formatting"
      ) #t #t) "40em" "20em"))

(define (fronkensteen-editor-close-and-display-page)
    (let ((title (caar wiki-history-list)))
      (close-editor title)
      (display-wiki-page title #t)))

(define (#fronkensteen-editor-save-and-close-button_click)
  (#fronkensteen-editor-save-button_click)
  (fronkensteen-editor-close-and-display-page))

  (define (#fronkensteen-editor-save-button_click)
    (if (eqv? current-editor #f)
        #f
       (let ((title (% "#wiki-editor-page-title" "val")))
        (if (eqv? title "")
          (alert "No title specified!")
          (begin
            (write-internal-text-file (wiki-data-path title)
              (cm-editor-get-text current-editor))
            (check-editor-title-change title)
            (make-page-dirty title)
            )
    ))))


(define (check-editor-title-change new-title)
  (console-log "check-editor-title-change")
  (let ((old-title (caar wiki-history-list)))
    (if (not (eqv? new-title old-title))
        (begin
           (alert "Title has changed. Renaming...")
            (let ((old-filename (wiki-data-path old-title))
                  (new-filename (wiki-data-path new-title)))
              (let ((old-code (encode-base-32 old-title))
                    (new-code (encode-base-32 new-title)))
              (delete-internal-file old-filename)
              (set! wiki-history-list
                (replace-history old-title new-title wiki-history-list))
              (% (<< "#wiki-content-" old-code) "remove")
              (% (<< "#wiki-editor-" old-code) "attr" "id" (<< "#wiki-editor-" new-code))
              (% (<< "#wiki-editor-" old-code "-body") "attr" "id" (<< "#wiki-editor-" new-code "-body"))
              (% (<< "#wiki-editor-" old-code "-textarea") "attr" "id" (<< "#wiki-editor-" new-code "-textarea"))
              ))))))

(define (replace-history old-title new-title history-list)
  (if (eqv? history-list '())
    '()
   (if (eqv? (caar history-list) old-title)
    (cons (cons new-title (cdar history-list)) (replace-history old-title new-title (cdr history-list)))
    (cons (car history-list)  (replace-history old-title new-title (cdr history-list)))
)))

(define (close-editor title)
  (let ((content-name (<< "#wiki-editor-" (encode-base-32 title))))
    (if (element-exists? content-name)
      (begin
        (destroy-cm-editor! (<< content-name "-textarea"))
        (% content-name "remove")
        (set! wiki-history-list (cdr wiki-history-list))
        (hide-editor-popovers available-popovers)
        ))))
