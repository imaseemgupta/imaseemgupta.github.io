"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[22],{9074:function(n,e,r){r.d(e,{ZP:function(){return d},Vp:function(){return m}});var t=r(5893),o=r(7294),i=r(474),a=r(5357),c=r(34);function u(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function l(){var n=u(["\n  margin: 1em 0;\n  display: flex;\n  flex-wrap: wrap;\n"]);return l=function(){return n},n}function s(){var n=u(["\n  padding: 0.5em 1em;\n  border-radius: 2em;\n  background-color: transparent;\n  color: ",";\n  font-size: 1em;\n  border: 1px solid ",";\n  margin: 0.25em;\n  cursor: pointer;\n  transition: background-color 0.5s, color 0.5s;\n\n  &:hover {\n    background-color: ",";\n    color: ",';\n  }\n\n  &[data-active="true"] {\n    background-color: ',";\n    color: ",";\n  }\n"]);return s=function(){return n},n}function d(n){var e=(0,c.e0)(),r=e.selectedTags,i=e.toggleTag,a=(0,c.m8)(n);return{filteredItems:(0,o.useMemo)((function(){return function(n,e){return e.length>0?n.filter((function(n){return e.some((function(e){return(0,c.ak)(n.tags||[],e)}))})):n}(n,r)}),[n,r]),toggleTag:i,renderedFilterRow:(0,t.jsx)(f,{tags:a,selectedTags:r,toggleTag:i})}}function f(n){var e=n.tags,r=n.selectedTags,o=n.toggleTag,i=n.className;return(0,t.jsx)(g,{className:i,children:e.map((function(n){return(0,t.jsx)(m,{onClick:function(){return o(n)},"data-active":(0,c.ak)(r,n),children:(0,c.Ig)(n)},n)}))})}var g=i.Z.div(l()),m=i.Z.button(s(),a.I.Text_Disabled,a.I.Border,a.I.Background_Secondary,a.I.Accent,a.I.Accent,a.I.White)},1669:function(n,e,r){r.d(e,{$:function(){return u},D:function(){return l}});var t=r(474),o=r(5357);function i(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function a(){var n=i(["\n  padding: 6em 4em;\n  position: relative;\n  background-color: transparent;\n  background-size: cover;\n  background-position: center;\n"]);return a=function(){return n},n}function c(){var n=i(["\n  padding: 10em 4em;\n  background-color: ",";\n"]);return c=function(){return n},n}var u=t.Z.section(a()),l=(0,t.Z)(u)(c(),o.I.Background_Secondary)},34:function(n,e,r){r.d(e,{m8:function(){return a},e0:function(){return c},ak:function(){return u},Ig:function(){return l}});var t=r(7294);function o(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=[],t=!0,o=!1,i=void 0;try{for(var a,c=n[Symbol.iterator]();!(t=(a=c.next()).done)&&(r.push(a.value),!e||r.length!==e);t=!0);}catch(u){o=!0,i=u}finally{try{t||null==c.return||c.return()}finally{if(o)throw i}}return r}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function i(n){return function(n){if(Array.isArray(n)){for(var e=0,r=new Array(n.length);e<n.length;e++)r[e]=n[e];return r}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(n){var e={};return n.flatMap((function(n){return n.tags||[]})).forEach((function(n){var r=n.toLowerCase();e[r]?e[r]++:e[r]=0})),Object.entries(e).sort((function(n,e){var r=o(n,2)[1];return o(e,2)[1]-r})).slice(0,20).map((function(n){return o(n,1)[0]}))}function c(){var n=(0,t.useState)([]),e=n[0],r=n[1];return{selectedTags:e,toggleTag:(0,t.useCallback)((function(n){r((function(e){return u(e,n)?e.filter((function(e){return e.toLowerCase()!==n.toLowerCase()})):i(e).concat([n])}))}),[])}}function u(n,e){return null===n||void 0===n?void 0:n.some((function(n){return n.toLowerCase()===e.toLowerCase()}))}function l(n){return"".concat(n[0].toUpperCase()).concat(n.slice(1))}},5880:function(n,e,r){var t=r(5893);function o(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}e.Z=function(n){return(0,t.jsx)("svg",function(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),t.forEach((function(e){o(n,e,r[e])}))}return n}({},n,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 512 512","aria-labelledby":"title",children:(0,t.jsx)("path",{d:"M374.108,373.328c-7.829-7.792-20.492-7.762-28.284,0.067L276,443.557V20c0-11.046-8.954-20-20-20 c-11.046,0-20,8.954-20,20v423.558l-69.824-70.164c-7.792-7.829-20.455-7.859-28.284-0.067c-7.83,7.793-7.859,20.456-0.068,28.285 l104,104.504c0.006,0.007,0.013,0.012,0.019,0.018c7.792,7.809,20.496,7.834,28.314,0.001c0.006-0.007,0.013-0.012,0.019-0.018 l104-104.504C381.966,393.785,381.939,381.121,374.108,373.328z"})}))}},5357:function(n,e,r){var t,o;r.d(e,{I:function(){return t}}),(o=t||(t={})).Black="var(--black)",o.White="var(--white)",o.Accent="var(--color-accent)",o.Text_Primary="var(--color-text-primary)",o.Text_Secondary="var(--color-text-secondary)",o.Text_Disabled="var(--color-text-disabled)",o.Text_Inverse="var(--color-text-inverse)",o.Background_Primary="var(--color-background-primary)",o.Background_Secondary="var(--color-background-secondary)",o.Background_Disabled="var(--color-background-disabled)",o.Background_Inverse="var(--color-background-inverse)",o.Border="var(--color-border)"},2904:function(n,e,r){r.d(e,{Z:function(){return v}});var t=r(5893),o=r(474),i=r(5357);function a(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function c(){var n=a(["\n  width: auto;\n  height: auto;\n  border-radius: 8px;\n  padding: 8px 16px;\n  background: ",";\n  border: none;\n  font-size: 1rem;\n  cursor: pointer;\n  color: ",";\n  fill: ",";\n  border: 2px solid ",";\n\n  &:hover {\n    background: ",";\n    color: ",";\n    fill: ",";\n  }\n"]);return c=function(){return n},n}function u(){var n=a(["\n  padding: 0.25em;\n  height: 2em;\n  width: 2em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return u=function(){return n},n}function l(){var n=a(["\n  border: 2px solid ",";\n  background: none;\n  color: ",";\n\n  &:focus {\n    background: ",";\n  }\n\n  &:hover {\n    background: ",";\n    color: ",";\n  }\n\n  &:active {\n    background: ",";\n  }\n"]);return l=function(){return n},n}var s=o.Z.button(c(),i.I.Background_Primary,i.I.Text_Secondary,i.I.Text_Secondary,i.I.Border,i.I.Background_Disabled,i.I.Text_Primary,i.I.Text_Primary),d=(0,o.Z)(s)(u()),f=((0,o.Z)(s)(l(),i.I.Border,i.I.Text_Primary,i.I.Background_Disabled,i.I.Background_Inverse,i.I.Text_Inverse,i.I.Background_Primary),r(5880)),g=r(6076);function m(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function p(){var n=m(["\n  padding: 20px;\n  max-width: 800px;\n  margin: auto;\n  text-align: center;\n  border-top: 1px solid ",";\n"]);return p=function(){return n},n}function b(){var n=m(["\n  position: fixed;\n  bottom: 1rem;\n  right: 1rem;\n  width: auto;\n  height: auto;\n\n  svg {\n    height: 1em;\n    width: 1em;\n    transform: rotate(180deg);\n  }\n"]);return b=function(){return n},n}function v(){return(0,t.jsxs)(h,{children:["\xa9 ",g.TN," \u2022 ",(0,t.jsx)("a",{href:"mailto:mahima@bhutani.design",children:"Contact"}),(0,t.jsx)(x,{onClick:function(){window.scrollTo({top:0})},title:"Scroll to top",children:(0,t.jsx)(f.Z,{})})]})}var h=o.Z.footer(p(),i.I.Border),x=(0,o.Z)(d)(b())},3328:function(n,e,r){r.d(e,{Z:function(){return b}});var t=r(5893),o=r(474),i=r(1664),a=r(6076),c=r(5357);function u(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function l(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),t.forEach((function(e){u(n,e,r[e])}))}return n}function s(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},i=Object.keys(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)r=i[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}function d(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function f(){var n=d(["\n  position: fixed;\n  left: 0;\n  right: 0;\n  z-index: 50;\n  margin: 0.5rem;\n  padding: 1rem 1.5em;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.5rem;\n  flex-direction: row;\n\n  background-color: ",";\n  border-radius: 0.5rem;\n  box-shadow: 0 0.25rem 0.5rem 0 #0008;\n\n  animation: drop-top 0.5s;\n\n  @keyframes drop-top {\n    from {\n      top: -100px;\n    }\n    to {\n      top: 0;\n    }\n  }\n\n  @media screen and (max-width: 550px) {\n    /* flex-direction: column; */\n    gap: 0;\n    .linkText {\n      display: none;\n    }\n  }\n"]);return f=function(){return n},n}function g(){var n=d(["\n  font-size: 1.2rem;\n  font-weight: bold;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: ",";\n  text-decoration: none;\n  cursor: pointer;\n"]);return g=function(){return n},n}function m(){var n=d(["\n  display: flex;\n  align-items: center;\n  list-style: none;\n  font-size: 0.9rem;\n"]);return m=function(){return n},n}function p(){var n=d(["\n  margin: 0 0 0 1em;\n\n  &,\n  a {\n    color: ",";\n    fill: ",";\n  }\n\n  a {\n    text-decoration: none;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n  }\n\n  i {\n    margin: 0 0.5em;\n    transition: transform ease 0.3s;\n  }\n\n  &:hover,\n  a:hover {\n    color: ",";\n    fill: ",";\n\n    i {\n      transform: scale(1.5);\n    }\n  }\n\n  svg {\n    width: 1em;\n    height: 1em;\n    margin: 0 0.5em;\n\n    &:hover {\n      transform: scale(1.1);\n    }\n  }\n"]);return p=function(){return n},n}function b(){return(0,t.jsxs)(h,{children:[(0,t.jsx)(i.default,{href:"/",children:(0,t.jsx)(x,{children:a.TN})}),(0,t.jsx)("nav",{children:(0,t.jsx)(y,{children:a.Ok.map((function(n){var e=n.title,r=n.url,o=n.icon;return(0,t.jsxs)(v,{href:r,children:[(0,t.jsx)("i",{className:o}),(0,t.jsx)("span",{className:"linkText",children:e})]},e)}))})})]})}function v(n){var e=n.children,r=s(n,["children"]);return(0,t.jsx)(k,{children:(0,t.jsx)(i.default,l({},r,{children:(0,t.jsx)("a",{children:e})}))})}var h=o.Z.header(f(),c.I.Background_Secondary),x=o.Z.a(g(),c.I.Text_Primary),y=o.Z.ul(m()),k=o.Z.li(p(),c.I.Text_Secondary,c.I.Text_Secondary,c.I.Text_Primary,c.I.Text_Primary)},6076:function(n){n.exports=JSON.parse('{"TN":"Aseem Gupta","WL":"","CF":"https://aseemgupta.com","cv":"https://aseemgupta.com/images/profile.jpeg","Ok":[{"title":"Resume","url":"#","icon":"ri-profile-line"},{"title":"LinkedIn","url":"https://www.linkedin.com/in/","icon":"ri-linkedin-fill"},{"title":"Mail","url":"mailto:mahima@bhutani.design","icon":"ri-mail-line"}],"jZ":{"heading":"Hi, I\'m Aseem","subHeading":["Marketeer","Learner"],"content":["I am passionate about using UX/UI and IxD to design user-friendly products, environments and systems. I use my skills in user research, front end development, user testing, prototyping and heuristic evaluation to implement our client\u2019s vision. I love solving problems and tackling new challenges. I look to create synergies and cohesion in teams to bring out the best performance and exceed expectations.","I am skilled with Figma, Sketch, Adobe XD and InVision."]}}')}}]);