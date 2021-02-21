(define (text-editor-replace editor lemma replacement)
  (if (eqv? lemma "")
    (alert "Nothing to find")
    (cm-editor-replace editor replacement)))

(define (text-editor-replace-and-find editor lemma replacement)
  (text-editor-replace editor lemma replacement)
  (text-editor-find editor lemma))

  (define (text-editor-replace-all editor lemma replacement)
    (text-editor-replace-iter #t editor lemma replacement))

(define (text-editor-replace-all is-first-pass editor lemma replacement)
    (let ((found (text-editor-perform-find #f editor lemma replacement)))
      (if found
        (begin
          (text-editor-replace editor lemma replacement)
          (text-editor-replace-all is-first-pass editor lemma replacement))
        (if is-first-pass
          (begin
            (cm-editor-set-cursor-position editor 0 0)
            (text-editor-replace-all #f editor lemma replacement))
          #t))))

(define (text-editor-find editor lemma foldcase use-regex search-backward )
    (text-editor-perform-find #t editor lemma foldcase use-regex search-backward))

(define (text-editor-perform-find query-for-wrap? editor lemma foldcase use-regex search-backward)
  (if (eqv? lemma "")
    (alert "Nothing specified to find.")
    (begin
        (if (eqv? (cm-find editor lemma (text-editor-next-search-position editor search-backward) foldcase use-regex search-backward) #f)
          (if query-for-wrap?
            (if (checkbox-checked? "#text-editor-find-wrap")
              (timer (lambda()
                  (if search-backward
                    (begin
                      (let ((doc-end (cm-end-position editor)))
                        (cm-editor-set-cursor-position editor (vector-ref doc-end  0) (vector-ref doc-end 1))))
                     (cm-editor-set-cursor-position editor 0 0))
                  (text-editor-perform-find #f editor lemma foldcase use-regex search-backward)) 0.05)
             #f)
             #t)
          #t))))

  (define (text-editor-next-search-position editor search-backward)
      (let ((cursor-position (cm-editor-get-cursor-position editor)))
        (if search-backward
          (let ((last-line (vector-ref cursor-position 0))
              (last-ch (vector-ref cursor-position 1)))
              (if (eqv? last-ch 0)
                `#(,(- last-line 1) (string-length (cm-editor-get-line editor (- last-line 1))))
                `#(,last-line ,(- last-ch 1))))
        cursor-position)))

(define (text-editor-scheme-eval editor)
   (cm-editor-eval-selection-or-expr-before-cursor! editor))

(define (text-editor-javascript-eval editor)
    (cm-editor-eval-js-selection! editor))


(define (text-editor-format-scheme editor)
   (cm-editor-set-scheme editor))

(define (text-editor-format-javascript editor)
   (cm-editor-set-javascript editor))

(define (text-editor-scheme-doc editor)
  (alert "show scheme docs (not implemented yet)"))

(define (text-editor-scheme-run editor)
    (cm-eval-editor-buffer! editor))

(define (text-editor-footnote editor)
    (cm-editor-set-note editor))

(define (text-editor-comment editor)
    (cm-editor-set-comment editor))

(define (text-editor-align-left editor)
    (cm-editor-set-align-left editor))


(define (text-editor-align-right editor)
    (cm-editor-set-align-right editor))

(define (text-editor-align-justify editor)
    (cm-editor-set-justify editor))

(define (text-editor-align-center editor)
    (cm-editor-set-center editor))

(define (text-editor-align-hanging-indent editor)
    (cm-editor-set-hanging-indent editor))

(define (text-editor-inline-latex editor)
    (cm-editor-set-inline-math editor))

(define (text-editor-display-latex editor)
    (cm-editor-set-display-math editor))

(define (text-editor-format-code editor)
    (cm-editor-set-code editor))


(define (text-editor-h3 editor)
    (cm-editor-set-heading editor "3"))

(define (text-editor-h2 editor)
    (cm-editor-set-heading editor "2"))

(define (text-editor-h1 editor)
    (cm-editor-set-heading editor "1"))


(define (text-editor-preview editor)
    (alert "Preview (not implemented yet)"))

(define (text-editor-block-quote editor)
    (cm-editor-set-block-quote editor))

(define (text-editor-numbered-list editor)
    (cm-editor-set-numbered-list editor))

(define (text-editor-bulleted-list editor)
    (cm-editor-set-bulleted-list editor))

(define (text-editor-strikeout editor)
    (cm-editor-set-strikeout editor))

(define (text-editor-subscript editor)
    (cm-editor-set-subscript editor))

(define (text-editor-superscript editor)
    (cm-editor-set-superscript editor))

(define (text-editor-italic editor)
    (cm-editor-set-italic editor))

(define (text-editor-bold editor)
    (cm-editor-set-bold editor))

(define (text-editor-poetry editor)
    (cm-editor-set-poetry editor))


(define (text-editor-undo editor)
    (cm-editor-undo! editor))

(define (text-editor-redo editor)
    (cm-editor-redo! editor))
