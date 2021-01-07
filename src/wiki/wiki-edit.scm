
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
        (create-generic-editor content-id title data-path generic-editor-file-reader generic-editor-file-writer close-wiki-editor)
      ))
    (add-page-history title "editor" content-id)
    (display-history-tos)
  (if (element-visible? "#fronkensteen-search-bar-container")
    (begin
      (% ".fronkensteen-edit-replace" "show")
      (run-wiki-search))))))


(define (#fronkensteen-page-new-page-button_click)
    (new-wiki-page))

(define (new-wiki-page)
  (let ((page-title (unique-page-title 1)))
    (let ((data-path (wiki-data-path page-title)))
        (write-internal-text-file data-path "")
        (edit-wiki-page page-title))))

(define (unique-page-title sequence)
  (let ((page-title (<< "Untitled " (number->string sequence))))
    (let ((data-path (wiki-data-path page-title)))
    (if (or (file-exists? data-path)
            (element-exists? (<< "#editor-" (encode-base-32 data-path))))
        (unique-page-title (+ 1 sequence))
        page-title))))


(define (#fronkensteen-editor-fullscreen-button_click)
  (request-fullscreen))


(define (#fronkensteen-editor-close-button_click)
  (if (confirm "Close without saving? Are you sure?")
      (begin
        (hide-cursor-controls)
        (fronkensteen-wiki-editor-close-file))))

(define (fronkensteen-wiki-editor-close-file)
    (let ((editor-id (get-tos-page-id)))
      (close-generic-editor editor-id)))

(define (close-wiki-editor editor-id)
   (let ((title (get-generic-editor-title editor-id)))
    (let ((content-id (<< "#id-" (encode-base-32 (wiki-data-path title)))))
        (make-page-dirty content-id)
        (if (file-exists? (wiki-data-path title))
          (display-wiki-page title)
          (display-history-tos)
          ))))

(define (#fronkensteen-editor-doc-button_click)
    (build-fronkensteen-dialog "#fronkensteen-editor-docs" "Available Tags"
      (dv  ".fronkensteen-dialog-text-block" (fronkenmark (
      retrieve-wiki-data "docs/2-Fronkenmark Text Formatting"
      ) #t #t)) "40em" "20em"))

(define (#fronkensteen-editor-save-and-close-button_click)
  (let ((editor-id (get-tos-page-id)))
    (let ((resource-path (get-generic-editor-resource-path editor-id))
          (resource-title (get-generic-editor-title editor-id))
          (new-title (% "#fronkensteen-editor-page-title" "val")))
      (#fronkensteen-editor-save-button_click)
      (hide-cursor-controls)
      (fronkensteen-wiki-editor-close-file)
      (if (is-wiki-path? resource-path)
        (display-wiki-page new-title)))))

  (define (#fronkensteen-editor-save-button_click)
      (let ((editor-id (get-tos-page-id)))
        (save-generic-editor editor-id)))
