
(define (#fronkensteen-page-edit-button_click ev)
    (edit-wiki-page (get-tos-page-title)))


(define (edit-wiki-page title)
  (let ((filename (wiki-data-path title)))
    (let ((extension (file-extension filename)))
      (if (is-text-file? extension)
          (edit-wiki-text-page title filename)
          (alert "Sorry, no editor for this file type at this time. Contributions welcome!")))))

(define (edit-wiki-text-page title data-path)
  (let ((content-id (<< "#editor-" (encode-base-32 data-path))))
    (let ((wrapper-id (<< content-id "-wrapper")))
    (if (not (element-exists? wrapper-id))
      (begin
        (create-generic-editor content-id title data-path generic-editor-file-reader generic-editor-file-writer generic-editor-file-close)
      ))
    (add-page-history title "editor" content-id)
    (display-history-tos)
  (if (element-visible? "#fronkensteen-search-bar-container")
    (run-wiki-search)))))


(define (#fronkensteen-wiki-new-page-button_click)
    (new-wiki-page))

(define (new-wiki-page)
  (let ((page-title (unique-page-title 1)))
    (edit-wiki-page page-title)))

(define (unique-page-title sequence)
  (let ((page-title (<< "Untitled " (number->string sequence))))
    (if (or (file-exists? (wiki-data-path page-title))
            (element-exists? (<< "#fronkensteen-page-editor-" (encode-base-32 page-title))))
        (unique-page-title (+ 1 sequence))
        page-title)))


(define (#fronkensteen-editor-fullscreen-button_click)
  (request-fullscreen))


(define (#fronkensteen-editor-close-button_click)
  (if (confirm "Close without saving? Are you sure?")
      (fronkensteen-wiki-editor-close-file)))

(define (fronkensteen-wiki-editor-close-file)
    (let ((editor-id (get-tos-page-id)))
      (close-generic-editor editor-id)
      (make-page-dirty (get-tos-page-id))
      (display-history-tos)))

(define (#fronkensteen-editor-doc-button_click)
    (build-fronkensteen-dialog "#fronkensteen-editor-docs" "Available Tags" (fronkenmark (
      retrieve-wiki-data "docs/2-Fronkenmark Text Formatting"
      ) #t #t) "40em" "20em"))


(define (#fronkensteen-editor-save-and-close-button_click)
  (#fronkensteen-editor-save-button_click)
  (fronkensteen-wiki-editor-close-file))

  (define (#fronkensteen-editor-save-button_click)
      (let ((editor-id (get-history-entry-id (car fronkensteen-page-history-list))))
        (save-generic-editor editor-id)))
