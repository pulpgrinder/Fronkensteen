
; Startup

(define is-touch-device? #f)
(define (system-launch)
 (generate-root-ui)
 (detect-touch)
 (resize-content)
 (exec-wiki-page "system/themes")
 (exec-wiki-page "system/Launch System")
 ;(process-wiki-documentation)
 #t
)
