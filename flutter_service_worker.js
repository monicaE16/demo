'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "5ed56a366ae4c580557a88f37094511a",
"assets/assets/images/menu/forest2.jpg": "5a175bc739f80b65f41f1c65ab18a0d1",
"assets/assets/images/menu/question.png": "b82af461531855712819d5e643defec8",
"assets/assets/objects/angryMonkey.json": "8d1d051a8d4be2b5f22cdbd0b036f526",
"assets/assets/objects/apple.json": "c4a6df33670bc9004b6611d5ec3df68a",
"assets/assets/objects/banana.json": "88a726b62d9faf4158d53887d30de2c8",
"assets/assets/objects/banana4.json": "29ee5afb442e097396b534251cf05d13",
"assets/assets/objects/bananaScore3.json": "dcca34757acb070d4ddbadece09df1b2",
"assets/assets/objects/enter.json": "b47825a38c674639a8edbddbb27b7f60",
"assets/assets/objects/finger3.json": "da76b206855a8c6c5b8731dc72b5de5f",
"assets/assets/objects/happyMonkey.json": "1393a4b379b2374d59652fe1ce20544b",
"assets/assets/objects/hat.json": "e25f6842c44baedd7ed5669cd25e083b",
"assets/assets/objects/monkey5.json": "6fa61538b7c9b0f3c7779e8689f5d299",
"assets/assets/objects/mouse.json": "2dbbdc9c3675a9b79d6477c992179d82",
"assets/assets/objects/pigeon.json": "a15160b40052999b7d81bc918f28df18",
"assets/assets/objects/rabbit.json": "d29c6e89585dfbbd59ddcf168eed0ebb",
"assets/assets/objects/right.json": "0fe57cfb7846bb703fcab6b55e4c33a0",
"assets/assets/objects/toucan.json": "4800659a1e626143dc37c26e5c072068",
"assets/assets/objects/wrong.json": "b9fc1e911175a1448342650a3573e8da",
"assets/assets/sounds/banana.wav": "9f3e7faf2a25dac2b67b027a59d86d41",
"assets/assets/sounds/chirping.wav": "1cc47bf3d150e2d2b06c7592b95bee10",
"assets/assets/sounds/hatS.wav": "234fd1e4988fc36f204abca174aaf496",
"assets/assets/sounds/lose.wav": "073d2413c838b10665d97f7e002fc014",
"assets/assets/sounds/mixed.wav": "cb692b8b90fa290124d7ef7e1690a2ed",
"assets/assets/sounds/rabbitS.wav": "57ae9b34e270e588a7f5b32e9fad1346",
"assets/assets/sounds/wrong.mp3": "093eed4f4091d0792b60b33a1d98448c",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "30d029c9c42c654379aa5d551c2f3e1d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/gender_picker/assets/images/female.png": "93c67e67ee8656ee2f13b917a815ec0a",
"assets/packages/gender_picker/assets/images/male.png": "b544146a8e95908f097fe86343f9140b",
"assets/packages/gender_picker/assets/images/other.png": "4b5edfe11e630dbd98a09e04b2e35269",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"favicon2.png": "d7b59906f8fdcd9415fbe33604072eb7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4a4bf3620534df2a5af41a0fd4642a5d",
"/": "4a4bf3620534df2a5af41a0fd4642a5d",
"main.dart.js": "3f52566156e363f2ec6d1c0f77ae07ab",
"manifest.json": "11da3467fea89770c8b490504ed69658",
"version.json": "99c99f1b9c82619727264611099bef65"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
