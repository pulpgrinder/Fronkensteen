(define wiki-theme p-magenta)

(define (active-page-title)
  (decode-base-32 (% active-wiki-page "attr" "wiki-title"))
)

(define (active-code-filename)
  (decode-base-32 (% active-code-editor-page "attr" "filename"))
)
(define (refresh-current-wiki-page)
  (refresh-wiki-page active-wiki-page))

(define (refresh-wiki-page id)
  (let ((page-title (decode-base-32 (% id "attr" "wiki-title"))))
    (% id "remove")
    (display-wiki-page page-title)))


(define (create-wiki-doc-page title)
  (let ((id (wiki-page-id title)))
    (if (element-exists? id)
      (% id "remove"))
    (stage-page
      (ppage-no-footer (<< id "!type='doc-page'")
        (<<
          (pheader (<< ".wiki-page.wiki-theme")
          (<<
            (pnav-button (<< ".wiki-page.pnav-doc-done.wiki-theme") (fa-icon ".pnav-left!title='done'" "check" "")))
            title
            "")
          (ppage-content (ptext (render-wiki-content (retrieve-wiki-data  (<< "docs/" title))))))))
    id))

(define (create-wiki-menu-page title)
  (let ((id (wiki-page-id title)))
    (if (element-exists? id)
      (% id "remove"))
    (stage-page
      (ppage-no-footer (<< id "!type='menu-page'")
        (<<
          (pheader (<< ".wiki-page.wiki-theme")
          (<<
            (pnav-button (<< ".wiki-page.pnav-menu-done.wiki-theme") (fa-icon ".pnav-left!title='done'" "check" "")))
            title
            "")
          (ppage-content (ptext (render-wiki-content (retrieve-wiki-data  (<< "menus/" title))))))))
    id))

(define (new-wiki-page-element title)
    (let ((wiki-data (retrieve-wiki-data title))
    (id (wiki-page-id title)))
     (stage-page
      (ppage-double-header-no-footer (<< id "!type='wiki-page'!wiki-title='" (encode-base-32 title) "'!wiki-timestamp='" (number->string (unix-time)) "'")
      (<<
          (pheader (<< ".wiki-page.wiki-theme")
            (pnav-button (<< ".pnav-back"  ".wiki-page.wiki-theme") (fa-icon ".pnav-left!title='Go back'" "angle-left" ""))
             title
             (pnav-button (<< ".pnav-forward" ".wiki-page.wiki-theme") (fa-icon ".pnav-right!title='Go Forward'" "angle-right" "")))
          (pbar (<< ".wiki-page.wiki-theme")
            (<<
              (pnav-button (<< ".pnav-menu" ".wiki-page.wiki-theme") (fa-icon ".pnav-left!title='Menu'" "bars" ""))
              (pnav-button (<< ".pnav-edit" ".wiki-page.wiki-theme") (fa-icon ".pnav-left!title='Edit this page'" "edit" ""))

              )
              )

            (ppage-content (ptext "!tabindex='-1'" (render-wiki-content (retrieve-wiki-data title))))
        )
    ))
    id))

