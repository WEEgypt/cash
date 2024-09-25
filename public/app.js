const subscribeButton = document.getElementById('subscribe');
const sendNotificationButton = document.getElementById('send-notification');

const applicationServerKey = urlB64ToUint8Array('BL1uDZrihwbcL47votOIFJmUTMVVF4KY0q4s4PjcDrmOz7PAnobIx4D4eSM0H33S-AiWZVuQOamO4uZem23oje0');

// Register service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(() => console.log('Service Worker registered.'))
        .catch(error => console.error('Service Worker registration failed:', error));
}

// Request permission for notifications
subscribeButton.addEventListener('click', () => {
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            subscribeUser();
        } else {
            console.log('Notification permission denied.');
        }
    });
});

// Subscribe the user to push notifications
function subscribeUser() {
    navigator.serviceWorker.ready.then(registration => {
        return registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: applicationServerKey
        });
    })
    .then(subscription => {
        console.log('User is subscribed:', subscription);
        return fetch('/subscribe', {
            method: 'POST',
            body: JSON.stringify(subscription),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    })
    .catch(err => console.error('Failed to subscribe the user: ', err));
}

// Send a notification
sendNotificationButton.addEventListener('click', () => {
    const message = prompt("Enter your notification message:");
    fetch('/send-notification', {
        method: 'POST',
        body: JSON.stringify({ message }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error sending notification:', error));
});

// Helper function to convert VAPID key
function urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
    const rawData = window.atob(base64);
    return Uint8Array.from([...rawData].map(char => char.charCodeAt(0)));
}
