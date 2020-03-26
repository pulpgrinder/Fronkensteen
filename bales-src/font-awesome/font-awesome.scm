; CSS and Scheme procedures for Font Awesome.
; Copyright 2019-2020 by Anthony W. Hursh.
; MIT License.

(install-css "font-awesome-fonts"
    (proc-css-list `(
        ("@font-face" (
          "font-family" "\"Font Awesome 5 Brands\""
          "font-style" "normal"
          "font-weight" "normal"
          "font-display" "auto"
          "src" ,(<< "url(" (read-internal-data-url "font-awesome/fa-brands-400.woff2") ") format(\"woff2\")")
          ))
       ("@font-face" (
         "font-family" "\"Font Awesome 5 Free\""
         "font-style" "normal"
         "font-weight" "400"
         "font-display" "auto"
         "src" ,(<< "url(" (read-internal-data-url "font-awesome/fa-regular-400.woff2") ") format(\"woff2\")")
         ))
         ("@font-face" (
           "font-family" "\"Font Awesome 5 Free\""
           "font-style" "normal"
           "font-weight" "900"
           "font-display" "auto"
           "src" ,(<< "url(" (read-internal-data-url "font-awesome/fa-solid-900.woff2") ") format(\"woff2\")")
           )))))


(define (fa-icon-gen family icon-name) ; generate a Font Awesome icon with the given family and name, where family is one of "s" (solid) or "b" (brands) (with the free set). (fa-icon-gen "s" "atom") => <i class="fas fa-atom"></i>
  (i (<< ".fa" family ".fa-" icon-name ) ""))

(define (fa-icon . args) ; Generate a Font Awesome icon (see fa-icon-gen) wrapped in a span element. (fa-icon seml family icon-name) applies the given seml to the span, and also adds the .icon class. (fa-icon family icon-name) applies just the .icon class. (fa-icon "#my-icon.someclass" "s" "atom") => <span id="my-icon" class="someclass icon"><i class="fas fa-atom"></i></span>   (fa-icon "s" "atom") => <span class="icon"><i class="fas fa-atom"></i></span>
     (let ((nargs (length args)))
        (cond ((eq? nargs 3)
                (span (<< (car args) ".icon") (fa-icon-gen (cadr args) (caddr args))))
              ((eq? nargs 2)
                  (span ".icon" (fa-icon-gen (car args) (cadr args))))
              (#t "Error: wrong number of arguments for fa-icon"))))
