(define (wire-ui)
  (let ((procedure-list (vector->list (enumerate-procedures))))
    (wire-procedure-list procedure-list)))

(define (wire-procedure-list procedure-list)
  (if (eqv? procedure-list '())
    #t
    (let ((proc (car procedure-list)))
      (cond
        ((str-match? proc "_click$" "")
            (wire-event proc "click"))
        ((str-match? proc "_input$" "")
            (wire-event proc "input"))
        ((str-match? proc "_change$" "")
            (wire-event proc "change"))
         (#t #t))
        (wire-procedure-list (cdr procedure-list))
  )))


(define (wire-event proc evtype)
  (let ((selector (str-replace proc ( << "_" evtype) "")))
      (% selector "off" evtype)
      (% selector "on" evtype (lambda (ev)
            ((eval (string->symbol proc)) ev)))
      ))
