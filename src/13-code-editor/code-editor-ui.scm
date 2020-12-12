; UI for the internal code editor.
; Copyright 2019, 2020 by Anthony W. Hursh.
; MIT License.

(define available-popovers '())
(define (generate-editor-toolbar)
    (fronkensteen-bottom-toolbar "#fronkensteen-editor-control-bar"
    (topcoat-button-bar
    (<<
        (fronkensteen-toolbar-button "#fronkensteen-editor-save-and-close-button"
          "check" "Save and Close" "")
        (fronkensteen-toolbar-button "#fronkensteen-editor-save-button"
          "save" "Save without closing" "")
        (fronkensteen-toolbar-button "#fronkensteen-editor-close-button" "times-circle" "Close without saving" "")
        (fronkensteen-toolbar-button "#fronkensteen-editor-history-button.page-history-button" "clock" "Show history" "")
        (fronkensteen-toolbar-button "#fronkensteen-editor-search-button.page-history-button.wiki-search" "search" "Search" "")
        (fronkensteen-toolbar-button "#fronkensteen-editor-undo-button" "undo" "Undo" "")
        (fronkensteen-toolbar-button "#fronkensteen-editor-redo-button" "redo" "Redo" "")
        (fronkensteen-toolbar-button "#fronkensteen-editor-inline-style-button"
        "italic" "Inline styles" "")
        (fronkensteen-toolbar-button "#fronkensteen-editor-menu-button"
        "bars" "Insert menu" "")
        (fronkensteen-toolbar-button "#fronkensteen-editor-paragraph-style-button" "" "Paragraph formatting" "¶")
        (fronkensteen-toolbar-button "#fronkensteen-editor-character-button" "" "Special characters" "§")
        (fronkensteen-toolbar-button "#fronkensteen-editor-doc-button" "question" "See more tags" "")
        (fronkensteen-toolbar-button "#fronkensteen-editor-lambda-button.progtools-button" "" "Programming tools" "λ")
        (fronkensteen-toolbar-button "#fronkensteen-editor-fullscreen-button" "expand" "Enter distraction-free (fullscreen) mode" "")
      )
    ))
    (set-inline-formatting-popover)
    (set-paragraph-formatting-popover)
    (set-progtools-popover "#fronkensteen-editor-lambda-button")
    (wire-ui)
    )

(define (hide-editor-popovers popover-list)
  (if (eqv? popover-list '())
    #t
    (begin
      (hide-popover (car popover-list))
      (hide-editor-popovers (cdr popover-list))
    )
  )
)
(define (#fronkensteen-editor-inline-style-button_click)
  (toggle-popover "#fronkensteen-editor-inline-style-button")
  (wire-ui))


(define (#fronkensteen-editor-paragraph-style-button_click)
  (toggle-popover "#fronkensteen-editor-paragraph-style-button")
  (wire-ui))

(define (#fronkensteen-editor-lambda-button_click)
  (toggle-popover "#fronkensteen-editor-lambda-button")
  (wire-ui))


(define (set-inline-formatting-popover)
  (set! available-popovers (cons "#fronkensteen-editor-inline-style-button" available-popovers))
  (set-popover "#fronkensteen-editor-inline-style-button"
    (topcoat-button-bar
    (<<
      (fronkensteen-toolbar-button "#fronkensteen-editor-bold-button"
      "bold" "Bold" "")
      (fronkensteen-toolbar-button "#fronkensteen-editor-italic-button"
      "italic" "Italic" "")
      (fronkensteen-toolbar-button "#fronkensteen-editor-link-button"
       "link" "Link" "")
       (fronkensteen-toolbar-button "#fronkensteen-editor-superscript-button"
        "superscript" "Superscript" "")
        (fronkensteen-toolbar-button "#fronkensteen-editor-subscript-button"
         "subscript" "Subscript" "")
         (fronkensteen-toolbar-button "#fronkensteen-editor-underline-button"
          "underline" "Underline" "")
          (fronkensteen-toolbar-button "#fronkensteen-editor-inline-code-button.fronkensteen-editor-code-button" "code" "Format as source code" "")
          (fronkensteen-toolbar-button "#fronkensteen-editor-smallcaps-button"
           "" "Small Caps" "A")
           (fronkensteen-toolbar-button "#fronkensteen-editor-display-latex-button"
            "" "Format as display (large) LaTeX" " ∫ ")
           (fronkensteen-toolbar-button "#fronkensteen-editor-inline-latex-button"
            "square-root-alt" "Format as inline (small) LaTeX" "")
))
    "bottom"
        )

        )

(define (set-paragraph-formatting-popover)
(set! available-popovers (cons "#fronkensteen-editor-paragraph-style-button" available-popovers))
  (set-popover "#fronkensteen-editor-paragraph-style-button"
    (topcoat-button-bar
    (<<
      (fronkensteen-toolbar-button "#fronkensteen-editor-block-quote-button" "quote-left" "Block quote" "")
      (fronkensteen-toolbar-button "#fronkensteen-editor-poetry-button" "music" "Format as poetry/song lyrics" "")
      (fronkensteen-toolbar-button "#fronkensteen-editor-center-button"
         "align-center" "Align center" "")
      (fronkensteen-toolbar-button "#fronkensteen-editor-justify-button" "align-justify" "Justify" "")
      (fronkensteen-toolbar-button "#fronkensteen-editor-align-right-button" "align-right" "Align right" "")
      (fronkensteen-toolbar-button "#fronkensteen-editor-align-left-button" "align-left" "Align left" "")
      (fronkensteen-toolbar-button "#fronkensteen-editor-paragraph-code-button.fronkensteen-editor-code-button" "code" "Format as source code" "")
      (fronkensteen-toolbar-button "#fronkensteen-editor-comment-button" "comment" "Mark as comment" "")
      (fronkensteen-toolbar-button "#fronkensteen-editor-footnote-button" "sticky-note" "Footnote" "")
))
    "bottom"
        ))

(define (set-progtools-popover button-id)
        (set! available-popovers (cons button-id available-popovers))
          (set-popover button-id
            (dv
              (<<
            (dv
            (<<
              (fronkensteen-toolbar-text-button "#fronkensteen-editor-scheme-button!style='width:150px;'"
              "Evaluate selected Scheme code (or expression before cursor)" "Eval Scheme")
              (fronkensteen-toolbar-text-button "#fronkensteen-editor-js-button!style='width:150px;'" "Execute selected JavaScript code" "Exec JS")
              (fronkensteen-toolbar-text-button "#fronkensteen-editor-repl-button.repl-button!style='width:150px;'" "Start Mini-REPL" "REPL")))
            (dv
              (<<
                  (fronkensteen-toolbar-text-button "#fronkensteen-editor-procdoc-button!style='width:150px;'" "Show documentation for selected procedure name" "Proc docs")
              (fronkensteen-toolbar-text-button "#fronkensteen-editor-procsource-button!style='width:150px;'" "Show source code for selected procedure name" "Proc source")
              (fronkensteen-toolbar-text-button "#fronkensteen-editor-procindex-button!style='width:150px;'" "Procedure index" "Proc index")))
              ))
              "bottom"))
