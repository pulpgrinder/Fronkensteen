; Internal code editor.
; Copyright 2019, 2020 by Anthony W. Hursh.
; MIT License.


(define (.lambda-repl-button_click)
  (show-mini-repl))


(define (.lambda-procindex-button_click)
  (show-procedure-lookup))

(define (#fronkensteen-editor-scheme-button_click ev)
  (if (not (eqv? (get-tos-page-id) #f))
    (cm-editor-eval-selection-or-expr-before-cursor! (get-tos-page-id))
  ))

(define (#fronkensteen-editor-js-button_click ev)
  (if (not (eqv? (get-tos-page-id) #f))
    (cm-editor-eval-js-selection! (get-tos-page-id))
  ))
(define (#fronkensteen-editor-character-button_click)
  (show-char-dialog))

(define (#fronkensteen-editor-link-button_click)
  (if (eqv? (get-tos-page-id) #f)
    #f
    (let ((editor-name (get-tos-page-id)))
    (cm-editor-set-link editor-name))))

(define (#fronkensteen-editor-footnote-button_click)
  (if (eqv? (get-tos-page-id) #f)
    #f
    (let ((editor-name (get-tos-page-id)))
    (cm-editor-set-note editor-name))))

(define (#fronkensteen-editor-history-button_click)
  (show-wiki-history-dialog))

(define (#fronkensteen-editor-comment-button_click)
  (if (eqv? (get-tos-page-id) #f)
    #f
    (let ((editor-name (get-tos-page-id)))
    (cm-editor-set-comment editor-name))))


(define (#fronkensteen-editor-align-left-button_click)
  (if (eqv? (get-tos-page-id) #f)
    #f
    (let ((editor-name (get-tos-page-id)))
    (cm-editor-set-align-left editor-name))))


(define (#fronkensteen-editor-align-right-button_click)
  (if (eqv? (get-tos-page-id) #f)
    #f
    (let ((editor-name (get-tos-page-id)))
    (cm-editor-set-align-right editor-name))))

(define (#fronkensteen-editor-justify-button_click)
  (if (eqv? (get-tos-page-id) #f)
    #f
    (let ((editor-name (get-tos-page-id)))
    (cm-editor-set-justify editor-name))))

(define (#fronkensteen-editor-center-button_click)
  (if (eqv? (get-tos-page-id) #f)
    #f
    (let ((editor-name (get-tos-page-id)))
    (cm-editor-set-center editor-name))))


(define (#fronkensteen-editor-inline-latex-button_click)
  (if (eqv? (get-tos-page-id) #f)
    #f
    (let ((editor-name (get-tos-page-id)))
    (cm-editor-set-inline-math editor-name))))

  (define (#fronkensteen-editor-display-latex-button_click)
    (if (eqv? (get-tos-page-id) #f)
      #f
      (let ((editor-name (get-tos-page-id)))
      (cm-editor-set-display-math editor-name))))

(define (.fronkensteen-editor-code-button_click)
  (if (eqv? (get-tos-page-id) #f)
    #f
    (let ((editor-name (get-tos-page-id)))
    (cm-editor-set-code editor-name))))


(define (#fronkensteen-editor-h3-button_click)
  (if (eqv? (get-tos-page-id) #f)
    #f
    (let ((editor-name (get-tos-page-id)))
    (cm-editor-set-heading editor-name "3"))))

(define (#fronkensteen-editor-h2-button_click)
  (if (eqv? (get-tos-page-id) #f)
    #f
    (let ((editor-name (get-tos-page-id)))
    (cm-editor-set-heading editor-name "2"))))

(define (#fronkensteen-editor-h1-button_click)
  (if (eqv? (get-tos-page-id) #f)
    #f
    (let ((editor-name (get-tos-page-id)))
    (cm-editor-set-heading editor-name "1"))))

(define (#fronkensteen-editor-block-quote-button_click)
  (if (eqv? (get-tos-page-id) #f)
    #f
    (let ((editor-name (get-tos-page-id)))
    (cm-editor-set-block-quote editor-name))))

(define (#fronkensteen-editor-number-list-button_click)
  (if (eqv? (get-tos-page-id) #f)
    #f
    (let ((editor-name (get-tos-page-id)))
    (cm-editor-set-numbered-list editor-name))))

(define (#fronkensteen-editor-bullet-list-button_click)
  (if (eqv? (get-tos-page-id) #f)
    #f
    (let ((editor-name (get-tos-page-id)))
    (cm-editor-set-bulleted-list editor-name))))

(define (#fronkensteen-editor-strikeout-button_click)
  (if (eqv? (get-tos-page-id) #f)
    #f
    (let ((editor-name (get-tos-page-id)))
    (cm-editor-set-strikeout editor-name))))

(define (#fronkensteen-editor-subscript-button_click)
  (if (eqv? (get-tos-page-id) #f)
    #f
    (let ((editor-name (get-tos-page-id)))
    (cm-editor-set-subscript editor-name))))

(define (#fronkensteen-editor-superscript-button_click)
  (if (eqv? (get-tos-page-id) #f)
    #f
    (let ((editor-name (get-tos-page-id)))
    (cm-editor-set-superscript editor-name))))

(define (#fronkensteen-editor-underline-button_click)
  (if (eqv? (get-tos-page-id) #f)
    #f
    (let ((editor-name (get-tos-page-id)))
    (cm-editor-set-underline editor-name))))

    (define (#fronkensteen-editor-smallcaps-button_click)
      (if (eqv? (get-tos-page-id) #f)
        #f
        (let ((editor-name (get-tos-page-id)))
        (cm-editor-set-smallcaps editor-name))))

(define (#fronkensteen-editor-italic-button_click)
  (if (eqv? (get-tos-page-id) #f)
    #f
    (let ((editor-name (get-tos-page-id)))
    (cm-editor-set-italic editor-name))))

(define (#fronkensteen-editor-bold-button_click)
  (if (eqv? (get-tos-page-id) #f)
    #f
    (let ((editor-name (get-tos-page-id)))
    (cm-editor-set-bold editor-name))))

    (define (#fronkensteen-editor-menu-button_click)
      (if (eqv? (get-tos-page-id) #f)
        #f
        (let ((editor-name (get-tos-page-id)))
        (cm-editor-set-menu editor-name))))

(define (#fronkensteen-editor-poetry-button_click)
  (if (eqv? (get-tos-page-id) #f)
    #f
    (let ((editor-name (get-tos-page-id)))
    (cm-editor-set-poetry editor-name))))


(define (#fronkensteen-editor-undo-button_click)
  (if (eqv? (get-tos-page-id) #f)
    #f
  (let ((editor-name (get-tos-page-id)))
    (cm-editor-undo! editor-name))))

(define (#fronkensteen-editor-redo-button_click)
  (if (eqv? (get-tos-page-id) #f)
    #f
    (let ((editor-name (get-tos-page-id)))
    (cm-editor-redo! editor-name))))

(define (#fronkensteen-editor-scheme-eval-button_click)
  (if (eqv? (get-tos-page-id) #f)
      #f
        (let ((editor-name (get-tos-page-id)))
          (cm-editor-eval-selection-or-expr-before-cursor! editor-name))
  ))

(define (#fronkensteen-editor-javascript-eval-button_click)
  (if (eqv? (get-tos-page-id) #f)
      #f
        (let ((editor-name (get-tos-page-id)))
          (cm-editor-eval-js-selection! editor-name))
  ))

(define (focus-find)
  (timer (lambda()
    (% "#search-field" "focus")) 0.1))
