; CSS for the internal code editor.
; Copyright 2019 by Anthony W. Hursh.
; MIT License.

(install-css "code-editor"
    (proc-css-list `(
        (".CodeMirror" (
          "height" "100%"
          ))
        (".fronkensteen-editor-mode-button" (
          "display" "none"
          ))
          (".fronkensteen-code-editor-text-area"(
            "position" "relative"
            "height" "100%"
            "min-height" "100%"
            ))
          ("#fronkensteen-bale-load-order" (
            "display" "none"
            ))
          ("#fronkensteen-editor-sidebar" (
            "position" "fixed"
            "width" "15em"
            "top" "0"
            "bottom" "0"
            "right" "0"
            "font-size" "20px"
            "overflow" "auto"
            "background-color" "white"
            "overflow" "auto"))
            ("#fronkensteen-editor-sidebar-wrapper" (
              "position" "relative"
              "width" "13em"
              "min-height" "20em"
              "height" "90%"
              ))
          ("#fronkensteen-editor-controls" (
            "position" "fixed"
            "top" "0"
            "left" "0"
            "right" "15em"
            "font-size" "20px"
            "overflow" "hidden"
            "border" "1px solid gray"
            "font-family" "sans-serif"))
        ("#fronkensteen-editor-workspace"(
          "position" "fixed"
          "padding-top" "0.5em"
          "padding-left" "0.5em"
          "padding-right" "0.5em"
          "padding-bottom" "0.5em"
          "bottom" "2em"
          "left" "0"
          "right" "15em"
          "top" "1.325em"
          "border" "1px solid gray"
          "border-top" "none"
          "overflow" "auto"
          "font-family" "monospace"
          ))
          ("#fronkensteen-editor-find-and-replace"(
            "position" "fixed"
            "padding-top" "0em"
            "padding-left" "0.25em"
            "padding-right" "0.5em"
            "padding-bottom" "0.25em"
            "bottom" "0.5em"
            "left" "0"
            "right" "15em"
            "height" "1.25em"
            "border" "none"
            "overflow" "hidden"
            ))

              (".fronkensteen-file-available-item" (
                "position" "relative"
                "background-color" "white"
                "border-bottom" "1px solid gray"
                "border-right" "1px solid gray"
                "padding-left" "0.25em"
                "padding-right" "0.25em"
                ))
              (".fronkensteen-file-available-item:hover" (
                  "border" "1 px solid rebeccapurple"
                  ))
              (".fronkensteen-file-available-item.active" (
                "background-color" "rebeccapurple"
                "color" "white"
                ))

                (".fronkensteen-bale-item" (
                  "position" "relative"
                  "list-style-type" "none"
                  "background-color" "white"
                  "border-bottom" "1px solid gray"
                  "border-left" "1px solid gray"
                  "border-right" "1px solid gray"
                  "padding-left" "0.25em"
                  "padding-right" "0.25em"
                  ))
                (".fronkensteen-bale-item:first-child" (
                  "border-top" "1px solid gray"
                  ))
                (".fronkensteen-bale-item.active" (
                  "background-color" "rebeccapurple"
                  "color" "white"
                  ))
              (".fronkensteen-editor-button:hover" (
                "color" "rgb(63, 255, 63)"
                ))
                (".fronkensteen-editor-button" (
                  "margin" "0"
                  "border-radius" "0"
                  "border" "1px solid grey"
                  "border-left" "none"
                  "background" "none"
                  ))
                  (".fronkensteen-editor-button:first-child" (
                    "border-left" "1px solid grey"
                    "margin-left" "0.25em"
                    ))

                    (".fronkensteen-editor-search-button" (
                      "margin" "0"
                      "border-radius" "0"
                      "border" "1px solid grey"
                      "background" "none"
                      ))

        ("#fronkensteen-editor-current-file-list" (
          "overflow" "auto"
          "position" "absolute"
          "top" "1.25em"
          "bottom" "0em"
          "border" "1px solid gray"
          "border-left" "none"
          "left" "0"
          "right" "0"
          ))
        (".fronkensteen-editor-sidebar-area" (
            "width" "13em"
           ))

        (".fronkensteen-editor-file-controls" (
          "border-right" "1px solid gray"
          "height" "1.25em"

          ))
        (".fronkensteen-editor-sidebar-header" (
            "color" "white"
            "background-color" "green"
            "padding-left" "0.25em"
            "padding-right" "0.25em"
            "font-style" "italic"
           ))
           (".fronkensteen-editor-file-area-wrapper" (
              "min-height" "10em"
              "max-height" "10em"
              "width" "14em"
              "overflow" "auto"
              ))
          ("#fronkensteen-editor-bale-list-container" (
            "height" "20em"
            "overflow" "auto"
            "width" "auto"
            ))
          )))
