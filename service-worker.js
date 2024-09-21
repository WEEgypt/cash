
const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
  event.waitUntil(
    addResourcesToCache([
		'',
		'index.html',
		'icon.png',
		'manifest.webmanifest',
		'pulltorefresh.js',
		'style.css',
    ]),
  );
});