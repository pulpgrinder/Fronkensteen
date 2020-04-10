
(define (fronkensteen-bale-manager-add-bale_click)
    (upload-file ".bale" #t bale_uploaded))

(define (bale_uploaded bale-name bale-data)
  (console-log (import-bale bale-name (decode-base-64-text bale-data)))
  (init-bale-list)
  (build-file-display))

(define (fronkensteen-bale-manager-done_click)
  (nav-go-back))


(define (fronkensteen-bale-manager-delete-bale_click)
  (if (eqv? current-bale #f)
    (console-log "No bale selected.")
  (let ((file-name-list (vector->list (get-internal-dir (<< current-bale "/") ))))
      (close-open-bale-files file-name-list)
      (remove-bale current-bale)
      (code-editor-remove-balename-from-bale-list current-bale)
      (init-bale-list)
      (build-file-display)
      (set! current-bale #f)
      )))

(define (fronkensteen-bale-manager-export-bale_click)
  (if (eqv? current-bale #f)
    (console-log "No bale selected.")
    (download-file  (<< current-bale ".bale") (get-bale-code current-bale) "text/json")))

(define (init-bale-list)
  (let ((bales (vector->list (get-bales))))
    (% "#fronkensteen-editor-bale-list" "html" "")
    (generate-bale-list bales)
    (set-bale-load-status bales)
    (% ".bale_selected_checkbox" "on" "change" (lambda (evt)
        (let ((target (js-ref evt "currentTarget")))
          (let ((balename (% target "attr" "balename")))
            (set-bale-loadable balename (checkbox-checked? (<< "#bale-checkbox-" balename)))
            )
    ))
      )))

(define (show-bale-manager)
  (init-bale-list)
  (show-ui-panel "#fronkensteen-bale-manager"))


(define (set-bale-load-status bales)
    (if (eqv? bales '())
      #t
      (let ((current-bale (car bales)))
          (let ((checkbox-id (<< "#bale-checkbox-" current-bale)))
            (set-checkbox-checked! checkbox-id (is-bale-loadable? current-bale))
            (set-bale-load-status (cdr bales))))))

(define (generate-bale-list bale-list)
    (if (eqv? bale-list '())
        #t
        (begin
          (code-editor-add-balename-to-bale-list (car bale-list))
          (generate-bale-list (cdr bale-list))
          )))

(define (code-editor-add-balename-to-bale-list balename)
    (% "#fronkensteen-editor-bale-list" "append"
        (li (<< "#" balename "-bale-item" ".fronkensteen-bale-item.noselect!balename='" balename  "'")
          (<< (input (<< "#bale-checkbox-" balename "!balename='" balename "'.bale_selected_checkbox!type='checkbox'" "")) balename))))




(define (code-editor-remove-balename-from-bale-list balename)
  (% "#fronkensteen-editor-current-file-list div" "remove" (<< "[relative-path='" balename "']"))
    )

(define (list-bales)
  (init-bale-list))

(define (fronkensteen-editor-bale-list_sorted)
  (let ((bale-elements (vector->list (elems ".fronkensteen-bale-item"))))
      (set-bale-manifest (list->vector (get-current-bale-order bale-elements)))
       (init-bale-list)
       ))

(define (get-current-bale-order bale-elements)
    (if (eqv? bale-elements '())
        '()
        (cons (% (car bale-elements) "attr" "balename") (get-current-bale-order (cdr bale-elements)))))


(define (fronkensteen-editor-bale-list_chosen index)
    (% ".fronkensteen-bale-item" "removeClass" "active")
    (let ((balenames (elems ".fronkensteen-bale-item")))
      (let ((bale-element (vector-ref balenames index)))
        (% bale-element "addClass" "active")
        (let ((balename (% bale-element "attr" "balename")))
          (console-log balename)
          (set! current-bale balename)
    ))))
