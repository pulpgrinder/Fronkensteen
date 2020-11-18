
(define fronkensteen-wiki-history-list '())

(define fronkensteen-wiki-forward-history-list '())

(define fronkensteen-dirty-pages '())

(define (enable-wiki-nav-buttons)
  (if (> (length fronkensteen-wiki-forward-history-list) 0)
    (% "#fronkensteen-wiki-forward-button" "prop" "disabled" #f)
    (% "#fronkensteen-wiki-forward-button" "prop" "disabled" #t))
  (if (> (length fronkensteen-wiki-history-list) 1)
      (% "#fronkensteen-wiki-back-button" "prop" "disabled" #f)
    (% "#fronkensteen-wiki-back-button" "prop" "disabled" #t)))



(define current-title #f)

(define (make-page-dirty title)
  (set! fronkensteen-dirty-pages (cons title fronkensteen-dirty-pages)))

(define (remove-dirty-pages page-list)
  (if (eqv? page-list '())
    (set! fronkensteen-dirty-pages '())
    (begin
      (let ((content-name (<< "#fronkensteen-wiki-content-" (encode-base-32 (car page-list)))))
        (% content-name "remove")
        (remove-dirty-pages (cdr page-list))))))


(define (#fronkensteen-wiki-back-button_click)
    (if (< (length fronkensteen-wiki-history-list) 2)
      #t
      (begin
          (set! fronkensteen-wiki-forward-history-list (cons (car fronkensteen-wiki-history-list) fronkensteen-wiki-forward-history-list))
          (set! fronkensteen-wiki-history-list (cdr fronkensteen-wiki-history-list))
          (let ((history-page (car fronkensteen-wiki-history-list)))
            (let ((title (car history-page))
                  (type (cadr history-page)))
                  (if (eqv? type "page")
                    (display-wiki-page title #f)
                    (edit-wiki-page title))
            ))
            (enable-wiki-nav-buttons)
            )
      )
  )

(define (#fronkensteen-wiki-forward-button_click)
    (if (eqv? fronkensteen-wiki-forward-history-list '())
      #t
      (begin
          (set! fronkensteen-wiki-history-list (cons (car fronkensteen-wiki-forward-history-list) fronkensteen-wiki-history-list))
          (set! fronkensteen-wiki-forward-history-list (cdr fronkensteen-wiki-forward-history-list))
          (let ((history-page (car fronkensteen-wiki-history-list)))
            (let ((title (car history-page))
                  (type (cadr history-page)))
                  (if (eqv? type "page")
                    (display-wiki-page title #f)
                    (edit-wiki-page title))
            ))
            (enable-wiki-nav-buttons))
      )
  )
(define (add-wiki-history title type)
  (set! fronkensteen-wiki-forward-history-list '())
  (let ((history-list (remove-wiki-history title type fronkensteen-wiki-history-list)))
  (if (or (eqv? history-list '())
        (not (and (eqv? (caar history-list) title) (eqv? (cadar history-list) type)) ) )
          (set! fronkensteen-wiki-history-list (cons (list title type) history-list)))
  (display-wiki-history)))

(define (remove-wiki-history title type history-list)
  (if (eqv? history-list '())
      (begin
        (enable-wiki-nav-buttons)
      '())
      (if (and (eqv? (caar history-list) title) (eqv? (cadar history-list) type))
          (remove-wiki-history title type (cdr history-list))
          (cons (car history-list) (remove-wiki-history title type (cdr history-list)))
      ))
)
(define (show-wiki-tools show-them?)
  (if show-them?
    (% "#fronkensteen-wiki-toolbar-buttons" "show")
    (% "#fronkensteen-wiki-toolbar-buttons" "hide")

))

(define (display-wiki-history)
(if (element-exists? "#fronkensteen-wiki-history-list")
  (% "#fronkensteen-wiki-history-list" "html" (build-wiki-history-display fronkensteen-wiki-history-list)))
  (% ".fronkensteen-wiki-history-entry" "on" "click" (lambda (ev)
    (let ((target (js-ref ev "currentTarget")))
      (let ((title  (element-read-attribute target "title"))
            (type (element-read-attribute target "type")))
        (if (eqv? type "page")
          (display-wiki-page title #t)
          (edit-wiki-page title))
          (enable-wiki-nav-buttons)
  )))))


(define (build-wiki-history-display history-list)
 (if (eqv? history-list '())
    ""
    (let ((title (caar history-list))
          (type (cadar history-list)))
      (let ((icon
            (if (eqv? type "page")
              ""
              (<< (iconic-icon  "pencil") "&nbsp;"))
        ))
        (<< (li (<< ".round-list-item.fronkensteen-wiki-history-entry!title='" title "' type='" type "'") (<< icon title))
        (build-wiki-history-display (cdr history-list)))))))

;;;;!
;(wikipath basename)
; Returns the full path to a wiki file with the given basename.
;;;;!

(define (wiki-data-path basename)
  (let ((encoded-basename (<< "user-files/wiki/"  (encode-uri basename))))
    (if (eqv? (file-extension encoded-basename) "")
      (<< encoded-basename ".fmk")
      encoded-basename)))

(define (display-wiki-page title add-history)
  (let ((wikidata (retrieve-wiki-data title)))
    (if wikidata
      (begin
        (display-wiki-content title wikidata)
        (if add-history
          (add-wiki-history title "page"))
        (resize-content)
        (enable-wiki-nav-buttons))
      (edit-wiki-page title))))

(define (#fronkensteen-wiki-refresh-button_click ev)
    (make-page-dirty current-title)
    (display-wiki-page current-title #t))

(define (#fronkensteen-wiki-special-button_click ev)
    (display-wiki-page "special/Special Pages" #t))

(define (#fronkensteen-wiki-home-button_click ev)
    (display-wiki-page "Main" #t))

(define (#fronkensteen-wiki-docs-button_click ev)
    (display-wiki-page "special/Documentation" #t))

(define (#fronkensteen-wiki-delete-button_click ev)
    (if (eqv? current-title "system/Launch System")
      (alert "Sorry, can't delete the system launch page. Feel free to edit it, though.")
      (if (confirm (<< current-title ": delete? Are you sure?"))
        (begin
            (set! fronkensteen-wiki-history-list (cdr fronkensteen-wiki-history-list))
            (let ((filename (wiki-data-path current-title)))
              (delete-internal-file filename)
              (if (eqv? fronkensteen-wiki-history-list '())
                (display-wiki-page "Main" #t)
                (display-wiki-page (caar fronkensteen-wiki-history-list) #t)))))))


(define (fix-uncacheable title)
  (if (or
          (eq? (indexOf title "special/") 0)
          (eq? (indexOf title "system/") 0)
          (eq? (indexOf title "themes/") 0)
          (>= (indexOf title "-nocache") 0))
      (make-page-dirty title)))

(define (display-wiki-content title wikidata)
      (fronkenmark-set-source-file title)
      (% ".fronkensteen-toolbar" "hide")
      (% ".fronkensteen-bottom-toolbar" "hide")
      (% "#fronkensteen-wiki-toolbar" "show")
      (% "#fronkensteen-bottom-toolbar" "show")
      (fix-uncacheable title)
      (remove-dirty-pages fronkensteen-dirty-pages)
      (% "#fronkensteen-wiki-title" "html" title)
      (let ((content-name (<< "#fronkensteen-wiki-content-" (encode-base-32 title))))
          (if (not (element-exists? content-name))
              (begin
                (% "#fronkensteen-wiki-content-container" "append" (dv (<< content-name ".fronkensteen-wiki-content-wrapper!tabindex='-1'") (dv (<< content-name "-body.fronkensteen-wiki-content.fronkensteen-wiki-content-text!tabindex='1'") "")))
                (render-wiki-content (<< content-name "-body") wikidata)
                ))
          (% ".fronkensteen-wiki-content-wrapper" "hide")
          (% content-name "show")

          (set! current-title title)
          (timer (lambda ()
            (% (<< content-name "-body") "focus")) 1)
          ;(scroll-to-top content-name)
          )
      (% ".wikilink" "off" "click")
      (% ".wikilink" "on" "click"
        (lambda (ev)
          (let ((target (js-ref ev "currentTarget")))
            (let ((title  (element-read-attribute target "target")))
                (display-wiki-page title #t)))))
      (% ".externallink" "off" "click")
      (% ".externallink" "on" "click"
        (lambda (ev)
          (let ((target (js-ref ev "currentTarget")))
            (let ((url  (element-read-attribute target "target")))
                (open-url url)))))
    (% ".hashlink" "off" "click")
    (% ".hashlink" "on" "click"
      (lambda (ev)
        (let ((target (js-ref ev "currentTarget")))
          (let ((tag (element-read-attribute target "target")))
                (search-hash-tag tag)
               ))))
      (show-ui-panel "#fronkensteen-wiki-wrapper")


      )


;;;;;!
; (exec-wiki-page title)‌‌ procedure
; Executes any embedded Scheme or JavaScript code in the specified'
; page, without actually rendering the page.
;;;;;!

(define (exec-wiki-page title)
  (fronkenmark-set-source-file title)
  (let ((wikidata (retrieve-wiki-data title)))
    (if (eq? wikidata #f)
        (console-error (<< "Error retrieving wiki page: " title))
        (fronkenmark wikidata #t #t)
        )))


(define (render-wiki-content container-id content)
(let ((rendered-content (fronkenmark content #t #t)))
(% container-id "html" rendered-content)
(timer (lambda()
  (% "#fronkensteen-wiki-content-wrapper" "focus")) 0.1)
;(% "#fronkensteen-print-preview" "html" rendered-content)
  (wire-ui)))

(define (get-matching-wiki-files title)
  (process-matching-wiki-files (encode-uri title) (vector->list(get-internal-dir "user-files/wiki"))))

(define (process-matching-wiki-files encoded-title file-list)
  (if (eqv? file-list '())
    '()
    (if (eqv? (indexOf (file-basename (car file-list)) encoded-title) 0)
      (cons (car file-list) (process-matching-wiki-files encoded-title (cdr file-list)))
      (process-matching-wiki-files encoded-title (cdr file-list)))))

(define (process-internal-text-file filename extension)
  (let ((data  (read-internal-text-file filename)))
      (cond ((eqv? extension "fmk") data)
            ((eqv? extension "txt") data)
            ((eqv? extension "md") data)
            ((eqv? extension "js") (eval-js-string data))
            ((eqv? extension "scm") (eval-scheme-string data))
      )))

(define (retrieve-wiki-data title)
  (let ((filename (wiki-data-path title)))
    (let ((extension (file-extension filename)))
      (cond ((is-text-file? extension)
            (if (file-exists? filename)
              (process-internal-text-file filename extension)

              #f))
             ((is-image-file? extension) (retrieve-wiki-image filename))
             ((is-video-file? extension) (retrieve-wiki-video filename))
             ((is-audio-file? extension) (retrieve-wiki-audio filename))
            (#t (begin
                  (alert (<< "No handler for file type " extension))
                  "")))
      )))


(define (set-wiki-data title data)
  (let ((filename (wiki-data-path title)))
    (let ((extension (file-extension filename)))
      (if (is-text-file? extension)
             (write-internal-text-file filename data)
             (write-internal-file filename data ))
      )))

(define (init-wiki-viewer)
  (add-ui-panel "#fronkensteen-wiki-wrapper"
  (<<
     (dv "#fronkensteen-wiki-viewer.noprint"
      (<<
        (dv "#fronkensteen-wiki-toolbars"
          (<<
          (dv "#fronkensteen-wiki-toolbar.fronkensteen-toolbar"
            (<<
              (span "#fronkensteen-wiki-title" "")
              (span "#fronkensteen-wiki-toolbar-buttons" (generate-wiki-toolbar))))
          (dv "#fronkensteen-editor-toolbar.fronkensteen-toolbar"
            (fronkensteen-editor-controls)
          )
          (dv "#fronkensteen-preview-toolbar.fronkensteen-toolbar"
            (<<
            "Preview&nbsp;"
            (button "#fronkensteen-preview-done-button!title='Done'"
              (iconic-icon "check"))))
          ))
          (dv "#fronkensteen-wiki-content-container"
            (<<
              (dv (<< "#fronkensteen-wiki-preview" ".fronkensteen-wiki-content.fronkensteen-wiki-preview")
                "")
            ))
           (dv "#fronkensteen-bottom-toolbars"
            (<<
             (dv "#fronkensteen-bottom-toolbar.fronkensteen-bottom-toolbar" (<< (internal-image "!style='height:1em;'" "user-files/wiki/images/fronkensteenlogo.png")
             "&nbsp; Powered by Fronkensteen"
             ))
             (dv "#fronkensteen-editor-bottom-toolbar.fronkensteen-bottom-toolbar"
                (fronkensteen-editor-search-toolbar)
             )
             ))
        )

        ))

        )

  (show-ui-panel "#fronkensteen-wiki-wrapper")
  (% "#fronkensteen-editor-search-case-sensitive" "on" "change" (lambda (ev)
    (set-checkbox-checked! "#fronkensteen-editor-search-regex" #f)
  ))
  (% "#fronkensteen-editor-search-regex" "on" "change" (lambda (ev)
    (set-checkbox-checked! "#fronkensteen-editor-search-case-sensitive" #f)
  ))
  )



(define (init-wiki-history-display)
  #f
)

(define (collect-wiki-page-list)
  (assemble-wiki-page-list (vector->list (get-internal-dir "user-files/wiki"))))

(define (assemble-wiki-page-list raw-list)
  (if (eqv? raw-list '())
    '()
    (cons (wiki-display-name (decode-uri (car raw-list))) (assemble-wiki-page-list (cdr raw-list)))))

(define (show-wiki-toolbar title)
  (% ".fronkensteen-toolbar" "hide")
  (% (<< "#fronkensteen-" title "-toolbar") "show"))


(define (#fronkensteen-wiki-save-work_space-button_click)
    (save-the-static-world))

(define (wiki-file-uploaded filename data)
  (let ((extension (file-extension filename)))
  (if (or (is-video-file? extension) (is-audio-file? extension))
    (save-wiki-file (<< "media/" filename) data)
    (if (is-image-file? extension)
      (save-wiki-file (<< "images/" filename) data)
      (save-wiki-file filename data)))))

(define (save-wiki-file filename data)
   (let ((path (wiki-data-path filename)))
      (write-data-url-to-internal-file path data)))

(define (#fronkensteen-wiki-lambda-button_click)
  (show-procedure-lookup)
  (show-mini-repl))


(define (#fronkensteen-wiki-import-file-button_click)
    (upload-file ".png,.jpg,.gif,.svg,.mp3,.mp4,.m4v,.scm,.txt,.fmk,.md" #t wiki-file-uploaded))


; Startup
(define (system-launch)
  (exec-wiki-page "system/Launch System")
  (enable-wiki-nav-buttons))

(define (process-wiki-documentation)
  (let ((wikidata (retrieve-wiki-data "docs/Scheme Documentation")))
      (process-doc-strings wikidata)))


(define-macro (read-input-value id)
  `(% (<< "#" (symbol->string ,id)) "val"))
