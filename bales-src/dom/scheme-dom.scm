; schemedom.scm
; Copyright 2018-2019 by Anthony W. Hursh
; MIT License

; Error handling

(define (html-error msg arg) ; generate an error message to the console.
  (let ((fullmsg (string-append msg ":" arg)))
    (console-log fullmsg)
    fullmsg))

(define (gen-id base) ; Generate ids for various types of HTML elements.
   (let ((index -1))
     (lambda ()
       (set! index (+ 1 index))
       (string-append "id___" base (number->string index)))))

(define gen-css-id (gen-id "css")) ; Generate a unique id for a CSS style HTML element.

(define gen-js-id (gen-id "js")) ; Generate a unique id for a JavaScript HTML element.

(define gen-html-id (gen-id "html")) ; Generate a unique id for a root HTML element.

(define gen-element-id (gen-id "element")) ; ; Generate a unique id for a miscellaneous HTML element.



(define (seml-element tag attrs arg) ; Helper procedure for parse-seml. Not intended to be called directly.
  (if (eqv? attrs "")
    (<< "<" tag ">" arg "</" tag ">")
  (<< "<" tag " "  attrs ">" arg "</" tag ">")))

(define (seml-self-closing-element tag attrs) ; Helper procedure for parse-seml. Not intended to be called directly.
  (if (eqv? attrs "")
    (<< "<" tag " />")
    (<< "<" tag " " attrs " />")))

