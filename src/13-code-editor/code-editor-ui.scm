; UI for the internal code editor.
; Copyright 2019, 2020 by Anthony W. Hursh.
; MIT License.

(define (fronkensteen-editor-controls) ; creates the controls for code editors.
    (dv "#fronkensteen-editor-controls"
      (span ".fronkensteen-editor-button-group"
      (<<
        "Title:&nbsp;"
        (input "#fronkensteen-editor-page-title!type='text'!size='20'")
        (button "#fronkensteen-editor-save-and-close-button.fronkensteen-editor-button!title='Save and Close'"
          (iconic-icon "check"))
        (button "#fronkensteen-editor-save-button.fronkensteen-editor-button!title='Save'"
          (iconic-icon "device-floppy"))
          (button "#fronkensteen-editor-close-button.fronkensteen-editor-button!title='Close without Saving'"
            (iconic-icon "circle-x"))
        (button "#fronkensteen-editor-undo-button.fronkensteen-editor-button!title='Undo'"
            (iconic-icon "action-undo"))
        (button "#fronkensteen-editor-redo-button.fronkensteen-editor-button!title='Redo'"
            (iconic-icon "action-redo"))
        (button "#fronkensteen-editor-preview-button.fronkensteen-editor-button!title='Preview'"
            (iconic-icon "eye"))
            (button "#fronkensteen-editor-menu-button.fronkensteen-editor-button!title='Insert Menu'"
                (iconic-icon "menu"))
        (button "#fronkensteen-editor-bold-button.fronkensteen-editor-button!title='Bold'"
            (iconic-icon "bold"))
        (button "#fronkensteen-editor-italic-button.fronkensteen-editor-button!title='Italic'"
            (iconic-icon "italic"))
      (button "#fronkensteen-editor-link-button.fronkensteen-editor-button!title='Link'"
          (iconic-icon "link-intact"))
        (button "#fronkensteen-editor-block-quote-button.fronkensteen-editor-button!title='Block quote'"
            (iconic-icon "double-quote-serif-right"))
        (button "#fronkensteen-editor-code-button.fronkensteen-editor-button!title='Source code'"
            (iconic-icon  "code"))
        (button "#fronkensteen-editor-poetry-button.fronkensteen-editor-button!title='Poetry/song lyrics'"
            (iconic-icon "musical-note"))

        (button "#fronkensteen-editor-center-button.fronkensteen-editor-button!title='Center'"
            (iconic-icon  "align-center"))
        (button "#fronkensteen-editor-justify-button.fronkensteen-editor-button!title='Justify'"
            (iconic-icon "justify-center"))

        (button "#fronkensteen-editor-align-right-button.fronkensteen-editor-button!title='Align right'"
            (iconic-icon "align-right"))

        (button "#fronkensteen-editor-align-left-button.fronkensteen-editor-button!title='Align left'"
            (iconic-icon "align-left"))

        (button "#fronkensteen-editor-comment-button.fronkensteen-editor-button!title='Mark as comment'"
            (iconic-icon "comment-square"))

        (button "#fronkensteen-editor-footnote-button.fronkensteen-editor-button!title='Footnote'"
            (iconic-icon  "paperclip"))
        (button "#fronkensteen-editor-doc-button.fronkensteen-editor-button!title='See More Tags'" (iconic-icon "book"))
        (button "#fronkensteen-editor-lambda-button.fronkensteen-editor-button!title='Script Tools'" (iconic-icon "lambda"))
        (button "#fronkensteen-editor-history-button.fronkensteen-editor-button!title='Show History'" (iconic-icon "clock"))
        (button "#fronkensteen-editor-fullscreen-button.fronkensteen-editor-button!title='Enter distraction-free (fullscreen) mode'" (iconic-icon "fullscreen-enter"))


      ))
    ))

(define (fronkensteen-editor-search-toolbar)
 (<<
   "&nbsp;&nbsp;Find:"
   (input "#code-editor-find-field!type='text'")
   (button "#fronkensteen-editor-find-button.fronkensteen-editor-button!title='Find'" "Find")
   "&nbsp;&nbsp;Replace with:"
   (input "#code-editor-replace-field!type='text'")
   (button "#fronkensteen-editor-replace-button.fronkensteen-editor-button!title='Replace'" "Replace")
   (input "#fronkensteen-editor-search-case-sensitive.fronkensteen-editor-search-option!type='checkbox'")
   "&nbsp;case-sensitive&nbsp;&nbsp;"
   (input "#fronkensteen-editor-search-regex.fronkensteen-editor-search-option!type='checkbox'")
   "&nbsp;regex&nbsp;&nbsp;"
   (input "#fronkensteen-editor-search-backward.fronkensteen-editor-search-option!type='checkbox'")
   "&nbsp;search backward"
   )
)
