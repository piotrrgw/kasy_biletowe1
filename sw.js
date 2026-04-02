// Wersja aplikacji: v1.0
const CACHE_NAME = 'kasy-app-cache-v1.0';
const DATA_CACHE_NAME = 'kasy-data-cache-v1.0';
const REFRESH_INTERVAL = 24 * 60 * 60 * 1000; // 24 godziny w milisekundach

const STATIC_ASSETS = [
    '/',
    '/index.html',
    '/editor.html',
    '/manifest.json',
    '/favicon.svg',
    '/favicon-editor.svg',
    '/apple-touch-icon.png',
    '/apple-touch-icon-editor.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME && cacheName !== DATA_CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    const requestUrl = new URL(event.request.url);

    // Obsługa bazy danych JSON (Cache z odświeżaniem co 24h)
    if (requestUrl.pathname.endsWith('.json')) {
        event.respondWith(
            caches.open(DATA_CACHE_NAME).then(async (cache) => {
                const cachedResponse = await cache.match(event.request);
                
                let fetchNewData = true;
                if (cachedResponse) {
                    // Pobranie daty zapisania z nagłówków (jeśli wstawiliśmy)
                    const dateHeader = cachedResponse.headers.get('sw-cache-date');
                    if (dateHeader) {
                        const cacheTime = new Date(dateHeader).getTime();
                        if (Date.now() - cacheTime < REFRESH_INTERVAL) {
                            fetchNewData = false; // Dane mają mniej niż 24h
                        }
                    }
                }

                if (!fetchNewData && cachedResponse) {
                    return cachedResponse;
                }

                // Pobranie z sieci i zapis z naszą datą
                try {
                    const networkResponse = await fetch(event.request);
                    const headers = new Headers(networkResponse.headers);
                    headers.append('sw-cache-date', new Date().toISOString());
                    
                    const responseToCache = new Response(await networkResponse.clone().blob(), {
                        status: networkResponse.status,
                        statusText: networkResponse.statusText,
                        headers: headers
                    });

                    cache.put(event.request, responseToCache);
                    return networkResponse;
                } catch (error) {
                    // W razie braku internetu, zwróć to co mamy w cache
                    if (cachedResponse) return cachedResponse;
                    throw error;
                }
            })
        );
    } else {
        // Obsługa plików statycznych (Cache First)
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                return cachedResponse || fetch(event.request).then((networkResponse) => {
                    return caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    });
                });
            })
        );
    }
});