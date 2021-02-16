(define p-red-active   "#651616")
(define p-red  "#7e1b1b")
(define p-orange-active  "#b87231")
(define p-orange   "#d68539")
(define p-yellow-active  "#9c9350")
(define p-yellow   "#c5ba65")
(define p-green-active  "#3c7437")
(define p-green   "#488b42")
(define p-cyan-active  "#5292a0")
(define p-cyan   "#579aa9")
(define p-blue-active  "#434292")
(define p-blue   "#5352b4")
(define p-violet-active  "#544972")
(define p-violet   "#695b8e")
(define p-magenta-active  "#87455f")
(define p-magenta  "#a05271")
(define p-success "rgb(40, 215, 82)")
(define p-success-active "rgb(34, 183, 70)")
(define p-error "rgb(198, 0, 0)")
(define p-error-active "rgb(172, 0, 0)")
(define p-warning "rgb(254, 135, 25)")
(define p-warning-active "rgb(228, 121, 23)")
(define p-secondary "rgb(82, 125, 176)")
(define p-secondary-active "rgb(70, 107, 150)")

(install-css "pure"
    (proc-css-list `(
      (".pcolor-red" (
        "background-color" ,p-red
        "color" "white"
        "border" ,(<< "1px solid " p-red)
        ))
      (".pbutton.pcolor-red:active" (
       "background-color" ,p-red-active
       "color" "white"
       "border" "1px solid white"
      ))
      (".pcolor-orange" (
        "background-color" ,p-orange
        "color" "white"
        "border" ,(<< "1px solid " p-orange)
        ))
      (".pbutton.pcolor-orange:active" (
       "background-color" ,p-orange-active
       "color" "white"
       "border" "1px solid white"
      ))
    (".pcolor-yellow" (
      "background-color" ,p-yellow
      "color" "white"
      "border" ,(<< "1px solid " p-yellow)
      ))
    (".pbutton.pcolor-yellow:active" (
     "background-color" ,p-yellow-active
     "color" "white"
     "border" "1px solid white"
    ))
    (".pcolor-green" (
      "background-color" ,p-green
      "color" "white"
      "border" ,(<< "1px solid " p-green)
      ))
    (".pbutton.pcolor-green:active" (
     "background-color" ,p-green-active
     "color" "white"
     "border" "1px solid white"
    ))
  (".pcolor-cyan" (
    "background-color" ,p-cyan
    "color" "white"
    "border" ,(<< "1px solid " p-cyan)
    ))
  (".pbutton.pcolor-cyan:active" (
   "background-color" ,p-cyan-active
   "color" "white"
   "border" "1px solid white"
  ))
    (".pcolor-blue" (
      "background-color" ,p-blue
      "color" "white"
      "border" ,(<< "1px solid " p-blue)
      ))
    (".pbutton.pcolor-blue:active" (
     "background-color" ,p-blue-active
     "color" "white"
     "border" "1px solid white"
    ))
    (".pcolor-violet" (
      "background-color" ,p-violet
      "color" "white"
      "border" ,(<< "1px solid " p-violet)
      ))
    (".pbutton.pcolor-violet:active" (
     "background-color" ,p-violet-active
     "color" "white"
     "border" "1px solid white"
    ))
    (".pcolor-magenta" (
      "background-color" ,p-magenta
      "color" "white"
      "border" ,(<< "1px solid " p-magenta)
      ))
    (".pbutton.pcolor-magenta:active" (
     "background-color" ,p-magenta-active
     "color" "white"
     "border" "1px solid white"
    ))

    (".pcolor-success" (
      "background" ,p-success
       "color" "white"
       "border" ,(<< "1px solid " p-success)
    ))
      (".pbutton.pcolor-success:active" (
        "background" ,p-success-active
         "color" "white"
         "border" "1px solid white"
      ))
    (".pcolor-error" (
      "background" ,p-error
       "color" "white"
       "border" ,(<< "1px solid " p-error)
    ))
    (".pbutton.pcolor-error:active" (
      "background" ,p-error-active
       "color" "white"
       "border" "1px solid white"
    ))
    (".pcolor-warning" (
      "background" ,p-warning
       "color" "white"
       "border" ,(<< "1px solid " p-warning)
    ))
    (".pbutton.pcolor-warning:active" (
      "background" ,p-warning-active
       "color" "white"
       "border" "1px solid white"
    ))
    (".pcolor-secondary" (
       "background" ,p-secondary
       "color" "white"
       "border" ,(<< "1px solid " p-secondary)
      ))
    (".pbutton.pcolor-secondary:active" (
      "background" ,p-secondary-active
       "color" "white"
       "border" "1px solid white"
      ))
    ("#fronkensteen-active-pages" (
      "max-width" "60em"
      "margin" "0 auto"
      "background-color" "#f5f5f0"

      ))
    (".ppage" (
      "position" "fixed"
      "top" "0"
      "bottom" "0"
      "left" "0"
      "right" "0"
      "height" "100%"
      "display" "grid"
      "grid-template-rows" "auto 1fr auto"
      "background-color" "#bbb"
      ))
    (".peditor" (
      "position" "fixed"
      "top" "0"
      "bottom" "0"
      "left" "0"
      "right" "0"
      "height" "100%"
      "display" "grid"
      "grid-template-rows" "auto 1fr"
      "background-color" "#bbb"
      ))
      (".ppage-no-footer" (
        "position" "fixed"
        "top" "0"
        "bottom" "0"
        "left" "0"
        "right" "0"
        "height" "100%"
        "display" "grid"
        "grid-template-rows" "auto 1fr"
        "background-color" "#bbb"
        ))
      (".ppage-no-header" (
        "position" "fixed"
        "top" "0"
        "bottom" "0"
        "left" "0"
        "right" "0"
        "height" "100%"
        "display" "grid"
        "grid-template-rows" "1fr auto"
        "background-color" "#bbb"
        ))
      (".ppage-blank" (
        "position" "fixed"
        "top" "0"
        "bottom" "0"
        "left" "0"
        "right" "0"
        "height" "100%"
        "display" "grid"
        "grid-template-rows" "auto"
        "background-color" "#bbb"
        ))
      (".ppage-content" (
        "position" "relative"
        "max-width" "60em"
        "width" "100%"
        "margin" "0 auto"
        "overflow" "auto"
        "background-color" "#f5f5f0"
        ))
    (".peditor-content" (
      "position" "relative"
      "max-width" "60em"
      "width" "100%"
      "margin" "0 auto"
      "overflow" "hidden"
      "background-color" "#f5f5f0"
      ))
    (".pure-bar" (
      "position" "relative"
      "max-width" "60em"
      "width" "100%"
      "padding-top" "0.125in"
      "padding-left" "0.25in"
      "padding-right" "0.25in"
      "padding-bottom" "0.125in"
      "margin" "0 auto"
      "box-sizing" "border-box"
      ))
    (".pure-title" (
      "text-align" "center"
      "padding-top" "0.25em"
      "padding-bottom" "0.25em"
      "text-overflow" "ellipsis"
      "overflow" "hidden"
      "white-space" "nowrap"
      ))
      (".pure-right-tools" (
        "text-align" "right"
        ))
     (".pure-text" (
       "padding" "2em"
       "color" "#000"
       "height" "100%"
       "overflow" "auto"
       "background-color" "#f5f5f0"
       "box-sizing" "border-box"
       ))
      (".pure-left-tools" (
        "text-align" "left"
        ))
     (".pnav-button" (
       "display" "inline-block"
       "margin-right" "0.75em"
       ))
     (".pheadersize" (
       "font-size" "0.5in"
       ))
)))


(define (ptext . args)
  (apply classdiv (cons  ".pure-text" args)))

(define (pbar . args)
    (apply classdiv (cons  ".pure-bar" args)))

(define (pheader seml lefttools title righttools)
  (dv (<< seml ".pure-header.pure-bar.pure-g")
    (<<
        (dv ".pure-u-1-4.pure-left-tools.pheadersize" lefttools)
        (dv ".pure-title.pure-u-1-2.pheadersize" title)
        (dv ".pure-u-1-4.pure-right-tools.pheadersize" righttools)
      )
))



(define (pfooter . args)
  (apply classdiv (cons ".pure-footer.pure-bar" args)))

(define (pbutton . args)
    (apply classdiv (cons  ".pure-button.pbutton" args)))

(define (pbutton-group . args)
  (apply classdiv (cons ".pure-button-group!role='group'" args)))

(define (pnav-button . args)
    (apply classdiv (cons  ".pnav-button.pbutton" args)))

(define (ppage . args)
  (apply classdiv (cons  ".ppage"  args)))
(define (peditor . args)
  (apply classdiv (cons  ".peditor"  args)))
(define (ppage-blank . args)
  (apply classdiv (cons  ".ppage-blank"  args)))
(define (ppage-no-header . args)
  (apply classdiv (cons  ".ppage-no-header"  args)))
(define (ppage-no-footer . args)
  (apply classdiv (cons  ".ppage-no-footer"  args)))

(define (pnav-page class id title content)
  (stage-page
    (ppage-no-footer (<< id class)
        (<<
            (pheader class
              (pnav-button class (fa-icon ".pnav-left" "angle-left" ""))
              title
                (pnav-button class  (fa-icon ".pnav-right" "angle-right" "")))
            (ppage-content content)
          )

      )))

(define (ppage-content . args)
  (apply classdiv (cons  ".ppage-content"  args)))

(define (peditor-content . args)
  (apply classdiv (cons  ".peditor-content"  args)))

(define (pform . args)
  (apply class-container form (cons ".pure-form" args)))

(define (pform-stacked . args)
  (apply class-container form (cons ".pure-form.pure-form-stacked" args)))

(define (pform-aligned . args)
  (apply class-container form (cons ".pure-form.pure-form-aligned" args)))

(define (prounded-input . args)
    (apply class-container input (cons ".pure-input-rounded" args)))

(define (pfieldset . args)
    (apply class-container fieldset (cons ".pure-group" args)))

(define (pcheckbox id caption )
  (label (<< ".pure-checkbox!for='" (str-replace id "#" "") "'") (<< (input (<< id "!type='checkbox'!value=''")) caption)))

(define (pradio id name caption )
  (label (<< ".pure-radio!for='" (str-replace id "#" "") "'") (<< (input (<< id "!type='radio'!name='" name "'")) caption)))


; Put the page in a hidden div, waiting to be shown later with (show-page id)
(define (stage-page page-data)
  (% "#fronkensteen-page-store" "append" page-data))
