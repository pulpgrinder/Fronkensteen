; text-processor.scm
; Copyright 2020 by Anthony W. Hursh
; MIT license.

(define (trusted-text-processor text)
      (process-alignment
        (trusted-markdown
          (process-poetry
            (remove-comments text)))))



(define (untrusted-text-processor text)
  (process-alignmment
  (markdown
    (process-poetry
      (remove-comments text)))))

(define (wikilink_click target link-text)
  ; target is the jQuery object that was clicked. Not used in this default code, but it's there if you need it.
  (alert (<< "You clicked the wikilink '" link-text  "'. You can add your own handler for wikilinks by redefining the (wikilink_click target link-text) procedure in your app code. See text-processor/text-processor.scm for the definition of this default procedure.")))

(define (hashtag_click target link-text)
  ; target is the jQuery object that was clicked. Not used in this default code, but it's there if you need it.
  (alert (<< "You clicked the hashtag '" link-text  "'. You can add your own handler for hashtags by redefining the (hashtag_click target link-text) procedure in your app code. See text-processor/text-processor.scm for the definition of this default procedure.")))

(define (external-link_click target url)
  ; target is the jQuery object that was clicked. Not used in this default code, but it's there if you need it.
  (alert (<< "You clicked an external link to '" url  "'. Note that normal navigation is suppressed by default for external links to prevent navigating away from the Fronkensteen app by mistake. You can add your own handler for external links by redefining the (external-link_click target link-text) procedure in your app code. See text-processor/text-processor.scm for the definition of this default procedure."))

  ; If you really want to navigate to external links, you could just replace
  ; the above code with:
  ; (navigate url)

  )
