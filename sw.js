self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("cashHelper-cache-v1").then((cache) => {
            return cache.addAll(["icon.png", "icon512_maskable.png", "icon512_rounded.png", "index.html", "manifest.json", "main.js", "sw.js", "style.css"]);
        })
    );
});
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
self.addEventListener('push', (event) => {
  const options = {
    body: event.data.text(),
    icon: 'icon.png',
    badge: 'icon512_maskable.png',
  };
  event.waitUntil(self.registration.showNotification('Cash Helper', options));
});