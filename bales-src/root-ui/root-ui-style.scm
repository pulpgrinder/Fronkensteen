; root-ui-style.scm
; Copyright 2019-2020 by Anthony W. Hursh
; MIT license.

(install-css "root-ui"
    (proc-css-list `(
      (".fronkensteen-panel" (
        "position" "fixed"
        "top" "0"
        "bottom" "0"
        "left" "0"
        "right" "0"
        "padding" "0"
        "overflow" "scroll"
        "background-color" "white"
        "font-size" "20px"
        "display" "none"

      ))
      (".fronkensteen-panel:focus" (
          "outline" "none"))
      (".box:first-child" (
        "border-top" "1px solid #cacaca"
      ))
      (".box" (
       "border-left" "1px solid #cacaca"
        "border-bottom" "1px solid #cacaca"
        "border-right" "1px solid #cacaca"
       "display" "block"
       "width" "auto"
       "padding" "0.5em"
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
      (".roundlist" (
        "padding-left" "0.5em"
        "padding-right" "0.5em"
        "padding-top" "0.5em"
        "padding-bottom" "0.5em"
        "color" "#000"
        "margin" "auto"
        "width" "auto"
      ))
      (".roundlist-item:first-child" (
        "border-top" "1px solid #cacaca"
        "border-top-left-radius" "10px"
        "border-top-right-radius" "10px"
      ))
      (".roundlist-item:last-child" (
        "border-bottom-left-radius" "10px"
        "border-bottom-right-radius" "10px"
      ))
      (".roundlist-item" (
        "border-left" "1px solid #cacaca"
        "border-bottom" "1px solid #cacaca"
        "border-right" "1px solid #cacaca"
        "display" "block"
        "width" "auto"
        "padding-left" "1em"
        "padding-right" "1em"
       "padding-top" "0.5em"
        "padding-bottom" "0.5em"
      ))
      (".roundlist-item:hover" (
        "color" "white"
        "background-color" "black"
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
      )))))
