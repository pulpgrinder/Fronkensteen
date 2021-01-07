(define active-editor #f)

(define (hide-cursor-controls)
  (if (element-exists? "#cursordriver")
    (% "#cursordriver" "remove")))


(define (show-cursor-controls)
  (console-log "In show-cursor-controls")
  (if (element-exists? "#cursordriver")
    (% "#cursordriver" "remove"))
    (% "#fronkensteen-content-container" "append"
          (dv "#cursordriver.cursor-control-wrapper"
          (<<
             (dv (<<
                 (button "#cursorleft-button.cursorbutton!title='Move cursor left'" (fa-icon "" "long-arrow-alt-left" ""))
                 (button "#cursorright-button.cursorbutton!title='Move cursor right'" (fa-icon "" "long-arrow-alt-right" ""))
                 (button "#cursorhelp.cursorbutton!title='Help'" (fa-icon "" "question-circle" ""))
                 (button "#cursorclose.cursorbutton!title='Close'" (fa-icon "" "times-circle" ""))
               ))
              (dv (<<
                (button "#grow-word-left-button.cursorbutton!title='Expand selection left by one word'" (fa-icon "" "angle-double-left" ""))
                (button "#grow-char-left-button.cursorbutton!title='Expand selection left by one character'" (fa-icon "" "angle-left" ""))
                (button "#grow-char-right-button.cursorbutton!title='Expand selection right by one character'" (fa-icon "" "angle-right" ""))
                (button "#grow-word-right-button.cursorbutton!title='Expand selection right by one word'" (fa-icon "" "angle-double-right" ""))
                ))
              (dv (<<
                (button "#shrink-word-left-button.cursorbutton!title='Contract selection from left by one word'" (fa-icon "" "angle-double-right" ""))
                (button "#shrink-char-left-button.cursorbutton!title='Contract selection from left by one character'" (fa-icon "" "angle-right" ""))
                (button "#shrink-char-right-button.cursorbutton!title='Contract selection from right by one character'" (fa-icon "" "angle-left" ""))
                (button "#shrink-word-right-button.cursorbutton!title='Contract selection from right by one word'" (fa-icon "" "angle-double-left" ""))
                ))
              )))

   (set-draggable! "#cursordriver" "self" "#cursorclose" active-editor)
   (wire-ui))

(define (#cursordriver_click ev)
  (if (eqv? active-editor #f)
    #f
    (% active-editor "focus")))

(define (#cursorleft-button_click ev)
  (if (eqv? active-editor #f)
    #f
    (begin
      (% active-editor "focus")
      (cm-editor-arrow-key active-editor "left"))))

(define (#cursorright-button_click ev)
  (if (eqv? active-editor #f)
    #f
    (begin
      (% active-editor "focus")
      (cm-editor-arrow-key active-editor "right"))))

(define (#grow-char-left-button_click ev)
  (if (eqv? active-editor #f)
    #f
    (begin
      (% active-editor "focus")
      (cm-editor-grow-char active-editor "left"))))

(define (#grow-word-left-button_click ev)
  (if (eqv? active-editor #f)
    #f
    (begin
      (% active-editor "focus")
      (cm-editor-grow-word active-editor "left"))))

(define (#grow-char-right-button_click ev)
  (if (eqv? active-editor #f)
    #f
    (begin
      (% active-editor "focus")
      (cm-editor-grow-char active-editor "right"))))

(define (#grow-word-right-button_click ev)
  (if (eqv? active-editor #f)
    #f
    (begin
      (% active-editor "focus")
      (cm-editor-grow-word active-editor "right"))))

(define (#shrink-char-left-button_click ev)
  (if (eqv? active-editor #f)
    #f
    (begin
      (% active-editor "focus")
      (cm-editor-shrink-char active-editor "left"))))

(define (#shrink-word-left-button_click ev)
  (if (eqv? active-editor #f)
    #f
    (begin
      (% active-editor "focus")
      (cm-editor-shrink-word active-editor "left"))))

(define (#shrink-char-right-button_click ev)
  (if (eqv? active-editor #f)
    #f
    (begin
      (% active-editor "focus")
      (cm-editor-shrink-char active-editor "right"))))

(define (#shrink-word-right-button_click ev)
  (if (eqv? active-editor #f)
    #f
    (begin
      (% active-editor "focus")
      (cm-editor-shrink-word active-editor "right"))))


(define (.code-editor_click ev)
  (let ((target (js-ref ev "currentTarget")))
    (set! active-editor (<< "#" (element-read-attribute target "id")))
    (if is-touch-device?
        (begin
          (console-log "showing cursor controls")
        (show-cursor-controls)
        (let ((x  (js-ref ev "screenX"))
            (y (js-ref ev "screenY")))
            (% "#cursordriver" "css" "top" (<< (number->string (- y 130) ) "px"))
            (% "#cursordriver" "css" "left" (<< (number->string (- x ( / (% "#cursordriver" "outerWidth") 2)) ) "px"))
            )
            )
      )
    )
    #t)
