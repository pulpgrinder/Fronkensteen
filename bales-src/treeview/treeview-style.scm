(install-css "treeview"
    (proc-css-list `(
        (".treecontainer" (
          ))
        (".treeitem" (
          "color" "black"
          "background-color" "white"
          ))
          (".treeitem.active" (
            "color" "white"
            "background-color" "blue"
            ))
        (".treenode"(
          "display" "none"
          ))
          (".treenode.displayed"(
            "display" "block"
            ))
        (".treecaption::before" (
        "content" "\"▶\""
        "font-size" "75%"
        "padding-right" "0.25em"
        ))
        (".treecaption.expanded::before" (
          "content" "\"▼\""
          "font-size" "75%"
          "padding-right" "0.25em"
          ))
        (".treeleaf" (
          "display" "none"
          ))
        (".treeleaf.displayed" (
            "display" "block"
        ))
        (".treefolderlevel0" (
          "padding-left" "1em"
          ))
        (".treefilelevel0" (
          "padding-left" "1.5em"
          ))
        (".treefolderlevel1" (
          "padding-left" "2em"
          ))
        (".treefilelevel1" (
          "padding-left" "2.5em"
          ))
      (".treefolderlevel2" (
        "padding-left" "3em"
        ))
      (".treefilelevel2" (
        "padding-left" "3.5em"
        ))
        (".treefolderlevel3" (
          "padding-left" "4em"
          ))
        (".treefilelevel3" (
          "padding-left" "4.5em"
          ))
      (".treefolderlevel4" (
        "padding-left" "5em"
        ))
      (".treefilelevel4" (
        "padding-left" "5.5em"
        ))
       )))
