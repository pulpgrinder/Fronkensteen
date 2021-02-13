(define (.quizselection_change evt)
  (let ((target (js-ref evt "currentTarget")))
    (let ((value (% target "attr" "value")))
      (if (eqv? value "true")
          (alert (get-quiz-correct-response))
          (alert (get-quiz-incorrect-response))))))
