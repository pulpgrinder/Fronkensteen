(define (.pnav-edit_touch_click evt)
    (display-wiki-editor-page (active-page-title)))

(define (.code-editor-doc_touch_click evt)
  (display-wiki-doc-page "Code Editor"))

(define (.wiki-editor-doc_touch_click evt)
  (display-wiki-doc-page "Formatting"))


(define (.text-editor-button_click ev)
  (let ((target (js-ref ev "currentTarget")))
    (let ((command (% target "attr" "command")))
      (cond
        ((eqv? command "bold") (text-editor-bold active-editor))
        ((eqv? command "italic") (text-editor-italic active-editor))
        ((eqv? command "strikeout") (text-editor-strikeout active-editor))
        ((eqv? command "runscheme") (text-editor-scheme-eval active-editor))
        )

)))


(define (text-editor-tools)
  (pbutton-group ".pcolor-grey" (<<
    (pbutton ".pcolor-grey.text-editor-button!command='bold'!title='bold'" (fa-icon "" "bold" ""))
    (pbutton ".pcolor-grey.text-editor-button!command='italic'!title='italic'" (fa-icon "" "italic" ""))
    (pbutton ".pcolor-grey.text-editor-button!command='strikeout'!title='strikeout'" (fa-icon "" "strikethrough" ""))
    (pbutton ".pcolor-grey.text-editor-button!command='runscheme'!title='Eval selected Scheme code (or expression preceding cursor)'" (b "λ"))
    )))

(define (code-editor-tools)
  (pbutton-group ".pcolor-grey" (<<
    (pbutton ".pcolor-grey.code-editor-button!command='runscheme'!title='Eval selected Scheme code (or expression preceding cursor)'" (b "λ"))
    )))

