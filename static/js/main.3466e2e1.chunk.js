(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{40:function(e,a,t){e.exports=t.p+"static/media/solo_dev.934765e2.jpeg"},43:function(e,a,t){e.exports=t(77)},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},58:function(e,a,t){},76:function(e,a,t){},77:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(17),c=t.n(o),i=(t(48),t(23)),r=(t(49),t(16)),s=t(3),m=(t(50),t(38)),u=t.n(m);var v=function(e){var a=e.displayMenu;return l.a.createElement("div",null,l.a.createElement("div",{className:"header"},l.a.createElement(u.a,{onClick:function(t){e.toggleMenu(!a)},className:"hamburger__menu"}),l.a.createElement("nav",{className:"router__nav"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(r.b,{exact:!0,activeClassName:"nav__link__active",to:"/portfolio/",className:"nav__link"},"Home")),l.a.createElement("li",null,l.a.createElement(r.b,{activeClassName:"nav__link__active",to:"/portfolio/about",className:"nav__link"},"About Me")),l.a.createElement("li",null,l.a.createElement(r.b,{activeClassName:"nav__link__active",to:"/portfolio/projects",className:"nav__link"},"Projects")),l.a.createElement("li",null,l.a.createElement(r.b,{activeClassName:"nav__link__active",to:"/portfolio/skills",className:"nav__link"},"Skills")),l.a.createElement("li",null,l.a.createElement(r.b,{activeClassName:"nav__link__active",to:"/portfolio/contact",className:"nav__link"},"Contact"))))))},p=(t(58),t(39)),_=t.n(p),E=t(40),d=t.n(E),f=t(92);var h=function(){var e=Object(n.useState)({avatar:"",bio:"",email:"",name:"",location:""}),a=Object(i.a)(e,2),t=(a[0],a[1]);return Object(n.useEffect)((function(){_.a.get("https://api.github.com/users/ayushpandey8439").then((function(e){t({avatar:e.data.avatar_url,name:e.data.name,bio:e.data.bio})}))}),[]),l.a.createElement("div",{className:"body__container"},l.a.createElement("div",{className:"text"},l.a.createElement("div",{className:"hello__world"},"<HELLO WORLD>"),l.a.createElement("div",{className:"pitch"},"My Name is Ayush Pandey.",l.a.createElement("br",null),"I'm a Full Stack Developer",l.a.createElement("br",null),"born in India and I am in Germany at the moment"),l.a.createElement("div",null,l.a.createElement(f.a,{className:"contact__button",href:"/portfolio/contact"},"Contact Me"))),l.a.createElement("div",{className:"image"},l.a.createElement("img",{src:d.a,alt:"Developer on a chair",className:"developer_image"})))};t(76);var b=function(){return l.a.createElement("div",{className:"about__Container"},"This is the About page")};var N=function(){var e=Object(n.useState)({displayMenu:!1}),a=Object(i.a)(e,2),t=a[0],o=a[1];return l.a.createElement("div",{className:"App"},l.a.createElement(r.a,null,l.a.createElement(v,{displayMenu:t.displayMenu,toggleMenu:function(){o({displayMenu:!t.displayMenu})}}),l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"/portfolio",component:h}),l.a.createElement(s.a,{path:"/portfolio/contact"}),l.a.createElement(s.a,{path:"/portfolio/about",component:b}),l.a.createElement(s.a,{path:"/portfolio/skills"}),l.a.createElement(s.a,{path:"/portfolio/projects"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.3466e2e1.chunk.js.map