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
function registerServiceWorker() {
  return navigator.serviceWorker
    .register("service-worker.js")
    .then(function (registration) {
      console.log("Service worker successfully registered.");
      return registration;
    })
    .catch(function (err) {
      console.error("Unable to register service worker.", err);
    });
}
function requestPermission() {
  return new Promise((resolve, reject) => {
    const permissionResult = Notification.requestPermission((result) => {
      resolve(result);
    });
    if (permissionResult) {
      permissionResult.then(resolve, reject);
    }
  }).then((permissionResult) => {
    if (permissionResult !== "granted") {
      throw new Error("Permission denied");
    }

    subscribeUserToPush();
  });
}
async function subscribeUserToPush() {
  const registration = await registerServiceWorker();

  const subscribeOptions = {
    userVisibleOnly: true,
    applicationServerKey: "BL1uDZrihwbcL47votOIFJmUTMVVF4KY0q4s4PjcDrmOz7PAnobIx4D4eSM0H33S-AiWZVuQOamO4uZem23oje0=",
  };

  const pushSubscription = await registration.pushManager.subscribe(
    subscribeOptions
  );

  axios
    .post("/api/subscription", pushSubscription)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error));
  return pushSubscription;
}