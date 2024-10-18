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

  // Ignore requests from chrome extensions or non-GET requests
  if (
    requestURL.protocol === "chrome-extension:" ||
    event.request.method !== "GET"
  ) {
    return;
  }

  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          // Only cache successful responses (status 200) and ignore opaque responses
          if (
            networkResponse &&
            networkResponse.status === 200 &&
            networkResponse.type !== "opaque"
          ) {
            cache.put(event.request, networkResponse.clone());
          }

          // Handle 404 responses and serve a custom 404 page if needed
          if (networkResponse && networkResponse.status === 404) {
            return caches.match(NOT_FOUND_URL);
          }

          return networkResponse;
        }).catch(() => {
          // If network fails, return offline page or cached content
          return caches.match(OFFLINE_URL);
        });

        // Return the cached response immediately, but also update the cache in the background
        return cachedResponse || fetchPromise;
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
