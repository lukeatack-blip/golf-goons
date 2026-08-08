// Minimal service worker — required by Chrome's installability checks.
// Doesn't cache anything meaningfully; just needs to exist and control the page.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Pass-through: always go to network, no offline caching.
  event.respondWith(fetch(event.request));
});
