; root-ui-style.scm
; Copyright 2019-2020 by Anthony W. Hursh
; MIT license.


(install-css "root-ui"
    (proc-css-list `(
      ("pre" (
        "white-space" "pre-wrap"))

      ("blockquote" (
        "background-color" "#ddd"
        "padding" "1em"
        "border-radius" "10px"

        ))
      ("code" (
        "font-family" "Inconsolata, Noto Mono, Menlo, Consolas, DejaVu Sans Mono, Monaco, monospace"
        "color" "green"
       ))
       (".cursive" (
         "font-family" "cursive"
        ))
        (".fantasy" (
          "font-family" "fantasy"
         ))
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
        "background-color" "white"

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
        "background-color" "white"

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
               sans-serif,
               Kitchen-Sink %>
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

    (".menu-list" (
    "max-width" "50em"))
    (".rounded-list" (
    "max-width" "50em"))

      (".fronkenpoetry" (
        "display" "table"
        "margin" "0 auto"
        "font-family"  <%
    system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
                Roboto,
                Oxygen-Sans,
                Ubuntu,
                Cantarell,
                "Helvetica Neue",
                sans-serif,
                Kitchen-Sink %>
        ))
      (".fronkensteen-toast" (
          "z-index" "-1"
          "position" "absolute"
          "background-color" "rgba(0,0,0,0.7)"
          "color" "#ddd"
          "width" "auto"
          "height" "auto"
          "padding" "1em"
          "border-radius" "10px"
        ))
      ("#fronkensteen-page-store" (
        "display" "none"
        ))
      )))
