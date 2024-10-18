const CACHE_NAME = "cash-v1";
const OFFLINE_URL = "./offline.html";
const NOT_FOUND_URL = "./404.html";
const ASSETS_TO_CACHE = [
  "./",
  "./404.html",
  "./icon512_maskable.png",
  "./icon512.png",
  "./index.html",
  "./main.js",
  "./manifest.json",
  "./offline.html",
  "./service-worker.js",
  "./style.css",
];
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  const requestURL = new URL(event.request.url);
  if (
    requestURL.protocol === "chrome-extension:" ||
    event.request.method !== "GET"
  ) {
    return;
  }
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request)
        .then((networkResponse) => {
          if (
            !networkResponse ||
            networkResponse.status !== 200 ||
            networkResponse.type === "opaque"
          ) {
            if (networkResponse && networkResponse.status === 404) {
              return caches.match(NOT_FOUND_URL);
            }
            return networkResponse;
          }
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        })
        .catch(() => {
          return caches.match(OFFLINE_URL);
        });
    })
  );
});
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
