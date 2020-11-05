(install-css "wiki-editor"
    (proc-css-list `(
        (".fronkensteen-wiki-editor" (
          "padding" "0"
          "margin" "auto"
          "padding-right" "0"
          ))

        ("#fronkensteen-print-preview"(
          "position" "relative"
          "width" "auto"
          "height" "auto"
          "overflow" "visible"
          ))
          (".fronkensteen-wiki-content-wrapper" (
            "overflow" "auto"
            "position" "absolute"
            "left" "0"
            "top" "0"
            "bottom" "0"
            "right" "0"
            "display" "none"
            "outline" "none"
          ))
          ("#fronkensteen-wiki-wrapper" (
            "overflow" "hidden"
            ))
          ("#fronkensteen-wiki-content-container" (
            "position" "fixed"
            "top" "2em"
            "bottom" "2em"
            "left" "0"
            "right" "0"
          ))
          (".fronkensteen-wiki-content" (
            "overflow" "auto"
            "width" "60em"
            "margin" "auto"
            "min-height" "90%"
            ))
            (".fronkensteen-wiki-content .round-list" (
              "padding-right" "3em"
              ))
            (".fronkensteen-wiki-content-text" (
              "padding-left" "2.5em"
              "padding-right" "2.5em"
              "padding-top" "1em"
              "line-height" "1.25em"
              ))
              (".fronkensteen-wiki-preview" (
                "padding-left" "1.5em"
                "padding-right" "1.5em"
                "padding-top" "1.5em"
                "line-height" "1.25em"
                "display" "none"
                ))

                ("#fronkensteen-wiki-viewer" (
                  "position" "fixed"
                  "top" "0"
                  "bottom" "0"
                  "left" "0"
                  "right" "0"
                  "background-color" "#bbb"
                ))
                ("#fronkensteen-wiki-toolbars" (
                  "position" "fixed"
                  "top" "0"
                  "left" "0"
                  "width" "100%"
                  "height" "2em"
                  "overflow" "hidden"
                  ))
                  ("#fronkensteen-bottom-toolbars" (
                    "position" "fixed"
                    "bottom" "0"
                    "left" "0"
                    "width" "100%"
                    "height" "2em"
                    "overflow" "hidden"
                    ))
                ("#fronkensteen-wiki-sidebar-display" (
                  "position" "absolute"
                  "width" "20em"
                  "top" "0"
                  "right" "0"
                  "bottom" "2em"
                  "overflow" "auto"
                  ))
                ("#fronkensteen-wiki-history-list" (
                "background-color" "#fff"
                "list-style-type" "none"
                "padding" "0em"
                "margin-left" "1em"
                "margin-top" "1.5em"
                "overflow" "auto"
                ))

                (".fronkensteen-wiki-history-entry" (
                  "margin" "0"
                  "padding" "0.5em"
                  "max-width" "90%"
                  "word-break" "break-all"
                  "overflow" "hidden"
                  "cursor" "pointer"
                ))
                ("#fronkensteen-search-body" (
                  "overflow-y" "auto"
                  "overflow-x" "hidden"
                  ))
                (".fronkensteen-wiki-search-entry" (
                  "margin" "0"
                  "padding" "0.5em"
                  "word-break" "break-all"
                  "overflow" "hidden"
                  "cursor" "pointer"
                ))

                (".fronkensteen-dialog-controls" (
                  "position" "absolute"
                  "height" "1em"
                  "width" "100%"
                  "color" "#fff"
                  "padding" "0.5em"
                  ))
                ("#fronkensteen-wiki-history-display" (
                ))
                ("#fronkensteen-wiki-search-display" (
                "display" "grid"
                "grid-template-rows" "3em auto"
                ))
                (".fronkensteen-incoming-link" (
                  "width" "16.5em"
                  ))
                ("#fronkensteen-wiki-search-list-wrapper" (
                  "overflow" "hidden"
                  "position" "absolute"
                  "top" "2em"
                  "width" "100%"
                  "max-height" "20em"
                ))
                ("#fronkensteen-wiki-history-list-wrapper" (
                  "position" "absolute"
                  "top" "2em"
                  "bottom" "0"
                  "width" "100%"
                  "overflow" "auto"
                  "padding" "0"
                ))
                ("#fronkensteen-wiki-search-list" (
                "list-style-type" "none"
                "margin" "0"
                "padding" "0"
                ))
                (".fronkensteen-toolbar" (
                  "font-family" "sans-serif"
                  "padding-left" "0.5em"
                  "padding-right" "1em"
                  "padding-top" "0.5em"
                  "padding-bottom" "1em"
                ))
                (".fronkensteen-bottom-toolbar" (
                  "font-family" "sans-serif"
                  "padding-left" "0.5em"
                  "padding-right" "1em"
                  "padding-top" "0.25em"
                  "padding-bottom" "0.125em"
                ))
                ("#fronkensteen-wiki-toolbar-buttons" (
                  "position" "absolute"
                  "right" "0.5em"
                  "bottom" "0.375em"
                  ))
             (".fronkensteen-editor-button" (
               "height" "2em"
               ))
               ("#fronkensteen-editor-docs-content" (
                 "padding" "1em"
                 ))
             (".wiki-video" (
               "width" "50%"
               "margin" "auto"
               ))
            )))
