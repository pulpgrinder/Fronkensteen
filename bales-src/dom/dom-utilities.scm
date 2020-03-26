; DOM manipulation utilities.
; Copyright 2019 by Anthony W. Hursh.
; MIT License.

(define (randomize-select! select-id) ; jQuery. Randomizes the chosen option of the HTML select element specified by select-id.
    (let ((select-length (jq-length (% (select-id " > option")))))
      (% hashed-id "prop" "selectedIndex" (random-integer select-length))))


(define (populate-select id items) ; Populate the given HTML select element with options generated from a list of items. The items can either be single strings, in which case the value and the displayed text for the item will be the string, or lists of value/caption pairs, in which case the value of the option will be the first element of the list and the displayed text the second.
  (% id "html" (generate-select-items-rec items)))


(define (generate-select-items-rec items) ; helpher function for populate-select. Not intended to be called directly.
  (cond ((eqv? items '()) "")
        ((list? (car items)) (<< "<option value='" (caar items) "'>" (cadar items) "</option>" (generate-select-items-rec (cdr items))))
        (#t (<< "<option value='" (car items) "'>" (car items) "</option>" (generate-select-items-rec (cdr items))))))


(define (checkbox-checked? id) ; jQuery. Evaluates to true if the checkbox specified by id is checked.
  (% id "is" ":checked"))

(define (set-checkbox-checked! id state) ; jQuery. Sets the state of the  checkbox specified by id to the given state (#t -> checked, #f -> unchecked)
  (if (eq? state #t)
    (% id "prop" "checked" "checked")
    (% id "prop" "checked" "")))
