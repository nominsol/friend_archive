const CACHE_NAME = 'my-cache-v1';
const URLs_TO_CACHE = [
    '/index.html',
    '/assets/css/main.css',
    '/assets/js/main.js',
    '/assets/img/appIcon.png',
    '/assets/img/main_picture.jpg' // 추가된 이미지
];

self.addEventListener('install', function(event) {
    console.log('Service worker installing...');
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return Promise.all(
                URLs_TO_CACHE.map(function(requestUrl) {
                    return fetch(requestUrl).then(function(response) {
                        if (!response.ok) {
                            throw new Error('Network response was not ok.');
                        }
                        return cache.put(requestUrl, response);
                    }).catch(function(error) {
                        console.error('Failed to cache:', requestUrl, error);
                    });
                })
            );
        })
    );
});

self.addEventListener('activate', function(event) {
    console.log('Service Worker activating.');
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', function(event) {
    if (event.request.method !== 'GET') {
        event.respondWith(fetch(event.request));
        return;
    }

    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                return response;
            }

            return fetch(event.request).then(function(networkResponse) {
                return caches.open(CACHE_NAME).then(function(cache) {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                });
            }).catch(function() {
                return new Response('Network error occurred', { status: 504 });
            });
        })
    );
});