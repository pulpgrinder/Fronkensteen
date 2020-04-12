; Copyright 2020 by Anthony W. Hursh. Distributed under the same MIT license as Fronkensteen as a whole.
(define (init-markup-viewer)
  (add-ui-panel "#fronkensteen-markup-viewer"
    (<<
      (dv
        (button "#fronkensteen-close-markup-viewer" "Done"))
      (dv "#fronkensteen-markup-content.fronkensteen-markup-content" ""))))

(define (view-trusted-markup-file filename)
    (view-markup-text (markup-trusted-text-file filename) #t))

(define (view-untrusted-markup-file filename)
  (view-markup-text (markup-untrusted-text-file filename) #))

(define (view-trusted-markup-text text)
    (view-markup-text (trusted-text-processor text) #t))

(define (view-untrusted-markup-text text)
    (view-markup-text (untrusted-text-processor text) #f))

(define (view-markup-text marked-up-text trusted)
  (if (eqv? active-panel "#fronkensteen-markup-viewer")
    #t
    (begin
      (show-ui-panel "#fronkensteen-markup-viewer")))
  (% "#fronkensteen-markup-content" "html" marked-up-text)
  (process-latex "#fronkensteen-markup-content")
  (if trusted
    (process-embedded-code "#fronkensteen-markup-content" #f)
    #f))


(define (fronkensteen-close-markup-viewer_click)
  (nav-go-back))
