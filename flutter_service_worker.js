'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "favicon-16x16.png": "56685469ac7e57a89c14403c31965252",
"version.json": "b3c25d78bb96f4352f7edc20a377d58b",
"favicon.ico": "8cb093256e0c3d2b35e0f65aef1c2b58",
"index.html": "eefe75d035f309258059de9ada132999",
"/": "eefe75d035f309258059de9ada132999",
"copy.js": "312455c6aa62d9a7865abe3796824f51",
"main.dart.js": "c1a4616f451d6a6eac0e1aa31b464837",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"favicon-96x96.png": "1db7af847e2a9c7554f4996fa1e2d538",
"manifest.json": "dead7662713742e940e88b8e7acf139e",
"main.dart.js_1.part.js": "d30f38e618bf513df3388698f87cb2d4",
"loading.html": "38c41603bb2d247828d99b121f4ab98d",
"assets/square_preview.png": "d7f622a4f958f3fa035df573766f7a68",
"assets/AssetManifest.json": "77baa48c5f9455e98d812c521327c448",
"assets/NOTICES": "ac776b9da2a47ace9b0f2e3b48525aeb",
"assets/emoticon/e001/icon.png": "146870cc3901a47a245be82b07145f5b",
"assets/emoticon/e001/0/meta.yaml": "e303ba28ea192e87354327e9762ba18f",
"assets/emoticon/e001/0/image.png": "8d4c907ffc7f47e292b71ddba6aeaf5e",
"assets/emoticon/e001/emoticonSet.png": "9571274db2091c66db7db689cb3b2779",
"assets/emoticon/e001/1/meta.yaml": "e303ba28ea192e87354327e9762ba18f",
"assets/emoticon/e001/1/image.png": "2842167ee34ba66b39e27a081d8141b5",
"assets/emoticon/e001/meta.yaml": "558aecc944039a87b75450fd56c7fddc",
"assets/emoticon/e001/3/meta.yaml": "e303ba28ea192e87354327e9762ba18f",
"assets/emoticon/e001/3/image.png": "ed8c29fcab6a71ea8e1bc04834d295cd",
"assets/emoticon/e001/2/meta.yaml": "e303ba28ea192e87354327e9762ba18f",
"assets/emoticon/e001/2/image.png": "c3936198fe59675d13163d6a663f6d67",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/square_logo.png": "fcef9a9a78e99e7173a26c95d3d94a31",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/skill/sprite/rocket/normal_fm_rocket_mini_bomb.png": "4a9cc6ac24c316871e550a09db9e9cc5",
"assets/assets/skill/sprite/rocket/normal_rocket_fm.png": "99ba5396e3f7e080447cf89075f147ae",
"assets/assets/skill/sprite/rocket/normal_roket_bomb.png": "3ac90e59b0bb8fa0c004c12b7b4aeefc",
"assets/assets/skill/sprite/rocket/adv_rocket/rocket_head_1.png": "b108c8431b8964bd4b9fce9f2b7515ae",
"assets/assets/default_image.png": "1e20629780d0b865e16c1e1dbdfe2ccf",
"assets/assets/image/pfp.png": "8d3df69e512cad58c9b19be769850934",
"assets/assets/image/rectangle.png": "57cbb0c0b6e7bdcb04471df0cc1f02da",
"assets/assets/appIcon/app_icon.png": "1db7af847e2a9c7554f4996fa1e2d538",
"assets/assets/new/icon/ico46BlockGy.png": "601070db2c84d202b2cdf5d7d34e3c8b",
"assets/assets/new/icon/ico-26-close-gy.png": "4257a92a6cb94ab04e539ced5b154f51",
"assets/assets/new/icon/chat-gy.png": "734d817403ef88e77f799c5ab4ba251e",
"assets/assets/new/icon/ico-46-x-bk.png": "68d3b00270b891b101938edef2204340",
"assets/assets/new/icon/ico-36-refresh-bk.png": "9b0393e70f55d91bc5587243d1019732",
"assets/assets/new/icon/telegram.png": "764b860c9945f84fe0c8063846e393e9",
"assets/assets/new/icon/more%2520(1).png": "48872501243cd173e89b04d1693ae5f2",
"assets/assets/new/icon/ico-36-storage-bk.png": "e25398753026d8a87b26e33219e7108a",
"assets/assets/new/icon/ico-46-picture-gy.png": "804bd7266b0de15c2b7f29b87c91602f",
"assets/assets/new/icon/ico36Klaytn.png": "5da5ef6c1adaf38f8068dde9dd4f2d67",
"assets/assets/new/icon/icoGoogle.png": "937c87b4439809d5b17b82728df09639",
"assets/assets/new/icon/ico36Ethereum.png": "571b1d0304749d33dfb7cdb94c6b0134",
"assets/assets/new/icon/ico36DownGy.png": "5f5f8647bd6a6327f16bf8950858fb09",
"assets/assets/new/icon/square_on.png": "22b32ff337f9650edfb1a40c569ab913",
"assets/assets/new/icon/icoKaikas.png": "e61047d146a506fd41b14f2dcc5426aa",
"assets/assets/new/icon/users_gy.png": "5aa8c62dec07fef8666967df8ed07f8a",
"assets/assets/new/icon/ico26PlusGray.png": "9fc6af50eac5c3fde566041b9fa3199e",
"assets/assets/new/icon/ico-46-plus-bk.png": "008dcb8f956d73be86f3fd521918d5cc",
"assets/assets/new/icon/icoMetamask.png": "8b5c34de92306bc4ef293c75bd6262f5",
"assets/assets/new/icon/ico-36-arrow-gy.png": "a0bb9eb637bbd24022078393c04275b5",
"assets/assets/new/icon/icoKlip.png": "6a4e77357d44d0204fa137b3c390226f",
"assets/assets/new/icon/more_gy.png": "b336927cd78f3b703e76d0396b23485f",
"assets/assets/new/icon/secret_lounge.png": "6d3ab977668369b426d07c0419478dbb",
"assets/assets/new/icon/ico36Tag2Gy.png": "0f54aa402f48333f6d40151222784751",
"assets/assets/new/icon/ico-36-copy-bk.png": "15e172bc596838307585984bf3e7983f",
"assets/assets/new/icon/right-arrow.png": "590aabee83199d846a31a35f12cc75fa",
"assets/assets/new/icon/ico36Gy.png": "b24b937568d981039f0c7f4434d7b0cf",
"assets/assets/new/icon/ico36TalkBla.png": "19d1b13060c2e0fa51cb98486c40a7e5",
"assets/assets/new/icon/ico-46-zoom-bk.png": "ed80fd17f055be2c815c3e0d7f7b04c6",
"assets/assets/new/icon/ico46TalkBe.png": "d5fd3e5c8155ea14a6b53bbc79827ce6",
"assets/assets/new/icon/icoKaikasBlue.png": "1e31734f577d91ddeaf83050b2a2d0b3",
"assets/assets/new/icon/chat-on.png": "31848eac465b5f92030f25a9fdda2848",
"assets/assets/new/icon/ico-46-sh-bk.png": "bd26755c080fd03e1a0ae302e07f03db",
"assets/assets/new/icon/ico-36-search-gy.png": "8fa03779c35f8228ac07e64dc4b03dbe",
"assets/assets/new/icon/ico-10-im.png": "0f777984bc39c104b98d4605a38355bd",
"assets/assets/new/icon/ico26FreGr.png": "9cc1c980b6b7f6800506b63c71ad3ea9",
"assets/assets/new/icon/ico-46-imti-gy.png": "856d57467aa94cc372ada63d56deb548",
"assets/assets/new/icon/ico36BlockBla.png": "c63c1b06f1bef20d12a8e6012dd24302",
"assets/assets/new/icon/image%2520(6).png": "bc5f3cb173fb7c392d4de08d11ee4c32",
"assets/assets/new/icon/ico-46-ch-be.png": "ae0a042c4d99584e75ec585b8660f9d0",
"assets/assets/new/icon/ico36Leave.png": "fc38b144cf1858305c217b2486fcc73f",
"assets/assets/new/icon/ico46BlockOffGy.png": "488c4b3d7ef43d312230f992268c251f",
"assets/assets/new/icon/upload.png": "217f22261e93b4a24c4502811bb93aff",
"assets/assets/new/icon/ico-46-close-we.png": "15d5f4d1203e9c1c8867121d30a336c7",
"assets/assets/new/icon/ico-36-qr-bk.png": "c5b6238726d9e5c3c04f28b1783b8dfc",
"assets/assets/new/icon/ico40Kakao.png": "53f1a0c31f64c5074b256c2cb4f9a06f",
"assets/assets/new/icon/twitter.png": "831734fd5a52a4b5699d8895eed056f2",
"assets/assets/new/icon/ico-46-camera-gy.png": "5c14bebe523407283b88088cfb58b23a",
"assets/assets/new/icon/discord.png": "e6c0ef4e84a16522e54ef24a31670370",
"assets/assets/new/icon/ico36Zoom2.png": "d44a6862c3e037be68d0d4a0650493cd",
"assets/assets/new/icon/share.png": "c0dc3f860ffc9911310a8f1cb68c7be7",
"assets/assets/new/icon/ico-46-re-gy.png": "0425cd81f73e6d8b68bb3bc465ea22bf",
"assets/assets/new/icon/ico46Fri2Be.png": "533ae02facada4cf76a603ea3ad738b4",
"assets/assets/new/icon/sync.png": "3b461984318953ead7724a7b5f7f8969",
"assets/assets/new/icon/ico-36-edit-gy.png": "df0d932197dd6996e9d66a780cf5ff8c",
"assets/assets/new/icon/ico-46-edit-gy.png": "517a37a548c6d56a14fe19063ad65538",
"assets/assets/new/icon/ico-46-download-we.png": "dfbf13c1e77eb16e17f519a794e996f1",
"assets/assets/new/icon/users_on.png": "e4b1fa6f5b85b3f0e2d9b05619b0be06",
"assets/assets/new/icon/ico-36-plus-gy.png": "84f4402402f9e3e03fd672e1d4cec00d",
"assets/assets/new/icon/ico-46-plus-gy.png": "ec41a19db62403d2f10e3d7fd353a59c",
"assets/assets/new/icon/ico46More.png": "9338ead9279a7826b8ef4db2447b398a",
"assets/assets/new/icon/ico-46-fri-be.png": "eacbda1be0152629af5becabcfa341bb",
"assets/assets/new/icon/ico-36-re-gy.png": "8f02ab1cf7fdaa3061d698cbe61629ce",
"assets/assets/new/icon/ico-46-minus-bk.png": "198a56cd3d2027ab0baf356fab76240b",
"assets/assets/new/icon/square_gy.png": "d12be9572c77c1066fd4f73642ba5fa6",
"assets/assets/new/icon/kakao.png": "4f1ccdd5e2f05f22ee609a69f64510e6",
"assets/assets/new/icon/more_on.png": "f66356de2bac9e54bcf29ffa59ff126d",
"assets/assets/new/icon/ico-h-26-ud-gy1.png": "d3dbdfc79deeda447b941a080b85e2c0",
"assets/assets/new/icon/line.png": "233491ed5d8180d6cec63ae655f1111f",
"assets/assets/new/icon/ico-h-26-ud-gy.png": "c1de2a62fb5c8acfde210b7411a60eaa",
"assets/assets/new/icon/icoKlipBlack.png": "fde62cd450cdc62d765acb79ea0ec318",
"assets/assets/new/icon/ico-36-fre-bk.png": "e4b1fa6f5b85b3f0e2d9b05619b0be06",
"assets/assets/new/icon/camera.png": "f837caabf82883f69b47e6d1c67f9357",
"assets/assets/new/icon/ico40Google.png": "45417f479738b3632d84009765b2605a",
"assets/assets/new/icon/scan.png": "47e25cd77fa99d096e39129e140dca2c",
"assets/assets/new/icon/smile.png": "391f86682e7c6d823cfa669e7e553f8b",
"assets/assets/new/icon/ico-46-arrow-bk.png": "e333e1d9c33a9e89e49c8dd6da37b23e",
"assets/assets/new/icon/ico-36-copy-gy.png": "ad0ade0548d453811f5ff383f989a9b5",
"assets/assets/new/icon/ico-40-x-gy.png": "4257a92a6cb94ab04e539ced5b154f51",
"assets/assets/new/icon/icoApple.png": "4e31474d8572a85567d718a3a245d27e",
"assets/assets/new/icon/ico40Facebook.png": "6dc9581fbf9373fd1dc72c42bd1943ba",
"assets/terms_of_service.html": "941b77bd44c4db77cd8c3fe2161b94dd",
"favicon-32x32.png": "af164f3f460f50c9c33d78881709ad1f",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
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
