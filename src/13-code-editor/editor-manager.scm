(define editor-info-hash (make-eqv-hashtable))

(define (add-editor-info editor-id title resource-path load-proc save-proc close-proc)
  (if (eqv? (hashtable-ref editor-info-hash editor-id #f) #f)
    (begin
    (hashtable-set! editor-info-hash editor-id (list editor-id title resource-path load-proc save-proc close-proc))
    #t)
    (begin
      (console-log (<< "Error: editor " editor-id " already exists"))
     #f)
   ))

(define (get-generic-editor-title editor-id)
(let ((editor-info (hashtable-ref editor-info-hash editor-id #f)))
  (if (eqv? editor-info #f)
    #f
    (cadr editor-info))))

(define (get-generic-editor-resource-path editor-id)
  (let ((editor-info (hashtable-ref editor-info-hash editor-id #f)))
    (if (eqv? editor-info #f)
      #f
      (caddr editor-info))))

(define (get-generic-editor-load-proc editor-id)
  (let ((editor-info (hashtable-ref editor-info-hash editor-id #f)))
    (if (eqv? editor-info #f)
      #f
      (cadddr editor-info))))

(define (get-generic-editor-save-proc editor-id)
  (let ((editor-info (hashtable-ref editor-info-hash editor-id #f)))
    (if (eqv? editor-info #f)
      #f
      (cadr (cdddr editor-info)))))

(define (get-generic-editor-close-proc editor-id)
  (let ((editor-info (hashtable-ref editor-info-hash editor-id #f)))
    (if (eqv? editor-info #f)
      #f
      (caddr (cdddr editor-info)))))
