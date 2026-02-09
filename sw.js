// Service Worker para Gestor de Dietas Pro
// © 2026 FP - Todos los derechos reservados

const CACHE_NAME = 'dietas-pro-v2';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap',
  'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2'
];

// Instalación - cachear recursos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting())
  );
});

// Activación - limpiar caches antiguas
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Eliminando cache antigua:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch - servir desde cache, fallback a red
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - devolver respuesta del cache
        if (response) {
          return response;
        }

        // No está en cache - hacer petición a la red
        return fetch(event.request).then(
          (response) => {
            // Verificar respuesta válida
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clonar la respuesta
            const responseToCache = response.clone();

            // Guardar en cache para futuras peticiones
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
      .catch(() => {
        // Si falla todo, devolver página offline básica
        return new Response(
          '<html><body style="font-family:sans-serif;text-align:center;padding:50px"><h1>Sin conexión</h1><p>La aplicación necesita conexión para cargarse la primera vez.</p></body></html>',
          { headers: { 'Content-Type': 'text/html' } }
        );
      })
  );
});
