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
      )))))
