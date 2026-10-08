const C='mj-apartment-v2';const A=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(C).then(c=>c.addAll(A)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(x=>x||fetch(e.request).then(r=>{let q=r.clone();caches.open(C).then(c=>c.put(e.request,q));return r}).catch(()=>x))));
