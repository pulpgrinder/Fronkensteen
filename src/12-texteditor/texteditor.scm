(define (fronkensteen-editor-replace-button_click)
  (let ((lemma (% "#fronkensteen-editor-find-input" "val"))
       (replacement (% "#fronkensteen-editor-replace-input" "val")))
        (if (eqv? lemma "")
          (alert "Nothing to find")
          (cm-editor-replace active-editor replacement))))

(define (fronkensteen-editor-replace-and-find-button_click)
  (fronkensteen-editor-replace-button_click)
  (fronkensteen-editor-find-button_click))

  (define (fronkensteen-editor-replace-all-button_click)
    (fronkensteen-editor-replace-all #t))

(define (fronkensteen-editor-replace-all is-first-pass)
    (let ((found (fronkensteen-editor-perform-find #f)))
      (if found
        (begin
          (fronkensteen-editor-replace-button_click)
          (fronkensteen-editor-replace-all is-first-pass))
        (if is-first-pass
          (begin
            (cm-editor-set-cursor-position active-editor 0 0)
            (fronkensteen-editor-replace-all #f))
          #t))))

(define (fronkensteen-editor-find-button_click)
    (fronkensteen-editor-perform-find #t))

(define (fronkensteen-editor-perform-find query-for-wrap?)
  (let ((foldcase (checkbox-checked? "#fronkensteen-editor-find-ignorecase"))
      (use-regex (checkbox-checked? "#fronkensteen-editor-find-regex"))
      (search-backward (checkbox-checked? "#fronkensteen-editor-find-searchbackward"))
      (lemma (% "#fronkensteen-editor-find-input" "val")))
        (if (eqv? active-editor #f)
          (alert "No editor open.")
          (if (eqv? lemma "")
            (alert "Nothing specified to find.")
            (begin
                (if (eqv? (cm-find active-editor lemma (fronkensteen-editor-next-search-position active-editor) foldcase use-regex search-backward) #f)
                  (if query-for-wrap?
                    (if (checkbox-checked? "#fronkensteen-editor-find-wrap")
                      (timer (lambda()
                          (if search-backward
                            (begin
                              (let ((doc-end (cm-end-position editor)))
                                (cm-editor-set-cursor-position active-editor (vector-ref doc-end  0) (vector-ref doc-end 1))))
                             (cm-editor-set-cursor-position active-editor 0 0))
                          (fronkensteen-editor-perform-find #f)) 0.05)
                     #f)
                     #t)
                  #t))))))

(define (fronkensteen-editor-next-search-position)
    (let ((cursor-position (cm-editor-get-cursor-position active-editor)))
      (if (checkbox-checked? "#fronkensteen-editor-find-searchbackward")
        (let ((last-line (vector-ref cursor-position 0))
            (last-ch (vector-ref cursor-position 1)))
            (if (eqv? last-ch 0)
              `#(,(- last-line 1) (string-length (cm-editor-get-line active-editor (- last-line 1))))
              `#(,last-line ,(- last-ch 1))))
      cursor-position)))

(define (fronkensteen-editor-scheme-eval-button_click)
  (if (eqv? active-editor #f)
    #f
   (cm-editor-eval-selection-or-expr-before-cursor! active-editor)))

(define (fronkensteen-editor-javascript-eval-button_click)
  (if (eqv? active-editor-file #f)
    #f
    (cm-editor-eval-js-selection! active-editor))
)


(define (fronkensteen-editor-scheme-doc-button_click)
  (alert "show scheme docs"))

(define (fronkensteen-editor-scheme-run-button_click)
  (if (eqv? active-editor-file #f)
    #f
    (cm-eval-editor-buffer! active-editor)
))

(define (fronkensteen-editor-footnote-button_click)
  (if (eqv? active-editor #f)
    #f
    (cm-editor-set-note active-editor)))

(define (fronkensteen-editor-comment-button_click)
  (if (eqv? active-editor #f)
    #f
    (cm-editor-set-comment active-editor)))

(define (fronkensteen-editor-align-left-button_click)
  (if (eqv? active-editor #f)
    #f
    (cm-editor-set-align-left active-editor)))


(define (fronkensteen-editor-align-right-button_click)
    (if (eqv? active-editor #f)
      #f
    (cm-editor-set-align-right active-editor)))

(define (fronkensteen-editor-justify-button_click)
    (if (eqv? active-editor #f)
      #f
    (cm-editor-set-justify active-editor)))

(define (fronkensteen-editor-center-button_click)
    (if (eqv? active-editor #f)
      #f
    (cm-editor-set-center active-editor)))


(define (fronkensteen-editor-inline-latex-button_click)
  (if (eqv? active-editor #f)
    #f
    (cm-editor-set-inline-math active-editor)))
    
(define (fronkensteen-editor-display-latex-button_click)
  (if (eqv? active-editor #f)
    #f
    (cm-editor-set-display-math active-editor)))

(define (fronkensteen-editor-code-button_click)
    (if (eqv? active-editor #f)
      #f
    (cm-editor-set-code active-editor)))


(define (fronkensteen-editor-h3-button_click)
  (if (eqv? active-editor #f)
    #f
    (cm-editor-set-heading active-editor "3")))



(define (fronkensteen-editor-preview-button_click)
  (if (eqv? active-editor #f)
    #f
    (view-trusted-markup-text (cm-editor-get-text active-editor))))


(define (fronkensteen-editor-h2-button_click)
  (if (eqv? active-editor #f)
    #f
    (cm-editor-set-heading active-editor "2")))

(define (fronkensteen-editor-h1-button_click)
  (if (eqv? active-editor #f)
    #f
    (cm-editor-set-heading active-editor "3")))

(define (fronkensteen-editor-block-quote-button_click)
    (if (eqv? active-editor #f)
      #f
    (cm-editor-set-block-quote active-editor)))

(define (fronkensteen-editor-number-list-button_click)
  (if (eqv? active-editor #f)
    #f
    (cm-editor-set-numbered-list active-editor)))

(define (fronkensteen-editor-bullet-list-button_click)
  (if (eqv? active-editor #f)
    #f
    (cm-editor-set-bulleted-list active-editor)))

(define (fronkensteen-editor-strikeout-button_click)
    (if (eqv? active-editor #f)
      #f
    (cm-editor-set-strikeout active-editor)))

(define (fronkensteen-editor-subscript-button_click)
  (if (eqv? active-editor #f)
    #f
    (cm-editor-set-subscript active-editor)))

(define (fronkensteen-editor-superscript-button_click)
    (if (eqv? active-editor #f)
      #f
    (cm-editor-set-superscript active-editor)))

(define (fronkensteen-editor-italic-button_click)
    (if (eqv? active-editor #f)
      #f
    (cm-editor-set-italic active-editor)))

(define (fronkensteen-editor-bold-button_click)
    (if (eqv? active-editor #f)
      #f
    (cm-editor-set-bold active-editor)))

(define (fronkensteen-editor-poetry-button_click)
    (if (eqv? active-editor #f)
      #f
    (cm-editor-set-poetry active-editor)))


(define (fronkensteen-editor-undo-button_click)
    (if (eqv? active-editor #f)
      #f
    (cm-editor-undo! active-editor)))

(define (fronkensteen-editor-redo-button_click)
    (if (eqv? active-editor #f)
      #f
    (cm-editor-redo! active-editor)))
