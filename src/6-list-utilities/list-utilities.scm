; list-utilities.scm
; Copyright 2019 by Anthony W. Hursh
; MIT license.

(define (del-assoc-list predicate item assoc-list)
  (cond
        ((eq? assoc-list '()) '())
        ((predicate item (caar assoc-list)) (del-assoc-list predicate item (cdr assoc-list)))
        (#t (cons (car assoc-list) (del-assoc-list predicate item (cdr assoc-list))))))

(define (del-assq item assoc-list)
    (del-assoc-list eq? item assoc-list))

(define (del-assv item assoc-list)
    (del-assoc-list eqv? item assoc-list))

(define (del-assoc item assoc-list)
    (del-assoc-list equal? item assoc-list))

(define (nth n l) ; Evaluates to the nth car of a list (starting at zero).
    (if (eqv? n 0)
      (car l)
      (nth (- n 1) (cdr l))))


(define (nth-cdr n l) ; Evaluates to the nth cdr of a list (starting at zero).
  (if (eqv? n 0)
    l
    (nth-cdr (- n 1) (cdr l))))



(define (replace-nth old-list n new-value) ; Constructs a new list from an old one, with the nth item replaced with new-value. (replace-nth '(1 2 3) 1 3) => (1 3 3)
  (if (eqv? n 0)
    (cons new-value (cdr old-list))
    (cons (car old-list) (replace-nth (cdr old-list) (- n 1) new-value))))

(define (insert-nth old-list n new-value) ; Constructs a new list from an old one, with the new-value inserted at the nth position. (insert-nth '(1 2 3) 1 5) => (1 5 2 3)
   (if (eqv? n 0)
      (cons new-value old-list)
      (cons (car old-list) (insert-nth (cdr old-list) (- n 1) new-value))))

(define (delete-nth old-list n) ; Constructs a new list from an old one, with the nth item deleted.
  (if (eqv? n 0)
      (cdr old-list)
      (cons (car old-list) (delete-nth (cdr old-list) (- n 1)))))
