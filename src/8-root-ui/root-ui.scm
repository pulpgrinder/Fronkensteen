; root-ui.scm
; Copyright 2019-2020 by Anthony W. Hursh
; MIT license.

(define panel-stack '())

(define active-panel #f)

(define (add-ui-panel id content)
  (% "#fronkensteen-wrapper" "append"
  (dv (<< id ".fronkensteen-panel!tabindex='-1'") content)))


; put the current panel on the history stack before replacing it
(define (show-ui-panel id)
  (push-browser-state (scheme->json `(("panel" . ,active-panel) ("hash" . ,(window-location-hash)))) "" "")
  (replace-ui-panel id))

; Just replace the current panel on the stack.
(define (replace-ui-panel id)
  (display-ui-panel id)
  (replace-browser-state (scheme->json `(("panel" . ,active-panel) ("hash" . ,(window-location-hash)))) "" ""))


; Just makes the specified panel visible, doesn't fool with the history stack.
(define (display-ui-panel id)
  (% ".fronkensteen-panel" "hide")
  (% id "show")
  (set! active-panel id)
  (timer (lambda()
      (% id "focus")
        ) .1)
)


(define (hide-ui-panel id)
  (% id "hide"))



(define (append-main-content content)
  (% "#fronkensteen-content" "append" content))

(define window (window-object))
(define document (document-object))

(define (pop-browser-state_handler state)
    (if (eqv? state #f)
        #f
        (let ((scheme-state (json->scheme state)))
          (let ((panel (assq "panel" scheme-state))
                (hash (assq "hash" scheme-state)))
                (if (eqv? panel #f)
                    #t
                    (display-ui-panel (cdr panel)))
                    ))))

(define (build-fronkensteen-dialog id title text width height)
  (if (element-exists? id)
    (center-element id)
    (begin
    (% "#fronkensteen-wrapper" "append"
      (dv (<< id ".fronkensteen-dialog!style='width:" width "; height: " height ";'")
        (<<
          (dv (<< id "-titlebar" ".fronkensteen-dialog-title")
            (<< title
              (button (<< id "-close-button.fronkensteen-dialog-button") (iconic-icon "circle-x"))
              ))
          (dv (<< id "-body.fronkensteen-dialog-body") (dv (<< id "-content.fronkensteen-dialog-content") text)))))
  (set-draggable! (scheme->json `(("element" . ,id) ("dragitem" . ,(<< id "-titlebar")) ("closebutton" . ,(<< id "-close-button")) ("width" . ,width) (height . ,height))))
  (center-element id))))

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

  (define (repl-clear-button_click ev)
    (cm-editor-set-text "#repl-input" "")
    (set-local-storage-item! "repl-history" ""))

  (define (repl-eval-button_click ev)
    (cm-editor-eval-selection-or-expr-before-cursor! "#repl-input")
    (set-local-storage-item! "repl-history" (cm-editor-get-text "#repl-input")
    ))

    (define (repl-eval-buffer-button_click ev)
      (cm-eval-editor-buffer! "#repl-input")
      (set-local-storage-item! "repl-history" (cm-editor-get-text "#repl-input")
      ))
