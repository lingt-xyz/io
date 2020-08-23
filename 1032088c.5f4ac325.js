(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{142:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return l}));var r=t(2),o=t(9),a=(t(0),t(228)),c={title:"TensorFlow Log"},p={id:"research/TFLog",isDocsHomePage:!1,title:"TensorFlow Log",description:"TensorFlow does not support GPU",source:"@site/docs/research/TFLog.md",permalink:"/docs/research/TFLog",editUrl:"https://github.com/lingt-xyz/io/tree/master/docs/research/TFLog.md",lastUpdatedAt:1596506459,sidebar:"research",previous:{title:"Keras Log",permalink:"/docs/research/KerasLog"}},i=[],s={rightToc:i};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h4",{id:"tensorflow-does-not-support-gpu"},"TensorFlow does not support GPU"),Object(a.b)("p",null,"For the TensorFlow 2.0 and above, by default, GPU is supported.\nWhen use ",Object(a.b)("inlineCode",{parentName:"p"},"conda")," to install, make sure choose ",Object(a.b)("inlineCode",{parentName:"p"},"gpu")," build version."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"$conda create -n tf220 python=3.7 anaconda ipykernel tensorflow=2.20=gpu_py37h1a511ff_0")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"$ conda search -f tensorflow=2.2.0\nLoading channels: done\n# Name                       Version           Build  Channel             \ntensorflow                     2.2.0 eigen_py36h84d285f_0  pkgs/main           \ntensorflow                     2.2.0 eigen_py37h1b16bb3_0  pkgs/main           \ntensorflow                     2.2.0 eigen_py38hfc6e53c_0  pkgs/main           \ntensorflow                     2.2.0 gpu_py36hf933387_0  pkgs/main           \ntensorflow                     2.2.0 gpu_py37h1a511ff_0  pkgs/main           \ntensorflow                     2.2.0 gpu_py38hb782248_0  pkgs/main           \ntensorflow                     2.2.0 mkl_py36h5a57954_0  pkgs/main           \ntensorflow                     2.2.0 mkl_py37h6e9ce2d_0  pkgs/main           \ntensorflow                     2.2.0 mkl_py38h6d3daf0_0  pkgs/main\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Ref:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(r.a)({parentName:"li"},{href:"https://medium.com/lsc-psd/tensorflow-2-1-doesnt-seem-to-see-my-gpu-even-though-cuda-10-1-with-solution-7b44297843a"}),"https://medium.com/lsc-psd/tensorflow-2-1-doesnt-seem-to-see-my-gpu-even-though-cuda-10-1-with-solution-7b44297843a"))))))}l.isMDXComponent=!0},228:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=l(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(t),b=r,m=u["".concat(c,".").concat(b)]||u[b]||f[b]||a;return t?o.a.createElement(m,p(p({ref:n},s),{},{components:t})):o.a.createElement(m,p({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=b;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var s=2;s<a;s++)c[s]=t[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);