(this["webpackJsonpmanganyaa-kny-react"]=this["webpackJsonpmanganyaa-kny-react"]||[]).push([[1],{13:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"d",(function(){return p})),t.d(n,"e",(function(){return g})),t.d(n,"c",(function(){return h}));var a=t(7),c=t(18),o=t(0),i=t(3),r={darkmode:function(){return!localStorage.getItem("darkmode")||JSON.parse(localStorage.getItem("darkmode"))},fullscreen:function(){return!!sessionStorage.getItem("fullscreen")&&JSON.parse(sessionStorage.getItem("fullscreen"))},mangaPageWidth:function(){return NaN!==Number(localStorage.getItem("mangaPageWidth"))&&0!==Number(localStorage.getItem("mangaPageWidth"))?Number(localStorage.getItem("mangaPageWidth")):70}},s=t(30),l=t(8),u=t(2),d=Object(o.createContext)(),p=function(e,n,t){var a=t?"https://".concat(t,".manganyaa.com"):l.isMainSite||t?"".concat(n):"https://manganyaa.com/".concat(n);return{en:"".concat(a,"/read-online-free-english"),es:"".concat(a,"/leer-online-gratis-espanol"),pt:"".concat(a,"/ler-online-gratis-portugues")}[e]},m=function(e,n,t,a,c){var o=t;if(c){var i=a?"https://".concat(a,".manganyaa.com"):l.isMainSite||a?"":"https://manganyaa.com";return(a?{en:"".concat(i,"/read-online-free-english/chapter/").concat(o),es:"".concat(i,"/leer-online-gratis-espanol/capitulo/").concat(o),pt:"".concat(i,"/ler-online-gratis-portugues/capitulo/").concat(o)}:{en:"".concat(i,"/").concat(n,"/read-online-free-english/chapter/").concat(o),es:"".concat(i,"/").concat(n,"/leer-online-gratis-espanol/capitulo/").concat(o),pt:"".concat(i,"/").concat(n,"/ler-online-gratis-portugues/capitulo/").concat(o)})[e]}var r=l.isMainSite?"".concat(n,"/"):"",s=a?"https://".concat(a,".manganyaa.com"):"";return(a?{en:"".concat(s,"/read-online-free-english/chapter/").concat(o),es:"".concat(s,"/leer-online-gratis-espanol/capitulo/").concat(o),pt:"".concat(s,"/ler-online-gratis-portugues/capitulo/").concat(o)}:{en:"".concat(s,"/").concat(r,"read-online-free-english/chapter/").concat(o),es:"".concat(s,"/").concat(r,"leer-online-gratis-espanol/capitulo/").concat(o),pt:"".concat(s,"/").concat(r,"ler-online-gratis-portugues/capitulo/").concat(o)})[e]},g=function(e,n,t,a){for(var o=[],i=function(i){var r=n[i],u=r.folderName;if(!u)return"continue";var d=s.find((function(e){return e.name===r.mangaName}))||{};o.push(Object(c.a)(Object(c.a)({},r),{},{descriptionImg:"".concat(u,"/description/1.jpg"),chLink:t?null:l.isMainSite&&a?p(e,u,d.subdomain):m(e,u,r.orderNumber.toString(),d.subdomain,a),mLink:p(e,u,d.subdomain)}))},r=0;r<n.length;r++)i(r);return o},h=function(e,n,t,a){for(var c={list:[]},o=0;o<t.length;o++){var i=t[o],r=i.orderNumber,s={orderNumber:r,pages:i.pages,url:m(e,n,r.toString())};0===o&&"Completed"!==a||c.list.push(s),o===t.length-1&&(c.first=s),"Completed"!==a?(1===o&&(c.last=s),0===o&&(c.upcoming=s)):0===o&&(c.last=s)}return c},f={en:t(24).eni18nGeneric,es:t(24).esi18nGeneric,pt:t(24).pti18nGeneric};n.b=function(e){var n=e.children,t=l.siteUrl,c=l.isMainSite,s=l.mainSiteUrl,p=Object(i.f)().pathname,m=function(e){var n="en";return e.includes("/es")||e.includes("leer")?n="es":(e.includes("/pt")||e.includes("ler"))&&(n="pt"),n}(p),g=function(e,n){return["/","/".concat(n),"/".concat(n,"/")].includes(e)?"home":e.includes("/popular")?"popular":e.includes("/random")?"random":e.includes("/last")||e.includes("/ultimos")?"last":e.includes("/new")||e.includes("/nuevo")||e.includes("/novo")?"new":e.includes("/genre")||e.includes("/genero")||e.includes("/g\xeanero")?"genre":e.includes("/mangaka")?"mangaka":e.includes("/chapter/")||e.includes("/capitulo/")?"chapter":"serie"}(p,m),h={en:f.en,es:f.es,pt:f.pt},b=Object(o.useState)((function(){return r.darkmode()})),j=Object(a.a)(b,2),v=j[0],O=j[1],x=Object(o.useState)((function(){return r.fullscreen()})),w=Object(a.a)(x,2),k=w[0],S=w[1],y={darkmode:v,fullscreen:k,set:{darkmodeOn:function(){return O(!0)},darkmodeOff:function(){return O(!1)},fullscreenOn:function(){return S(!0)},fullscreenOff:function(){return S(!1)}},siteMetadata:{lang:m,isMainSite:c,mainSiteUrl:s,page:g,homes:{en:c?"/en":"/read-online-free-english",es:c?"/es":"/leer-online-gratis-espanol",pt:c?"/pt":"/ler-online-gratis-portugues"},storage:{origin:"https://content.manganyaa.com",fullPath:"https://content.manganyaa.com/file/mnyaaa/"},currentPath:p,adsEnabled:!1},siteUrl:t,genericTranslations:h[m]};return Object(u.jsx)(d.Provider,{value:y,children:n})}},19:function(e,n,t){"use strict";var a=t(7),c=t(0),o=t(13),i=(t(59),t(2));n.a=function(e){var n=e.icon,t=e.name,r=e.children,s=e.click,l=void 0===s?function(){return!1}:s,u=Object(c.useContext)(o.a).genericTranslations,d=Object(c.useState)(!1),p=Object(a.a)(d,2),m=p[0],g=p[1],h=m?"visible":"hidden";return Object(i.jsxs)("div",{className:"nav-container",role:"button",tabIndex:0,"aria-label":u.translate,onClick:function(){if(r)return g(!m);l()},onKeyPress:function(e){13!==e.which&&13!==e.keyCode&&13!==e.code||g(!0)},onBlur:function(){return setTimeout((function(){return g(!1)}),300)},children:[n,r&&Object(i.jsx)("div",{className:"dropdownmenu ".concat(t," ").concat(h," bg100"),children:r})]})}},20:function(e,n,t){"use strict";t(0);var a=t(2);n.a=function(){return Object(a.jsx)("div",{style:{width:"100vw",display:"flex",justifyContent:"center"},children:Object(a.jsx)("div",{className:"loader"})})}},24:function(e,n,t){"use strict";t.r(n),t.d(n,"eni18nGeneric",(function(){return a})),t.d(n,"esi18nGeneric",(function(){return c})),t.d(n,"pti18nGeneric",(function(){return o}));var a={activate:"Activate",chapter:"Chapter",chap:"Chap",chaptersAvailables:"Chapters Availables",darkmode:"Dark Mode",deactivate:"Deactivate",homepage:"Homepage",lightmode:"Light Mode",filterChapters:"Filter chapters",fullscreen:"Fullscreen",read:"Read",nextChapter:"Next Chapter",prevChapter:"Previous Chapter",settings:"Settings",translate:"Switch language",otherPopularSeries:"Other Popular Series",in:"in",free:"Free"},c={activate:"Activar",chapter:"Capitulo",chap:"Cap",chaptersAvailables:"Capitulos Disponibles",darkmode:"Modo Oscuro",deactivate:"Desactivar",homepage:"Pagina de Inicio",lightmode:"Modo Claro",filterChapters:"Filtrar capitulos",fullscreen:"Pantalla Completa",read:"Leer",nextChapter:"Siguiente Capitulo",prevChapter:"Anterior Capitulo",settings:"Configuracion",translate:"Cambiar lenguaje",otherPopularSeries:"Otras Series Populares",in:"en",free:"Gratis"},o={activate:"Ativar",chapter:"Cap\xedtulo",chap:"Cap",chaptersAvailables:"Cap\xedtulos Dispon\xedveis",darkmode:"Modo Escuro",deactivate:"Desativar",homepage:"Pagina Inicial",lightmode:"Modo Claro",filterChapters:"Filtrar cap\xedtulos",fullscreen:"Tela Completa",read:"Ler",nextChapter:"Pr\xf3ximo Cap\xedtulo",prevChapter:"Cap\xedtulo Anterior",settings:"Configura\xe7\xf5es",translate:"Mudar idioma",otherPopularSeries:"Outras S\xe9ries Populares",in:"em",free:"Gr\xe1tis"}},26:function(e,n,t){"use strict";function a(){var e=document.documentElement;return e.requestFullscreen?(e.requestFullscreen(),!0):e.mozRequestFullScreen?(e.mozRequestFullScreen(),!0):e.webkitRequestFullscreen?(e.webkitRequestFullscreen(),!0):!!e.msRequestFullscreen&&(e.msRequestFullscreen(),!0)}function c(){return document.exitFullscreen?(document.exitFullscreen(),!0):document.mozCancelFullScreen?(document.mozCancelFullScreen(),!0):document.webkitExitFullscreen?(document.webkitExitFullscreen(),!0):!!document.msExitFullscreen&&(document.msExitFullscreen(),!0)}t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return c}))},30:function(e){e.exports=JSON.parse('[{"name":"Enen no Shouboutai","subdomain":"fireforce"},{"name":"Jujutsu Kaisen","subdomain":"jujutsukaisen"},{"name":"Kanojo, Okarishimasu","subdomain":"kanokari"},{"name":"Kimetsu no Yaiba","subdomain":"kny"},{"name":"Maou-jou de Oyasumi","subdomain":"maouoyasumi"},{"name":"Noblesse","subdomain":"noblesse"},{"name":"One Punch-Man","subdomain":"onepunchman"},{"name":"Shingeki no Kyojin","subdomain":"snk"},{"name":"Tonikaku Kawaii","subdomain":"tonikawa"},{"name":"Horimiya","subdomain":"horimiya"},{"name":"Dragon Ball Super","subdomain":"dbsuper"},{"name":"One Piece","subdomain":"onepiece"},{"name":"Solo Leveling","subdomain":"sololeveling"},{"name":"Tensei Shitara Slime Datta Ken","subdomain":"tensura"},{"name":"Ijiranaide, Nagatoro-san","subdomain":"nagatoro"},{"name":"Boku no Hero Academia","subdomain":"bokunohero"},{"name":"Black Clover","subdomain":"blackclover"},{"name":"Kawaii dake ja Nai Shikimori-san","subdomain":"shikimori"}]')},31:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var a=t(18),c=t(38),o=t(39),i=t(46),r=t(45),s=t(0),l=t(17),u=t(8),d=t(2),p=function(e){Object(i.a)(t,e);var n=Object(r.a)(t);function t(){return Object(c.a)(this,t),n.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e=u.isMainSite,n=this.props.to;return n.includes(".manganyaa")||!e?Object(d.jsx)("a",Object(a.a)({href:n.includes(".com")?n:"".concat(u.mainSiteUrl).concat(n)},this.props)):Object(d.jsx)(l.b,Object(a.a)({},this.props))}}]),t}(s.Component)},37:function(e){e.exports=JSON.parse('{"en":{"Android":"https://drive.google.com/file/d/1OsNU1rNdJ7UOwLKIsuMhgScWRb66SMk_/view?usp=sharing","Windows":"https://mega.nz/file/CnYEDZxS#k4xH61r5HxVwoHjjBNMsk9qNEZUkilKEjhabKK9lwPA","MacOS":"https://mega.nz/file/6ywQyajJ#gj7Dh1-FudXQjr25JP-nwkwRiQhbQRsGp3uAgiiQhEI","Linux":"https://mega.nz/file/K6IEWZ4C#lScGIX2VUx0BNMLVTv8a6ghI3i8DcU3KpR57-WKiJgs"},"es":{"Android":"https://drive.google.com/file/d/1OsNU1rNdJ7UOwLKIsuMhgScWRb66SMk_/view?usp=sharing","Windows":"https://mega.nz/file/TmQk2LqZ#MBlW06ZBJgD6N7WeyuKoZupecPy6j05xsFeP2JmU-Mw","MacOS":"https://mega.nz/file/7igCwSpR#Qcqu1slNwF5Sq_du7rK8GUYy-e7-jXZtMinhTNA1ZmY","Linux":"https://mega.nz/file/L2QiWDxS#l0xTOYu99apJAvfpgFxNeoZen6qHDavq-GI0UkDNi_k"},"pt":{"Android":"https://drive.google.com/file/d/1OsNU1rNdJ7UOwLKIsuMhgScWRb66SMk_/view?usp=sharing","Windows":"https://mega.nz/file/mmB2VTTS#DSFPI9-mGUwz01-Eq_wvmuNRH7GZozRg8LoXRHr2UTc","MacOS":"https://mega.nz/file/Hn4G2YDT#vhe_6O4MS4gXL0ELNmC1HoOcKjIi5HjeQSto0Ywv8FQ","Linux":"https://mega.nz/file/r7BkkLBR#YD1w1daLe9ZNLMRIrhYmu7N_G90HW6BEiIm_p40ZLDY"}}')},53:function(e,n,t){},59:function(e,n,t){},61:function(e,n,t){},63:function(e,n,t){},65:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),o=t(21),i=t.n(o),r=(t(53),t(17)),s=t(3);var l=function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;return new Promise((function(c,o){n().then(c).catch((function(i){setTimeout((function(){if(1===t)return o(i),void window.location.reload();e(n,t-1,a).then(c,o)}),a)}))}))},u=t(13),d=t(7);var p=function(e,n){var t=!1;return function(){t||(e.call(),t=!0,setTimeout((function(){t=!1}),n))}},m=function(){Object(a.useContext)(u.a).siteMetadata.page;var e="scroll-up",n="scroll-down",t=0;Object(a.useEffect)((function(){if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype){var a=[].slice.call(document.querySelectorAll(".undernav")),c=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&(document.body.classList.remove(e),document.body.classList.remove(n))}))}));a.forEach((function(e){c.observe(e)}))}function o(){var a=document.body,c=window.pageYOffset;c<=window.innerHeight/2||(c>t&&!a.classList.contains(n)?(a.classList.remove(e),a.classList.add(n)):c<t&&a.classList.contains(n)&&(a.classList.remove(n),a.classList.add(e)),t=c)}window.addEventListener("scroll",window.innerWidth<1200?p(o,250):o)}),[])},g=t(41),h=t.n(g),f=t(36),b=t.n(f),j=t(44),v=t.n(j),O=t(34),x=t.n(O),w=t(35),k=t.n(w),S=t(42),y=t.n(S),C=t(43),N=t.n(C),I=t(26),F=t(37),A=t(19),M=t(31),L=t(29),P=t.n(L),E=t(40);function W(e){var n=new Image;n.onload=n.onerror=function(){e(2==n.height)},n.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"}var U=t(2),T=function(){var e=Object(a.useState)("webp"),n=Object(d.a)(e,2),t=n[0],c=n[1];return Object(a.useEffect)((function(){function e(){return(e=Object(E.a)(P.a.mark((function e(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:W((function(e){e||c("jpg")}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(U.jsx)("div",{id:"hero",className:t})},R=(t(61),Object(a.lazy)((function(){return t.e(7).then(t.bind(null,140))}))),z=function(e){var n=e.children;m();var t=Object(a.useContext)(u.a),c=t.genericTranslations,o=t.darkmode,i=t.fullscreen,s=t.set,l=t.siteMetadata,p=l.lang,g=l.page,f=l.currentPath,j=l.homes,O=(l.mainSiteUrl,Object(a.useState)(!1)),w=Object(d.a)(O,2),S=w[0],C=w[1],L=Object(a.useState)("d"),P=Object(d.a)(L,2),E=P[0],W=P[1];Object(a.useEffect)((function(){o&&"d"!==E?W("d"):o||"l"===E||W("l")}),[o,E]),Object(a.useEffect)((function(){S&&C(!1)}),[f]);var z={MacOS:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.coding-dude.com%2Fwp%2Fwp-content%2Fuploads%2F2013%2F09%2Fapple.png&f=1&nofb=1",Linux:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftoppng.com%2Fuploads%2Fthumbnail%2Flinux-penguin-logo-vector-free-11574199918czvodo5n1d.png&f=1&nofb=1",Windows:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Faccessfirefox.org%2Fimages%2Findex_page%2FWindows-10-logo-larger.png&f=1&nofb=1",Android:"https://cdn2.iconfinder.com/data/icons/metro-uinvert-dock/256/OS_Android.png"},D={darkmode:o,fullscreen:i},K=[{name:"darkmode",Icon:x.a,onCallback:function(){return window.localStorage.setItem("darkmode","true")},offCallback:function(){return window.localStorage.setItem("darkmode","false")}},{name:"fullscreen",Icon:k.a,onCallback:I.b,offCallback:I.a}];return Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(T,{}),Object(U.jsxs)("div",{id:"L",className:"".concat(g," ").concat(E),style:{minHeight:"101vh"},children:[Object(U.jsx)("nav",{className:"navbar bg100",children:S?Object(U.jsx)(a.Suspense,{fallback:Object(U.jsx)("div",{className:"search-loader-container",children:Object(U.jsx)("div",{className:"loader",style:{marginTop:0}})}),children:Object(U.jsx)(R,{setShowSearch:C})}):Object(U.jsxs)(U.Fragment,{children:[Object(U.jsx)(M.a,{tabIndex:0,to:"/".concat(p),title:"Home",children:Object(U.jsx)(h.a,{})}),Object(U.jsx)(A.a,{icon:Object(U.jsx)(b.a,{alt:c.translate}),name:"search",click:function(){return C(!S)}}),Object(U.jsx)(A.a,{icon:Object(U.jsx)(y.a,{alt:c.translate}),name:"langs",children:[{code:"en",title:"English Site",text:"English",iconType:"svg"},{code:"es",title:"Sitio Espa\xf1ol",text:"Espa\xf1ol",iconType:"svg"},{code:"pt",title:"Site em Portugu\xeas",text:"Portugu\xeas",iconType:"webp"}].map((function(e){var n=e.code,t=e.title,a=e.text,c=e.iconType;return Object(U.jsxs)(r.b,{className:"option",tabIndex:0,to:j[n],title:t,hrefLang:n,rel:"alternate",children:["webp"===c?Object(U.jsxs)("picture",{children:[Object(U.jsx)("source",{srcSet:"/flags/".concat(n,".webp"),type:"image/webp"}),Object(U.jsx)("source",{srcSet:"/flags/".concat(n,".jpg"),type:"image/jpeg"}),Object(U.jsx)("img",{"data-src":"/flags/".concat(n,".jpg"),src:"",className:"lazy",alt:""})]}):Object(U.jsx)("img",{"data-src":"/flags/".concat(n,".").concat(c),src:"",className:"lazy",alt:"",role:"presentation"}),Object(U.jsx)("span",{children:a})]},t)}))}),Object(U.jsx)(A.a,{icon:Object(U.jsx)(N.a,{alt:"MangaNyaa Apps"}),name:"langs",children:Object.entries(F[p]).map((function(e){var n=Object(d.a)(e,2),t=n[0],a=n[1];return Object(U.jsxs)("a",{className:"option",tabIndex:0,href:a,title:"MangaNyaa ".concat(t," App"),onMouseDown:function(){return window.open(a,"_blank")},target:"_blank",rel:"noopener noreferrer",children:[Object(U.jsx)("img",{src:"",className:"lazy","data-src":z[t],alt:"",role:"presentation"}),Object(U.jsxs)("span",{style:{wordSpacing:50},children:[t," ","App"]})]},a)}))}),Object(U.jsx)(A.a,{icon:Object(U.jsx)(v.a,{alt:c.settings}),name:"settings",children:K.map((function(e){var n=e.name,t=e.Icon,a=e.onCallback,o=e.offCallback,i=function(){D[n]?(s["".concat(n,"Off")](),o()):(s["".concat(n,"On")](),a())};return Object(U.jsxs)("div",{className:"option ".concat(!0===D[n]?"on":"off"),role:"button",tabIndex:0,"aria-label":c[n],onMouseDown:i,onKeyPress:function(e){var n=e.which,t=e.keyCode,a=e.code;return(13===n||13===t||13===a)&&i()},title:D[n]?"".concat(c.deactivate," ").concat(c[n]):"".concat(c.activate," ").concat(c[n]),children:[Object(U.jsx)(t,{alt:!0===D[n]?"".concat(c.deactivate," ").concat(c[n]):"".concat(c.activate," ").concat(c[n])}),Object(U.jsx)("span",{children:c[n]})]},n)}))})]})}),Object(U.jsx)("div",{className:"undernav"}),n]})]})},D=t(20),K=(t(63),Object(a.lazy)((function(){return l((function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,139))}))}))),B=Object(a.lazy)((function(){return l((function(){return Promise.all([t.e(0),t.e(5),t.e(4)]).then(t.bind(null,138))}))}));function J(){return Object(U.jsx)(r.a,{children:Object(U.jsx)(u.b,{children:Object(U.jsx)(z,{children:Object(U.jsxs)(s.c,{children:[Object(U.jsx)(s.a,{path:["/chapter/:chId","/chapter/:chId/","/read-online-free-english/chapter/:chId","/read-online-free-english/chapter/:chId/","/leer-online-gratis-espanol/capitulo/:chId","/leer-online-gratis-espanol/capitulo/:chId/","/ler-online-gratis-portugues/capitulo/:chId","/ler-online-gratis-portugues/capitulo/:chId/"],children:Object(U.jsx)(a.Suspense,{fallback:Object(U.jsx)(D.a,{}),children:Object(U.jsx)(B,{})})}),Object(U.jsx)(s.a,{path:["/en","/en/","/read-online-free-english","/read-online-free-english/","/es","/es/","/leer-online-gratis-espanol","/leer-online-gratis-espanol/","/pt","/pt/","/ler-online-gratis-portugues","/ler-online-gratis-portugues/"],children:Object(U.jsx)(a.Suspense,{fallback:Object(U.jsx)(D.a,{}),children:Object(U.jsx)(K,{})})}),Object(U.jsx)(s.a,{path:"/",children:Object(U.jsx)(a.Suspense,{fallback:Object(U.jsx)(D.a,{}),children:Object(U.jsx)(K,{})})})]})})})})}var G=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var H=function(e){e&&e instanceof Function&&t.e(8).then(t.bind(null,137)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,o=n.getLCP,i=n.getTTFB;t(e),a(e),c(e),o(e),i(e)}))};i.a.render(Object(U.jsx)(c.a.StrictMode,{children:Object(U.jsx)(J,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");G?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):q(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):q(n,e)}))}}(),H(console.log)},8:function(e){e.exports=JSON.parse('{"siteUrl":"https://kny.manganyaa.com","folderName":"kimetsu-no-yaiba","isMainSite":false,"mainSiteUrl":"https://manganyaa.com"}')}},[[65,2,3]]]);