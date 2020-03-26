; root-ui.scm
; Copyright 2019-2020 by Anthony W. Hursh
; MIT license.

(define panel-stack '())

(define active-panel #f)

(define (add-ui-panel id content)
  (% "#fronkensteen-wrapper" "append"
  (dv (<< id ".fronkensteen-panel") content)))

(define (show-ui-panel id)
  (% ".fronkensteen-panel" "hide")
  (% id "show")
  (set! active-panel id))

(define (hide-ui-panel id)
  (% id "hide"))

(define (push-ui-panel)
    (set! panel-stack (cons (cons active-panel "") panel-stack)))


(define (pop-ui-panel)
    (if (eqv? panel-stack '())
      (console-log "pop-panel: panel-stack is empty")
      (begin
          (show-ui-panel (caar panel-stack))
          (set! panel-stack (cdr panel-stack)))))

(define (set-main-content content)
  (% "#fronkensteen-content" "html" content)
;  (process-latex)
  (process-embedded-code "#fronkensteen-content"))


(define (append-main-content content)
  (% "#fronkensteen-content" "append" content))
