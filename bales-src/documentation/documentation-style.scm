(install-css "documentation-panel"
    (proc-css-list `(
      ("#fronkensteen-documentation-wrapper" (
        "display" "grid"
        "grid-template-columns" "80% 20%"
        "padding" "0"
        ))
      ("#fronkensteen-documentation-display-area" (
        "border" "1px solid black"

        ))

        ("#fronkensteen-documentation-search-results-wrapper" (
          "height" "30em"
          "min-height" "30em"
          "max-height" "30em"
          "margin" "0.5em"
          "overflow" "auto"
          ))
      ("#fronkensteen-documentation-search-area" (
        "border" "1px solid black"
        "border-left" "0"
        "padding" "0.25em"
        "padding-left" "0.5em"
        "padding-right" "0.5em"
         "background-color" "grey"
        ))
      ("#fronkensteen-documentation-documentation-text" (
        "width" "99%"
        "font-size" "125%"
        "display" "block"
        "margin-left" "auto"
        "margin-right" "auto"
        ))
        ("#fronkensteen-documentation-definition-area-wrapper" (
          "position" "relative"
          "height" "15em"
          "min-height" "15em"
          "max-height" "15em"
          "overflow" "scroll"
          ))
      ("#fronkesteen-documentation-source-info" (
        "margin-top" "1em"
         "padding" "0.25em"
         "padding-left" "0.5em"
        "color" "white"
        "background-color" "black"
        ))

      (".fronkensteen-documentation-number-width1" (
        "min-width" "1em"
        ))
        (".fronkensteen-documentation-number-width2" (
          "min-width" "2em"
          ))
        (".fronkensteen-documentation-number-width3" (
          "min-width" "3em"
          ))
        (".fronkensteen-documentation-number-width4" (
          "min-width" "4em"
          ))
        (".fronkensteen-documentation-number-width5" (
          "min-width" "5em"
          ))
      ("#fronkensteen-documentation-definition-area" (
        "padding" "0em"
        "font-family" "monospace"
        "white-space" "nowrap"
        ))
      (".fronkensteen-documentation-line-number" (
        "background-color" "lightgrey"
        "text-align" "right"
        "display" "inline-block"
        ))
      )))
