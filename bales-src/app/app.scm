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
      (internal-image "app/fronkensteenlogo.png")
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

(generate-body)

; Put it all together.
(set-main-content
  (<<
    (generate-header)
    (generate-body)
    (generate-footer)))



; wire-ui sets up automatic event handlers for many HTML elements,
; including buttons. For example, if a button has the id
; download-fronkensteen (as one of the buttons in the splash panel markup
; file in fact does), the procedure download-fronkensteen_click (if it
; exists) will be called when the button is clicked

(wire-ui)

; runs when the #download-fronkensteen button is clicked.
(define (download-fronkensteen_click)
  (save-the-static-world))

; runs when the #view-fronkensteen-licenses button is clicked.
(define (view-fronkensteen-licenses_click)
  (display-licenses))

; runs when the #scheme-demo-eval button is clicked.
(define (scheme-demo-eval_click)
    (% "#scheme-demo-result" "html" (eval-scheme-string (% "#scheme-demo-text" "val"))))
