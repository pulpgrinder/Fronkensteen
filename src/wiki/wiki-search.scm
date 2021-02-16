(define search-value #f)
(define search-case-sensitive #f)
(define search-regex #f)
(define search-all-files #f)

(define (search-hash-tag tag)
    (set! search-value tag)
    (display-wiki-menu-page "Search"))

(define (collect-matching-wiki-pages text file-list is-regex? is-case-sensitive?)
  (if (eqv? file-list '())
      '()
      (let ((current-filename (car file-list)))
        (console-log (<< "Checking " current-filename))
        (if
          (or
            (wiki-file-name-match text current-filename is-regex? is-case-sensitive?)
            (wiki-file-text-match text current-filename is-regex? is-case-sensitive?))
           (cons (decode-uri current-filename) (collect-matching-wiki-pages text (cdr file-list) is-regex? is-case-sensitive?))
           (collect-matching-wiki-pages text (cdr file-list) is-regex? is-case-sensitive?)
        ))))


(define (collect-wiki-page-list)
  (assemble-wiki-page-list (vector->list (get-internal-dir "user-files/wiki/wikitext"))))

(define (collect-linked-pages title page-list)
    (collect-matching-wiki-pages (<< "[link " title) page-list #f #t))

(define (collect-menu-pages title page-list)
        (collect-matching-wiki-pages (<< "\\[menu[\\s\\S]*" title "[\\s\\S]*menu\\]") page-list #t #t))

(define (collect-include-pages title page-list)
        (collect-matching-wiki-pages (<< "\\[\\!include[\\s\\S]*" title "[\\s\\S]*include\\!\\]") page-list #t #t))

(define (assemble-wiki-page-list raw-list)
  (if (eqv? raw-list '())
    '()
    (cons (wiki-display-name (decode-uri (car raw-list))) (assemble-wiki-page-list (cdr raw-list)))))


(define (wiki-file-name-match text file-path is-regex? is-case-sensitive?)
  (case-search (decode-uri file-path) text is-regex? is-case-sensitive?))

(define (case-search haystack needle is-regex? is-case-sensitive?)
    (let ((re (if is-regex?
               needle
               (escape-regex needle)))
          (remod (if is-case-sensitive?
                  "g"
                  "gi")))
      (str-match? haystack re remod)))

(define (wiki-file-text-match text file-path is-regex? is-case-sensitive?)
  (console-log (<< "checking " file-path " for " text " regex " (format "~s" is-regex?) "case-sensitive " (format "~s" is-case-sensitive?)))
  (case-search (read-internal-text-file file-path) text is-regex? is-case-sensitive?))
