(install-css "text-editor"
    (proc-css-list `(
        ("#cursordriver" (
          "margin" "0 auto"
          "display" "table"
          "z-index" "10000"
          "position" "absolute"
          "background-color" "#ddd"
          "border-radius" "10px"
          "border" "1px solid #888"
          "padding" "0.2em"
          ))
        (".cursorbutton" (
            "color" "black"
            "min-width" "3.5em"
            "width" "3.5em"
          ))
        (".cursorbutton .icon" (
          "color" "black"
          ))
        )))
