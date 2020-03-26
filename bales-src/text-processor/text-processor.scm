; text-processor.scm
; Copyright 2020 by Anthony W. Hursh
; MIT license.

(define (trusted-text-processor text)
      (process-alignment
        (trusted-markdown
          (process-poetry
            (remove-comments text)))))



(define (untrusted-text-processor text)
  (process-alignmment
  (markdown
    (process-poetry
      (remove-comments text)))))
