const CACHE='mj-apartment-v3-shell';
const ASSETS=['./','./index.html','./manifest.webmanifest','./config.js','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const u=new URL(e.request.url);
  if(u.origin===location.origin)e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
