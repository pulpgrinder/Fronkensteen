(define editor-list '())

(define (show-editor editor-id)
  (set! active-editor (<< editor-id "-textarea"))
  (set! active-editor-page editor-id)
  (update-editor-selects)
  (show-page editor-id)
  (timer (lambda ()
    (% active-editor "focus")
    (let ((selection (cm-editor-get-selected-text active-editor)))
      (if (eqv? selection "")
        (% active-editor "click")))
    ) 1))

(define (update-editor-selects)
  (% ".editor-chooser" "html" (render-editor-selects editor-list)))

(define (.editor-chooser_change evt)
    (let ((target (js-ref evt "currentTarget")))
      (let ((editor-id (% target "val")))
      (set! active-editor (<< editor-id "-textarea"))
      (set! active-editor-page editor-id)
      (% active-editor "focus")
      (update-editor-selects)
        (show-page editor-id)
        (% active-editor "focus"))))

(define (render-editor-selects editors)
  (if (eqv? editors '())
      ""
      (let ((editor-data (car editors)))
        (let ((editor-id (cadr editor-data))
              (editor-title (car editor-data)))
        (<<
          (option (<< "!value='" editor-id "'"
              (if (eqv? editor-id active-editor-page)
                " selected"
                "")) (car editor-data))
          (render-editor-selects (cdr editors)))))))

(define (.pnav-edit_touch_click evt)
    (display-wiki-editor-page (active-page-title)))

(define (.code-editor-doc_touch_click evt)
  (display-wiki-doc-page "Code Editor"))

(define (.wiki-editor-doc_touch_click evt)
  (display-wiki-doc-page "Formatting"))


(define (.text-editor-button_click ev)
  (let ((target (js-ref ev "currentTarget")))
    (let ((command (% target "attr" "command")))
      (text-editor-execute-command command))))
(define (text-editor-execute-command command)
      (cond
        ((eqv? command "undo") (text-editor-undo active-editor))
        ((eqv? command "redo") (text-editor-redo active-editor))
        ((eqv? command "bold") (text-editor-bold active-editor))
        ((eqv? command "italic") (text-editor-italic active-editor))
        ((eqv? command "strikethrough") (text-editor-strikeout active-editor))
        ((eqv? command "superscript") (text-editor-superscript active-editor))
        ((eqv? command "subscript") (text-editor-subscript active-editor))
        ((eqv? command "underline") (text-editor-underline active-editor))
        ((eqv? command "run-scheme") (text-editor-scheme-eval active-editor))
        ((eqv? command "run-js") (text-editor-javascript-eval active-editor))
        ((eqv? command "scratch") (display-wiki-menu-page "Scratch REPL"))
        ((eqv? command "install-css") (text-editor-install-css active-editor))
        ((eqv? command "scheme-doc") (text-editor-scheme-doc active-editor))
        ((eqv? command "footnote") (text-editor-footnote active-editor))
        ((eqv? command "link") (text-editor-link active-editor))
        ((eqv? command "comment") (text-editor-comment active-editor))
        ((eqv? command "format-js") (text-editor-format-javascript active-editor))
        ((eqv? command "format-scheme") (text-editor-format-scheme active-editor))
        ((eqv? command "format-code") (text-editor-format-code active-editor))
        ((eqv? command "bulleted-list") (text-editor-bulleted-list active-editor))
        ((eqv? command "numbered-list") (text-editor-numbered-list active-editor))
        ((eqv? command "menu") (text-editor-menu active-editor))
        ((eqv? command "align-left") (text-editor-align-left active-editor))
        ((eqv? command "align-right") (text-editor-align-right active-editor))
        ((eqv? command "align-justify") (text-editor-align-justify active-editor))
        ((eqv? command "align-center") (text-editor-align-center active-editor))
        ((eqv? command "align-hanging-indent") (text-editor-align-hanging-indent active-editor))
        ((eqv? command "blockquote") (text-editor-block-quote active-editor))
        ((eqv? command "poetry") (text-editor-poetry active-editor))
        ((eqv? command "inline-latex") (text-editor-inline-latex active-editor))
        ((eqv? command "display-latex") (text-editor-display-latex active-editor))
        ((eqv? command "find") (wiki-editor-find active-editor))
        ((eqv? command "replace") (wiki-editor-replace active-editor))
        ((eqv? command "replace-and-find") (wiki-editor-replace-and-find active-editor))
        ((eqv? command "replace-all") (wiki-editor-replace-all active-editor))
        ))

(define (wiki-editor-replace-and-find editor)
  (wiki-editor-replace editor)
  (wiki-editor-find editor))

(define (wiki-editor-replace editor)
 (text-editor-replace editor (% (<< active-editor-page " .text-editor-replace-lemma") "val")))

(define (wiki-editor-replace-all editor)
  (text-editor-replace-all
    editor
    (% (<< active-editor-page " .text-editor-search-lemma") "val")
    (% (<< active-editor-page " .text-editor-replace-lemma") "val")
    (not (checkbox-checked?  (<< active-editor-page " .text-editor-case-sensitive")))
    (checkbox-checked?  (<< active-editor-page " .text-editor-regex"))))
(define (wiki-editor-find editor)
  (text-editor-find
    editor
    (% (<< active-editor-page " .text-editor-search-lemma") "val")
    (not (checkbox-checked?  (<< active-editor-page " .text-editor-case-sensitive")))
    (checkbox-checked?  (<< active-editor-page " .text-editor-regex"))
    (checkbox-checked?  (<< active-editor-page " .text-editor-search-backward"))
    )
)

(define (text-editor-search-tools)
  (pform "" (<<
    (span ".text-editor-search-caption" "Find:&nbsp;")
    (input ".text-editor-search-lemma!type='text'!size='10'")
    (span ".text-editor-search-caption" "Replace:&nbsp;")
    (input ".text-editor-replace-lemma!type='text'!size='10'")
    (pbutton ".pcolor-grey.text-editor-button!command='find'" "Find")
    (pbutton ".pcolor-grey.text-editor-button!command='replace'" "Replace")
    (pbutton ".pcolor-grey.text-editor-button!command='replace-and-find'" "Replace and find")
    (pbutton ".pcolor-grey.text-editor-button!command='replace-all'" "Replace all")
    (span "&nbsp;&nbsp;")
    (input ".text-editor-case-sensitive.search-checkbox!type='checkbox'") (span ".text-editor-search-caption" "&nbsp;case-sensitive")
    (span "&nbsp;&nbsp;")
    (input ".text-editor-regex.search-checkbox!type='checkbox'")
    (span ".text-editor-search-caption" "&nbsp;regex")
    (span "&nbsp;&nbsp;")
    (input ".text-editor-search-backward.search-checkbox!type='checkbox'")
    (span ".text-editor-search-caption" "&nbsp;search backward")
)))

(define (text-editor-tools)
  (<<
  (pbutton-group ".pcolor-grey" (<<
    (pbutton ".pcolor-grey.text-editor-button!command='undo'!title='Undo'" (fa-icon "" "undo" ""))
    (pbutton ".pcolor-grey.text-editor-button!command='redo'!title='Redo'" (fa-icon "" "redo" ""))
    (pbutton ".pcolor-grey.text-editor-button!command='bold'!title='Format selected text as bold'" (fa-icon "" "bold" ""))
    (pbutton ".pcolor-grey.text-editor-button!command='italic'!title='Format selected text as bolditalic'" (fa-icon "" "italic" ""))
    (pbutton ".pcolor-grey.text-editor-button!command='strikethrough'!title='Format selected text as strikethrough'" (fa-icon "" "strikethrough" ""))
      (pbutton ".pcolor-grey.text-editor-button!command='underline'!title='Format selected text as underline'" (fa-icon "" "underline" ""))
    (pbutton ".pcolor-grey.text-editor-button!command='superscript'!title='Format selected text as superscript'" (fa-icon "" "superscript" ""))
    (pbutton ".pcolor-grey.text-editor-button!command='subscript'!title='Format selected text as subscript'" (fa-icon "" "subscript" ""))
    (pbutton ".pcolor-grey.text-editor-button!command='footnote'!title='Format selected text as footnote'"  (fa-icon "" "asterisk" ""))
    (pbutton ".pcolor-grey.text-editor-button!command='link'!title='Format selected text as link'"  (fa-icon "" "link" ""))
    (pbutton ".pcolor-grey.text-editor-button!command='bulleted-list'!title='Format selected text as bulleted (unordered) list'" (fa-icon "" "list-ul" ""))
    (pbutton ".pcolor-grey.text-editor-button!command='numbered-list'!title='Format selected text as numbered (ordered) list'" (fa-icon "" "list-ol" ""))
    (pbutton ".pcolor-grey.text-editor-button!command='menu'!title='Format selected text as menu'" (fa-icon "" "ellipsis-v" ""))
    (pbutton ".pcolor-grey.text-editor-button!command='align-left'!title='Left-align selected text'"  (fa-icon "" "align-left" ""))
    (pbutton ".pcolor-grey.text-editor-button!command='align-right'!title='Right-align selected text'"  (fa-icon "" "align-right" ""))
    (pbutton ".pcolor-grey.text-editor-button!command='align-center'!title='Center selected text'"  (fa-icon "" "align-center" ""))
    (pbutton ".pcolor-grey.text-editor-button!command='align-justify'!title='Justify selected text'"  (fa-icon "" "align-justify" ""))
    (pbutton ".pcolor-grey.text-editor-button!command='blockquote'!title='Format selected text as block quote'" (fa-icon "" "quote-left" ""))
    (pbutton ".pcolor-grey.text-editor-button!command='align-hanging-indent'!title='Format paragraph as hanging indent'"  (fa-icon "" "indent" ""))
    (pbutton ".pcolor-grey.text-editor-button!command='format-code'!title='Format selected text as source code'" (fa-icon "" "code" ""))
    (pbutton ".pcolor-grey.text-editor-button!command='poetry'!title='Format selected text as poetry/song lyrics'"  (fa-icon "" "music" ""))

    (pbutton ".pcolor-grey.text-editor-button!command='comment'!title='Format selected text as comment'"  (b ";…"))
    (pbutton ".pcolor-grey.text-editor-button!command='format-scheme'!title='Format selected text as Scheme'" (b "()"))
    (pbutton ".pcolor-grey.text-editor-button!command='format-js'!title='Format selected text as JavaScript'"  (b "{}"))

    (pbutton ".pcolor-grey.text-editor-button!command='run-scheme'!title='Eval selected Scheme code (or expression preceding cursor)'"  (b "λ"))
    (pbutton ".pcolor-grey.text-editor-button!command='run-js'!title='Run selected JavaScript code'"   (fa-icon "" "js" ""))
    (pbutton ".pcolor-grey.text-editor-button!command='install-css'!title='Install selected CSS code'"   (fa-icon "" "css3-alt" ""))
    (pbutton ".pcolor-grey.text-editor-button!command='scheme-doc'!title='Look up selected Scheme procedure in docs'"  (fa-icon "" "info" ""))
    (pbutton ".pcolor-grey.text-editor-button!command='scratch'!title='Scratch REPL'"   (fa-icon "" "terminal" ""))
    (pbutton ".pcolor-grey.text-editor-button!command='inline-latex'!title='Format selected text as inline (small) LaTeX'"  (b "σ"))
    (pbutton ".pcolor-grey.text-editor-button!command='display-latex'!title='Format selected text as display (large) LaTeX'"  (b "∑"))
    (dv ".pure-button.pbutton" (<< "Editors:&nbsp;"
    (select ".editor-chooser" "")))
    ))
    ))

(define (code-editor-tools)
  (<<
  (pbutton-group ".pcolor-grey" (<<
    (pbutton ".pcolor-grey.text-editor-button!command='undo'!title='Undo'" (fa-icon "" "undo" ""))
    (pbutton ".pcolor-grey.text-editor-button!command='redo'!title='Redo'" (fa-icon "" "redo" ""))
      (pbutton ".pcolor-grey.text-editor-button!command='run-scheme'!title='Eval selected Scheme code (or expression preceding cursor)'"  (b "λ"))
      (pbutton ".pcolor-grey.text-editor-button!command='run-js'!title='Run selected JavaScript code'"   (fa-icon "" "js" ""))
      (pbutton ".pcolor-grey.text-editor-button!command='install-css'!title='Install selected CSS code'"   (fa-icon "" "css3-alt" ""))
      (pbutton ".pcolor-grey.text-editor-button!command='scratch'!title='Scratch REPL'"   (fa-icon "" "terminal" ""))
      (pbutton ".pcolor-grey.text-editor-button!command='scheme-doc'!title='Look up selected Scheme procedure in docs'"  (fa-icon "" "info" ""))
      (dv ".pure-button.pbutton" (<< "Editors:&nbsp;"
      (select ".editor-chooser" "")))
      ))
       ))

(define (.code-editor-done_touch_click evt)
  (let ((filename (% (<< active-editor-page " .code-editor-title") "val"))
         (old-filename (active-code-filename)))
       (if (not (eqv? filename old-filename))
          (file-rename old-filename filename))
       (write-internal-text-file filename (cm-editor-get-text active-editor))
       (% active-editor-page "attr" "wiki-timestamp" (number->string (+ 1 (unix-time))))
       (set! display-mode "wiki")
       (set! active-editor-page #f)
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
    (set! editor-list (cons (list filename id) editor-list))
    (stage-page
      (peditor-toolbar (<< id ".code-editor.text-editor!type='code-editor-page'!filename='" (encode-base-32 filename) "'" "!wiki-timestamp='" (number->string  (unix-time)) "'")
      (<<
          (pheader (<< ".code-page.wiki-theme")
              (pnav-button (<< ".code-editor-done"  ".code-editor-page.wiki-theme") (fa-icon ".pnav-left!title='Done'" "check" ""))
              (input (<< ".code-editor-title!type='text'!autocorrect='off'!autocapitalize='off'!spellcheck='false'!value='" filename "'"))
              (pnav-button (<< ".code-editor-doc" ".code-editor-page.wiki-theme") (fa-icon ".pnav-right!title='Help'" "question-circle" "")))
            (dv ".editor-toolbar" (code-editor-tools))

            (dv ".editor-toolbar" (text-editor-search-tools))

            (peditor-content (textarea (<< id "-textarea.wiki-editor-area!autocorrect='off'!autocapitalize='off'!spellcheck='false'") code-data))
        )
    ))
    (wire-ui)
    (init-cm-editor! (<< id "-textarea"))
    id))

(define (new-code-editor-notoolbar-element filename)
  (let ((code-data (read-internal-text-file filename))
      (id (<< (code-page-id filename) "-editor")))
    (set! editor-list (cons (list filename id) editor-list))
    (stage-page
      (peditor (<< id ".code-editor.text-editor!type='code-editor-page'!filename='" (encode-base-32 filename) "'" "!wiki-timestamp='" (number->string  (unix-time)) "'")
      (<<
          (pheader (<< ".code-page.wiki-theme")
              (peditor-button (<< ".code-editor-done"  ".code-editor-page.wiki-theme") (fa-icon ".pnav-left!title='Done'" "check" ""))
              (input (<< ".code-editor-title!type='text'!autocorrect='off'!autocapitalize='off'!spellcheck='false'!value='" filename "'"))
              ""
              )
            (.dv ".editor-toolbar" (<< "&nbsp;Editors:&nbsp;"
            (select ".editor-chooser" "") (select ".editor-chooser" "")))
            (peditor-content (textarea (<< id "-textarea.wiki-editor-area!autocorrect='off'!autocapitalize='off'!spellcheck='false'") code-data))
        ))
    )
    (wire-ui)
    (init-cm-editor! (<< id "-textarea"))
    id))


(define (new-wiki-editor-notoolbar-element title)
  (let ((wiki-data (retrieve-wiki-data title))
      (id (<< (wiki-page-id title) "-editor")))
  (set! editor-list (cons (list title id) editor-list))
  (stage-page
    (peditor (<< id ".wiki-editor.text-editor!type='wiki-editor-page'!wiki-title='" (encode-base-32 title) "'!wiki-timestamp='" (number->string  (unix-time)) "'")
      (<<
        (pheader (<< ".wiki-page.wiki-theme")
            (peditor-button (<< ".wiki-editor-done"  ".wiki-page.wiki-theme") (fa-icon ".pnav-left!title='Done'" "check" ""))
            (input (<< ".wiki-editor-title!type='text'!value='" title "'"))
            (peditor-button (<< ".wiki-editor-doc" ".wiki-page.wiki-theme") (fa-icon ".pnav-right!title='Help'" "question-circle" ""))
            )
          (.dv ".editor-toolbar" (<< "&nbsp;Editors:&nbsp;"
          (select ".editor-chooser" "")))
          (peditor-content (textarea (<< id "-textarea.wiki-editor-area!autocorrect='off'!autocapitalize='off'!spellcheck='false'") wiki-data)))
      )
)
id))

(define (new-wiki-editor-toolbar-element title)
  (let ((wiki-data (retrieve-wiki-data title))
      (id (<< (wiki-page-id title) "-editor")))
  (set! editor-list (cons (list title id) editor-list))
  (stage-page
    (peditor-toolbar (<< id ".wiki-editor.text-editor!type='wiki-editor-page'!wiki-title='" (encode-base-32 title) "'!wiki-timestamp='" (number->string  (unix-time)) "'")
    (<<
        (pheader (<< ".wiki-page.wiki-theme")
            (peditor-button (<< ".wiki-editor-done"  ".wiki-page.wiki-theme") (fa-icon ".pnav-left!title='Done'" "check" ""))

            (input (<< ".wiki-editor-title!type='text'!value='" title "'"))
            (peditor-button (<< ".wiki-editor-doc" ".wiki-page.wiki-theme") (fa-icon ".pnav-right!title='Help'" "question-circle" ""))
            )
          (dv ".editor-toolbar" (text-editor-tools))
          (dv ".editor-toolbar" (text-editor-search-tools))

          (peditor-content (textarea (<< id "-textarea.wiki-editor-area!autocorrect='off'!autocapitalize='off'!spellcheck='false'") wiki-data))
      )
))
id))

(define (new-code-editor-element filename)
  (if is-touch-device?
    (new-code-editor-notoolbar-element filename)
    (new-code-editor-toolbar-element filename)))


(define (new-wiki-editor-element title)
  (if is-touch-device?
    (new-wiki-editor-notoolbar-element title)
    (new-wiki-editor-toolbar-element title)))

(define (create-wiki-editor-page title)
  (let ((wiki-data (retrieve-wiki-data title))
      (id (<< (wiki-page-id title) "-editor")))
    (if (element-exists? id)
      (if (wiki-page-dirty? title id)
          (begin
            (% id "remove")
            (new-wiki-editor-element title)
            (update-editor-selects)
            id)
           (begin
            (update-editor-selects)
            id))
      (begin
        (new-wiki-editor-element title)
        (update-editor-selects)
        id))))

  (define (create-code-editor-page filename)
    (let ((id (<< (code-page-id filename) "-editor")))
      (if (element-exists? id)
        (if (code-page-dirty? filename id)
            (begin
              (% id "remove")
              (new-code-editor-element filename)
              id)
             (begin
               (update-editor-selects)
              id))
        (begin
          (new-code-editor-element filename)
          (update-editor-selects)
          id))))
