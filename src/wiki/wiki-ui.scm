
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
      (dv "#fronkensteen-content" "")
      (dv "#upload_download"
        (<<
        (a "#fronkensteen-download-link" "")
        (input "#fronkensteen-upload-element!type='file'"))
        )
 ))
)

(define (generate-wiki-toolbar)
(fronkensteen-bottom-toolbar "#wiki-control-bar"
  (topcoat-button-bar
  (<<
    (fronkensteen-toolbar-button "#fronkensteen-wiki-save-button"  "save" "Save Workspace" "")
    (fronkensteen-toolbar-button "#fronkensteen-wiki-home-button" "home" "Return to Main page" "")
    (fronkensteen-toolbar-button "#fronkensteen-wiki-edit-button"  "edit" "Edit Page" "")
    (fronkensteen-toolbar-button "#fronkensteen-wiki-history-button.wiki-history-button" "clock" "Show history" "")
    (fronkensteen-toolbar-button "#fronkensteen-wiki-refresh-button" "redo" "Refresh this page"  "")
    (fronkensteen-toolbar-button "#fronkensteen-wiki-search-button.wiki-search" "search" "Search" "")
    (fronkensteen-toolbar-button "#fronkensteen-wiki-new-page-button" "plus" "Create a new page"  "")
     (fronkensteen-toolbar-button "#fronkensteen-wiki-incoming-links-button" "hand-point-right" "What links here?" "")
    (fronkensteen-toolbar-button "#fronkensteen-wiki-lambda-button" "" "Programming tools" "λ")
    (fronkensteen-toolbar-button "#fronkensteen-wiki-import-file-button" "upload" "Import media file"  "")
    (fronkensteen-toolbar-button "#fronkensteen-wiki-special-button" "gift" "Special pages"  "")
    (fronkensteen-toolbar-button "#fronkensteen-wiki-docs-button" "book" "Documentation"  "")
    (fronkensteen-toolbar-button "#fronkensteen-wiki-delete-button" "trash" "Delete this page"  "")
    )))
    (set-save-popover)
    (wire-ui)
)


(define (#fronkensteen-wiki-save-button_click)
  (console-log "Save button clicked")
  (toggle-popover "#fronkensteen-wiki-save-button")
  (wire-ui))

(define (set-save-popover)
  (set-popover "#fronkensteen-wiki-save-button"
    (topcoat-button-bar
    (<<
      (fronkensteen-toolbar-text-button "#wiki-save-world-button.save-button" "Save as standalone HTML web page" "Web Page")
      (fronkensteen-toolbar-text-button "#wiki-save-filesystem-button.save-button" "Export Fronkensteen filesystem" "File System")
      (fronkensteen-toolbar-text-button "#wiki-save-wiki-files-button.save-button" "Only Wiki Bundle " "Wiki")

)) (scheme->json '(("dismissable" . #t))) ))


(define (#wiki-save-wiki-files-button_click)
    (timer (lambda ()
      (save-package-files "user-files/wiki" (<< app-name "-wiki-" (file-version-time-stamp) ".fronkenwiki") "application/x-fronkenwiki" )
      (hide-popover "#fronkensteen-wiki-save-button")
    ) 0.1))

(define (#wiki-save-world-button_click)
    (timer (lambda ()
      (save-the-static-world)
      (hide-popover "#fronkensteen-wiki-save-button")
    ) 0.1)
    )

(define (#wiki-save-filesystem-button_click)
    (timer (lambda ()
      (save-the-file-system)
      (hide-popover "#fronkensteen-wiki-save-button")
    ) 0.1)
)
(define (.wiki-history-button_click ev)
  (let ((target (js-ref ev "currentTarget")))
    (let ((id (<< "#" (element-read-attribute target "id"))))
      (set-popover (<<  id)
        (popup-list
          (build-wiki-history-display wiki-history-list)) (scheme->json '(("dismissable" . #t))))
     (toggle-popover id)
      (wire-ui)
      (% ".wiki-history-entry" "on" "click" (lambda (ev)
        (destroy-popover id)
        (let ((target (js-ref ev "currentTarget")))
          (let ((title  (element-read-attribute target "title"))
                (type (element-read-attribute target "type")))
            (if (eqv? type "page")
              (display-wiki-page title #t)
              (edit-wiki-page title))
              (enable-wiki-nav-buttons))))))))

(define (generate-wiki-navbar)
(fronkensteen-top-toolbar "#wiki-nav-bar"
  (<<
      (topcoat-navigation-bar-item "#fronkensteen-nav-back.wiki-nav.left" (fa-icon "" "chevron-left" ""))
      (topcoat-navigation-bar-item  "#fronkensteen-page-title" (<<
          (topcoat-navigation-bar-title "#wiki-page-title" "")
          (input "#wiki-editor-page-title.topcoat-text-input!type='text'!size='20'")
          ))
      (topcoat-navigation-bar-item "#fronkensteen-nav-forward.wiki-nav.right" (fa-icon "" "chevron-right" "")))))



(define (fronkensteen-toolbar-text-button id title text)
    (topcoat-button-bar-button (<< id ".fronkensteen-wiki-toolbar-button!title='" title "'") text))

(define (fronkensteen-toolbar-button id icon-name title text)
    (topcoat-button-bar-button (<< id ".fronkensteen-wiki-toolbar-button!title='" title "'")
    (fa-icon "" icon-name text)))

(define (resize-content)
  (let ((topbar-height (% "#fronkensteen-top-toolbar-container" "height"))
        (bottombar-height (% "#fronkensteen-bottom-toolbar-container" "height"))
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
                (".wiki-page-wrapper" (
                  "height" ,(<< (number->string client-height) "px")
                  ))
                  )))))))
