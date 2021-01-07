; remote-terminal.scm, copyright 2019-2020 by Anthony W. Hursh.
; Released under the same MIT license as the Fronkensteen system as a whole.

(define (remote-repl-terminal)
  (if (element-exists? "#fronkensteen-terminal")
    (show-ui-panel "#fronkensteen-terminal")
    (begin
      (add-ui-panel "#fronkensteen-terminal" "")
      (% "#fronkensteen-terminal" "html"
      (<<
        (dv
          (<<
            (button "#remote-eval-button" "Eval entire buffer")
            (button "#remote-eval-expression-button" "Eval selection or expression before cursor")
            (button "#remote-eval-done-button" "Done")))
        (dv ".fronkensteen-remote-terminal-wrapper"
          (textarea "#remote-terminal-code-input!autocorrect='off'!autocapitalize='off'!spellcheck='false'" ""))))
          (show-ui-panel "#fronkensteen-terminal")
          (wire-ui)
          (init-cm-editor! "#remote-terminal-code-input" "fronkenmark")
          (launch-remote-repl-terminal))))

(define (display-repl-result result)
  (cm-editor-replace-selected-text "#remote-terminal-code-input" (<< (cm-editor-get-selected-text "#remote-terminal-code-input") " ; " result)))

(define (#remote-eval-expression-button_click)
    (let ((selection (cm-editor-get-scheme-selection-or-expr-before-cursor! "#remote-terminal-code-input")))
    (remote-evaluate selection)))

(define (#remote-eval-button_click)
    (cm-editor-select-all "#remote-terminal-code-input")
    (remote-eval-expression-button_click))

(define (#remote-eval-done-button_click)
    (show-ui-panel "#fronkensteen-wiki-wrapper"))
