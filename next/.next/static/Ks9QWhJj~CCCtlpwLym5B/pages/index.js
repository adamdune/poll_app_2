(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{20:function(e,t,n){e.exports=window.fetch||(window.fetch=n(25).default||n(25))},25:function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise(function(n,r){var a=new XMLHttpRequest;for(var o in a.open(t.method||"get",e,!0),t.headers)a.setRequestHeader(o,t.headers[o]);function c(){var e,t=[],n=[],r={};return a.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(a,o,c){t.push(o=o.toLowerCase()),n.push([o,c]),r[o]=(e=r[o])?e+","+c:c}),{ok:2==(a.status/100|0),status:a.status,statusText:a.statusText,url:a.responseURL,clone:c,text:function(){return Promise.resolve(a.responseText)},json:function(){return Promise.resolve(a.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([a.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}a.withCredentials="include"==t.credentials,a.onload=function(){n(c())},a.onerror=r,a.send(t.body||null)})}},382:function(e,t,n){__NEXT_REGISTER_PAGE("/",function(){return e.exports=n(383),{page:e.exports.default}})},383:function(e,t,n){"use strict";n.r(t);var r=n(15),a=n.n(r),o=n(0),c=n.n(o),l=n(14),s=n(55),u=n(56),i=n(57),p=n(20),m=n.n(p),f=n(4),y=n(41),d=n.n(y);function h(e,t,n,r,a,o,c){try{var l=e[o](c),s=l.value}catch(e){return void n(e)}l.done?t(s):Promise.resolve(s).then(r,a)}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){v(e,t,n[t])})}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=function(e){return c.a.createElement(l.a,null,c.a.createElement(u.a,{pathname:"/",query:b({},e.query),render:e.count>1}),Object(f.d)(e.polls)?c.a.createElement("div",{className:"center-align"},c.a.createElement("h3",null,"No polls are available at the moment.")):c.a.createElement(i.a,{polls:e.polls}),c.a.createElement(s.a,{pages:Math.ceil(e.count/10),currentPage:e.query.page?parseInt(e.query.page):1,pathname:"/",query:b({},e.query)}))};g.getInitialProps=function(){var e,t=(e=a.a.mark(function e(t){var n,r,o,c;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(n=t.query).title&&delete n.title,r=d.a.format({protocol:f.h.protocol,host:f.h.host,pathname:"/api/polls",query:n}),e.next=5,m()(r);case 5:return o=e.sent,e.next=8,o.json();case 8:return c=e.sent,console.log("fetch","index.js"),e.abrupt("return",{polls:c.polls,count:c.count,query:n});case 11:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function c(e){h(o,r,a,c,l,"next",e)}function l(e){h(o,r,a,c,l,"throw",e)}c(void 0)})});return function(e){return t.apply(this,arguments)}}(),t.default=g},55:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(3),c=n.n(o);function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){s(e,t,n[t])})}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.a=function(e){var t;if(e.pages>1){for(var n=[],r=1;r<=e.pages;r++)n.push(a.a.createElement("li",{className:"mx-1 ".concat(r===e.currentPage?"yellow accent-4 active":"waves-effect"),key:"pagination".concat(r)},a.a.createElement(c.a,{href:{pathname:e.pathname,query:l({},e.query,{page:r})}},a.a.createElement("a",{className:"black-text"},r))));t=a.a.createElement("ul",{className:"pagination center"},1===e.currentPage?a.a.createElement("li",{className:"disabled"},a.a.createElement("a",null,a.a.createElement("i",{className:"material-icons"},"chevron_left"))):a.a.createElement("li",{className:"waves-effect"},a.a.createElement(c.a,{href:{pathname:e.pathname,query:l({},e.query,{page:e.currentPage-1})}},a.a.createElement("a",null,a.a.createElement("i",{className:"material-icons"},"chevron_left")))),n,e.currentPage===e.pages?a.a.createElement("li",{className:"disabled"},a.a.createElement("a",{href:"#"},a.a.createElement("i",{className:"material-icons"},"chevron_right"))):a.a.createElement("li",{className:"waves-effect"},a.a.createElement(c.a,{href:{pathname:e.pathname,query:l({},e.query,{page:e.currentPage+1})}},a.a.createElement("a",null,a.a.createElement("i",{className:"material-icons"},"chevron_right")))))}else t=null;return a.a.createElement("div",null,t)}},56:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(3),c=n.n(o);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){u(e,t,n[t])})}return e}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,m(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,a.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){this.props.render&&M.Dropdown.init(document.querySelectorAll(".dropdown-trigger"),{constraintWidth:!1})}},{key:"render",value:function(){var e=this;return a.a.createElement("div",null,this.props.render?a.a.createElement("div",{className:"right-align m-3"},a.a.createElement("button",{className:"dropdown-trigger yellow black-text accent-3 btn","data-target":"dropdown-sort"},"Sort By",a.a.createElement("i",{className:"material-icons right"},"arrow_drop_down")),a.a.createElement("ul",{id:"dropdown-sort",className:"dropdown-content"},["Recently Created","Recently Voted","Most Voted"].map(function(t,n){var r=t.toLowerCase().replace(" ","_");return a.a.createElement("li",{key:"sort".concat(n),className:0!==n||e.props.query.sort?r===e.props.query.sort?"yellow accent-3":"":"yellow accent-3"},a.a.createElement(c.a,{href:{pathname:e.props.pathname,query:s({},e.props.query,{sort:r})}},a.a.createElement("a",{className:"black-text"},t)))}))):null)}}])&&i(n.prototype,r),o&&i(n,o),t}();t.a=y},57:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(3),c=n.n(o),l=n(4),s=function(e){return a.a.createElement(c.a,{href:"/poll/".concat(e.poll._id)},a.a.createElement("a",null,a.a.createElement("div",{className:"card grey lighten-5 z-depth-3 black-text"},a.a.createElement("div",{className:"card-content"},a.a.createElement("span",{className:"card-title"},e.poll.title),a.a.createElement("ul",{className:"collection"},e.poll.options.map(function(t,n){var r=Object(l.e)(t.vote,e.totalVote);return a.a.createElement("li",{className:"collection-item grey lighten-3",key:n},0===e.totalVote?a.a.createElement("div",{className:"row mb-0"},a.a.createElement("div",{className:"col s8 l9"},t.name),a.a.createElement("div",{className:"col s4 l3"},r)):a.a.createElement("div",{className:"row mb-0"},a.a.createElement("div",{className:"col s10"},t.name,a.a.createElement("div",{className:"progress white"},a.a.createElement("div",{className:"determinate \n                                                        ".concat(l.a[n%l.a.length]),style:{width:r.replace(/<|>/,"")}}))),a.a.createElement("div",{className:"col s2"},a.a.createElement("h6",null,r))))}))))))};t.a=function(e){return a.a.createElement("div",null,e.polls.map(function(e,t){var n=e.options.map(function(e){return e.vote}).reduce(function(e,t){return e+t});return a.a.createElement(s,{key:t,poll:e,totalVote:n})}))}}},[[382,1,0]]]);