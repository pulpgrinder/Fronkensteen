(define (init-wiki-viewer)
 (generate-root-ui)
 (generate-fronkensteen-navbar)
 (generate-page-toolbar)
 (generate-search-bar)
 (generate-editor-toolbar)
 (show-top-toolbar "#fronkensteen-nav-bar")
 (show-bottom-toolbar "#fronkensteen-page-control-bar")
 (% ".editor-search" "hide")
 (wire-ui)
 )



; Startup


(define is-touch-device? #f)
(define (system-launch)
(% "*" "on" "touchstart" (lambda (ev)
  (console-log "touch device detected")
  (set! is-touch-device? #t)
  (% "*" "off" "touchstart")
  (wire-ui)
  ))
 (init-wiki-viewer)
 (exec-wiki-page "system/Launch System")
 (resize-content)
 #t
)
