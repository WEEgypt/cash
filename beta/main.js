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
const vapidPublicKey = 'BImhJYWdikRsGgXfL5kx5xZRHdN82a60Fmn1QNFUVxQ15G1RFbv8C_8gFBsKQ4ABpXJqFpW5rRUbw-8XtVXnXyw';

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
  fetch('subscribe', {
    method: 'post',
    body: JSON.stringify(subscription),
    headers: { 'content-type': 'application/json' }
  });
}

window.addEventListener('load', () => {
  initServiceWorker();
});