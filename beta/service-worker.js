self.addEventListener('push', function(event) {
  const options = {
    body: event.data ? event.data.text() : 'You have a new notification!',
    icon: 'icon.png', // Path to your notification icon
    badge: 'icon.png' // Path to your badge icon
  };

  event.waitUntil(
    self.registration.showNotification('New Message', options)
  );
});