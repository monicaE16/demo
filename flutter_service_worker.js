'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "59d0d19fc45ca69230d858f60a5557f8",
".git/config": "0fe2abfa9d665fc256892476535c4bb7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "77a591b8807e8d916e7f54140f902209",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7829492854fd3a6e66b19da1acca7a14",
".git/logs/refs/heads/master": "7829492854fd3a6e66b19da1acca7a14",
".git/logs/refs/remotes/origin/master": "03de8d728c2a2e431b3c1ad3cac90e30",
".git/objects/00/a11871863a608465a61a5d247aac50adbecbd6": "e472f35b97654ff85d145ccd840beb45",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/03/017918eb156ae0d1fcaaa02fc0a304a9d03af4": "f2af977524391e361aa08f5a8384e6e3",
".git/objects/09/2beb95961863f0e6230845628db1ecdf1768a1": "b31a77cbf85a860799a52941d4956210",
".git/objects/19/5c871383eaad1fe8886d96c7c274f61a45d6a6": "95f2b8699f96cfb7b37109a4a3767225",
".git/objects/19/ed1dcfcabfbb58a8af8e325cbb1e662e618288": "fb323dbcd1b1fc2bd14c9ccb691eb8ea",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/21/fef759216fdf26c52f166e35598d615973de31": "83167060b0ba4838e56e9e34252c73f2",
".git/objects/22/929f1437f811aef9ce6395e49299060659132a": "80ff79763dc87efb6c7594a4e59e0368",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/objects/27/afc5365bb42e18881f8264f83b80c688384112": "72d69a3954fcf9e85e93ec6690276cf9",
".git/objects/2b/37e1aca94e8cebbee4efc603de5632f3ea4ede": "4b6efee5d9fca3a3e1a9cb3a4c29fde8",
".git/objects/32/3855b08c93a37ca0388361cff34152bcbf4997": "63f9529927649824389cb569e91e874c",
".git/objects/33/2b3de6ce14c3ab14eefb0a8acf1e9e3ca60b00": "443a84118800a704d023224a3f30e22a",
".git/objects/4e/4154ca0d36ad9cfa1c3eb9d7b38d74edfa2a23": "9623214907f29cb35de972bfe8be30fb",
".git/objects/5b/70fe82b60d24bb2711b00c0975f356d0d4f00e": "e62b9a26caffadd030fae7e36e8f7c21",
".git/objects/65/a10289d1baeb3941c5fd570f96a991f772fc49": "8198e127424b3d19d75c676b180027cc",
".git/objects/66/48b59b0757aeff96545cdc6c4c5699e91b4c76": "550c59d89956b8c2be376233fccd2fa1",
".git/objects/6d/c70614c492b07006f38b8c4e22429576abf2b4": "6734b7d56ddbfaf10ff74dcb5071c72c",
".git/objects/6f/fd4b787b02990e7a5038217bde0cc422b4e305": "9b1cdcc9169d7679a3cf18627ab5dd9b",
".git/objects/75/587e80fe3e31c04cbf191791df0950554b56d9": "0653dbd92697230d9595aeb0c0433024",
".git/objects/76/41f34d4c805cd1dfe72a122c7cf7dcb8501090": "5a7d0a7a7bcf442f0e34594c73bee2c3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/a5815ae1b0be9673c61c365c87b77897dc7a67": "078689c07d69c116eef04e2fae75398c",
".git/objects/7b/80b7305746f2148f88e9c894814f8b21df83ce": "09901a3d4ff9391202522dc07517ef44",
".git/objects/7c/d720392849558e056a80b73bde8bd029a37c59": "ded6947ec1df5e52e7d34ec48a25b481",
".git/objects/83/851436a34adccf2cb9a2607f82dfa64a068eb9": "97c7c15216923b419cb07fa5349e97c0",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/8d/09d52c2eab12d18d16f85403afabe82cae6835": "01ba36e30b02b45852f474081490cafc",
".git/objects/91/440c0de4f3f866f4de77e0b6b23f3d975e9be0": "b4eded37e451f98683455a8c907a1b06",
".git/objects/92/cec126ba9019a63e2c5c794cde87be69a79f91": "8ac8d2426e48c2960f707ee2cdb144c8",
".git/objects/95/28ce2b2de947bcf6a1b9de9a0897d3451e82b5": "681169cd8b631895a111f6184490b326",
".git/objects/9a/b0f58fff4330698334981ff540beb63fafcaf6": "494f733d19f9225ac27ef9a975bd446b",
".git/objects/9e/6e0b461f18105c1dd5976144de05991a5507fe": "241538eba39c9f1a91180d07ad5289a2",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/821855a3757e94065b7786064435b82fc23797": "e8d694c36c51146dd8a1e35fcbeb796e",
".git/objects/ac/b6c6802375a0d5e3c4c550cd4052e535986c0d": "88f6d0dac659a7a1dbb8a48877f47da7",
".git/objects/ad/7d84493441148e66e319891237969bdd220ff1": "a8419efe19262228cffd988c418acf26",
".git/objects/ad/e844074631c9049e9c9ff64954251f4c70b560": "4f4a899df07bf6b00435f5519b9ef86f",
".git/objects/b3/c5ec907f1135f9cbb2f8009ba3c67d0ced40bd": "4149833c5e46a053ba7ce3397684e0bd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/8fbcc354f41c311b729b3eb4ca353994185098": "4f51b727a681cf038a74239d2b133dba",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/d91f20357fc0d37c745e8630830b08c0ca17f6": "910bb797a4b683d6ef309412e9eca65a",
".git/objects/c4/c45a193b1472062d8f73a0d4f4b724e817fbb0": "05903909bd238d200d9d8791cf4efe04",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/7a65cd7b2aeaf0a8b5cb61df30fe1381eabd0b": "c8394358801c23a9b41de6f5bcbf0ae2",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/d2/2699b1c30c155ca5b67d5e7a83280415058b54": "92e490bded24ec04369934ec50f31059",
".git/objects/d3/0d296fdb01661e66db6676cd943e5f5242c53d": "967f4c4d2cccdeb8a62f0aee0f28c15c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/c0aa11b5440e3386c6503f8131180642a42557": "ef8c0836a860b1328ad737a4291d1311",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e4/6cb84e6fbf6bf89b331110a0bbaa4b741480f1": "23d2e7fec2cd6f4e57d3d206e5c190c5",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/73304b09e7ab71b85e86e18ce5aaba75845a7f": "cd628bda35855acc5a2c5ca42c91f1a6",
".git/objects/e9/5b871fcf7a4911c267bfd7c16cf084661f163f": "697f8cb2c49c96d56a19387c3dc71e79",
".git/objects/e9/9cf641a51d37ec8aefa12f4e1ee27fc70a2873": "bc39027fb44b080ba9dc994048c89cd0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/b926fe2d9690d46788e82c63a57290b85c62ba": "4043680f4e66dc14f4f1fc76b12a60bd",
".git/objects/f0/8bfac68b8034027a550e262c61422dc3037297": "43eeb9001a00013296f2e929873b337c",
".git/objects/f1/186d5e1268b46b25a18f249cab8bf97bbd4516": "37f53b4024cf75d3a02cf6a370bf2c7a",
".git/objects/f6/a939ad155bdfb76b3804b69778a039b3e76ee3": "a0d10aaebf28064d5f10e66a44ee0a60",
".git/objects/f6/f530f4325f373abeae8d0653071554bb4f5116": "d13cbb0439f5a1a94432df2511c01e91",
".git/objects/f7/d58537885c01f92989646d92026e304f318917": "15f57a2b8501bd33072a454c9ac2f86f",
".git/objects/f9/87eba9c2bba44c598004c21e79189b94d26b23": "81b6edb360cfd24791534ee52ebab45b",
".git/objects/fd/5a4f5cea56b23dfdf5a973a22cb450700c6293": "b6e42cf0fd57b74354ab8704e4d36c9a",
".git/objects/fd/c32426c73b59664bfb64b6b6a7641123ac521b": "2a8078d854452fd410619531ce964bf9",
".git/refs/heads/master": "d56669d06a8ce9ef35495a214adc35e8",
".git/refs/remotes/origin/master": "d56669d06a8ce9ef35495a214adc35e8",
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
"index.html": "50bbc55844e007885c1558b57104169d",
"/": "50bbc55844e007885c1558b57104169d",
"main.dart.js": "80bc5960bc458a33c9aa821c8e3a9880",
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
