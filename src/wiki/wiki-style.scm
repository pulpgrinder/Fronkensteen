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
                (".hashlink" (
                  "color" "green"
                  "cursor" "pointer"
                  ))
             ("#wiki-editor-page-title" (
               "display" "none"
               ))
             (".wiki-history-entry" (
               "border-left" "1px solid #ddd"
               "border-right" "1px solid #ddd"
               "border-bottom" "1px solid #ddd"
               "min-width" "15em"
               "padding" "0.25em"
               ))
            ("div .wiki-history-entry:first-child" (
              "border-top" "1px solid #ddd"
              ))
             (".wiki-page-content" (
               "padding" "4em"
               ))
             (".wiki-page-wrapper" (
               "max-width" "60em"
               "margin" "auto"
               "position" "relative"
               "background-color" "#f5f5f0"
               "overflow" "auto"
               "-webkit-overflow-scrolling" "touch";
               ))
             (".wiki-editor" (
               "height" "100%"
               ))
             (".wiki-video" (
               "width" "50%"
               "margin" "auto"
               ))
            (".wiki-toolbar" (
              "width" "100%"
              "display" "flex"
              "justify-content" "space-evenly"
              ))
            (".wiki-content-text" (
                "padding" "4em"
                "max-width" "60em"
                "margin" "0 auto"
              ))
              (".wiki-content-text blockquote" (
                "padding" "1em"
                "margin" "auto"
                "max-width" "55em"
                "background-color" "#ddd"
                "font-style" "italic"
                "border-radius" "10px"
                ))
            (".menu-list" (
            "max-width" "50em"))
            (".rounded-list" (
            "max-width" "50em"))
            )))
