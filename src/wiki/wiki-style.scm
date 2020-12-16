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



            )))
