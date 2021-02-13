(define is-touch-device? #f)

(define (detect-touch)
  (% "*" "on" "touchstart" (lambda (ev)
    (console-log "touch device detected")
    (set! is-touch-device? #t)
    (% "*" "off" "touchstart")
    (wire-ui))))

(define (wire-ui)
  (let ((procedure-list (vector->list (enumerate-procedures))))
    (wire-procedure-list procedure-list)))

(define (wire-procedure-list procedure-list)
  (if (eqv? procedure-list '())
    #t
    (let ((proc (car procedure-list)))
      (if (and (is-procedure-defined? proc) (str-match? proc "_" ""))
        (cond
          ((str-match? proc "_touch_click$" "")
            (if is-touch-device?
                (wire-event proc "touchstart")
                (wire-event proc "click")))
          ((str-match? proc "_click$" "")
              (wire-event proc "click"))
          ((str-match? proc "_touchstart$" "")
              (wire-event proc "touchstart"))
          ((str-match? proc "_input$" "")
              (wire-event proc "input"))
          ((str-match? proc "_change$" "")
              (wire-event proc "change"))
              (#t #t)))
        (wire-procedure-list (cdr procedure-list))
  )))


(define (wire-event proc evtype)
  (let ((selector (str-replace-re proc "_(.*)$" "" "")))
      (% selector "off" evtype)
      (% selector "on" evtype (lambda (ev)
            ((eval (string->symbol proc)) ev)))
      ))
