(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{44:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),c=s(16),r=s.n(c),i=s(5),o=s.n(i),m=s(17),l=s(6),j=(s(7),s(18)),u=s.n(j),d=s(0),v=function(e){var t=e.movie;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"movie",children:[Object(d.jsx)("img",{src:t.medium_cover_image,alt:t.title,title:t.title}),Object(d.jsxs)("div",{className:"movie__data",children:[Object(d.jsx)("h3",{className:"movie__title",children:t.title}),Object(d.jsx)("h5",{className:"movie__year",children:t.year}),Object(d.jsx)("ul",{className:"movie__genres",children:t.genres.map((function(e,t){return Object(d.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(d.jsx)("p",{className:"movie__summary",children:t.summary})]})]})})};var b=function(){var e=n.a.useState(!0),t=Object(l.a)(e,2),s=t[0],a=t[1],c=n.a.useState([]),r=Object(l.a)(c,2),i=r[0],j=r[1],b=function(){var e=Object(m.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=e.sent,j(t.data.data.movies),a(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n.a.useEffect((function(){b()})),Object(d.jsx)("section",{className:"container",children:s?Object(d.jsx)("div",{className:"loader",children:Object(d.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(d.jsx)("div",{className:"movies",children:i.map((function(e){return Object(d.jsx)(v,{movie:e},e.id)}))})})};r.a.render(Object(d.jsx)(b,{}),document.getElementById("root"))},7:function(e,t,s){}},[[44,1,2]]]);
//# sourceMappingURL=main.598dd55b.chunk.js.map