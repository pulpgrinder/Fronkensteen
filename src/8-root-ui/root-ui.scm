; root-ui.scm
; Copyright 2019-2020 by Anthony W. Hursh
; MIT license.


(define window (window-object))
(define document (document-object))

(define (hide-and-resize id)
  (% id "hide")
  (resize-content))

(define (show-and-resize id)
  (% id "show")
  (resize-content))

(define (fronkensteen-toast text horizontal-position vertical-position delay)
  (let ((id (<< "#" (no-dash-uuid))))
    (% "body" "append" (dv (<< id ".fronkensteen-toast") text))
    (display-toast id horizontal-position vertical-position delay)
  ))

  (define (generate-root-ui)
    (% "body" "append"
    (<<
        (dv "#upload_download"
          (<<
          (a "#fronkensteen-download-link" "")
          (input "#fronkensteen-upload-element!type='file'"))
          ))))
(define (resize-content)
  #t
)
