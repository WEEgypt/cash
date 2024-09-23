
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
    // Register Service Worker
    console.log("Registering service worker...");
    const register = await navigator.serviceWorker.register("service-worker.js", {
        scope: ""
    });
    console.log("Service Worker Registered...");

    console.log("Registering Push...");
    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: "eyJhbGciOiJSUzI1NiIsImtpZCI6InRyYW5zaWVudCIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2FwaS5tYWdpY2JlbGwuY29tIiwiZXhwIjoxNzI3MDYyNjc5LCJpYXQiOjE3MjcwNTkwNzksImp0aSI6IjAxOTIxY2JlLTJmYTktNzZkOS1iZmYwLWViY2MzMThhYTlkYiIsIlJvbGUiOiJQUk9KRUNUIiwiVXNlcktleSI6eyJJRCI6bnVsbCwiRXh0ZXJuYWxJRCI6IiIsIkVtYWlsIjoiIn0sIlByb2plY3RLZXkiOnsiSUQiOjkxNzMsIk5hbWUiOiJEZWZhdWx0IFByb2plY3QiLCJBUElLZXkiOiI5OTkxMGMyZGI1ODJiYmFlZjMzMGMxYzZhODgxZDlmYzQwYzJjYmI3IiwiV29ya3NwYWNlSUQiOjU2MDF9fQ.U6lwNDUP872ZzyWuOnfwSSEdu-NBq3CXVVbwNcz_1Vt5kWGUSZlzznr4LQ27VrqGCwweUktlI-rz7zoO6e4nDLCldctQqJhED6Un2Nu9-6JfsE49YpBSul7EkEn3Fun7OYRRMZdv7bS5LUVoW0jF6wqSunUHl3HPgBzpXNnSK9s"
    });
    console.log("Push Registered...");
	
	

await subscription.subscribe();


}
