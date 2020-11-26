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
           "font-weight" "900"
           "font-display" "auto"
           "src" ,(<< "url(" (read-internal-data-url "font-awesome/fa-solid-900.woff2") ") format(\"woff2\")")
           )))))


(define (fa-icon-gen icon-name) ; generate a Font Awesome icon with the given name. (fa-icon-gen "atom") => <i class="fas fa-atom"></i>
  (if (eqv? icon-name "")
      ""
  (i (fa-icon-lookup icon-name) "")))

(define (fa-icon seml-spec icon-name text) ; Generate a Font Awesome icon (see fa-icon-gen) wrapped in an icon span element containing the provided text (if any).
  (span (<< ".icon" seml-spec) (<< (fa-icon-gen icon-name) text)))
