
(define (#fronkensteen-page-save-button_click)
  (toggle-popover "#fronkensteen-page-save-button")
  (wire-ui))



(define (#fronkensteen-page-save-world-button_click)
    (timer (lambda ()
      (save-the-static-world)
    ) 0.1)
    )



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
