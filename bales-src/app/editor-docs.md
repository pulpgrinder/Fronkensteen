; Copyright 2020 by Anthony W. Hursh. Distributed under the same MIT license as Fronkensteen as a whole.
# Editor Documentation

@@(fa-icon "s" "check")@@ exits the editor and returns you to whichever screen you were on before the editor was invoked.

@@(fa-icon "s" "archive")@@ exports the entire current workspace (including any changes you have made) to a new HTML file.

@@(fa-icon "s" "save")@@ saves the current file.

@@(fa-icon "s" "times-circle")@@ closes the current file without saving changes.

@@(fa-icon "s" "trash")@@ deletes the current file.

@@(fa-icon "s" "file-import")@@ imports a chosen file into the currently active bale. Note that imported Scheme, JavaScript, and CSS files are **not** automatically added to the `$CODE_LOADER` file.

@@(fa-icon "s" "file-export")@@ lets you export the current file to a file on your local disk.

@@(fa-icon "s" "plus")@@ creates a new file in the currently active bale.

@@(fa-icon "s" "running")@@ Evaluates the entire current file as Scheme code. Only active when a Scheme file is being edited.

@@(fa-icon "s" "walking")@@ Evaluates the preceding expression (Scheme) or the selected code code block (both Scheme and JavaScript) in the Scheme or JavaScript interpreters, respectively. Only active when a Scheme or JavaScript file is being edited.

@@(fa-icon "s" "book")@@ Opens the Scheme documentation system. In a Scheme file, the documentation will be searched for the procedure name preceding the cursor (if any) and, if found, the documentation for that procedure (if there is any... documentation is still thin on the ground right now) and the source code for it will be displayed. You can open the source code in the editor from the documentation screen, so it can be altered, saved, and executed interactively.

@@(fa-icon "s" "box")@@ Opens the Bale Manager. See the bale docs for information on this.
