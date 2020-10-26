; schemecss.scm
; Copyright 2018-2019 by Anthony W. Hursh
; MIT License.

(define (css-string args)
  (if (list? (car args))
    (gen-css (car args))
    (car args)))

(define (install-css . args)
  (if (= (length args) 2)
      (let ((element-id (<< "#" (car args))))
        (if (element-exists? element-id)
            (% element-id "html" (cadr args))
            (js-install-head (style (<< element-id ".dynamic_style_sheet")
            (cadr args)))
        ))
  	  (js-install-head (style (<< "#" (gen-css-id) ".dynamic_style_sheet")
       (car args)))))

(define install-stylesheet install-css)

(define (proc-css-list args)
  	(if (eqv? args '()) ""
        (string-append (proc-css (car args)) (proc-css-list (cdr args)))))

(define (proc-css spec)
  	(if (eqv? spec '()) ""
        (string-append (car spec) "{\n" (proc-css-rules (cadr spec)) "}\n")))

(define (proc-css-rules rule-list)
     (if (eqv? rule-list '()) ""
    	 (string-append (car rule-list) ":" (cadr rule-list) ";\n" (proc-css-rules (cddr rule-list)))))


(define (load-stylesheet id filename)
  (js-install-head
   (string-append "<link id='" id "' rel='stylesheet' href='"  filename   "'>")))

(define (grid-container id gap collist rowlist)
     (string-append id "{\n    display:grid;\n    grid-gap:" gap
     ";\n    grid-template-columns:" collist ";\n    grid-template-rows:" rowlist ";\n}\n"))
