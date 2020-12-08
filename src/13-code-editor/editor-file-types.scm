(define (is-image-file? ext)
  (cond
    ((eqv? ext "jpg") #t)
    ((eqv? ext "gif") #t)
    ((eqv? ext "png") #t)
    ((eqv? ext "svg") #t)
    (#t #f)))

(define (is-video-file? ext)
  (cond
    ((eqv? ext "mp4") #t)
    ((eqv? ext "m4v") #t)
    (#t #f)))

(define (is-audio-file? ext)
  (cond
    ((eqv? ext "mp3") #t)
    (#t #f)))

(define (is-text-file? ext)
(cond
((eqv? ext "fmk") #t)
((eqv? ext "scm") #t)
((eqv? ext "js") #t)
((eqv? ext "md") #t)
((eqv? ext "txt") #t)
(#t #f)))
