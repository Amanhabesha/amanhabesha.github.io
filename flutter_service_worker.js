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
"/icons\Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons\Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "69c03ca4dde7d1f3cce8b7505fc58140",
"/main.dart.js": "d5cd2cc24dcf1411c6f092c599def548",
"/manifest.json": "62f979ed23b7e8e8dfbda44475c1c626"
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
