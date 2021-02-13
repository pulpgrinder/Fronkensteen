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
            (".wiki-editor-area" (
              "margin" "0 auto"
              "height" "100%"
              "width" "100%"
              "padding" "2em"
              "color" "black"
              "background-color" "white"
              "font-family" "monospace"
              "box-sizing" "border-box"
              ))


            )))
