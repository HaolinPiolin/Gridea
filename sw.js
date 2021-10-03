self.addEventListener("install", e => {
    e.waitUntil(
      caches.open("static").then(cache => {
        return cache.addAll([
          "./",
          "css.css",
          "./img/android-chrome-512x512.png",
          "./img/android-chrome-192x192.png",
          "./img/grafico-de-barras.png",
          "./img/apple-touch-icon",
          "./img/lista-de-verificacion.png",
          "./img/supervision.png",
          "./img/tienda.png",
          "./index.js"
          ]);
      })
    );
});

self.addEventListener('activate', e => {

})

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});
