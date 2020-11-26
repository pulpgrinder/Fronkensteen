; uploader.scm
; Sets up a file upload element for Fronkensteen.
; Copyright 2020 by Anthony W. Hursh
; MIT license.

(define (build-uploader base-element)
  (let ((upload-element (<< "uploader" (symbol->string (gensym)))))
    (% base-element "append"
      (dv (<< "#" upload-element "-wrapper.fronkensteen-file-uploader")
        (<<
          (label ( << "#" upload-element "-clickupload!for='" upload-element "'") "Click to upload")
          (input (<< "#" upload-element "!type='file'")))))
    (set-upload-element upload-element)))

(define (build-downloader base-element)
    (% base-element "append"
      (dv "#fronkensteen-download-manager"
      (<<
        (a "#fronkensteen-download-link" "Click to download")
        (button "#download-done" "Done")))
))

(define (#download-done_click)
    (nav-go-back))

(build-downloader "#fronkensteen-wrapper")
(build-uploader "#fronkensteen-download-manager")

(define (show-download filename data mime_type)
    (show-ui-panel "#fronkensteen-download-manager")
    (download-file filename data mime_type)
)
