"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/chriskimm1.github.io/index.html","0159cb6200288efb99d30bc7497a7a6c"],["/chriskimm1.github.io/static/css/main.bf02aff9.css","96aa29faedc740cb62154b21816b8b9d"],["/chriskimm1.github.io/static/js/main.d3cd1224.js","bc6ef7db69df576e4ad2a843f1771d3a"],["/chriskimm1.github.io/static/media/angular.db12f97b.svg","db12f97bda8cd0682f2c1daa1396daa3"],["/chriskimm1.github.io/static/media/aws.0292ec4e.svg","0292ec4ebac41c7e4107e34474814eaa"],["/chriskimm1.github.io/static/media/backbone.39eac6f4.svg","39eac6f48bf88a110cf4a56186a48c00"],["/chriskimm1.github.io/static/media/css3.a70a7e3e.svg","a70a7e3e545f3ddc5707d4c4da8cfa17"],["/chriskimm1.github.io/static/media/express.c3af8b67.svg","c3af8b67d896ace3528c7f109750e875"],["/chriskimm1.github.io/static/media/grunt.bf05268b.svg","bf05268b34fdd6b846e676d220ba058e"],["/chriskimm1.github.io/static/media/jasmine.87220f71.svg","87220f713630c403715767b24fd37dde"],["/chriskimm1.github.io/static/media/java.66517ded.svg","66517ded2b3a6bef72a9c7fc9a1fc931"],["/chriskimm1.github.io/static/media/javascript.de79c8f1.svg","de79c8f14c2b0d692ae215d7e6eccd54"],["/chriskimm1.github.io/static/media/mocha.14785336.svg","1478533601c8d628375a8cbb63c3d84a"],["/chriskimm1.github.io/static/media/mongo.52783a2f.svg","52783a2f8043e237279093badadc9cf1"],["/chriskimm1.github.io/static/media/node.ccb43d34.svg","ccb43d3400fb05951c89ad3ba6acd9d5"],["/chriskimm1.github.io/static/media/profile_pic.4bfeeefb.jpg","4bfeeefb0128021d5dd1b90ac830c15b"],["/chriskimm1.github.io/static/media/protractor.a297bd83.svg","a297bd833416ec803d9ea62eaed65e43"],["/chriskimm1.github.io/static/media/react.e9f3d01c.svg","e9f3d01c242e086f895bde131803b451"],["/chriskimm1.github.io/static/media/sass.88c10477.svg","88c1047792044b547d1d3e066d3e18c4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,i){var c=new URL(e);return i&&c.pathname.match(i)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],i=new URL(t,self.location),c=createCacheKey(i,hashParamName,a,/\.\w{8}\./);return[i.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var i=new Request(a,{credentials:"same-origin"});return fetch(i).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/chriskimm1.github.io/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});