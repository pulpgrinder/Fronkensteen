(define (wiki-data-path basename)
  (<< "user-files/wiki/wikitext/"  (encode-uri basename) ".fmk"))

(define (wiki-page-id title)
  (<< "#id-" (encode-base-32 (wiki-data-path title))))


(define (wiki-base-name filename)
    (file-path-no-extension (str-replace filename "/user-files/wiki/" "")))

(define (wiki-display-name filename)
  (let ((path (str-replace filename "user-files/wiki/wikitext/" "")))
    (if (eqv? (file-extension path) "fmk")
      (file-path-no-extension path)
      path)))
