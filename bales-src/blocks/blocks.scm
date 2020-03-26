; blocks.scm
; Copyright 2019-2020 by Anthony W. Hursh
; MIT License.

(define block-db (make-eq-hashtable))

(define collection-db (make-eq-hashtable)) ; The collection-db hash contains various "collections" (collections of blocks). The collection content is just a list of block ids.

(define (reset-block-db!) ; Reset the block-db system back to scratch. block-db and collection-db are both set to new, empty hashtables.
  (set! block-db (make-eq-hashtable))
  (set! collection-db (make-eq-hashtable)))

(define (set-collection! collection-name . args) ; Create/update a collection. Replaces any existing collection that has the same name. Optional arg is a list of block ids. If not supplied, uses an empty list.
(let ((block-list
  (if (eqv? (length args) 1)
    (car args)
    '())))
  (hashtable-set! collection-db collection-name block-list)))


(define (get-collection collection-name) ; Retrieve the collection with the given name, or #f if not found.
  (hashtable-ref collection-db collection-name #f))


(define (add-block-to-collection! block-id collection-name position) ; Insert a block-id in the given collection at the given position. Produces the new block-id list, or #f if the collection does not exist.
    (let ((block-list (get-collection collection-name)))
      (if (eqv? block-list #f)
        #f
        (let ((new-block (insert-nth block-list position block-id)))
          (set-collection! collection-name new-block))
          new-block)))

(define (find-next-block block-id block-list) ; Returns the block that follows the given block-id in the block-list, or #f if there is no next block.
  (cond ((eqv? block-list '()) #f)
        ((eqv? (car block-list) block-id)
            (if (eqv? (cdr block-list) '())
              #f
              (cadr block-list)))
       (#t (find-next-block block-id (cdr block-list)))))

(define (find-previous-block block-id block-list previous) ; Returns the block that precedes the given block-id in the block-list, or #f if there is no next block.
 (cond ((eqv? block-list '()) #f)
       ((eqv? (car block-list) block-id)
          previous)
      (#t (find-previous-block block-id (cdr block-list) (car block-list)))))

(define (get-next-block block-id collection-name)  ; Returns the block that follows the given block-id in the given collection, or #f if there is no next block.
  (let ((block-list (get-collection collection-name)))
    (find-next-block block-id block-list)))

(define (get-previous-block block-id collection-name)  ; Returns the block that precedes the given block-id in the given collection, or #f if there is no next block.
  (let ((block-list (get-collection collection-name)))
    (find-previous-block block-id block-list #f)))

(define (title-in-collection? title collection-name) ; Evaluates to #t if there is a block with the given title in the given collection, #f otherwise.
  (let ((block-list (get-collection collection-name)))
    (if (eqv? block-list #f)
      #f
      (title-in-block-list? title block-list))))

(define (title-in-block-list? title block-list) ; Evaluates to #t if there is a block with the given title in the given block-list, #f otherwise.
    (cond ((eqv? block-list '()) #f)
          ((eqv? title (get-block-title (car block-list))) #t)
          (#t (title-in-block-list? title (cdr block-list)))))

(define (enumerate-collection-ids-titles collection-name) ; Evaluates to a list of lists, each of which contains a block id and title for a block in the collection.
  (let ((block-list (get-collection collection-name)))
    (if (eqv? block-list #f)
      #f
    (enumerate-block-list-ids-titles block-list))))

(define (enumerate-collection-titles collection-name) ;  Evaluates to a list of all the titles for the blocks in the given collection.
  (let ((block-list (get-collection collection-name)))
    (if (eqv? block-list #f)
      #f
    (enumerate-block-list-titles block-list))))


(define (enumerate-block-list-titles block-list)  ;  Evaluates to a list of all the titles for the blocks in the given block-list.
    (if (eqv? block-list '())
      '()
    (cons (get-block-title (car block-list)) (enumerate-block-list-titles (cdr block-list)))))


(define (enumerate-block-list-ids-titles block-list) ; Evaluates to a list of lists, each of which contains a block-id and the corresponding block-title for the given block-list.
    (if (eqv? block-list '())
      '()
    (cons (list (car block-list) (get-block-title (car block-list))) (enumerate-block-list-ids-titles (cdr block-list)))))



(define (append-block-to-collection! block-id collection-name) ; Insert a block-id at the end of the given collection. Evaluates to the new block-id list, or #f if the collection does not exist.
    (let ((block-list (get-collection collection-name)))
      (if (eqv? block-list #f)
        #f
        (let ((new-block (append block-list (list block-id))))
          (set-collection! collection-name new-block))
          new-block)))


(define (prepend-block-to-collection! block-id collection-name) ; Insert a block-id at the beginning of the given collection. Evaluates to the new block-id list, or #f if the collection does not exist.
    (let ((block-list (get-collection collection-name)))
      (if (eqv? block-list #f)
        #f
        (let ((new-block (cons block-id block-list)))
          (set-collection! collection-name new-block))
          new-block)))


(define (add-block-to-db! block) ; Add a block to the global block database. Note that this will overwrite any previous block with the same block-id.
  (let ((assoc-pair (assq (encode-uri-component "block-id") block)))
    (let ((block-id (cadr assoc-pair)))
      (hashtable-set! block-db block-id block)
      block-id)))

(define (get-block block-id) ; Evaluates to the block with the given block-id, or #f if no such block exists.
  (hashtable-ref block-db block-id #f))


(define (clone-block block-id) ; Returns a block with a new block-id, but otherwise identical to the one specified by block-id
    (let ((block (get-block block-id)))
      (if (eqv? block #f)
        (begin
            (console-log (<< "Attempt to clone block " block-id ": no such block in database"))
            #f)
        (let ((new-block-id (string-append "block-"(uuid))))
         (add-block-to-db! (clone-block-elements block new-block-id))
         new-block-id))))

(define (clone-block-elements block new-block-id) ; Helper procedure for clone-block. Not intended to be called directly.
  (cond ((eqv? block '()) '())
        ((eqv? (caar block) "block-id") (cons (list "block-id" new-block-id) (clone-block-elements (cdr block))))
        (#t (cons (car block) (clone-block-elements (cdr block) new-block-id)))))

(define (new-block! block-data) ; Creates a new block with the given data, assigns it a block-id, and inserts it in the global database.
   (let ((id (string-append "block-"(uuid))))
        (add-block-to-db! (cons (list "block-id" id) block-data))))

(define (new-collection-block! block-data collection-name)  ; Creates a new block with the given data, assigns it a block-id,  inserts it in the global database, and adds it to the given collection.
    (append-block-to-collection! (new-block! block-data) collection-name))


(define (set-block-param! param value block-id) ; Sets the value of param to value in the block corresponding to the given block-id.
  (let ((block (get-block block-id)))
    (if (eqv? block #f)
      #f
    (let ((encoded-param (encode-uri-component param))
          (encoded-value (encode-uri-component value)))
      (let ((new-block (cons (list encoded-param encoded-value) (del-assq encoded-param block))))
          (add-block-to-db! new-block)
          )))))

(define (del-assq key alist) ; Evaluates to a new list with the given key removed from the given alist.
    (cond ((eqv? alist '()) '())
          ((eqv? (caar alist) key) (del-assq key (cdr alist)))
          (#t (cons (car alist) (del-assq key (cdr alist))))))

(define (get-block-param param block-id) ; Evaluates to the value of the given param in the given block-id, or #f if the block or param does not exist.
    (let ((block (get-block block-id)))
      (if (eqv? block #f)
        #f
        (let ((assoc-pair (assq (encode-uri-component param) block)))
        (if (eqv? assoc-pair #f)
          #f
          (decode-uri-component (cadr assoc-pair)))))))



(define (update-block-title! block-id new-title) ; Changes the title for the given block-id to the given new title.
    (set-block-param! "title" new-title block-id))

(define (update-block-content! block-id new-content) ; Changes the content for the given block-id to the given new content.
      (set-block-param! "content" new-content block-id))


(define (update-block-title-and-content! block-id new-title new-content)  ; Changes the title and content for the given block-id to the given new title and content.
  (update-block-title! block-id new-title)
  (update-block-content! block-id new-content))


(define (get-block-title block-id) ; Evaluates to the block title for the given block-id, or #f if the block does not exist.
   (get-block-param "title" block-id))


(define (get-block-content block-id) ; Evaluates to the block content for the given block-id, or #f if the block does not exist.
  (get-block-param "content" block-id))

(define (get-block-type block-id) ; Evaluates to the block type for the given block-id, or #f if the block does not exist.
   (get-block-param "type" block-id))

(define (block-match? block-id regex-string regex-mode)
      (if (or (str-match? (get-block-title block-id) regex-string regex-mode)
            (str-match? (get-block-content block-id) regex-string regex-mode))
          #t
          #f))

(define (block-text-search-rec keys regex-string regex-mode)
  (if (eqv? keys '())
      '()
      (let ((rest (block-text-search-rec (cdr keys) regex-string regex-mode))
            (current (car keys)))
          (if (block-match? current regex-string regex-mode)
              (cons current rest)
              rest))))

(define (block-text-search regex-string regex-mode)
  (let ((block-keys (vector->list (hashtable-keys block-db))))
    (block-text-search-rec block-keys regex-string regex-mode)))


(define (set-block-indent! block-id level)
  (cond ((< level 0) #f)
        ((> level 6) #f)
        (#t (add-block-to-db! (set-block-param! "indent" (number->string level)  block-id)))))

(define (get-block-indent block-id )
  (string->number (get-block-param  "indent" block-id)))

(define (delete-block! block-id)
  (hashtable-delete! block-db block-id))

(define (delete-block-id-from-list-rec! block-list block-id)
  (cond ((eqv? block-list '()) block-list)
        ((eqv? (car block-list) block-id) (cdr block-list))
        (#t (cons (car block-list) (delete-block-id-from-list-rec! (cdr block-list) block-id)))))

(define (delete-block-from-collection! block-id collection-name)
  (let ((block-list (get-collection collection-name)))
    (if (eqv? block-list #f)
      #f
      (set-collection! collection-name (delete-block-id-from-list-rec! block-list block-id)))))


(define (insert-block-id-in-list-after-rec! block-list old-block-id new-block-id)
  (cond ((eqv? block-list '()) (cons new-block-id block-list))
        ((eqv? (car block-list) old-block-id) (cons old-block-id (cons new-block-id (cdr block-list))))
        (#t (cons (car block-list) (insert-block-id-in-list-after-rec! (cdr block-list) old-block-id new-block-id)))))


(define (insert-block-id-in-collection-after! old-block-id new-block-id collection-name)
  (let ((block-list (get-collection collection-name)))
    (if (eqv? block-list #f)
      #f
    (set-collection! collection-name (insert-block-id-in-list-after-rec! block-list old-block-id new-block-id)))))

(define (is-block-in-list? block-id block-list)
  (cond ((eqv? block-list '()) #f)
        ((eqv? block-id (car block-list)) #t)
        (#t (is-block-in-list? block-id (cdr block-list)))))

(define (is-block-in-collection? block-id collection-name)
  (is-block-in-list? block-id (get-collection collection-name)))

(define (transfer-collection! block-id old-collection new-collection)
  (if (is-block-in-collection? block-id old-collection)
      (begin
          (delete-block-from-collection! block-id old-collection)
          (prepend-block-to-collection! block-id new-collection)
          #t)
      #f))
