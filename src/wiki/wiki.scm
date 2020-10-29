
(define fronkensteen-wiki-history-list '())

(define fronkensteen-dirty-pages '())

(define current-title #f)

(define (make-page-dirty title)
  (set! fronkensteen-dirty-pages (cons title fronkensteen-dirty-pages)))

(define (remove-dirty-pages page-list)
  (if (eqv? page-list '())
    (set! fronkensteen-dirty-pages '())
    (begin
      (let ((content-name (<< "#fronkensteen-wiki-content-" (encode-base-32 (car page-list)))))
        (console-log (<< "remove-dirty page " (car page-list)))
        (% content-name "remove")
        (remove-dirty-pages (cdr page-list))))))



(define (add-wiki-history title type)
  (console-log (<< "Adding " title " " type))
  (let ((history-list (remove-wiki-history title type fronkensteen-wiki-history-list)))
  (if (or (eqv? history-list '())
        (not (and (eqv? (caar history-list) title) (eqv? (cadar history-list) type)) ) )
          (set! fronkensteen-wiki-history-list (cons (list title type) history-list)))
  (console-log "displaying history")
  (display-wiki-history)))

(define (remove-wiki-history title type history-list)
  (if (eqv? history-list '())
      '()
      (if (and (eqv? (caar history-list) title) (eqv? (cadar history-list) type))
          (remove-wiki-history title type (cdr history-list))
          (cons (car history-list) (remove-wiki-history title type (cdr history-list)))
      )))
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
          (display-wiki-page title)
          (edit-wiki-page title))
  )))))


(define (build-wiki-history-display history-list)
 (if (eqv? history-list '())
    ""
    (let ((title (caar history-list))
          (type (cadar history-list)))
      (let ((icon
            (if (eqv? type "page")
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

(define (display-wiki-page title)
  (let ((wikidata (retrieve-wiki-data title)))
    (if wikidata
      (begin
        (display-wiki-content title wikidata)
        (add-wiki-history title "page"))
      (edit-wiki-page title))))

(define (fronkensteen-wiki-refresh-button_click ev)
    (make-page-dirty current-title)
    (display-wiki-page current-title))

(define (fronkensteen-wiki-special-button_click ev)
    (display-wiki-page "special/Special Pages"))

(define (fronkensteen-wiki-home-button_click ev)
    (display-wiki-page "Main"))

(define (fronkensteen-wiki-docs-button_click ev)
    (display-wiki-page "special/Documentation"))

(define (fronkensteen-wiki-delete-button_click ev)
    (if (eqv? current-title "system/Launch System")
      (alert "Sorry, can't delete the system launch page. Feel free to edit it, though.")
      (if (confirm (<< current-title ": delete? Are you sure?"))
        (begin
            (set! fronkensteen-wiki-history-list (cdr fronkensteen-wiki-history-list))
            (let ((filename (wiki-data-path current-title)))
              (console-log (<<  "Attempting to delete " filename))
              (delete-internal-file filename)
              (if (eqv? fronkensteen-wiki-history-list '())
                (display-wiki-page "Main")
                (display-wiki-page (caar fronkensteen-wiki-history-list))))))))


(define (fix-uncacheable title)
  (if (or
          (eq? (indexOf title "special/") 0)
          (eq? (indexOf title "system/") 0)
          (>= (indexOf title "-nocache") 0))
      (make-page-dirty title)))

(define (display-wiki-content title wikidata)
      (% ".fronkensteen-toolbar" "hide")
      (% "#fronkensteen-wiki-toolbar" "show")
      (fix-uncacheable title)
      (remove-dirty-pages fronkensteen-dirty-pages)
      (% "#fronkensteen-wiki-title" "html" title)
      (let ((content-name (<< "#fronkensteen-wiki-content-" (encode-base-32 title))))
          (if (not (element-exists? content-name))
              (begin
                (% "#fronkensteen-wiki-content-container" "append" (dv (<< content-name ".fronkensteen-wiki-content-wrapper!tabindex='-1'") (dv (<< content-name "-body.fronkensteen-wiki-content.fronkensteen-wiki-content-text") "")))
                (render-wiki-content (<< content-name "-body") wikidata)
                ))
          (% ".fronkensteen-wiki-content-wrapper" "hide")
          (% content-name "show")
          (timer (lambda ()
            (% content-name "focus")) 0.5)

          (set! current-title title)
          ;(scroll-to-top content-name)
          )
      (% ".wikilink" "off" "click")
      (% ".wikilink" "on" "click"
        (lambda (ev)
          (let ((target (js-ref ev "currentTarget")))
            (let ((title  (element-read-attribute target "target")))
                (display-wiki-page title)))))
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
  (let ((wikidata (retrieve-wiki-data title)))
    (if (eq? wikidata #f)
        (console-error (<< "Error retrieving wiki page: " title))
        (fronkenmark wikidata #t #t))))


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
             (dv "#fronkensteen-bottom-toolbar.fronkensteen-bottom-toolbar" (<< (internal-image "!style='height:1em;'" "user-files/wiki/images/fronkensteenlogo.png")
             "&nbsp; Powered by Fronkensteen"
             (span "!style='float:right;'" (internal-image "!style='height:1em'" "user-files/wiki/images/fecit.png" ))
             )))
        )

        ))

        )

  (show-ui-panel "#fronkensteen-wiki-wrapper")
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


(define (fronkensteen-wiki-save-work_space-button_click)
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

(define (fronkensteen-show-repl-button_click)
  (show-mini-repl))


(define (fronkensteen-wiki-import-file-button_click)
    (upload-file ".png,.jpg,.gif,.svg,.mp3,.mp4,.m4v,.scm,.txt,.fmk,.md" #t wiki-file-uploaded))

(define (wikilink_click target link-text)
  ; target is the jQuery object that was clicked. Not used in this default code, but it's there if you need it.
  (display-wiki-page link-text))

; Startup
(define (system-launch)
  (exec-wiki-page "system/Launch System"))

(define (process-wiki-documentation)
  (let ((wikidata (retrieve-wiki-data "docs/Scheme Documentation")))
      (process-doc-strings wikidata)))


(define-macro (read-input-value id)
  `(% (<< "#" (symbol->string ,id)) "val"))
