(define (fronkensteen-bale-controls)
      (dv "#fronkensteen-bale-controls"
          (<<
            (dv (h4 "!style='text-align:center;'" "Bale Manager"))
            (dv
              (span ".fronkensteen-editor-button-group"
                (<<
                  (button "#fronkensteen-bale-manager-done.fronkensteen-editor-button" "Done")
                  (button "#fronkensteen-bale-manager-add-bale.fronkensteen-editor-button" "Import Bale")
                  (button "#fronkensteen-bale-manager-export-bale.fronkensteen-editor-button" "Export Bale")
                  (button "#fronkensteen-bale-manager-delete-bale.fronkensteen-editor-button" "Delete Bale"))))
                (dv (i "Click a bale to select it. Reorder bales by dragging them into the desired load order. Uncheck a bale to suppress code evaluation at load time. Changes will not take effect until the workspace has been saved and reloaded.")))))


(define (fronkensteen-bale-list)
    (dv "#fronkensteen-editor-bale-list-container"
    (ul "#fronkensteen-editor-bale-list.roundlist" "")
  ))

(define (fronkensteen-new-bale-ui)
  (dv (<<
      (h4 "!style='text-align:center;'" "Create a new bale")
      (dv
          (<<
            (span "Bale name:&nbsp;")
            (input "#fronkensteen-editor-new-bale-name!type='text'")))
     (dv
        (button "#fronkensteen-editor-create-bale" "Create")))))

(define (init-bale-manager)
  (add-ui-panel "#fronkensteen-bale-manager"
    (<<
      (fronkensteen-bale-controls)
      (fronkensteen-bale-list)
      (fronkensteen-new-bale-ui)
      ))
 (sortable "#fronkensteen-editor-bale-list"))
