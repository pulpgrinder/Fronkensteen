
(define (iconic-icon . args) ; Generate an Iconic icon. (iconic-icon seml icon-name) applies the given seml to the image, and also adds the .icon class. (iconic-icon icon-name) applies just the .icon class.
     (let ((nargs (length args)))
        (cond ((eq? nargs 2)
              (iconic-icon-gen (car args) (cadr args)))
              ((eq? nargs 1)
                 (iconic-icon-gen "" (car args)))
              (#t "Error: wrong number of arguments for iconic-icon"))))


  (define (iconic-icon-gen seml icon-name) ; generate an Iconic icon with the given name
    (img (<< seml ".icon!src='" (read-internal-data-url (<< "open-iconic/"  icon-name  ".svg")) "'!alt='" icon-name "'")))
