'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "792b256573aeb165bbf022e3425258d5",
"index.html": "516bf9447886f243592f3ff13966442f",
"/": "516bf9447886f243592f3ff13966442f",
"main.dart.js": "7dc97f6ac23d3a63effbcb2de8e0abb3",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "7cb7ca41f1de6c0300ea1eadcba92342",
".git/config": "65ed77eadcbbf6ed683acd5ada1d3b9c",
".git/objects/92/52eab088b87e0bf7058e6aeeb27f561e897965": "7ce0094ee82c7d4b9425c72357cfde21",
".git/objects/3c/22c536a2d5860230fea6cc5bf6eff7dc5a86c4": "e15d212e5c10b922d176e5f9776a5886",
".git/objects/3d/46f2ec36cfadae9fac29c1ebcf2c9f09d3f7d9": "7791a66b75357627ce65fc3f334d8f0a",
".git/objects/0e/b10b23ab76a4e57ab1c25d9dce05c7a4de1ef4": "7aaab81211900e429d317a122d2e8746",
".git/objects/b5/a73835058788d1504757c22e757b11fbeb33c6": "42afd8cacc48dab75b068b3fd88a4c3b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/7403f5fa983df7e9f560b40fa168d8c3c8b8fc": "5b905e4f9075995cb608bf241cb6ae0a",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/b4e7c6824bf813e9ceea84dc678bfd2d639ce3": "eded40fbb8b6ac42af84c363c4713513",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/b309b714d93af9af2e09fcbc47f391b39281ca": "5a7b6ab1258cea92b74f6fd0b4246b52",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/eb6d8449430a77e25037bc60448358b6ab8588": "567f03a739da6c7ad09698f0d25bc657",
".git/objects/fc/0f51c1655e91179d29c97e3873764edf64ec0f": "fbbfc2d0db1638da3717b6380a12b510",
".git/objects/fd/ff44e33141b64d59deb4f94ff19365eff7572d": "c3881dc95439f04b26c5d90364080c4f",
".git/objects/cf/4a784cc1ee23898e344e37698118063cd64506": "12889b12e187b933e66dc077e5fbcb78",
".git/objects/c8/208600c953db33e51d1787f114c5d1a9527ae3": "ef23f8702c217cb02fcd77395f0651a0",
".git/objects/c1/d693cdabc0a3bc6c14341b3d2f38f9be4c3a2c": "8f79c50a8d69afd83f2073a64e71a8f4",
".git/objects/c1/465049f71673a3adfceacd6d5c96b292d26af6": "b46d8fb52a979f2337d85d3fb2c93655",
".git/objects/29/872e3dfa2bb126611a70ed6037eea957c0bc60": "7aa924a0da08093ba76e805d8de576a9",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/87/e1b51d2d21b18454e5c2be95bd48f64fe724f8": "299c63802851f6945a4c04f14dc5ce0e",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/28/35c82862bf7fe493068d2d9b91e3ecd7080218": "8f1c12e80631beb60ce777c40648ec3c",
".git/objects/17/2bee6f4c4f030aa62606f828fbfc31443713d2": "1b28c8631fb0656803253868f2281bf0",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/5f54a3bf057f5ec97e6b7b1ec417ce2a6ee477": "ea3a59d45fff1816a5a88438cfa41a26",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/07e15c3ae09c0e97cc716cf329063a95f5d168": "9827236014351ca337d41d4a8597d7bc",
".git/objects/5c/0ed5c196d8c4f2bacaabb9b8fd408246d4cf2e": "e48a1d5b15adee00d2d2bf00ce70e02f",
".git/objects/62/226b1d886de08baefb3275c267bdc2e76dc172": "9213ec8b6aa29f98ce803af13a1dd52b",
".git/objects/3a/15a3454d9f54da65c90fd0dc33ba93d4b56782": "80206a1c82b61024698a980ca523bcf7",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/3f/769aa79a38530a76bbeb7ce2cf408ee2ef75ef": "785d658d20a8a8cde312ad0728fa38a8",
".git/objects/99/969507ed4a4e8ad884aa6399df936c5a5502fd": "90c25bf64c7e60744aebeba664a0c00f",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/a7/e02843a764de221b3d92231f0d6a268b6a8824": "e53be00dbb9577e56699785e22739838",
".git/objects/b8/7b8eeedb58c0223dcc9ec8acbf66299d217f30": "0d2de25cbe063d7c90d2b22357097f45",
".git/objects/a9/4cc9b091e5694fc3ff73893661d32e64d3fc87": "f01301a44305dc483681ae93a93107cc",
".git/objects/d5/d88051c20c1e9778a3e1c79b3f768f398bb30c": "9b2e0893fcc9e577e5fe4ae75c54de4f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/e7/bde4f6d16de60899d79f02191694062ce00ad4": "57be2911fb6d32b69c68b2ae40b9eaa0",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/116d920580367caf6a179155f344ede856bf31": "664ce7bca47fdb5e1d15a77de593527b",
".git/objects/1b/93054e9cc21803a6d90758a4a115269e6f0704": "8c1bdcd715aa38480e969df14d60dff7",
".git/objects/23/76831cdaede3b010a0f6a054eb41bd1e19b24e": "3f59ea98949f2450253c095903dea929",
".git/objects/8d/4dc762e706e75963af4520c47398e323a66b8c": "50397c6f72566810f3fdceacb4badd65",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/14/ddddf922840e9c93e923caba6dccd4e2ec479e": "917ddba39c561f904ca487ae56c831c4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f5cfede7613c6e876e5a332e716911a3",
".git/logs/refs/heads/main": "b51734e24f22b8a0bb1dc4b30b47401c",
".git/logs/refs/remotes/origin/main": "e0b16f0d701b749c8d413cc8f291ab44",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "c43fa58339172b13de416228f753ee4b",
".git/refs/remotes/origin/main": "c43fa58339172b13de416228f753ee4b",
".git/index": "34ec4684770f58938d3722d8642124c1",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "c272c8cf82c44693e0b0d5c1625f17bb",
"assets/NOTICES": "c90f5df305c6e6d03589c97d62040e25",
"assets/FontManifest.json": "a2e2c345430cd556e4c5dbc58ceea2c4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ac371fd50a2d229df39267404e719f7d",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/ArrowFront.png": "e28fbecf48fa0d57017a0daeaca4fa9c",
"assets/assets/majesticons_phone.png": "5da2c54af91f8b98b85dbe50d7cd71d0",
"assets/assets/Group.png": "89afc261e0d8afaaaadedc0f2581f281",
"assets/assets/Line111.png": "b3525fc008d7baa5e8ed1cb13ef952de",
"assets/assets/information.png": "ec200b7257bbb794549978ede1c18c7e",
"assets/assets/United.png": "081342e79f1e0d558b45b2e577edeb82",
"assets/assets/Finex.png": "3ad4881615371d603f6362339aa63ebc",
"assets/assets/BrokenLine.png": "751c8bfee6f4c10710da30a45e72e77a",
"assets/assets/backgroundImage.png": "e7e42b6f6e66ab0605a557bd09de20dc",
"assets/assets/minibus.png": "2189c9eb089afa0e04e198adf7ba45ff",
"assets/assets/logos_whatsapp-icon.png": "ee5662ca610d8de8cb6c058370494377",
"assets/assets/Language.png": "759e8fe306c1a84a7314e4f3f2a8c4d4",
"assets/assets/Line.png": "55edff14c46c74fc20abe9bba2fafa00",
"assets/assets/fonts/Roboto-Medium.ttf": "6679d67d72e0e7b34f407bac6df715ab",
"assets/assets/fonts/Roboto-Light.ttf": "5b55e48d4daee5634648dd487340e37e",
"assets/assets/fonts/Roboto-Regular.ttf": "327362a7c8d487ad3f7970cc8e2aba8d",
"assets/assets/Line222.png": "e69e2c48e9e82a070d33cf26cef73aa5",
"assets/assets/arrowBack.png": "945cf529ed93d37610508f6909bc50ba",
"assets/assets/Logo33.png": "ddacee49aed0b4c9c9ccbe4dab0526d0",
"assets/assets/FullLogo.png": "70cc2d617b4cb2e4130ff60438bd9b9a",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
