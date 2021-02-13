(define wiki-theme p-magenta)

(define (active-page-title)
  (decode-base-32 (% active-wiki-page "attr" "wiki-title"))
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

(define (create-wiki-editor-page title)
  (let ((wiki-data (retrieve-wiki-data title))
      (id (<< (wiki-page-id title) "-editor")))
    (if (element-exists? id)
      (% id "remove"))
    (stage-page
      (peditor (<< id "!type='wiki-editor-page'!wiki-title='" (encode-base-32 title) "'")
      (<<
          (pheader (<< ".wiki-page.wiki-theme")
            (<<
              (pnav-button (<< ".peditor-done"  ".wiki-page.wiki-theme") (fa-icon ".pnav-left!title='Done'" "check" ""))
              (pnav-button (<< ".pnav-editor-doc" ".wiki-page.wiki-theme") (fa-icon ".pnav-left!title='Help'" "question-circle" "")))
              (input (<< ".wiki-editor-title!type='text'!value='" title "'"))
              ""
              )
            (peditor-content (textarea (<< id "-textarea.wiki-editor-area") wiki-data))
        )
    ))
    (wire-ui)
    id))


(define (create-wiki-page title)
  (let ((wiki-data (retrieve-wiki-data title))
    (id (wiki-page-id title)))
      (if (element-exists? id)
        (% id "remove"))
     (stage-page
      (ppage-no-footer (<< id "!type='wiki-page'!wiki-title='" (encode-base-32 title) "'")
      (<<
          (pheader (<< ".wiki-page.wiki-theme")
            (<<
              (pnav-button (<< ".pnav-back"  ".wiki-page.wiki-theme") (fa-icon ".pnav-left!title='Go back'" "angle-left" ""))
              (pnav-button (<< ".pnav-menu" ".wiki-page.wiki-theme") (fa-icon ".pnav-left!title='Menu'" "bars" ""))
              (pnav-button (<< ".pnav-edit" ".wiki-page.wiki-theme") (fa-icon ".pnav-left!title='Edit this page'" "edit" ""))

              )
              title
              (pnav-button (<< ".pnav-forward" ".wiki-page.wiki-theme") (fa-icon ".pnav-right!title='Go Forward'" "angle-right" "")))
            (ppage-content (ptext (render-wiki-content (retrieve-wiki-data title))))
        )
    ))
    id))

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
  (display-wiki-menu-page "Wiki Menu"))

(define (.pnav-editor-doc_touch_click evt)
  (display-wiki-doc-page "Formatting"))

(define (.pnav-menu-done_touch_click evt)
    (close-menu))

(define (.pnav-doc-done_touch_click evt)
    (close-doc))

(define (close-doc)
   (if (> (length doc-back-list) 1)
       (begin
          (let ((prevpage (cadr doc-back-list)))
              (set! doc-back-list (cddr doc-back-list))
              (display-wiki-doc-page prevpage)
              ))
       (begin
          (set! doc-back-list '())
          (if (eqv? display-mode "editor")
            (show-page active-editor-page #t "cover")
            (show-page active-wiki-page #t "cover")))))

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

(define (.pnav-edit_touch_click evt)
    (display-wiki-editor-page (active-page-title)))

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

(define (.peditor-done_touch_click evt)
  (let ((title (% (<< active-wiki-page "-editor .wiki-editor-title") "val"))
         (old-title (active-page-title)))
       (if (not (eqv? title old-title))
          (file-rename (wiki-data-path old-title) (wiki-data-path title)))
       (write-internal-text-file (wiki-data-path title) (cm-editor-get-text active-editor))
       (dispose-cm-editor! active-editor)
       (set! display-mode "wiki")
       (set! active-editor-page #f)
       (display-wiki-page title #t "revolution")
       )

       )



(define (set-wiki-theme base active)
  (install-css "wiki-theme"
      (proc-css-list `(
          (".wiki-theme" (
              "background-color" ,base
              "color" "white"
              ))
              (".wiki-theme" (
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
