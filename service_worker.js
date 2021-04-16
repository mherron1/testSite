
self.addEventListener('install', evt => {
  //console.log('service worker has been_ installed');
});



self.addEventListener('activate', evt => {
  //console.log('service worker has been_ activated');
});

self.addEventListener('fetch', evt =>{
  //console.log('fetch event', evt);
});
