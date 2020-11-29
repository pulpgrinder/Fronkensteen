; root-utilities.scm
; Copyright 2019-2020 by Anthony W. Hursh
; MIT license.

(define (<< . args)
  (apply string-append args)); Shorthand procedure for string-append. Fronkensteen uses string-append a LOT. :-)

(define system-dirty? #f) ; Set this to #t any time a change is made to the workspace. Set it to #f when the workspace has been saved.

(define (set-system-dirty)
  (set! system-dirty? #t))

(define (resize-root)
  (if (is-procedure-defined? "resize-content")
    (resize-content)))

(define (set-system-clean)
  (set! system-dirty? #f))

(define (is-system-dirty?) ; Redefine this if necessary to detect custom conditions (for example, unsaved editor buffers).
    system-dirty?)

(define (prompt-to-save-user-data)
    #t) ; Redefine this if necessary to prompt for saving any unsaved user data.

(define active-document-location (window-location-href))

(define app-name "Fronkensteen")

(define (set-app-name new-app-name)
  (set! app-name new-app-name)
  (set-html-app-name new-app-name))

(define (get-versioned-file-name)
  (let ((current-file-name (window-location-basename-no-extension)))
    (let ((current-version-number (str-find current-file-name "[0-9]+$" "g")))
      (if (eq? (vector-length current-version-number) 0)
        (<< current-file-name "-1" ".html")
        (<< (str-replace-re current-file-name "\-[0-9]+$" "g" (<< "-" (number->string (+ 1 (string->number (vector-ref current-version-number 0)))))) ".html")))))



(define (save-the-static-world) ; Save the current static content of the system. Changes done with the interactive REPL need to be saved before they will take effect.

  (let ((app-file-name (<< (encode-uri app-name) "." (file-version-time-stamp) ".html")))
  (download-file app-file-name (clone-workspace) "text/html")
  (set-system-clean)))

(define (save-the-file-system) ; Save the internal file system in JSON format.
  (let ((fs-file-name (<< (encode-uri app-name) "-filesystem-" (file-version-time-stamp) ".fronkensteen_fs")))
  (download-file fs-file-name (get-internal-filesystem-json) "application/json")))

(define (save-package-files package_prefix . args) ; Save a subset of internal file system in JSON format.
  (if (= (length args) 0)
    (let ((fs-file-name (<< (encode-uri app-name) (encode-uri package_prefix) (file-version-time-stamp) ".json")))
    (download-file fs-file-name (get-package-json package_prefix) "application/json"))
    (download-file (car args) (get-package-json package_prefix) (cadr args)))
    )


(define (clone-workspace)
  (prompt-to-save-user-data)
  (let ((template (str-replace (read-internal-text-file "1-root/fronkensteen_template.html") "\<title\>Fronkensteen\<\/title\>" (<< "<title>" app-name "</title>"))))
    (let ((template-lines (vector->list (str-split template "\n"))))
        (process-template-lines template-lines))))

(define (process-template-lines template-lines)
  (if (eqv? template-lines '())
        ""
    (let ((template-line (str-trim (car template-lines))))
      (cond ((eqv? template-line "$$$FILESYSTEM$$$") (<< "let fronkensteen_fs = " (get-internal-filesystem-json) "\n" (process-template-lines (cdr template-lines))))
          (#t (<< template-line "\n" (process-template-lines (cdr template-lines))))))))
