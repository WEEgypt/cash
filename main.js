if ("serviceWorker" in navigator) {
	window.addEventListener("load", () => {
		navigator.serviceWorker
			.register("sw.js")
			.then((registration) => {
				console.log("Service Worker registered with scope:", registration.scope);
			})
			.catch((error) => {
				console.log("Service Worker registration failed:", error);
			});
	});
}
function onPromptClick() {
  if ('Notification' in window) {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        initServiceWorker();
      } else if (permission === 'denied') {
        console.warn('Notification permission denied.');
      }
    });
  }
}
const vapidPublicKey = 'BP4s3Hty8mASI0KmoKpAn0tHsMBlcx7wd3XysXHgUn149cDn66ujADeJBueEM4qE4KvBgiYT8rr_5YH017bChy4';

async function initServiceWorker() {
  if ('serviceWorker' in navigator) {
    const swRegistration = await navigator.serviceWorker.register('sw.js');
    const subscription = await swRegistration.pushManager.getSubscription();
    if (subscription) {
      console.log('User is already subscribed:', subscription);
      sendSubscriptionToServer(subscription);
    } else {
      const subscription = await swRegistration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: vapidPublicKey
      });
      console.log('User subscribed:', subscription);
      sendSubscriptionToServer(subscription);
    }
  } else {
    console.warn('Service worker is not supported');
  }
}

function sendSubscriptionToServer(subscription) {
	console.warn(JSON.stringify(subscription))
}

window.addEventListener('load', () => {
  initServiceWorker();
});