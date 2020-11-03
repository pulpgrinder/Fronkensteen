(define (show-editor-preview text)
(% ".fronkensteen-wiki-content" "hide")
(% "#fronkensteen-wiki-preview" "show")
(% ".fronkensteen-toolbar" "hide")
(% "#fronkensteen-preview-toolbar" "show")
(% "#fronkensteen-wiki-preview" "html" (fronkenmark text #t #t)))


(define (#fronkensteen-preview-done-button_click)
  (% "#fronkensteen-wiki-preview" "hide")
  (% ".fronkensteen-wiki-content" "show")
  (% "#fronkensteen-preview-toolbar" "hide")
  (% ".fronkensteen-toolbar" "show")

  (let ((history-entry (car fronkensteen-wiki-history-list)))
    (let ((title (car history-entry))
          (type (cadr history-entry)))
          (if (eqv? type "page")
            (display-wiki-page title)
            (edit-wiki-page title)))))


(define (generate-wiki-toolbar)
  (<<
    (fronkensteen-toolbar-button "fronkensteen-wiki-save-work_space-button" "Save workspace" "device-floppy" "")
    (fronkensteen-toolbar-button "fronkensteen-wiki-home-button" "Return to Main page" "home" "")
    (fronkensteen-toolbar-button "fronkensteen-wiki-edit-button" "Edit this page" "pencil" "")
    (fronkensteen-toolbar-button "fronkensteen-wiki-history-button" "Show history" "clock" "")
    (fronkensteen-toolbar-button "fronkensteen-wiki-refresh-button" "Refresh this page" "action-redo" "")
    (fronkensteen-toolbar-button "fronkensteen-wiki-search-button" "Search" "magnifying-glass" "")
    (fronkensteen-toolbar-button "fronkensteen-wiki-new-page-button" "Create a new page" "plus" "")
    (fronkensteen-toolbar-button "fronkensteen-wiki-incoming-links-button" "What links here?" "transfer" "")
    (fronkensteen-toolbar-button "fronkensteen-show-repl-button" "Launch Mini-REPL" "lambda" "")
    (fronkensteen-toolbar-button "fronkensteen-wiki-import-file-button" "Import media file" "data-transfer-upload" "")
    (fronkensteen-toolbar-button "fronkensteen-wiki-special-button" "Special pages" "cog" "")
    (fronkensteen-toolbar-button "fronkensteen-wiki-docs-button" "Documentation" "book" "")
    (fronkensteen-toolbar-button "fronkensteen-wiki-delete-button" "Delete this page" "trash" "")
  ))
  (define (fronkensteen-toolbar-button id title icon-name text)
    (button (<< "#" id ".fronkensteen-toolbar-button" "!title='" title "'")
      (<<
        (if (eqv? icon-name "")
          ""
          (iconic-icon (<< "#" id "-icon!title='" title "'") icon-name)
        )
        text)))

(define (toggle-fullscreen)
  (if (is-fullscreen?)
    (begin
      (% "#fronkensteen-wiki-toolbars" "hide")
      (% "#fronkensteen-bottom-toolbars" "hide")
      (% "#fronkensteen-wiki-content-container" "css" "top" "0")
      (% "#fronkensteen-wiki-content-container" "css" "bottom" "0")
    )
    (begin
      (% "#fronkensteen-wiki-toolbars" "show")
      (% "#fronkensteen-bottom-toolbars" "show")
      (% "#fronkensteen-wiki-content-container" "css" "top" "2em")
      (% "#fronkensteen-wiki-content-container" "css" "bottom" "2em")
    )))
