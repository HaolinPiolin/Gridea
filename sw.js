// Initialize deferredPrompt for use later to show browser install prompt.
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  showInstallPromotion();
  // Optionally, send analytics event that PWA install promo was shown.
  console.log(`'beforeinstallprompt' event was fired.`);
});

self.addEventListener("install", e => {
    e.waitUntil(
      caches.open("static").then(cache => {
        return cache.addAll(["./", "css.css", "./favicon.png"]);
      })
    );
});

self.addEventListener("fetch", e => {
    console.log('Intercepting fetch request for: ${e.request.url}');
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});
