"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[852],{4146:function(t,e,n){n.d(e,{O:function(){return b}});var r,o,a,i,s,c=n(168),u=n(1087),l=n(8789),d=(0,l.ZP)(u.rU)(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  text-decoration: none;\n\n  &:hover,\n  &:focus {\n    scale: 1.05;\n  }\n"]))),f=l.ZP.ul(o||(o=(0,c.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 4fr));\n  grid-gap: 15px;\n  margin: 0 auto;\n  padding: 0 15px;\n  list-style: none;\n  justify-content: center;\n  margin-top: 40px;\n"]))),p=l.ZP.li(a||(a=(0,c.Z)(["\n  background-repeat: no-repeat;\n  background-color: #16495b;\n  border-radius: 3px;\n  padding: 0px 0px 0px 0px;\n  font-size: 15px;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n"]))),m=l.ZP.img(i||(i=(0,c.Z)(["\n  width: 95%;\n  padding: 5px;\n"]))),v=l.ZP.p(s||(s=(0,c.Z)(["\n  font-size: 20px;\n  font-weight: 500;\n  text-align: center;\n  color: white;\n  margin-top: 15px;\n  padding: 0 7px;\n  margin-bottom: 22px;\n"]))),g=n(4488),h=n(184),y=function(t){return t?"https://image.tmdb.org/t/p/w500"+t:g},b=function(t){var e=t.movies,n=t.link,r=t.state;return(0,h.jsx)(f,{children:e.map((function(t){var e=t.id,o=t.title,a=t.poster_path;return n?(0,h.jsx)(p,{children:(0,h.jsxs)(d,{to:"".concat(n).concat(e),state:r,children:[(0,h.jsx)(m,{src:y(a),alt:o}),(0,h.jsx)(v,{children:o})]})},e):(0,h.jsx)(p,{children:(0,h.jsxs)(d,{to:"".concat(e),state:r,children:[(0,h.jsx)(m,{src:y(a),alt:o}),(0,h.jsx)(v,{children:o})]})},e)}))})}},5852:function(t,e,n){n.r(e),n.d(e,{default:function(){return ct}});var r=n(9439),o=n(2791),a=n(1087),i=n(7689),s=n(4146),c=n(1207),u=n(9142);function l(t,e,n){return(e=(0,u.Z)(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var m=n(3433);function v(t){var e,n,r="";if("string"==typeof t||"number"==typeof t)r+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=v(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}var g=function(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=v(t))&&(r&&(r+=" "),r+=e);return r},h=["theme","type"],y=["delay","staleId"],b=function(t){return"number"==typeof t&&!isNaN(t)},E=function(t){return"string"==typeof t},T=function(t){return"function"==typeof t},x=function(t){return E(t)||T(t)?t:null},_=function(t){return(0,o.isValidElement)(t)||E(t)||T(t)||b(t)};function w(t){var e=t.enter,n=t.exit,r=t.appendPosition,a=void 0!==r&&r,i=t.collapse,s=void 0===i||i,c=t.collapseDuration,u=void 0===c?300:c;return function(t){var r=t.children,i=t.position,c=t.preventExitTransition,l=t.done,d=t.nodeRef,f=t.isIn,p=a?"".concat(e,"--").concat(i):e,v=a?"".concat(n,"--").concat(i):n,g=(0,o.useRef)(0);return(0,o.useLayoutEffect)((function(){var t,e=d.current,n=p.split(" "),r=function t(r){var o;r.target===d.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",t),e.removeEventListener("animationcancel",t),0===g.current&&"animationcancel"!==r.type&&(o=e.classList).remove.apply(o,(0,m.Z)(n)))};(t=e.classList).add.apply(t,(0,m.Z)(n)),e.addEventListener("animationend",r),e.addEventListener("animationcancel",r)}),[]),(0,o.useEffect)((function(){var t=d.current,e=function e(){t.removeEventListener("animationend",e),s?function(t,e,n){void 0===n&&(n=300);var r=t.scrollHeight,o=t.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(e,n)}))}))}(t,l,u):l()};f||(c?e():(g.current=1,t.className+=" ".concat(v),t.addEventListener("animationend",e)))}),[f]),o.createElement(o.Fragment,null,r)}}function O(t,e){return{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}}var C={list:new Map,emitQueue:new Map,on:function(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off:function(t,e){if(e){var n=this.list.get(t).filter((function(t){return t!==e}));return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit:function(t){var e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit:function(t){var e=arguments,n=this;this.list.has(t)&&this.list.get(t).forEach((function(r){var o=setTimeout((function(){r.apply(void 0,(0,m.Z)([].slice.call(e,1)))}),0);n.emitQueue.has(t)||n.emitQueue.set(t,[]),n.emitQueue.get(t).push(o)}))}},I=function(t){var e=t.theme,n=t.type,r=p(t,h);return o.createElement("svg",f({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===e?"currentColor":"var(--toastify-icon-color-".concat(n,")")},r))},k={info:function(t){return o.createElement(I,f({},t),o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return o.createElement(I,f({},t),o.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return o.createElement(I,f({},t),o.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return o.createElement(I,f({},t),o.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return o.createElement("div",{className:"Toastify__spinner"})}};function L(t){var e=(0,o.useReducer)((function(t){return t+1}),0),n=(0,r.Z)(e,2)[1],a=(0,o.useState)([]),i=(0,r.Z)(a,2),s=i[0],c=i[1],u=(0,o.useRef)(null),l=(0,o.useRef)(new Map).current,d=function(t){return-1!==s.indexOf(t)},v=(0,o.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:d,getToast:function(t){return l.get(t)}}).current;function g(t){var e=t.containerId;!v.props.limit||e&&v.containerId!==e||(v.count-=v.queue.length,v.queue=[])}function h(t){c((function(e){return null==t?[]:e.filter((function(e){return e!==t}))}))}function w(){var t=v.queue.shift();L(t.toastContent,t.toastProps,t.staleId)}function I(t,e){var r=e.delay,a=e.staleId,i=p(e,y);if(_(t)&&!function(t){return!u.current||v.props.enableMultiContainer&&t.containerId!==v.props.containerId||l.has(t.toastId)&&null==t.updateId}(i)){var s=i.toastId,c=i.updateId,d=i.data,m=v.props,g=function(){return h(s)},I=null==c;I&&v.count++;var P,j,Z=f(f(f({},m),{},{style:m.toastStyle,key:v.toastKey++},i),{},{toastId:s,updateId:c,data:d,closeToast:g,isIn:!1,className:x(i.className||m.toastClassName),bodyClassName:x(i.bodyClassName||m.bodyClassName),progressClassName:x(i.progressClassName||m.progressClassName),autoClose:!i.isLoading&&(P=i.autoClose,j=m.autoClose,!1===P||b(P)&&P>0?P:j),deleteToast:function(){var t=O(l.get(s),"removed");l.delete(s),C.emit(4,t);var e=v.queue.length;if(v.count=null==s?v.count-v.displayedToast:v.count-1,v.count<0&&(v.count=0),e>0){var r=null==s?v.props.limit:1;if(1===e||1===r)v.displayedToast++,w();else{var o=r>e?e:r;v.displayedToast=o;for(var a=0;a<o;a++)w()}}else n()}});Z.iconOut=function(t){var e=t.theme,n=t.type,r=t.isLoading,a=t.icon,i=null,s={theme:e,type:n};return!1===a||(T(a)?i=a(s):(0,o.isValidElement)(a)?i=(0,o.cloneElement)(a,s):E(a)||b(a)?i=a:r?i=k.spinner():function(t){return t in k}(n)&&(i=k[n](s))),i}(Z),T(i.onOpen)&&(Z.onOpen=i.onOpen),T(i.onClose)&&(Z.onClose=i.onClose),Z.closeButton=m.closeButton,!1===i.closeButton||_(i.closeButton)?Z.closeButton=i.closeButton:!0===i.closeButton&&(Z.closeButton=!_(m.closeButton)||m.closeButton);var N=t;(0,o.isValidElement)(t)&&!E(t.type)?N=(0,o.cloneElement)(t,{closeToast:g,toastProps:Z,data:d}):T(t)&&(N=t({closeToast:g,toastProps:Z,data:d})),m.limit&&m.limit>0&&v.count>m.limit&&I?v.queue.push({toastContent:N,toastProps:Z,staleId:a}):b(r)?setTimeout((function(){L(N,Z,a)}),r):L(N,Z,a)}}function L(t,e,n){var r=e.toastId;n&&l.delete(n);var o={content:t,props:e};l.set(r,o),c((function(t){return[].concat((0,m.Z)(t),[r]).filter((function(t){return t!==n}))})),C.emit(4,O(o,null==o.props.updateId?"added":"updated"))}return(0,o.useEffect)((function(){return v.containerId=t.containerId,C.cancelEmit(3).on(0,I).on(1,(function(t){return u.current&&h(t)})).on(5,g).emit(2,v),function(){l.clear(),C.emit(3,v)}}),[]),(0,o.useEffect)((function(){v.props=t,v.isToastActive=d,v.displayedToast=s.length})),{getToastToRender:function(e){var n=new Map,r=Array.from(l.values());return t.newestOnTop&&r.reverse(),r.forEach((function(t){var e=t.props.position;n.has(e)||n.set(e,[]),n.get(e).push(t)})),Array.from(n,(function(t){return e(t[0],t[1])}))},containerRef:u,isToastActive:d}}function P(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function j(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function Z(t){var e=(0,o.useState)(!1),n=(0,r.Z)(e,2),a=n[0],i=n[1],s=(0,o.useState)(!1),c=(0,r.Z)(s,2),u=c[0],l=c[1],d=(0,o.useRef)(null),f=(0,o.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,o.useRef)(t),m=t.autoClose,v=t.pauseOnHover,g=t.closeToast,h=t.onClick,y=t.closeOnClick;function b(e){if(t.draggable){"touchstart"===e.nativeEvent.type&&e.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",w),document.addEventListener("mouseup",O),document.addEventListener("touchmove",w),document.addEventListener("touchend",O);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=P(e.nativeEvent),f.y=j(e.nativeEvent),"x"===t.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(t.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===t.draggablePercent?1.5*t.draggablePercent:t.draggablePercent/100))}}function E(e){if(f.boundingRect){var n=f.boundingRect,r=n.top,o=n.bottom,a=n.left,i=n.right;"touchend"!==e.nativeEvent.type&&t.pauseOnHover&&f.x>=a&&f.x<=i&&f.y>=r&&f.y<=o?_():x()}}function x(){i(!0)}function _(){i(!1)}function w(e){var n=d.current;f.canDrag&&n&&(f.didMove=!0,a&&_(),f.x=P(e),f.y=j(e),f.delta="x"===t.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(t.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function O(){document.removeEventListener("mousemove",w),document.removeEventListener("mouseup",O),document.removeEventListener("touchmove",w),document.removeEventListener("touchend",O);var e=d.current;if(f.canDrag&&f.didMove&&e){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void t.closeToast();e.style.transition="transform 0.2s, opacity 0.2s",e.style.transform="translate".concat(t.draggableDirection,"(0)"),e.style.opacity="1"}}(0,o.useEffect)((function(){p.current=t})),(0,o.useEffect)((function(){return d.current&&d.current.addEventListener("d",x,{once:!0}),T(t.onOpen)&&t.onOpen((0,o.isValidElement)(t.children)&&t.children.props),function(){var t=p.current;T(t.onClose)&&t.onClose((0,o.isValidElement)(t.children)&&t.children.props)}}),[]),(0,o.useEffect)((function(){return t.pauseOnFocusLoss&&(document.hasFocus()||_(),window.addEventListener("focus",x),window.addEventListener("blur",_)),function(){t.pauseOnFocusLoss&&(window.removeEventListener("focus",x),window.removeEventListener("blur",_))}}),[t.pauseOnFocusLoss]);var C={onMouseDown:b,onTouchStart:b,onMouseUp:E,onTouchEnd:E};return m&&v&&(C.onMouseEnter=_,C.onMouseLeave=x),y&&(C.onClick=function(t){h&&h(t),f.canCloseOnClick&&g()}),{playToast:x,pauseToast:_,isRunning:a,preventExitTransition:u,toastRef:d,eventHandlers:C}}function N(t){var e=t.closeToast,n=t.theme,r=t.ariaLabel,a=void 0===r?"close":r;return o.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(t){t.stopPropagation(),e(t)},"aria-label":a},o.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},o.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function R(t){var e=t.delay,n=t.isRunning,r=t.closeToast,a=t.type,i=void 0===a?"default":a,s=t.hide,c=t.className,u=t.style,d=t.controlledProgress,p=t.progress,m=t.rtl,v=t.isIn,h=t.theme,y=s||d&&0===p,b=f(f({},u),{},{animationDuration:"".concat(e,"ms"),animationPlayState:n?"running":"paused",opacity:y?0:1});d&&(b.transform="scaleX(".concat(p,")"));var E=g("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(h),"Toastify__progress-bar--".concat(i),{"Toastify__progress-bar--rtl":m}),x=T(c)?c({rtl:m,type:i,defaultClassName:E}):g(E,c);return o.createElement("div",l({role:"progressbar","aria-hidden":y?"true":"false","aria-label":"notification timer",className:x,style:b},d&&p>=1?"onTransitionEnd":"onAnimationEnd",d&&p<1?null:function(){v&&r()}))}var M=function(t){var e=Z(t),n=e.isRunning,r=e.preventExitTransition,a=e.toastRef,i=e.eventHandlers,s=t.closeButton,c=t.children,u=t.autoClose,l=t.onClick,d=t.type,p=t.hideProgressBar,m=t.closeToast,v=t.transition,h=t.position,y=t.className,b=t.style,E=t.bodyClassName,x=t.bodyStyle,_=t.progressClassName,w=t.progressStyle,O=t.updateId,C=t.role,I=t.progress,k=t.rtl,L=t.toastId,P=t.deleteToast,j=t.isIn,M=t.isLoading,D=t.iconOut,S=t.closeOnClick,B=t.theme,z=g("Toastify__toast","Toastify__toast-theme--".concat(B),"Toastify__toast--".concat(d),{"Toastify__toast--rtl":k},{"Toastify__toast--close-on-click":S}),A=T(y)?y({rtl:k,position:h,type:d,defaultClassName:z}):g(z,y),F=!!I||!u,H={closeToast:m,type:d,theme:B},V=null;return!1===s||(V=T(s)?s(H):(0,o.isValidElement)(s)?(0,o.cloneElement)(s,H):N(H)),o.createElement(v,{isIn:j,done:P,position:h,preventExitTransition:r,nodeRef:a},o.createElement("div",f(f({id:L,onClick:l,className:A},i),{},{style:b,ref:a}),o.createElement("div",f(f({},j&&{role:C}),{},{className:T(E)?E({type:d}):g("Toastify__toast-body",E),style:x}),null!=D&&o.createElement("div",{className:g("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!M})},D),o.createElement("div",null,c)),V,o.createElement(R,f(f({},O&&!F?{key:"pb-".concat(O)}:{}),{},{rtl:k,theme:B,delay:u,isRunning:n,isIn:j,closeToast:m,hide:p,type:d,style:w,className:_,controlledProgress:F,progress:I||0}))))},D=function(t,e){return void 0===e&&(e=!1),{enter:"Toastify--animate Toastify__".concat(t,"-enter"),exit:"Toastify--animate Toastify__".concat(t,"-exit"),appendPosition:e}},S=w(D("bounce",!0)),B=(w(D("slide",!0)),w(D("zoom")),w(D("flip")),(0,o.forwardRef)((function(t,e){var n=L(t),r=n.getToastToRender,a=n.containerRef,i=n.isToastActive,s=t.className,c=t.style,u=t.rtl,l=t.containerId;function d(t){var e=g("Toastify__toast-container","Toastify__toast-container--".concat(t),{"Toastify__toast-container--rtl":u});return T(s)?s({position:t,rtl:u,defaultClassName:e}):g(e,x(s))}return(0,o.useEffect)((function(){e&&(e.current=a.current)}),[]),o.createElement("div",{ref:a,className:"Toastify",id:l},r((function(t,e){var n=e.length?f({},c):f(f({},c),{},{pointerEvents:"none"});return o.createElement("div",{className:d(t),style:n,key:"container-".concat(t)},e.map((function(t,n){var r=t.content,a=t.props;return o.createElement(M,f(f({},a),{},{isIn:i(a.toastId),style:f(f({},a.style),{},{"--nth":n+1,"--len":e.length}),key:"toast-".concat(a.key)}),r)})))})))})));B.displayName="ToastContainer",B.defaultProps={position:"top-right",transition:S,autoClose:5e3,closeButton:N,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var z,A=new Map,F=[],H=1;function V(){return""+H++}function q(t){return t&&(E(t.toastId)||b(t.toastId))?t.toastId:V()}function U(t,e){return A.size>0?C.emit(0,t,e):F.push({content:t,options:e}),e.toastId}function Q(t,e){return f(f({},e),{},{type:e&&e.type||t,toastId:q(e)})}function G(t){return function(e,n){return U(e,Q(t,n))}}function W(t,e){return U(t,Q("default",e))}W.loading=function(t,e){return U(t,Q("default",f({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},e)))},W.promise=function(t,e,n){var r,o=e.pending,a=e.error,i=e.success;o&&(r=E(o)?W.loading(o,n):W.loading(o.render,f(f({},n),o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(t,e,o){if(null!=e){var a=f(f(f({type:t},s),n),{},{data:o}),i=E(e)?{render:e}:e;return r?W.update(r,f(f({},a),i)):W(i.render,f(f({},a),i)),o}W.dismiss(r)},u=T(t)?t():t;return u.then((function(t){return c("success",i,t)})).catch((function(t){return c("error",a,t)})),u},W.success=G("success"),W.info=G("info"),W.error=G("error"),W.warning=G("warning"),W.warn=W.warning,W.dark=function(t,e){return U(t,Q("default",f({theme:"dark"},e)))},W.dismiss=function(t){A.size>0?C.emit(1,t):F=F.filter((function(e){return null!=t&&e.options.toastId!==t}))},W.clearWaitingQueue=function(t){return void 0===t&&(t={}),C.emit(5,t)},W.isActive=function(t){var e=!1;return A.forEach((function(n){n.isToastActive&&n.isToastActive(t)&&(e=!0)})),e},W.update=function(t,e){void 0===e&&(e={}),setTimeout((function(){var n=function(t,e){var n=e.containerId,r=A.get(n||z);return r&&r.getToast(t)}(t,e);if(n){var r=n.props,o=n.content,a=f(f(f({},r),e),{},{toastId:e.toastId||t,updateId:V()});a.toastId!==t&&(a.staleId=t);var i=a.render||o;delete a.render,U(i,a)}}),0)},W.done=function(t){W.update(t,{progress:1})},W.onChange=function(t){return C.on(4,t),function(){C.off(4,t)}},W.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},W.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},C.on(2,(function(t){z=t.containerId||t,A.set(z,t),F.forEach((function(t){C.emit(0,t.content,t.options)})),F=[]})).on(3,(function(t){A.delete(t.containerId||t),0===A.size&&C.off(0).off(1).off(5)}));var X,Y,K,J,$=n(168),tt=n(8789),et=tt.ZP.div(X||(X=(0,$.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100%;\n  margin: 0 auto;\n"]))),nt=tt.ZP.form(Y||(Y=(0,$.Z)(["\n  border-radius: 3px;\n  border: 1px solid #706d69;\n  color: white;\n  margin-bottom: 0px;\n  margin-left: 15px;\n  margin-right: 15px;\n  outline: none;\n  height: 27px;\n  padding: 5px 6px;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  border-radius: 3px;\n  overflow: hidden;\n  position: relative;\n  background-image: none;\n  background-color: #316282;\n"]))),rt=tt.ZP.input(K||(K=(0,$.Z)(["\n  color: #0e1c25;\n  font-size: 15px;\n  margin-top: 1px;\n  font-weight: 300;\n  border: none;\n  background-color: transparent;\n  color: white;\n  margin-top: 2px;\n  margin-left: 5px;\n  width: 100%;\n  outline: none;\n  line-height: 26px;\n"]))),ot=tt.ZP.button(J||(J=(0,$.Z)(["\n  position: absolute;\n  width: 25px;\n  height: 25px;\n  right: 2px;\n  top: 5px;\n  background: none;\n  border: none;\n  cursor: pointer;\n  background-image: url(https://store.akamai.steamstatic.com/public/images/v6/search_icon_btn.png);\n"]))),at=n(184),it=function(){var t,e=(0,a.lr)(),n=(0,r.Z)(e,2),o=n[0],i=n[1],s=null!==(t=o.get("search"))&&void 0!==t?t:"";return(0,at.jsx)(et,{children:(0,at.jsxs)(nt,{onSubmit:function(t){t.preventDefault();var e=t.target.elements.search.value.trim();e?(i({search:e}),t.currentTarget.reset()):W.info("Enter your search data \ud83d\udc96")},children:[(0,at.jsx)(rt,{type:"text",name:"search",autoComplete:"off",defaultValue:s,placeholder:"Search your movie by title"}),(0,at.jsx)(ot,{type:"submit"})]})})},st=n(9637),ct=function(){var t=(0,o.useState)([]),e=(0,r.Z)(t,2),n=e[0],u=e[1],l=(0,a.lr)(),d=(0,r.Z)(l,1)[0],f=(0,i.TH)(),p=d.get("search");return(0,o.useEffect)((function(){p&&((0,c.fV)(p).then((function(t){0===t.length&&W.warn('No result by "'.concat(p,'." Try something else')),u(t)})).catch((function(t){return console.log(t)})),(0,c.fV)())}),[p]),(0,at.jsxs)(st.b,{children:[(0,at.jsx)(B,{}),(0,at.jsx)(it,{}),n&&(0,at.jsx)(s.O,{movies:n,state:{from:f}})]})}},1207:function(t,e,n){n.d(e,{Ex:function(){return d},G0:function(){return u},e4:function(){return c},fV:function(){return f},ww:function(){return l}});var r=n(5861),o=n(4687),a=n.n(o),i=n(1912),s="d28587289cbb1fa464f22095b510f01a";i.Z.defaults.baseURL="https://api.themoviedb.org/3";var c=function(){var t=(0,r.Z)(a().mark((function t(){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("trending/movie/day?api_key=".concat(s));case 2:return e=t.sent,n=e.data.results.map((function(t){return{id:t.id,title:t.title,poster_path:t.poster_path}})),t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,r.Z)(a().mark((function t(e){var n,r,o,c,u,l,d,f;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("movie/".concat(e,"?api_key=").concat(s));case 2:return n=t.sent,r=n.data,o=r.vote_average,c=r.title,u=r.overview,l=r.genres,d=r.poster_path,f=r.release_date,t.abrupt("return",{vote_average:o,title:c,overview:u,genres:l,poster_path:d,release_date:f});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=t.sent,r=n.data.cast.map((function(t){return{name:t.name,character:t.character,profile_path:t.profile_path,id:t.id}})),t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(a().mark((function t(e){var n,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=t.sent,r=n.data.results.map((function(t){return{id:t.id,author:t.author,content:t.content,author_details:t.author_details}})),t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&language=en-US&page=1&query=").concat(t)).then((function(t){return t.json()})).then((function(t){return t.results.map((function(t){return{id:t.id,title:t.title,poster_path:t.poster_path}}))}))}},4488:function(t,e,n){t.exports=n.p+"static/media/image1.095666c2a8c2b03416de.jpg"}}]);
//# sourceMappingURL=852.25fddc68.chunk.js.map