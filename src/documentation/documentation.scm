; Generate docstring for an HTML tag.
(define (gen-html-doc tagname)
  (<< tagname "\n"
  "(" tagname " value)\n"
  "(" tagname " seml-spec value)\n\n"
  "Returns an HTML " tagname " tag containing the specified value. Uses the given SEML spec if provided.\n\n"

  "Examples:\n"
  "(" tagname " \"This is the text\") => <" tagname ">This is the text</" tagname ">\n"
  "(" tagname "\"#my" tagname ".myclass\" \"This is the text.\") => <" tagname " id=\"my" tagname " class=\"myclass\">This is the text.</" tagname ">\n\n\n"))