(define (.code-editor-done_touch_click evt)
  (let ((filename (% (<< active-code-editor-page " .code-editor-title") "val"))
         (old-filename (active-code-filename)))
       (if (not (eqv? filename old-filename))
          (file-rename old-filename filename))
       (write-internal-text-file filename (cm-editor-get-text active-code-editor))
       (% active-code-editor-page "attr" "wiki-timestamp" (number->string (+ 1 (unix-time))))
       (set! display-mode "wiki")
       (set! active-code-editor-page #f)
       (display-wiki-page (active-page-title) #t "revolution")
       ))

(define (.wiki-editor-done_touch_click evt)
  (let ((editor-page (<< active-wiki-page "-editor")))
  (let ((title (% (<< editor-page " .wiki-editor-title") "val"))
         (old-title (active-page-title)))
       (if (not (eqv? title old-title))
          (file-rename (wiki-data-path old-title) (wiki-data-path title)))
       (write-internal-text-file (wiki-data-path title) (cm-editor-get-text active-editor))
       (% editor-page "attr" "wiki-timestamp" (number->string (+ 1 (unix-time))))
       (set! display-mode "wiki")
       (set! active-editor-page #f)
       (display-wiki-page title #t "revolution")
       )
       ))


(define (new-code-editor-toolbar-element filename)
  (let ((code-data (read-internal-text-file filename))
      (id (<< (code-page-id filename) "-editor")))
    (stage-page
      (peditor-toolbar (<< id "!type='code-editor-page'!filename='" (encode-base-32 filename) "'" "!wiki-timestamp='" (number->string  (unix-time)) "'")
      (<<
          (pheader (<< ".code-page.wiki-theme")
              (pnav-button (<< ".code-editor-done"  ".code-editor-page.wiki-theme") (fa-icon ".pnav-left!title='Done'" "check" ""))
              (input (<< ".code-editor-title!type='text'!autocorrect='off'!autocapitalize='off'!spellcheck='false'!value='" filename "'"))
              (pnav-button (<< ".code-editor-doc" ".code-editor-page.wiki-theme") (fa-icon ".pnav-right!title='Help'" "question-circle" ""))
              )
            (dv ".editor-toolbar" (code-editor-tools))
            (peditor-content (textarea (<< id "-textarea.wiki-editor-area!autocorrect='off'!autocapitalize='off'!spellcheck='false'") code-data))
        )
    ))
    (wire-ui)
    id))

(define (new-code-editor-notoolbar-element filename)
  (let ((code-data (read-internal-text-file filename))
      (id (<< (code-page-id filename) "-editor")))
    (stage-page
      (peditor (<< id "!type='code-editor-page'!filename='" (encode-base-32 filename) "'" "!wiki-timestamp='" (number->string  (unix-time)) "'")
      (<<
          (pheader (<< ".code-page.wiki-theme")
              (peditor-button (<< ".code-editor-done"  ".code-editor-page.wiki-theme") (fa-icon ".pnav-left!title='Done'" "check" ""))
              (input (<< ".code-editor-title!type='text'!autocorrect='off'!autocapitalize='off'!spellcheck='false'!value='" filename "'"))
              ""
              )
            (peditor-content (textarea (<< id "-textarea.wiki-editor-area!autocorrect='off'!autocapitalize='off'!spellcheck='false'") code-data))
        ))
    )
    (wire-ui)
    id))


(define (new-wiki-editor-notoolbar-element title)
  (let ((wiki-data (retrieve-wiki-data title))
      (id (<< (wiki-page-id title) "-editor")))
  (stage-page
    (peditor (<< id "!type='wiki-editor-page'!wiki-title='" (encode-base-32 title) "'!wiki-timestamp='" (number->string  (unix-time)) "'")
        (pheader (<< ".wiki-page.wiki-theme")
            (peditor-button (<< ".wiki-editor-done"  ".wiki-page.wiki-theme") (fa-icon ".pnav-left!title='Done'" "check" ""))
            (input (<< ".wiki-editor-title!type='text'!value='" title "'"))
            (peditor-button (<< ".wiki-editor-doc" ".wiki-page.wiki-theme") (fa-icon ".pnav-right!title='Help'" "question-circle" ""))
            )
          (peditor-content (textarea (<< id "-textarea.wiki-editor-area!autocorrect='off'!autocapitalize='off'!spellcheck='false'") wiki-data))
      )
))
id)

(define (new-wiki-editor-toolbar-element title)
  (let ((wiki-data (retrieve-wiki-data title))
      (id (<< (wiki-page-id title) "-editor")))
  (stage-page
    (peditor-toolbar (<< id "!type='wiki-editor-page'!wiki-title='" (encode-base-32 title) "'!wiki-timestamp='" (number->string  (unix-time)) "'")
    (<<
        (pheader (<< ".wiki-page.wiki-theme")
            (peditor-button (<< ".wiki-editor-done"  ".wiki-page.wiki-theme") (fa-icon ".pnav-left!title='Done'" "check" ""))

            (input (<< ".wiki-editor-title!type='text'!value='" title "'"))
            (peditor-button (<< ".wiki-editor-doc" ".wiki-page.wiki-theme") (fa-icon ".pnav-right!title='Help'" "question-circle" ""))
            )
          (dv ".editor-toolbar" (text-editor-tools))
          (peditor-content (textarea (<< id "-textarea.wiki-editor-area!autocorrect='off'!autocapitalize='off'!spellcheck='false'") wiki-data))
      )
))
id))

(define (new-code-editor-element filename)
  (if (>  (js-window-width) (* 50 18))
    (new-code-editor-toolbar-element filename)
    (new-code-editor-notoolbar-element filename)))


(define (new-wiki-editor-element title)
  (if (>  (js-window-width) (* 50 18))
    (new-wiki-editor-toolbar-element title)
    (new-wiki-editor-notoolbar-element title)))

(define (create-wiki-editor-page title)
  (let ((wiki-data (retrieve-wiki-data title))
      (id (<< (wiki-page-id title) "-editor")))
    (if (element-exists? id)
      (if (wiki-page-dirty? title id)
          (begin
            (console-log "Editor page is dirty, trashing and recreating.")
            (% id "remove")
            (new-wiki-editor-element title))
           (begin
             (console-log "Editor page exists, reusing")
            id))
      (begin
        (console-log "New page editor, creating for first time.")
        (new-wiki-editor-element title)
        id))))

  (define (create-code-editor-page filename)
    (console-log (<< "create-code-editor-page: filename is " filename))
    (let ((id (<< (code-page-id filename) "-editor")))
      (if (element-exists? id)
        (if (code-page-dirty? filename id)
            (begin
              (console-log "Code editor page is dirty, trashing and recreating.")
              (% id "remove")
              (new-code-editor-element filename))
             (begin
               (console-log "Code editor page exists, reusing")
              id))
        (begin
          (console-log "New code editor, creating for first time.")
          (new-code-editor-element filename)
          id))))
