
;;;;!
;(wikipath basename)
; Returns the full path to a wiki file with the given basename.
;;;;!

(define (wiki-data-path basename)
  (let ((encoded-basename (<< "user-files/wiki/"  (encode-uri basename))))
    (if (eqv? (file-extension encoded-basename) "")
      (<< encoded-basename ".fmk")
      encoded-basename)))

(define (is-wiki-path? filepath)
    (eqv? (index-of filepath "user-files/wiki/") 0))

(define (display-wiki-page title)
  (let ((wikidata (retrieve-wiki-data title)))
    (if wikidata
      (begin
        (display-wiki-content title wikidata)
        (show-bottom-toolbar "#fronkensteen-page-control-bar")
        (enable-fronkensteen-nav-buttons))
      (edit-wiki-page title))
    (if (element-visible? "#fronkensteen-search-bar-container")
      (run-wiki-search))
    ))

(define (#fronkensteen-page-refresh-button_click ev)
    (make-page-dirty (get-tos-page-id))
    (display-wiki-page (get-tos-page-title)))

(define (#fronkensteen-page-special-button_click ev)
    (display-wiki-page "special/Special Pages"))

(define (#fronkensteen-page-home-button_click ev)
    (display-wiki-page "Main"))

(define (#fronkensteen-page-docs-button_click ev)
    (display-wiki-page "special/Documentation"))

(define (#fronkensteen-page-trash-button_click ev)
    (if (eqv? (get-tos-page-title) "system/Launch System")
      (alert "Sorry, can't delete the system launch page. Feel free to edit it, though.")
      (if (confirm (<< (get-tos-page-title) ": move to Trash? Are you sure?"))
        (begin
          (let ((filename (wiki-data-path (get-tos-page-title))))
            (trash-internal-file filename)
            (set! fronkensteen-page-history-list (cdr fronkensteen-page-history-list))
            (if (eqv? fronkensteen-page-history-list '())
              (display-wiki-page "Main")
              (display-history-tos)))))))


(define (fix-uncacheable title content-id)
  (if (or
          (eq? (index-of title "special/") 0)
          (eq? (index-of title "system/") 0)
          (eq? (index-of title "themes/") 0)
          (>= (index-of title "-nocache") 0))
      (make-page-dirty content-id)))

(define (display-wiki-content title wikidata)
      (fronkenmark-set-source-file title)
      (let ((content-id (<< "#id-" (encode-base-32 (wiki-data-path title)))))
      (let ((wrapper-id (<< content-id "-wrapper")))
      (fix-uncacheable title content-id)
      (remove-dirty-pages fronkensteen-dirty-pages)
      (if (not (element-exists? wrapper-id))
        (begin
          (% "#fronkensteen-content" "append"  (dv (<< wrapper-id  ".fronkensteen-page-wrapper") ""))
          (render-wiki-content wrapper-id wikidata)
          (process-wiki-links wrapper-id)
        ))
      (add-page-history title "wiki-page" content-id)
      (display-history-tos)
      )))

(define (process-wiki-links content-id)
  (% (<< content-id " .wikilink") "off" "click")
  (% (<< content-id " .wikilink") "on" "click"
    (lambda (ev)
      (let ((target (js-ref ev "currentTarget")))
        (let ((title  (element-read-attribute target "target")))
            (display-wiki-page title)))))
  (% (<< content-id " .externallink") "off" "click")
  (% (<< content-id " .externallink") "on" "click"
    (lambda (ev)
      (let ((target (js-ref ev "currentTarget")))
        (let ((url  (element-read-attribute target "target")))
            (open-url url)))))
  (% (<< content-id " .hashlink") "off" "click")
  (% (<< content-id " .hashlink") "on" "click"
  (lambda (ev)
    (let ((target (js-ref ev "currentTarget")))
      (let ((tag (element-read-attribute target "target")))
            (search-hash-tag tag)
           )))))


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
(% container-id "html" (dv ".fronkensteen-page-content" rendered-content))
  (wire-ui)))

(define (get-matching-wiki-files title)
  (process-matching-wiki-files (encode-uri title) (vector->list(get-internal-dir "user-files/wiki"))))

(define (process-matching-wiki-files encoded-title file-list)
  (if (eqv? file-list '())
    '()
    (if (eqv? (index-of (file-basename (car file-list)) encoded-title) 0)
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




(define (collect-wiki-page-list)
  (assemble-wiki-page-list (vector->list (get-internal-dir "user-files/wiki"))))

(define (assemble-wiki-page-list raw-list)
  (if (eqv? raw-list '())
    '()
    (cons (wiki-display-name (decode-uri (car raw-list))) (assemble-wiki-page-list (cdr raw-list)))))




(define (wiki-file-uploaded filename data)
  (let ((extension (file-extension filename)))
  (if (or (is-video-file? extension) (is-audio-file? extension))
    (save-wiki-file (<< "media/" filename) data)
    (if (is-image-file? extension)
      (save-wiki-file (<< "images/" filename) data)
      (save-wiki-file filename data))))
(fronkensteen-toast (<< filename " uploaded") "c" "c" 2))

(define (save-wiki-file filename data)
   (let ((path (wiki-data-path filename)))
      (write-data-url-to-internal-file path data)))


(define (#fronkensteen-page-import-file-button_click)
    (upload-file ".png,.jpg,.gif,.svg,.mp3,.mp4,.m4v,.scm,.txt,.fmk,.md" #t wiki-file-uploaded "data"))


(define (process-wiki-documentation)
  (let ((wikidata (retrieve-wiki-data "system/Scheme Documentation")))
      (process-doc-strings wikidata)))


(define-macro (read-input-value id)
  `(% (<< "#" (symbol->string ,id)) "val"))
