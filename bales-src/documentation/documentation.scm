(define (show-procedure-documentation procname)
    (% "#fronkensteen-documentation-definition-area" "html" "")
    (% "#fronkensteen-documentation-documentation-text" "val" "")
    (if (eqv? procname "")
      (show-blank-procedure-documentation)
      (let ((proc-def (retrieve-procedure-definition procname)))
        (% "#fronkensteen-documentation-procedure-name" "html" (escape-html procname))
        (% "#fronkensteen-documentation-procedure-name" "attr" "procname" procname)
        (if (eqv? proc-def #f)
            (% "#fronkensteen-documentation-documentation-text" "val" (<<  "Procedure " (escape-html procname) " not found."))
            (begin
              (if (eqv? (vector-ref proc-def 3) "")
                (% "#fronkensteen-documentation-documentation-text" "val" "No docs found. How about writing some? :-)")
                (% "#fronkensteen-documentation-documentation-text" "val" (escape-html(vector-ref proc-def 3))))
                (% "#fronkensteen-documentation-source-file-name" "html" (vector-ref proc-def 1))
                (% "#fronkensteen-documentation-source-line-number" "html" (+ 1 (vector-ref proc-def 2)))
                (if (eqv? (vector-ref proc-def 1) "(unspecified)")
                (% "#fronkensteen-documentation-definition-area" "html" "Source file not available. Procedure may have been defined in an active editor, or may be a special case of some kind.")
                (begin
                (% "#fronkensteen-documentation-definition-area" "html" (render-procedure-definition-text proc-def))
                (scroll-element-into-view (<< "*[source-line-number='" (number->string (+ 1 (vector-ref proc-def 2))) "']"))
                )))))))

(define (show-blank-procedure-documentation)
    (% "#fronkensteen-documentation-procedure-name" "html" "")
    (% "#fronkensteen-documentation-procedure-name" "attr" "procname" "")
    (% "#fronkensteen-documentation-documentation-text" "val" "No procedure selected.")
    (% "#fronkensteen-documentation-definition-area" "html" "No procedure selected.")
    (% "#fronkensteen-documentation-source-file-name" "html" "(no file)")
    (% "#fronkensteen-documentation-source-line-number" "html" "")
)

(define (documentation-search-field_input)
    (fronkensteen-documentation-search-button_click))

(define (fronkensteen-documentation-done-button_click)
    (nav-go-back))

(define (fronkensteen-update-documentation-button_click)
    (if (eqv? (% "#fronkensteen-documentation-procedure-name" "attr" "procname") "")
        (begin
            (alert "No active procedure to update.")
            #t)
    (update-procedure-documentation!
        (% "#fronkensteen-documentation-procedure-name" "attr" "procname")
        (% "#fronkensteen-documentation-documentation-text" "val"))))

(define (fronkensteen-documentation-all-button_click)
    (display-procedure-list (enumerate-procedures)))

(define (fronkensteen-documentation-undoc-button_click)
        (display-procedure-list (enumerate-undocumented-procedures)))

(define (fronkensteen-documentation-search-button_click)
    (display-procedure-list (search-defined-procedures (% "#documentation-search-field" "val"))))

(define (fronkensteen-rebuild-documentation-button_click)
    (rebuild-documentation))

(define (fronkensteen-export-documentation-button_click)
        (export-documentation))

(define (fronkensteen-edit-doc-source-file-button_click)
    (let ((source-file-name (% "#fronkensteen-documentation-source-file-name" "html")))
        (if (eq? source-file-name "")
            (alert "No source file specified.")
            (begin
                (nav-go-back)
                (display-file-editor source-file-name)
                (cm-editor-scroll-to-line (code-editor-element-for-filename fronkensteen-active-editor-file)
                  (string->number(% "#fronkensteen-documentation-source-line-number" "html"))
                  )))))


(define (display-procedure-list proc-vector)
  (% "#fronkensteen-documentation-search-results" "html" (build-procedure-list (vector->list proc-vector)))
  (% ".proc-list-entry" "on" "click" (lambda (ev)
          (let ((target (js-ref ev "currentTarget")))
              (show-procedure-documentation (% target "attr" "procname"))))))



(define (build-procedure-list proc-list)
    (if (eqv? proc-list '())
        ""
        (<< (dv (<< ".proc-list-entry!procname='"  (car proc-list) "'") (escape-html (car proc-list))) (build-procedure-list (cdr proc-list)))))
