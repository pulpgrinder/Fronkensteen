; wired.scm
; Copyright 2019 by Anthony W. Hursh
; MIT License.

(define (gen_handler type ev)
  (let ((target (js-ref ev "currentTarget")))
    (let ((id  (element-read-attribute target "id")))
      (if (js-undefined? id)
        (console-log (string-append "wired: got " type " event on element that has no id."))
        (let ((handler-name (string-append id "_" type)))
          (if (is-procedure-defined? handler-name)
            (timer (lambda ()
              (console-log "calling handler")
              ((eval (string->symbol handler-name)) ev))
              0.01)
            (console-log (string-append "autowire: " handler-name ": procedure not implemented."))))))))


(define (select_handler ev)
  (let ((target (js-ref ev "currentTarget")))
    (let ((parent  (element-read-attribute target "parent"))
          (index (element-read-attribute target "index")))
      (let ((handler-name (string-append parent "_select")))
        (if (is-procedure-defined? handler-name)
          ((eval (string->symbol handler-name)) ev index)
            (console-log (string-append "autowire: " handler-name ": procedure not implemented.")))))))

(define (click_handler ev)
  (gen_handler "click" ev))

(define (change_handler ev)
  (gen_handler "change" ev))

(define (input_handler ev)
  (gen_handler "input" ev))


(define (wire-click selector)
  (% selector "off" "click")
  (% selector "on" "click" (lambda(ev) (click_handler ev))))


(define (wire-buttons)
  (wire-click "button"))

(define (wire-button selector)
  (wire-click selector))

(define (wire-text-inputs)
  (wire-text-input "input:text"))

(define (wire-text-input selector)
  (% selector "off" "input")
  (% selector "on" "input" (lambda(ev) (input_handler ev))))

(define (wire-change selector)
  (% selector "off" "change")
  (% selector "on" "change" (lambda(ev) (change_handler ev))))

(define (wire-submit-inputs)
  (wire-submit-input "input:submit"))

(define (wire-submit-input selector)
    (wire-click selector))

(define (wire-ui)
  (wire-buttons)
  (wire-text-inputs)
  (wire-submit-inputs))
