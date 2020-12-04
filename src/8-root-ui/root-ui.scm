; root-ui.scm
; Copyright 2019-2020 by Anthony W. Hursh
; MIT license.


(define window (window-object))
(define document (document-object))

(define (hide-and-resize id)
  (% id "hide")
  (resize-content))

(define (show-and-resize id)
  (% id "show")
  (resize-content))

(define (fronkensteen-toast text horizontal-position vertical-position delay)
  (let ((id (<< "#" (no-dash-uuid))))
    (% "body" "append" (dv (<< id ".fronkensteen-toast") text))
    (display-toast id horizontal-position vertical-position delay)
  ))


(define (build-fronkensteen-dialog id title text width height)
  (if (element-exists? id)
    (center-element id)
    (begin
    (% "#fronkensteen-content-container" "append"
      (dv (<< id ".fronkensteen-dialog!style='width:" width "; height: " height ";'")
        (<<
          (dv (<< id "-titlebar" ".fronkensteen-dialog-title")
            (<< title
              (span (<< id "-close-button.fronkensteen-dialog-button.icon") (i ".fas.fa-times-circle" ""))
              ))
          (dv (<< id "-body.fronkensteen-dialog-body") (dv (<< id "-content.fronkensteen-dialog-content") text)))))
  (set-draggable! (scheme->json `(("element" . ,id) ("dragitem" . ,(<< id "-titlebar")) ("closebutton" . ,(<< id "-close-button")) ("width" . ,width) (height . ,height))))
  (center-element id)
  (wire-ui))))

  (define (.fronkensteen-dialog-title_click ev)
    (% ".fronkensteen-dialog" "css" "z-index" "1")
      (let ((target (js-ref ev "currentTarget")))
        (let ((id  (element-read-attribute target "id")))
          (% (% (<< "#" id) "parent")  "css" "z-index" "10000"))))



  (define (show-mini-repl)
      (let ((repl-history (get-local-storage-item "repl-history")))

      (if (element-exists? "#fronkensteen-repl")
        #t
      (begin
        (build-fronkensteen-dialog "#fronkensteen-repl" "Scheme Mini-REPL"
          (<<
            (dv
              (<<
                (button "#repl-eval-button!title='Evaluate selection or expression before cursor'" "Eval Expr Before Cursor")
                (button "#repl-eval-buffer-button!title='Evaluate entire buffer'" "Eval Entire Buffer")

                (button "#repl-clear-button!title='Clear REPL history'" "Clear")))
            (textarea "#repl-input" "")
            ) "40em" "20em")
            (init-cm-editor! "#repl-input" "scheme")
            (if (eqv? repl-history #f)
              (cm-editor-set-text "#repl-input" "")
              (cm-editor-set-text "#repl-input" repl-history))
            (wire-ui)))))

(define (#repl-clear-button_click ev)
  (cm-editor-set-text "#repl-input" "")
  (set-local-storage-item! "repl-history" ""))

(define (#repl-eval-button_click ev)
  (cm-editor-eval-selection-or-expr-before-cursor! "#repl-input")
  (set-local-storage-item! "repl-history" (cm-editor-get-text "#repl-input")
  ))

  (define (#repl-eval-buffer-button_click ev)
    (cm-eval-editor-buffer! "#repl-input")
    (set-local-storage-item! "repl-history" (cm-editor-get-text "#repl-input")
    ))
