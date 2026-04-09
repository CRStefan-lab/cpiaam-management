// CPIAAM Service Worker — v12.34
const CACHE_NAME = 'cpiaam-v12.34';
const CDN_CACHE = 'cpiaam-cdn-v1';

// CDN resources — cached permanently (versions pinned)
const CDN_URLS = [
  'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-annotation/3.0.1/chartjs-plugin-annotation.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js',
  'https://unpkg.com/docx@8.5.0/build/index.umd.js',
  'https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js'
];

// Install — pre-cache app + CDNs
self.addEventListener('install', event => {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAME).then(cache => cache.addAll(['./index.html', './manifest.json', './favicon.ico', './icon-192.png'])),
      caches.open(CDN_CACHE).then(cache => cache.addAll(CDN_URLS))
    ]).then(() => self.skipWaiting())
  );
});

// Activate — clean old app caches (keep CDN cache)
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k.startsWith('cpiaam-v') && k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch — different strategies per resource type
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // CDN resources → Cache First (never change, pinned versions)
  if (CDN_URLS.some(cdn => event.request.url.startsWith(cdn.split('/').slice(0, 3).join('/')))) {
    event.respondWith(
      caches.match(event.request).then(cached => cached || fetch(event.request).then(resp => {
        if (resp.ok) { const c = resp.clone(); caches.open(CDN_CACHE).then(cache => cache.put(event.request, c)); }
        return resp;
      }))
    );
    return;
  }

  // App files (index.html, manifest) → Stale-While-Revalidate
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        const fetchPromise = fetch(event.request).then(resp => {
          if (resp.ok) {
            const clone = resp.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
            // Notify page if index.html was updated
            if (event.request.url.includes('index.html') && cached) {
              cached.text().then(oldText => {
                clone.clone().text().then(newText => {
                  if (oldText !== newText) {
                    self.clients.matchAll().then(clients => {
                      clients.forEach(c => c.postMessage({ type: 'UPDATE_AVAILABLE' }));
                    });
                  }
                });
              });
            }
          }
          return resp;
        }).catch(() => cached); // offline fallback
        return cached || fetchPromise;
      })
    );
    return;
  }

  // Everything else — network first, no cache
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
