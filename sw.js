/* Cache only application assets, never user inputs or generated content. */
'use strict';
const PREFIX='cyber-passmake-';
const CACHE=PREFIX+'2026-10-30-v2';
const ASSETS=['./','./index.html','./passmake.html','./manifest.webmanifest','./icons/favicon.svg','./icons/apple-touch-icon.png','./icons/icon-192.png','./icons/icon-512.png','./icons/icon-maskable-512.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS))));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith(PREFIX)&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 const url=new URL(event.request.url);
 const known=ASSETS.some(path=>new URL(path,self.registration.scope).href===url.href);
 if(!known)return;
 event.respondWith(caches.open(CACHE).then(async cache=>(await cache.match(event.request))||fetch(event.request)));
});
