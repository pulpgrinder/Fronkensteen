(define (topcoat-button . args)
    (if (eqv? (length args) 2)
      (button (<< (car args) ".topcoat-button") (cadr args))
      (button ".topcoat-button" (car args))))

7
(define (topcoat-button-bar . args)
    (if (eqv? (length args) 2)
      (dv (<< (car args) ".topcoat-button-bar") (cadr args))
      (dv ".topcoat-button-bar" (car args))))

(define (topcoat-button-bar-item . args)
    (if (eqv? (length args) 2)
      (dv (<< (car args) ".topcoat-button-bar__item") (cadr args))
      (dv ".topcoat-button-bar__item" (car args))))

(define (topcoat-navigation-bar-item . args)
    (if (eqv? (length args) 2)
      (dv (<< (car args) ".topcoat-navigation-bar__item") (cadr args))
      (dv ".topcoat-button-navigation__item" (car args))))

(define (topcoat-button-bar-button . args)
    (topcoat-button-bar-item
      (if (eqv? (length args) 2)
      (button (<< (car args) ".topcoat-button-bar__button") (cadr args))
        (button ".topcoat-button-bar__button" (car args)))))

(define (fronkensteen-top-toolbar . args)
  (% "#fronkensteen-top-toolbar-container" "append"
    (if (eqv? (length args) 2)
      (dv (<< (car args) ".fronkensteen-top-toolbar") (cadr args))
      (dv ".fronkensteen-top-toolbar" (car args)))))

(define (fronkensteen-bottom-toolbar . args)
    (% "#fronkensteen-bottom-toolbar-container" "append"
      (if (eqv? (length args) 2)
        (dv (<< (car args) ".fronkensteen-bottom-toolbar") (cadr args))
        (dv ".fronkensteen-bottom-toolbar" (car args)))))

(define (topcoat-navigation-bar-title . args)
(if (eqv? (length args) 2)
  (h1 (<< (car args) ".topcoat-navigation-bar__title") (cadr args))
  (h1 ".topcoat-navigation-bar__title.center" (car args))))
