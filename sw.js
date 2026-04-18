const CACHE_NAME = "mogura-cache-v5";
const urlsToCache = [
  "./",
  "./index.html",
  "./manifest.json",
  "./sw.js",
  "./icon.png",
  "./mole.png",
  "./bgm.mp3",
  "./hit.mp3",
  "./voice_low.wav",
  "./voice_mid.wav",
  "./voice_high.wav",
  "./highscore.wav"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});