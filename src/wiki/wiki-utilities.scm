(define (wiki-data-path basename)
  (<< "user-files/wiki/wikitext/"  (encode-uri basename) ".fmk"))

(define (wiki-page-id title)
  (code-page-id (wiki-data-path title)))


(define (code-page-id filename)
  (<< "#id-" (encode-base-32 filename)))


(define (wiki-base-name filename)
    (file-path-no-extension (str-replace filename "/user-files/wiki/wikitext" "")))

(define (wiki-display-name filename)
  (let ((path (str-replace (decode-uri filename) "user-files/wiki/wikitext/" "")))
    (if (eqv? (file-extension path) "fmk")
      (file-path-no-extension path)
      path)))
