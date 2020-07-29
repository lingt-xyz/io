(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(9),i=(n(0),n(220)),l={title:"User"},c={id:"linux/User",isDocsHomePage:!1,title:"User",description:"- Add a new user",source:"@site/docs/linux/User.md",permalink:"/docs/linux/User",editUrl:"https://github.com/lingt-xyz/io/tree/master/docs/linux/User.md",lastUpdatedAt:1596008145,sidebar:"linux",previous:{title:"Tar",permalink:"/docs/linux/Tar"}},o=[],b={rightToc:o};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Add a new user"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"adduser $username")),Object(i.b)("li",{parentName:"ul"},"low level: ",Object(i.b)("inlineCode",{parentName:"li"},"useradd -m $username")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Change ",Object(i.b)("inlineCode",{parentName:"p"},"$HOME")," permission"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"default is ",Object(i.b)("inlineCode",{parentName:"li"},"755")," on Debian 10"),Object(i.b)("li",{parentName:"ul"},"only executable: ",Object(i.b)("inlineCode",{parentName:"li"},"chmod 750 $HOME")),Object(i.b)("li",{parentName:"ul"},"nothing: ",Object(i.b)("inlineCode",{parentName:"li"},"chmod 700 $HOME")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Grant ",Object(i.b)("inlineCode",{parentName:"p"},"sudo")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"usermod -aG sudo $username")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Delete a user"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"deluser $username")),Object(i.b)("li",{parentName:"ul"},"low level: ",Object(i.b)("inlineCode",{parentName:"li"},"userdel [-r] $username")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Change user id"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"usermod -u 1001 $username")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Change group id"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"groupmod -g 1001 $username")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Changer ownership"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"chown -R $username:$groupname $folder"))))))}u.isMDXComponent=!0},220:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=u(n),s=r,O=p["".concat(l,".").concat(s)]||p[s]||m[s]||i;return n?a.a.createElement(O,c(c({ref:t},b),{},{components:n})):a.a.createElement(O,c({ref:t},b))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var b=2;b<i;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);