// const cacheName = 'your-pwa-cache-v1';

// self.addEventListener('install', (event) => {
//     event.waitUntil(
//         caches.open(cacheName).then((cache) => {
//             return cache.addAll([
//                 '/',
//                 '/index.html',
//                 '/manifest.json',
//                 '/Assets',
//                 '/app.js',
//                 '/styles.css' 

//             ]);
//         })
//     );
// });

// self.addEventListener('fetch', (event) => {
//     event.respondWith(
//         caches.match(event.request).then((response) => {
//             return response || fetch(event.request);
//         })
//     );
// });
