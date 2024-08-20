// service-worker.js

self.addEventListener('install', function(event) {
    console.log('Service worker installing...');
    // Pre-cache some assets
    event.waitUntil(
        caches.open('my-cache').then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/b_urDay.html',
                '/f_archive.html',
                '/assets/css/main.css',
                '/assets/js/main.js',
                '/assets/js/b_urDay.js',
                '/assets/js/f_archive.js',
                '/assets/img/appIcon.png',
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});