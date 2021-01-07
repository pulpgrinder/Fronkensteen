self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v___VERSION___-___BUILD___').then(function(cache) {
      return cache.addAll([
        './fronkensteen_launcher.html',
        './apple-touch-icon.png',
        './icon-192x192.png',
        './icon-512x512.png',
        './logo.png',
        './shareicon.png',
      ]);
    })
  );
});
self.addEventListener('fetch', function(event) {
  event.respondWith(caches.match(event.request).then(function(response) {
    if (response !== undefined) {
      return response;
    } else {
      return fetch(event.request).then(function (response) {
        let responseClone = response.clone();
        caches.open('v___VERSION___-___BUILD___').then(function (cache) {
          cache.put(event.request, responseClone);
        });
        return response;
      }).catch(function () {
        return caches.match(event.request);
      });
    }
  }));
});
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then (cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== 'v___VERSION___-___BUILD___'){
            return caches.delete(cacheName);
          }
        })
      );
    }));
  });
