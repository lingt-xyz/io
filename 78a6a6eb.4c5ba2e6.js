(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{169:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(9),a=(r(0),r(187)),i={title:"INSE 6110"},c={id:"course/INSE6110",isDocsHomePage:!1,title:"INSE 6110",description:"INSE 6110: Foundations of Cryptography, Fall 2019",source:"@site/docs/course/INSE6110.md",permalink:"/docs/course/INSE6110",editUrl:"https://github.com/lingt-xyz/io/tree/master/docs/course/INSE6110.md",sidebar:"courses",next:{title:"INSE 6130",permalink:"/docs/course/INSE6130"}},l=[{value:"Outline",id:"outline",children:[]},{value:"1. Hash",id:"1-hash",children:[{value:"1.1 Hash function properties",id:"11-hash-function-properties",children:[]},{value:"1.2 Hash function constructions",id:"12-hash-function-constructions",children:[]}]},{value:"2. Entropy &amp; extraction / Pseudorandom generators",id:"2-entropy--extraction--pseudorandom-generators",children:[]},{value:"3. One-Time Pad / Stream Ciphers",id:"3-one-time-pad--stream-ciphers",children:[]},{value:"4. Block Ciphers: Modes of Operation &amp; Security Games",id:"4-block-ciphers-modes-of-operation--security-games",children:[]},{value:"5. CCA Security and MACs",id:"5-cca-security-and-macs",children:[]},{value:"6. Authenticated encryption",id:"6-authenticated-encryption",children:[]},{value:"7. Number theory: Intergers mod p",id:"7-number-theory-intergers-mod-p",children:[]},{value:"8. Diffie-Hellman / Elgamal",id:"8-diffie-hellman--elgamal",children:[]},{value:"9. Zero Knowledge / DSA / Station-to-Station",id:"9-zero-knowledge--dsa--station-to-station",children:[]},{value:"10. TLS",id:"10-tls",children:[]}],u={rightToc:l};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"INSE 6110: Foundations of Cryptography, Fall 2019"),Object(a.b)("h2",{id:"outline"},"Outline"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Instructor: ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#"}),"Dr. ?")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://users.encs.concordia.ca/~clark/courses/1703-6110/index.html"}),"Outline")),Object(a.b)("li",{parentName:"ul"},"Coursebook",Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"http://people.cs.bris.ac.uk/~nigel/Crypto_Book/book.ps"}),"Cryptography, An Introduction (Smart)")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"https://crypto.stanford.edu/~dabo/cryptobook/"}),"A Graduate Course in Applied Cryptography (Boneh & Shoup)")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"http://cacr.uwaterloo.ca/hac/"}),"The Handbook of Applied Cryptography (Menezes, van Oorschot, and Vanstone)"))))),Object(a.b)("hr",null),Object(a.b)("h2",{id:"1-hash"},"1. Hash"),Object(a.b)("h3",{id:"11-hash-function-properties"},"1.1 Hash function properties"),Object(a.b)("h3",{id:"12-hash-function-constructions"},"1.2 Hash function constructions"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"2-entropy--extraction--pseudorandom-generators"},"2. Entropy & extraction / Pseudorandom generators"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"3-one-time-pad--stream-ciphers"},"3. One-Time Pad / Stream Ciphers"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"4-block-ciphers-modes-of-operation--security-games"},"4. Block Ciphers: Modes of Operation & Security Games"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"5-cca-security-and-macs"},"5. CCA Security and MACs"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"6-authenticated-encryption"},"6. Authenticated encryption"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"7-number-theory-intergers-mod-p"},"7. Number theory: Intergers mod p"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"8-diffie-hellman--elgamal"},"8. Diffie-Hellman / Elgamal"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"9-zero-knowledge--dsa--station-to-station"},"9. Zero Knowledge / DSA / Station-to-Station"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"10-tls"},"10. TLS"))}s.isMDXComponent=!0},187:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return h}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,h=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return r?o.a.createElement(h,c(c({ref:t},u),{},{components:r})):o.a.createElement(h,c({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);