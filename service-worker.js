// Service Worker minimale per abilitare PWA su iPhone e Android

self.addEventListener("install", event => {
  // Installa immediatamente
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  // Prende il controllo della pagina subito
  event.waitUntil(self.clients.claim());
});

// Fetch handler vuoto (necessario per Safari iOS per validare la PWA)
self.addEventListener("fetch", event => {
  // Intenzionalmente vuoto — lascia passare tutte le richieste
});
