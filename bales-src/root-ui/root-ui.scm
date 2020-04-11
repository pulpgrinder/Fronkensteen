; root-ui.scm
; Copyright 2019-2020 by Anthony W. Hursh
; MIT license.

(define panel-stack '())

(define active-panel #f)

(define (add-ui-panel id content)
  (% "#fronkensteen-wrapper" "append"
  (dv (<< id ".fronkensteen-panel") content)))


(define (show-ui-panel id)
  (set-window-location-hash! "")
  (display-ui-panel id)
  (push-browser-state (scheme->json `(("panel" . ,active-panel) ("hash" . ,(window-location-hash)))) "" "")
  )


; Just makes the specified panel visible, doesn't fool with the history stack.
(define (display-ui-panel id)
  (% ".fronkensteen-panel" "hide")
  (% id "show")
  (set! active-panel id))


(define (hide-ui-panel id)
  (% id "hide"))

(define (set-main-content content trusted)
  (% "#fronkensteen-content" "html" content)
  (process-latex "#fronkensteen-content")
  (if trusted
    (process-embedded-code "#fronkensteen-content")
    #f))


(define (append-main-content content)
  (% "#fronkensteen-content" "append" content))

(define window (window-object))
(define document (document-object))

(% window "on" "hashchange" (lambda (ev)
  (set-window-location-hash! "")
  (replace-browser-state (scheme->json `(("panel" . ,active-panel) ("hash" . ,(window-location-hash)))) "" "")
  #f ; prevent default action, keeps another state from being added to history.
))

(define (pop-browser-state_handler state)
    (if (eqv? state #f)
        #f
        (let ((scheme-state (json->scheme state)))
          (let ((panel (assq "panel" scheme-state))
                (hash (assq "hash" scheme-state)))
                (if (eqv? panel #f)
                    #t
                    (display-ui-panel (cdr panel)))
                    ))))
