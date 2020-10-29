(define (fronkensteen-editor-lambda-button_click)
  (if (element-exists? "#fronkensteen-lambda-dialog")
  #t
(begin
  (build-fronkensteen-dialog "#fronkensteen-lambda-dialog" "Script Tools"
    (<<
      (dv
        (<<
          (button "#lambda-eval-scheme-button!title='Evaluate Scheme selection or expression before cursor'" "Eval Scheme")
          (button "#lambda-eval-js-button!title='Evaluate JavaScript selection'" "Eval JavaScript")))
      (dv (<<
          (span "Procedure lookup: &nbsp;")
          (input "#lambda-proc-lookup!type='text'" "")
        ))
    (dv "#lambda-proc-display" "proc-display")
    (dv "#lambda-proc-def" "proc-def")) "40em" "20em")
    (load-lambda-proc-display)
   (wire-ui))))

(define (load-lambda-proc-display)
  "")
(define (lambda-eval-scheme-button_click ev)
  (if (not (eqv? current-editor #f))
    (cm-editor-eval-selection-or-expr-before-cursor! current-editor)
  ))

(define (lambda-eval-js-button_click ev)
  (if (not (eqv? current-editor #f))
    (cm-editor-eval-js-selection! current-editor)
  ))
