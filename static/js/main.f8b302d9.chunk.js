(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"image":"/images/ali.jpg"},{"id":2,"image":"/images/brady.jpg"},{"id":3,"image":"/images/farve.jpg"},{"id":4,"image":"/images/jordan.jpg"},{"id":5,"image":"/images/kobe.jpg"},{"id":6,"image":"/images/lebron.jpg"},{"id":7,"image":"/images/mayweather.jpg"},{"id":8,"image":"/images/silva.jpg"},{"id":9,"image":"/images/tyson.jpg"},{"id":10,"image":"/images/watt.jpg"}]')},,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(2),o=a.n(r),c=(a(14),a(3)),s=a(4),l=a(7),g=a(5),m=a(8),u=(a(15),function(e){return i.a.createElement("div",{className:"scoreBoard"},i.a.createElement("h3",{className:"header"},"Your Score: ",e.total),i.a.createElement("h3",{className:"status"},e.status))}),d=(a(16),function(e){return i.a.createElement("div",{className:"wrapper"},e.children)}),h=(a(17),function(e){return i.a.createElement("div",{className:"card img-container hover"},i.a.createElement("img",{alt:e.name,src:e.image,id:e.id,onClick:function(){return e.cardsuffle(e.id)},className:"shuffleScore"}))}),f=a(6),p=(a(18),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(i)))).state={character:f,score:0,highscore:10,message:"Click on Images to begin the game!"},a.cardsuffle=function(e){a.state.character[e-1].clicked?a.setState({message:"wrong guess, Try again!"}):a.setState({score:a.setState.score+=1,message:"Right guess!",character:a.state.character.sort((function(){return Math.random()-.5}))}),a.state.highscore<a.state.score&&a.setState({highscore:a.state.score})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement(u,{total:this.state.score,status:this.state.message,className:"App-header"},i.a.createElement("h1",{className:"App-title"},"The Clicky Game!"),i.a.createElement("p",{className:"App-intro"},"Click on Images to play the GAME!!!")),i.a.createElement("div",null),i.a.createElement(d,null,this.state.character.map((function(t){return i.a.createElement(h,{cardsuffle:e.cardsuffle,id:t.id,key:t.id,image:t.image})}))))}}]),t}(i.a.Component)),v=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(i.a.createElement(p,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Clicky-Game",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Clicky-Game","/service-worker.js");v?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):w(t,e)}))}}()}],[[9,1,2]]]);
//# sourceMappingURL=main.f8b302d9.chunk.js.map