(define (seml . args ) ; Parse a SEML string into attributes.
    (let ((nargs (length args)))
        (cond ((eqv? nargs 3)
                (seml-element (car args) (parse-seml (cadr args)) (caddr args)))
              ((eqv? nargs 2)
                (seml-element (car args) "" (cadr args)))
              (#t (seml-element (car args) "" "")))))

(define (seml-self-closing . args ) ; Parse a SEML string into attributes. Same as seml, but for self-closing tags like <img />.
    (let ((nargs (length args)))
        (cond ((eqv? nargs 2)
                (seml-self-closing-element (car args) (parse-seml (cadr args))))
              (#t (seml-self-closing-element (car args) "")))))

; HTML DOCTYPES.

(define html-4.01-strict "HTML PUBLIC \"-//W3C//DTD HTML 4.01//EN\"\n\"http://www.w3.org/TR/html4/strict.dtd\"") ; HTML 4.01 strict DOCTYPE
(define html-4.01-transitional "HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\"\n\"http://www.w3.org/TR/html4/loose.dtd\"") ; HTML 4.01 transitional DOCTYPE
(define html-4.01-frameset "HTML PUBLIC \"-//W3C//DTD HTML 4.01 Frameset//EN\"\n\"http://www.w3.org/TR/html4/frameset.dtd\"") ; HTML 4.01 frameset DOCTYPE
(define xhtml-1.0-strict "HTML PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\"\n\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\"") ; XHTML 1.0 strict DOCTYPE
(define xhtml-1.0-transitional "HTML PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\"") ; XHTML 1.0 transitional DOCTYPE
(define xhtml-1.0-frameset "HTML PUBLIC \"-//W3C//DTD XHTML 1.0 Frameset//EN\"\n\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd\"") ; XHTML 1.0 frameset DOCTYPE
(define xhtml-1.1-dtd "HTML PUBLIC \"-//W3C//DTD XHTML 1.1//EN\"\n\"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd\"") ; XHTML 1.1 dtd DOCTYPE
(define xhtml-basic-1.0 "HTML PUBLIC \"-//W3C//DTD XHTML Basic 1.1//EN\"\n\"http://www.w3.org/TR/xhtml-basic/xhtml-basic11.dtd\"") ; XHTML Basic 1.1 DOCTYPE
(define html5 "HTML") ; HTML5 DOCTYPE



; standard tags

(define (!DOCTYPE . args) ; HTML DOCTYPE. With no args, defaults to "HTML" (i.e., HTML5). Otherwise uses the DOCTYPE specified in the first argument.
    (if (eqv? (length args) 0)
        "<!DOCTYPE HTML>\n"
      (string-append "<!DOCTYPE " (car args) ">")))

(define (DOCTYPE . args) ; Same as !DOCTYPE.
  (apply !DOCTYPE args))

(define (a . args) ; HTML anchor tag.
  (apply seml (cons "a" args)))

(define (abbr . args) ; HTML abbr tag.
  (apply seml (cons "abbr" args)))

(define (acronym . args) ; HTML acronym tag.
  (apply seml (cons "acronym" args)))

(define (address . args) ; HTML address tag.
  (apply seml (cons "address" args)))

(define (applet . args) ; HTML applet tag.
  (apply seml (cons "applet" args)))

(define (area . args) ; HTML area tag.
  (apply seml-self-closing (cons "area" args)))

(define (article . args) ; HTML article tag.
  (apply seml (cons "article" args)))

(define (aside . args) ; HTML aside tag.
  (apply seml (cons "aside" args)))

(define (audio . args) ; HTML audio tag.
  (apply seml (cons "audio" args)))

(define (b . args) ; HTML b tag.
  (apply seml (cons "b" args)))

(define (base . args) ; HTML base tag.
  (apply seml-self-closing (cons "base" args)))

(define (bdi . args) ; HTML bdi tag.
  (apply seml (cons "bdi" args)))

(define (bdo . args) ; HTML bdo tag.
  (apply seml (cons "bdo" args)))

(define (blockquote . args) ; HTML blockquote tag.
  (apply seml (cons "blockquote" args)))

(define (body . args) ; HTML body tag.
  (apply seml (cons "body" args)))

(define (br . args) ; HTML br tag.
  (apply  seml-self-closing (cons "br" args)))

(define (button . args) ; HTML button tag.
  (apply seml (cons "button" args)))

(define (canvas . args) ; HTML canvas tag.
  (apply seml (cons "canvas" args)))

(define (caption . args) ; HTML caption tag.
  (apply seml (cons "caption" args)))

(define (cite . args) ; HTML cite tag.
  (apply seml (cons "cite" args)))

(define (code . args) ; HTML code tag.
  (apply seml (cons "code" args)))

(define (col . args) ; HTML col tag.
  (apply  seml-self-closing (cons "col" args)))

(define (colgroup . args) ; ; HTML colgroup tag.
  (apply seml (cons "colgroup" args)))

(define (command . args) ; HTML command tag.
  (apply  seml-self-closing (cons "command" args)))

(define (datalist . args) ; HTML datalist tag.
  (apply seml (cons "datalist" args)))

(define (dd . args) ; HTML dd tag.
  (apply seml (cons "dd" args)))

(define (del . args) ; HTML del tag.
  (apply seml (cons "del" args)))

(define (details . args) ; HTML details tag.
  (apply seml (cons "details" args)))

(define (dfn . args) ; HTML dfn tag.
  (apply seml (cons "dfn" args)))


(define (dv . args) ; HTML div tag (note that BiwaScheme uses "div" for something else)
  (apply seml (cons "div" args)))


(define (dl . args) ; HTML dl tag.
  (apply seml (cons "dl" args)))

(define (dt . args) ; HTML dt tag.
  (apply seml (cons "dt" args)))

(define (em . args) ; HTML em tag.
  (apply seml (cons "em" args)))

(define (embed . args) ; HTML embed tag.
  (apply seml-self-closing (cons "embed" args)))

(define (fieldset . args) ; HTML fieldset tag.
  (apply seml (cons "fieldset" args)))

(define (figcaption . args) ; HTML figcaption tag.
  (apply seml (cons "figcaption" args)))

(define (figure . args) ; HTML figure tag.
  (apply seml (cons "figure" args)))

(define (footer . args) ; HTML footer tag.
  (apply seml (cons "footer" args)))

(define (form . args) ; HTML form tag.
  (apply seml (cons "form" args)))

(define (h1 . args) ; HTML h1 tag.
  (apply seml (cons "h1" args)))

(define (h2 . args) ; HTML h2 tag.
  (apply seml (cons "h2" args)))

(define (h3 . args) ; HTML h3 tag.
  (apply seml (cons "h3" args)))

(define (h4 . args) ; HTML h4 tag.
  (apply seml (cons "h4" args)))

(define (h5 . args) ; HTML h5 tag.
  (apply seml (cons "h5" args)))

(define (h6 . args) ; HTML h6 tag.
  (apply seml (cons "h6" args)))

(define (head . args) ; HTML head tag.
  (apply seml (cons "head" args)))

(define (header . args) ; HTML header tag.
  (apply seml (cons "header" args)))

(define (hgroup . args) ; HTML hgroup tag.
  (apply seml (cons "hgroup" args)))

(define (hr . args) ; HTML hr tag.
  (apply  seml-self-closing (cons "hr" args)))

(define (html . args) ; HTML html tag.
  (apply seml (cons "html" args)))

(define (htmlmap . args) ; HTML map tag. Called htmlmap because map conflicts with built-in Scheme map procedure.
  (apply seml (cons "map" args)))

(define (i . args) ; ; HTML i tag.
  (apply seml (cons "i" args)))

(define (iframe . args) ; HTML iframe tag.
  (apply seml (cons "iframe" args)))

(define (img . args) ; HTML img tag.
  (apply seml-self-closing (cons "img" args)))

(define (input . args) ; HTML ins tag.
  (apply  seml-self-closing (cons "input" args)))

(define (ins . args) ; HTML ins tag.
  (apply seml (cons "ins" args)))

(define (kbd . args) ; HTML kbd tag.
  (apply seml (cons "kbd" args)))

(define (keygen . args) ; HTML keygen tag.
  (apply  seml-self-closing (cons "keygen" args)))

(define (label . args) ; HTML label tag.
  (apply seml (cons "label" args)))

(define (legend . args) ; HTML legend tag.
  (apply seml (cons "legend" args)))

(define (li . args) ; HTML li tag.
  (apply seml (cons "li" args)))

(define (link . args) ; HTML link tag.
  (apply  seml-self-closing (cons "link" args)))


(define (mark . args) ; HTML mark tag.
  (apply seml (cons "mark" args)))

(define (menu . args) ; HTML menu tag.
  (apply seml (cons "menu" args)))

(define (meta . args) ; HTML meta tag.
  (apply  seml-self-closing (cons "meta" args)))

(define (meter . args) ; HTML meter tag.
  (apply seml (cons "meter" args)))

(define (nav . args) ; HTML nav tag.
  (apply seml (cons "nav" args)))


(define (noscript . args) ; HTML noscript tag.
  (apply seml (cons "noscript" args)))

(define (object . args) ; HTML object tag.
  (apply seml (cons "object" args)))

(define (ol . args) ; HTML ol tag.
  (apply seml (cons "ol" args)))

(define (optgroup . args) ; HTML optgroup tag.
  (apply seml (cons "optgroup" args)))

(define (option . args) ; HTML option tag.
  (apply seml (cons "option" args)))

(define (output . args) ; HTML output tag.
  (apply seml (cons "output" args)))

(define (p . args) ; HTML p tag.
  (apply seml (cons "p" args)))

(define (param . args) ; HTML param tag.
  (apply  seml-self-closing (cons "param" args)))

(define (pre . args) ; HTML pre tag.
  (apply seml (cons "pre" args)))

(define (progress . args) ; HTML progress tag.
  (apply seml (cons "progress" args)))

(define (q . args) ; HTML q tag.
  (apply seml (cons "q" args)))

(define (rp . args) ; HTML rp tag.
  (apply seml (cons "rp" args)))

(define (rt . args) ; HTML rt tag.
  (apply seml (cons "rt" args)))

(define (ruby . args) ; HTML ruby tag.
  (apply seml (cons "ruby" args)))


(define (samp . args) ; HTML samp tag.
  (apply seml (cons "samp" args)))

(define (script . args) ; HTML script tag.
  (apply seml (cons "script" args)))

(define (section . args) ; HTML section tag.
  (apply seml (cons "section" args)))

(define (select . args) ; HTML select tag.
  (apply seml (cons "select" args)))

(define (small . args) ; HTML small tag.
  (apply seml (cons "small" args)))

(define (source . args) ; HTML source tag.
  (apply  seml-self-closing (cons "source" args)))

(define (span . args) ; HTML span tag.
  (apply seml (cons "span" args)))

(define (strong . args) ; HTML strong tag.
  (apply seml (cons "strong" args)))

(define (style . args) ; HTML style tag.
  (apply seml (cons "style" args)))

(define (sub . args) ; HTML sub tag.
  (apply seml (cons "sub" args)))

(define (summary . args) ; HTML summary tag.
  (apply seml (cons "summary" args)))

(define (sup . args) ; HTML sup tag.
  (apply seml (cons "sup" args)))

(define (svg . args) ; HTML svg tag.
  (apply seml (cons "svg" args)))

(define (table . args) ; HTML table tag.
  (apply seml (cons "table" args)))

(define (tbody . args) ; HTML tbody tag.
  (apply seml (cons "tbody" args)))

(define (td . args) ; HTML td tag.
  (apply seml (cons "td" args)))

(define (textarea . args) ; HTML textarea tag.
  (apply seml (cons "textarea" args)))

(define (tfoot . args) ; HTML tfoot tag.
  (apply seml (cons "tfoot" args)))

(define (th . args) ; HTML th tag.
  (apply seml (cons "th" args)))

(define (thead . args)
  (apply seml (cons "thead" args)))

(define (time . args) ; HTML time tag.
  (apply seml (cons "time" args)))

(define (title . args) ; HTML title tag.
  (apply seml (cons "title" args)))

(define (tr . args) ; HTML tr tag.
  (apply seml (cons "tr" args)))

(define (track . args) ; HTML track tag.
  (apply seml-self-closing (cons "track" args)))

(define (u . args) ; HTML u tag.
  (apply seml (cons "u" args)))

(define (ul . args) ; HTML ul tag.
  (apply seml (cons "ul" args)))

(define (var . args) ; HTML var tag.
  (apply seml (cons "var" args)))

(define (video . args) ; HTML video tag.
  (apply seml (cons "video" args)))

(define (wbr . args) ; HTML wbr tag.
  (apply  seml-self-closing (cons "wbr" args)))
