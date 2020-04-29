; UI for the internal code editor.
; Copyright 2019, 2020 by Anthony W. Hursh.
; MIT License.

(define (fronkensteen-editor-controls) ; creates the controls for code editors.
    (dv "#fronkensteen-editor-controls"
      (span ".fronkensteen-editor-button-group"
      (<<
        (button "#fronkensteen-editor-hide-button.fronkensteen-editor-button!title='Hide Editor'"
          (fa-icon "s" "check"))
        (button "#fronkensteen-editor-save-world-button.fronkensteen-editor-button!title='Save workspace'"
               (fa-icon "s" "archive"))

        (button "#fronkensteen-editor-save-button.fronkensteen-editor-mode-button.fronkensteen-editor-basic-button.fronkensteen-editor-button!title='Update File'"
          (fa-icon "s" "save"))
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
        (button "#fronkensteen-editor-undo-button.fronkensteen-editor-button!title='Undo'"
            (fa-icon "s" "undo"))
        (button "#fronkensteen-editor-redo-button.fronkensteen-editor-button!title='Redo'"
            (fa-icon "s" "redo"))
        (button "#fronkensteen-editor-preview-button.fronkensteen-editor-button!title='Preview'"
            (fa-icon "s" "eye"))
        (button "#fronkensteen-editor-bold-button.fronkensteen-editor-button.fronkensteen-editor-mode-button.fronkensteen-editor-markdown-button!title='Bold'"
            (fa-icon "s" "bold"))
        (button "#fronkensteen-editor-italic-button.fronkensteen-editor-button.fronkensteen-editor-mode-button.fronkensteen-editor-markdown-button!title='Italic'"
            (fa-icon "s" "italic"))
        (button "#fronkensteen-editor-superscript-button.fronkensteen-editor-button.fronkensteen-editor-mode-button.fronkensteen-editor-markdown-button!title='Superscript'"
            (fa-icon "s" "superscript"))
        (button "#fronkensteen-editor-subscript-button.fronkensteen-editor-button.fronkensteen-editor-mode-button.fronkensteen-editor-markdown-button!title='Subscript'"
            (fa-icon "s" "subscript"))
        (button "#fronkensteen-editor-strikeout-button.fronkensteen-editor-button.fronkensteen-editor-mode-button.fronkensteen-editor-markdown-button!title='Strikeout'"
            (fa-icon "s" "strikethrough"))
        (button "#fronkensteen-editor-bullet-list-button.fronkensteen-editor-button.fronkensteen-editor-mode-button.fronkensteen-editor-markdown-button!title='Bulleted list'"
            (fa-icon "s" "list-ul"))
        (button "#fronkensteen-editor-number-list-button.fronkensteen-editor-button.fronkensteen-editor-mode-button.fronkensteen-editor-markdown-button!title='Numbered list'"
            (fa-icon "s" "list-ol"))
        (button "#fronkensteen-editor-block-quote-button.fronkensteen-editor-button.fronkensteen-editor-mode-button.fronkensteen-editor-markdown-button!title='Block quote'"
            (fa-icon "s" "quote-right"))

        (button "#fronkensteen-editor-h1-button.fronkensteen-editor-button.fronkensteen-editor-mode-button.fronkensteen-editor-markdown-button!title='Heading level 1'"
            "H1")

        (button "#fronkensteen-editor-h2-button.fronkensteen-editor-button.fronkensteen-editor-mode-button.fronkensteen-editor-markdown-button!title='Heading level 2'"
            "H2")
        (button "#fronkensteen-editor-h3-button.fronkensteen-editor-button.fronkensteen-editor-mode-button.fronkensteen-editor-markdown-button!title='Heading level 3'"
            "H3")
        (button "#fronkensteen-editor-code-button.fronkensteen-editor-button.fronkensteen-editor-mode-button.fronkensteen-editor-markdown-button!title='Source code'"
            (fa-icon "s" "code"))
        (button "#fronkensteen-editor-poetry-button.fronkensteen-editor-button.fronkensteen-editor-mode-button.fronkensteen-editor-markdown-button!title='Poetry/song lyrics'"
            (fa-icon "s" "music"))

        (button "#fronkensteen-editor-latex-button.fronkensteen-editor-button.fronkensteen-editor-mode-button.fronkensteen-editor-markdown-button!title='LaTeX math'"
            (fa-icon "s" "infinity"))
        (button "#fronkensteen-editor-center-button.fronkensteen-editor-button.fronkensteen-editor-mode-button.fronkensteen-editor-markdown-button!title='Center'"
            (fa-icon "s" "align-center"))
        (button "#fronkensteen-editor-justify-button.fronkensteen-editor-button.fronkensteen-editor-mode-button.fronkensteen-editor-markdown-button!title='Justify'"
            (fa-icon "s" "align-justify"))

        (button "#fronkensteen-editor-align-right-button.fronkensteen-editor-button.fronkensteen-editor-mode-button.fronkensteen-editor-markdown-button!title='Align right'"
            (fa-icon "s" "align-right"))

        (button "#fronkensteen-editor-align-left-button.fronkensteen-editor-button.fronkensteen-editor-mode-button.fronkensteen-editor-markdown-button!title='Align left'"
            (fa-icon "s" "align-left"))

        (button "#fronkensteen-editor-comment-button.fronkensteen-editor-button.fronkensteen-editor-mode-button.fronkensteen-editor-markdown-button!title='Mark as comment'"
            (fa-icon "s" "comments"))

        (button "#fronkensteen-editor-footnote-button.fronkensteen-editor-button.fronkensteen-editor-mode-button.fronkensteen-editor-markdown-button!title='Footnote'"
            (fa-icon "s" "asterisk"))

        (button "#fronkensteen-editor-scheme-run-button.fronkensteen-editor-button.fronkensteen-editor-mode-button.fronkensteen-editor-scheme-button!title='Evaluate Entire Buffer'"
            (fa-icon "s" "running"))
        (button "#fronkensteen-editor-scheme-eval-button.fronkensteen-editor-button.fronkensteen-editor-mode-button.fronkensteen-editor-scheme-button!title='Evaluate Current Selection or Expression Preceding Cursor'"  (fa-icon "s" "walking"))
        (button "#fronkensteen-editor-javascript-eval-button.fronkensteen-editor-button.fronkensteen-editor-mode-button.fronkensteen-editor-javascript-button!title='Evaluate Selected JavaScript'"  (fa-icon "s" "walking"))
        (button "#fronkensteen-editor-scheme-doc-button.fronkensteen-editor-button.fronkensteen-editor-basic-button!title='Check Docs'" (fa-icon "s" "book"))
        (button "#fronkensteen-editor-bale-manager-button.fronkensteen-editor-button.fronkensteen-editor-basic-button!title='Show Bale Manager'" (fa-icon "s" "box"))
      ))
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
    (button "#fronkensteen-editor-find-button.fronkensteen-editor-search-button!title='Find Next'" "Find Next")
    (input "#fronkensteen-editor-replace-input!type='text'!size='15'")
    (button "#fronkensteen-editor-replace-button.fronkensteen-editor-search-button!title='Replace'" "Replace")
    (button "#fronkensteen-editor-replace-and-find-button.fronkensteen-editor-search-button!title='Replace and Find'" "Replace and Find")
    (button "#fronkensteen-editor-replace-all-button.fronkensteen-editor-search-button!title='Replace All'" "Replace All")
    (input "#fronkensteen-editor-search-files-input!type='text'!size='15'")
    (button "#fronkensteen-editor-search-files-button.fronkensteen-editor-search-button!title='Search Project'" "Search Entire Project")
    (input "#fronkensteen-editor-find-ignorecase!type='checkbox'!title='Ignore case'")
    (span ".smallfont" "Aa&nbsp;&nbsp;")
    (input "#fronkensteen-editor-find-regex!type='checkbox'!title='Search for regex'")
    (span ".smallfont" "/a+/&nbsp;&nbsp;")
    (input "#fronkensteen-editor-find-searchbackward!type='checkbox'!title='Search backward'")
    (span ".smallfont" "Backward&nbsp;&nbsp;")
    (input "#fronkensteen-editor-find-wrap!type='checkbox'!title='Wrap'")
    (span ".smallfont" "Wrap&nbsp;&nbsp;")
    ))
)

(define (init-code-editor)
  (add-ui-panel "#fronkensteen-code-editor"
    (<<
    (dv "#fronkensteen-main-code-editor"
      (<<
      (fronkensteen-editor-controls)

      (fronkensteen-editor-workspace)
      (fronkensteen-editor-find-and-replace)))
      (fronkensteen-editor-sidebar)))
  (set-checkbox-checked! "#fronkensteen-editor-find-wrap" #t)
  (init-bale-manager))
