(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+5i3":function(e,t,r){},"8+s/":function(e,t,r){"use strict";var n,a=r("q1tI"),o=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):r&&(l=r(l))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return l},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},i.render=function(){return o.createElement(n,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",c),f}}},B6Jk:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n);t.a=function(e){var t=e.width,r=e.height,n=e.color,o=e.customClasses;return a.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fal","data-icon":"times",role:"img",viewBox:"0 0 320 512",className:"svg-inline--fa fa-times fa-w-10 fa-3x "+o,width:t,height:r},a.a.createElement("path",{fill:n,d:"M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"}))}},Bl7J:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("Wbzz");function i(e,t,r,n,a,o,i){try{var c=e[o](i),l=c.value}catch(s){return void r(s)}c.done?t(l):Promise.resolve(l).then(n,a)}var c=r("o0o1"),l=r.n(c),s=r("B6Jk"),u=function(e){var t=e.setDrawerStatus;return a.a.createElement("button",{className:"has-text-white",onClick:function(){return t(!0)}},a.a.createElement("img",{loading:"lazy",src:"/menu.png",width:"30px",alt:"Menú"}))},f=function(e){e.siteTitle;var t=e.drawerStatus,r=e.setDrawerStatus,n=e.goTo;return a.a.createElement("div",{className:"navbar--drawer",style:{width:t?"100%":"0",left:t?"0":"-100%"}},a.a.createElement("button",{className:"navbar--drawer__button",onClick:function(){return r(!1)}},a.a.createElement(s.a,{color:"#cfb385",width:"25px"})),a.a.createElement("button",{onClick:function(){return n("/")},className:"navbar--drawer__title"},a.a.createElement("img",{src:"/logo.png",alt:"CoolHunter"})),a.a.createElement("div",{className:"navbar--drawer__menu"},a.a.createElement("button",{onClick:function(){return n("work")},className:"navbar-item"},a.a.createElement("span",{className:"navbar-item--content"},"Work")),a.a.createElement("button",{onClick:function(){return n("network")},className:"navbar-item"},a.a.createElement("span",{className:"navbar-item--content"},"Network")),a.a.createElement("button",{onClick:function(){return n("updates")},className:"navbar-item"},a.a.createElement("span",{className:"navbar-item--content"},"Update")),a.a.createElement("button",{onClick:function(){return n("contact")},className:"navbar-item"},a.a.createElement("span",{className:"navbar-item--content"},"Contact"))))},h=function(e){var t=e.siteTitle,r=Object(n.useState)(null),c=r[0],s=r[1],h=function(){var e,t=(e=l.a.mark((function e(t){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r="undefined"!=typeof window?window.location.pathname:"",console.log("location is: ",r),"/"!==r?(Object(o.navigate)("/"),setTimeout((function(){document.getElementById(t).scrollIntoView({behavior:"smooth"})}),1e3)):document.getElementById(t).scrollIntoView({behavior:"smooth"}),s(!1);case 4:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function c(e){i(o,n,a,c,l,"next",e)}function l(e){i(o,n,a,c,l,"throw",e)}c(void 0)}))});return function(e){return t.apply(this,arguments)}}();return a.a.createElement("nav",{className:"navbar is-dark"},a.a.createElement("div",{className:"navbar-brand"},a.a.createElement("span",{className:"navbar-item pl-5"},a.a.createElement(u,{setDrawerStatus:s})),a.a.createElement("div",{className:"navbar-title-mobile has-text-centered pr-5"},a.a.createElement(o.Link,{to:"/",style:{textDecoration:"none",height:"fit-content",display:"flex",alignContent:"center",justifyContent:"center"}},a.a.createElement("img",{loading:"lazy",src:"/logo.png",height:"100%",alt:"COOL HUNTER"})))),a.a.createElement("div",{className:"navbar-title-desktop has-text-centered"},a.a.createElement(o.Link,{to:"/",style:{textDecoration:"none",height:"fit-content",display:"flex",alignContent:"center",justifyContent:"center"}},a.a.createElement("img",{loading:"lazy",src:"/logo.png",height:"100%",alt:"COOL HUNTER"}))),a.a.createElement("div",{className:"navbar-menu"},a.a.createElement("div",{className:"navbar-start"}),a.a.createElement("div",{className:"navbar-end"},a.a.createElement("button",{onClick:function(){return h("work")},className:"navbar-item"},a.a.createElement("span",{className:"navbar-item--content"},"Work")),a.a.createElement("button",{onClick:function(){return h("network")},className:"navbar-item"},a.a.createElement("span",{className:"navbar-item--content"},"Network")),a.a.createElement("button",{onClick:function(){return h("updates")},className:"navbar-item"},a.a.createElement("span",{className:"navbar-item--content"},"Update")),a.a.createElement("button",{onClick:function(){return h("contact")},className:"navbar-item"},a.a.createElement("span",{className:"navbar-item--content"},"Contact")))),a.a.createElement(f,{drawerStatus:c,setDrawerStatus:s,siteTitle:t,goTo:h}))};h.defaultProps={siteTitle:""};var p=h,m=r("PuzZ"),d=function(e){var t=e.width,r=e.height,n=e.customClasses,o=e.color;return a.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"facebook-square",className:"svg-inline--fa fa-facebook-square fa-w-14 "+n,width:t,height:r,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},a.a.createElement("path",{fill:o,d:"M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"}))},v=function(e){var t=e.width,r=e.height,n=e.customClasses,o=e.color;return a.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"twitter",className:"svg-inline--fa fa-twitter fa-w-16 "+n,width:t,height:r,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},a.a.createElement("path",{fill:o,d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}))},y=r("s76b"),g=function(e){var t=e.width,r=e.height,n=e.customClasses,o=e.color;return a.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"instagram",className:"svg-inline--fa fa-instagram fa-w-14 "+n,width:t,height:r,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},a.a.createElement("path",{fill:o,d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}))},w=function(){var e=(new Date).getFullYear();return a.a.createElement("footer",{className:"footer has-background-dark has-text-light",id:"contact"},a.a.createElement("div",{className:"container footer__content"},a.a.createElement("div",{className:"footer__content--brand"},a.a.createElement(o.Link,{to:"/",style:{textDecoration:"none",height:"fit-content",display:"flex",alignContent:"center",justifyContent:"start",padding:"5px 0"}},a.a.createElement("img",{loading:"lazy",src:"/logo-small.png",height:"100%",alt:"COOL HUNTER"}))),a.a.createElement("div",{className:"footer__content--title"},a.a.createElement("h2",{className:"is-size-5 is-size-4-desktop"},"Find out what ",a.a.createElement("b",null,"these hunters")," can do for your business.")),a.a.createElement("div",{className:"footer__content--email"},a.a.createElement("a",{className:"is-size-6 is-size-5-desktop",href:"mailto:contact@wearecoolhunter.com"},"contact@wearecoolhunter.com")),a.a.createElement("div",{className:"footer__content--address"},a.a.createElement("p",{className:"bold"},"Headquarters"),a.a.createElement("p",{className:"bold"},"BA, Argentina "),a.a.createElement("p",{className:"light"},"Arroyo 836, 9 D"),a.a.createElement("p",{className:"light"},"+54 4804 8216")),a.a.createElement("div",{className:"footer__content--maps"},a.a.createElement("a",{href:"https://goo.gl/maps/m6SNs1kSJyDHrtKx8",target:"_blank",rel:"noreferrer"},a.a.createElement("h4",{className:"is-size-5 has-text-white"},"Google Maps"),a.a.createElement(m.a,{width:"27px",color:"#B18667"}))),a.a.createElement("div",{className:"footer__content--social-media"},a.a.createElement("a",{href:"http://www.facebook.com/coolhunterar/",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(d,{color:"#B18667",width:"25px",height:"25px"})),a.a.createElement("a",{href:"http://www.twitter.com/CoolHunterAR",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(v,{color:"#B18667",width:"25px",height:"25px"})),a.a.createElement("a",{href:"http://www.linkedin.com/company/coolhunter",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(y.a,{color:"#B18667",width:"25px",height:"25px"})),a.a.createElement("a",{href:"http://www.instagram.com/coolhunterar",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(g,{color:"#B18667",width:"25px",height:"25px"})))),a.a.createElement("div",{className:"footer__copyright has-background-white"},a.a.createElement("p",null,"Copyright © ",e," COOL HUNTER")))},b=function(){return a.a.createElement("div",{className:"social-media--widget"},a.a.createElement("a",{href:"https://www.linkedin.com/company/coolhunter",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(y.a,{color:"#B18667",width:"25px",height:"25px"})),a.a.createElement("a",{href:"https://www.instagram.com/coolhunterar",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(g,{color:"#B18667",width:"25px",height:"25px"})))};r("+5i3"),t.a=function(e){var t=e.children,r=Object(o.useStaticQuery)("3649515864");return a.a.createElement(a.a.Fragment,null,a.a.createElement(p,{siteTitle:r.site.siteMetadata.title}),a.a.createElement("div",{style:{margin:"0",position:"relative"}},a.a.createElement(b,null),a.a.createElement("main",null,t)),a.a.createElement(w,null))}},PuzZ:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n);t.a=function(e){var t=e.width,r=e.height,n=e.customClasses,o=e.color;return a.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"long-arrow-right",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",className:"svg-inline--fa fa-long-arrow-right fa-w-14 fa-2x "+n,width:t,height:r},a.a.createElement("path",{fill:o,d:"M295.515 115.716l-19.626 19.626c-4.753 4.753-4.675 12.484.173 17.14L356.78 230H12c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h344.78l-80.717 77.518c-4.849 4.656-4.927 12.387-.173 17.14l19.626 19.626c4.686 4.686 12.284 4.686 16.971 0l131.799-131.799c4.686-4.686 4.686-12.284 0-16.971L312.485 115.716c-4.686-4.686-12.284-4.686-16.97 0z"}))}},bmMU:function(e,t){var r="undefined"!=typeof Element,n="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var c,l,s,u;if(Array.isArray(t)){if((c=t.length)!=i.length)return!1;for(l=c;0!=l--;)if(!e(t[l],i[l]))return!1;return!0}if(n&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(u=t.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;for(u=t.entries();!(l=u.next()).done;)if(!e(l.value[1],i.get(l.value[0])))return!1;return!0}if(a&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(u=t.entries();!(l=u.next()).done;)if(!i.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((c=t.length)!=i.length)return!1;for(l=c;0!=l--;)if(t[l]!==i[l])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((c=(s=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(i,s[l]))return!1;if(r&&t instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!t.$$typeof)&&!e(t[s[l]],i[s[l]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},ls82:function(e,t,r){var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(k){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),i=new x(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return O()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=l;var u={};function f(){}function h(){}function p(){}var m={};c(m,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(C([])));v&&v!==t&&r.call(v,a)&&(m=v);var y=p.prototype=f.prototype=Object.create(m);function g(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var n;this._invoke=function(a,o){function i(){return new t((function(n,i){!function n(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(f).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function T(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function C(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return h.prototype=p,c(y,"constructor",p),c(p,"constructor",h),h.displayName=c(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(w.prototype),c(w.prototype,o,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new w(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(y),c(y,i,"Generator"),c(y,a,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=C,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(T),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),T(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;T(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:C(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}(e.exports);try{regeneratorRuntime=n}catch(a){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},o0o1:function(e,t,r){e.exports=r("ls82")},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return de}));var n,a,o,i,c=r("17x9"),l=r.n(c),s=r("8+s/"),u=r.n(s),f=r("bmMU"),h=r.n(f),p=r("q1tI"),m=r.n(p),d=r("YVoz"),v=r.n(d),y="bodyAttributes",g="htmlAttributes",w="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(b).map((function(e){return b[e]})),"charset"),T="cssText",x="href",C="http-equiv",O="innerHTML",k="itemprop",N="name",A="property",S="rel",L="src",j="target",_={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",I="defer",M="encodeSpecialCharacters",z="onChangeClientState",B="titleTemplate",H=Object.keys(_).reduce((function(e,t){return e[_[t]]=t,e}),{}),R=[b.NOSCRIPT,b.SCRIPT,b.STYLE],q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},V=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},Y=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},G=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=$(e,b.TITLE),r=$(e,B);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=$(e,P);return t||n||void 0},W=function(e){return $(e,z)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return U({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[b.BASE]})).map((function(e){return e[b.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},Z=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+q(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],l=c.toLowerCase();-1===t.indexOf(l)||r===S&&"canonical"===e[r].toLowerCase()||l===S&&"stylesheet"===e[l].toLowerCase()||(r=l),-1===t.indexOf(c)||c!==O&&c!==T&&c!==k||(r=c)}if(!r||!e[r])return!1;var s=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][s]&&(a[r][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],l=v()({},n[c],a[c]);n[c]=l}return e}),[]).reverse()},$=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},X=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:e.requestAnimationFrame||X,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,h=e.titleAttributes;le(b.BODY,n),le(b.HTML,a),ce(f,h);var p={baseTag:se(b.BASE,r),linkTags:se(b.LINK,o),metaTags:se(b.META,i),noscriptTags:se(b.NOSCRIPT,c),scriptTags:se(b.SCRIPT,s),styleTags:se(b.STYLE,u)},m={},d={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(d[e]=p[e].oldTags)})),t&&t(),l(e,m,d)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),le(b.TITLE,t)},le=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var l=i[c],s=t[l]||"";r.getAttribute(l)!==s&&r.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var u=o.indexOf(l);-1!==u&&o.splice(u,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);a.length===o.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==i.join(",")&&r.setAttribute("data-react-helmet",i.join(","))}},se=function(e,t){var r=document.head||document.querySelector(b.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===O)r.innerHTML=t.innerHTML;else if(n===T)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[_[r]||r]=e[r],t}),t)},he=function(e,t,r){switch(e){case b.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,a=fe(r,n),[m.a.createElement(b.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=ue(r),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+G(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+G(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case y:case g:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=_[e]||e;if(r===O||r===T){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),m.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===O||e===T)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+G(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,h=e.titleAttributes;return{base:he(b.BASE,t,n),bodyAttributes:he(y,r,n),htmlAttributes:he(g,a,n),link:he(b.LINK,o,n),meta:he(b.META,i,n),noscript:he(b.NOSCRIPT,c,n),script:he(b.SCRIPT,l,n),style:he(b.STYLE,s,n),title:he(b.TITLE,{title:f,titleAttributes:h},n)}},me=u()((function(e){return{baseTag:Q([x,j],e),bodyAttributes:J(y,e),defer:$(e,I),encode:$(e,M),htmlAttributes:J(g,e),linkTags:Z(b.LINK,[S,x],e),metaTags:Z(b.META,[N,E,C,A,k],e),noscriptTags:Z(b.NOSCRIPT,[O],e),onChangeClientState:W(e),scriptTags:Z(b.SCRIPT,[L,O],e),styleTags:Z(b.STYLE,[T],e),title:K(e),titleAttributes:J(w,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),pe)((function(){return null})),de=(a=me,i=o=function(e){function t(){return D(this,t),Y(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!h()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:t};case b.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return U({},n,((t={})[r.type]=[].concat(n[r.type]||[],[U({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(n.type){case b.TITLE:return U({},a,((t={})[n.type]=i,t.titleAttributes=U({},o),t));case b.BODY:return U({},a,{bodyAttributes:U({},o)});case b.HTML:return U({},a,{htmlAttributes:U({},o)})}return U({},a,((r={})[n.type]=U({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=U({},t);return Object.keys(e).forEach((function(t){var n;r=U({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[H[r]||r]=e[r],t}),t)}(V(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=V(e,["children"]),n=U({},r);return t&&(n=this.mapChildrenToProps(t,n)),m.a.createElement(a,n)},F(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(m.a.Component),o.propTypes={base:l.a.object,bodyAttributes:l.a.object,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),defaultTitle:l.a.string,defer:l.a.bool,encodeSpecialCharacters:l.a.bool,htmlAttributes:l.a.object,link:l.a.arrayOf(l.a.object),meta:l.a.arrayOf(l.a.object),noscript:l.a.arrayOf(l.a.object),onChangeClientState:l.a.func,script:l.a.arrayOf(l.a.object),style:l.a.arrayOf(l.a.object),title:l.a.string,titleAttributes:l.a.object,titleTemplate:l.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);de.renderStatic=de.rewind}).call(this,r("yLpj"))},s76b:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n);t.a=function(e){var t=e.width,r=e.height,n=e.customClasses,o=e.color;return a.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"linkedin-in",className:"svg-inline--fa fa-linkedin-in fa-w-14 "+n,width:t,height:r,role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},a.a.createElement("path",{fill:o,d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"}))}},vrFN:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("qhky"),i=r("Wbzz");function c(e){var t=e.description,r=e.lang,n=e.meta,c=e.title,l=Object(i.useStaticQuery)("63159454").site,s=t||l.siteMetadata.description;return a.a.createElement(o.a,{htmlAttributes:{lang:r},title:"Home"===c?" Cool Hunter - Exploring new ways of doing business.":c,titleTemplate:"Home"!==c?"%s | "+l.siteMetadata.title:null,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(n)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c},yLpj:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"==typeof window&&(r=window)}e.exports=r}}]);
//# sourceMappingURL=commons-3ca752990f08cddbb72e.js.map