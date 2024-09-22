{
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker
                .register("service-worker.js")
                .then((registration) => {
                    console.log("Service Worker registered with scope:", registration.scope);
                })
                .catch((error) => {
                    console.log("Service Worker registration failed:", error);
                });
        });
    }
}
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("cashHelper-cache-v1").then((cache) => {
            return cache.addAll(["icon.png", "icon512_maskable.png", "icon512_rounded.png", "index.html", "manifest.json", "service-worker.js", "style.css"]);
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
self.addEventListener('push', function(event) {
    const data = event.data.json();  // Assuming the server sends JSON
    const options = {
        body: data.body,
        icon: 'icon.png',
        badge: 'badge.png'
    };
    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});
navigator.serviceWorker.ready.then(function(registration) {
    // Check for an existing subscription
    registration.pushManager.getSubscription()
    .then(function(subscription) {
        if (!subscription) {
            // No subscription, register now
            const applicationServerKey = urlB64ToUint8Array('YOUR_PUBLIC_VAPID_KEY_HERE');
            registration.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: applicationServerKey
            })
            .then(function(subscription) {
                console.log('User is subscribed:', subscription);
            })
            .catch(function(err) {
                console.log('Failed to subscribe the user:', err);
            });
        } else {
            console.log('User is already subscribed.');
        }
    });
});
