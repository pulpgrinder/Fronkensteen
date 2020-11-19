; root-ui-style.scm
; Copyright 2019-2020 by Anthony W. Hursh
; MIT license.

(define base-font-size 18)
(install-css "root-ui"
    (proc-css-list `(
      ("pre" (
        "white-space" "pre-wrap"))
      (".fronkensteen-panel" (
        "position" "fixed"
        "top" "0"
        "bottom" "0"
        "left" "0"
        "right" "0"
        "padding" "0"
        "margin" "0"
        "overflow" "auto"
        "background-color" "white"
        "font-size" ,(<< (number->string base-font-size) "px")
        "display" "none"

      ))
      (".fronkensteen-dialog" (
        "z-index" "10000"
        "width" "20em"
        "position" "absolute"
        "background-color" "rgba(0,0,0,0)"
        "padding" "0"
        "min-height" "15em"
        "box-shadow" "3px 3px 3px 3px rgb(0.8,0.8,0.8,0.25)"
        "border-top-left-radius" "10px"
        "border-top-right-radius" "10px"
        "margin" "0"
        ))

        (".fronkensteen-dialog-button" (
          "float" "right"
          "margin-right" "0.25em"
          ))
        (".fronkensteen-dialog-title" (
          "position" "absolute"
          "left" "0"
          "right" "0"
          "font-size" "125%"
          "height" "1.5em"
          "padding" "0.25em"
          "padding-bottom" "0"
          "padding-left" "0.5em"
          "border-top-left-radius" "10px"
          "border-top-right-radius" "10px"
          ))
          (".fronkensteen-dialog-body" (
            "position" "absolute"
            "top" "2em"
            "bottom" "0"
            "left" "0"
            "right" "0"
            "background-color" "#fff"
            "color" "#000"
            "border" "1px solid #000"
            "border-top" "none"
            "padding" "0"
            "overflow" "auto"
            ))
            (".fronkensteen-dialog-content" (
              "position" "relative"
              "height" "100%"
              ))
        (".dropcap" (
          "float" "left"
          "font-size" "75px"
          "line-height" "60px"
          "padding-top" "4px"
          "padding-right" "8px"
          "padding-left" "3px"
          ))

      (".fronkensteen-toolbar-button" (
        "height" "2em"
        "max-height" "2em"
        "min-height" "2em"
        "width" "2em"
        "max-width" "2em"
        "min-width" "2em"
        "padding" "0"
        "margin" "0"
        ))
      (".icon" (
        "width" "1em"
        "height" "1em"
        "max-width" "1em"
        "max-height" "1em"
        "min-width" "1em"
        "min-height" "1em"
        ))
      ("#repl-input" (
        "position" "relative"
        "font-size" "150%"
        "min-height" "100%"
        "font-family" "monospace"
        ))
        ("#lambda-proc-controls" (
          "position" "absolute"
          "top" "0"
          "height" "2em"
          "border-bottom" "1px solid #888"
          "width" "100%"
          ))
      ("#lambda-proc-info" (
        "position" "absolute"
        "top" "2em"
        "bottom" "0"
        "width" "100%"
        ))
      (".lambda-doc-body" (
        "background-color" "white"
        "color" "black"
        "padding" "0.5em"
        "margin" "auto"
        "word-wrap" "break-word"
        )
      )
      ("#lambda-proc-def-wrapper" (
        "position" "absolute"
        "background-color" "white"
        "color" "black"
        "top" "0"
        "bottom" "0"
        "left" "0"
        "overflow" "auto"
        "width" "65%"
        "padding" "0.5em"
        ))
    ("#lambda-proc-display-wrapper" (
      "background-color" "white"
      "color" "black"
      "position" "absolute"
      "top" "2em"
      "overflow" "auto"
      "width" "100%"
      "min-width" "100%"
      ))
      ("#lambda-proc-search" (
        "position" "absolute"
        "padding" "0.25em"
        "width" "100%"
        "border-bottom" "1px solid #888"
        ))
      ("#lambda-proc-def" (

        ))
    ("#lambda-proc-display" (

      ))

   (".lambda-proc-name-entry" (
     "border-bottom" "1px solid #888"
     "padding" "0.25em"
     "cursor" "pointer"))

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
          "position" "absolute"
          "right" "1.25em"
          "content" "'→'"
          "font-size" "150%"
          "color" "#777"
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
