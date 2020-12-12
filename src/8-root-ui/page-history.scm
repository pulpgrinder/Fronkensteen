(define fronkensteen-page-history-list '())

(define fronkensteen-forward-page-history-list '())

(define fronkensteen-dirty-pages '())

(define (get-tos-page-id)
    (if (eqv? fronkensteen-page-history-list '())
      #f
      (get-history-entry-id (car fronkensteen-page-history-list))))

(define (get-tos-page-title)
    (if (eqv? fronkensteen-page-history-list '())
      #f
      (get-history-entry-title (car fronkensteen-page-history-list))))

(define (get-tos-page-type)
    (if (eqv? fronkensteen-page-history-list '())
      #f
      (get-history-entry-type (car fronkensteen-page-history-list))))

(define (build-page-history-display history-list)
 (if (eqv? history-list '())
    ""
    (let ((title (caar history-list))
          (type (cadar history-list))
          (id (caddar history-list)))
      (let ((icon
            (if (eqv? type "wiki-page")
              ""
              (<< (fa-icon "" "edit" "") "&nbsp;"))
        ))
        (<< (dv (<< ".popup-list-item.fronkensteen-history-entry!title='" title "' type='" type "'!page-id='" id "'") (<< icon title))
        (build-page-history-display (cdr history-list)))))))


(define (make-page-dirty id)
  (set! fronkensteen-dirty-pages (cons id fronkensteen-dirty-pages)))

(define (remove-dirty-pages dirty-page-list)
  (if (eqv? dirty-page-list '())
    (set! fronkensteen-dirty-pages '())
    (begin
      (let ((content-wrapper-name (<< (car dirty-page-list) "-wrapper")))
        (% content-wrapper-name "remove")
        (remove-dirty-pages (cdr dirty-page-list))))))

(define (add-page-history title type id)
  (set! fronkensteen-forward-page-history-list '())
  (let ((cleaned-history-list (remove-page-history id fronkensteen-page-history-list)))
  (set! fronkensteen-page-history-list (cons (list title type id) cleaned-history-list))))

(define (remove-page-history id history-list)
  (if (eqv? history-list '())
      '()
      (if (eqv? (caddar history-list) id)
          (remove-page-history id (cdr history-list))
          (cons (car history-list) (remove-page-history id (cdr history-list)))
      )))



(define (get-history-entry-title history-entry)
    (car history-entry))

(define (get-history-entry-type history-entry)
  (cadr history-entry))

(define (get-history-entry-id history-entry)
  (caddr history-entry))

(define (navigate-history-forward)
  (if (eqv? fronkensteen-forward-page-history-list '())
      #f
      (begin
        (set! fronkensteen-page-history-list (cons (car fronkensteen-forward-page-history-list) fronkensteen-page-history-list))
        (set! fronkensteen-forward-page-history-list (cdr fronkensteen-forward-page-history-list))
        (display-history-tos))))

(define (navigate-history-back)
  (if (eqv? fronkensteen-page-history-list '())
      #f
      (begin
        (set! fronkensteen-forward-page-history-list (cons (car fronkensteen-page-history-list) fronkensteen-forward-page-history-list))
        (set! fronkensteen-page-history-list (cdr fronkensteen-page-history-list))
        (display-history-tos))))
