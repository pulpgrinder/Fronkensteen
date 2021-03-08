(define (text-editor-replace editor replacement)
    (cm-editor-replace editor replacement))

(define (text-editor-replace-all editor search_lemma replace_lemma foldcase use_regex)
    (cm-replace-all editor search_lemma replace_lemma foldcase use_regex))

(define (text-editor-install-css editor)
  (js-install-head (style (<< "#" (gen-css-id) ".dynamic_style_sheet")
   (cm-editor-get-selected-text editor))))

(define (text-editor-clear editor)
  (cm-editor-set-text editor ""))

(define (text-editor-find editor lemma foldcase use-regex search-backward )
  (if (eqv? lemma "")
    (alert "Nothing specified to find.")
    (let ((search-result (cm-find editor lemma foldcase use-regex search-backward #t)))
      (cond
      ((eqv? search-result #t) #t)
      ((eqv? search-result #f) (fronkensteen-toast "Not found" "c" "c" 1))
      ((eqv? search-result "wrapped") (fronkensteen-toast "Wrapped..." "c" "c" 0.5))
      ))))

(define (text-editor-scheme-eval editor)
   (cm-editor-eval-selection-or-expr-before-cursor! editor))

(define (text-editor-javascript-eval editor)
    (cm-editor-eval-js-selection! editor))


(define (text-editor-format-scheme editor)
   (cm-editor-set-scheme editor))

(define (text-editor-format-javascript editor)
   (cm-editor-set-javascript editor))

(define (text-editor-scheme-doc editor)
  (let ((procname (cm-editor-get-procedure-at-cursor editor)))
    (let ((procfile (retrieve-procedure-filename procname))
          (procline (retrieve-procedure-line-number procname)))
          (if (eqv? procfile #f)
            (alert (<< procname ": procedure not found in source files"))
            (begin
                (display-code-editor-page procfile)
                  (text-editor-select-line active-editor procline)
                  (text-editor-scroll-to-selection active-editor)
                  (% active-editor "focus")

                  )))))

(define (text-editor-scroll-to-selection editor)
  (cm-editor-scroll-to-selection editor))

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

(define (text-editor-underline editor)
    (cm-editor-set-underline editor))

(define (text-editor-link editor)
    (cm-editor-set-link editor))

(define (text-editor-menu editor)
    (cm-editor-set-menu editor))

(define (text-editor-poetry editor)
    (cm-editor-set-poetry editor))


(define (text-editor-undo editor)
    (cm-editor-undo! editor))

(define (text-editor-redo editor)
    (cm-editor-redo! editor))

(define (text-editor-select-line editor line-number)
  (cm-editor-select-line editor line-number))
