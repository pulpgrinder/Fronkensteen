
; Synthetic DOM items
; Copyright 2019 by Anthony W. Hursh.
; MIT License.

(define (markup-trusted-text-file . args)
  (if (eqv? (length args) 1)
    (dv ".markup-text" (trusted-text-processor (read-internal-text-file (car args))))
    (dv (<< (car args) ".markup-text") (trusted-text-processor (read-internal-text-file (cadr args))))))

(define (markup-untrusted-text-file . args)
  (if (eqv? (length args) 1)
    (dv ".markup-text" (trusted-text-processor (read-internal-text-file (car args))))
    (dv (<< (car args) ".markup-text" (untrusted-text-processor (read-internal-text-file (cadr args)))))))

(define (markup-trusted-text . args)
  (if (eqv? (length args) 1)
    (dv ".markup-text" (trusted-text-processor (car args)))
    (dv (<< (car args) ".markup-text") (trusted-text-processor (cadr args)))))

(define (markup-untrusted-text . args)
  (if (eqv? (length args) 1)
    (dv ".markup-text" (untrusted-text-processor (car args)))
    (dv (<< (car args) ".markup-text") (untrusted-text-processor (cadr args)))))



(define (internal-image . args) ; Generate a data URL-based image from an internal "file".
  (if (eqv? (length args) 1)
    (img (<< "!src='"  (read-internal-data-url (car args)) "'"))
    (img (<< (car args) "!src='"  (read-internal-data-url (cadr args)) "'"))))

(define (internal-video . args) ; Generate a data URL-based video from an internal "file". Needs to be expanded to handle formats other than .mp4.
    (if (eqv? (length args) 1)
      (video "!controls" (<< "<source src='"  (read-internal-data-url (car args)) "' type='video/mp4'"))
      (video (<< (car args) "!controls") (<< "<source src='"  (read-internal-data-url (cadr args)) "' type='video/mp4'"))))

(define (internal-audio . args) ; Generate a data URL-based audio player from an internal "file". Needs to be expanded to handle formats other than .mp3.
    (if (eqv? (length args) 1)
      (audio "!controls" (<< "<source src='"  (read-internal-data-url (car args)) "' type='audio/mpeg'"))
      (video (<< (car args) "!controls") (<< "<source src='"  (read-internal-data-url (cadr args)) "' type='audio/mpeg'"))))

(define (ulist . items) ; Synthetic tag for generating an unordered list. (ulist "foo" "bar" "baz") evaluates to "<ul><li>foo</li><li>bar</li><li>baz</li></ul>"
  (ul (html-list items)))

(define (olist . items) ; Synthetic tag for generating an uordered list. (olist "item1" "item2" "item3") evaluates to "<ol><li>item1</li><li>item2< li><li>item3</li></ol>"
    (ol (html-list items)))


(define (html-list . items) ; Build an HTML list from an arbitrary number of items. (html-list "foo" "bar" "baz") evaluates to "<li>foo</li><li>bar</li><li>baz</li>"
  (html-list-rec items))

