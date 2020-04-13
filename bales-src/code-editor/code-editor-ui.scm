; UI for the internal code editor.
; Copyright 2019, 2020 by Anthony W. Hursh.
; MIT License.

(define (fronkensteen-editor-controls) ; creates the controls for code editors.
    (dv "#fronkensteen-editor-controls"
      (<<
        (button "#fronkensteen-editor-hide-button.fronkensteen-editor-button!title='Hide Editor'"
          (fa-icon "s" "door-open"))
        (button "#fronkensteen-editor-save-world-button.fronkensteen-editor-button!title='Save workspace'"
               (fa-icon "s" "save"))

        (button "#fronkensteen-editor-reload-world-button.fronkensteen-editor-button!title='Reload workspace'"
                      (fa-icon "s" "sync"))
        (button "#fronkensteen-editor-save-button.fronkensteen-editor-mode-button.fronkensteen-editor-basic-button.fronkensteen-editor-button!title='Update File'"
          (fa-icon "s" "check"))
          (button "#fronkensteen-editor-close-button.fronkensteen-editor-mode-button.fronkensteen-editor-basic-button.fronkensteen-editor-button!title='Close File Without Updating'"
            (fa-icon "s" "times-circle"))
          (button "#fronkensteen-editor-delete-file-button.fronkensteen-editor-basic-button.fronkensteen-editor-button!title='Delete File'"
              (fa-icon "s" "trash"))
          (button "#fronkensteen-editor-import-file-button.fronkensteen-editor-basic-button.fronkensteen-editor-button!title='Import File'"
                  (fa-icon "s" "file-import"))
          (button "#fronkensteen-editor-export-file-button.fronkensteen-editor-basic-button.fronkensteen-editor-button!title='Export File'"
                  (fa-icon "s" "file-export"))
        (button "#fronkensteen-editor-new-file-button.fronkensteen-editor-button!title='New File'"
          (fa-icon "s" "plus"))
        (button "#fronkensteen-editor-scheme-run-button.fronkensteen-editor-button.fronkensteen-editor-mode-button.fronkensteen-editor-scheme-button!title='Evaluate Entire Buffer'"
            (fa-icon "s" "running"))
        (button "#fronkensteen-editor-scheme-eval-button.fronkensteen-editor-button.fronkensteen-editor-mode-button.fronkensteen-editor-scheme-button!title='Evaluate Current Selection or Expression Preceding Cursor'"  (fa-icon "s" "walking"))
        (button "#fronkensteen-editor-javascript-eval-button.fronkensteen-editor-button.fronkensteen-editor-mode-button.fronkensteen-editor-javascript-button!title='Evaluate Selected JavaScript'"  (fa-icon "s" "walking"))
        (button "#fronkensteen-editor-scheme-doc-button.fronkensteen-editor-button.fronkensteen-editor-basic-button!title='Check Docs'" (fa-icon "s" "book"))
        (button "#fronkensteen-editor-bale-manager-button.fronkensteen-editor-button.fronkensteen-editor-basic-button!title='Show Bale Manager'" (fa-icon "s" "box"))

        (span "&nbsp;&nbsp;")

        (span "&nbsp;&nbsp;&nbsp;")
      )
    ))



(define (fronkensteen-editor-sidebar) ; creates the sidebar for code editors.
  (dv "#fronkensteen-editor-sidebar"
    (dv "#fronkensteen-editor-sidebar-wrapper"
    (<<
        (dv "#fronkensteen-editor-file-controls"
          (select "#fronkensteen-editor-current-filename" ""))
        (dv "#fronkensteen-editor-current-file-list" "")

          ))))


(define (fronkensteen-editor-workspace) ; creates the container for code editors.
  (dv "#fronkensteen-editor-workspace" ""))

(define (fronkensteen-editor-find-and-replace)
  (dv "#fronkensteen-editor-find-and-replace" (<<
    (input "#fronkensteen-editor-find-input!type='text'!size='15'")
    (button "#fronkensteen-editor-find-button.fronkensteen-editor-button!title='Find'" "Find")
    (input "#fronkensteen-editor-replace-input!type='text'!size='15'")
    (button "#fronkensteen-editor-replace-button.fronkensteen-editor-button!title='Replace'" "Replace")
    (button "#fronkensteen-editor-replace-all-button.fronkensteen-editor-button!title='Replace All'" "Replace All")
    (input "#fronkensteen-editor-search-files-input!type='text'!size='15'")
    (button "#fronkensteen-editor-search-files-button.fronkensteen-editor-button!title='Search Project'" "Search Entire Project")
    (input "#fronkensteen-editor-find-ignorecase!type='checkbox'!title='Ignore case'")
    (span ".smallfont" "Aa&nbsp;&nbsp;")
    (input "#fronkensteen-editor-find-regex!type='checkbox'!title='Search for regex'")
    (span ".smallfont" "/a+/&nbsp;&nbsp;")
    (input "#fronkensteen-editor-find-searchbackward!type='checkbox'!title='Search backward'")
    (span ".smallfont" "Backward&nbsp;&nbsp;")

    ))
)
(define (init-code-editor)
  (add-ui-panel "#fronkensteen-code-editor"
    (<<
      (fronkensteen-editor-controls)
      (fronkensteen-editor-sidebar)
      (fronkensteen-editor-workspace)
      (fronkensteen-editor-find-and-replace)))

  (init-bale-manager))
