; root-ui.scm
; Copyright 2019-2020 by Anthony W. Hursh
; MIT license.


(define window (window-object))
(define document (document-object))

(define (generate-popover-menu id)
  (% "#fronkensteen-content" "append" (dv (<< id "-wrapper.fronkensteen-popover-menu") (dv (<< id "-content") ""))))

(define (show-popover-menu id)
  (% (<< id "-wrapper") "show"))

(define (hide-popover-menu id)
  (% (<< id "-wrapper") "hide"))

(define (set-popover-content id content)
  (% (<< id "-content") "html" content))
