; CSS and Scheme procedures for Cormorant fonts
; Copyright 2019-2020 by Anthony W. Hursh.
; MIT License.

(install-css "font-awesome-fonts"
    (proc-css-list `(
        ("@font-face" (
          "font-family" "Cormorant"
          "font-style" "normal"
          "font-weight" "normal"
          "font-display" "auto"
          "src" ,(<< "url(" (read-internal-data-url "cormorant/Cormorant-Regular.ttf") ") format(\"ttf\")")
          ))
          ("@font-face" (
            "font-family" "Cormorant"
            "font-style" "italic"
            "font-weight" "normal"
            "font-display" "auto"
            "src" ,(<< "url(" (read-internal-data-url "cormorant/Cormorant-Italic.ttf") ") format(\"ttf\")")
            ))
            ("@font-face" (
              "font-family" "Cormorant"
              "font-style" "normal"
              "font-weight" "bold"
              "font-display" "auto"
              "src" ,(<< "url(" (read-internal-data-url "cormorant/Cormorant-Bold.ttf") ") format(\"ttf\")")
              ))

              ("@font-face" (
                "font-family" "Cormorant"
                "font-style" "italic"
                "font-weight" "bold"
                "font-display" "auto"
                "src" ,(<< "url(" (read-internal-data-url "cormorant/Cormorant-BoldItalic.ttf") ") format(\"ttf\")")
                ))

                ("@font-face" (
                  "font-family" "Cormorant"
                  "font-style" "normal"
                  "font-weight" "normal"
                  "font-variant" "smallcaps"
                  "font-display" "auto"
                  "src" ,(<< "url(" (read-internal-data-url "cormorant/CormorantSC-Regular.ttf") ") format(\"ttf\")")
                  ))

)))
