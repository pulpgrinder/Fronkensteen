(define (fronkensteen-documentation-procedure-field)
  (dv "#fronkensteen-documentation-toolbar" (<<
      (button "#fronkensteen-documentation-done-button.fronkensteen-editor-button!title='Done'" (fa-icon "s" "check"))
      (button "#fronkensteen-update-documentation-button.fronkensteen-editor-button!title='Save updated documentation'" (fa-icon "s" "save"))
      (button "#fronkensteen-export-documentation-button.fronkensteen-editor-button!title='Export documentation database'" (fa-icon "s" "file-export"))
      (button "#fronkensteen-rebuild-documentation-button.fronkensteen-editor-button!title='Rebuild documentation database'" (fa-icon "s" "database"))
        (span "&nbsp;&nbsp;Procedure name: ")
        (span "#fronkensteen-documentation-procedure-name" "")
        (span "&nbsp;&nbsp;")
        )
    ))

(define (fronkensteen-documentation-documentation-field)
  (textarea "#fronkensteen-documentation-documentation-text!rows='10'" "")
  )

(define (fronkensteen-documentation-definition-area)
 (dv
  (<<
    (dv "#fronkesteen-documentation-source-info"
      (<<
        (span "Defined in source file:&nbsp;")
        (span "#fronkensteen-documentation-source-file-name" "")
        (span "&nbsp;")
        (span "&nbsp;line:&nbsp;")
        (span "#fronkensteen-documentation-source-line-number" "") (button "#fronkensteen-edit-doc-source-file-button!style='float:right;'" "Open source file in editor")))

    (dv "#fronkensteen-documentation-definition-area-wrapper"
      (dv "#fronkensteen-documentation-definition-area" ""))

    )))

(define (documentation-display)
  (dv "#fronkensteen-documentation-display-area"
    (<<
      (fronkensteen-documentation-procedure-field)
      (fronkensteen-documentation-documentation-field)
      (fronkensteen-documentation-definition-area)
  )))

(define (documentation-search)
  (dv "#fronkensteen-documentation-search-area"
    (<<
      (dv (input "#documentation-search-field!type='text'"))
      (dv (<<
          (button "#fronkensteen-documentation-search-button.doc-search-button" "Search")
          (button "#fronkensteen-documentation-all-button.doc-search-button" "All")
          (button "#fronkensteen-documentation-undoc-button.doc-search-button" "Undocumented")

        ))
      (dv "#fronkensteen-documentation-search-results-wrapper"
      (dv "#fronkensteen-documentation-search-results" "")))))

(define (init-documentation)
  (add-ui-panel "#fronkensteen-documentation"
    (dv "#fronkensteen-documentation-wrapper"
  (<<
    (documentation-display)
    (documentation-search)
    ))
  ))
