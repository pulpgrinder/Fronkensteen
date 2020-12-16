(define (generic-editor-file-reader id)
  (let ((filename (get-generic-editor-resource-path id)))
    (if (file-exists? filename)
      (read-internal-text-file filename)
      "(new file)")))

(define (generic-editor-file-writer id)
  (let ((old-path (get-generic-editor-resource-path id)))
      (let ((old-extension (file-extension old-path))
           (old-base-path (file-path old-path))
           (new-title (% "#fronkensteen-editor-page-title" "val")))
           (let ((new-path (<< old-base-path "/" (file-basename-no-extension (encode-uri new-title)) "." old-extension)))
              (if (not (eqv? old-path new-path))
                (begin
                  (file-rename old-path new-path)
                  (let ((old-info (hashtable-ref editor-info-hash id #f)))
                    (hashtable-set! editor-info-hash id (cons id (cons new-title (cons new-path (cdddr old-info))))))))
  (write-internal-text-file new-path (cm-editor-get-text id))))))

(define (generic-editor-file-close id)
  #t ; placeholder
        )
