
(define (retrieve-wiki-image filename)
 (<< "[!scheme  (internal-image \"" filename "\") scheme!]"))

(define (retrieve-wiki-video filename)
(<< "[!scheme  (internal-video " "\".wiki-video\" \"" filename "\") scheme!]"))

(define (retrieve-wiki-audio filename)
(<< "[!scheme  (internal-audio " "\".wiki-audio\" \"" filename "\") scheme!]"))
