; string-utilities.scm
; Copyright 2018-2020 by Anthony W. Hursh
; MIT license.


; Procedures for generating Modern Language Association (MLA) outline headings.


(define mla-level-counter (make-vector 7 0)) ; Keeps track of the current heading counters for each level.

(define (reset-mla-level-counter) ; Resets the numbering level for an MLA outline.
  (set! mla-level-counter (make-vector 7 0)))


(define (reset-lower-levels current) ; Resets all levels below the current level for an MLA outline.
  (if (eqv? current (vector-length mla-level-counter))
    #t
    (begin
      (vector-set! mla-level-counter current 0)
      (reset-lower-levels (+ current 1)))))

(define (mla-heading-string level is-visible?) ; Evaluates to the correct MLA outline number for the given level. Increments counts as required.
  (if (eqv? is-visible? "false")
    "-"
    (begin
      (reset-lower-levels (+ level 1))
      (let ((heading-count (+ 1 (vector-ref mla-level-counter level))))
        (vector-set! mla-level-counter level heading-count)
        (cond ((eqv? level 0) (string-append (convert-roman heading-count #t) "."))
            ((eqv? level 1) (string-append (upper-case-letter-equivalent heading-count) "."))
            ((eqv? level 2) (string-append (number->string heading-count) "."))
            ((eqv? level 3) (string-append (lower-case-letter-equivalent heading-count) "."))
            ((eqv? level 4) (string-append (convert-roman heading-count #f) "."))
            ((eqv? level 5) (string-append "(" (number->string heading-count) ")"))
            (#t (string-append "(" (lower-case-letter-equivalent heading-count) ")")))))))

; Roman numerals.

(define (convert-roman number upper-case) ; Converts a number to a Roman numeral (either uppper- or lower-case, according to the upper-case parameter). Valid up to 3999 (MMMCMXCIX).
   (if (> number 3999)
      (<< "convert-roman: argument out of range -> " (number->string number))
   (convert-roman-helper number upper-case 0)))

(define roman-numeral-bands #(1000 900 500 400 100 90 50 40 10 9 5 4 1))
(define roman-numeral-strings-upper #("M" "CM" "D" "CD" "C" "XC" "L" "XL" "X" "IX" "V" "IV" "I"))
(define roman-numeral-strings-lower #("m" "cm" "d" "cd" "c" "xc" "l" "xl" "x" "ix" "v" "iv" "i"))


(define (convert-roman-helper number upper-case band) ; helper procedure for convert-roman. Not intended to be called directly.
  (if (eqv? number 0)
      ""
   (let ((band-string
      (if (eqv? upper-case #t)
        (vector-ref roman-numeral-strings-upper band)
        (vector-ref roman-numeral-strings-lower band)))
        (band-divisor (vector-ref roman-numeral-bands band)))
    (if (>= number band-divisor)
        (string-append band-string (convert-roman (- number band-divisor) upper-case band))
        (convert-roman-helper number upper-case (+ 1 band))))))

(define (lower-case-letter-equivalent number) ; Evaluates to the lower-case English letter equivalent of a number from 1-26.
    (if (and (<= number 26) (>= number 1))
      (string (integer->char (+ number 96)))
      "lower-case-letter-equivalent: number must be between 1-26 inclusive."))

(define (upper-case-letter-equivalent number) ; Evaluates to the upper-case English letter equivalent of a number from 1-26.
  (if (and (<= number 26) (>= number 1))
    (string (integer->char (+ number 64)))
    "upper-case-letter-equivalent: number must be between 1-26 inclusive."))
