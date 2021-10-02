self.addEventListener("install", e => {
    e.waitUntil(
      caches.open("static").then(cache => {
        return cache.addAll([
          "./",
          "css.css",
          "./img/114x114.png",
          "./img/144x144.png",
          "./img/grafico-de-barras.png",
          "./img/favicon.png",
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
