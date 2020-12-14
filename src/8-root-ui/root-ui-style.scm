; root-ui-style.scm
; Copyright 2019-2020 by Anthony W. Hursh
; MIT license.

(install-css "root-ui"
    (proc-css-list `(
      (".icon" (
    ;  "color" "#0a60fe"
       "color" "#d08b29"
        ))

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
      )
    )
    (".fronkensteen-dialog" (
      "z-index" "10000"
      "width" "20em"
      "position" "absolute"
      "background-color" "rgba(0,0,0,0)"
      "padding" "0"
      "min-height" "15em"
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
        "color" "#dfe2e2"
        "background-color" "#333"
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

      (".fronkensteen-dialog-text-block" (
        "padding" "2em"
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
            "border-bottom" "1px solid #aaa"
          "top" "70px"
          ))
          ("#fronkensteen-status-bar-container" (
            "position" "fixed"
             "left" "0"
              "right" "0"
              "padding" "0"
              "width" "100%"
              "border-bottom" "1px solid #aaa"
            "top" "120px"
            ))
            ("#fronkensteen-search-bar-container" (
              "position" "fixed"
               "left" "0"
                "right" "0"
                "padding" "0"
                "padding-left" "0.5em"
                "width" "100%"
                "border-bottom" "1px solid #aaa"
              "top" "141px"
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
      (".popup-list" (
        "padding-left" "0.5em"
        "padding-right" "0.5em"
        "padding-top" "0.5em"
        "padding-bottom" "0.5em"
        "color" "#000"
        "margin" "auto"
        "width" "auto"
      ))
      (".popup-list-item:first-child" (
        "border-top" "1px solid #cacaca"
        "border-top-left-radius" "10px"
        "border-top-right-radius" "10px"
      ))
      (".popup-list-item:last-child" (
        "border-bottom-left-radius" "10px"
        "border-bottom-right-radius" "10px"
      ))
      (".popup-list-item" (
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
      (".popup-list-item:hover" (

      ))
      (".popup-list-item .link" (
        "display" "inline-block"
        "width" "100%"
        "height" "100%"
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

      (".fronkensteen-page-content" (
        "padding" "4em"
        ))
      (".fronkensteen-page-wrapper" (
        "display" "none"
        "max-width" "60em"
        "margin" "auto"
        "position" "relative"
        "background-color" "#f5f5f0"
        "overflow" "auto"
        "-webkit-overflow-scrolling" "touch";
        ))
     ("#fronkensteen-search-list-wrapper" (
       "overflow" "auto"
       "max-height" "15em"
       "margin-top" "0.5em"
     ))
     (".fronkensteen-toolbar" (
       "width" "100%"
       "display" "flex"
       "justify-content" "space-evenly"
       ))
     ("#fronkensteen-editor-page-title" (
       "display" "none"
       "position" "relative"
       "top" "0.5em"
       ))
     (".fronkensteen-history-entry" (
       "border-left" "1px solid #ddd"
       "border-right" "1px solid #ddd"
       "border-bottom" "1px solid #ddd"
       "min-width" "15em"
       "padding" "0.25em"
       ))
    ("div .fronkensteen-history-entry:first-child" (
      "border-top" "1px solid #ddd"
      ))
    ("#close-search-bar" (
      "position" "relative"
      "top" "0.125em"
      ))
    (".fronkensteen-editor" (
      "height" "100%"
      ))
    (".fronkensteen-content-text" (
        "padding" "4em"
        "max-width" "60em"
        "margin" "0 auto"
      ))
    (".fronkensteen-page-content blockquote" (
      "padding" "1em"
      "margin" "auto"
      "max-width" "45em"
      "background-color" "#ddd"
      "border-radius" "10px"
      ))
    (".menu-list" (
    "max-width" "50em"))
    (".rounded-list" (
    "max-width" "50em"))
      )))
