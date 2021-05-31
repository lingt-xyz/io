(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{162:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return b}));var a=t(2),r=t(9),i=(t(0),t(273)),l={title:"JavaScript"},c={id:"programming/JavaScript/JavaScript",isDocsHomePage:!1,title:"JavaScript",description:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Are-introductionto_JavaScript",source:"@site/docs/programming/JavaScript/JavaScript.md",permalink:"/docs/programming/JavaScript/JavaScript",editUrl:"https://github.com/lingt-xyz/io/tree/master/docs/programming/JavaScript/JavaScript.md",lastUpdatedAt:1622423015,sidebar:"javascript",next:{title:"React",permalink:"/docs/programming/JavaScript/React"}},o=[{value:"Overview",id:"overview",children:[]},{value:"Types",id:"types",children:[{value:"Number",id:"number",children:[]},{value:"String",id:"string",children:[]},{value:"Boolean",id:"boolean",children:[]},{value:"Other types",id:"other-types",children:[]}]},{value:"Variables",id:"variables",children:[]},{value:"Operators",id:"operators",children:[]},{value:"Control structures",id:"control-structures",children:[{value:"for...of",id:"forof",children:[]},{value:"for...in",id:"forin",children:[]},{value:"Logic",id:"logic",children:[]},{value:"Ternary operator",id:"ternary-operator",children:[]},{value:"<code>switch</code>",id:"switch",children:[]}]},{value:"Objects",id:"objects",children:[]},{value:"Arrays",id:"arrays",children:[{value:"Iterate",id:"iterate",children:[]}]},{value:"Functions",id:"functions",children:[{value:"Rest parameters",id:"rest-parameters",children:[]},{value:"Anonymous functions",id:"anonymous-functions",children:[]},{value:"Recursive functions",id:"recursive-functions",children:[]}]},{value:"Custom objects",id:"custom-objects",children:[{value:"Inner functions",id:"inner-functions",children:[]}]},{value:"Closures",id:"closures",children:[{value:"Uses of Closures",id:"uses-of-closures",children:[]}]},{value:"Arrow function",id:"arrow-function",children:[{value:"Used as methods",id:"used-as-methods",children:[]}]},{value:"Classes",id:"classes",children:[{value:"Class declarations",id:"class-declarations",children:[]},{value:"Class expressions",id:"class-expressions",children:[]}]}],s={rightToc:o};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript"}),"https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript")),Object(i.b)("h2",{id:"overview"},"Overview"),Object(i.b)("p",null,"JavaScript language:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"has no concept of input or output"),Object(i.b)("li",{parentName:"ul"},"designed to run as a scripting language in a host environment",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"most common host environment is the browser"),Object(i.b)("li",{parentName:"ul"},"but JavaScript interpreters can also be found in a huge list of other places",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"server-side environments such as Node.js"),Object(i.b)("li",{parentName:"ul"},"NoSQL databases like the open source Apache CouchDB"),Object(i.b)("li",{parentName:"ul"},"Adobe Acrobat, Adobe Photoshop"),Object(i.b)("li",{parentName:"ul"},"SVG images etc."))),Object(i.b)("li",{parentName:"ul"},"up to the host environment to provide mechanisms for communicating with the outside world"))),Object(i.b)("li",{parentName:"ul"},"multi-paradigm"),Object(i.b)("li",{parentName:"ul"},"dynamic language"),Object(i.b)("li",{parentName:"ul"},"supports object-oriented programming with object prototypes, instead of classes"),Object(i.b)("li",{parentName:"ul"},"supports functional programming \u2014 because they are objects, functions may be stored in variables and passed around like any other object")),Object(i.b)("h2",{id:"types"},"Types"),Object(i.b)("h3",{id:"number"},"Number"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"console.log(3 / 2);                 // 1.5\nconsole.log(Math.floor(3 / 2));     // 1\n\nisFinite(1 / 0); // false\nisFinite(-Infinity); // false\nisFinite(NaN); // false\n\n")),Object(i.b)("h4",{id:"convert-number"},"Convert Number"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// use the built-in parseInt() function\nparseInt('123', 10);    // 123\nparseInt('010', 10);    // 10\nparseInt('010');        // 8 (on some older browsers)\nparseInt('11', 2);      // 3\n\n// use the unary + operator\n+ '42';   // 42\n+ '010';  // 10\n+ '0x10'; // 16\n\n")),Object(i.b)("h4",{id:"nan"},"NaN"),Object(i.b)("p",null,'A special value called NaN (short for "Not a Number") is returned if the string is non-numeric:'),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"parseInt('hello', 10); // NaN\n\nNaN + 5; // NaN\n\nNumber.isNaN(NaN); // true\nNumber.isNaN('hello'); // false\nNumber.isNaN('1'); // false\nNumber.isNaN(undefined); // false\nNumber.isNaN({}); // false\nNumber.isNaN([1]) // false\nNumber.isNaN([1,2]) // false\n\n")),Object(i.b)("p",null,"But don\u2019t test for NaN using the global isNaN() function, ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN#confusing_special-case_behavior"}),"which has unintuitive behavior"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"isNaN('hello'); // true\nisNaN('1'); // false\nisNaN(undefined); // true\nisNaN({}); // true\nisNaN([1]) // false\nisNaN([1,2]) // true\n")),Object(i.b)("h3",{id:"string"},"String"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"'hello'.length; // 5\n\n'hello'.charAt(0); // \"h\"\n'hello, world'.replace('world', 'mars'); // \"hello, mars\"\n'hello'.toUpperCase(); // \"HELLO\"\n")),Object(i.b)("h3",{id:"boolean"},"Boolean"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},'false, 0, empty strings (""), NaN, null, and undefined all become false.'),Object(i.b)("li",{parentName:"ol"},"All other values become true.")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"Boolean('');  // false\nBoolean(234); // true\n")),Object(i.b)("h3",{id:"other-types"},"Other types"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"null"),": a value that indicates a deliberate non-value (and is only accessible through the ",Object(i.b)("inlineCode",{parentName:"li"},"null")," keyword)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"undefined"),": a value of type ",Object(i.b)("inlineCode",{parentName:"li"},"undefined")," that indicates an uninitialized variable \u2014 that is, a value hasn't even been assigned yet.")),Object(i.b)("h2",{id:"variables"},"Variables"),Object(i.b)("p",null,"New variables in JavaScript are declared using one of three keywords: ",Object(i.b)("inlineCode",{parentName:"p"},"let"),", ",Object(i.b)("inlineCode",{parentName:"p"},"const"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"var"),"."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"let")," allows you to declare block-level variables. The declared variable is available from the block it is enclosed in."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// myLetVariable is *not* visible out here\n\nfor (let myLetVariable = 0; myLetVariable < 5; myLetVariable++) {\n  // myLetVariable is only visible in here\n}\n\n// myLetVariable is *not* visible out here\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"const")," allows you to declare variables whose values are never intended to change. The variable is available from the block it is declared in."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const Pi = 3.14; // variable Pi is set\nPi = 1; // will throw an error because you cannot change a constant variable.\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"var")," is the most common declarative keyword. It does not have the restrictions that the other two keywords have. A variable declared with the var keyword is available from the function it is declared in."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// myVarVariable *is* visible out here\n\nfor (var myVarVariable = 0; myVarVariable < 5; myVarVariable++) {\n  // myVarVariable is visible to the whole function\n}\n\n// myVarVariable *is* visible out here\n")),Object(i.b)("p",null,"In JavaScript, blocks do not have scope; only functions have a scope. So if a variable is defined using ",Object(i.b)("inlineCode",{parentName:"p"},"var")," in a compound statement (for example inside an if control structure), it will be visible to the entire function. However, starting with ECMAScript 2015, ",Object(i.b)("inlineCode",{parentName:"p"},"let")," and ",Object(i.b)("inlineCode",{parentName:"p"},"const")," declarations allow you to create block-scoped variables."),Object(i.b)("p",null,"If you declare a variable without assigning any value to it, its type is ",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),"."),Object(i.b)("h2",{id:"operators"},"Operators"),Object(i.b)("p",null,"JavaScript's numeric operators are ",Object(i.b)("inlineCode",{parentName:"p"},"+"),", ",Object(i.b)("inlineCode",{parentName:"p"},"-"),", ",Object(i.b)("inlineCode",{parentName:"p"},"*"),", ",Object(i.b)("inlineCode",{parentName:"p"},"/")," and ",Object(i.b)("inlineCode",{parentName:"p"},"%")," which is the remainder operator."),Object(i.b)("p",null,"Values are assigned using ",Object(i.b)("inlineCode",{parentName:"p"},"="),"."),Object(i.b)("p",null,"Compound assignment using ",Object(i.b)("inlineCode",{parentName:"p"},"+="),", ",Object(i.b)("inlineCode",{parentName:"p"},"-=")," etc.."),Object(i.b)("p",null,"Increment and decrement ",Object(i.b)("inlineCode",{parentName:"p"},"++")," and ",Object(i.b)("inlineCode",{parentName:"p"},"--"),"."),Object(i.b)("p",null,"String concatenation ",Object(i.b)("inlineCode",{parentName:"p"},"+"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// Adding an empty string to something is a useful way of converting it to a string itself.\n'' + 4;         // \"4\"\n'3' + 4 + 5;    // \"345\"\n3 + 4 + '5';    // \"75\"\n")),Object(i.b)("p",null,"Comparisons: ",Object(i.b)("inlineCode",{parentName:"p"},"<"),", ",Object(i.b)("inlineCode",{parentName:"p"},">"),", ",Object(i.b)("inlineCode",{parentName:"p"},"<="),", ",Object(i.b)("inlineCode",{parentName:"p"},">="),"."),Object(i.b)("p",null,"Equality: ",Object(i.b)("inlineCode",{parentName:"p"},"==")," and ",Object(i.b)("inlineCode",{parentName:"p"},"==="),", ",Object(i.b)("inlineCode",{parentName:"p"},"!=")," and ",Object(i.b)("inlineCode",{parentName:"p"},"!=="),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"123 == '123';   // true\n1 == true;      // true\n\n123 === '123';  // false\n1 === true;     // false\n")),Object(i.b)("h2",{id:"control-structures"},"Control structures"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var name = 'kittens';\nif (name === 'puppies') {\n  name += ' woof';\n} else if (name === 'kittens') {\n  name += ' meow';\n} else {\n  name += '!';\n}\nname === 'kittens meow';\n\n\nwhile (true) {\n  // an infinite loop!\n}\n\nvar input;\ndo {\n  input = get_input();\n} while (inputIsNotValid(input));\n\nfor (var i = 0; i < 5; i++) {\n  // Will execute 5 times\n}\n")),Object(i.b)("h3",{id:"forof"},"for...of"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const array1 = ['a', 'b', 'c'];\n\nfor (const element of array1) {\n  console.log(element);\n}\n\n// expected output: \"a\"\n// expected output: \"b\"\n// expected output: \"c\"\n")),Object(i.b)("h3",{id:"forin"},"for...in"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'const object = { a: 1, b: 2, c: 3 };\n\nfor (const property in object) {\n  console.log(`${property}: ${object[property]}`);\n}\n\n// expected output:\n// "a: 1"\n// "b: 2"\n// "c: 3"\n')),Object(i.b)("h3",{id:"logic"},"Logic"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"&&")," and ",Object(i.b)("inlineCode",{parentName:"p"},"||")," operators use short-circuit logic."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// checking for null objects before accessing their attributes\nvar name = o && o.getName();\n\n// caching values (when falsy values are invalid)\nvar name = cachedName || (cachedName = getName());\n")),Object(i.b)("h3",{id:"ternary-operator"},"Ternary operator"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var allowed = (age > 18) ? 'yes' : 'no';\n")),Object(i.b)("h3",{id:"switch"},Object(i.b)("inlineCode",{parentName:"h3"},"switch")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"switch (action) {\n  case 'draw':\n    drawIt();\n    break;\n  case 'eat':\n    eatIt();\n    break;\n  default:\n    doNothing();\n}\n\nswitch (a) {\n  case 1: // fallthrough\n  case 2:\n    eatIt();\n    break;\n  default:\n    doNothing();\n}\n\n")),Object(i.b)("h2",{id:"objects"},"Objects"),Object(i.b)("p",null,"JavaScript objects can be thought of as simple collections of name-value pairs."),Object(i.b)("p",null,"There are two basic ways to create an empty object:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"var obj = new Object();")),Object(i.b)("p",null,"And:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"var obj = {};")),Object(i.b)("p",null,"The second is called object literal syntax and is more convenient. This syntax is also the core of JSON format and should be preferred at all times."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var obj = {\n  name: 'Carrot',\n  _for: 'Max', // 'for' is a reserved word, use '_for' instead.\n  details: {\n    color: 'orange',\n    size: 12\n  }\n};\n\nobj.details.color; // orange\nobj['details']['size']; // 12\n\n")),Object(i.b)("p",null,"The following example creates an object prototype(",Object(i.b)("inlineCode",{parentName:"p"},"Person"),") and an instance of that prototype(",Object(i.b)("inlineCode",{parentName:"p"},"you"),")."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function Person(name, age) {\n  this.name = name;\n  this.age = age;\n}\n\n// Define an object\nvar you = new Person('You', 24);\n// We are creating a new person named \"You\" aged 24.\n\n// dot notation\nobj.name = 'Simon';\nvar name = obj.name;\n\n// bracket notation\nobj['name'] = 'Simon';\nvar name = obj['name'];\n// can use a variable to define a key\nvar user = prompt('what is your key?')\nobj[user] = prompt('what is its value?')\n\n")),Object(i.b)("h2",{id:"arrays"},"Arrays"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var a = new Array();\na[0] = 'dog';\na[1] = 'cat';\na[2] = 'hen';\na.length; // 3\n\nvar a = ['dog', 'cat', 'hen'];\na.length; // 3\n\nvar a = ['dog', 'cat', 'hen'];\na[100] = 'fox';\na.length; // 101\n\ntypeof a[90]; // undefined\n\na.push(item);\n")),Object(i.b)("h3",{id:"iterate"},"Iterate"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"for (var i = 0; i < a.length; i++) {\n  // Do something with a[i]\n}\n\nfor (const currentValue of a) {\n  // Do something with currentValue\n}\n\n['dog', 'cat', 'hen'].forEach(function(currentValue, index, array) {\n  // Do something with currentValue or array[index]\n});\n")),Object(i.b)("table",null,Object(i.b)("thead",null,Object(i.b)("tr",null,Object(i.b)("th",{scope:"col"},"Method name"),Object(i.b)("th",{scope:"col"},"Description"))),Object(i.b)("tbody",null,Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("code",null,"a.toString()")),Object(i.b)("td",null,"Returns a string with the ",Object(i.b)("code",null,"toString()")," of each element separated by commas.")),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("code",null,"a.toLocaleString()")),Object(i.b)("td",null,"Returns a string with the ",Object(i.b)("code",null,"toLocaleString()")," of each element separated by commas.")),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("code",null,"a.concat(item1[, item2[, ...[, itemN]]])")),Object(i.b)("td",null,"Returns a new array with the items added on to it.")),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("code",null,"a.join(sep)")),Object(i.b)("td",null,"Converts the array to a string \u2014 with values delimited by the ",Object(i.b)("code",null,"sep")," param")),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("code",null,"a.pop()")),Object(i.b)("td",null,"Removes and returns the last item.")),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("code",null,"a.push(item1, ..., itemN)")),Object(i.b)("td",null,"Appends items to the end of the array.")),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("code",null,"a.shift()")),Object(i.b)("td",null,"Removes and returns the first item.")),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("code",null,"a.unshift(item1[, item2[, ...[, itemN]]])")),Object(i.b)("td",null,"Prepends items to the start of the array.")),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("code",null,"a.slice(start[, end])")),Object(i.b)("td",null,"Returns a sub-array.")),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("code",null,"a.sort([cmpfn])")),Object(i.b)("td",null,"Takes an optional comparison function.")),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("code",null,"a.splice(start, delcount[, item1[, ...[, itemN]]])")),Object(i.b)("td",null,"Lets you modify an array by deleting a section and replacing it with more items.")),Object(i.b)("tr",null,Object(i.b)("td",null,Object(i.b)("code",null,"a.reverse()")),Object(i.b)("td",null,"Reverses the array.")))),Object(i.b)("h2",{id:"functions"},"Functions"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function add(x, y) {\n  var total = x + y;\n  return total;\n}\n")),Object(i.b)("p",null,"If no return statement is used (or an empty return with no value), JavaScript returns ",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),"."),Object(i.b)("p",null,"You can call a function without passing the parameters it expects, in which case they will be set to ",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"add(); // NaN\n// You can't perform addition on undefined\n\nadd(2, 3, 4); // 5\n// added the first two; 4 was ignored\n")),Object(i.b)("p",null,"Functions have access to an additional variable inside their body called arguments, which is an array-like object holding all of the values passed to the function."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function avg() {\n  var sum = 0;\n  for (var i = 0, j = arguments.length; i < j; i++) {\n    sum += arguments[i];\n  }\n  return sum / arguments.length;\n}\n\navg(2, 3, 4, 5); // 3.5\n")),Object(i.b)("h3",{id:"rest-parameters"},"Rest parameters"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function avg(...args) {\n  var sum = 0;\n  for (let value of args) {\n    sum += value;\n  }\n  return sum / args.length;\n}\n\navg(2, 3, 4, 5); // 3.5\n\navg.apply(null, [2, 3, 4, 5]); // 3.5\n\navg(...numbers)\n\n")),Object(i.b)("h3",{id:"anonymous-functions"},"Anonymous functions"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var avg = function() {\n  var sum = 0;\n  for (var i = 0, j = arguments.length; i < j; i++) {\n    sum += arguments[i];\n  }\n  return sum / arguments.length;\n};\n")),Object(i.b)("h3",{id:"recursive-functions"},"Recursive functions"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function countChars(elm) {\n  if (elm.nodeType == 3) { // TEXT_NODE\n    return elm.nodeValue.length;\n  }\n  var count = 0;\n  for (var i = 0, child; child = elm.childNodes[i]; i++) {\n    count += countChars(child);\n  }\n  return count;\n}\n")),Object(i.b)("h2",{id:"custom-objects"},"Custom objects"),Object(i.b)("p",null,"Version 1"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function makePerson(first, last) {\n  return {\n    first: first,\n    last: last\n  };\n}\nfunction personFullName(person) {\n  return person.first + ' ' + person.last;\n}\nfunction personFullNameReversed(person) {\n  return person.last + ', ' + person.first;\n}\n\nvar s = makePerson('Simon', 'Willison');\npersonFullName(s); // \"Simon Willison\"\npersonFullNameReversed(s); // \"Willison, Simon\"\n")),Object(i.b)("p",null,"Version 2"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function makePerson(first, last) {\n  return {\n    first: first,\n    last: last,\n    fullName: function() {\n      return this.first + ' ' + this.last;\n    },\n    fullNameReversed: function() {\n      return this.last + ', ' + this.first;\n    }\n  };\n}\n\nvar s = makePerson('Simon', 'Willison');\ns.fullName(); // \"Simon Willison\"\ns.fullNameReversed(); // \"Willison, Simon\"\n")),Object(i.b)("p",null,"Version 3"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function Person(first, last) {\n  this.first = first;\n  this.last = last;\n  this.fullName = function() {\n    return this.first + ' ' + this.last;\n  };\n  this.fullNameReversed = function() {\n    return this.last + ', ' + this.first;\n  };\n}\nvar s = new Person('Simon', 'Willison');\n")),Object(i.b)("p",null,"Version 4"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function personFullName() {\n  return this.first + ' ' + this.last;\n}\nfunction personFullNameReversed() {\n  return this.last + ', ' + this.first;\n}\nfunction Person(first, last) {\n  this.first = first;\n  this.last = last;\n  this.fullName = personFullName;\n  this.fullNameReversed = personFullNameReversed;\n}\n")),Object(i.b)("p",null,"Version 5"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function Person(first, last) {\n  this.first = first;\n  this.last = last;\n}\nPerson.prototype.fullName = function() {\n  return this.first + ' ' + this.last;\n};\nPerson.prototype.fullNameReversed = function() {\n  return this.last + ', ' + this.first;\n};\n\nvar s = new Person('Simon', 'Willison');\ns.toString(); // [object Object]\n\nPerson.prototype.toString = function() {\n  return '<Person: ' + this.fullName() + '>';\n}\n\ns.toString(); // \"<Person: Simon Willison>\"\n")),Object(i.b)("h3",{id:"inner-functions"},"Inner functions"),Object(i.b)("p",null,"Nested functions in JavaScript can access variables in their parent function's scope:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function parentFunc() {\n  var a = 1;\n\n  function nestedFunc() {\n    var b = 4; // parentFunc can't use this\n    return a + b;\n  }\n  return nestedFunc(); // 5\n}\n")),Object(i.b)("h2",{id:"closures"},"Closures"),Object(i.b)("p",null,"A ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/111102/how-do-javascript-closures-work"}),"closure")," is a pairing of:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"A function, and"),Object(i.b)("li",{parentName:"ol"},"A reference to that function's outer scope (lexical environment)")),Object(i.b)("p",null,"In the following code, ",Object(i.b)("inlineCode",{parentName:"p"},"inner")," forms a closure with the lexical environment of the execution context created when ",Object(i.b)("inlineCode",{parentName:"p"},"foo")," is invoked, closing over variable ",Object(i.b)("inlineCode",{parentName:"p"},"secret"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function foo() {\n  const secret = Math.trunc(Math.random()*100)\n  return function inner() {\n    console.log(`The secret number is ${secret}.`)\n  }\n}\nconst f = foo() // `secret` is not directly accessible from outside `foo`\nf() // The only way to retrieve `secret`, is to invoke `f`\n")),Object(i.b)("p",null,'In other words: in JavaScript, functions carry a reference to a private "box of state", to which only they (and any other functions declared within the same lexical environment) have access. This box of the state is invisible to the caller of the function, delivering an excellent mechanism for data-hiding and encapsulation.'),Object(i.b)("h3",{id:"uses-of-closures"},"Uses of Closures"),Object(i.b)("p",null,"Closures are useful whenever you need a private state associated with a function."),Object(i.b)("h4",{id:"private-instance-variables"},"Private Instance Variables"),Object(i.b)("p",null,"In the following code, the function ",Object(i.b)("inlineCode",{parentName:"p"},"toString")," closes over the details of the car."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function Car(manufacturer, model, year, color) {\n  return {\n    toString() {\n      return `${manufacturer} ${model} (${year}, ${color})`\n    }\n  }\n}\nconst car = new Car('Aston Martin','V8 Vantage','2012','Quantum Silver')\nconsole.log(car.toString())\n")),Object(i.b)("h4",{id:"functional-programming"},"Functional Programming"),Object(i.b)("p",null,"In the following code, the function ",Object(i.b)("inlineCode",{parentName:"p"},"inner")," closes over both ",Object(i.b)("inlineCode",{parentName:"p"},"fn")," and ",Object(i.b)("inlineCode",{parentName:"p"},"args"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"function curry(fn) {\n  const args = []\n  return function inner(arg) {\n    if(args.length === fn.length) return fn(...args)\n    args.push(arg)\n    return inner\n  }\n}\n\nfunction add(a, b) {\n  return a + b\n}\n\nconst curriedAdd = curry(add)\nconsole.log(curriedAdd(2)(3)()) // 5\n")),Object(i.b)("h2",{id:"arrow-function"},"Arrow function"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'// Traditional Function\nfunction (a){\n  return a + 100;\n}\n\n// Arrow Function Break Down\n\n// 1. Remove the word "function" and place arrow between the argument and opening body bracket\n(a) => {\n  return a + 100;\n}\n\n// 2. Remove the body brackets and word "return" -- the return is implied.\n(a) => a + 100;\n\n// 3. Remove the argument parentheses\na => a + 100;\n')),Object(i.b)("p",null,"If you have multiple arguments or no arguments:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// Traditional Function\nfunction (a, b){\n  return a + b + 100;\n}\n\n// Arrow Function\n(a, b) => a + b + 100;\n\n// Traditional Function (no arguments)\nlet a = 4;\nlet b = 2;\nfunction (){\n  return a + b + 100;\n}\n\n// Arrow Function (no arguments)\nlet a = 4;\nlet b = 2;\n() => a + b + 100;\n")),Object(i.b)("p",null,"If the body requires additional lines of processing:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// Traditional Function\nfunction (a, b){\n  let chuck = 42;\n  return a + b + chuck;\n}\n\n// Arrow Function\n(a, b) => {\n  let chuck = 42;\n  return a + b + chuck;\n}\n")),Object(i.b)("p",null,"Named functions:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"// Traditional Function\nfunction bob (a){\n  return a + 100;\n}\n\n// Arrow Function\nlet bob = a => a + 100;\n")),Object(i.b)("h3",{id:"used-as-methods"},"Used as methods"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var obj = { // does not create a new scope\n  i: 10,\n  b: () => console.log(this.i, this),\n  c: function() {\n    console.log(this.i, this);\n  }\n}\n\nobj.b(); // prints undefined, Window {...} (or the global object)\nobj.c(); // prints 10, Object {...}\n")),Object(i.b)("h2",{id:"classes"},"Classes"),Object(i.b)("h3",{id:"class-declarations"},"Class declarations"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"class Rectangle {\n  constructor(height, width) {\n    this.height = height;\n    this.width = width;\n  }\n}\n")),Object(i.b)("h3",{id:"class-expressions"},"Class expressions"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'// unnamed\nlet Rectangle = class {\n  constructor(height, width) {\n    this.height = height;\n    this.width = width;\n  }\n};\nconsole.log(Rectangle.name);\n// output: "Rectangle"\n\n// named\nlet Rectangle = class Rectangle2 {\n  constructor(height, width) {\n    this.height = height;\n    this.width = width;\n  }\n};\nconsole.log(Rectangle.name);\n// output: "Rectangle2"\n')))}b.isMDXComponent=!0},273:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),b=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=b(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=b(t),d=a,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return t?r.a.createElement(m,c(c({ref:n},s),{},{components:t})):r.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<i;s++)l[s]=t[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);