(define (html-list-rec items) ; Build an HTML list from a Scheme list of items. (html-list-rec '("foo" "bar" "baz")) evaluates to "<li>foo</li><li>bar</li><li>baz</li>"
  (if (eqv? items '())
    ""
    (<< (li (car items)) (build-html-list (cdr items)))))

(define (codeblock . args) ; Synthetic tag for generating block marked up as code. Wraps args in <pre> and <code> tags.
  (apply seml (list "pre" (apply seml (cons "code" args)))))

(define (classdiv extra . args) ; Helper function for synthetic DOM elements.
  (if (eqv? (length args) 1)
    (dv extra (car args))
    (dv (<< (car args) extra) (cadr args))))

(define (generic-span extra . args)  ; Helper function for synthetic DOM elements.
  (if (eqv? (length args) 1)
    (span extra (car args))
    (span (<< (car args) extra) (cadr args))))

(define (box . args)  ; Evaluates to an HTML div string with the specified arguments, adding the .box class.
  (apply classdiv (cons ".box" args)))

(define (box-top . args)   ; Evaluates to an HTML div string with the specified arguments, adding the .box-top class (used for the first box in a column of boxes.)
  (apply classdiv (cons ".box-top" args)))

(define (color-box fontcolor backgroundcolor . args)   ;Evaluates to an HTML div string with the specified arguments, adding the specified foreground (fontcolor) and background colors.
  (let ((style-string (<< "!style=" "'color:" fontcolor ";background-color:" backgroundcolor ";'")))
    (apply classdiv (cons style-string args))))

(define (color-box-top fontcolor backgroundcolor . args)   ; Evaluates to an HTML div string with the specified arguments, adding the specified foreground (fontcolor) and background colors. Used for the first color-box in a column of color-boxes.
  (let ((style-string (<< ".box-top!style=" "'color:" fontcolor ";background-color:" backgroundcolor ";'")))
    (apply classdiv (cons style-string args))))

(define (double-box . args)   ; Evaluates to an HTML  div string with the .double-box class (double border).
    (apply classdiv (cons ".double-box" args)))

(define (double-grey-box . args)   ; Evaluates to an HTML div string with the .double-box and .grey-box classes (double border, grey background).
  (apply classdiv (cons ".double-box.grey-box" args)))

(define (double-round-box . args) ; Evaluates to an HTML div string with the .double-box and .round-box classes (double border, rounded corners).
  (apply classdiv (cons ".round-box.double-box" args)))

(define (double-round-grey-box . args) ; Evaluates to an HTML div string with the .double-box, .round-box, and .grey-box classes (double border, rounded corners, grey background).
    (apply classdiv (cons ".round-box.double-box.grey-box" args)))

(define (grey-box . args) ; Evaluates to an HTML div string with the .grey-box class (grey background).
    (apply classdiv (cons ".grey-box.box" args)))

(define (hang . args) ; Evaluates to an HTML div string with the .hang class (hanging indent).
    (apply classdiv (cons ".hang"  args)))

(define (mono-font . args) ; Evaluates to an HTML div string with the .mono-font class (monospaced font).
   (apply generic-span (cons "mono-font"  args)))

(define (poem . args) ; Evaluates to an HTML div string with the .poem-format class (used to format poetry).
   (apply classdiv (cons ".poem-format"  args)))

(define (round-list . args) ; Evaluates to an HTML div string with the .round-list class (list container with rounded corners).
 (apply classdiv (cons ".round-list" args)))

(define (round-list-item . args); Evaluates to an HTML div string with the .round-list-item class (list item with rounded corners).
 (apply classdiv (cons ".round-list-item"  args)))

 (define (menu-list . args) ; Evaluates to an HTML div string with the .menu-list class (list container with rounded corners).
  (apply classdiv (cons ".menu-list" args)))

 (define (menu-list-item . args); Evaluates to an HTML div string with the .menu-list-item class (list item with rounded corners).
  (apply classdiv (cons ".menu-list-item"  args)))

(define (sans-font . args) ; Evaluates to an HTML div string with the .sans-font class (sans-serif font).
   (apply generic-span (cons ".sans-font"  args)))

(define (serif-font . args) ; Evaluates to an HTML div string with the .serif-font class (serif font).
   (apply generic-span (cons ".serif-font"  args)))

(define (smallcaps-font . args) ; Evaluates to an HTML div string with the .smallcaps-font class (small caps font).
 (apply generic-span (cons ".smallcaps-font"  args)))

(define (symbol-font . args) ; Evaluates to an HTML div string with the .symbol-font class (symbol font).
  (apply generic-span (cons ".symbol-font"  args)))

(define (round-box . args); Evaluates to an HTML div string with the .round-box class (rounded corners).
    (apply classdiv (cons ".round-box.box"  args)))

(define (round-grey-box . args) ; Evaluates to an HTML div string with the .grey-box and .round-box classes (grey background, rounded corners).
    (apply classdiv (cons ".round-box.grey-box.box"  args)))

(define (warning-box . args) ; Evaluates to an HTML div string with the font set to yellow text on red background. Hopefully eye-catching.
    (apply color-box (cons "#ffff00" (cons "#ff0000" args))))
