(install-css "code-editor"
    (proc-css-list `(
        (".fronkensteen-wiki-editor .CodeMirror" (
          "height" "100%"
          ))
          (".fronkensteen-remote-terminal-wrapper .CodeMirror" (
            "height" "100%"
            ))
            ("#fronkensteen-repl-content .CodeMirror" (
              "height" "19em"
              ))
        ("#fronkensteen-editor-controls" (
          "position" "relative"
          "top" "-0.25em"
          ))
        ("#chardialog" (
          "margin" "0 auto"
          ))
        (".charcopy" (
          "min-width" "1em"
          "max-width" "1em"
          "width" "1em"
          "height" "2em"
          "border" "1px solid #bbb"
          "background-color" "white"
          "display" "inline-block"
          ))
            )))
