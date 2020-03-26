(define (fronkensteen-bale-controls)
    (dv (<<
      (dv "#fronkensteen-bale-controls"
          (<<
          (span "Bale manager:&nbsp;")
          (button "#fronkensteen-bale-manager-done" "Done")
          (button "#fronkensteen-bale-manager-add-bale" "Import Bale")
          (button "#fronkensteen-bale-manager-export-bale" "Export Bale")
          (button "#fronkensteen-bale-manager-delete-bale" "Delete Bale")))
      (dv (i "Drag bales into desired load order. Order changes, additions, and deletions will not take effect until the workspace has been saved and reloaded.")))))


(define (fronkensteen-bale-list)
    (ul "#fronkensteen-editor-bale-list" "")
  )




(define (init-bale-manager)
  (add-ui-panel "#fronkensteen-bale-manager"
    (<<
      (fronkensteen-bale-controls)
      (fronkensteen-bale-list)))
 (sortable "#fronkensteen-editor-bale-list"))
