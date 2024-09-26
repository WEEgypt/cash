function goTo(Link) {
    window.location.href = Link;
}
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("service-worker.js")
            .then((registration) => {
                console.log("Service Worker registered with scope:", registration.scope);
            })
            .catch((err) => {
                console.log("Service Worker registration failed:", err);
            });
    });
} else {
    console.log("Service Workers are not supported in this browser.");
}
