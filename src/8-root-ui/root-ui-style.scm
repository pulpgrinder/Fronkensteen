; root-ui-style.scm
; Copyright 2019-2020 by Anthony W. Hursh
; MIT license.

(install-css "root-ui"
    (proc-css-list `(
      (".icon" (
      "color" "#0a60fe"
        ))
      ("#fronkensteen-nav-forward" (
        "position" "absolute"
        "right" "1.5em"
        "cursor" "pointer"
        "display" "none"
        ))
        ("#fronkensteen-nav-back" (
          "position" "absolute"
          "left" "1em"
          "cursor" "pointer"
          "display" "none"
          ))
      ("#fronkensteen-top-toolbar-container" (
        "position" "fixed"
        "left" "0"
        "top" "0"
        "right" "0"
        "padding" "0"
        ))
        (".fronkensteen-top-toolbar" (
          "display" "none"
          "margin" "0"
          "padding" "0"
          "justify-content" "center"
          ))
          (".fronkensteen-bottom-toolbar" (
            "display" "none"
            "margin" "0 auto"
            "padding" "0"
            "justify-content" "center"
            ))
        ("#fronkensteen-bottom-toolbar-container" (
          "position" "fixed"
           "left" "0"
            "right" "0"
            "padding" "0"
            "width" "100%"
          "top" "70px"
          ))
      ("pre" (
        "white-space" "pre-wrap"))

        (".dropcap" (
          "float" "left"
          "font-size" "75px"
          "line-height" "60px"
          "padding-top" "4px"
          "padding-right" "8px"
          "padding-left" "3px"
          ))

      (".box-top" (
       "border" "1px solid #cacaca"
       "display" "block"
       "width" "auto"
       "padding" "0.5em"
       "margin-top" "0.5em"
      ))
      (".doublebox:first-child" (
        "border-top" "3px double #cacaca"
      ))
      (".doublebox " (
       "border-bottom" "3px double #cacaca"
        "border-left" "3px double #cacaca"
        "border-right" "3px double #cacaca"
       "display" "block"
       "width" "auto"
       "padding" "0.5em"
      ))
      (".greybox " (
       "background-color" "#f2f2f2"
      ))
      (".hang " (
        "padding-left" " 3em "
        "text-indent" " -3em "
        "display" "block"
      ))
      (".mono-font" (
       "font-family" "monospace"
      ))
      (".poem-format" (
       "margin-left" "auto"
       "margin-right" "auto"
       "display" "table"
      ))
      (".roundbox " (
        "border-radius" "1em"
       ))
      (".round-list" (
        "padding-left" "0.5em"
        "padding-right" "0.5em"
        "padding-top" "0.5em"
        "padding-bottom" "0.5em"
        "color" "#000"
        "margin" "auto"
        "width" "auto"
      ))
      (".round-list-item:first-child" (
        "border-top" "1px solid #cacaca"
        "border-top-left-radius" "10px"
        "border-top-right-radius" "10px"
      ))
      (".round-list-item:last-child" (
        "border-bottom-left-radius" "10px"
        "border-bottom-right-radius" "10px"
      ))
      (".round-list-item" (
        "border-left" "1px solid #cacaca"
        "border-bottom" "1px solid #cacaca"
        "border-right" "1px solid #cacaca"
        "display" "block"
        "width" "auto"
        "padding-left" "1em"
        "padding-right" "1em"
       "padding-top" "0.5em"
        "padding-bottom" "0.5em"
        "width" "100%"
        "height" "100%"

      ))
      (".round-list-item:hover" (

      ))
      (".round-list-item .link" (
        "display" "inline-block"
        "width" "100%"
        "height" "100%"
      ))
      (".menu-list" (
        "padding-left" "0.5em"
        "padding-right" "0.5em"
        "padding-top" "0.5em"
        "padding-bottom" "0.5em"
        "color" "#000"
        "margin" "auto"
        "width" "auto"
      ))
      (".menu-list-item:first-child" (
        "border-top" "1px solid #cacaca"
        "border-top-left-radius" "10px"
        "border-top-right-radius" "10px"
      ))
      (".menu-list-item:last-child" (
        "border-bottom-left-radius" "10px"
        "border-bottom-right-radius" "10px"
      ))
      (".menu-list-item" (
        "border-left" "1px solid #cacaca"
        "border-bottom" "1px solid #cacaca"
        "border-right" "1px solid #cacaca"
        "display" "block"
        "width" "auto"
        "padding-left" "1em"
        "padding-right" "1em"
       "padding-top" "0.5em"
        "padding-bottom" "0.5em"
        "width" "100%"
        "height" "100%"

      ))
      (".menu-list-item:hover" (

      ))
      (".menu-list-item .link" (
        "display" "inline-block"
        "width" "100%"
        "height" "100%"
      ))
      (".menu-list-item .link::after" (

      ))
      (".sans-font" (
       "font-family"  <%
   system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
               Roboto,
               Oxygen-Sans,
               Ubuntu,
               Cantarell,
               "Helvetica Neue",
               sans-serif %>
      ))
      (".serif-font" (
       "font-family" "Libre Baskerville, Palatino, Times, serif"
      ))
      ("sub" (
       "line-height" "0"
      ))
      ("sup" (
       "line-height" "0"
      ))
      (".smallcaps-font" (
       "font-variant" "small-caps"
      ))
      )))
