
(define (show-top-toolbar id)
  (% ".fronkensteen-top-toolbar" "hide")
  (% id "attr" "style" "display:flex;"))

(define (show-bottom-toolbar id)
  (% ".fronkensteen-bottom-toolbar" "hide")
  (% id "attr" "style" "display:flex;"))


(define (generate-wiki-toolbar)
(fronkensteen-bottom-toolbar "#wiki-control-bar"
  (topcoat-button-bar
  (<<
    (fronkensteen-toolbar-button "#fronkensteen-wiki-save-workspace-button"  "save" "Save Workspace" "")
    (fronkensteen-toolbar-button "#fronkensteen-wiki-home-button" "home" "Return to Main page" "")
    (fronkensteen-toolbar-button "#fronkensteen-wiki-edit-button"  "edit" "Edit Page" "")
    (fronkensteen-toolbar-button "#fronkensteen-wiki-history-button.wiki-history-button" "clock" "Show history" "")
    (fronkensteen-toolbar-button "#fronkensteen-wiki-refresh-button" "redo" "Refresh this page"  "")
    (fronkensteen-toolbar-button "#fronkensteen-wiki-search-button" "search" "Search" "")
    (fronkensteen-toolbar-button "#fronkensteen-wiki-new-page-button" "plus" "Create a new page"  "")
     (fronkensteen-toolbar-button "#fronkensteen-wiki-incoming-links-button" "hand-point-right" "What links here?" "")
    (fronkensteen-toolbar-button "#fronkensteen-wiki-lambda-button" "" "Programming tools" "λ")
    (fronkensteen-toolbar-button "#fronkensteen-wiki-import-file-button" "upload" "Import media file"  "")
    (fronkensteen-toolbar-button "#fronkensteen-wiki-special-button" "gift" "Special pages"  "")
    (fronkensteen-toolbar-button "#fronkensteen-wiki-docs-button" "book" "Documentation"  "")
    (fronkensteen-toolbar-button "#fronkensteen-wiki-delete-button" "trash" "Delete this page"  "")
    )))
)

(define (.wiki-history-button_click ev)
  (let ((target (js-ref ev "currentTarget")))
    (let ((id (<< "#" (element-read-attribute target "id"))))
      (set-popover (<<  id)
      (build-wiki-history-display fronkensteen-wiki-history-list))
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
          (input "#wiki-editor-page-title!type='text'!size='20'")
          ))
      (topcoat-navigation-bar-item "#fronkensteen-nav-forward.wiki-nav.right" (fa-icon "" "chevron-right" "")))))


(define (fronkensteen-toolbar-button id icon-name title text)
    (topcoat-button-bar-button (<< id ".fronkensteen-wiki-toolbar-button!title='" title "'")
    (fa-icon "" icon-name text)))

(define (resize-content)
  (let ((topbar-height (% "#fronkensteen-top-toolbar-container" "height")))
    (let ((bottombar-height (% "#fronkensteen-bottom-toolbar-container" "height")))
      (let ((toolbar-height (+  topbar-height bottombar-height)))
        (let ((client-height (- (% "#fronkensteen-content-container" "height") toolbar-height)))
          (install-css "sized-css"
              (proc-css-list `(
                ("#fronkensteen-content" (
                  "top" ,(<< (number->string toolbar-height)
                  "px;")
                ))
                ("#fronkensteen-bottom-toolbar-container" (
                  "top" ,(<< (number->string topbar-height) "px")))
                (".wiki-page-wrapper" (
                  "height" ,(<< (number->string client-height) "px")
                  ))
                  ))))))))
