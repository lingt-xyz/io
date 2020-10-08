(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{148:function(e,i,t){"use strict";t.r(i),t.d(i,"frontMatter",(function(){return l})),t.d(i,"metadata",(function(){return c})),t.d(i,"rightToc",(function(){return s})),t.d(i,"default",(function(){return u}));var n=t(2),r=t(9),a=(t(0),t(266)),l={title:"INSE 6130"},c={id:"course/INSE6130",isDocsHomePage:!1,title:"INSE 6130",description:"INSE 6130: Operating Systems Security",source:"@site/docs/course/INSE6130.mdx",permalink:"/docs/course/INSE6130",editUrl:"https://github.com/lingt-xyz/io/tree/master/docs/course/INSE6130.mdx",lastUpdatedAt:1595998539},s=[{value:"Outline",id:"outline",children:[]},{value:"Introduction",id:"introduction",children:[{value:"What is computer security?",id:"what-is-computer-security",children:[]},{value:"Overview of all perspectives of system security",id:"overview-of-all-perspectives-of-system-security",children:[]}]},{value:"Access Control Matrix and Foundational Results",id:"access-control-matrix-and-foundational-results",children:[{value:"ACM: simple yet (most) powerful security model",id:"acm-simple-yet-most-powerful-security-model",children:[]},{value:"Transition in ACM",id:"transition-in-acm",children:[]},{value:"Safety question",id:"safety-question",children:[]},{value:"HRU result",id:"hru-result",children:[]}]},{value:"Access Control Mechanism in UNIX",id:"access-control-mechanism-in-unix",children:[{value:"ACL, Capabilities, RBAC",id:"acl-capabilities-rbac",children:[]},{value:"ACL and Capabilities in UNIX and Windows",id:"acl-and-capabilities-in-unix-and-windows",children:[]},{value:"RBAC in Solaris",id:"rbac-in-solaris",children:[]}]},{value:"Security Policies and Confidentiality Policies",id:"security-policies-and-confidentiality-policies",children:[{value:"Overview of security policy",id:"overview-of-security-policy",children:[]},{value:"Bell-LaPadula (BLP) model",id:"bell-lapadula-blp-model",children:[]}]},{value:"Integrity Policies and Hybrid Policies",id:"integrity-policies-and-hybrid-policies",children:[{value:"Biba model",id:"biba-model",children:[]},{value:"Lipner\u2019s model",id:"lipners-model",children:[]},{value:"Clark-Wilson model",id:"clark-wilson-model",children:[]},{value:"Chinese Wall model",id:"chinese-wall-model",children:[]}]},{value:"Design principles and Unix Security",id:"design-principles-and-unix-security",children:[{value:"Principles of security design",id:"principles-of-security-design",children:[]},{value:"User security in UNIX",id:"user-security-in-unix",children:[]},{value:"File system security in UNIX",id:"file-system-security-in-unix",children:[]}]},{value:"Secure Booting",id:"secure-booting",children:[{value:"Secure bootstrap architectures and TPM",id:"secure-bootstrap-architectures-and-tpm",children:[]}]},{value:"Authentication and Identity",id:"authentication-and-identity",children:[{value:"Password security",id:"password-security",children:[]},{value:"Challenge response",id:"challenge-response",children:[]},{value:"Biometrics",id:"biometrics",children:[]}]},{value:"Auditing and Logging",id:"auditing-and-logging",children:[{value:"Auditing systems",id:"auditing-systems",children:[]},{value:"Auditing in UNIX",id:"auditing-in-unix",children:[]},{value:"Audit log analysis",id:"audit-log-analysis",children:[]}]},{value:"Vulnerability and Defense",id:"vulnerability-and-defense",children:[{value:"Common vulnerabilities",id:"common-vulnerabilities",children:[]},{value:"Intrusion detection",id:"intrusion-detection",children:[]}]},{value:"Securing Network Services",id:"securing-network-services",children:[{value:"Security in UNIX internet server",id:"security-in-unix-internet-server",children:[]},{value:"Network Security tools in UNIX and Windows",id:"network-security-tools-in-unix-and-windows",children:[]},{value:"Security protocols",id:"security-protocols",children:[]}]},{value:"Various Topics",id:"various-topics",children:[{value:"Registry security",id:"registry-security",children:[]},{value:"Embedded and real-time OS security",id:"embedded-and-real-time-os-security",children:[]},{value:"Cloud computing security",id:"cloud-computing-security",children:[]},{value:"Mobile OS security",id:"mobile-os-security",children:[]}]}],o={rightToc:s};function u(e){var i=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},o,t,{components:i,mdxType:"MDXLayout"}),Object(a.b)("p",null,"INSE 6130: Operating Systems Security"),Object(a.b)("h2",{id:"outline"},"Outline"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Instructor: ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#"}),"Dr. Amin Ranj Bar")),Object(a.b)("li",{parentName:"ul"},"Email: ",Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"mailto:amin.ranjbar@concordia.ca"}),"amin.ranjbar@concordia.ca"),Object(a.b)("blockquote",{parentName:"li"},Object(a.b)("p",{parentName:"blockquote"},'Include "INSE 6130" in the subject'))),Object(a.b)("li",{parentName:"ul"},"Office:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"EV 3.301"),Object(a.b)("li",{parentName:"ul"},"Friday 20:15 \u2013 21:15"))),Object(a.b)("li",{parentName:"ul"},"Coursebook",Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"#"}),"Computer Security. Art and Science (2nd Edition), Authors: M.Bishop, Publisher: Addison-Wesley (2019)"))))),Object(a.b)("hr",null),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("h3",{id:"what-is-computer-security"},"What is computer security?"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Physical security and information security")),Object(a.b)("h3",{id:"overview-of-all-perspectives-of-system-security"},"Overview of all perspectives of system security"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Objectives"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Confidentiality",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"What: keeping data and resources hidden"),Object(a.b)("li",{parentName:"ul"},"How: encryption"))),Object(a.b)("li",{parentName:"ul"},"Integrity",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"What: data integrity and origin integrity (authentication)"),Object(a.b)("li",{parentName:"ul"},"How: digital signature and ?"))),Object(a.b)("li",{parentName:"ul"},"Availability",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"What: enabling access to data and resources"))))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Classes of Threats"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Disclosure: snooping (sniffing) -> confidentiality"),Object(a.b)("li",{parentName:"ul"},"Deception: modification, spoofing (masquerading), repudiation of origin, denial of receipt -> Integrity"),Object(a.b)("li",{parentName:"ul"},"Disruptoin: modification -> Availability"),Object(a.b)("li",{parentName:"ul"},"Usurpation: modification, spoofing, delay, denial of service. It's a combination of all. -> confidentiality, integrity, availability"))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Policies and mechanisms"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},'Defines "security" for the system: what can do, what cannot do'),Object(a.b)("li",{parentName:"ul"},"Mechanisms enforece policies",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Technical or procedural"))),Object(a.b)("li",{parentName:"ul"},"OM-AM (by Ravi Sandhu)",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Objective: confidentiality"),Object(a.b)("li",{parentName:"ul"},"Model: ACM"),Object(a.b)("li",{parentName:"ul"},"Architecutre: Client-Server"))),Object(a.b)("li",{parentName:"ul"},"Ways for achieving security",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Prevention"),Object(a.b)("li",{parentName:"ul"},"Detection"),Object(a.b)("li",{parentName:"ul"},"Recovery"))),Object(a.b)("li",{parentName:"ul"},"Trust and assumptions",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"this is underlie all aspects of security"),Object(a.b)("li",{parentName:"ul"},"For policies, unambiguously partiion system states, correctly capture security requirements"),Object(a.b)("li",{parentName:"ul"},"For mechanisms: assume to ?"))),Object(a.b)("li",{parentName:"ul"},"Types of Mechanisms",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Three cases."),Object(a.b)("li",{parentName:"ul"},"Policy should cover security."))))),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"The role of trust, assurance, operational issues, human issues"),Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Assurance",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Specification"))),Object(a.b)("li",{parentName:"ul"},"Operational issues",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Cost-Benefit analysis"),Object(a.b)("li",{parentName:"ul"},"Risk analysis",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Should we protect something"),Object(a.b)("li",{parentName:"ul"},"How much should we protect is"))),Object(a.b)("li",{parentName:"ul"},"Laws and Customs"))),Object(a.b)("li",{parentName:"ul"},"Human Issues",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Organizational Problems",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Power and responsibility"),Object(a.b)("li",{parentName:"ul"},"Financial benefits"))),Object(a.b)("li",{parentName:"ul"},"People problems",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},"Outsiders and insiders"),Object(a.b)("li",{parentName:"ul"},"Social engineering: get information from person to go further")))))))),Object(a.b)("hr",null),Object(a.b)("h2",{id:"access-control-matrix-and-foundational-results"},"Access Control Matrix and Foundational Results"),Object(a.b)("h3",{id:"acm-simple-yet-most-powerful-security-model"},"ACM: simple yet (most) powerful security model"),Object(a.b)("h3",{id:"transition-in-acm"},"Transition in ACM"),Object(a.b)("h3",{id:"safety-question"},"Safety question"),Object(a.b)("h3",{id:"hru-result"},"HRU result"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"access-control-mechanism-in-unix"},"Access Control Mechanism in UNIX"),Object(a.b)("h3",{id:"acl-capabilities-rbac"},"ACL, Capabilities, RBAC"),Object(a.b)("h3",{id:"acl-and-capabilities-in-unix-and-windows"},"ACL and Capabilities in UNIX and Windows"),Object(a.b)("h3",{id:"rbac-in-solaris"},"RBAC in Solaris"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"security-policies-and-confidentiality-policies"},"Security Policies and Confidentiality Policies"),Object(a.b)("h3",{id:"overview-of-security-policy"},"Overview of security policy"),Object(a.b)("h3",{id:"bell-lapadula-blp-model"},"Bell-LaPadula (BLP) model"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"integrity-policies-and-hybrid-policies"},"Integrity Policies and Hybrid Policies"),Object(a.b)("h3",{id:"biba-model"},"Biba model"),Object(a.b)("h3",{id:"lipners-model"},"Lipner\u2019s model"),Object(a.b)("h3",{id:"clark-wilson-model"},"Clark-Wilson model"),Object(a.b)("h3",{id:"chinese-wall-model"},"Chinese Wall model"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"design-principles-and-unix-security"},"Design principles and Unix Security"),Object(a.b)("h3",{id:"principles-of-security-design"},"Principles of security design"),Object(a.b)("h3",{id:"user-security-in-unix"},"User security in UNIX"),Object(a.b)("h3",{id:"file-system-security-in-unix"},"File system security in UNIX"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"secure-booting"},"Secure Booting"),Object(a.b)("h3",{id:"secure-bootstrap-architectures-and-tpm"},"Secure bootstrap architectures and TPM"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"authentication-and-identity"},"Authentication and Identity"),Object(a.b)("h3",{id:"password-security"},"Password security"),Object(a.b)("h3",{id:"challenge-response"},"Challenge response"),Object(a.b)("h3",{id:"biometrics"},"Biometrics"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"auditing-and-logging"},"Auditing and Logging"),Object(a.b)("h3",{id:"auditing-systems"},"Auditing systems"),Object(a.b)("h3",{id:"auditing-in-unix"},"Auditing in UNIX"),Object(a.b)("h3",{id:"audit-log-analysis"},"Audit log analysis"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"vulnerability-and-defense"},"Vulnerability and Defense"),Object(a.b)("h3",{id:"common-vulnerabilities"},"Common vulnerabilities"),Object(a.b)("h3",{id:"intrusion-detection"},"Intrusion detection"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"securing-network-services"},"Securing Network Services"),Object(a.b)("h3",{id:"security-in-unix-internet-server"},"Security in UNIX internet server"),Object(a.b)("h3",{id:"network-security-tools-in-unix-and-windows"},"Network Security tools in UNIX and Windows"),Object(a.b)("h3",{id:"security-protocols"},"Security protocols"),Object(a.b)("hr",null),Object(a.b)("h2",{id:"various-topics"},"Various Topics"),Object(a.b)("h3",{id:"registry-security"},"Registry security"),Object(a.b)("h3",{id:"embedded-and-real-time-os-security"},"Embedded and real-time OS security"),Object(a.b)("h3",{id:"cloud-computing-security"},"Cloud computing security"),Object(a.b)("h3",{id:"mobile-os-security"},"Mobile OS security"))}u.isMDXComponent=!0},266:function(e,i,t){"use strict";t.d(i,"a",(function(){return b})),t.d(i,"b",(function(){return m}));var n=t(0),r=t.n(n);function a(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function l(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?l(Object(t),!0).forEach((function(i){a(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function s(e,i){if(null==e)return{};var t,n,r=function(e,i){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],i.indexOf(t)>=0||(r[t]=e[t]);return r}(e,i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),u=function(e){var i=r.a.useContext(o),t=i;return e&&(t="function"==typeof e?e(i):c(c({},i),e)),t},b=function(e){var i=u(e.components);return r.a.createElement(o.Provider,{value:i},e.children)},d={inlineCode:"code",wrapper:function(e){var i=e.children;return r.a.createElement(r.a.Fragment,{},i)}},p=r.a.forwardRef((function(e,i){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),b=u(t),p=n,m=b["".concat(l,".").concat(p)]||b[p]||d[p]||a;return t?r.a.createElement(m,c(c({ref:i},o),{},{components:t})):r.a.createElement(m,c({ref:i},o))}));function m(e,i){var t=arguments,n=i&&i.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=p;var c={};for(var s in i)hasOwnProperty.call(i,s)&&(c[s]=i[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<a;o++)l[o]=t[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);