(define (wiki-page-dirty? title id)
  (let ((file-time (/ (get-file-timestamp (wiki-data-path title)) 1000))
        (display-time (string->number (% id "attr" "wiki-timestamp"))))
        (console-log "file-time " (number->string file-time))
        (console-log "display-time " (number->string display-time))
        (if (> file-time display-time)
          #t
          #f)))

(define (code-page-dirty? filename id)
  (let ((file-time (/ (get-file-timestamp filename) 1000))
        (display-time (string->number (% id "attr" "wiki-timestamp"))))
        (console-log "file-time " (number->string file-time))
        (console-log "display-time " (number->string display-time))
        (if (> file-time display-time)
          #t
          #f)))

(define (create-wiki-page title)
  (let ((id (wiki-page-id title)))
      (if (element-exists? id)
        (if (wiki-page-dirty? title id)
            (begin
              (console-log "Page is dirty, trashing and recreating.")
              (% id "remove")
              (new-wiki-page-element title))
             (begin
               (console-log "Page exists, reusing")
              id))
        (begin
          (console-log "New page, creating for first time.")
          (new-wiki-page-element title)
          id))))

(define (process-wiki-links content-id)
  (console-log (<<  "Processing " content-id))
  (% (<< content-id " .wikilink") "off" "click")
  (% (<< content-id " .wikilink") "on" "click"
    (lambda (ev)
      (let ((target (js-ref ev "currentTarget")))
        (let ((title  (element-read-attribute target "target")))
            (set! page-forward-list '())
            (display-wiki-page title)))))
  (% (<< content-id " .externallink") "off" "click")
  (% (<< content-id " .externallink") "on" "click"
    (lambda (ev)
      (let ((target (js-ref ev "currentTarget")))
        (let ((url  (element-read-attribute target "target")))
            (open-url url)))))

    (% (<< content-id " .menulink") "off" "click")
    (% (<< content-id " .menulink") "on" "click"
      (lambda (ev)
        (let ((target (js-ref ev "currentTarget")))
          (let ((title  (element-read-attribute target "target")))
              (display-wiki-menu-page title)))))

    (% (<< content-id " .doclink") "off" "click")
    (% (<< content-id " .doclink") "on" "click"
      (lambda (ev)
        (let ((target (js-ref ev "currentTarget")))
          (let ((title  (element-read-attribute target "target")))
              (display-wiki-doc-page title)))))

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
           ))))
  (% (<< content-id " .schemelink") "off" "click")
  (% (<< content-id " .schemelink") "on" "click"
  (lambda (ev)
    (let ((target (js-ref ev "currentTarget")))
      (let ((code (decode-base-32 (element-read-attribute target "schemeproc"))))
        (console-log (<< "Code is " code))
        (exec-string-lambda (<< "(lambda (event)\n" code "\n)\n") ev))))))

(define (show-nav-buttons)
    (if (> (length page-back-list) 1)
        (% (<< active-wiki-page " .pnav-back") "show")
        (% (<< active-wiki-page " .pnav-back") "hide")
      )
    (if (> (length page-forward-list) 0)
        (% (<< active-wiki-page " .pnav-forward") "show")
        (% (<< active-wiki-page " .pnav-forward") "hide"))

  )

(define (.pnav-menu_touch_click evt)
  (display-wiki-menu-page "Main Menu"))



(define (.pnav-menu-done_touch_click evt)
    (close-menu))

;.pnav-code-editor-done
;.pnav-code-editor-doc

(define (.pnav-doc-done_touch_click evt)
    (close-wiki-doc))

(define (close-wiki-doc)
   (console-log "close-wiki-doc")
   (if (> (length doc-back-list) 1)
       (begin
          (let ((prevpage (cadr doc-back-list)))
              (set! doc-back-list (cddr doc-back-list))
              (display-wiki-doc-page prevpage)
              ))
       (begin
          (set! doc-back-list '())
          (cond
            ((eqv? display-mode "wiki-editor") (show-page active-editor-page #t "cover"))
            ((eqv? display-mode "code-editor") (show-page active-code-editor-page #t "cover"))
            ((eqv? display-mode "wiki") (show-page active-wiki-page #t "cover"))
            ))))

(define (close-menu)
   (if (> (length menu-back-list) 1)
       (begin
          (let ((prevpage (cadr menu-back-list)))
              (set! menu-back-list (cddr menu-back-list))
              (display-wiki-menu-page prevpage)
              ))
       (begin
          (set! menu-back-list '())
          (if (eqv? display-mode "editor")
            (show-page active-editor-page #t "cover")
            (show-page active-wiki-page #t "cover")))))

(define (.pnav-back_touch_click evt)
    (nav-back))


(define (nav-back)
   (if (> (length page-back-list) 1)
       (begin
          (let ((prevpage (cadr page-back-list)))
            (set! page-back-list (cddr page-back-list))
            (set! page-forward-list (cons (active-page-title) page-forward-list))
            (set! active-wiki-page #f)
            (display-wiki-page prevpage #t)
            (show-nav-buttons)))))

(define (.pnav-forward_touch_click evt)
   (if (> (length page-forward-list) 0)
       (begin
          (let ((nextpage (car page-forward-list)))
              (set! page-forward-list (cdr page-forward-list))
              (display-wiki-page nextpage #f)
              (show-nav-buttons)))))



(define (set-wiki-theme base active)
  (install-css "wiki-theme"
      (proc-css-list `(
          (".wiki-theme" (
              "background-color" ,base
              "color" "white"
              ))
              (".wiki-theme active" (
              "background-color" ,active
              "color" "white"
              ))
          ))))

(define (set-current-theme)
  (let ((current-theme (get-local-storage-item "fronkensteen-theme"))
        (current-theme-active (get-local-storage-item "fronkensteen-theme-active")))
        (if (eqv? current-theme #f)
          (set-wiki-theme p-magenta p-magenta-active)
          (set-wiki-theme current-theme current-theme-active))))
