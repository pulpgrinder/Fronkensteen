(define (retrieve-wiki-data title)
  (let ((filename (wiki-data-path title)))
    (fronkenmark-set-source-file filename)
      (if (file-exists? filename)
        (read-internal-text-file filename)
        (begin
          (write-internal-text-file (wiki-data-path title) "(new file)")
          "(new file)"
          ))))

(define (update-wiki-page title wikidata)
  (let ((filename (wiki-data-path title))
        (page-id (wiki-page-id title)))
        (write-internal-text-file filename wikidata)
        (if (element-exists? page-id)
            (% (<< page-id " .ppage-content .pure-text") "html" (render-wiki-content wikidata)))))
