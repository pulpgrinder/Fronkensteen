(define (init-wiki-viewer)
 (generate-root-ui)
 (generate-wiki-navbar)
 (generate-wiki-toolbar)
 (generate-search-bar)
 (generate-editor-toolbar)
 (show-top-toolbar "#wiki-nav-bar")
 (show-bottom-toolbar "#wiki-control-bar")
 (wire-ui)
 )

; Startup


(define (system-launch)
 (init-wiki-viewer)
 (exec-wiki-page "system/Launch System")
 (resize-content)
 #t
)
