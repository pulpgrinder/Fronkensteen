(install-css "tufte"
    (proc-css-list `(
      ("@font-face" (
        "font-family" "\"et-book\""
        "font-style" "normal"
        "font-weight" "normal"
        "font-display" "auto"
        "src" ,(<< "url(" (read-internal-data-url "theme/tufte/et-book/et-book-roman-line-figures/et-book-roman-line-figures.ttf") ") format(\"ttf\")")
        ))
      ("@font-face" (
        "font-family" "\"et-book\""
        "font-style" "normal"
        "font-weight" "italic"
        "font-display" "auto"
        "src" ,(<< "url(" (read-internal-data-url "theme/tufte/et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.ttf") ") format(\"ttf\")")
        ))
      ("@font-face" (
        "font-family" "\"et-book\""
        "font-style" "normal"
        "font-weight" "bold"
        "font-display" "auto"
        "src" ,(<< "url(" (read-internal-data-url "theme/tufte/et-book/et-book-bold-line-figures/et-book-bold-line-figures.ttf") ") format(\"ttf\")")
        ))
        ("@font-face" (
          "font-family" "\"et-book-roman-old-style\""
          "font-style" "normal"
          "font-weight" "normal"
          "font-display" "auto"
          "src" ,(<< "url(" (read-internal-data-url "theme/tufte/et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.ttf") ") format(\"ttf\")")
          ))
        (".fronkensteen-panel" (
          "background-color" "#fffff8"
          ))
       ("#fronkensteen-editor-sidebar" (
         "background-color" "#fffff8"
         ))
     (".treeitem" (
       "color" "black"
       "background-color" "#fffff8"
       ))
     (".treeitem.active" (
       "color" "white"
       "background-color" "blue"
       ))
       )))
