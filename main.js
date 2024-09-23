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

const targetUrl = '...';

self.addEventListener('notificationclick', (event) => {
  self.console.log('notificationclick');
  event.notification.close(); // Android needs explicit close.
  event.waitUntil(
    clients.matchAll({type: 'window'}).then( windowClients => {
      // Check if there is already a window/tab open with the target URL
      for (var i = 0; i < windowClients.length; i++) {
        var client = windowClients[i];
        // If so, just focus it.
        if (client.url === targetUrl && 'focus' in client) {
          return client.focus();
        }
      }
      // If not, then open the target URL in a new window/tab.
      if (clients.openWindow) {
        return clients.openWindow(targetUrl);
      }
    })
  );
});



window.addEventListener('load', () => {
  initServiceWorker();
});