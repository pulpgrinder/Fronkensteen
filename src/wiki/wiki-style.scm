(define window-width (js-window-width))

(install-css "wiki-css"
    (proc-css-list `(
            (".externallink" (
              "color" "orange"
              "cursor" "pointer"
              ))
              (".wikilink" (
                "color" "rebeccapurple"
                "cursor" "pointer"
                ))
            (".locallink" (
              "color" "rebeccapurple"
              "cursor" "pointer"
              "text-decoration" "none"
              ))
                (".doclink" (
                  "color" "rebeccapurple"
                  "cursor" "pointer"
                  ))
              (".schemelink" (
                "color" "rebeccapurple"
                "cursor" "pointer"
                ))
               (".menulink" (
                 "color" "rebeccapurple"
                 "cursor" "pointer"
                 ))
              (".untrash-item" (
                  "color" "rebeccapurple"
                  "cursor" "pointer"
                ))
                (".hashlink" (
                  "color" "green"
                  "cursor" "pointer"
                  ))


             (".wiki-video" (
               "width" "50%"
               "margin" "auto"
               ))
            (".wiki-editor-title" (
                "text-align" "center"
                ))
            (".code-editor-title" (
              "width" "75%"
              ))
            (".wiki-editor-area" (
              "margin" "0 auto"
              "height" "100%"
              "width" "100%"
              "padding" "0.5em"
              "color" "black"
              "background-color" "white"
              "font-family" "monospace"
              "box-sizing" "border-box"
              ))


            )))
