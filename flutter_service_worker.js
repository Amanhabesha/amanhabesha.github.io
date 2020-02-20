'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets\AssetManifest.json": "c6772928aa819ed8a8a332b108fccfdf",
"/assets\assets\fonts\Montserrat-Bold.ttf": "d3085f686df272f9e1a267cc69b2d24f",
"/assets\assets\fonts\Montserrat-Regular.ttf": "07689d4eaaa3d530d58826b5d7f84735",
"/assets\assets\images\lp_image.png": "5aad4d4216174954f5228d7d268546e8",
"/assets\FontManifest.json": "957423d262d0760a97e6d1ba8e4280e1",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\LICENSE": "1a80be6c5724a31e6f9c9e06dba53b63",
"/assets\packages\cupertino_icons\assets\CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"/index.html": "04f396d10f7e76b6567657589424df36",
"/main.dart.js": "bd10175a6c4f8cc0805f856e25d5b331"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
