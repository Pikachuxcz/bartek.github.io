const CACHE_NAME = "solar-system-cache-v1";

const FILES_TO_CACHE = [
    "solar-system.html",
    "solar-style.css",
    "solar-app.js",
    "solar-data.json",
    "manifest.json",
    "app-icon.svg",
    "promo-page.html",
    "documentation.html",
    "programmer-documentation.html",
    "index.html"
];

// Install service worker and cache files
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(FILES_TO_CACHE))
    );
});

// Activate service worker and remove old caches
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys.map(key => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        })
    );
});

// Serve cached files when offline
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});
