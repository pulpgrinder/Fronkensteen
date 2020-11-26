(define (#fronkensteen-editor-lambda-button_click)
  (show-procedure-lookup)
  (show-mini-repl))

(define (show-procedure-lookup)
  (if (element-exists? "#fronkensteen-lambda-dialog")
    #t
(begin
  (build-fronkensteen-dialog "#fronkensteen-lambda-dialog" "Scheme Procedure Lookup"
    (<<
          (dv "#lambda-proc-search"
          (<<
            "&nbsp;&nbsp;Procedure lookup: &nbsp;"
            (input "#lambda-proc-lookup!type='text'!size='15'"))
        )
         (dv "#lambda-proc-display-wrapper" (dv "#lambda-proc-display" "")))
     "40em" "27em")
    (load-lambda-proc-display)
   (wire-ui))))

(define (lambda-show-proc-source procname)
  (let ((dialog-id (<< "#fronkensteen-lambda-proc-source-" (encode-base-32 procname))))
  (if (element-exists? dialog-id)
    #t
    (begin
    (let ((dialog-body-id (<< dialog-id "-body.lambda-doc-body") ))
  (build-fronkensteen-dialog (<< dialog-id "-dialog") (<< "Source code for " procname)
   (dv dialog-body-id "")
   "40em" "22em")
    (let ((encoded-proc-name (encode-base-32 procname) ))
      (let ((textarea-name (<< "#" encoded-proc-name "-def-textarea")))
        (% dialog-body-id  "html"
          (<<
            "Procedure: " procname "<br />"
            "Defined in: " (retrieve-procedure-filename procname) "<br />"
            (button (<< "#" encoded-proc-name "-execute-button.procdef-execute-button" "!procname='" procname "'") "Run code")
            (button (<< "#" encoded-proc-name "-update-button.procdef-update-button" "!procname='" procname "'") "Update system")
            "<br />"
            (textarea textarea-name "")))
            (init-cm-editor! textarea-name "scheme")
            (cm-editor-set-text textarea-name (retrieve-procedure-definition procname))))

    ))
    (wire-ui))))

(define (lambda-show-proc-doc procname)
  (let ((dialog-id (<< "#fronkensteen-lambda-proc-doc-" (encode-base-32 procname))))
  (if (element-exists? dialog-id)
    #t
    (begin
        (let ((dialog-body-id (<< dialog-id "-body") ))
      (build-fronkensteen-dialog (<< dialog-id "-dialog") (<< "Documentation for " procname)
       (dv (<< dialog-body-id ".lambda-doc-body") "")
       "40em" "16em")
       (let ((encoded-proc-name (encode-base-32 procname)))
       (let ((textarea-name (<< "#" encoded-proc-name  "-doc-textarea")))
       (% dialog-body-id "html"
        (<<
          (dv
            (button (<< "#" encoded-proc-name "-update-button.procdoc-update-button" "!procname='" procname "'") "Update docs"))
          (textarea textarea-name "")))
       (init-cm-editor! textarea-name "scheme")
       (cm-editor-set-text textarea-name (retrieve-procedure-documentation procname))

          )))

        (wire-ui))

          )))

(define (.procdoc-update-button_click ev)
  (alert "procdoc")
  (let ((target (js-ref ev "currentTarget")))
    (let ((procname  (element-read-attribute target "procname")))
      (let ((encoded-proc-name (encode-base-32 procname) ))
        (let ((textarea-name (<< "#" encoded-proc-name "-doc-textarea")))
        (let ((new-doc (str-trim (cm-editor-get-text textarea-name))))
          (update-doc-string procname new-doc)
          (let ((updated-docs (get-updated-doc-strings)))
              (set-wiki-data "system/Scheme Documentation" (<< "; Documentation for Scheme procedures.\n; Normally accessed through the programming tools.\n; You probably shouldn't edit this by hand, though you\n; can if you're brave. The format is:\n;procedure name\n;procedure signature\n;description (can be multiple lines)\n;§\n;(blank line)\n;" updated-docs)))
          ))))))


(define (.procdef-update-button_click ev)
  (let ((target (js-ref ev "currentTarget")))
    (let ((procname  (element-read-attribute target "procname")))
      (let ((encoded-proc-name (encode-base-32 procname) ))
        (let ((textarea-name (<< "#" encoded-proc-name "-def-textarea")))
          (let ((new-def (str-trim (cm-editor-get-text textarea-name)))
                (old-def (retrieve-procedure-definition procname))
                (filename (retrieve-procedure-filename procname)))
                (alert (<< "Updating def for " procname " to " new-def))
                (let ((old-data (read-internal-text-file filename)))
                    (update-proc-def procname new-def)
                    (write-internal-text-file filename (str-replace old-data old-def new-def))
)))))))

(define (.procdef-execute-button_click ev)
  (let ((target (js-ref ev "currentTarget")))
    (let ((procname  (element-read-attribute target "procname")))
      (let ((encoded-proc-name (encode-base-32 procname) ))
        (let ((textarea-name (<< "#" encoded-proc-name "-def-textarea")))
          (let ((new-def (str-trim (cm-editor-get-text textarea-name))))
            (if (eqv? (indexOf new-def "(define ") 0)
                (eval-scheme-string new-def)
                (if (eqv? (indexOf new-def "define_libfunc") 0)
                  (eval-js-string (<< "BiwaScheme." new-def))
                  (alert "Unrecognized procedure definition.")))))))))

(define (#lambda-proc-lookup_input)
    (load-lambda-proc-display))

(define (load-lambda-proc-display)
    (let ((proc-search (% "#lambda-proc-lookup" "val"))
          (procs (vector->list (enumerate-procedures))))
          (% "#lambda-proc-display" "html" (lambda-build-proc-display-list procs proc-search)))
    (% ".lambda-proc-name-entry" "on" "click"
      (lambda (ev)
          (console-log "proc clicked")
          (let ((target (js-ref ev "currentTarget")))
              (let ((procname (% target "attr" "procname")))
                (console-log (<< "showing info for " procname))
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
