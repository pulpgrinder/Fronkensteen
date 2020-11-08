(install-css "kitchen-sink-font"
    (proc-css-list `(
        ("@font-face" (
          "font-family" "Kitchen-Sink"
          "font-display" "auto"
          "src" ,(<< "url(" (read-internal-data-url "1-root/fonts/KitchenSink.ttf") ") format(\"ttf\")")
          )))))
