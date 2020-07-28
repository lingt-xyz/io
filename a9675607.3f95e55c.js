(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{175:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(9),i=(a(0),a(190)),l={title:"GNU/Linux command"},b={id:"linux/Linux-Command",isDocsHomePage:!1,title:"GNU/Linux command",description:"Commands on Debian 10",source:"@site/docs/linux/Linux-Command.md",permalink:"/docs/linux/Linux-Command",editUrl:"https://github.com/lingt-xyz/io/tree/master/docs/linux/Linux-Command.md",lastUpdatedAt:1595692294,sidebar:"linux",previous:{title:"CUPS",permalink:"/docs/linux/CUPS"},next:{title:"sed",permalink:"/docs/linux/Sed"}},c=[{value:"Audio",id:"audio",children:[]},{value:"Disk",id:"disk",children:[]},{value:"Tar",id:"tar",children:[]},{value:"User",id:"user",children:[]}],m={rightToc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Commands on Debian 10"),Object(i.b)("h2",{id:"audio"},"Audio"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Show Settings: ",Object(i.b)("inlineCode",{parentName:"li"},"amixer")),Object(i.b)("li",{parentName:"ul"},"Set volumn: ",Object(i.b)("inlineCode",{parentName:"li"},"amixer set Master 50%")),Object(i.b)("li",{parentName:"ul"},"Increase/Decrease volumn:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"amixer set Master 10%+")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"amixer set Master 10%-")))),Object(i.b)("li",{parentName:"ul"},"Mute/Unmute",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"amixer set Master mute")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"amixer set Master unmute")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"amixer set Master toggle"))))),Object(i.b)("h2",{id:"disk"},"Disk"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Usage",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"du -sh $folder"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"d")," is disk"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"u")," is usage"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-s, --summarize")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"-h, --human-readable")))))),Object(i.b)("li",{parentName:"ul"},"Find which sub-folder takes up how much disk",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"du -h --max-depth=1 | sort -hr")))),Object(i.b)("li",{parentName:"ul"},"Find all folders' size",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"du -sh .[!.]* *")))),Object(i.b)("li",{parentName:"ul"},"Find free space\n",Object(i.b)("inlineCode",{parentName:"li"},"df -h $folder"))),Object(i.b)("h2",{id:"tar"},"Tar"),Object(i.b)("p",null,'"tar" stands for tape archive, which is used deal with tape drives backup.'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"c"),": create a new ",Object(i.b)("inlineCode",{parentName:"li"},".tar")," archive file"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"v"),": verbosely show the ",Object(i.b)("inlineCode",{parentName:"li"},".tar")," file progress."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"f"),": use archive file or device ARCHIVE"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"x"),": extract files from an archive"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"j"),": filter the archive through bzip2"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"t"),": list the contents of an archive")),Object(i.b)("p",null,"e.g.:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Create .tar archive file",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tar -cvf test.tar file1 file2")))),Object(i.b)("li",{parentName:"ul"},"Create .tar.gz archive compressed file",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tar -cvzf test.tar.gz folder")))),Object(i.b)("li",{parentName:"ul"},"Create .tar.bz2 archive compressed file",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tar -cvjf test.tar.bz2 folder")))),Object(i.b)("li",{parentName:"ul"},"Untar tar archive file",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tar -xvf test.tar")))),Object(i.b)("li",{parentName:"ul"},"Uncompress archive compressed file",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tar -xvf test.tar.gz")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tar -xvf test.tar.bz2")))),Object(i.b)("li",{parentName:"ul"},"Untar file(s) from tar File",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tar -xvf test.tar file")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tar -xvf test.tar file1 file2")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tar -zxvf test.tar.gz file")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tar -jxvf test.tar.bz2 file")))),Object(i.b)("li",{parentName:"ul"},"Extract group of files using wildcard",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tar -xvf test.tar --wildcards '*.json'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tar -zxvf test.tar.gz --wildcards '*.json'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tar -jxvf test.tar.bz2 --wildcards '*.json'")))),Object(i.b)("li",{parentName:"ul"},"List content of tar archive file",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tar -tvf test.tar")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tar -tvf test.tar.gz")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tar -tvf test.tar.bz2")))),Object(i.b)("li",{parentName:"ul"},"Add files or directories to tar archive file",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tar -rvf test.tar newFile")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tar -rvf test.tar.gz newFile")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"tar -rvf test.tar.bz2 newFile"))))),Object(i.b)("h2",{id:"user"},"User"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Add a new user"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"adduser $username")),Object(i.b)("li",{parentName:"ul"},"low level: ",Object(i.b)("inlineCode",{parentName:"li"},"useradd -m $username")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Change ",Object(i.b)("inlineCode",{parentName:"p"},"$HOME")," permission"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"default is ",Object(i.b)("inlineCode",{parentName:"li"},"755")," on Debian 10"),Object(i.b)("li",{parentName:"ul"},"only executable: ",Object(i.b)("inlineCode",{parentName:"li"},"chmod 750 $HOME")),Object(i.b)("li",{parentName:"ul"},"nothing: ",Object(i.b)("inlineCode",{parentName:"li"},"chmod 700 $HOME")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Grant ",Object(i.b)("inlineCode",{parentName:"p"},"sudo")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"usermod -aG sudo $username")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Delete a user"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"deluser $username")),Object(i.b)("li",{parentName:"ul"},"low level: ",Object(i.b)("inlineCode",{parentName:"li"},"userdel [-r] $username")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Change user id"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"usermod -u 1001 $username")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Change group id"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"groupmod -g 1001 $username")))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Changer ownership"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"chown -R $username:$groupname $folder"))))),Object(i.b)("hr",null))}p.isMDXComponent=!0},190:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=r.a.createContext({}),p=function(e){var t=r.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(m.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=p(a),O=n,j=u["".concat(l,".").concat(O)]||u[O]||o[O]||i;return a?r.a.createElement(j,b(b({ref:t},m),{},{components:a})):r.a.createElement(j,b({ref:t},m))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=O;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,l[1]=b;for(var m=2;m<i;m++)l[m]=a[m];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);