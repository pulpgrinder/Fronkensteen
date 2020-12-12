(install-css "lambda-dialogs"
    (proc-css-list `(
      ("#lambda-proc-display" (
        "padding" "1em"
        "padding-top" "0"
        ))
      ("#lambda-proc-search" (
        "padding" "1em"
        ))
      (".lambda-proc-name-display" (
        "padding-left" "0.5em"
        "padding-right" "0.5em"
        "padding-top" "0.5em"
        "padding-bottom" "0.5em"
        "color" "#000"
        "margin" "auto"
        "width" "auto"
      ))
      (".lambda-proc-name-entry:first-child" (
        "border-top" "1px solid #cacaca"
        "border-top-left-radius" "10px"
        "border-top-right-radius" "10px"
      ))
      (".lambda-proc-name-entry:last-child" (
        "border-bottom-left-radius" "10px"
        "border-bottom-right-radius" "10px"
      ))
      (".lambda-proc-name-entry" (
        "border-left" "1px solid #cacaca"
        "border-bottom" "1px solid #cacaca"
        "border-right" "1px solid #cacaca"
        "display" "block"
        "width" "auto"
        "padding-left" "1em"
        "padding-right" "1em"
        "padding-top" "0.5em"
        "padding-bottom" "0.5em"
        "background-color" "white"

      ))
