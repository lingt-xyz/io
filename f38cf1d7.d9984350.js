(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{257:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(9),l=(n(0),n(268)),i={title:"Common Commands"},o={id:"research/Common_Commands",isDocsHomePage:!1,title:"Common Commands",description:"CUDA",source:"@site/docs/research/Common_Commands.md",permalink:"/docs/research/Common_Commands",editUrl:"https://github.com/lingt-xyz/io/tree/master/docs/research/Common_Commands.md",lastUpdatedAt:1611076202,sidebar:"research",next:{title:"Dictionary",permalink:"/docs/research/Dictionary"}},b=[{value:"CUDA",id:"cuda",children:[]},{value:"Conda",id:"conda",children:[]},{value:"Jupyter lab",id:"jupyter-lab",children:[]},{value:"Jupyter kernel",id:"jupyter-kernel",children:[]},{value:"TensorBoard",id:"tensorboard",children:[]},{value:"TensorFlow",id:"tensorflow",children:[]}],c={rightToc:b};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"cuda"},"CUDA"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Check version: ",Object(l.b)("inlineCode",{parentName:"li"},"CUDA check version"))),Object(l.b)("h2",{id:"conda"},"Conda"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"List env",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"conda info --envs")))),Object(l.b)("li",{parentName:"ul"},"Create env",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"conda create -n tf_115 python=3.7 tensorflow-gpu=1.15")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"conda create -n tf_220 python=3.7 tensorflow=2.2.0=gpu_py37h1a511ff_0 scikit-learn")))),Object(l.b)("li",{parentName:"ul"},"Activate env",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"conda activate tf_220")))),Object(l.b)("li",{parentName:"ul"},"Install env on Jupyter notebook",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},"Create env and activate it",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"conda create -n tf_220 python=3.7 anaconda ipykernel tensorflow=2.2.0=gpu_py37h1a511ff_0")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"conda activate tf_220")))),Object(l.b)("li",{parentName:"ol"},"or install if created and activated",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"conda install -c anaconda ipykernel")))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("inlineCode",{parentName:"li"},"python -m ipykernel install --user --name=tf_220")))),Object(l.b)("li",{parentName:"ul"},"Remove env",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"conda remove -n $name --all"))))),Object(l.b)("h2",{id:"jupyter-lab"},"Jupyter lab"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"List jupyter notebook",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"jupyter notebook list")))),Object(l.b)("li",{parentName:"ul"},"Run background",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"nohup jupyter lab &")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"jupyter lab --allow-root --ip=0.0.0.0 --port=8888")))),Object(l.b)("li",{parentName:"ul"},"Stop",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"jupyter notebook stop 3443"))))),Object(l.b)("h2",{id:"jupyter-kernel"},"Jupyter kernel"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"List kernels",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"jupyter kernelspec list")))),Object(l.b)("li",{parentName:"ul"},"Install kernel",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ipython kernel install --user --name=<name of kernel>")))),Object(l.b)("li",{parentName:"ul"},"Uninstall kernel",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"jupyter kernelspec uninstall <name of kernel>"))))),Object(l.b)("h2",{id:"tensorboard"},"TensorBoard"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"tensorboard --logdir logs/log_dir --bind_all")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"tensorboard \u20140logdir logs/log_dir \u2014host 0.0.0.0 \u2014port 6006"))),Object(l.b)("h2",{id:"tensorflow"},"TensorFlow"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Release GPU",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/tensorflow/tensorflow/issues/36465"}),"https://github.com/tensorflow/tensorflow/issues/36465")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"for i in $(sudo lsof /dev/nvidia2 | grep python | awk '{print $2}' | sort -u); do sudo kill -9 $i; done"))))))}p.isMDXComponent=!0},268:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,s=u["".concat(i,".").concat(d)]||u[d]||m[d]||l;return n?a.a.createElement(s,o(o({ref:t},c),{},{components:n})):a.a.createElement(s,o({ref:t},c))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);