"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","f27e85ee93167c1457893d53b3ce05d2"],["/static/css/main.8d20c67e.css","af4a52822c7e14ecc24bcd9a5d710763"],["/static/js/main.38012a47.js","42d7f08a4dd29a4740482353b102da1b"],["/static/media/blowoutcut.50e1ed95.jpg","50e1ed9579757153443de3f7f593f081"],["/static/media/braidandtwist.c825a06d.jpg","c825a06d83ab03a24adb59e8d71ffd99"],["/static/media/braidedpompadour.196b33db.jpg","196b33db23ba8c52d19ba17eda61973a"],["/static/media/braids.ef4f47b5.jpg","ef4f47b5730f395bd31d696e668c6e7b"],["/static/media/childrenbraids.a7f4b1f4.jpg","a7f4b1f488845f163feb0537c3333387"],["/static/media/cutcolor1.8aeacf8d.jpg","8aeacf8dcdc62655f249e0ca67c658a0"],["/static/media/cutcolor2.e6dc634b.jpg","e6dc634b4053c7d8baa444896a4daecf"],["/static/media/education1.7acd4ffb.jpg","7acd4ffbc5f834a5adcd251c81e3756a"],["/static/media/education2.7c90f669.png","7c90f66971da1369b31b82db5d94e8ae"],["/static/media/education3.12504076.png","1250407661372bde589eca204a78d796"],["/static/media/education4.717745fa.png","717745fa1eeb55386c87c4beee4e718c"],["/static/media/education5.76a1b3f9.png","76a1b3f963a96197826a82495766848a"],["/static/media/education6.e9c202de.png","e9c202deef3252b19fe5dd88cbbd5f93"],["/static/media/education7.73c1baf5.png","73c1baf5d02f471b3a935d38cf988b02"],["/static/media/extenstiontwist.90be56dc.jpg","90be56dce44b31ad5aabbb9510c44cda"],["/static/media/feedinextension.cd7f84fd.jpg","cd7f84fd8e8a1971153183105bf5b59b"],["/static/media/gab4.ee1dcb4c.jpg","ee1dcb4c236fc564a34d24893f99dd7c"],["/static/media/ghanabraids.aefc15fe.jpg","aefc15fe0a683df8f97c1a61939e7121"],["/static/media/giv1.14f1adbf.jpg","14f1adbf9a4df8e8093c211cb070386c"],["/static/media/kinkytwistext.c97c5c5b.jpg","c97c5c5b0e4115c82e1bd2234973c177"],["/static/media/kinkytwistextcurly.35259700.jpg","35259700c686214035dd42056bd6da36"],["/static/media/landpg2.89222a8e.jpg","89222a8e6f472e9ae08cb1ff15fee301"],["/static/media/locrefreshen.e99c05ef.jpg","e99c05efb49cc9fa62d8471a75c72b5f"],["/static/media/logo.a7eb366e.png","a7eb366e1ae1e616cbde3e5a10e6ca70"],["/static/media/longsinglebraids.aaba03f1.jpg","aaba03f195ea342ceb2ffbf4dfe021a0"],["/static/media/senegalesetwist.926d4910.jpg","926d491010061d7fa5d391902afc8853"],["/static/media/sewinextension.93075bd1.jpg","93075bd11170ef0a51becf31b7eb8191"],["/static/media/style1.b9e9a302.jpg","b9e9a302a6e87ac4b8a17ce30a6b5543"],["/static/media/style2.8c8e5a50.jpg","8c8e5a506f41cc79f852e1ac22b9624a"],["/static/media/style3.ab1cf15d.jpg","ab1cf15d833c3617784772eef19b30b2"],["/static/media/style4.bf6c65bd.jpg","bf6c65bd8af61620eca0771d60e7c403"],["/static/media/transitions1.0a9c9972.JPG","0a9c9972471cbbefa99a26a8415bfb37"],["/static/media/transitions2.16f9b045.JPG","16f9b045cd27b15d5c53b57cfd3f8552"],["/static/media/transitions3.77566cc0.JPG","77566cc02846468f23495b0ee0744ea7"],["/static/media/transitions4.bfb8bd9f.JPG","bfb8bd9fb5669bfd5b5bd44bd17305ac"],["/static/media/transitions5.1b02d528.JPG","1b02d5282cdcc00d33748e6e0d2dc127"],["/static/media/transitions6.26b19076.JPG","26b1907685cc9e1d25135bde7d9b1845"],["/static/media/transitions7.183302f5.JPG","183302f556281491b318f8cd8dfb7a04"],["/static/media/twistout.5ce2691b.jpg","5ce2691b935bb5c3c46cb9cd25d8bcaa"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});