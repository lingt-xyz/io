(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{208:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return o}));var n=a(2),s=a(9),i=(a(0),a(259)),r={title:"Inheritance"},c={id:"programming/Java/9Inheritance",isDocsHomePage:!1,title:"Inheritance",description:"Definitions",source:"@site/docs/programming/Java/9Inheritance.mdx",permalink:"/docs/programming/Java/9Inheritance",editUrl:"https://github.com/lingt-xyz/io/tree/master/docs/programming/Java/9Inheritance.mdx",lastUpdatedAt:1598198409,sidebar:"java",previous:{title:"Class",permalink:"/docs/programming/Java/8Class"},next:{title:"Exceptions",permalink:"/docs/programming/Java/10Exception"}},l=[{value:"<strong>Definitions</strong>",id:"definitions",children:[]},{value:"Subclass",id:"subclass",children:[]},{value:"Polymorphism",id:"polymorphism",children:[{value:"Method Override",id:"method-override",children:[]},{value:"Source Code",id:"source-code",children:[]},{value:"Output",id:"output",children:[]},{value:"Bytecode Tear Down",id:"bytecode-tear-down",children:[]},{value:"Polymorphism",id:"polymorphism-1",children:[]},{value:"Complete Output",id:"complete-output",children:[]}]}],b={rightToc:l};function o(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"definitions"},Object(i.b)("strong",{parentName:"h2"},"Definitions")),Object(i.b)("p",null,"A class that is derived from another class is called a subclass ","(","also a derived class, extended class, or child class",")",". The class from which the subclass is derived is called a superclass ","(","also a base class or a parent class",")","."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Superclass",Object(i.b)("span",Object(n.a)({parentName:"li"},{className:"math math-inline"}),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(i.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(i.b)("semantics",{parentName:"math"},Object(i.b)("mrow",{parentName:"semantics"},Object(i.b)("mo",{parentName:"mrow"},"\u2261")),Object(i.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"\\equiv")))),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.46375em",verticalAlign:"0em"}})),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),"\u2261"))))),"Base class",Object(i.b)("span",Object(n.a)({parentName:"li"},{className:"math math-inline"}),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(i.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(i.b)("semantics",{parentName:"math"},Object(i.b)("mrow",{parentName:"semantics"},Object(i.b)("mo",{parentName:"mrow"},"\u2261")),Object(i.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"\\equiv")))),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.46375em",verticalAlign:"0em"}})),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),"\u2261"))))),"Parent class"),Object(i.b)("li",{parentName:"ul"},"Subclass",Object(i.b)("span",Object(n.a)({parentName:"li"},{className:"math math-inline"}),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(i.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(i.b)("semantics",{parentName:"math"},Object(i.b)("mrow",{parentName:"semantics"},Object(i.b)("mo",{parentName:"mrow"},"\u2261")),Object(i.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"\\equiv")))),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.46375em",verticalAlign:"0em"}})),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),"\u2261"))))),"Derived class",Object(i.b)("span",Object(n.a)({parentName:"li"},{className:"math math-inline"}),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(i.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(i.b)("semantics",{parentName:"math"},Object(i.b)("mrow",{parentName:"semantics"},Object(i.b)("mo",{parentName:"mrow"},"\u2261")),Object(i.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"\\equiv")))),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.46375em",verticalAlign:"0em"}})),Object(i.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),"\u2261"))))),"Child class")),Object(i.b)("p",null,"Excepting ",Object(i.b)("inlineCode",{parentName:"p"},"Object"),", which has no superclass, every class has one and only one direct superclass ","(","single inheritance",")","."),Object(i.b)("p",null,"A subclass inherits all the members ","(","fields, methods, and nested classes",")"," from its superclass. Constructors are not members, so they are not inherited by subclasses, but the constructor of the superclass can be invoked from the subclass."),Object(i.b)("h2",{id:"subclass"},"Subclass"),Object(i.b)("p",null,"What You Can Do in a Subclass?"),Object(i.b)("p",null,"A subclass inherits all of the public and protected members of its parent, no matter what package the subclass is in. If the subclass is in the same package as its parent, it also inherits the package-private members of the parent. You can use the inherited members as is, replace them, hide them, or supplement them with new members:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"You can declare a ",Object(i.b)("strong",{parentName:"li"},"field")," in the subclass with the same name as the one in the superclass, thus ",Object(i.b)("strong",{parentName:"li"},"hiding")," it ","(","not recommended",")","."),Object(i.b)("li",{parentName:"ul"},"You can declare new fields in the subclass that are not in the superclass."),Object(i.b)("li",{parentName:"ul"},"The inherited methods can be used directly as they are."),Object(i.b)("li",{parentName:"ul"},"You can write a new ",Object(i.b)("strong",{parentName:"li"},"instance method")," in the subclass that has the same signature as the one in the superclass, thus ",Object(i.b)("strong",{parentName:"li"},"overriding")," it."),Object(i.b)("li",{parentName:"ul"},"You can write a new ",Object(i.b)("strong",{parentName:"li"},"static method")," in the subclass that has the same signature as the one in the superclass, thus ",Object(i.b)("strong",{parentName:"li"},"hiding")," it."),Object(i.b)("li",{parentName:"ul"},"You can declare new methods in the subclass that are not in the superclass."),Object(i.b)("li",{parentName:"ul"},"You can write a subclass constructor that invokes the constructor of the superclass, either implicitly or by using the keyword ",Object(i.b)("inlineCode",{parentName:"li"},"super"),".")),Object(i.b)("p",null,"A nested class has access to all the private members of its enclosing class\u2014both fields and methods. Therefore, a public or protected nested class inherited by a subclass has indirect access to all of the private members of the superclass."),Object(i.b)("h2",{id:"polymorphism"},"Polymorphism"),Object(i.b)("h3",{id:"method-override"},"Method Override"),Object(i.b)("h3",{id:"source-code"},"Source Code"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java",metastring:'title="Test.java"',title:'"Test.java"'}),'public class Test {\n    private static class Parent {\n        public void print() {\n            System.out.println("Parent");\n        }\n    }\n\n    private static class Child extends Parent{\n        public void print() {\n            System.out.println("Child");\n        }\n    }\n\n    public static void main(String[] args) {\n        Parent o = new Child();\n        o.print();\n    }\n}\n')),Object(i.b)("h3",{id:"output"},"Output"),Object(i.b)("p",null,"Run the following commands."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"javac Test.java\n# You should see the following four files now.\n# 'Test$Child.class'  'Test$Parent.class'   Test.class   Test.java\n\n# disassembles Test class file\njavap -verbose Test\n")),Object(i.b)("p",null,"The complete output of",Object(i.b)("inlineCode",{parentName:"p"},"javap -verbose Test")," is in the last section. Here we only focus on two parts."),Object(i.b)("h4",{id:"constant-pool"},Object(i.b)("strong",{parentName:"h4"},"Constant Pool")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'Constant pool:\n   #1 = Methodref          #6.#20         // java/lang/Object."<init>":()V\n   #2 = Class              #21            // Test$Child\n   #3 = Methodref          #2.#20         // Test$Child."<init>":()V\n   #4 = Methodref          #9.#22         // Test$Parent.print:()V\n   #5 = Class              #23            // Test\n   #6 = Class              #24            // java/lang/Object\n   #7 = Utf8               Child\n   #8 = Utf8               InnerClasses\n   #9 = Class              #25            // Test$Parent\n  #10 = Utf8               Parent\n  #11 = Utf8               <init>\n  #12 = Utf8               ()V\n  #13 = Utf8               Code\n  #14 = Utf8               LineNumberTable\n  #15 = Utf8               main\n  #16 = Utf8               ([Ljava/lang/String;)V\n  #17 = Utf8               SourceFile\n  #18 = Utf8               Test.java\n  #19 = Utf8               NestMembers\n  #20 = NameAndType        #11:#12        // "<init>":()V\n  #21 = Utf8               Test$Child\n  #22 = NameAndType        #26:#12        // print:()V\n  #23 = Utf8               Test\n  #24 = Utf8               java/lang/Object\n  #25 = Utf8               Test$Parent\n  #26 = Utf8               print\n')),Object(i.b)("h4",{id:"bytecode"},"Bytecode"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'  public Test();\n    descriptor: ()V\n    flags: (0x0001) ACC_PUBLIC\n    Code:\n      stack=1, locals=1, args_size=1\n         0: aload_0\n         1: invokespecial #1                  // Method java/lang/Object."<init>":()V\n         4: return\n      LineNumberTable:\n        line 1: 0\n\n  public static void main(java.lang.String[]);\n    descriptor: ([Ljava/lang/String;)V\n    flags: (0x0009) ACC_PUBLIC, ACC_STATIC\n    Code:\n      stack=2, locals=2, args_size=1\n         0: new           #2                  // class Test$Child\n         3: dup\n         4: invokespecial #3                  // Method Test$Child."<init>":()V\n         7: astore_1\n         8: aload_1\n         9: invokevirtual #4                  // Method Test$Parent.print:()V\n        12: return\n      LineNumberTable:\n        line 15: 0\n        line 16: 8\n        line 17: 12\n')),Object(i.b)("h3",{id:"bytecode-tear-down"},"Bytecode Tear Down"),Object(i.b)("p",null,"Bytecode contains two parts: the constructor and the method."),Object(i.b)("h4",{id:"the-constructor"},"The Constructor"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'  public Test();\n    # it takes no argrments and it returns nothing.\n    descriptor: ()V\n    # it\'s public\n    flags: (0x0001) ACC_PUBLIC\n    Code:\n      stack=1, locals=1, args_size=1\n         0: aload_0\n         # implicitly invoke super(), which would call new Object() because every class inherits Object\n         1: invokespecial #1                  // Method java/lang/Object."<init>":()V\n         4: return\n      LineNumberTable:\n        line 1: 0\n')),Object(i.b)("h4",{id:"the-method"},"The Method"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'  public static void main(java.lang.String[]);\n    # it takes a String as an arguments and it returns nothing.\n    descriptor: ([Ljava/lang/String;)V\n    # it\'s public and static\n    flags: (0x0009) ACC_PUBLIC, ACC_STATIC\n    Code:\n      stack=2, locals=2, args_size=1\n         # this is a Child object\n         0: new           #2                  // class Test$Child\n         3: dup\n         # call Child constructor\n         4: invokespecial #3                  // Method Test$Child."<init>":()V\n         7: astore_1\n         8: aload_1\n         # call Parent print method\n         9: invokevirtual #4                  // Method Test$Parent.print:()V\n        12: return\n      LineNumberTable:\n        line 15: 0\n        line 16: 8\n        line 17: 12\n')),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Why ",Object(i.b)("inlineCode",{parentName:"p"},"Parent")," print method is called instead of ",Object(i.b)("inlineCode",{parentName:"p"},"Child"),"'s?"),Object(i.b)("pre",{parentName:"div"},Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"9: invokevirtual #4                  // Method Test$Parent.print:()V\n")),Object(i.b)("p",{parentName:"div"},"Because that is all the compiler knows."),Object(i.b)("ul",{parentName:"div"},Object(i.b)("li",{parentName:"ul"},"The compiler knows ",Object(i.b)("inlineCode",{parentName:"li"},"o")," is ",Object(i.b)("inlineCode",{parentName:"li"},"Parent")," type, so it calls ",Object(i.b)("inlineCode",{parentName:"li"},"Parent"),"'s method.")))),Object(i.b)("h4",{id:"constant-pool-tear-down"},"Constant Pool Tear Down"),Object(i.b)("p",null,"Let's read a few lines of Constant Pool."),Object(i.b)("p",null,"Because the first line of the code is ",Object(i.b)("inlineCode",{parentName:"p"},"Parent o = new Child();"),", it will call ",Object(i.b)("inlineCode",{parentName:"p"},"super();")," then it initialized itself.     "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'   #1 = Methodref          #6.#20         // java/lang/Object."<init>":()V\n   #2 = Class              #21            // Test$Child\n   #3 = Methodref          #2.#20         // Test$Child."<init>":()V\n')),Object(i.b)("p",null,"More information are available at:"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.oracle.com/javase/specs/jvms/se7/html/jvms-4.html#jvms-4.4"}),"https://docs.oracle.com/javase/specs/jvms/se7/html/jvms-4.html#jvms-4.4")),Object(i.b)("h3",{id:"polymorphism-1"},"Polymorphism"),Object(i.b)("p",null,"From Bytecode, we see that "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"9: invokevirtual #4                  // Method Test$Parent.print:()V\n")),Object(i.b)("p",null," is going to be called, which is ",Object(i.b)("inlineCode",{parentName:"p"},"Parent.print")," . "),Object(i.b)("p",null,"But polymorphism gives us a different result. Why?"),Object(i.b)("h4",{id:"vtable"},"VTable"),Object(i.b)("p",null,"If take ",Object(i.b)("inlineCode",{parentName:"p"},"C++")," approach as JVM's implementation, we can safely assume for each object, there is a ",Object(i.b)("em",{parentName:"p"},"VTable")," corresponding to it."),Object(i.b)("p",null,"When we declare ",Object(i.b)("inlineCode",{parentName:"p"},"Parent o"),", a ",Object(i.b)("em",{parentName:"p"},"VTable")," is created"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Reference"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Object.toString","(",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Object.toString","(",")")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Object.something else"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Object.something else")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Parent.print","(",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Parent.print","(",")")))),Object(i.b)("p",null,"\u270d When ",Object(i.b)("inlineCode",{parentName:"p"},"o")," was initialized to ",Object(i.b)("inlineCode",{parentName:"p"},"Child"),", ",Object(i.b)("inlineCode",{parentName:"p"},"Parent.print()")," would be ",Object(i.b)("strong",{parentName:"p"},"updated")," to ",Object(i.b)("inlineCode",{parentName:"p"},"Child.print()"),", resulting the following ",Object(i.b)("em",{parentName:"p"},"VTable")," :"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Reference"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Object.toString","(",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Object.toString","(",")")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Object.something else"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Object.something else")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Parent.print","(",")"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(i.b)("strong",{parentName:"td"},"Child.print","(",")"))))),Object(i.b)("p",null,"JVM will look up this ",Object(i.b)("em",{parentName:"p"},"VTable")," at running time to find ",Object(i.b)("inlineCode",{parentName:"p"},"#4 Test$Parent.print")," and would find that it's actually pointing to ",Object(i.b)("inlineCode",{parentName:"p"},"Child.print()"),". That's why it's called ",Object(i.b)("em",{parentName:"p"},"running time binding")," or ",Object(i.b)("em",{parentName:"p"},"dynamic binding"),", or ",Object(i.b)("em",{parentName:"p"},"late binding.")),Object(i.b)("h3",{id:"complete-output"},"Complete Output"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'Classfile $FULL_PATH_OF_THE_PROJECT/src/Test.class\n  Last modified $DATE; size 411 bytes\n  MD5 checksum dc8d7bc4039d222f5ff3d99c6bf3897d\n  Compiled from "Test.java"\npublic class Test\n  minor version: 0\n  major version: 55\n  flags: (0x0021) ACC_PUBLIC, ACC_SUPER\n  this_class: #5                          // Test\n  super_class: #6                         // java/lang/Object\n  interfaces: 0, fields: 0, methods: 2, attributes: 3\nConstant pool:\n   #1 = Methodref          #6.#20         // java/lang/Object."<init>":()V\n   #2 = Class              #21            // Test$Child\n   #3 = Methodref          #2.#20         // Test$Child."<init>":()V\n   #4 = Methodref          #9.#22         // Test$Parent.print:()V\n   #5 = Class              #23            // Test\n   #6 = Class              #24            // java/lang/Object\n   #7 = Utf8               Child\n   #8 = Utf8               InnerClasses\n   #9 = Class              #25            // Test$Parent\n  #10 = Utf8               Parent\n  #11 = Utf8               <init>\n  #12 = Utf8               ()V\n  #13 = Utf8               Code\n  #14 = Utf8               LineNumberTable\n  #15 = Utf8               main\n  #16 = Utf8               ([Ljava/lang/String;)V\n  #17 = Utf8               SourceFile\n  #18 = Utf8               Test.java\n  #19 = Utf8               NestMembers\n  #20 = NameAndType        #11:#12        // "<init>":()V\n  #21 = Utf8               Test$Child\n  #22 = NameAndType        #26:#12        // print:()V\n  #23 = Utf8               Test\n  #24 = Utf8               java/lang/Object\n  #25 = Utf8               Test$Parent\n  #26 = Utf8               print\n{\n  public Test();\n    descriptor: ()V\n    flags: (0x0001) ACC_PUBLIC\n    Code:\n      stack=1, locals=1, args_size=1\n         0: aload_0\n         1: invokespecial #1                  // Method java/lang/Object."<init>":()V\n         4: return\n      LineNumberTable:\n        line 1: 0\n\n  public static void main(java.lang.String[]);\n    descriptor: ([Ljava/lang/String;)V\n    flags: (0x0009) ACC_PUBLIC, ACC_STATIC\n    Code:\n      stack=2, locals=2, args_size=1\n         0: new           #2                  // class Test$Child\n         3: dup\n         4: invokespecial #3                  // Method Test$Child."<init>":()V\n         7: astore_1\n         8: aload_1\n         9: invokevirtual #4                  // Method Test$Parent.print:()V\n        12: return\n      LineNumberTable:\n        line 15: 0\n        line 16: 8\n        line 17: 12\n}\nSourceFile: "Test.java"\nNestMembers:\n  Test$Child\n  Test$Parent\n')),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"You may notice that there isn't that much information about the inner classes ",Object(i.b)("inlineCode",{parentName:"p"},"Parent")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Child"),". This is because they are compiled to the other two files:",Object(i.b)("inlineCode",{parentName:"p"},"Test$Parent.class")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Test$Child.class"),"."))))}o.isMDXComponent=!0},259:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return j}));var n=a(0),s=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var b=s.a.createContext({}),o=function(e){var t=s.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=o(e.components);return s.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.a.createElement(s.a.Fragment,{},t)}},d=s.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=o(a),d=n,j=p["".concat(r,".").concat(d)]||p[d]||m[d]||i;return a?s.a.createElement(j,c(c({ref:t},b),{},{components:a})):s.a.createElement(j,c({ref:t},b))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var b=2;b<i;b++)r[b]=a[b];return s.a.createElement.apply(null,r)}return s.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);