
(define (#fronkensteen-page-save-world-button_click)
  (toggle-popover "#fronkensteen-page-save-world-button")
  (wire-ui))

(define (#fronkensteen-page-open-workspace-button_click)
  (toggle-popover "#fronkensteen-page-open-workspace-button")
  (wire-ui))

(define (#fronkensteen-page-save-wiki-button_click)
    (timer (lambda ()
      (save-package-files "user-files/wiki" (<< app-name "-wiki-" (file-version-time-stamp) ".json") "application/json" )
      (toggle-popover "#fronkensteen-page-save-world-button")
    ) 0.1))

(define (#fronkensteen-page-load-wiki-button_click)
      (console-log "fronkensteen-page-load-wiki-button")
      (upload-file ".json" #f wiki-data-file-uploaded "data")
      (toggle-popover "#fronkensteen-page-open-workspace-button")
      )

(define (wiki-data-file-uploaded filename data)
  (console-log "wiki file uploaded")
  (install-package data)
  (display-wiki-page "Main")
  (#fronkensteen-page-refresh-button_click)
	(wire-ui))

(define (#fronkensteen-page-save-world-button_click)
    (timer (lambda ()
      (save-the-static-world)
      (toggle-popover "#fronkensteen-page-save-world-button")
    ) 0.1)
    )

(define (#fronkensteen-page-open-workspace-button_click)
  (upload-file ".html" #f overwrite-system "text")
  (toggle-popover "#fronkensteen-page-open-workspace-button"))

(define (#fronkensteen-nav-back_click)
  (navigate-history-back)
  (enable-fronkensteen-nav-buttons))


(define (#fronkensteen-nav-forward_click)
    (navigate-history-forward)
    (enable-fronkensteen-nav-buttons))

(define (display-history-tos)
    (% ".fronkensteen-page-wrapper" "hide")
    (if (eqv? fronkensteen-page-history-list '())
        (display-wiki-page "Main")
    (let ((tos (car fronkensteen-page-history-list)))
      (% (<< (get-history-entry-id tos) "-wrapper") "show")
      (show-page-toolbars tos))))
