const catcheName='v2';
const catchePages=[
    './index.html',
     './js/main.js',
     './css/bootstrap.css'
 ];

self.addEventListener('install',e =>{
console.log('Service worker is installed'); 
e.waitUntil(
    caches.open(catcheName)
    .then(cache=>{
        console.log("Service Worker Catching Files");
        cache.addAll(catchePages);
    }).then(()=>self.skipWaiting())
);  
});

self.addEventListener('activate',e=>{
    console.log('Service worker is activated');
    e.waitUntil(
        caches.keys().then(cacheNames=>{
          return Promise.all(
            cacheNames.map(cache=>{
                 if(cache!==catcheName){
                     console.log("Old caches is removing");
                     return caches.delete(cache);
                 }
             }) 
          )
        }
      )
    );    
});

self.addEventListener('fetch',e=>{
    console.log('Fetching the Log');
    e.respondWith(
    caches.match(e.request).then(res=>{
        return res || fetch(e.request);
    })

    )
       

});