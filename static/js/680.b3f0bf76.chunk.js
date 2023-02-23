"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[680],{4146:function(t,n,e){e.d(n,{O:function(){return w}});var r,a,i,o,c,u=e(168),s=e(1087),p=e(8789),d=(0,p.ZP)(s.rU)(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  text-decoration: none;\n\n  &:hover,\n  &:focus {\n    scale: 1.05;\n  }\n"]))),f=p.ZP.ul(a||(a=(0,u.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 4fr));\n  grid-gap: 15px;\n  margin: 0 auto;\n  padding: 0 15px;\n  list-style: none;\n  justify-content: center;\n  margin-top: 40px;\n"]))),l=p.ZP.li(i||(i=(0,u.Z)(["\n  background-repeat: no-repeat;\n  background-color: #16495b;\n  border-radius: 3px;\n  padding: 0px 0px 0px 0px;\n  font-size: 15px;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n"]))),h=p.ZP.img(o||(o=(0,u.Z)(["\n  width: 95%;\n  padding: 5px;\n"]))),g=p.ZP.p(c||(c=(0,u.Z)(["\n  font-size: 20px;\n  font-weight: 500;\n  text-align: center;\n  color: white;\n  margin-top: 15px;\n  padding: 0 7px;\n  margin-bottom: 22px;\n"]))),x=e(4488),m=e(184),v=function(t){return t?"https://image.tmdb.org/t/p/w500"+t:x},w=function(t){var n=t.movies,e=t.link,r=t.state;return(0,m.jsx)(f,{children:n.map((function(t){var n=t.id,a=t.title,i=t.poster_path;return e?(0,m.jsx)(l,{children:(0,m.jsxs)(d,{to:"".concat(e).concat(n),state:r,children:[(0,m.jsx)(h,{src:v(i),alt:a}),(0,m.jsx)(g,{children:a})]})},n):(0,m.jsx)(l,{children:(0,m.jsxs)(d,{to:"".concat(n),state:r,children:[(0,m.jsx)(h,{src:v(i),alt:a}),(0,m.jsx)(g,{children:a})]})},n)}))})}},680:function(t,n,e){e.r(n);var r=e(9439),a=e(4146),i=e(2791),o=e(1207),c=e(9637),u=e(184);n.default=function(){var t=(0,i.useState)([]),n=(0,r.Z)(t,2),e=n[0],s=n[1];return(0,i.useEffect)((function(){(0,o.e4)().then(s)}),[]),(0,u.jsxs)(c.b,{children:[(0,u.jsx)(c.D,{children:"Movies are trending today:"}),(0,u.jsx)(a.O,{movies:e,link:"movies/"})]})}},1207:function(t,n,e){e.d(n,{Ex:function(){return d},G0:function(){return s},e4:function(){return u},fV:function(){return f},ww:function(){return p}});var r=e(5861),a=e(4687),i=e.n(a),o=e(1912),c="d28587289cbb1fa464f22095b510f01a";o.Z.defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var t=(0,r.Z)(i().mark((function t(){var n,e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("trending/movie/day?api_key=".concat(c));case 2:return n=t.sent,e=n.data.results.map((function(t){return{id:t.id,title:t.title,poster_path:t.poster_path}})),t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(i().mark((function t(n){var e,r,a,u,s,p,d,f;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("movie/".concat(n,"?api_key=").concat(c));case 2:return e=t.sent,r=e.data,a=r.vote_average,u=r.title,s=r.overview,p=r.genres,d=r.poster_path,f=r.release_date,t.abrupt("return",{vote_average:a,title:u,overview:s,genres:p,poster_path:d,release_date:f});case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(i().mark((function t(n){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("movie/".concat(n,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return e=t.sent,r=e.data.cast.map((function(t){return{name:t.name,character:t.character,profile_path:t.profile_path,id:t.id}})),t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(i().mark((function t(n){var e,r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("movie/".concat(n,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return e=t.sent,r=e.data.results.map((function(t){return{id:t.id,author:t.author,content:t.content,author_details:t.author_details}})),t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(t){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&language=en-US&page=1&query=").concat(t)).then((function(t){return t.json()})).then((function(t){return t.results.map((function(t){return{id:t.id,title:t.title,poster_path:t.poster_path}}))}))}},4488:function(t,n,e){t.exports=e.p+"static/media/image1.095666c2a8c2b03416de.jpg"}}]);
//# sourceMappingURL=680.b3f0bf76.chunk.js.map