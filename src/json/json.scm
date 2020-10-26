; json.scm, copyright 2020 by Anthony W. Hursh. MIT Licence

(define (scheme->json item) ; Transform scheme structure to JSON string.
    (cond ((list? item) (generate-json-object item))
          ((vector? item) (generate-json-vector item))
          ((string? item) (generate-json-string item))
          ((number? item) (generate-json-number item))
          ((eqv? item #t) "true")
          ((eqv? item #f) "false")
          (#t ("Cannot convert item " (format "~s" item) " to well-formed JSON."))))


(define (generate-json-object item)
    (<< "{"
        (generate-json-object-rec item)
        "}"))

(define (generate-json-object-rec item)
    (if (eqv? item '())
        ""
        (<< (generate-json-key-value (car item))
            (if (eqv? (cdr item) '())
                ""
                ",")
            (generate-json-object-rec (cdr item)))))


(define (generate-json-string val)
  (<< "\"" val "\""))

(define (generate-json-number val)
    (number->string val))

(define (generate-json-key-value item)
    (let ((key (car item))
        (val (cdr item)))
          (cond ((string? key) (<< (generate-json-string key) ":" (scheme->json val)))
          ((symbol? key) (<< "\"" (symbol->string key) "\"" ":" (scheme->json val)))
          (#t (<< "Error: invalid key in generate-json-object")))))

(define (generate-json-vector vec)
  (if (eqv? (vector-length vec) 0)
      "[]"
    (<< "[" (generate-json-vector-items vec 0 (vector-length vec)) "]")))


(define (generate-json-vector-items vec current-item max)
    (cond ((< current-item (- max 1)) (<< (scheme->json (vector-ref vec current-item)) "," (generate-json-vector-items vec (+ current-item 1) max)))
          (#t (scheme->json (vector-ref vec current-item)))))
