
(define (tree-file-clicked ev)
    (let ((target (js-ref ev "currentTarget")))
      (let ((relpath (% target "attr" "relative-path")))
        (if (% target "hasClass" "treeleaf")
          (begin
            (set! current-bale  (vector-ref (str-split relpath "/") 0))
            (set! fronkensteen-selected-file relpath)
            (display-file-editor relpath))
          (if (% target "hasClass" "treefolderlevel0")
              (set! current-bale (% target "attr" "relative-path"))
              #f
          )
          ))))
