; root-ui.scm
; Copyright 2019-2020 by Anthony W. Hursh
; MIT license.


(define window (window-object))
(define document (document-object))

(define (hide-and-resize id)
  (% id "hide")
  (resize-content))

(define (show-and-resize id)
  (% id "show")
  (resize-content))

(define (fronkensteen-toast text horizontal-position vertical-position delay)
  (let ((id (<< "#" (no-dash-uuid))))
    (% "body" "append" (dv (<< id ".fronkensteen-toast") text))
    (display-toast id horizontal-position vertical-position delay)
  ))


(define (build-fronkensteen-dialog id title text width height)
  (if (element-exists? id)
    (center-element id)
    (begin
    (% "#fronkensteen-content-container" "append"
      (dv (<< id ".fronkensteen-dialog!style='width:" width "; height: " height ";'")
        (<<
          (dv (<< id "-titlebar" ".fronkensteen-dialog-title")
            (<< title
              (span (<< id "-close-button.fronkensteen-dialog-button.icon") (i ".fas.fa-times-circle" ""))
              ))
          (dv (<< id "-body.fronkensteen-dialog-body") (dv (<< id "-content.fronkensteen-dialog-content") text)))))
  (set-draggable! (scheme->json `(("element" . ,id) ("dragitem" . ,(<< id "-titlebar")) ("closebutton" . ,(<< id "-close-button")) ("width" . ,width) (height . ,height))))
  (center-element id)
  (wire-ui))))

  (define (.fronkensteen-dialog-title_click ev)
    (% ".fronkensteen-dialog" "css" "z-index" "1")
      (let ((target (js-ref ev "currentTarget")))
        (let ((id  (element-read-attribute target "id")))
          (% (% (<< "#" id) "parent")  "css" "z-index" "10000"))))



  (define (show-mini-repl)
      (let ((repl-history (get-local-storage-item "repl-history")))

      (if (element-exists? "#fronkensteen-repl")
        #t
      (begin
        (build-fronkensteen-dialog "#fronkensteen-repl" "Mini-REPL"
          (<<
            (dv
              (<<
                (button "#repl-eval-button!title='Evaluate selection or expression before cursor'" "Eval Expr Before Cursor")
                (button "#repl-eval-buffer-button!title='Evaluate entire buffer'" "Eval Entire Buffer")

                (button "#repl-clear-button!title='Clear REPL history'" "Clear")))
            (textarea "#repl-input" "")
            ) "40em" "20em")
            (init-cm-editor! "#repl-input" "scheme")
            (if (eqv? repl-history #f)
              (cm-editor-set-text "#repl-input" "")
              (cm-editor-set-text "#repl-input" repl-history))
            (wire-ui)))))

(define (#repl-clear-button_click ev)
  (cm-editor-set-text "#repl-input" "")
  (set-local-storage-item! "repl-history" ""))

(define (#repl-eval-button_click ev)
  (cm-editor-eval-selection-or-expr-before-cursor! "#repl-input")
  (set-local-storage-item! "repl-history" (cm-editor-get-text "#repl-input")
  ))

  (define (#repl-eval-buffer-button_click ev)
    (cm-eval-editor-buffer! "#repl-input")
    (set-local-storage-item! "repl-history" (cm-editor-get-text "#repl-input")
    ))

(define (show-page-toolbars history-entry)
  (let ((type (get-history-entry-type history-entry))
        (title (get-history-entry-title history-entry)))
    (cond ((eqv? type "wiki-page")
        (begin
          (show-bottom-toolbar "#fronkensteen-page-control-bar")
          (% "#fronkensteen-editor-page-title" "hide")
          (% "#fronkensteen-page-title" "html" title)
          (% "#fronkensteen-page-title" "show")
          ))
        ((eqv? type "editor")
        (begin
            (show-bottom-toolbar "#fronkensteen-editor-control-bar")
            (% "#fronkensteen-page-title" "hide")
            (% "#fronkensteen-editor-page-title" "val" title)
            (% "#fronkensteen-editor-page-title" "show")
          )))))


(define (show-top-toolbar id)
  (% ".fronkensteen-top-toolbar" "hide")
  (% id "attr" "style" "display:flex;"))

(define (show-bottom-toolbar id)
  (% ".fronkensteen-bottom-toolbar" "hide")
  (% id "attr" "style" "display:flex;"))


  (define (generate-root-ui)
     (map (lambda(id)
       (if (element-exists? id)
         (% id "remove")
         #f)
       ) '("#fronkensteen-top-toolbar-container" "#fronkensteen-bottom-toolbar-container" "#fronkensteen-status-bar-container" "#fronkensteen-search-bar-container" "#fronkensteen-content" "#upload_download"))
    (% "body" "append"
    (<<
        (dv "#fronkensteen-top-toolbar-container.topcoat-navigation-bar" "")
        (dv "#fronkensteen-bottom-toolbar-container.topcoat-tab-bar" "")
        (dv "#fronkensteen-status-bar-container" "")
        (dv "#fronkensteen-search-bar-container" "")
        (dv "#fronkensteen-content.printable" "")
        (dv "#upload_download"
          (<<
          (a "#fronkensteen-download-link" "")
          (input "#fronkensteen-upload-element!type='file'"))
          )
       (dv "#pageprint" "Hi")
   ))
  )

(define (enable-fronkensteen-nav-buttons)
  (if (> (length fronkensteen-forward-page-history-list) 0)
    (% "#fronkensteen-nav-forward" "show")
    (% "#fronkensteen-nav-forward" "hide"))
  (if (> (length fronkensteen-page-history-list) 1)
      (% "#fronkensteen-nav-back" "show")
    (% "#fronkensteen-nav-back" "hide")))


(define (generate-fronkensteen-navbar)
  (fronkensteen-top-toolbar "#fronkensteen-nav-bar"
    (<<
        (topcoat-navigation-bar-item "#fronkensteen-nav-back.fronkensteen-nav.left" (fa-icon "" "chevron-left" ""))
        (topcoat-navigation-bar-item  "#fronkensteen-page-title-wrapper" (<<
            (topcoat-navigation-bar-title "#fronkensteen-page-title" "")
            (input "#fronkensteen-editor-page-title.topcoat-text-input!type='text'!size='30'")
            ))
        (topcoat-navigation-bar-item "#fronkensteen-nav-forward.fronkensteen-nav.right" (fa-icon "" "chevron-right" "")))))


(define (fronkensteen-toolbar-text-button id title text)
    (topcoat-button-bar-button (<< id ".fronkensteen-toolbar-button!title='" title "'") text))

(define (fronkensteen-toolbar-button id icon-name title text)
    (topcoat-button-bar-button (<< id ".fronkensteen-toolbar-button!title='" title "'")
    (fa-icon "" icon-name text)))


(define (generate-page-toolbar)
    (fronkensteen-bottom-toolbar "#fronkensteen-page-control-bar"
      (topcoat-button-bar
      (<<
        (fronkensteen-toolbar-button "#fronkensteen-page-save-world-button"  "save" "Save workspace as standalone HTML file" "")
        (fronkensteen-toolbar-button "#fronkensteen-page-home-button" "home" "Return to Main page" "")
        (fronkensteen-toolbar-button "#fronkensteen-page-edit-button"  "edit" "Edit Page" "")
        (fronkensteen-toolbar-button "#fronkensteen-page-history-button.page-history-button" "clock" "Show history" "")
        (fronkensteen-toolbar-button "#fronkensteen-page-refresh-button" "redo" "Refresh this page"  "")
        (fronkensteen-toolbar-button "#fronkensteen-page-search-button.wiki-search" "search" "Search" "")
        (fronkensteen-toolbar-button "#fronkensteen-page-new-page-button" "plus" "Create a new page"  "")
         (fronkensteen-toolbar-button "#fronkensteen-page-incoming-links-button" "hand-point-right" "What links here?" "")
        (fronkensteen-toolbar-button "#fronkensteen-page-lambda-button" "" "Programming tools" "λ")
        (fronkensteen-toolbar-button "#fronkensteen-page-import-file-button" "upload" "Import media file"  "")
        (fronkensteen-toolbar-button "#fronkensteen-page-special-button" "gift" "Special pages"  "")
        (fronkensteen-toolbar-button "#fronkensteen-page-docs-button" "book" "Documentation"  "")
        (fronkensteen-toolbar-button "#fronkensteen-page-trash-button" "trash" "Move to trash"  "")
        )))
        (wire-ui)
    )


(define (resize-content)
  (let ((topbar-height
      (if (eqv? (% "#fronkensteen-top-toolbar-container" "css" "display") "none")
            0
          (% "#fronkensteen-top-toolbar-container" "height")))
        (bottombar-height
          (if (eqv? (% "#fronkensteen-bottom-toolbar-container" "css" "display") "none")
    0
           (% "#fronkensteen-bottom-toolbar-container" "height")))
        (statusbar-height
          (if (eqv? (% "#fronkensteen-status-bar-container" "css" "display") "none")
              0
              (% "#fronkensteen-status-bar-container" "height")))
        (searchbar-height
          (if (eqv? (% "#fronkensteen-search-bar-container" "css" "display") "none")
              0
              (% "#fronkensteen-search-bar-container" "height"))))
          (let ((toolbar-height (+  topbar-height bottombar-height statusbar-height searchbar-height)))
            (let ((client-height (- (% "#fronkensteen-content-container" "height") toolbar-height)))
            (install-css "sized-css"
                (proc-css-list `(
                  ("#fronkensteen-content" (
                    "top" ,(<< (number->string (+ 1 toolbar-height))
                    "px;")
                    ))
                ("#fronkensteen-bottom-toolbar-container" (
                  "top" ,(<< (number->string topbar-height) "px")))
                  ("#fronkensteen-status-bar-container" (
                    "top" ,(<< (number->string (+ topbar-height bottombar-height)) "px")))
                    ("#fronkensteen-search-bar-container" (
                      "top" ,(<< (number->string (+ topbar-height bottombar-height statusbar-height)) "px")))
                (".fronkensteen-page-wrapper" (
                  "height" ,(<< (number->string client-height) "px")
                  ))
                  )))))))
