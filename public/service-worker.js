self.addEventListener('push', event => {
    const options = {
        body: event.data ? event.data.text() : 'You have a new notification!',
        icon: 'icon.png', // Add your icon path
    };

    event.waitUntil(
        self.registration.showNotification('New Notification', options)
    );
});


// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close(); // Close the notification

  event.waitUntil(
    clients.matchAll({ includeUncontrolled: true, type: 'window' })
      .then((clientList) => {
        const matchingClient = clientList.find(client => client.url === '/' && 'focus' in client);
        if (matchingClient) {
          return matchingClient.focus(); // Focus the existing tab
        } else {
          return clients.openWindow('/'); // Open a new tab if no existing tab
        }
      })
  );
});
