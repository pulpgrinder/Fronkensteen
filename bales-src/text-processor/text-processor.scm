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

  (define (footnote-link_click target link-target link-text)
    ; scrolls to the specified footnote link.
    ; target is the jQuery object that was clicked. Not used in this default code, but it's there if you need it.
    (scroll-element-into-view link-target))

(define (external-link_click target url)
  ; target is the jQuery object that was clicked. Not used in this default code, but it's there if you need it.
  (open-url url)
  ; If you really want to navigate to external links in the main window (and lose app state):
  ; (navigate-url url)

  )
