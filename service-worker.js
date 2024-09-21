self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-pwa-cache').then((cache) => {
      return cache.addAll([
        'index.html',
        'icon.png',
        'manifest.webmanifest',
        'pulltorefresh.js',
        'style.css',
      ]);
    })
  );
});
