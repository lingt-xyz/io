(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{165:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return b})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(2),i=t(9),r=(t(0),t(187)),l={title:"bash"},b={id:"linux/Bash",isDocsHomePage:!1,title:"bash",description:"Bash Programming",source:"@site/docs/linux/Bash.md",permalink:"/docs/linux/Bash",editUrl:"https://github.com/lingt-xyz/io/tree/master/docs/linux/Bash.md",sidebar:"linux",next:{title:"CUPS",permalink:"/docs/linux/CUPS"}},c=[{value:"whereis bash",id:"whereis-bash",children:[]},{value:"Redirection",id:"redirection",children:[{value:"<code>&amp;</code>",id:"",children:[]},{value:"File descriptor",id:"file-descriptor",children:[]},{value:"Examples",id:"examples",children:[]}]},{value:"Pipes",id:"pipes",children:[{value:"Examples",id:"examples-1",children:[]}]},{value:"Variables",id:"variables",children:[{value:"Local variables",id:"local-variables",children:[]}]},{value:"Conditionals",id:"conditionals",children:[{value:"if..then",id:"ifthen",children:[]},{value:"if..then...else",id:"ifthenelse",children:[]},{value:"Conditionals with variables",id:"conditionals-with-variables",children:[]}]},{value:"Loop",id:"loop",children:[{value:"For",id:"for",children:[]},{value:"While",id:"while",children:[]},{value:"Util",id:"util",children:[]}]},{value:"Functions",id:"functions",children:[{value:"Without paramerters",id:"without-paramerters",children:[]},{value:"With paramerters",id:"with-paramerters",children:[]}]},{value:"User interfaces",id:"user-interfaces",children:[{value:"Menus",id:"menus",children:[]},{value:"Command line",id:"command-line",children:[]}]},{value:"References",id:"references",children:[]}],o={rightToc:c};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Bash Programming"),Object(r.b)("h2",{id:"whereis-bash"},"whereis bash"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"#!/bin/bash\n\necho Hello World\n")),Object(r.b)("p",null,"The first line indicates the system which program to use to run the file. Use ",Object(r.b)("inlineCode",{parentName:"p"},"whereis bash")," to see where bash is."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"redirection"},"Redirection"),Object(r.b)("h3",{id:""},Object(r.b)("inlineCode",{parentName:"h3"},"&")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"&")," indicates that what follows is a file descriptor and not a file name."),Object(r.b)("h3",{id:"file-descriptor"},"File descriptor"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"stdin")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"stdout"),": File descriptor ",Object(r.b)("inlineCode",{parentName:"li"},"1")," is the standard output (",Object(r.b)("inlineCode",{parentName:"li"},"stdout"),")."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"stderr"),": File descriptor ",Object(r.b)("inlineCode",{parentName:"li"},"2")," is the standard error (",Object(r.b)("inlineCode",{parentName:"li"},"stderr"),").")),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"ls -l > ls-l.txt"),": "),Object(r.b)("p",{parentName:"li"},"  This will redirect the ouput of a program (",Object(r.b)("inlineCode",{parentName:"p"},"ls -l"),") to a file (",Object(r.b)("inlineCode",{parentName:"p"},"ls-l.txt"),").")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"grep da * 2> grep-errors.txt")),Object(r.b)("p",{parentName:"li"},"  This will redirect the ",Object(r.b)("inlineCode",{parentName:"p"},"stderr")," ouput (",Object(r.b)("inlineCode",{parentName:"p"},"2"),") of a program (",Object(r.b)("inlineCode",{parentName:"p"},"grep da *"),") to a file (",Object(r.b)("inlineCode",{parentName:"p"},"grep-errors.txt"),").")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"grep da * 2>&1")," "),Object(r.b)("p",{parentName:"li"},"  This will redirect the ",Object(r.b)("inlineCode",{parentName:"p"},"stderr")," ouput (",Object(r.b)("inlineCode",{parentName:"p"},"2"),") of a program (",Object(r.b)("inlineCode",{parentName:"p"},"grep da *"),") to be written to the ",Object(r.b)("inlineCode",{parentName:"p"},"stdout"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"grep da * 2>1")," "),Object(r.b)("p",{parentName:"li"},"  This will redirect the ",Object(r.b)("inlineCode",{parentName:"p"},"stderr")," ouput (",Object(r.b)("inlineCode",{parentName:"p"},"2"),") of a program (",Object(r.b)("inlineCode",{parentName:"p"},"grep da *"),") to a file (",Object(r.b)("inlineCode",{parentName:"p"},"1"),").")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"grep da * > /dev/null ")),Object(r.b)("p",{parentName:"li"},"  This will redirect ",Object(r.b)("inlineCode",{parentName:"p"},"stdout")," of a program (",Object(r.b)("inlineCode",{parentName:"p"},"grep da *"),") to the null device.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"grep da * &> /dev/null ")),Object(r.b)("p",{parentName:"li"},"  This will redirect ",Object(r.b)("inlineCode",{parentName:"p"},"stdout")," and ",Object(r.b)("inlineCode",{parentName:"p"},"stderr")," of a program (",Object(r.b)("inlineCode",{parentName:"p"},"grep da *"),") to the null device."))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"pipes"},"Pipes"),Object(r.b)("p",null,"Pipes let you use the output of a program as the input of another one."),Object(r.b)("h3",{id:"examples-1"},"Examples"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},'ls -l | sed -e "s/[aeio]/u/g"')),Object(r.b)("p",{parentName:"li"},"  Here, the following happens: first the command ",Object(r.b)("inlineCode",{parentName:"p"},"ls -l")," is executed, and it's output, instead of being printed, is sent (piped) to the ",Object(r.b)("inlineCode",{parentName:"p"},"sed")," program, which in turn, prints what it has to."))),Object(r.b)("hr",null),Object(r.b)("h2",{id:"variables"},"Variables"),Object(r.b)("p",null,"No type, no declaration."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'#!/bin/bash          \nSTR="Hello World!"\necho $STR \n## Hello World!\n')),Object(r.b)("h3",{id:"local-variables"},"Local variables"),Object(r.b)("p",null,"Local variables can be created by using the keyword ",Object(r.b)("inlineCode",{parentName:"p"},"local"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"#!/bin/bash\n#!/bin/bash\nHELLO=Hello \nfunction hello {\n        local HELLO=World\n        echo $HELLO\n}\necho $HELLO\nhello\necho $HELLO\n\n## Hello\n## World\n## Hello\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"conditionals"},"Conditionals"),Object(r.b)("h3",{id:"ifthen"},"if..then"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'#!/bin/bash\nif [ "foo" = "foo" ]; then\n    echo expression evaluated as true\nfi\n')),Object(r.b)("h3",{id:"ifthenelse"},"if..then...else"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'#!/bin/bash\nif [ "foo" = "foo" ]; then\n    echo expression evaluated as true\nelse\n    echo expression evaluated as false\nfi\n')),Object(r.b)("h3",{id:"conditionals-with-variables"},"Conditionals with variables"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'#!/bin/bash\nT1="foo"\nT2="bar"\nif [ "$T1" = "$T2" ]; then\n    echo expression evaluated as true\nelse\n    echo expression evaluated as false\nfi\n')),Object(r.b)("hr",null),Object(r.b)("h2",{id:"loop"},"Loop"),Object(r.b)("h3",{id:"for"},"For"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"#!/bin/bash\nfor i in $( ls ); do\n    echo item: $i\ndone\n")),Object(r.b)("h3",{id:"while"},"While"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"#!/bin/bash \nCOUNTER=0\nwhile [  $COUNTER -lt 10 ]; do\n    echo The counter is $COUNTER\n    let COUNTER=COUNTER+1 \ndone\n")),Object(r.b)("h3",{id:"util"},"Util"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"#!/bin/bash \nCOUNTER=20\nuntil [  $COUNTER -lt 10 ]; do\n    echo COUNTER $COUNTER\n    let COUNTER-=1\ndone\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"functions"},"Functions"),Object(r.b)("h3",{id:"without-paramerters"},"Without paramerters"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"#!/bin/bash \nfunction quit {\n    exit\n}\nfunction hello {\n    echo Hello!\n}\nhello\nquit\necho foo\n")),Object(r.b)("h3",{id:"with-paramerters"},"With paramerters"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"#!/bin/bash \nfunction quit {\n    exit\n}  \nfunction e {\n    echo $1 \n}  \ne Hello\ne World\nquit\necho foo\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"user-interfaces"},"User interfaces"),Object(r.b)("h3",{id:"menus"},"Menus"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'#!/bin/bash\nOPTIONS="Hello Quit"\nselect opt in $OPTIONS; do\n    if [ "$opt" = "Quit" ]; then\n    echo done\n    exit\n    elif [ "$opt" = "Hello" ]; then\n    echo Hello World\n    else\n    clear\n    echo bad option\n    fi\ndone\n')),Object(r.b)("h3",{id:"command-line"},"Command line"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'#!/bin/bash        \nif [ -z "$1" ]; then \n    echo usage: $0 directory\n    exit\nfi\nSRCD=$1\nTGTD="/var/backups/"\nOF=home-$(date +%Y%m%d).tgz\ntar -cZf $TGTD$OF $SRCD\n')),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"-z"),": the length of STRING is zero. Please check ",Object(r.b)("inlineCode",{parentName:"p"},"man test"),"."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"references"},"References"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html"}),"BASH Programming - Introduction HOW-TO")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/818255/in-the-shell-what-does-21-mean"}),"What does \u201c 2>&1 \u201d mean?")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://unix.stackexchange.com/questions/68694/when-is-double-quoting-necessary"}),"When is double-quoting necessary?"))))}p.isMDXComponent=!0},187:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return h}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=i.a.createContext({}),p=function(e){var n=i.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},s=function(e){var n=p(e.components);return i.a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},u=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),s=p(t),u=a,h=s["".concat(l,".").concat(u)]||s[u]||d[u]||r;return t?i.a.createElement(h,b(b({ref:n},o),{},{components:t})):i.a.createElement(h,b({ref:n},o))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=u;var b={};for(var c in n)hasOwnProperty.call(n,c)&&(b[c]=n[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var o=2;o<r;o++)l[o]=t[o];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);