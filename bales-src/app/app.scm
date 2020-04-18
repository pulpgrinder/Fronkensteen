; Build up the screen from a collection of strings.
; The << procedure is shorthand for Scheme's string-append. Fronkensteen
; uses string-append a lot. :-)
; Most HTML tags are the same (i.e, (h1 "text") -> <h1>text</h1>) but sadly
; Scheme already uses div for something else.
; Hence, Fronkensteen uses dv to generate a <div> element.


; HTML <header> element containing the logo and title.


(define (generate-header)
  (header
    (<<
      (internal-image "!title='Fronkensteen logo'" "root/fronkensteenlogo.png")
      (h1 "Fronkensteen"))))


; HTML <footer> element containing the date.
(define (generate-footer)
  (footer
    (<<
      "Generated at: "
      (iso-8601-date))))

(define (generate-body)
  ; Here we just generate a huge honkin' block of HTML from an internal
  ; Fronkensteen markup file.
  (markup-trusted-text-file "app/splash-panel.md"))

; Put it all together.
(set-main-content
  (<<
    (generate-header)
    (generate-body)
    (generate-footer)) #t)



; wire-ui sets up automatic event handlers for many HTML elements,
; including buttons. For example, if a button has the id
; download-fronkensteen (as one of the buttons in the splash panel markup
; file in fact does), the procedure download-fronkensteen_click (if it
; exists) will be called when the button is clicked

(wire-ui)

; Set the app name (i.e., the base filename for saving the workspace).
; Just an example of how to do it; the default app name is already "fronkensteen"
(set-app-name "fronkensteen")

; Set the window title (shows up in tabs, etc.)
(set-document-title "Feed My Fronkensteen")

; Set the favicon. Does not seem to work on Safari, unfortunately.
(set-fav-icon "root/fronkensteenicon.png")

; runs when the #download-fronkensteen button is clicked.
(define (download-fronkensteen_click)
  (save-the-static-world))

; runs when the #view-fronkensteen-licenses button is clicked.
(define (view-fronkensteen-licenses_click)
  (display-licenses))

(define (view-markup-docs_click)
  (view-trusted-markup-text
    (read-internal-text-file "app/markup-doc.md")))

(define (view-html-docs_click)
  (view-trusted-markup-text
    (read-internal-text-file "app/html-doc.md")))


(define (view-architecture-docs_click)
  (view-trusted-markup-text
    (read-internal-text-file "app/architecture-overview.md")))

; runs when the #scheme-demo-eval button is clicked.
(define (scheme-demo-eval_click)
    (% "#scheme-demo-result" "html" (eval-scheme-string (% "#scheme-demo-text" "val"))))

(define (show-tutorial_click)
  (show-code-editor)
  (display-file-editor "tutorial/tutorial.scm"))
