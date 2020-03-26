; app-remote-terminal.scm, copyright 2019-2020 by Anthony W. Hursh.
; Released under the same MIT license as the Fronkensteen system as a whole.


(add-ui-panel "#fronkensteen-terminal" "")

(% "#fronkensteen-terminal" "html"
    (<<
      (dv
      (textarea "#code-input!cols='80'" ""))
      (dv
      (textarea "#code-output!cols='80'" ""))
      (dv
      (button "#eval-button" "Eval"))))

(show-ui-panel "#fronkensteen-terminal")

(wire-ui)

(launch-remote-repl-client)

(define (display-repl-result result)
  (% "#code-output" "val" result))

(define (eval-button_click)
    (remote-evaluate (% "#code-input" "val"))
)
