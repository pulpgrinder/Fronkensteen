(define (set-ios-pwa-name name)
    (% "[name='apple-mobile-web-app-title']" "attr" "content" name))


(define pwa-icon-resolutions '("120" "152" "167" "180"))

(define (set-ios-pwa-icon-folder icon-folder)
  (% "[rel='apple-touch-icon']" "remove")
  (add-pwa-icon-tags icon-folder pwa-icon-resolutions))

(define (add-pwa-icon-tags icon-folder icon-resolutions)
  (if (eq? icon-resolutions '())
    #t
    (let ((current-res (car icon-resolutions)))
      (let ((size-string (<< current-res "x" current-res)))
        (% "head" "append" (link (<< "!rel='apple-touch-icon'!sizes='" size-string "'!href='" (read-internal-data-url (<< icon-folder "/icon-" size-string ".png")) "'")))
        (add-pwa-icon-tags icon-folder (cdr icon-resolutions))))))


(set-ios-pwa-name "Feed My Fronkensteen")
(set-ios-pwa-icon-folder "pwa")
