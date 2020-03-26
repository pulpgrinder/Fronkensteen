; treeview.scm
; Copyright 2020 by Anthony W. Hursh
; MIT license.

(define (build-tree-view data container selected_procedure)
    (% container "html" (dv ".treecontainer" (apply << (map (lambda (item) (treeview item 0 "")) data))))
    (% (<< container " .treecaption") "on" "click" (lambda (ev)
        (let ((target (js-ref ev "currentTarget")))
          (% (% (% (% target "parent") "children") "filter" ".treeleaf") "toggleClass" "displayed")
          (% (% (% (% target "parent") "children") "filter" ".treenode") "toggleClass" "displayed")
          (% target "toggleClass" "expanded")
          (% ".treeitem" "removeClass" "active")
          (% target "addClass" "active")
    )))
    (% (<< container " .treeitem") "on" "click" (lambda (ev)
      (let ((target (js-ref ev "currentTarget")))
        (% ".treeitem" "removeClass" "active")
        (% target "addClass" "active"))
      (selected_procedure ev)))
    (% (%  (% container "children") "children") "toggleClass" "displayed")
    )






(define (get-tree-folder tree-leaf)
    (% (% (% (% tree-leaf "parent") "children") "first") "html"))



(define (treeview data level relative-path)
    (if (list? data)
        (treenode data level relative-path)
        (treeleaf data level relative-path)))


(define (treenode data level relative-path)
     (let ((newpath
        (if (eqv? relative-path "")
          (car data)
            (<< relative-path "/" (car data)))))
            (dv (<< ".treenode!relative-path='"  newpath "'") (<< (dv (<< ".treecaption.treeitem!contenteditable='true'.treefolder.treefolderlevel" (number->string level) "!relative-path='"  newpath "'") (car data))
     (apply << (map  (lambda (item) (treeview item (+ level 1) newpath)) (cdr data)))))))



(define (treeleaf data level relative-path)
    (dv (<< ".treeleaf.treeitem!contenteditable='true'.treefilelevel" (number->string level) "!relative-path='" (<< relative-path "/" data) "'") data))
