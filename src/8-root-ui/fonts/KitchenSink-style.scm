(install-css "kitchen-sink-font"
    (proc-css-list `(
        ("@font-face" (
          "font-family" "Kitchen-Sink"
          "font-display" "auto"
          "src" ,(string-append "url(" (read-internal-data-url "8-root-ui/fonts/KitchenSink.ttf") ") format(\"ttf\")")
          )))))
