# read-professional-javascript-for-web-developers
\## 第1章 什么是JavaScript

\### 历史

JS 于 1995 年，由 Brendan Eich 在 Netscape 开发。

\### 实现

完整的 JavaScript 实现包括：

-   核心 ECMAScript
-   DOM
-   BOM

\### ECMAScript

在低水平描绘了该语言的\`语法、类型、语句、关键字、保留字、操作符、全局对象\`。

::: info 定义 ECMAScript is simply a description of a language
implementing all of the facets described in the specification. :::

ECMAScript 是一个语言实现的描述。

ECMA-262 有多个版本。ES5（2009.12） 和 ES6（2015.06，也称为 ES2015）
版本比较重要。

\### ES5

ES5 引入了（\[src\](<https://www.w3schools.com/js/js_es5.asp>)）：

-   \"use strict\"
-   String\[number\] access
-   Multiline strings
-   String.trim()
-   Array.isArray()
-   Array forEach()
-   Array map()
-   Array filter()
-   Array reduce()
-   Array reduceRight()
-   Array every()
-   Array some()
-   Array indexOf()
-   Array lastIndexOf()
-   JSON.parse()
-   JSON.stringify()

Date.now()

-   Date toISOString()
-   Date toJSON()
-   Property getters and setters

Reserved words as property names

-   Object methods
-   Object defineProperty()
-   Function bind()
-   Trailing commas

\### ES6

ES6 引入了（\[src\](<https://www.w3schools.com/js/js_es6.asp>)）：

-   The let keyword
-   The const keyword
-   Arrow Functions
-   For/of
-   Map Objects
-   Set Objects
-   Classes
-   Promises
-   Symbol
-   Default Parameters
-   Function Rest Parameter
-   String.includes()
-   String.startsWith()
-   String.endsWith()
-   Array.from()
-   Array keys()
-   Array find()
-   Array findIndex()
-   New Math Methods
-   New Number Properties
-   New Number Methods
-   New Global Methods
-   Object entries
-   JavaScript Modules

2018 年，所有浏览器都支持
ES6（\[src\](<https://www.w3schools.com/js/js_history.asp>)）。

\### DOM

DOM 是一种基于 XML 扩展的用于 HTML 的应用编程接口。用于操作网页内容。

DOM 级别。

\### BOM

BOM 用于操作浏览器本身：

-   窗口的各种变换
-   导航
-   位置
-   屏幕
-   性能
-   支持 Cookies

\## 第2章 HTML中的JavaScript

\### \`\<script\>\` 用法

\`\`\`html \<script src=\"example.js\" async defer
crossorigin=\"anonymous\" integrity type=\"module\"\>
console.log(\"Hello\") \</script\> \`\`\`

\### 注意

不能这样做：

\`\`\`html \<script\> function sth() { console.log(\"\</script\>\") }
sth() \</script\> \`\`\`

可以这样：

\`\`\`html \<script\> function sth() { console.log(\"\<\\/script\>\") }
sth() \</script\> \`\`\`

::: tip 外部文件不查扩展 ❓ By convention, external JavaScript files
have a .js extension. This is not a requirement because browsers do not
check the file extension of included JavaScript files :::

如果同时指定行内 script 和外部，行内 JS 代码会被忽略。

\### \`\<script\>\` 位置

有以下几种：

\`\`\`html \<!DOCTYPE html\> \<html\> \<head\> ... \<script\>\</script\>
\</head\> \<body\>

\</body\> \</html\> \`\`\`

::: info Including all JavaScript files in the \`\<head\>\` of a
document means that all of the JavaScript code must be downloaded,
parsed, and interpreted before the page begins rendering. :::

\`\`\`html \<!DOCTYPE html\> \<html\> \<head\> ... \</head\> \<body\>

\<script\>\</script\> \</body\> \</html\> \`\`\`

\`\`\`html \<!DOCTYPE html\> \<html\> \<head\> ... \<script
defer\>\</script\> \</head\> \<body\>

\</body\> \</html\> \`\`\`

这样做，告诉浏览器等页面加载完 HTML、CSS 后再加载这个 JS。\`defer\`
只对外部文件起作用。

\`\`\`html \<!DOCTYPE html\> \<html\> \<head\> ... \<script
async\>\</script\> \</head\> \<body\>

\</body\> \</html\> \`\`\`

HTML5 引入了 script 的 async（异步）属性。和 \`defer\`
一样，只对外部文件起作用。

::: tip The purpose of specifying an async script is to indicate that
the page need not wait for the script to be downloaded and executed
before continuing to load, and it also need not wait for another script
to load and execute before it can do the same. Because of this, it's
recommended that asynchronous scripts not modify the DOM as they are
loading. :::

\### 动态脚本加载

可以使用 DOM API 动态加载 script 脚本。

示例：

\`\`\`js let script = document.createElement(\'script\') script.src =
\'example.js\' document.head.appendChild(script) \`\`\`

::: info This request will not be generated until the HTMLElement is
attached to the DOM, and therefore not until this script itself runs. By
default, scripts that are created in this fashion are async. This can be
problematic, however, as all browsers support createElement but not all
support asyncscript requests. Therefore, to unify the dynamic script
loading behavior, you can explicitly mark the tag as synchronous. :::

修改后的示例：

\`\`\`js let script = document.createElement(\'script\') script.src =
\'example.js\' script.async = false document.head.appendChild(script)
\`\`\`

Resources fetched in this fashion will be hidden from browser
preloaders. This will severely injure their priority in the resource
fetching queue. Depending on how your application works and how it is
used, this can severely damage performance. To inform preloaders of the
existence of these dynami-cally requested files, you can explicitly
declare them in the document head:

\`\`\`html \<link rel=\"subresource\" href=\"example.js\"\> \`\`\`

\### XHTML 中的变化

需要时再读。

\### 其他杂项

-   文档模式
-   \`\<noscript\>\`

\## 第三章 语言基础

\### 语法

-   大小写敏感
-   标识符
    -   命名规则：首字母可以是字母、下划线 \`\_\` 或美元符号
        \`\$\`，余下部分\*\*还\*\*可以是数字
    -   命名格式：camel case
-   注释 \`//...\` 或 \`/\* 跨行 \*/\`
-   严格模式 \`\"use strict\"\`
    -   该模式下
        -   可以接受的错误（mistakes）被转为不可接受的错误（errors）
        -   简化了变量的使用
        -   让 \`eval\` 和 \`arguments\` 更简单
        -   提供更安全的 JavaScript
    -   \`\"use strict\"\`
        有几个位置：一是一个文件的顶端，二是一个函数的顶端。具体：\`eval\`
        code, \`Function\` code, event handler attributes, strings
        passed to
        \[\`setTimeout()\`\](<https://developer.mozilla.org/en-US/docs/Web/API/setTimeout>),
        and related functions are entire scripts, and invoking strict
        mode in them works as expected.
    -   In strict mode, starting with ES2015, functions inside blocks
        are scoped to that block. Prior to ES2015, block-level functions
        were forbidden in strict mode. ECMAScript 2015 introduced
        JavaScript modules and therefore a 3rd way to enter strict mode.
        The entire contents of JavaScript modules are automatically in
        strict mode, with no statement needed to initiate it.\[^1^\]
    -   All parts of ECMAScript classes are strict mode code, including
        both class declarations and class expressions --- and so also
        including all parts of class bodies.
-   语句

\[^1^\]:
<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#invoking_strict_mode>

\### 严格模式示例

\#### 将正常转为错误

1.  不能意外创建全局变量

\`\`\`js \'use strict\';

let a; ab = 34; console.log(ab); // ReferenceError: ab is not defined
\`\`\`

如果注释掉 \`\'use strict\'\`，程序会运行。

1.  不能对某些量进行赋值

如果赋值给不可写全局变量（NaN、undefined、Infinity 等），会报错。

\`\`\`js \'use strict\';

NaN = 23; // TypeError: Cannot assign to read only property \'NaN\' of
object \'#\<Object\>\' \`\`\`

1.  不能删除不可删除的对象

\`\`\`js \'use strict\';

delete Object.prototype; // TypeError: Cannot delete property
\'prototype\' of function Object() { \[native code\] } \`\`\`

1.  ES5 中的严格模式下，函数的参数名必须是唯一的

一般情况：

\`\`\`js function sum(a, a, c) { return a + a + c; } console.log(sum(1,
2, 3)); // 7 \`\`\`

严格模式：

\`\`\`js function sum(a, a, c) { \'use strict\'; return a + a + c; }
console.log(sum(1, 2, 3)); // SyntaxError: Duplicate parameter name not
allowed in this context \`\`\`

1.  ES5 中的严格模式下，禁止使用 0 开头的八进制数字或转义序列

\`\`\`js \'use strict\';

let sum = 015 + 197 + 142; // SyntaxError: Octal literals are not
allowed in strict mode \`\`\`

1.  ES2015 的严格模式下，不允许为原始类型设置属性值

ES5 的严格模式下，重复的属性名被视为错误。

\#### 简化了变量的使用

1.  禁止使用 \`with\`

\`\`\`js \'use strict\'

with(obj) // SyntaxError: Strict mode code may not include a with
statement \`\`\`

1.  \`eval\` 中使用严格模式，不会为当前的父作用域引入变量

\`\`\`js let x = 17; let evalX = eval(\'let x = 42; x;\'); console.log(x
`=`{.verbatim} 17); console.log(evalX `=`{.verbatim} 42); // true var x
= 17; let evalX = eval(\'var x = 42; x;\'); console.log(x `=`{.verbatim}
17); console.log(evalX `=`{.verbatim} 42); // true let x = 17; let evalX
= eval(\'var x = 42; x;\'); console.log(x `=`{.verbatim} 17);
console.log(evalX `=`{.verbatim} 42); // SyntaxError: Identifier \'x\'
has already been declared \`\`\`

此时 \`use strict\` 和 \`let\`
具备同样的效果：把变量限制在当前作用域范围。

\`\`\`js (function () { \'use strict\'; let x = 3;
console.log(eval(\'var x = 6; console.log(x)\')); })()( // 6 //
undefined function () { // \'use strict\' let x = 3;
console.log(eval(\'var x = 6; console.log(x)\')); } )(); // SyntaxError:
Identifier \'x\' has already been declared \`\`\`

1.  禁止删除纯名字

\`\`\`js \'use strict\';

let a; delete a; // SyntaxError: Delete of an unqualified identifier in
strict mode \`\`\`

\#### 让 \`eval\` 和 \`arguments\` 更简单

1.  无法像一般变量那样进行赋值、加减操作

\`\`\`js \'use strict\';

eval = 17; arguments++; ++eval; var obj = { set p(arguments) {} }; var
eval; try { } catch (arguments) {} function x(eval) {}

// SyntaxError: Unexpected eval or arguments in strict mode \`\`\`

1.  不能为 \`arguments\` 设置别名（:question:）

2.  \`arguments.callee\` 不再支持

\`\`\`js \'use strict\';

(function () { return arguments.callee; })(); // TypeError: \'caller\',
\'callee\', and \'arguments\' properties may not be accessed on strict
mode functions or the arguments objects for calls to them \`\`\`

\#### 提供更安全的 JavaScript

1.  函数中传递给 \`this\` 不必是一个对象

\`\`\`js \'use strict\';

console.log( (function () { return this; })() ); // undefined \`\`\`

1.  It\'s no longer possible to \"walk\" the JavaScript stack via
    commonly-implemented extensions to ECMAScript

\`\`\`js function restricted() { \'use strict\'; restricted.caller;
restricted.arguments; }

function privilegedInvoker() { return restricted(); }

privilegedInvoker(); \`\`\`

\### 关键字、保留字

break, do, in, typeof, case, else, instanceof, var, catch, export, new,
void, class, extends, return, while, const, finally, super, with,
continue, for, switch, yield, debugger, function, this, default, if,
throw, delete, import, try, enum, implements, package, public,
interface, protected, static, let, private, await

\### 变量

松散类型（变量的数据类型不受限制）。在 ES6 以前，声明变量一律使用
\`var\`；ES6 引入了 \`let\`，用于定义变量。

\#### \`var\`

\`\`\`js var msg; // 此时 msg 的值为 undefined \`\`\`

\`\`\`js var msg = \'hi\'; \`\`\`

在这句话中，不要认为 msg
变量被赋值为字符串，而是一个值被赋给一个变量。在此之后，还可以把一个数字赋给该变量。

1.  作用域

\`\`\`js function test() { var msg = \'Hi\'; } test(); console.log(msg);
\`\`\`

此时声明的变量 msg 被限制在函数内部，在全局作用域无法获取到。

如何能在全局作用域获取呢？

\`\`\`js function test() { msg = \'Hi\'; } test(); console.log(msg);
\`\`\`

删除 \`var\`
即可。严格模式下，不允许这样做。但是，这样会创建全局变量，不利于代码维护。

一次定义多个变量：

\`\`\`js var a = 1, b = 2, v = 3; \`\`\`

1.  声明提升

\`\`\`js function test() { console.log(msg); var msg = \'Hi\';
console.log(msg); } test(); // undefined // Hi \`\`\`

JS 解释器没有报错，是因为 var 造成的变量提升，实际的代码是：

\`\`\`js function test() { var msg; console.log(msg); msg = \'Hi\';
console.log(msg); } test(); \`\`\`

hoisting 的意思是，解释器将所有对变量的声明放到当前作用域的最开始。

var 还可以声明多次，每次对变量赋不同的值，下面的新值会覆盖旧值。

\#### \`let\`

与 \`var\` 的最大不同是，\`let\` 声明了块级作用域；\`var\`
声明了函数作用域。

\`\`\`js if (true) { var a = \'b\'; console.log(a); } console.log(a);
\`\`\`

\`\`\`js if (true) { let a = \'b\'; console.log(a); } console.log(a); //
ReferenceError: a is not defined \`\`\`

\`let\` 不允许重复声明变量。

\`\`\`js var name; let age; let age; // SyntaxError: Identifier \'age\'
has already been declared \`\`\`

\`var\` 和 \`let\`
声明的变量在数据类型上并无不同，区别仅在于与变量相关的作用域。

1.  暂时性死区

\`let\`
声明的变量并无提升，所以会出现要引用的变量还没有声明的情况，这被称为"暂时性死区（Temporal
Dead Zone）"。

\`\`\`js console.log(error); let error = \'error\'; // ReferenceError:
Cannot access \'error\' before initialization \`\`\`

1.  全局声明

\`let\` 声明的全局变量，不会自动附着于 window 对象，\`var\` 则会。

\`\`\`js var name = \'tianheg\'; console.log(window.name); // tianheg
let name = \'tianheg\'; console.log(window.name); // undefined \`\`\`

1.  条件声明

为什么 \`let\` 不建议进行条件声明？

因为这样做会让代码难以阅读，

1.  for 循环中的 let 声明

\`\`\`js for (var i = 0; i \< 3; i++) { console.log(i); // 0 1 2 }
console.log(i); // 3

for (let i = 0; i \< 3; i++) { console.log(i); // 0 1 2 }
console.log(i); // Uncaught ReferenceError: i is not defined \`\`\`

由此可见，let 把变量 i 限制在 for 循环中。

\`\`\`js for (var i = 0; i \< 3; i++) { setTimeout(() =\>
console.log(i), 0); // 3 3 3 } for (let i = 0; i \< 3; i++) {
setTimeout(() =\> console.log(i), 0); // 0 1 2 } \`\`\`

在这里，两者的不同在于：var 声明的 i 在每次循环结束后还复用前一次的
i；使用 let 则会让 JavaScript 引擎在每次循环都新建一个迭代器变量。

\#### \`const\`

\`const\` 和 \`let\`
在大多数方面表现一致，但是它有一个最大不同------在初始化的时候必须有值，且值在声明后不变。

\`\`\`js const age = 21; age = 22; // TypeError: invalid assignment to
const \'age\' \`\`\`

试图修改 const 变量会导致运行时错误。

\`\`\`js const age = 21; const age = 22; // SyntaxError: redeclaration
of const age \`\`\`

无法重复声明。

\`\`\`js const age = 21; if (true) { const age = 22; } console.log(age);
// 21 \`\`\`

而且和 let 一样，仅对当前作用域起作用。

\`\`\`js const person = {}; person.name = \'tianheg\';
console.log(person); // Object { name: \"tianheg\" } \`\`\`

const 只限制变量本身不能改变，如果变量是对象，改变变量的属性是可以的。

\`\`\`js for (const i = 0; i \< 3; i++) { // TypeError: invalid
assignment to const \'i\' console.log(i); // 0 } \`\`\`

const 无法用于这个 for 循环。但是，const 可以用在以下 for 循环。

\`\`\`js let i = 0; for (const j = 4; i \< 3; i++) { console.log(j); //
4 4 4 } \`\`\`

\`\`\`js for (const key in { a: 1, b: 2 }) { console.log(key); // a b }
\`\`\`

发现一件事：for-in 和 for-of 是有区别的。

\`\`\`js for (const value of \[1, 2, 3, 4, 5\]) { console.log(value); //
1 2 3 4 5 }

for (const value in \[1, 2, 3, 4, 5\]) { console.log(value); // 0 1 2 3
4 } \`\`\`

\#### 声明样式和最佳实践

-   不用 \`var\`
-   总是用 \`const\`，只有必要时才用 \`let\`

\### 数据类型

六种原始数据（primitive
types）：undefined、null、boolean、number、bigint、string、symbol。

一种复杂数据类型：object。

\#### \`typeof\` 操作符

\`\`\`js let a; console.log(typeof a); // \"undefined\"
console.log(typeof 1); // \"number\" console.log(typeof 1n); //
\"bigint\" console.log(typeof \'\'); // \"string\" console.log(typeof
function () {}); // \"function\" console.log(typeof null); // \"object\"
空的对象引用 console.log(typeof true); // \"boolean\" console.log(typeof
Symbol()); // \"symbol\" \`\`\`

\#### Undefined 类型

它只有一个值：\`undefined\`。当变量使用 \`var\` 或 \`let\`
声明却未赋值时，变量此时的值默认为 \`undefined\`。

\`\`\`js let a; console.log(typeof a == \'undefined\'); // true

let a; console.log(typeof a == undefined); // false \`\`\`

\`typeof\` 发生了变化。和 \`undefined\` 比较是 false，和
\`\"undefined\"\` 比较是 true。

::: warning \`undefined\` 存在的目的是为了比较，它直到 ES3
才加入标准。这是为了区分空的对象指针和未初始化的变量。 :::

\`\`\`js let age; console.log(age); // \"undefined\"
console.log(message); // ReferenceError: message is not defined \`\`\`

声明未初始化和未声明的结果是不同的。

\`\`\`js let age; console.log(typeof age); // \"undefined\"
console.log(typeof message); // \"undefined\" \`\`\`

然而，对于 typeof 而言，两者的输出一致。

::: tip 声明并初始化是一个最佳实践，这样之后使用 \`typeof\`
检查变量类型如果是 \`\"undefined\"\`
就会知道当前变量未声明，而不是声明了而没有初始化。 :::

\`undefined\`
是否定的，用在条件语句中是否定含义。但是，务必确定------你是需要一个
falsy 值还是确认变量是否 \`undefined\`，因为还有其他值是否定含义的。

\`\`\`js let age;

if (age) { console.log(\'Not execute\'); } if (!age) {
console.log(\'Executed!\'); // Executed! } if (msg) { // ReferenceError:
msg is not defined console.log(\'Not execute, and error\'); } \`\`\`

\#### 空类型

它同样只有一个值：\`null\`。逻辑上，\`null\` 是一个空的对象指针。

\`\`\`js let car = null; console.log(typeof car); // object \`\`\`

声明一个会用作对象的变量时，最好初始化为
null，而不是其他值。这样可以通过 \`car != null\` 确定 car 是否发生变化。

\`\`\`js console.log(undefined == null); // true \`\`\`

\`null\` 也是否定的。

\`\`\`js let car = null; let msg; if (car) { console.log(\'Not
execute\'); } if (!car) { console.log(\`Executed \${car}\`); // Executed
null } if (msg) { console.log(\'Not execute\'); } if (!msg) {
console.log(\`Executed \${msg}\`); // Executed undefined } \`\`\`

\#### 布尔类型

有两个值：\`true\`和\`false\`。大小写敏感。可使用 \`Boolean()\`
将非布尔值转化为 \`true\` 和 \`false\`。

\`\`\`js let found = true; let not~found~ = false;
console.log(\`\${found}, \${not~found~}\`); // true, false

let found = \'nihao\'; console.log(\`\${Boolean(found)}\`); // true
\`\`\`

\`Boolean()\` 类型转换一览表：

  ----------- ----------------------------- ----------------
  数据类型    转成 \`true\`                 转成 \`false\`
  ---------   ---------------------------   ------------
  布尔型      true                          false
  字符串      任意非空字符串                \"\"
  数字        任意非 0 数字（包括无穷大）   0, NaN
  对象        任意对象                      null
  Undefined   无                            undefined
  ----------- ----------------------------- ----------------

流控制语句会自动进行布尔转换，所以知道这张表很重要。

\#### 数值类型

使用 IEEE-754 格式。

整数支持十进制（默认）、八进制、十六进制。

-   八进制： 0（zero） + o（letter o）+ num（0-7），例：\`0o12\`
-   十六进制：0（zero） + x/X + num(0-9), letter(a-f)，例：\`0x12\`

所有八进制和十六进制数字，在运算时都会被转换成十进制。

存在正 0 和负 0。

1.  浮点值

举例：

\`\`\`js const num = 1.4; const num = 0.4; const num = 0.4; //
可行，但不推荐 \`\`\`

存储浮点数所耗内存是整数的两倍。ECMAScript 总在将浮点数转换为整数。

\`\`\`js const num = 1; const num = 10.0; \`\`\`

以上在存储时都以整数形式。

对于很大或很小的数字，当采用科学记数法表示时，会出现小数。

\`\`\`js const num = 2.136e12; \`\`\`

当一个数字很小，小数点后有 6 个和 6 个以上的 0
时，会自动转换为科学记数法。

浮点数精确度在 17
位十进制位，但是在进行算术运算时，却远远不够精确。0.1 + 0.2 永远不等于
0.3。

1.  数值的范围

目前，最小值存储在 \`Number.MIN~VALUE~\`，为 \`5e-324\`；最大值存储在
\`Number.MAX~VALUE~\`，为 \`1.7976931348623157e+308\`。

如果运算结果，超出这个范围，很小的用 \`-Infinity\` 表示，很大的用
\`Infinity\`。

-   \`isFinite()\` 确定数字是否是有限值
-   \`Number.NEGATIVE~INFINITY~\`
-   \`Number.POSITIVE~INFINITY~\`

1.  NaN

Not a Number. 当返回值不是期待的数字时使用。

-   与 NaN 进行运算结果都是 NaN
-   与任何值都不等，甚至它本身
-   \`isNaN()\` 用于确定参数是否是
    NaN，第一步转成数字，如果不能转成数字返回
    true（可检查字符串、数字、甚至是对象）
-   检查对象时，先调用 \`valueOf()\`，然后调用 \`toString()\`

1.  数字转换

三个将非数字转为数字的函数：

-   \`Number()\`
    -   布尔值： true 1 false 0
    -   数字直接返回
    -   null 0
    -   undefined NaN
    -   字符串
        -   只包含数字，+，-，会被转成数字，0 会被忽略：Number(\"011\")
            =\> 11
        -   浮点数同上
        -   十六进制会被转成十进制数字
        -   空字符串 0
        -   除去以上情况，都返回 NaN
    -   先调用 \`valueOf()\`，然后调用 \`toString()\`
-   \`parseInt()\`
    -   返回 NaN 的情况：首个字符不是数字、+、-，空字符串返回 NaN
    -   \`1234blue\` =\> \`1234\`
    -   \`22.4\` =\> \`22\`
    -   第二个参数提供进制设置：\`parseInt(12, 8)\`
-   \`parseFloat()\`
    -   返回 NaN 的情况：首个字符不是数字、+、-，空字符串返回 NaN
    -   \`parseFloat(22.34.2)\` 会报错：SyntaxError: missing ) after
        argument list

\#### 字符串类型

1.  字符串字面量

  ------------------------- --------------------------------
  Literal                   Meaning
  ----------------          ------------------------------
  \``\n`{=latex}\`          新的一行
  \`\`͡                      Tab
  \`\`̱                      退格
  \`\`̊                      回车
  \`\`̑                      Form feed
  \`\\\\\`                  反斜杠
  \`\\\'\`                  单引号
  \`\\\"\`                  双引号
  \<code\>\\\\\`\</code\>   反撇
  \``\xnn`{=latex}\`        两位十六进制字符，字符长度为 1
  \``\unnnn`{=latex}\`      四位十六进制字符，字符长度为 1
  ------------------------- --------------------------------

如果一个字符串中包含双字节字符，在计算字符串长度时会不够精确。

1.  字符串的天性

ECMAScript
中的字符串不可变，如果想改变，需要把原字符串摧毁后，再赋新值。

1.  转换成字符串

-   \`toString()\`
    -   可接受的值：数字、布尔值、对象、字符串（返回一份拷贝，深拷贝/浅拷贝？
        是浅拷贝）
    -   null、undefined 无该属性
    -   转化数字时，可接受一个参数作为进制
-   \`String()\`
    -   如果值有 \`toString()\` 属性，直接调用
    -   null =\> \"null\"
    -   undefined =\> \"undefined\"
-   \"\" + \\\<data type\\\> 也可以转化字符串（详见操作符）

\`\`\`js const num = 12; num.toString(); \`\`\`

1.  模板字面量

ES6 引入的特性。会原样显示定义的字符串。

\`\`\`js let str = \`nihao shijie\`; \`\`\`

1.  字符串插值

\`\`\`js let str = \`nihao shijie\`; console.log(\`\${str}\`); \`\`\`

另外两种方式：

\`\`\`js console.log(\`Hello, \${\`World\`}!\`);

// 相当于 let foo = { toString: () =\> \'World\' }; console.log(\`Hello,
\${foo}!\`); \`\`\`

\`\`\`js function capitalize(word) { return
\`\${word\[0\].toUpperCase()}\${word.slice(1)}\`; }
console.log(\`\${capitalize(\'hello\')}, \${capitalize(\'world\')}!\`);
\`\`\`

\`\`\`js let value = \'\'; function append() { value = \`\${value}
abc\`; console.log(value); } append(); \`\`\`

1.  模板字面量标签函数

标签函数------自定义如何进行插值。

看过例子无法一下子理解。

\`\`\`js let a = 6; let b = 9;

function simpleTag(strings, aValExpression, bValExpression,
sumExpression) { console.log(strings); // Array(4) \[ \"\", \" + \", \"
= \", \"\" \] console.log(aValExpression); // 6
console.log(bValExpression); // 9 console.log(sumExpression); // 15

return \'foobar\'; }

let untaggedResult = \`\${a} + \${b} = \${a + b}\`; let taggedResult =
simpleTag\`\${a} + \${b} = \${a + b}\`;

console.log(untaggedResult); // 6 + 9 = 15 console.log(taggedResult); //
foobar \`\`\`

小的改进：

\`\`\`js let a = 6; let b = 9;

function simpleTag(strings, ...expressions) { console.log(strings); //
Array(4) \[ \"\", \" + \", \" = \", \"\" \] for (const expression of
expressions) { console.log(expression); // 6 9 15 }

return \'foobar\'; }

let taggedResult = simpleTag\`\${a} + \${b} = \${a + b}\`;

console.log(taggedResult); // foobar \`\`\`

标签函数的终极版本。

\`\`\`js let a = 6; let b = 9;

function zipTag(strings, ...expressions) { return ( strings\[0\] +
expressions.map((e, i) =\> \`\${e}\${strings\[i + 1\]}\`).join(\'\') );
}

let untaggedResult = \`\${a} + \${b} = \${a + b}\`; let taggedResult =
zipTag\`\${a} + \${b} = \${a + b}\`;

console.log(untaggedResult); // 6 + 9 = 15 console.log(taggedResult); //
6 + 9 = 15 \`\`\`

1.  原始字符串

\`\`\`js \'0̆0A9\'; String.raw\`0̆0A9\`\`first line`\nsecond`{=latex}
line\`; \`\`\`

如果通过字符串数组的 .raw 方法获得字符串的原始形式（通过标签函数）：

\`\`\`js function printRaw(strings) { console.log(\'Actual
characters:\'); for (const string of strings) { console.log(string); }

console.log(\'Escaped characters:\'); for (const rawString of
strings.raw) { console.log(rawString); } }

printRaw\`0̆0A9\${\'and\'}`\n`{=latex}\`; \`\`\`

\#### Symbol 类型

ES6 新引入。

Symbol 实例是唯一且不可变的。Symbol
的作用是为了确保对象属性使用唯一标识符，不会发生属性冲突的危险。Symbol
不是用来创建私有属性的，而是用来作为唯一记号，用作非字符串形式的对象属性的。

1.  基本 Symbol 应用

\`\`\`js let sym = Symbol(); console.log(typeof sym); // symbol \`\`\`

\`\`\`js let sym1 = Symbol(); let sym2 = Symbol();

let sym3 = Symbol(\'foo\'); let sym4 = Symbol(\'foo\');

console.log(sym1 == sym2); // false console.log(sym3 == sym4); // false
\`\`\`

每次创建的 Symbol 都是不同的。

Symbol 没有字面量语法是很关键的。按照规范，创建 Symbol()
实例并将其用作对象的新属性，就能确保不会覆盖已有的对象属性。

Symbol 函数无法使用 new 关键字。这样做的目的为了避免产生 Symbol
对象包装器，与 Boolean、String、Number 混淆。

\`\`\`js let boolean = new Boolean(); console.log(typeof boolean); //
object

let string = new String(); console.log(typeof string); // object

let number = new Number(); console.log(typeof number); // object

let symbol = new Symbol(); // TypeError: Symbol is not a constructor
\`\`\`

可以利用对象包装器，对 Symbol 实现类似 Boolean 的功能。

\`\`\`js let symbol = Symbol(); let wrappedSymbol = Object(symbol);
console.log(typeof wrappedSymbol); // object \`\`\`

1.  使用全局 Symbol 注册

有些场景会共享一个 Symbol 实例，这种需要可以实现。使用了
\[\`Symbol.for()\`\](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for>)（在一个运行时，根据给定
key 寻找 symbol 注册集，找到了就返回，找不到就新建）。

\`\`\`js let firstGlobalSymbol = Symbol.for(\'foo\'); // 新建了一个
symbol let anotherGlobalSymbol = Symbol.for(\'foo\'); // 复用前一个
symbol

console.log(firstGlobalSymbol `=`{.verbatim} anotherGlobalSymbol); //
true \`\`\`

\`Symbol.for()\` 与 \`Symbol()\` 不同。前后者创建的 symbol 并不相等。

\`\`\`js Symbol.for(\'bar\') `=`{.verbatim} Symbol.for(\'bar\'); // true
Symbol(\'bar\') `=`{.verbatim} Symbol(\'bar\'); // false

const symbol1 = Symbol.for(\'foo\'); symbol1.toString(); //
\"Symbol(foo)\" \`\`\`

可以通过
\[\`Symbol.keyFor()\`\](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/keyFor>)
检查一个 symbol 实例是全局（global）还是本地（local）的。

\`\`\`js let globalSymbol = Symbol.for(\'foo\'); let localSymbol =
Symbol(\'foo\');

console.log(Symbol.keyFor(globalSymbol)); // foo
console.log(Symbol.keyFor(localSymbol)); // undefined \`\`\`

用在非 symbol 数据类型会出错。

\`\`\`js // TypeError: \"nihao\" is not a symbol
console.log(Symbol.keyFor(\'nihao\')); \`\`\`

1.  使用 Symbol 作为属性

在任何能够使用字符串和数值作为属性的地方，也能使用
symbol。这包括对象的属性字面量、\`Object.defineProperty() /
Object.defineProperties()\`。在一个对象里，可以只使用 symbol 作为属性。

\`\`\`js let s1 = Symbol(\'foo\'), s2 = Symbol(\'bar\'), s3 =
Symbol(\'baz\'), s4 = Symbol(\'qux\');

let o = { \[s1\]: \'foo val\', }; // o\[s1\] = \'foo val\' 也可以

console.log(o); // { \[Symbol(foo)\]: \'foo val\' }

Object.defineProperty(o, s2, { value: \'bar val\' }); console.log(o); //
{ Symbol(\"foo\"): \"foo val\", ... }

Object.defineProperties(o, { \[s3\]: { value: \'baz val\' }, \[s4\]: {
value: \'qux val\' }, }); console.log(o); // { Symbol(\"foo\"): \"foo
val\", ... } \`\`\`

在我看来，目前（2022-06-15, Linux, Firefox Developer Edition
102.0b7）后两个的 log 输出是一致的。

\[\`Object.getOwnPropertyNames()\`\](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames>)
返回对象所有属性组成的数组，\[\`Object.getOwnPropertySymbols()\`\](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols>)
返回 symbol
属性，\[\`Object.getOwnPropertyDescriptors()\`\](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors>)
会返回一个对象，包含普通属性和 使用 symbol
属性。\[\`Reflect.ownKeys()\`\](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys>)
会返回所有类型的键。

\`\`\`js let s1 = Symbol(\'foo\'), s2 = Symbol(\'bar\');

let o = { \[s1\]: \'foo val\', \[s2\]: \'bar val\', baz: \'baz val\',
qux: \'qux val\', };

console.log(Object.getOwnPropertyNames(o)); // \[ \"baz\", \"qux\" \]
console.log(Object.getOwnPropertySymbols(o)); // \[ Symbol(\"foo\"),
Symbol(\"bar\") \] console.log(Object.getOwnPropertyDescriptors(o)); //
{ baz: {...}, qux: {...}, Symbol(\"foo\"): {...}, Symbol(\"bar\"): {...}
} console.log(Reflect.ownKeys(o)); // \[ \"baz\", \"qux\",
Symbol(\"foo\"), Symbol(\"bar\") \] \`\`\`

如果 symbol 被创建直接用作对象属性，那么 symbol 会一直在内存中不会丢失。

\> However, declining to keep an explicit reference to a property means
that traversing all the object's symbol properties will be required to
recover the property key.

\`\`\`js let o = { \[Symbol(\'foo\')\]: \'foo val\',
\[Symbol(\'bar\')\]: \'bar val\', };

console.log(o); // { Symbol(\"foo\"): \"foo val\", Symbol(\"bar\"):
\"bar val\" }

let barSymbol = Object.getOwnPropertySymbols(o).find((symbol) =\>
symbol.toString().match(*bar*) );

console.log(barSymbol); // Symbol(\"bar\") \`\`\`

1.  常用 Symbols

通过自定义 \`Symbol.iterator\` 属性可以改变 \`for-of\` 语句的行为。

每个常用 symbol 属性都是不可写、不可枚举、不可配置的。

在 ECMAScript 标准中，\`Symbol.iterator\` 会被写成这样 \`@@iterator\`。

1）\[\`Symbol.asyncIterator\`\](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator>)

返回对象的异步迭代器。在 \`for-await-of\`
语句中调用。用于识别实现了异步迭代器 API 的函数。

\`\`\`js class Foo { async \*\[Symbol.asyncIterator\]() {} }

let f = new Foo(); console.log(f\[Symbol.asyncIterator\]()); //
AsyncGenerator { } \`\`\`

\`\`\`js class Emitter { constructor(max) { this.max = max;
this.asyncIdx = 0; }

async \*\[Symbol.asyncIterator\]() { while (this.asyncIdx \< this.max) {
yield new Promise((resolve) =\> resolve(this.asyncIdx++)); } } }

async function asyncCount() { let emitter = new Emitter(5);

for await (const x of emitter) { console.log(x); } }

asyncCount(); // 0 1 2 3 4 \`\`\`

这大概就是一个迭代的内部实现了。

2）\[\`Symbol.hasInstance\`\](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance>)

决定一个构造器对象将某个对象作为构造器的实例之一。由
\[\`instanceof\`\](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof>)
调用。\`instanceof\` 确定一个对象实例在它的原型链中是否存在原型。

\`instanceof\` 用法：

\`\`\`js function Foo() {} let f = new Foo(); console.log(f instanceof
Foo); // true

class Bar {} let b = new Bar(); console.log(b instanceof Bar); // true
\`\`\`

使用 \`Symbol.hasInstance\` 实现和 \`instanceof\` 一致的功能：

\`\`\`js function Foo() {} let f = new Foo();
console.log(Foo\[Symbol.hasInstance\](f)); // true

class Bar {} let b = new Bar();
console.log(Bar\[Symbol.hasInstance\](b)); // true \`\`\`

\`Symbol.hasInstance\` 属性定义于 \`Function\`
原型，因此对所有函数和类可用。因为 \`instanceof\`
操作符会像其他属性那样在原型链中寻找属性定义，所以可以在继承的类上重新定义函数，并将其作为一种静态方法。

\`\`\`js class Bar {} class Baz extends Bar { static
\[Symbol.hasInstance\]() { return false; } }

let b = new Baz(); console.log(Bar\[Symbol.hasInstance\](b)); // true
console.log(b instanceof Bar); // true
console.log(Baz\[Symbol.hasInstance\](b)); // false console.log(b
instanceof Baz); // false \`\`\`

3）\[\`Symbol.isConcatSpreadable\`\](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable>)

它能覆盖
\[\`Array.prototype.concat()\`\](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat>)
的设置。它是一个属性，值的数据类型为布尔型。

\`\`\`js let initial = \[\'foo\'\]; let array = \[\'bar\'\];
console.log(array\[Symbol.isConcatSpreadable\]); // undefined
console.log(initial.concat(array)); // \[ \"foo\", \"bar\" \]
array\[Symbol.isConcatSpreadable\] = false;
console.log(initial.concat(array)); // \[ \"foo\", \[\'bar\'\] \]

let arrayLikeObject = { length: 1, 0: \'baz\' };
console.log(arrayLikeObject\[Symbol.isConcatSpreadable\]); // undefined
console.log(initial.concat(arrayLikeObject)); // \[ \"foo\", {...} \]
arrayLikeObject\[Symbol.isConcatSpreadable\] = true;
console.log(initial.concat(arrayLikeObject)); // \[ \"foo\", \"baz\" \]

let otherObject = new Set().add(\'qux\');
console.log(otherObject\[Symbol.isConcatSpreadable\]); // undefined
console.log(initial.concat(otherObject)); // \[ \"foo\", Set(1) \]
otherObject\[Symbol.isConcatSpreadable\] = true;
console.log(initial.concat(otherObject)); // \[ \"foo\" \] \`\`\`

4）\[\`Symbol.iterator\`\](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator>)

指定对象的默认迭代器。

\`\`\`js class Foo { \*\[Symbol.iterator\]() {} } let f = new Foo();
console.log(f\[Symbol.iterator\]()); // Generator { } \`\`\`

\`\`\`js class Emitter { constructor(max) { this.max = max; this.idx =
0; }

\*\[Symbol.iterator\]() { while (this.idx \< this.max) { yield
this.idx++; } } }

function count() { let emitter = new Emitter(5);

for (const x of emitter) { console.log(x); } }

count(); // 0 1 2 3 4 \`\`\`

5）\[\`Symbol.match()\`\](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match>)

\[\`String.prototype.match()\`\](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match>)
背后调用了 \`Symbol.match()\`。用于匹配正则表达式。

\`\`\`js console.log(RegExp.prototype\[Symbol.match\]); // function
Symbol.match() console.log(\'foobar\'.match(*bar*)); // Array \[ 0:
\"bar\", groups: undefined, index: 3, input: \"foobar\", length: 1\]
\`\`\`

如果 input 为非正则形式，运算的结果是产生一个 \`RegExp\` 对象。

\`\`\`js class FooMatcher { static \[Symbol.match\](target) { return
target.includes(\'foo\'); } }

console.log(\'foobar\'.match(FooMatcher)); // true
console.log(\'barbaz\'.match(FooMatcher)); // false

class StringMatcher { constructor(str) { this.str = str; }

\[Symbol.match\](target) { return target.includes(this.str); } }

console.log(\'foobar\'.match(new StringMatcher(\'foo\'))); // true
console.log(\'barbaz\'.match(new StringMatcher(\'qux\'))); // false
\`\`\`

以上重新定义了 \`Symbol.match\` 函数。

6）\[\`Symbol.replace()\`\](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace>)

通过正则表达式的方式，匹配字符串，并替换。由
\[\`String.prototype.replace()\`\](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace>)
调用。

\`\`\`js console.log(RegExp.prototype\[Symbol.replace\]); // function
Symbol.replace() console.log(\'foobarbaz\'.replace(*bar*, \'qux\')); //
fooquxbaz \`\`\`

\`\`\`js class FooReplacer { static \[Symbol.replace\](target,
replacement) { return target.split(\'foo\').join(replacement); } }

console.log(\'barfoobaz\'.replace(FooReplacer, \'qux\')); // barquxbaz

class StringReplacer { constructor(str) { this.str = str; }

\[Symbol.replace\](target, replacement) { return
target.split(this.str).join(replacement); } }

console.log(\'barfoobaz\'.replace(new StringReplacer(\'foo\'),
\'qyx\')); // barqyxbaz \`\`\`

7）\[\`Symbol.search()\`\](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/search>)

返回匹配正则的字符串的索引。由
\[\`String.prototype.search()\`\](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search>)
调用。

\`\`\`js console.log(RegExp.prototype\[Symbol.search\]); // function
Symbol.search() console.log(\'foobarbaz\'.search(*bar*)); // 3 \`\`\`

\`\`\`js class FooSearcher { static \[Symbol.search\](target) { return
target.indexOf(\'foo\'); } }

console.log(\'foobar\'.search(FooSearcher)); // 0
console.log(\'barfoo\'.search(FooSearcher)); // 3
console.log(\'barbaz\'.search(FooSearcher)); // -1

class StringSearcher { constructor(str) { this.str = str; }

\[Symbol.search\](target) { return target.indexOf(this.str); } }

console.log(\'foobar\'.search(new StringSearcher(\'foo\'))); // 0
console.log(\'barfoo\'.search(new StringSearcher(\'foo\'))); // 3
console.log(\'barbaz\'.search(new StringSearcher(\'qux\'))); // -1
\`\`\`

8）\[\`Symbol.species\`\](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species>)

它是一个函数值属性，构造器函数用于创建派生函数。最常用的属性之一。定义静态
getter 函数可以覆盖新创建实例的原型定义。

\`\`\`js class Bar extends Array {} class Baz extends Array { static get
\[Symbol.species\]() { return Array; } }

let bar = new Bar(); console.log(bar instanceof Array); // true
console.log(bar instanceof Bar); // true bar = bar.concat(\'bar\');
console.log(bar); // \[ \'bar\' \] console.log(bar instanceof Array); //
true console.log(bar instanceof Bar); // true

let baz = new Baz(); console.log(baz instanceof Array); // true
console.log(baz instanceof Baz); // true baz = baz.concat(\'baz\');
console.log(baz); // \[ \'baz\' \] console.log(baz instanceof Array); //
true console.log(baz instanceof Baz); // false \`\`\`

9）\[\`Symbol.split\`\](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split>)

由
\[\`String.prototype.split()\`\](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split>)
调用。

\`\`\`js console.log(RegExp.prototype\[Symbol.split\]); // function
Symbol.split() console.log(\'foobarbaz\'.split(*bar*)); // \[ \"foo\",
\"baz\" \] \`\`\`

\`\`\`js class FooSplitter { static \[Symbol.split\](target) { return
target.split(\'foo\'); } }
console.log(\'barfoobaz\'.split(FooSplitter)); // \[ \"bar\", \"baz\" \]

class StringSplitter { constructor(str) { this.str = str; }

\[Symbol.split\](target) { return target.split(this.str); } }
console.log(\'barfoobaz\'.split(new StringSplitter(\'foo\'))); // \[
\"bar\", \"baz\" \] \`\`\`

10）\[\`Symbol.toPrimitive\`\](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive>)

将一个对象转化为一个可理解的原始类型。

\`\`\`js class Foo {} let foo = new Foo(); console.log(3 + foo); //
3\[object Object\] console.log(3 - foo); // NaN
console.log(String(foo)); // \[object Object\]

class Bar { constructor() { this\[Symbol.toPrimitive\] = function (hint)
{ switch (hint) { case \'number\': return 4; case \'string\': return
\'string baz\'; case \'default\': default: return \'default baz\'; } };
} } let baz = new Bar(); console.log(3 + baz); // 3default baz
console.log(3 - baz); // -1 console.log(String(baz)); // string baz
\`\`\`

11）\[\`Symbol.toStringTag\`\](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag>)

用于创建对象的默认字符串描述。

\`\`\`js let s = new Set(); console.log(s); // Set \[\]
console.log(s.toString()); // \[object Set\]
console.log(s\[Symbol.toStringTag\]); // Set

class Foo {} let foo = new Foo(); console.log(foo); // Object { }
console.log(foo.toString()); // \[object Object\]
console.log(foo\[Symbol.toStringTag\]); // undefined

class Bar { constructor() { this\[Symbol.toStringTag\] = \'Bar\'; } }
let bar = new Bar(); console.log(bar); // Object {
Symbol(\"Symbol.toStringTag\"): \"Bar\" } console.log(bar.toString());
// \[object Bar\] console.log(bar\[Symbol.toStringTag\]); // Bar \`\`\`

12）\[\`Symbol.unscopables\`\](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables>)（因为不推荐使用
\`with\`，所以 \`Symbol.unscopables\` 也不推荐使用）

\`\`\`js let o = { foo: \'bar\' }; with (o) { console.log(foo); // bar }
o\[Symbol.unscopables\] = { foo: true, }; with (o) { console.log(foo);
// ReferenceError: foo is not defined } \`\`\`

\#### 对象类型

\`\`\`js let o = new Object(); console.log(o); // Object { } \`\`\`

\`Object\` 可以被添加属性方法，也可以定义新的对象。因为 \`Object\`
是派生的，所以 \`Object\` 拥有的属性和方法，其他派生对象也有。

每个 \`Object\` 实例都有以下属性和方法：

-   constructor------这个函数用来创建对象
-   hasOwnProperty(propertyName)------确定给定属性是否在对象本身存在（不是对象的原型），属性名必须是字符串
-   isPrototypeOf(object)------确定一个对象是另一个对象的原型
-   propertyIsEnumerable(propertyName)------确定对象属性是否能通过
    for-in 从句列举
-   toLocaleString()------在当前语言环境下，返回对象的字符串形式
-   toString()------直接返回对象的字符串形式
-   valueOf()------根据对象的属性和属性值，返回字符串、数字、布尔值。返回结果经常和
    toString() 相同

::: warning Technically speaking, the behavior of objects in ECMA-262
need not necessarily apply to other objects in JavaScript. Objects that
exist in the browser environment, such as those in the Browser Object
Model (BOM) and Document Object Model (DOM), are considered host objects
because they are provided and defined by the host implementation. Host
objects aren't governed by ECMA-262 and, as such, may or may not
directly inherit from Object. :::

\### 操作符

\#### 一元

1.  递增/递减

从 C 语言超过了，分为前缀和后缀。

前变后不变。

\`\`\`js let age = 21; let age2 = ++age; console.log(age); // 22
console.log(age2); // 22

let age = 21; let age2 = age++; console.log(age); // 22
console.log(age2); // 21

let age = 22; let age2 = --age; console.log(age); // 21
console.log(age2); // 21

let age = 22; let age2 = age--; console.log(age); // 21
console.log(age2); // 22 \`\`\`

在任何值上的递增和递减运算遵循：

-   When used on a string that is a valid representation of a number,
    convert to a number and apply the change. The variable is changed
    from a string to a number.
-   When used on a string that is not a valid number, the variable's
    value is set to NaN. The variable is changed from a string to a
    number.
-   When used on a Boolean value that is false, convert to 0 and apply
    the change. The variable is changed from a Boolean to a number.
-   When used on a Boolean value that is true, convert to 1 and apply
    the change. The variable is changed from a Boolean to a number.
-   When used on a floating-point value, apply the change by adding or
    subtracting 1.
-   When used on an object, call its valueOf() method (discussed more in
    Chapter 5) to get a value to work with. Apply the other rules. If
    the result is NaN, then call toString() and apply the other rules
    again. The variable is changed from an object to a number.

\`\`\`js let s1 = \'2\'; let s2 = \'z\'; let b = false; let f = 1.1; let
o = { valueOf() { return -1; }, }; s1++; s2++; b++; f--; o--;
console.log(s1); // 3 console.log(s2); // NaN console.log(b); // 1
console.log(f); // 0.10000000000000009 console.log(o); // -2 \`\`\`

1.  \`+/-\`

\`\`\`js let num = 23; num = -num; console.log(num); // -23 \`\`\`

\`\`\`js let num = 23; num = +num; console.log(num); // 23 \`\`\`

\`\`\`js let s1 = \'01\', s2 = \'1.1\', s3 = \'z\', b = false, f = 1.1,
o = { valueOf() { return -1; }, }; s1 = +s1; s2 = +s2; s3 = +s3; b = +b;
f = +f; o = +o; console.log(\`\${s1}, \${s2}, \${s3}, \${b}, \${f},
\${o}\`); // 1, 1.1, NaN, 0, 1.1, -1 \`\`\`

\`\`\`js let s1 = \'01\', s2 = \'1.1\', s3 = \'z\', b = false, f = 1.1,
o = { valueOf() { return -1; }, }; s1 = -s1; s2 = -s2; s3 = -s3; b = -b;
f = -f; o = -o; console.log(\`\${s1}, \${s2}, \${s3}, \${b}, \${f},
\${o}\`); // -1, -1.1, NaN, 0, -1.1, 1 \`\`\`

\#### 位

\`sign bit\`, \`two\'s
complement\`，补码，十进制正负数转化为二进制。JavaScript
进行位操作时，会先把 64 位数字转化为 32 位，执行一些操作，然后再把 32
位的结果转为 64 位。

1.  NOT

\`\`\`js let num = 21; let num2 = \~21; console.log(num); // 21
console.log(num2); // -22 console.log(num.toString(2)); // 10101
console.log(num2.toString(2)); // -10110 \`\`\`

1.  AND

\`\`\`js console.log(1 & 1); // 1 console.log(1 & 0); // 0 console.log(0
& 1); // 0 console.log(0 & 0); // 0 \`\`\`

1.  OR

\`\`\`js console.log(1 \| 1); // 1 console.log(1 \| 0); // 1
console.log(0 \| 1); // 1 console.log(0 \| 0); // 0 \`\`\`

1.  XOR

\`\`\`js console.log(1 \^ 1); // 0 console.log(1 \^ 0); // 1
console.log(0 \^ 1); // 1 console.log(0 \^ 0); // 0\` \`\`\`

1.  左移

\`\`\`js let oldValue = 2; // 10 let newValue = oldValue \<\< 5; //
二进制左移 5 位 =\> 64(1,000,000) console.log(newValue); // 64 \`\`\`

1.  有符号右移

\`\`\`js let oldValue = 64; // 1,000,000 let newValue = oldValue \>\> 5;
// 二进制右移 5 位 =\> 2（10 console.log(newValue); // 2 \`\`\`

1.  无符号右移

\`\`\`js let oldValue = 64; // 1,000,000 let newValue = oldValue \>\>\>
5; // 二进制右移 5 位 =\> 2（10 console.log(newValue); // 2 \`\`\`

\`\`\`js let oldValue = -64; let newValue = oldValue \>\>\> 5;
console.log(newValue); // 134217726 \`\`\`

\#### 布尔

1.  NOT

先把操作数转为布尔型。

-   对象的非是 false
-   空字符串的非是 true
-   非空字符串的非是 false
-   0 的非是 true
-   非 0（包括无穷）的非是 false
-   null，NaN，undefined 的非是 true

\`\`\`js console.log(!Object()); console.log(!false);
console.log(!\'\'); console.log(!\'nihao\'); console.log(!0);
console.log(!Infinity); console.log(!NaN); console.log(!null);
console.log(!undefined); \`\`\`

1.  AND

可与不同数据类型的操作数运算。遵循规则：

-   如果第一个操作数是对象，返回第二个操作数
-   如果第二个操作数是对象，要返回它需要第一个操作数可被转为 true
-   如果两个操作数都是对象，那么返回第二个操作数
-   如果 2 个操作数都是 null，返回 null
-   如果 2 个操作数都是 NaN，返回 NaN
-   如果 2 个操作数都是 undefined，返回 undefined

\`\`\`js let found = true; let result = found && sth; //
这一行无法执行，下一行也执行不了 console.log(\`\${result}, nihao\`);
\`\`\`

\`\`\`js let found = false; let result = found && sth;
console.log(\`\${result}, nihao\`); // false, nihao \`\`\`

1.  OR

遵循规则：

-   第一个操作数是对象，则返回第一个操作数
-   如果第一个操作数等同于 false，返回第二个操作数
-   如果两个操作数都是对象，返回第一个操作数
-   如果 2 个操作数都是 null，返回 null
-   如果 2 个操作数都是 NaN，返回 NaN
-   如果 2 个操作数都是 undefined，返回 undefined

\`\`\`js let found = false; let result = found \|\| sth; // 无法执行
console.log(\`\${result}, nihao\`); \`\`\`

\`\`\`js let found = true; let result = found \|\| sth;
console.log(\`\${result}, nihao\`); // true, nihao \`\`\`

\#### 乘性

1.  乘

规则：

-   操作数都是数字，算术运算，超出范围用正负 Inifity 表示。
-   至少一个操作数是 NaN，结果是 NaN。
-   Infinity \\\* 0 结果是 NaN
-   Infinity \\\* 非 0 数字 结果是 Infinity 或 -Infinity
-   Infinity \\\* Infinity = Infinity
-   Infinity \\\* -Infinity = -Infinity
-   -Infinity \\\* -Infinity = Infinity
-   如果操作数不是数字，会先通过 \`Number()\` 转成数字，再进行运算

1.  除

-   操作数都是数字，算术运算，超出范围用正负 Inifity 表示。
-   至少一个操作数是 NaN，结果是 NaN。
-   Infinity / Infinity 结果是 NaN
-   0 / 0 = NaN
-   非 0 数字 / 0 结果是 Infinity 或 -Infinity
-   Infinity / 任意数字 = Infinity/-Infinity
-   如果操作数不是数字，会先通过 \`Number()\` 转成数字，再进行运算

1.  取余（Modulus）

-   操作数都是数字，算术运算，超出范围用正负 Inifity 表示。
-   Infinity % 任意数字 = NaN
-   任意数字 % Infinity = 任意数字
-   如果操作数不是数字，会先通过 \`Number()\` 转成数字，再进行运算

\#### 幂

\`\*\*\` 等价于 \`Math.pow()\`，前者于 ES2016 引入。

\`\`\`js console.log(3 \*\* 2); // 9 console.log(Math.pow(3, 2)); // 9
\`\`\`

它还有幂加赋值操作符。

\`\`\`js let num = 3; num \*\*= 2; console.log(num); // 9 \`\`\`

\#### 加性

\`+ -\`

\#### 关系

-   \`\<\`
-   \`\>\`
-   \`\<=\`
-   \`\>=\`

\#### 相等

-   \`==\`
-   \`!=\`
-   \`===\`
-   \`!==\`

\#### 条件

\`...?...:...\`

\#### 赋值

\`=\`，一些快捷方式：

-   \`\*=\`
-   \`/=\`
-   \`%=\`
-   \`+=\`
-   \`-=\`
-   \`\<\<=\`
-   \`\>\>=\`
-   \`\>\>\>=\`

\#### 逗号

\`\`\`js let a = 1, b = 2, c = 3

let num = (2, 4, 3, 6) // num = 6 \`\`\`

\### 语句

\#### if

\#### do-while

\#### while

\#### for

\#### for-in

\#### for-of

for-await-of

\#### 标签

\`\`\`js start: for(let i = 0; i \< 5; i++) { console.log(i) } \`\`\`

\#### break 和 continue

\`\`\`js let num = 0 for (let i = 1; i \< 10; i++) { if (i % 5 == 0) {
break; } num++ } console.log(num) // 4 \`\`\`

\`\`\`js let num = 0 for (let i = 1; i \< 10; i++) { if (i % 5 == 0) {
continue; } num++ } console.log(num) // 8 \`\`\`

与标签语句一起使用：

\`\`\`js let num = 0; outermost: for (let i = 0; i \< 10; i++) { for
(let j = 0; j \< 10; j++) { if (i == 5 && j == 5) { break outermost; }
num++; } } console.log(num); // 55 \`\`\`

\`\`\`js let num = 0; outermost: for (let i = 0; i \< 10; i++) { for
(let j = 0; j \< 10; j++) { if (i == 5 && j == 5) { continue outermost;
} num++; } } console.log(num); // 95 \`\`\`

\#### with 语句废弃了

\#### switch

\`\`\`js if (i == 11) { console.log(11) } else if (i == 22) {
console.log(22) } else { console.log(\'Other nums\') } \`\`\`

转成 switch 语句表达：

\`\`\`js switch (i) { case 11: console.log(11) break case 22:
console.log(22) break default: console.log(\'Other nums\') } \`\`\`

在 switch 语句中，没有类型转换。

\### 函数

\`\`\`js function sayHi(name, msg) { console.log(\`Hello, \${name}.
\${msg}\`) // Hello, Tianhe Gao. How are you? } sayHi(\'Tianhe Gao\',
\'How are you?\') \`\`\`

在函数内部，执行到 \`return\` 部分，即停止，不再执行剩余部分。

\`\`\`js function sayHi(name, msg) { return \'nihao\'
console.log(\`Hello, \${name}. \${msg}\`) } sayHi(\'Tianhe Gao\', \'How
are you?\') \`\`\`
