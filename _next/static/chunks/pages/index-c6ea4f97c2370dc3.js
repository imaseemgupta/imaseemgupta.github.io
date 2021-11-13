(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(3003)}])},3003:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return X},default:function(){return G}});var r=t(5893),i=t(9008),o=t(3328),c=t(2293),u=t(6076),a=t(1669),l=t(474),s=t(5357);function f(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function d(){var n=f(["\n  font-size: 3em;\n  font-weight: bold;\n  color: ",";\n"]);return d=function(){return n},n}function h(){var n=f(["\n  display: inline-block;\n  font-size: 1.5em;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  color: ",";\n"]);return h=function(){return n},n}function m(){var n=f(["\n  color: ",";\n  margin: 1em 0;\n  max-width: 40em;\n"]);return m=function(){return n},n}var p=l.Z.h1(d(),s.I.Text_Primary),g=l.Z.h2(h(),s.I.Text_Disabled),x=l.Z.p(m(),s.I.Text_Secondary),j=t(7294);function v(){var n=u.jZ,e=n.heading,t=n.content;return(0,r.jsxs)(a.D,{id:"about",children:[(0,r.jsx)(p,{children:e}),(0,r.jsx)(b,{}),t.map((function(n){return(0,r.jsx)(x,{children:n},n)}))]})}function b(){var n=u.jZ.subHeading,e=(0,j.useState)(0),t=e[0],i=e[1],o=n[t]||"";return(0,j.useEffect)((function(){if(!(n.length<=1)){var e=setInterval((function(){return i((function(e){return(e+1)%n.length}))}),3e3);return function(){return clearInterval(e)}}}),[n]),(0,r.jsx)(g,{style:{color:s.I.Accent},children:(0,r.jsx)(c.Z,{text:o,springConfig:c.u.wobbly})})}var w=t(1664),y=t(9074),_=t(34);function O(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Z(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function T(){var n=Z(["\n  display: grid;\n  gap: 2rem;\n  margin-top: 2em;\n  grid-template-columns: repeat(2, 1fr);\n\n  @media screen and (max-width: 600px) {\n    grid-template-columns: repeat(1, 1fr);\n  }\n  @media screen and (min-width: 1200px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  @media screen and (min-width: 1800px) {\n    grid-template-columns: repeat(4, 1fr);\n  }\n"]);return T=function(){return n},n}function I(){var n=Z(["\n  width: 100%;\n  height: 100%;\n  min-height: 400px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n"]);return I=function(){return n},n}function P(){var n=Z(["\n  border-radius: 0.5rem;\n  overflow: hidden;\n  width: 100%;\n  height: 300px;\n  position: relative;\n  cursor: pointer;\n"]);return P=function(){return n},n}function k(){var n=Z(["\n  width: 100%;\n  height: auto;\n  position: relative;\n  padding: 1em 0;\n  flex: 1;\n"]);return k=function(){return n},n}function N(){var n=Z(["\n  font-size: 1.5em;\n  font-weight: normal;\n  /* color: ","; */\n"]);return N=function(){return n},n}function z(){var n=Z(["\n  font-size: 1em;\n  font-weight: normal;\n  /* color: ","; */\n  max-width: 100%;\n"]);return z=function(){return n},n}function E(n){var e=n.id,t=n.title,i=n.items,o=n.baseUrl,c=(0,y.ZP)(i),u=c.filteredItems,l=c.toggleTag,f=c.renderedFilterRow;return(0,r.jsxs)(a.$,{id:e,style:{backgroundColor:s.I.Background_Primary},children:[(0,r.jsx)(g,{children:t}),f,u.length>0?(0,r.jsx)(S,{children:u.map((function(n){return(0,j.createElement)(C,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){O(n,e,t[e])}))}return n}({},n,{key:n.id,toggleTag:l,baseUrl:o}))}))}):(0,r.jsx)(x,{children:"No content match the filters. Try with different filters."})]})}function C(n){var e=n.id,t=n.name,i=n.image,o=n.description,c=n.tags,u=void 0===c?[]:c,a=n.baseUrl,l=n.toggleTag,s=a+e;return(0,r.jsxs)(F,{children:[(0,r.jsx)(w.default,{href:s,children:(0,r.jsx)(U,{children:(0,r.jsx)("img",{src:i,alt:t,style:{objectFit:"cover"}})})}),(0,r.jsxs)(A,{children:[(0,r.jsx)(w.default,{href:s,children:(0,r.jsx)("a",{children:(0,r.jsx)(D,{as:"h3",children:t})})}),o?(0,r.jsxs)(B,{children:[o," ",(0,r.jsx)(w.default,{href:s,children:(0,r.jsx)("a",{children:"Read more."})})]}):null,u.length>0?(0,r.jsx)(B,{children:u.map((function(n){return(0,r.jsxs)("a",{onClick:function(){return l(n)},children:["#",(0,_.Ig)(n)," "]},n)}))}):null]})]})}var S=l.Z.div(T()),F=l.Z.article(I()),U=l.Z.div(P()),A=l.Z.div(k()),D=(0,l.Z)(p)(N(),s.I.Accent),B=(0,l.Z)(x)(z(),s.I.Accent),R=t(2904),X=!0;function G(n){var e=n.blogs;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(H,{}),(0,r.jsx)(o.Z,{}),(0,r.jsx)(v,{}),(0,r.jsx)(E,{title:"Blog",id:"blog",items:e,baseUrl:"/blog/"}),(0,r.jsx)(R.Z,{})]})}function H(){return(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:u.TN}),(0,r.jsx)("meta",{property:"og:title",content:u.TN}),(0,r.jsx)("meta",{property:"og:description",content:u.WL}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:u.CF}),(0,r.jsx)("meta",{property:"og:image",content:u.cv}),(0,r.jsx)("meta",{property:"og:image:alt",content:u.TN})]})}}},function(n){n.O(0,[774,126,293,22,888,179],(function(){return e=5301,n(n.s=e);var e}));var e=n.O();_N_E=e}]);