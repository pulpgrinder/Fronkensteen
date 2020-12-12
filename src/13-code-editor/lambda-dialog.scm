(define (show-procedure-lookup)
  (if (element-exists? "#fronkensteen-lambda-dialog")
    #t
(begin
  (build-fronkensteen-dialog "#fronkensteen-lambda-dialog" "Scheme Procedure Lookup"
    (<<
          (dv "#lambda-proc-search"
          (<<
            (span "!style='font-size:125%;'" "Procedure lookup:&nbsp;")
            (input "#lambda-proc-lookup.topcoat-text-input!type='text'!size='20'"))
        )
         (dv "#lambda-proc-display-wrapper" (dv "#lambda-proc-display" "")))
     "30em" "27em")
    (load-lambda-proc-display)
   (wire-ui))))

(define (lambda-show-proc-doc procname)
  (let ((dialog-id (<< "#fronkensteen-lambda-proc-doc-" (encode-base-32 procname))))
  (if (element-exists? dialog-id)
    #t
    (let ((dialog-body-id (<< dialog-id "-body") ))
      (build-fronkensteen-dialog (<< dialog-id "-dialog") (<< "Documentation for " procname)
        (dv (<< dialog-body-id ".lambda-doc-body") "")
          "40em" "22em")
      (let ((encoded-proc-name (encode-base-32 procname)))
        (let ((textarea-name (<< "#" encoded-proc-name  "-doc-textarea")))
          (% dialog-body-id "html"
            (<<
              (dv
                (<<
                  (fronkensteen-toolbar-text-button (<< "#" encoded-proc-name "-update-button.procdoc-update-button" "!procname='" procname "'") "Write updated documentation to database" "Update docs") (fronkensteen-toolbar-text-button (<< "#" encoded-proc-name "-source-button.procdoc-source-button" "!procname='" procname "'") "Show the source code for this procedure" "Show source")))
              (dv
                (textarea (<< textarea-name "!rows='20'!cols='80'") ""))))
            (% textarea-name "val" (retrieve-procedure-documentation procname))
      ))))
  (timer (lambda ()
    (wire-ui)
  ) 0.5)
  ))

(define (.procdoc-update-button_click ev)
  (alert "procdoc")
  (let ((target (js-ref ev "currentTarget")))
    (let ((procname  (element-read-attribute target "procname")))
      (let ((encoded-proc-name (encode-base-32 procname) ))
        (let ((textarea-name (<< "#" encoded-proc-name "-doc-textarea")))
        (let ((new-doc (str-trim (% textarea-name "val"))))
          (update-doc-string procname new-doc)
          (let ((updated-docs (get-updated-doc-strings)))
              (set-wiki-data "system/Scheme Documentation" (<< "; Documentation for Scheme procedures.\n; Normally accessed through the programming tools.\n; You probably shouldn't edit this by hand, though you\n; can if you're brave. The format is:\n;procedure name\n;procedure signature\n;description (can be multiple lines)\n;§\n;(blank line)\n;" updated-docs)))
          ))))))


(define (.procdoc-source-button_click ev)
  (let ((target (js-ref ev "currentTarget")))
    (let ((procname  (element-read-attribute target "procname")))
      (show-source-code procname)
    )
))



(define (show-source-code procname)
  (console-log (<< "show-source-code: procname is " procname))
  (let ((sourcefile (retrieve-procedure-filename procname))
        (sourceline (retrieve-procedure-line-number procname)))
          (console-log (<< "show-source-code: sourcefile is " sourcefile))
          (console-log (<< "show-source-code: sourceline is " (number->string sourceline)))
        (if (eqv? sourcefile #f)
          (alert (<< "No source available for " procname))
          (let ((editor-id (<< "#proceditor-" (encode-base-32 sourcefile) "-sourcefile")))
            (let ((wrapper-id (<< editor-id "-wrapper")))
            (if (not (element-exists? wrapper-id))
              (begin
              (create-generic-editor editor-id procname sourcefile generic-editor-file-reader generic-editor-file-writer source-code-editor-close)

              )

              )
              (cm-editor-scroll-to-line editor-id sourceline)
              (add-page-history sourcefile "editor" editor-id)
              (display-history-tos))))))

(define (source-code-editor-close)
  (display-history-tos))

(define (#lambda-proc-lookup_input)
    (load-lambda-proc-display))

(define (load-lambda-proc-display)
    (let ((proc-search (% "#lambda-proc-lookup" "val"))
          (procs (vector->list (enumerate-procedures))))
          (% "#lambda-proc-display" "html" (lambda-build-proc-display-list procs proc-search)))
    (% ".lambda-proc-name-entry" "on" "click"
      (lambda (ev)
          (let ((target (js-ref ev "currentTarget")))
              (let ((procname (% target "attr" "procname")))
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
  (if (not (eqv? (get-tos-page-id) #f))
    (cm-editor-eval-selection-or-expr-before-cursor! (get-tos-page-id))
  ))

(define (#lambda-eval-js-button_click ev)
  (if (not (eqv? (get-tos-page-id) #f))
    (cm-editor-eval-js-selection! (get-tos-page-id))
  ))
