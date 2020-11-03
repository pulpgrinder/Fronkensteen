(define (#fronkensteen-editor-lambda-button_click)
  (if (element-exists? "#fronkensteen-lambda-dialog")
    #t
(begin
  (build-fronkensteen-dialog "#fronkensteen-lambda-dialog" "Script Tools"
    (<<
      (dv "#lambda-proc-controls"
        (<<
          (dv
            (<<
            (button "#lambda-eval-scheme-button!title='Evaluate Scheme selection or expression before cursor'" "Eval Scheme")
            (button "#lambda-eval-js-button!title='Evaluate JavaScript selection'" "Eval JavaScript")))
            (dv "#lambda-proc-search"
            (<<
              "&nbsp;&nbsp;Procedure lookup: &nbsp;"
              (input "#lambda-proc-lookup!type='text'!size='15'"))
          )))
         (dv "#lambda-proc-display-wrapper" (dv "#lambda-proc-display" "")))
     "40em" "27em")
    (load-lambda-proc-display)
   (wire-ui))))

(define (lambda-show-proc-source procname)
  (let ((dialog-id (<< "#fronkensteen-lambda-proc-source-" (no-dash-uuid))))
    (let ((dialog-body-id (<< dialog-id "-body.lambda-doc-body") ))
  (build-fronkensteen-dialog (<< dialog-id "-dialog") (<< "Source code for " procname)
   (dv dialog-body-id "")
   "40em" "22em")
   (% dialog-body-id  "html"
     (<<
       "Procedure: " procname "<br />"
       "Defined in: " (retrieve-procedure-filename procname) "<br />"
      (pre (html-escape (retrieve-procedure-definition procname))))))))

(define (lambda-show-proc-doc procname)
  (let ((dialog-id (<< "#fronkensteen-lambda-proc-doc-" (no-dash-uuid))))
    (let ((dialog-body-id (<< dialog-id "-body") ))
  (build-fronkensteen-dialog (<< dialog-id "-dialog") (<< "Documentation for " procname)
   (dv (<< dialog-body-id ".lambda-doc-body") "")
   "40em" "16em")
   (% dialog-body-id "html"
      (pre (html-escape (retrieve-procedure-documentation procname)))))))

(define (lambda-proc-lookup_input)
    (load-lambda-proc-display))

(define (load-lambda-proc-display)
    (let ((proc-search (% "#lambda-proc-lookup" "val"))
          (procs (vector->list (enumerate-procedures))))
          (% "#lambda-proc-display" "html" (lambda-build-proc-display-list procs proc-search)))
    (% ".lambda-proc-name-entry" "on" "click"
      (lambda (ev)
          (let ((target (js-ref ev "currentTarget")))
              (let ((procname (% target "attr" "procname")))
                (lambda-show-proc-source procname)
                (lambda-show-proc-doc procname))))))

(define (lambda-proc-match procname search)
    (if (>= (indexOf procname search) 0)
        #t
        #f))

(define (lambda-build-proc-display-list procs proc-search)
  (if (eqv? procs '())
      ""
      (let ((proc (car procs)))
        (if (lambda-proc-match proc proc-search)
            (<<
              (dv (<< ".lambda-proc-name-entry!procname='" proc "'") (html-escape proc))
              (lambda-build-proc-display-list (cdr procs) proc-search))
              (lambda-build-proc-display-list (cdr procs) proc-search)))))

(define (#lambda-eval-scheme-button_click ev)
  (if (not (eqv? current-editor #f))
    (cm-editor-eval-selection-or-expr-before-cursor! current-editor)
  ))

(define (#lambda-eval-js-button_click ev)
  (if (not (eqv? current-editor #f))
    (cm-editor-eval-js-selection! current-editor)
  ))
