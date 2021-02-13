(define active-editor #f)



(define (#cursorleft-button_touch_click ev)
  (if (eqv? active-editor #f)
    #f
    (begin
      (% active-editor "focus")
      (cm-editor-arrow-key active-editor "left"))))

(define (#cursorright-button_touch_click ev)
  (if (eqv? active-editor #f)
    #f
    (begin
      (% active-editor "focus")
      (cm-editor-arrow-key active-editor "right"))))

(define (#grow-char-left-button_touch_click ev)
  (if (eqv? active-editor #f)
    #f
    (begin
      (% active-editor "focus")
      (cm-editor-grow-char active-editor "left"))))

(define (#grow-word-left-button_touch_click ev)
  (if (eqv? active-editor #f)
    #f
    (begin
      (% active-editor "focus")
      (cm-editor-grow-word active-editor "left"))))

(define (#grow-char-right-button_touch_click ev)
  (if (eqv? active-editor #f)
    #f
    (begin
      (% active-editor "focus")
      (cm-editor-grow-char active-editor "right"))))

(define (#grow-word-right-button_touch_click ev)
  (if (eqv? active-editor #f)
    #f
    (begin
      (% active-editor "focus")
      (cm-editor-grow-word active-editor "right"))))

(define (#shrink-char-left-button_touch_click ev)
  (if (eqv? active-editor #f)
    #f
    (begin
      (% active-editor "focus")
      (cm-editor-shrink-char active-editor "left"))))

(define (#shrink-word-left-button_touch_click ev)
  (if (eqv? active-editor #f)
    #f
    (begin
      (% active-editor "focus")
      (cm-editor-shrink-word active-editor "left"))))

(define (#shrink-char-right-button_touch_click ev)
  (if (eqv? active-editor #f)
    #f
    (begin
      (% active-editor "focus")
      (cm-editor-shrink-char active-editor "right"))))

(define (#shrink-word-right-button_touch_click ev)
  (if (eqv? active-editor #f)
    #f
    (begin
      (% active-editor "focus")
      (cm-editor-shrink-word active-editor "right"))))
