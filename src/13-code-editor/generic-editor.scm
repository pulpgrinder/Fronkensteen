(define current-generic-editor #f)

(define (create-generic-editor id title resource-path load-proc save-proc close-proc)
  (if (element-exists? id)
      (show-generic-editor id)
      (begin
        (add-editor-info id title resource-path load-proc save-proc close-proc)
        (create-generic-editor-elements id))))


(define (show-generic-editor id)
    (show-bottom-toolbar "#fronkensteen-editor-control-bar")
    (% ".editor-search" "show")
    (set! current-generic-editor id)
    (% ".fronkensteen-page-wrapper" "hide")
    (% (<< id "-wrapper") "show")
    (% "#wiki-page-title" "hide")
    (% "#wiki-editor-page-title" "show")
    (% "#wiki-editor-page-title" "val" (get-generic-editor-title id))
    (timer (lambda ()
  (% id "focus")) 0.5)
  (cm-editor-show id)
  (add-page-history title "editor" id)
  )

(define (create-generic-editor-elements id)
    (let ((resource-path (get-generic-editor-resource-path id)))
      (if (eqv? resource-path #f)
        (console-error (<< "No resource-path for editor " id))
        (let ((extension (file-extension resource-path)))
          (if (is-text-file? extension)
          (begin
              (% "#fronkensteen-content" "append" (dv (<< id "-wrapper" ".fronkensteen-page-wrapper!tabindex='-1'") (dv (<< id "-body.wiki-editor.wiki-content")
            (textarea (<< id ".code-editor!rows='25'!cols='80'!autocorrect='off'!autocapitalize='off'!spellcheck='false'") "") )))
            (activate-generic-text-editor id))
            (alert "Sorry, no editor for this file type at this time. Contributions welcome!")))))
            (wire-ui)
            )


(define (activate-generic-text-editor id)
  (let ((extension (file-extension (get-generic-editor-resource-path id))))
    (cond ((eqv? extension "fmk")
      (init-cm-editor! id "fronkenmark"))
        ((eqv? extension "scm")
        (init-cm-editor! id "scheme"))
        ((eqv? extension "js")
        (init-cm-editor! id "javascript"))
        ((eqv? extension "md")
        (init-cm-editor! id "markdown"))
        (#t
        (init-cm-editor! id "text"))))
  (cm-editor-set-text id ((get-generic-editor-load-proc id) id))
  (cm-editor-set-selection id 0 0);
  (show-generic-editor id))

(define (save-generic-editor id)
    ((get-generic-editor-save-proc id) id))

(define (close-generic-editor id)
    (let ((wrapper-name (<< id "-wrapper")))
      (if (element-exists? wrapper-name)
        (begin
          (destroy-cm-editor! id)
          (% wrapper-name "remove")
          (hide-editor-popovers available-popovers)
          (set! fronkensteen-page-history-list (cdr fronkensteen-page-history-list))
          ((get-generic-editor-close-proc id) id)
          (remove-generic-editor-hash id)))))
