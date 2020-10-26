(define (show-editor-preview text)
(% ".fronkensteen-wiki-content" "hide")
(% "#fronkensteen-wiki-preview" "show")
(% ".fronkensteen-toolbar" "hide")
(% "#fronkensteen-preview-toolbar" "show")
(% "#fronkensteen-wiki-preview" "html" (fronkenmark text #t #t)))


(define (generate-wiki-toolbar)
  (<<
    (fronkensteen-toolbar-button "fronkensteen-wiki-edit-button" "Edit this page" "pencil" "")
    (fronkensteen-toolbar-button "fronkensteen-wiki-history-button" "Show history" "clock" "")
    (fronkensteen-toolbar-button "fronkensteen-wiki-refresh-button" "Refresh this page" "action-redo" "")
    (fronkensteen-toolbar-button "fronkensteen-wiki-search-button" "Create a new page" "magnifying-glass" "")
    (fronkensteen-toolbar-button "fronkensteen-wiki-new-page-button" "Create a new page" "plus" "")
    (fronkensteen-toolbar-button "fronkensteen-wiki-incoming-links-button" "What links here?" "transfer" "")
    (fronkensteen-toolbar-button "fronkensteen-wiki-save-work_space-button" "Save workspace" "data-transfer-download" "")
    (fronkensteen-toolbar-button "fronkensteen-wiki-import-file-button" "Import media file" "data-transfer-upload" "")
    (fronkensteen-toolbar-button "fronkensteen-wiki-special-button" "Special pages" "cog" "")
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
