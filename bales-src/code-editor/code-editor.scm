; Internal code editor.
; Copyright 2019, 2020 by Anthony W. Hursh.
; MIT License.

(define editor-hash (make-eq-hashtable))

(define fronkensteen-is-local-editor #t)

(define fronkensteen-active-editor-file #f)

(define fronkensteen-selected-file #f)

(define current-bale "app")

(define (is-system-dirty?) ; Redefinition to check for unsaved editors.
  (cond ((eqv? system-dirty? #t) #t)
        ((eqv? (has-dirty-editors?) #t) #t)
        (#t #f)))


(define (prompt-to-save-user-data) ; Redefinition to handle unsaved editors.
  (prompt-save-for-dirty-editors))

(define (code-editor-add-filename-to-dropdown filename)
    (% "#fronkensteen-editor-current-filename" "append" (option (<< "!value='" filename "'") (file-basename filename)))
    (% "#fronkensteen-editor-current-filename" "off" "change")
    (% "#fronkensteen-editor-current-filename" "on" "change" (lambda (ev) (editor-dropdown-chosen)))
    (% "#fronkensteen-editor-current-filename" "val" filename))


(define (code-editor-remove-filename-from-dropdown filename)
    (% "#fronkensteen-editor-current-filename option" "remove" (<< "[value='" filename "']")))


(define (code-editor-add-filename-to-file-list filename)
  (let ((editorid  (code-editor-id-for-filename filename)))
    (% "#fronkensteen-editor-user-files" "append"
        (dv (<< "#" editorid "-available-item.fronkensteen-file-available-item!filename='" filename "'") (file-basename filename)))))

(define (code-editor-remove-filename-from-file-list filename)
  (% "#fronkensteen-editor-user-files div" "remove" (<< "[filename='" filename "']")))

(define (code-editor-element-for-filename filename)
  (<< "#" (code-editor-id-for-filename filename) "-text-area"))

(define (code-editor-id-for-filename filename)
  (let ((existing-id (hashtable-ref editor-hash filename #f)))
    (if (eqv? existing-id #f)
      (let ((new-editor-id (<< "code-editor-" (no-dash-uuid))))
        (hashtable-set! editor-hash filename new-editor-id)
        new-editor-id)
      existing-id)))


(define (display-file-editor filename)
  (if (is-text-file? filename)
      (display-text-file-editor filename)
       #f))

(define (is-text-file? filename)
  (let ((extension (file-extension filename)))
    (if (eqv? (indexOf (mime-type filename) "text") 0)
      #t
      (cond ((eqv? extension "scm") #t)
        ((eqv? extension "md") #t)
        ((eqv? extension "markdown") #t)
        ((eqv? extension "txt") #t)
        ((eqv? extension "text") #t)
        ((eqv? extension "js") #t)
        ((eqv? extension "css") #t)
        ((eqv? extension "xml") #t)
        ((eqv? extension "html") #t)
        (#t #f)))))



(define (display-text-file-editor filename)
  (console-log (<< "displaying editor for " filename))
  (let ((editor-name (code-editor-element-for-filename filename)))
    (if (element-exists? editor-name)
      (set-active-editor filename editor-name)
      (create-text-file-editor filename editor-name))
      (show-editor-buttons (file-extension filename))))


(define (show-editor-buttons extension)
    (% ".fronkensteen-editor-mode-button" "hide")
    (% ".fronkensteen-editor-basic-button" "show")
    (cond ((eqv? extension "scm") (% ".fronkensteen-editor-scheme-button" "show"))
          ((eqv? extension "js") (% ".fronkensteen-editor-javascript-button" "show"))))

(define (set-active-editor filename editor-name)
    (console-log (<< "Setting active editor, " filename "," editor-name))
    (cm-editor-hide-all)
    (cm-editor-show editor-name)
    (set! fronkensteen-active-editor-file filename)
    (% ".fronkensteen-file-available-item" "removeClass" "active")
    (let ((editor-id (code-editor-id-for-filename filename)))
      (% (<<  "#" editor-id "-available-item") "addClass" "active")
      (% "#fronkensteen-editor-current-filename" "val" filename)))


(define (create-text-file-editor filename editor-name)
  (console-log (<< "Creating text editor, " filename "," editor-name))
  (% "#fronkensteen-editor-workspace" "append"
  (textarea (<<  editor-name ".fronkensteen-code-editor-text-area!filename='" filename "'") ""))
    (init-cm-editor! editor-name (editor-mode-for-file-extension (file-extension filename)))
    (set-cm-editor-text! editor-name (read-editor-text-file filename))
    (set-cm-editor-clean! editor-name)
    (code-editor-add-filename-to-dropdown filename)
    (set-active-editor filename editor-name)
    (% "#fronkensteen-editor-save-button" "show")
    (% "#fronkensteen-editor-close-button" "show"))

 (define (editor-dropdown-chosen)
      (display-file-editor (% "#fronkensteen-editor-current-filename" "val")))

 (define (show-code-editor) ; Displays the code editor UI.
     (if (element-exists? "#fronkensteen-code-editor")
      (begin
        (build-file-display)
        (push-ui-panel)
        (show-ui-panel "#fronkensteen-code-editor"))
      (console-log "Code editor not inited.")))


(define (build-file-display)
  (build-tree-view (get-file-tree) "#fronkensteen-editor-current-file-list" tree-file-clicked)
  (% ".treeitem" "on" "focus" (lambda (ev)
        (fronkensteen-editor-filename-focused ev)
  ))
  (% ".treeitem" "on" "blur" (lambda (ev)
      (fronkensteen-editor-file-renamed ev))))

 (define (hide-code-editor)
     (pop-ui-panel))


(define (fronkensteen-editor-filename-focused evt)
 (let ((target (js-ref evt "currentTarget")))
      (let ((text (% target "text")))
          (% target "attr" "original-text" text))))

(define (fronkensteen-editor-rename-file target)
    (let ((fullpath (% target "attr" "relative-path"))
          (new-name (% target "text")))
      (let ((base-path (file-path fullpath))
            (old-name (file-basename fullpath)))
            (begin
              (fronkensteen-close-editor-file fullpath)
              (console-log (<< "Renaming " old-name " to " new-name))
              (file-rename (<< base-path "/" old-name) (<< base-path "/" new-name))
              (% target "attr" "relative-path" (<< base-path "/" new-name))

            )

    )))



(define (fronkensteen-editor-rename-folder target)
  (let ((fullpath (% target "attr" "relative-path"))
        (new-name (% target "text")))
    (let ((base-path (file-path fullpath))
          (old-name (file-basename fullpath)))
        (let ((new-path
            (if (eqv? base-path "")
              new-name
              (<< base-path "/" new-name))
          ))
          (begin
            (console-log (<< "Renaming " fullpath " to " new-path))
            (folder-rename fullpath new-path)
          )

  ))))



(define (fronkensteen-editor-file-renamed evt)
 (let ((target (js-ref evt "currentTarget")))
    (let ((text (% target "text"))
          (text-html (% target "html"))
          (original-text (% target "attr" "original-text")))
          (console-log (<< "new text is " text))
        (if (eqv? text-html original-text)
            (console-log "unchanged")
            (begin
              (let ((cleaned-text  (str-replace-re text "[\\s\\n]" "gm" "")))
                (% target "html" cleaned-text)
                (if (% target "hasClass" "treefolder")
                    (fronkensteen-editor-rename-folder target)
                    (fronkensteen-editor-rename-file target))))))))


(define (fronkensteen-editor-delete-file-button_click)
  (if (eqv? fronkensteen-selected-file #f)
      (begin
        (alert "No file selected.")
        #f)
    (begin
      (if (confirm (<< "Delete " fronkensteen-selected-file ": are you sure?"))
      (begin
        (delete-internal-file fronkensteen-selected-file)
        (console-log "internal file deleted")
        (fronkensteen-close-editor-file fronkensteen-selected-file)
        (console-log "File closed")
        (set! fronkensteen-selected-file #f)
        (build-file-display)
        (console-log "load available editor files completed"))
        #f
      ))))



(define (close-open-bale-files open-files)
    (if (eqv? open-files '())
      #t
      (begin
        (close-if-open (car open-files))
        (close-open-bale-files (cdr open-files)))))

(define (close-if-open filename)
  (let ((editorname (code-editor-element-for-filename filename)))
    (if (element-exists? editorname)
      (fronkensteen-close-editor-file filename)
          #f)))

(define (fronkensteen-editor-hide-button_click)
    (hide-code-editor))

(define (fronkensteen-editor-save-button_click)
  (if (eqv? fronkensteen-active-editor-file #f)
      #f
      (begin
      (save-editor-file fronkensteen-active-editor-file))))

(define (fronkensteen-editor-scheme-eval-button_click)
  (if (eqv? fronkensteen-active-editor-file #f)
    #f
      (let ((active-editor-element (code-editor-element-for-filename fronkensteen-active-editor-file)))
        (cm-editor-eval-selection-or-expr-before-cursor! active-editor-element))
))

(define (fronkensteen-editor-javascript-eval-button_click)
  (if (eqv? fronkensteen-active-editor-file #f)
    #f
      (let ((active-editor-element (code-editor-element-for-filename fronkensteen-active-editor-file)))
        (cm-editor-eval-js-selection! active-editor-element))
))

(define (fronkensteen-editor-reload-world-button_click)
    (if (or (has-dirty-editors?) (eqv? system-dirty? #t))
          (begin
              (prompt-save-for-dirty-editors)
              (if (confirm "Workspace has changed. Save it?")
                (begin
                  (alert "Saving workspace. Please click reload again after saving.")
                  (save-the-static-world))
                  (reload-world)))
      (reload-world)
    ))

(define (fronkensteen-editor-save-world-button_click)
  (prompt-save-for-dirty-editors)
  (save-the-static-world))

(define (fronkensteen-editor-scheme-doc-button_click)
  (if (eqv? fronkensteen-active-editor-file #f)
    #f
      (let ((active-editor-id (code-editor-element-for-filename fronkensteen-active-editor-file)))
        (let ((procedure-name (cm-editor-get-procedure-at-cursor active-editor-id)))
          (push-ui-panel)
          (show-ui-panel "#fronkensteen-documentation")
          (if (eqv? procedure-name #f)
            (show-procedure-documentation "")
            (show-procedure-documentation procedure-name))))))

(define (fronkensteen-editor-scheme-run-button_click)
  (if (eqv? fronkensteen-active-editor-file #f)
    #f
      (let ((active-editor-element (code-editor-element-for-filename fronkensteen-active-editor-file)))
      (cm-eval-editor-buffer! active-editor-element)
)))


(define (save-editor-file filename)
    (let ((editor-name (code-editor-element-for-filename filename)))
      (write-editor-text-file filename (get-cm-editor-text editor-name))
      (set-cm-editor-clean! editor-name)
      (console-log (<< "clean status for " editor-name ": " (format "~s" (is-cm-editor-clean? editor-name))))
    ))


(define (fronkensteen-close-editor-file filename)
  (let ((editor-name (code-editor-element-for-filename filename)))
    (if (element-exists? editor-name)
    (begin
      (destroy-cm-editor! editor-name)
      (% editor-name "remove")
      (hashtable-delete! editor-hash filename)
      (code-editor-remove-filename-from-dropdown filename)
      (if (> (vector-length (elems "#fronkensteen-editor-current-filename option")) 0)
            (begin
            (set-selected-index! "#fronkensteen-editor-current-filename" 0)
            (set! fronkensteen-active-editor-file (% "#fronkensteen-editor-current-filename" "val") )
            (editor-dropdown-chosen))
            (begin
              (% "#fronkensteen-editor-save-button" "hide")
              (% "#fronkensteen-editor-close-button" "hide")
              (set! fronkensteen-active-editor-file #f)))
      #t)
    #f)))

(define (fronkensteen-editor-bale-manager-button_click)
  (show-bale-manager))


(define (fronkensteen-editor-new-file-button_click)
  (if (eqv? current-bale #f)
    (begin
      (alert "Please select a folder for the new file.")
      #f)
    (begin
        (let ((base-name (prompt "name for new file?")))
          (if (eqv? base-name "")
            #f
            (let ((new-file-path (<< current-bale "/" base-name)))
              (if (file-exists? new-file-path)
                (begin
                  (alert (<< new-file-path ": file already exists."))
                  #t)
                (begin
                  (fronkensteen-editor-create-and-open-file current-bale new-file-path)
                  #t
                  )
                  )))))))



(define (fronkensteen-editor-create-and-open-file balename filename)
    (write-internal-text-file filename "")
    (add-filename-to-bale filename balename)
    (build-file-display)
    (display-file-editor filename))


(define (fronkensteen-editor-close-button_click)
  (if (eqv? fronkensteen-active-editor-file #f)
    #f
      (begin
        (check-abandon fronkensteen-active-editor-file)
        (fronkensteen-close-editor-file fronkensteen-active-editor-file)
        (% ".fronkensteen-file-available-item" "removeClass" "active"))))


(define (editor-mode-for-file-extension extension)
  (cond ((eqv? extension "scm") "scheme")
        ((eqv? extension "md") "markdown")
        ((eqv? extension "markdown") "markdown")
        ((eqv? extension "txt") "text/plain")
        ((eqv? extension "text") "text/plain")
        ((eqv? extension "js") "javascript")
        ((eqv? extension "css") "css")
        ((eqv? extension "xml") "xml")
        ((eqv? extension "html") "htmlmixed")
        (#t #f)))


(define (check-abandon filename)
  (if (is-cm-editor-clean? (code-editor-element-for-filename filename))
      #t
      (check-editor-save filename)))



(define (check-editor-save filename)
  (if (is-cm-editor-clean? (code-editor-element-for-filename filename))
      #t
      (if (confirm (<< filename ": file has unsaved changes. Save it?"))
        (begin
          (save-editor-file filename)
          #t)
       #t
      )))


(define (has-dirty-editors?)
  (let ((open-editor-list (vector->list (get-id-vector ".fronkensteen-code-editor-text-area" #t))))
    (any-dirty-editors? open-editor-list)))

(define (is-dirty-editor? editor-element)
    (not (is-cm-editor-clean? (code-editor-element-for-filename (% (<< "#" editor-element) "attr" "filename")))))

(define (any-dirty-editors? editor-list)
    (cond ((eqv? editor-list '()) #f)
          ((is-dirty-editor? (car editor-list)) #t)
          (#t (any-dirty-editors? (cdr editor-list)))))


(define (prompt-save-for-dirty-editors) ; checks if any editors have unsaved changes, if so prompts to save them.
    (let ((open-editor-list (vector->list (get-id-vector ".fronkensteen-code-editor-text-area" #t))))
        (process-dirty-editors open-editor-list)))

(define (process-dirty-editors editor-list)
    (if (eqv? editor-list '())
        #t
      (begin
          (check-editor-save (% (<< "#" (car editor-list)) "attr" "filename"))
          (process-dirty-editors (cdr editor-list)))))

(define (read-editor-text-file filename)
  (read-internal-text-file filename))

(define (write-editor-text-file filename text)
  (write-internal-text-file filename text))


; Toggle to internal code editor on triple-click.

(define throttle #f)

(% "#fronkensteen-wrapper" "on" "click" (lambda (ev)
    (let ((click-count (js-ref ev "detail")))
        (if (and (eq? click-count 3) (not throttle))
            (begin
              (show-code-editor)
              (set! throttle #t)
              (timer (lambda ()
                (set! throttle #f))
                1)
              #t)
            #t))))


(wire-ui)
