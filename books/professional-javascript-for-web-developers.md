
出版时间：2019年

## 第 1 章 什么是JavaScript

### 历史

JS 于 1995 年，由 Brendan Eich 在 Netscape 开发。

### 实现

完整的 JavaScript 实现包括：

-   核心 ECMAScript
-   DOM
-   BOM

### ECMAScript

在低水平描绘了该语言的=语法、类型、语句、关键字、保留字、操作符、全局对象=。

::: info
定义 ECMAScript is simply a description of a language implementing all of the facets described in the specification.
:::

ECMAScript 是一个语言实现的描述。

ECMA-262 有多个版本。ES5（2009.12） 和 ES6（2015.06，也称为 ES2015）
版本比较重要。

### ES5

ES5 引入了（[src](https://www.w3schools.com/js/js_es5.asp)）：

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
-   JSON.stringify() Date.now()
-   Date toISOString()
-   Date toJSON()
-   Property getters and setters Reserved words as property names
-   Object methods
-   Object defineProperty()
-   Function bind()
-   Trailing commas

### ES6

ES6 引入了（[src](https://www.w3schools.com/js/js_es6.asp)）：

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

2018 年，所有浏览器都支持 ES6（[src](https://www.w3schools.com/js/js_history.asp)）。

### DOM

DOM 是一种基于 XML 扩展的用于 HTML 的应用编程接口。用于操作网页内容。

DOM 级别。

### BOM

BOM 用于操作浏览器本身：

-   窗口的各种变换
-   导航
-   位置
-   屏幕
-   性能
-   支持 Cookies

## 第 2 章 HTML中的JavaScript

### `<script>` 用法

```html
<script src="example.js" async defer crossorigin="anonymous" integrity type="module">
  console.log("Hello")
</script>
```

### 注意

不能这样做：

```html
<script>
function sth() {
  console.log("</script>")
}
sth()
</script>
```

可以这样：

```html
<script>
function sth() {
  console.log("<\/script>")
}
sth()
</script>
```

::: tip 外部文件不查扩展 ❓
By convention, external JavaScript files have a .js extension. This is not a requirement because browsers do not check the file extension of included JavaScript files
:::

如果同时指定行内 script 和外部，行内 JS 代码会被忽略。

### `<script>` 位置

有以下几种：

```html
<!DOCTYPE html>
<html>
  <head>
  ...
  <script></script>
  </head>
  <body>

  </body>
</html>
```

::: info
Including all JavaScript files in the `<head>` of a document means that all of the JavaScript code must be downloaded, parsed, and interpreted before the page begins rendering.
:::

```html
<!DOCTYPE html>
<html>
<head>
  ...
</head>
<body>

  <script></script>
</body>
</html>
```

```html
<!DOCTYPE html>
<html>
  <head>
  ...
  <script defer></script>
  </head>
  <body>

  </body>
</html>
```

这样做，告诉浏览器等页面加载完 HTML、CSS 后再加载这个 JS。`defer` 只对外部文件起作用。

```html
<!DOCTYPE html>
<html>
  <head>
  ...
  <script async></script>
  </head>
  <body>

  </body>
</html>
```

HTML5 引入了 script 的 async（异步）属性。和 `defer` 一样，只对外部文件起作用。

::: tip
The purpose of specifying an async script is to indicate that the page need not wait for the script to be downloaded and executed
before continuing to load, and it also need not wait for another script to load and execute before it can do the same. Because of this, it\'s recommended that asynchronous scripts not modify the DOM as they are loading.
:::

### 动态脚本加载

可以使用 DOM API 动态加载 script 脚本。

示例：

```js
let script = document.createElement('script')
script.src = 'example.js'
document.head.appendChild(script)
```

::: info
This request will not be generated until the HTMLElement is attached to the DOM, and therefore not until this script itself runs. By
default, scripts that are created in this fashion are async. This can be
problematic, however, as all browsers support createElement but not all
support asyncscript requests. Therefore, to unify the dynamic script
loading behavior, you can explicitly mark the tag as synchronous. :::

修改后的示例：

```js
let script = document.createElement('script')
script.src = 'example.js'
script.async = false
document.head.appendChild(script)
```

Resources fetched in this fashion will be hidden from browser
preloaders. This will severely injure their priority in the resource
fetching queue. Depending on how your application works and how it is
used, this can severely damage performance. To inform preloaders of the
existence of these dynami-cally requested files, you can explicitly
declare them in the document head:

```html
<link rel="subresource" href="example.js">
```

### XHTML 中的变化

需要时再读。

### 其他杂项

-   文档模式
-   `<noscript>`

## 第 3 章 语言基础

### 语法

-   大小写敏感
-   标识符
-   命名规则：首字母可以是字母、下划线 `_`或美元符号 `$`，余下部分还可以是数字
-   命名格式：camel case
-   注释 `//...` 或 `/* 跨行 */`
-   严格模式 `"use strict"`
-   该模式下
    -   可以接受的错误（mistakes）被转为不可接受的错误（errors）
    -   简化了变量的使用
    -   让 `eval` 和 `arguments` 更简单
    -   提供更安全的 JavaScript
-   `"use strict"`
    有几个位置：一是一个文件的顶端，二是一个函数的顶端。具体：=eval=
    code, `Function` code, event handler attributes, strings
    passed to
    [`setTimeout()`](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout),
    and related functions are entire scripts, and invoking strict mode
    in them works as expected.

-   In strict mode, starting with ES2015, functions inside blocks are
    scoped to that block. Prior to ES2015, block-level functions were
    forbidden in strict mode. ECMAScript 2015 introduced JavaScript
    modules and therefore a 3rd way to enter strict mode. The entire
    contents of JavaScript modules are automatically in strict mode,
    with no statement needed to initiate it. [^1]

-   All parts of ECMAScript classes are strict mode code, including both
    class declarations and class expressions --- and so also including
    all parts of class bodies.

-   语句

### 严格模式示例

1.  将正常转为错误

    1.  不能意外创建全局变量

    ``` {.javascript org-language="js"}
    'use strict';

    let a;
    ab = 34;
    console.log(ab);
    // ReferenceError: ab is not defined
    ```

    如果注释掉 =\'use strict\'=，程序会运行。

    1.  不能对某些量进行赋值

    如果赋值给不可写全局变量（NaN、undefined、Infinity 等），会报错。

    ``` {.javascript org-language="js"}
    'use strict';

    NaN = 23;
    // TypeError: Cannot assign to read only property 'NaN' of object '#<Object>'
    ```

    1.  不能删除不可删除的对象

    ``` {.javascript org-language="js"}
    'use strict';

    delete Object.prototype;
    // TypeError: Cannot delete property 'prototype' of function Object() { [native code] }
    ```

    1.  ES5 中的严格模式下，函数的参数名必须是唯一的

    一般情况：

    ``` {.javascript org-language="js"}
    function sum(a, a, c) {
      return a + a + c;
    }
    console.log(sum(1, 2, 3));
    // 7
    ```

    严格模式：

    ``` {.javascript org-language="js"}
    function sum(a, a, c) {
      'use strict';
      return a + a + c;
    }
    console.log(sum(1, 2, 3));
    // SyntaxError: Duplicate parameter name not allowed in this context
    ```

    1.  ES5 中的严格模式下，禁止使用 0 开头的八进制数字或转义序列

    ``` {.javascript org-language="js"}
    'use strict';

    let sum = 015 + 197 + 142;
    // SyntaxError: Octal literals are not allowed in strict mode
    ```

    1.  ES2015 的严格模式下，不允许为原始类型设置属性值

    ES5 的严格模式下，重复的属性名被视为错误。

2.  简化了变量的使用

    1.  禁止使用 `with`

    ``` {.javascript org-language="js"}
    'use strict'

    with(obj)
    // SyntaxError: Strict mode code may not include a with statement
    ```

    1.  `eval` 中使用严格模式，不会为当前的父作用域引入变量

    ``` {.javascript org-language="js"}
    let x = 17;
    let evalX = eval('let x = 42; x;');
    console.log(x === 17);
    console.log(evalX === 42);
    // true
    var x = 17;
    let evalX = eval('var x = 42; x;');
    console.log(x === 17);
    console.log(evalX === 42);
    // true
    let x = 17;
    let evalX = eval('var x = 42; x;');
    console.log(x === 17);
    console.log(evalX === 42);
    // SyntaxError: Identifier 'x' has already been declared
    ```

    此时 `use strict` 和 `let`
    具备同样的效果：把变量限制在当前作用域范围。

    ``` {.javascript org-language="js"}
    (function () {
      'use strict';
      let x = 3;
      console.log(eval('var x = 6; console.log(x)'));
    })()(
      // 6
      // undefined
      function () {
        // 'use strict'
        let x = 3;
        console.log(eval('var x = 6; console.log(x)'));
      }
    )();
    // SyntaxError: Identifier 'x' has already been declared
    ```

    1.  禁止删除纯名字

    ``` {.javascript org-language="js"}
    'use strict';

    let a;
    delete a;
    // SyntaxError: Delete of an unqualified identifier in strict mode
    ```

3.  让 `eval` 和 `arguments` 更简单

    1.  无法像一般变量那样进行赋值、加减操作

    ``` {.javascript org-language="js"}
    'use strict';

    eval = 17;
    arguments++;
    ++eval;
    var obj = { set p(arguments) {} };
    var eval;
    try {
    } catch (arguments) {}
    function x(eval) {}

    // SyntaxError: Unexpected eval or arguments in strict mode
    ```

    1.  不能为 `arguments` 设置别名（:question:）

    2.  `arguments.callee` 不再支持

    ``` {.javascript org-language="js"}
    'use strict';

    (function () {
      return arguments.callee;
    })();
    // TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
    ```

4.  提供更安全的 JavaScript

    1.  函数中传递给 `this` 不必是一个对象

    ``` {.javascript org-language="js"}
    'use strict';

    console.log(
      (function () {
        return this;
      })()
    );
    // undefined
    ```

    1.  It\'s no longer possible to \"walk\" the JavaScript stack via
        commonly-implemented extensions to ECMAScript

    ``` {.javascript org-language="js"}
    function restricted() {
      'use strict';
      restricted.caller;
      restricted.arguments;
    }

    function privilegedInvoker() {
      return restricted();
    }

    privilegedInvoker();
    ```

### 关键字、保留字

break, do, in, typeof, case, else, instanceof, var, catch, export, new,
void, class, extends, return, while, const, finally, super, with,
continue, for, switch, yield, debugger, function, this, default, if,
throw, delete, import, try, enum, implements, package, public,
interface, protected, static, let, private, await

### 变量

松散类型（变量的数据类型不受限制）。在 ES6 以前，声明变量一律使用
=var=；ES6 引入了 =let=，用于定义变量。

1.  `var`

    ``` {.javascript org-language="js"}
    var msg;
    // 此时 msg 的值为 undefined
    ```

    ``` {.javascript org-language="js"}
    var msg = 'hi';
    ```

    在这句话中，不要认为 msg
    变量被赋值为字符串，而是一个值被赋给一个变量。在此之后，还可以把一个数字赋给该变量。

    1.  作用域

    ``` {.javascript org-language="js"}
    function test() {
      var msg = 'Hi';
    }
    test();
    console.log(msg);
    ```

    此时声明的变量 msg 被限制在函数内部，在全局作用域无法获取到。

    如何能在全局作用域获取呢？

    ``` {.javascript org-language="js"}
    function test() {
      msg = 'Hi';
    }
    test();
    console.log(msg);
    ```

    删除 `var`
    即可。严格模式下，不允许这样做。但是，这样会创建全局变量，不利于代码维护。

    一次定义多个变量：

    ``` {.javascript org-language="js"}
    var a = 1,
      b = 2,
      v = 3;
    ```

    1.  声明提升

    ``` {.javascript org-language="js"}
    function test() {
      console.log(msg);
      var msg = 'Hi';
      console.log(msg);
    }
    test();
    // undefined
    // Hi
    ```

    JS 解释器没有报错，是因为 var 造成的变量提升，实际的代码是：

    ``` js
    function test() {
      var msg;
      console.log(msg);
      msg = 'Hi';
      console.log(msg);
    }
    test();
    ```

    hoisting 的意思是，解释器将所有对变量的声明放到当前作用域的最开始。

    var 还可以声明多次，每次对变量赋不同的值，下面的新值会覆盖旧值。

2.  `let`

    与 `var` 的最大不同是，=let= 声明了块级作用域；=var=
    声明了函数作用域。

    ``` js
    if (true) {
      var a = 'b';
      console.log(a);
    }
    console.log(a);
    ```

    ``` js
    if (true) {
      let a = 'b';
      console.log(a);
    }
    console.log(a); // ReferenceError: a is not defined
    ```

    `let` 不允许重复声明变量。

    ``` js
    var name;
    let age;
    let age; // SyntaxError: Identifier 'age' has already been declared
    ```

    `var` 和 `let`
    声明的变量在数据类型上并无不同，区别仅在于与变量相关的作用域。

    1.  暂时性死区

    `let`
    声明的变量并无提升，所以会出现要引用的变量还没有声明的情况，这被称为"暂时性死区（Temporal
    Dead Zone）"。

    ``` js
    console.log(error);
    let error = 'error';
    // ReferenceError: Cannot access 'error' before initialization
    ```

    1.  全局声明

    `let` 声明的全局变量，不会自动附着于 window 对象，=var=
    则会。

    ``` js
    var name = 'tianheg';
    console.log(window.name); // tianheg
    let name = 'tianheg';
    console.log(window.name); // undefined
    ```

    1.  条件声明

    为什么 `let` 不建议进行条件声明？

    因为这样做会让代码难以阅读，

    1.  for 循环中的 let 声明

    ``` js
    for (var i = 0; i < 3; i++) {
      console.log(i); // 0 1 2
    }
    console.log(i); // 3

    for (let i = 0; i < 3; i++) {
      console.log(i); // 0 1 2
    }
    console.log(i); // Uncaught ReferenceError: i is not defined
    ```

    由此可见，let 把变量 i 限制在 for 循环中。

    ``` js
    for (var i = 0; i < 3; i++) {
      setTimeout(() => console.log(i), 0); // 3 3 3
    }
    for (let i = 0; i < 3; i++) {
      setTimeout(() => console.log(i), 0); // 0 1 2
    }
    ```

    在这里，两者的不同在于：var 声明的 i 在每次循环结束后还复用前一次的
    i；使用 let 则会让 JavaScript 引擎在每次循环都新建一个迭代器变量。

3.  `const`

    `const` 和 `let`
    在大多数方面表现一致，但是它有一个最大不同------在初始化的时候必须有值，且值在声明后不变。

    ``` js
    const age = 21;
    age = 22; // TypeError: invalid assignment to const 'age'
    ```

    试图修改 const 变量会导致运行时错误。

    ``` js
    const age = 21;
    const age = 22; // SyntaxError: redeclaration of const age
    ```

    无法重复声明。

    ``` js
    const age = 21;
    if (true) {
      const age = 22;
    }
    console.log(age); // 21
    ```

    而且和 let 一样，仅对当前作用域起作用。

    ``` js
    const person = {};
    person.name = 'tianheg';
    console.log(person); // Object { name: "tianheg" }
    ```

    const
    只限制变量本身不能改变，如果变量是对象，改变变量的属性是可以的。

    ``` js
    for (const i = 0; i < 3; i++) {
      // TypeError: invalid assignment to const 'i'
      console.log(i); // 0
    }
    ```

    const 无法用于这个 for 循环。但是，const 可以用在以下 for 循环。

    ``` js
    let i = 0;
    for (const j = 4; i < 3; i++) {
      console.log(j); // 4 4 4
    }
    ```

    ``` js
    for (const key in { a: 1, b: 2 }) {
      console.log(key); // a b
    }
    ```

    发现一件事：for-in 和 for-of 是有区别的。

    ``` js
    for (const value of [1, 2, 3, 4, 5]) {
      console.log(value); // 1 2 3 4 5
    }

    for (const value in [1, 2, 3, 4, 5]) {
      console.log(value); // 0 1 2 3 4
    }
    ```

4.  声明样式和最佳实践

    -   不用 `var`
    -   总是用 `const=，只有必要时才用 =let`

### 数据类型

六种原始数据（primitive
types）：undefined、null、boolean、number、bigint、string、symbol。

一种复杂数据类型：object。

1.  `typeof` 操作符

    ``` js
    let a;
    console.log(typeof a); // "undefined"
    console.log(typeof 1); // "number"
    console.log(typeof 1n); // "bigint"
    console.log(typeof ''); // "string"
    console.log(typeof function () {}); // "function"
    console.log(typeof null); // "object" 空的对象引用
    console.log(typeof true); // "boolean"
    console.log(typeof Symbol()); // "symbol"
    ```

2.  Undefined 类型

    它只有一个值：=undefined=。当变量使用 `var` 或
    `let` 声明却未赋值时，变量此时的值默认为 =undefined=。

    ``` js
    let a;
    console.log(typeof a == 'undefined'); // true

    let a;
    console.log(typeof a == undefined); // false
    ```

    `typeof` 发生了变化。和 `undefined` 比较是
    false，和 `"undefined"` 比较是 true。

    ::: warning `undefined` 存在的目的是为了比较，它直到 ES3
    才加入标准。这是为了区分空的对象指针和未初始化的变量。 :::

    ``` js
    let age;
    console.log(age); // "undefined"
    console.log(message); // ReferenceError: message is not defined
    ```

    声明未初始化和未声明的结果是不同的。

    ``` js
    let age;
    console.log(typeof age); // "undefined"
    console.log(typeof message); // "undefined"
    ```

    然而，对于 typeof 而言，两者的输出一致。

    ::: tip 声明并初始化是一个最佳实践，这样之后使用 `typeof`
    检查变量类型如果是 `"undefined"`
    就会知道当前变量未声明，而不是声明了而没有初始化。 :::

    `undefined`
    是否定的，用在条件语句中是否定含义。但是，务必确定------你是需要一个
    falsy 值还是确认变量是否 =undefined=，因为还有其他值是否定含义的。

    ``` js
    let age;

    if (age) {
      console.log('Not execute');
    }
    if (!age) {
      console.log('Executed!'); // Executed!
    }
    if (msg) {
      // ReferenceError: msg is not defined
      console.log('Not execute, and error');
    }
    ```

3.  空类型

    它同样只有一个值：=null=。逻辑上，=null= 是一个空的对象指针。

    ``` js
    let car = null;
    console.log(typeof car); // object
    ```

    声明一个会用作对象的变量时，最好初始化为
    null，而不是其他值。这样可以通过 `car !` null= 确定 car
    是否发生变化。

    ``` js
    console.log(undefined == null); // true
    ```

    `null` 也是否定的。

    ```js
    let car = null;
    let msg;
    if (car) {
      console.log('Not execute');
    }
    if (!car) {
      console.log(`Executed ${car}`); // Executed null
    }
    if (msg) {
      console.log('Not execute');
    }
    if (!msg) {
      console.log(\`Executed ${msg}\`); // Executed undefined
    }
    ```

4.  布尔类型

    有两个值：=true=和=false=。大小写敏感。可使用 `Boolean()`
    将非布尔值转化为 `true` 和 =false=。

    ``` js
    let found = true;
    let not_found = false;
    console.log(`${found}, ${not_found}`); // true, false

    let found = 'nihao';
    console.log(`${Boolean(found)}`); // true
    ```

    `Boolean()` 类型转换一览表：

      数据类型    转成 `true`        转成 `false`
      ----------- ----------------------------- -------------------------
      布尔型      true                          false
      字符串      任意非空字符串                \"\"
      数字        任意非 0 数字（包括无穷大）   0, NaN
      对象        任意对象                      null
      Undefined   无                            undefined

    流控制语句会自动进行布尔转换，所以知道这张表很重要。

5.  数值类型

    使用 IEEE-754 格式。

    整数支持十进制（默认）、八进制、十六进制。

    -   八进制： 0（zero） + o（letter o）+ num（0-7），例：=0o12=
    -   十六进制：0（zero） + x/X + num(0-9), letter(a-f)，例：=0x12=

    所有八进制和十六进制数字，在运算时都会被转换成十进制。

    存在正 0 和负 0。

    1.  浮点值

    举例：

    ``` js
    const num = 1.4;
    const num = 0.4;
    const num = 0.4; // 可行，但不推荐
    ```

    存储浮点数所耗内存是整数的两倍。ECMAScript 总在将浮点数转换为整数。

    ``` js
    const num = 1;
    const num = 10.0;
    ```

    以上在存储时都以整数形式。

    对于很大或很小的数字，当采用科学记数法表示时，会出现小数。

    ``` js
    const num = 2.136e12;
    ```

    当一个数字很小，小数点后有 6 个和 6 个以上的 0
    时，会自动转换为科学记数法。

    浮点数精确度在 17
    位十进制位，但是在进行算术运算时，却远远不够精确。0.1

    -   0.2 永远不等于 0.3。

    1.  数值的范围

    目前，最小值存储在 =Number.MIN~VALUE~=，为 =5e-324=；最大值存储在
    =Number.MAX~VALUE~=，为 =1.7976931348623157e+308=。

    如果运算结果，超出这个范围，很小的用 `-Infinity`
    表示，很大的用 =Infinity=。

    -   `isFinite()` 确定数字是否是有限值
    -   `Number.NEGATIVE_INFINITY`
    -   `Number.POSITIVE_INFINITY`

    1.  NaN

    Not a Number. 当返回值不是期待的数字时使用。

    -   与 NaN 进行运算结果都是 NaN
    -   与任何值都不等，甚至它本身
    -   `isNaN()` 用于确定参数是否是
        NaN，第一步转成数字，如果不能转成数字返回
        true（可检查字符串、数字、甚至是对象）
    -   检查对象时，先调用 `valueOf()=，然后调用 =toString()`

    1.  数字转换

    三个将非数字转为数字的函数：

    -   `Number()`

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

    -   先调用 `valueOf()=，然后调用 =toString()`

    -   `parseInt()`

    -   返回 NaN 的情况：首个字符不是数字、+、-，空字符串返回 NaN

    -   `1234blue` `> =1234`

    -   `22.4` `> =22`

    -   第二个参数提供进制设置：`parseInt(12, 8)`

    -   `parseFloat()`

    -   返回 NaN 的情况：首个字符不是数字、+、-，空字符串返回 NaN

    -   `parseFloat(22.34.2)` 会报错：SyntaxError: missing )
        after argument list

6.  字符串类型

    1.  字符串字面量

      Literal           Meaning
      ----------------- -----------
      `\n`   新的一行
      `\t`   Tab
      `\b`   退格
      `\r`   回车
      `\f`   Form feed
      `\\`   反斜杠
      `\'`   单引号
      `\"`   双引号
      \\=\</code\>      反撇

    如果一个字符串中包含双字节字符，在计算字符串长度时会不够精确。

    1.  字符串的天性

    ECMAScript
    中的字符串不可变，如果想改变，需要把原字符串摧毁后，再赋新值。

    1.  转换成字符串

    -   `toString()`
    -   可接受的值：数字、布尔值、对象、字符串（返回一份拷贝，深拷贝/浅拷贝？
        是浅拷贝）
    -   null、undefined 无该属性
    -   转化数字时，可接受一个参数作为进制
    -   `String()`
    -   如果值有 `toString()` 属性，直接调用
    -   null =\> \"null\"
    -   undefined =\> \"undefined\"
    -   \"\" + \<data type\> 也可以转化字符串（详见操作符）

    ``` js
    const num = 12;
    num.toString();
    ```

    1.  模板字面量

    ES6 引入的特性。会原样显示定义的字符串。

    ``` js
    let str = `nihao
    shijie`;
    ```

    1.  字符串插值

    ``` js
    let str = `nihao
    shijie`;
    console.log(`${str}`);
    ```

    另外两种方式：

    ``` js
    console.log(`Hello, ${`World`}!`);

    // 相当于
    let foo = { toString: () => 'World' };
    console.log(`Hello, ${foo}!`);
    ```

    ``` js
    function capitalize(word) {
      return `${word[0].toUpperCase()}${word.slice(1)}`;
    }
    console.log(`${capitalize('hello')}, ${capitalize('world')}!`);
    ```

    ``` js
    let value = '';
    function append() {
      value = `${value} abc`;
      console.log(value);
    }
    append();
    ```

    1.  模板字面量标签函数

    标签函数------自定义如何进行插值。

    看过例子无法一下子理解。

    ``` js
    let a = 6;
    let b = 9;

    function simpleTag(strings, aValExpression, bValExpression, sumExpression) {
      console.log(strings); // Array(4) [ "", " + ", " = ", "" ]
      console.log(aValExpression); // 6
      console.log(bValExpression); // 9
      console.log(sumExpression); // 15

      return 'foobar';
    }

    let untaggedResult = `${a} + ${b} = ${a + b}`;
    let taggedResult = simpleTag`${a} + ${b} = ${a + b}`;

    console.log(untaggedResult); // 6 + 9 = 15
    console.log(taggedResult); // foobar
    ```

    小的改进：

    ``` js
    let a = 6;
    let b = 9;

    function simpleTag(strings, ...expressions) {
      console.log(strings); // Array(4) [ "", " + ", " = ", "" ]
      for (const expression of expressions) {
        console.log(expression); // 6 9 15
      }

      return 'foobar';
    }

    let taggedResult = simpleTag`${a} + ${b} = ${a + b}`;

    console.log(taggedResult); // foobar
    ```

    标签函数的终极版本。

    ``` js
    let a = 6;
    let b = 9;

    function zipTag(strings, ...expressions) {
      return (
        strings[0] + expressions.map((e, i) => `${e}${strings[i + 1]}`).join('')
      );
    }

    let untaggedResult = `${a} + ${b} = ${a + b}`;
    let taggedResult = zipTag`${a} + ${b} = ${a + b}`;

    console.log(untaggedResult); // 6 + 9 = 15
    console.log(taggedResult); // 6 + 9 = 15
    ```

    1.  原始字符串

    ``` js
    '\u00A9';
    String.raw`\u00A9``first line\nsecond line`;
    ```

    如果通过字符串数组的 .raw 方法获得字符串的原始形式（通过标签函数）：

    ``` js
    function printRaw(strings) {
      console.log('Actual characters:');
      for (const string of strings) {
        console.log(string);
      }

      console.log('Escaped characters:');
      for (const rawString of strings.raw) {
        console.log(rawString);
      }
    }

    printRaw`\u00A9${'and'}\n`;
    ```

7.  Symbol 类型

    ES6 新引入。

    Symbol 实例是唯一且不可变的。Symbol
    的作用是为了确保对象属性使用唯一标识符，不会发生属性冲突的危险。Symbol
    不是用来创建私有属性的，而是用来作为唯一记号，用作非字符串形式的对象属性的。

    1.  基本 Symbol 应用

    ``` js
    let sym = Symbol();
    console.log(typeof sym); // symbol
    ```

    ``` js
    let sym1 = Symbol();
    let sym2 = Symbol();

    let sym3 = Symbol('foo');
    let sym4 = Symbol('foo');

    console.log(sym1 == sym2); // false
    console.log(sym3 == sym4); // false
    ```

    每次创建的 Symbol 都是不同的。

    Symbol 没有字面量语法是很关键的。按照规范，创建 Symbol()
    实例并将其用作对象的新属性，就能确保不会覆盖已有的对象属性。

    Symbol 函数无法使用 new 关键字。这样做的目的为了避免产生 Symbol
    对象包装器，与 Boolean、String、Number 混淆。

    ``` js
    let boolean = new Boolean();
    console.log(typeof boolean); // object

    let string = new String();
    console.log(typeof string); // object

    let number = new Number();
    console.log(typeof number); // object

    let symbol = new Symbol(); // TypeError: Symbol is not a constructor
    ```

    可以利用对象包装器，对 Symbol 实现类似 Boolean 的功能。

    ``` js
    let symbol = Symbol();
    let wrappedSymbol = Object(symbol);
    console.log(typeof wrappedSymbol); // object
    ```

    1.  使用全局 Symbol 注册

    有些场景会共享一个 Symbol 实例，这种需要可以实现。使用了
    [`Symbol.for()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/for)（在一个运行时，根据给定
    key 寻找 symbol 注册集，找到了就返回，找不到就新建）。

    ``` js
    let firstGlobalSymbol = Symbol.for('foo'); // 新建了一个 symbol
    let anotherGlobalSymbol = Symbol.for('foo'); // 复用前一个 symbol

    console.log(firstGlobalSymbol === anotherGlobalSymbol); // true
    ```

    `Symbol.for()` 与 `Symbol()`
    不同。前后者创建的 symbol 并不相等。

    ``` js
    Symbol.for('bar') === Symbol.for('bar'); // true
    Symbol('bar') === Symbol('bar'); // false

    const symbol1 = Symbol.for('foo');
    symbol1.toString(); // "Symbol(foo)"
    ```

    可以通过
    [`Symbol.keyFor()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/keyFor)
    检查一个 symbol 实例是全局（global）还是本地（local）的。

    ``` js
    let globalSymbol = Symbol.for('foo');
    let localSymbol = Symbol('foo');

    console.log(Symbol.keyFor(globalSymbol)); // foo
    console.log(Symbol.keyFor(localSymbol)); // undefined
    ```

    用在非 symbol 数据类型会出错。

    ``` js
    // TypeError: "nihao" is not a symbol
    console.log(Symbol.keyFor('nihao'));
    ```

    1.  使用 Symbol 作为属性

    在任何能够使用字符串和数值作为属性的地方，也能使用
    symbol。这包括对象的属性字面量、=Object.defineProperty() /
    Object.defineProperties()=。在一个对象里，可以只使用 symbol
    作为属性。

    ``` js
    let s1 = Symbol('foo'),
      s2 = Symbol('bar'),
      s3 = Symbol('baz'),
      s4 = Symbol('qux');

    let o = {
      [s1]: 'foo val',
    };
    // o[s1] = 'foo val' 也可以

    console.log(o); // { [Symbol(foo)]: 'foo val' }

    Object.defineProperty(o, s2, { value: 'bar val' });
    console.log(o); // { Symbol("foo"): "foo val", … }

    Object.defineProperties(o, {
      [s3]: { value: 'baz val' },
      [s4]: { value: 'qux val' },
    });
    console.log(o); // { Symbol("foo"): "foo val", … }
    ```

    在我看来，目前（2022-06-15, Linux, Firefox Developer Edition
    102.0b7）后两个的 log 输出是一致的。

    [`Object.getOwnPropertyNames()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames)
    返回对象所有属性组成的数组，[`Object.getOwnPropertySymbols()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols)
    返回 symbol
    属性，[`Object.getOwnPropertyDescriptors()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors)
    会返回一个对象，包含普通属性和 使用 symbol
    属性。[`Reflect.ownKeys()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys)
    会返回所有类型的键。

    ``` js
    let s1 = Symbol('foo'),
      s2 = Symbol('bar');

    let o = {
      [s1]: 'foo val',
      [s2]: 'bar val',
      baz: 'baz val',
      qux: 'qux val',
    };

    console.log(Object.getOwnPropertyNames(o)); // [ "baz", "qux" ]
    console.log(Object.getOwnPropertySymbols(o)); // [ Symbol("foo"), Symbol("bar") ]
    console.log(Object.getOwnPropertyDescriptors(o)); // { baz: {…}, qux: {…}, Symbol("foo"): {…}, Symbol("bar"): {…} }
    console.log(Reflect.ownKeys(o)); // [ "baz", "qux", Symbol("foo"), Symbol("bar") ]
    ```

    如果 symbol 被创建直接用作对象属性，那么 symbol
    会一直在内存中不会丢失。

    > However, declining to keep an explicit reference to a property
    > means that traversing all the object\'s symbol properties will be
    > required to recover the property key.

    ``` js
    let o = {
      [Symbol('foo')]: 'foo val',
      [Symbol('bar')]: 'bar val',
    };

    console.log(o); // { Symbol("foo"): "foo val", Symbol("bar"): "bar val" }

    let barSymbol = Object.getOwnPropertySymbols(o).find((symbol) =>
      symbol.toString().match(/bar/)
    );

    console.log(barSymbol); // Symbol("bar")
    ```

    1.  常用 Symbols

    通过自定义 `Symbol.iterator` 属性可以改变
    `for-of` 语句的行为。

    每个常用 symbol 属性都是不可写、不可枚举、不可配置的。

    在 ECMAScript 标准中，=Symbol.iterator= 会被写成这样 =@@iterator=。

    1）[`Symbol.asyncIterator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/asyncIterator)

    返回对象的异步迭代器。在 `for-await-of`
    语句中调用。用于识别实现了异步迭代器 API 的函数。

    ``` js
    class Foo {
      async *[Symbol.asyncIterator]() {}
    }

    let f = new Foo();
    console.log(f[Symbol.asyncIterator]()); // AsyncGenerator {  }
    ```

    ``` js
    class Emitter {
      constructor(max) {
        this.max = max;
        this.asyncIdx = 0;
      }

      async *[Symbol.asyncIterator]() {
        while (this.asyncIdx < this.max) {
          yield new Promise((resolve) => resolve(this.asyncIdx++));
        }
      }
    }

    async function asyncCount() {
      let emitter = new Emitter(5);

      for await (const x of emitter) {
        console.log(x);
      }
    }

    asyncCount();
    // 0 1 2 3 4
    ```

    这大概就是一个迭代的内部实现了。

    2）[`Symbol.hasInstance`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/hasInstance)

    决定一个构造器对象将某个对象作为构造器的实例之一。由
    [`instanceof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)
    调用。=instanceof= 确定一个对象实例在它的原型链中是否存在原型。

    `instanceof` 用法：

    ``` js
    function Foo() {}
    let f = new Foo();
    console.log(f instanceof Foo); // true

    class Bar {}
    let b = new Bar();
    console.log(b instanceof Bar); // true
    ```

    使用 `Symbol.hasInstance` 实现和 `instanceof`
    一致的功能：

    ``` js
    function Foo() {}
    let f = new Foo();
    console.log(Foo[Symbol.hasInstance](f)); // true

    class Bar {}
    let b = new Bar();
    console.log(Bar[Symbol.hasInstance](b)); // true
    ```

    `Symbol.hasInstance` 属性定义于 `Function`
    原型，因此对所有函数和类可用。因为 `instanceof`
    操作符会像其他属性那样在原型链中寻找属性定义，所以可以在继承的类上重新定义函数，并将其作为一种静态方法。

    ``` js
    class Bar {}
    class Baz extends Bar {
      static [Symbol.hasInstance]() {
        return false;
      }
    }

    let b = new Baz();
    console.log(Bar[Symbol.hasInstance](b)); // true
    console.log(b instanceof Bar); // true
    console.log(Baz[Symbol.hasInstance](b)); // false
    console.log(b instanceof Baz); // false
    ```

    3）[`Symbol.isConcatSpreadable`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable)

    它能覆盖
    [`Array.prototype.concat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
    的设置。它是一个属性，值的数据类型为布尔型。

    ``` js
    let initial = ['foo'];
    let array = ['bar'];
    console.log(array[Symbol.isConcatSpreadable]); // undefined
    console.log(initial.concat(array)); // [ "foo", "bar" ]
    array[Symbol.isConcatSpreadable] = false;
    console.log(initial.concat(array)); // [ "foo", ['bar'] ]

    let arrayLikeObject = { length: 1, 0: 'baz' };
    console.log(arrayLikeObject[Symbol.isConcatSpreadable]); // undefined
    console.log(initial.concat(arrayLikeObject)); // [ "foo", {…} ]
    arrayLikeObject[Symbol.isConcatSpreadable] = true;
    console.log(initial.concat(arrayLikeObject)); // [ "foo", "baz" ]

    let otherObject = new Set().add('qux');
    console.log(otherObject[Symbol.isConcatSpreadable]); // undefined
    console.log(initial.concat(otherObject)); // [ "foo", Set(1) ]
    otherObject[Symbol.isConcatSpreadable] = true;
    console.log(initial.concat(otherObject)); // [ "foo" ]
    ```

    4）[`Symbol.iterator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)

    指定对象的默认迭代器。

    ``` js
    class Foo {
      *[Symbol.iterator]() {}
    }
    let f = new Foo();
    console.log(f[Symbol.iterator]()); // Generator {  }
    ```

    ``` js
    class Emitter {
      constructor(max) {
        this.max = max;
        this.idx = 0;
      }

      *[Symbol.iterator]() {
        while (this.idx < this.max) {
          yield this.idx++;
        }
      }
    }

    function count() {
      let emitter = new Emitter(5);

      for (const x of emitter) {
        console.log(x);
      }
    }

    count(); // 0 1 2 3 4
    ```

    5）[`Symbol.match()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/match)

    [`String.prototype.match()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
    背后调用了 =Symbol.match()=。用于匹配正则表达式。

    ``` js
    console.log(RegExp.prototype[Symbol.match]); // function Symbol.match()
    console.log('foobar'.match(/bar/)); // Array [ 0: "bar", groups: undefined, index: 3, input: "foobar", length: 1]
    ```

    如果 input 为非正则形式，运算的结果是产生一个 `RegExp`
    对象。

    ``` js
    class FooMatcher {
      static [Symbol.match](target) {
        return target.includes('foo');
      }
    }

    console.log('foobar'.match(FooMatcher)); // true
    console.log('barbaz'.match(FooMatcher)); // false

    class StringMatcher {
      constructor(str) {
        this.str = str;
      }

      [Symbol.match](target) {
        return target.includes(this.str);
      }
    }

    console.log('foobar'.match(new StringMatcher('foo'))); // true
    console.log('barbaz'.match(new StringMatcher('qux'))); // false
    ```

    以上重新定义了 `Symbol.match` 函数。

    6）[`Symbol.replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace)

    通过正则表达式的方式，匹配字符串，并替换。由
    [`String.prototype.replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
    调用。

    ``` js
    console.log(RegExp.prototype[Symbol.replace]); // function Symbol.replace()
    console.log('foobarbaz'.replace(/bar/, 'qux')); // fooquxbaz
    ```

    ``` js
    class FooReplacer {
      static [Symbol.replace](target, replacement) {
        return target.split('foo').join(replacement);
      }
    }

    console.log('barfoobaz'.replace(FooReplacer, 'qux')); // barquxbaz

    class StringReplacer {
      constructor(str) {
        this.str = str;
      }

      [Symbol.replace](target, replacement) {
        return target.split(this.str).join(replacement);
      }
    }

    console.log('barfoobaz'.replace(new StringReplacer('foo'), 'qyx')); // barqyxbaz
    ```

    7）[`Symbol.search()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/search)

    返回匹配正则的字符串的索引。由
    [`String.prototype.search()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search)
    调用。

    ``` js
    console.log(RegExp.prototype[Symbol.search]); // function Symbol.search()
    console.log('foobarbaz'.search(/bar/)); // 3
    ```

    ``` js
    class FooSearcher {
      static [Symbol.search](target) {
        return target.indexOf('foo');
      }
    }

    console.log('foobar'.search(FooSearcher)); // 0
    console.log('barfoo'.search(FooSearcher)); // 3
    console.log('barbaz'.search(FooSearcher)); // -1

    class StringSearcher {
      constructor(str) {
        this.str = str;
      }

      [Symbol.search](target) {
        return target.indexOf(this.str);
      }
    }

    console.log('foobar'.search(new StringSearcher('foo'))); // 0
    console.log('barfoo'.search(new StringSearcher('foo'))); // 3
    console.log('barbaz'.search(new StringSearcher('qux'))); // -1
    ```

    8）[`Symbol.species`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/species)

    它是一个函数值属性，构造器函数用于创建派生函数。最常用的属性之一。定义静态
    getter 函数可以覆盖新创建实例的原型定义。

    ``` js
    class Bar extends Array {}
    class Baz extends Array {
      static get [Symbol.species]() {
        return Array;
      }
    }

    let bar = new Bar();
    console.log(bar instanceof Array); // true
    console.log(bar instanceof Bar); // true
    bar = bar.concat('bar');
    console.log(bar); // [ 'bar' ]
    console.log(bar instanceof Array); // true
    console.log(bar instanceof Bar); // true

    let baz = new Baz();
    console.log(baz instanceof Array); // true
    console.log(baz instanceof Baz); // true
    baz = baz.concat('baz');
    console.log(baz); // [ 'baz' ]
    console.log(baz instanceof Array); // true
    console.log(baz instanceof Baz); // false
    ```

    9）[`Symbol.split`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split)

    由
    [`String.prototype.split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
    调用。

    ``` js
    console.log(RegExp.prototype[Symbol.split]); // function Symbol.split()
    console.log('foobarbaz'.split(/bar/)); // [ "foo", "baz" ]
    ```

    ``` js
    class FooSplitter {
      static [Symbol.split](target) {
        return target.split('foo');
      }
    }
    console.log('barfoobaz'.split(FooSplitter)); // [ "bar", "baz" ]

    class StringSplitter {
      constructor(str) {
        this.str = str;
      }

      [Symbol.split](target) {
        return target.split(this.str);
      }
    }
    console.log('barfoobaz'.split(new StringSplitter('foo'))); // [ "bar", "baz" ]
    ```

    10）[`Symbol.toPrimitive`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toPrimitive)

    将一个对象转化为一个可理解的原始类型。

    ``` js
    class Foo {}
    let foo = new Foo();
    console.log(3 + foo); // 3[object Object]
    console.log(3 - foo); // NaN
    console.log(String(foo)); // [object Object]

    class Bar {
      constructor() {
        this[Symbol.toPrimitive] = function (hint) {
          switch (hint) {
            case 'number':
              return 4;
            case 'string':
              return 'string baz';
            case 'default':
            default:
              return 'default baz';
          }
        };
      }
    }
    let baz = new Bar();
    console.log(3 + baz); // 3default baz
    console.log(3 - baz); // -1
    console.log(String(baz)); // string baz
    ```

    11）[`Symbol.toStringTag`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)

    用于创建对象的默认字符串描述。

    ``` js
    let s = new Set();
    console.log(s); // Set []
    console.log(s.toString()); // [object Set]
    console.log(s[Symbol.toStringTag]); // Set

    class Foo {}
    let foo = new Foo();
    console.log(foo); // Object {  }
    console.log(foo.toString()); // [object Object]
    console.log(foo[Symbol.toStringTag]); // undefined

    class Bar {
      constructor() {
        this[Symbol.toStringTag] = 'Bar';
      }
    }
    let bar = new Bar();
    console.log(bar); // Object { Symbol("Symbol.toStringTag"): "Bar" }
    console.log(bar.toString()); // [object Bar]
    console.log(bar[Symbol.toStringTag]); // Bar
    ```

    12）[`Symbol.unscopables`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables)（因为不推荐使用
    `with=，所以 =Symbol.unscopables` 也不推荐使用）

    ``` js
    let o = { foo: 'bar' };
    with (o) {
      console.log(foo); // bar
    }
    o[Symbol.unscopables] = {
      foo: true,
    };
    with (o) {
      console.log(foo); // ReferenceError: foo is not defined
    }
    ```

8.  对象类型

    ``` js
    let o = new Object();
    console.log(o); // Object {  }
    ```

    `Object` 可以被添加属性方法，也可以定义新的对象。因为
    `Object` 是派生的，所以 `Object`
    拥有的属性和方法，其他派生对象也有。

    每个 `Object` 实例都有以下属性和方法：

    -   constructor------这个函数用来创建对象
    -   hasOwnProperty(propertyName)------确定给定属性是否在对象本身存在（不是对象的原型），属性名必须是字符串
    -   isPrototypeOf(object)------确定一个对象是另一个对象的原型
    -   propertyIsEnumerable(propertyName)------确定对象属性是否能通过
        for-in 从句列举
    -   toLocaleString()------在当前语言环境下，返回对象的字符串形式
    -   toString()------直接返回对象的字符串形式
    -   valueOf()------根据对象的属性和属性值，返回字符串、数字、布尔值。返回结果经常和
        toString() 相同

    ::: warning Technically speaking, the behavior of objects in
    ECMA-262 need not necessarily apply to other objects in JavaScript.
    Objects that exist in the browser environment, such as those in the
    Browser Object Model (BOM) and Document Object Model (DOM), are
    considered host objects because they are provided and defined by the
    host implementation. Host objects aren\'t governed by ECMA-262 and,
    as such, may or may not directly inherit from Object. :::

### 操作符

1.  一元

    1.  递增/递减

    从 C 语言超过了，分为前缀和后缀。

    前变后不变。

    ``` js
    let age = 21;
    let age2 = ++age;
    console.log(age); // 22
    console.log(age2); // 22

    let age = 21;
    let age2 = age++;
    console.log(age); // 22
    console.log(age2); // 21

    let age = 22;
    let age2 = --age;
    console.log(age); // 21
    console.log(age2); // 21

    let age = 22;
    let age2 = age--;
    console.log(age); // 21
    console.log(age2); // 22
    ```

    在任何值上的递增和递减运算遵循：

    -   When used on a string that is a valid representation of a
        number, convert to a number and apply the change. The variable
        is changed from a string to a number.
    -   When used on a string that is not a valid number, the
        variable\'s value is set to NaN. The variable is changed from a
        string to a number.
    -   When used on a Boolean value that is false, convert to 0 and
        apply the change. The variable is changed from a Boolean to a
        number.
    -   When used on a Boolean value that is true, convert to 1 and
        apply the change. The variable is changed from a Boolean to a
        number.
    -   When used on a floating-point value, apply the change by adding
        or subtracting 1.
    -   When used on an object, call its valueOf() method (discussed
        more in Chapter 5) to get a value to work with. Apply the other
        rules. If the result is NaN, then call toString() and apply the
        other rules again. The variable is changed from an object to a
        number.

    ``` js
    let s1 = '2';
    let s2 = 'z';
    let b = false;
    let f = 1.1;
    let o = {
      valueOf() {
        return -1;
      },
    };
    s1++;
    s2++;
    b++;
    f--;
    o--;
    console.log(s1); // 3
    console.log(s2); // NaN
    console.log(b); // 1
    console.log(f); // 0.10000000000000009
    console.log(o); // -2
    ```

    1.  `+/-`

    ``` js
    let num = 23;
    num = -num;
    console.log(num); // -23
    ```

    ``` js
    let num = 23;
    num = +num;
    console.log(num); // 23
    ```

    ``` js
    let s1 = '01',
      s2 = '1.1',
      s3 = 'z',
      b = false,
      f = 1.1,
      o = {
        valueOf() {
          return -1;
        },
      };
    s1 = +s1;
    s2 = +s2;
    s3 = +s3;
    b = +b;
    f = +f;
    o = +o;
    console.log(`${s1}, ${s2}, ${s3}, ${b}, ${f}, ${o}`); // 1, 1.1, NaN, 0, 1.1, -1
    ```

    ``` js
    let s1 = '01',
      s2 = '1.1',
      s3 = 'z',
      b = false,
      f = 1.1,
      o = {
        valueOf() {
          return -1;
        },
      };
    s1 = -s1;
    s2 = -s2;
    s3 = -s3;
    b = -b;
    f = -f;
    o = -o;
    console.log(`${s1}, ${s2}, ${s3}, ${b}, ${f}, ${o}`); // -1, -1.1, NaN, 0, -1.1, 1
    ```

2.  位

    `sign bit`, =two\'s
    complement=，补码，十进制正负数转化为二进制。JavaScript
    进行位操作时，会先把 64 位数字转化为 32 位，执行一些操作，然后再把
    32 位的结果转为 64 位。

    1.  NOT

    ``` js
    let num = 21;
    let num2 = ~21;
    console.log(num); // 21
    console.log(num2); // -22
    console.log(num.toString(2)); // 10101
    console.log(num2.toString(2)); // -10110
    ```

    1.  AND

    ``` js
    console.log(1 & 1); // 1
    console.log(1 & 0); // 0
    console.log(0 & 1); // 0
    console.log(0 & 0); // 0
    ```

    1.  OR

    ``` js
    console.log(1 | 1); // 1
    console.log(1 | 0); // 1
    console.log(0 | 1); // 1
    console.log(0 | 0); // 0
    ```

    1.  XOR

    ``` js
    console.log(1 ^ 1); // 0
    console.log(1 ^ 0); // 1
    console.log(0 ^ 1); // 1
    console.log(0 ^ 0); // 0`
    ```

    1.  左移

    ``` js
    let oldValue = 2; // 10
    let newValue = oldValue << 5; // 二进制左移 5 位 => 64(1,000,000)
    console.log(newValue); // 64
    ```

    1.  有符号右移

    ``` js
    let oldValue = 64; // 1,000,000
    let newValue = oldValue >> 5; // 二进制右移 5 位 => 2（10
    console.log(newValue); // 2
    ```

    1.  无符号右移

    ``` js
    let oldValue = 64; // 1,000,000
    let newValue = oldValue >>> 5; // 二进制右移 5 位 => 2（10
    console.log(newValue); // 2
    ```

    ``` js
    let oldValue = -64;
    let newValue = oldValue >>> 5;
    console.log(newValue); // 134217726
    ```

3.  布尔

    1.  NOT

    先把操作数转为布尔型。

    -   对象的非是 false
    -   空字符串的非是 true
    -   非空字符串的非是 false
    -   0 的非是 true
    -   非 0（包括无穷）的非是 false
    -   null，NaN，undefined 的非是 true

    ``` js
    console.log(!Object());
    console.log(!false);
    console.log(!'');
    console.log(!'nihao');
    console.log(!0);
    console.log(!Infinity);
    console.log(!NaN);
    console.log(!null);
    console.log(!undefined);
    ```

    1.  AND

    可与不同数据类型的操作数运算。遵循规则：

    -   如果第一个操作数是对象，返回第二个操作数
    -   如果第二个操作数是对象，要返回它需要第一个操作数可被转为 true
    -   如果两个操作数都是对象，那么返回第二个操作数
    -   如果 2 个操作数都是 null，返回 null
    -   如果 2 个操作数都是 NaN，返回 NaN
    -   如果 2 个操作数都是 undefined，返回 undefined

    ``` js
    let found = true;
    let result = found && sth; // 这一行无法执行，下一行也执行不了
    console.log(`${result}, nihao`);
    ```

    ``` js
    let found = false;
    let result = found && sth;
    console.log(`${result}, nihao`); // false, nihao
    ```

    1.  OR

    遵循规则：

    -   第一个操作数是对象，则返回第一个操作数
    -   如果第一个操作数等同于 false，返回第二个操作数
    -   如果两个操作数都是对象，返回第一个操作数
    -   如果 2 个操作数都是 null，返回 null
    -   如果 2 个操作数都是 NaN，返回 NaN
    -   如果 2 个操作数都是 undefined，返回 undefined

    ``` js
    let found = false;
    let result = found || sth; // 无法执行
    console.log(`${result}, nihao`);
    ```

    ``` js
    let found = true;
    let result = found || sth;
    console.log(`${result}, nihao`); // true, nihao
    ```

4.  乘性

    1.  乘

    规则：

    -   操作数都是数字，算术运算，超出范围用正负 Inifity 表示。
    -   至少一个操作数是 NaN，结果是 NaN。
    -   Infinity \* 0 结果是 NaN
    -   Infinity \* 非 0 数字 结果是 Infinity 或 -Infinity
    -   Infinity \* Infinity = Infinity
    -   Infinity \* -Infinity = -Infinity
    -   -Infinity \* -Infinity = Infinity
    -   如果操作数不是数字，会先通过 `Number()`
        转成数字，再进行运算

    1.  除

    -   操作数都是数字，算术运算，超出范围用正负 Inifity 表示。
    -   至少一个操作数是 NaN，结果是 NaN。
    -   Infinity / Infinity 结果是 NaN
    -   0 / 0 = NaN
    -   非 0 数字 / 0 结果是 Infinity 或 -Infinity
    -   Infinity / 任意数字 = Infinity/-Infinity
    -   如果操作数不是数字，会先通过 `Number()`
        转成数字，再进行运算

    1.  取余（Modulus）

    -   操作数都是数字，算术运算，超出范围用正负 Inifity 表示。
    -   Infinity % 任意数字 = NaN
    -   任意数字 % Infinity = 任意数字
    -   如果操作数不是数字，会先通过 `Number()`
        转成数字，再进行运算

5.  幂

    `**` 等价于 =Math.pow()=，前者于 ES2016 引入。

    ``` js
    console.log(3 ** 2); // 9
    console.log(Math.pow(3, 2)); // 9
    ```

    它还有幂加赋值操作符。

    ``` js
    let num = 3;
    num **= 2;
    console.log(num); // 9
    ```

6.  加性

    `+ -`

7.  关系

    -   `<`
    -   `>`
    -   `<=`
    -   `>=`

8.  相等

    -   `==`
    -   `!=`
    -   `===`
    -   `!==`

9.  条件

    `...?...:...`

10. 赋值

    ===，一些快捷方式：

    -   `*=`
    -   `/=`
    -   `%=`
    -   `+=`
    -   `-=`
    -   `<<=`
    -   `>>=`
    -   `>>>=`

11. 逗号

    ``` js
    let a = 1, b = 2, c = 3

    let num = (2, 4, 3, 6) // num = 6
    ```

### 语句

1.  if

2.  do-while

3.  while

4.  for

5.  for-in

6.  for-of

    for-await-of

7.  标签

    ``` js
    start: for(let i = 0; i < 5; i++)  {
      console.log(i)
    }
    ```

8.  break 和 continue

    ``` js
    let num = 0
    for (let i = 1; i < 10; i++) {
      if (i % 5 == 0) {
        break;
      }
      num++
    }
    console.log(num) // 4
    ```

    ``` js
    let num = 0
    for (let i = 1; i < 10; i++) {
      if (i % 5 == 0) {
        continue;
      }
      num++
    }
    console.log(num) // 8
    ```

    与标签语句一起使用：

    ``` js
    let num = 0;
    outermost: for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (i == 5 && j == 5) {
          break outermost;
        }
        num++;
      }
    }
    console.log(num); // 55
    ```

    ``` js
    let num = 0;
    outermost: for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (i == 5 && j == 5) {
          continue outermost;
        }
        num++;
      }
    }
    console.log(num); // 95
    ```

9.  with 语句废弃了

10. switch

    ``` js
    if (i == 11) {
      console.log(11)
    } else if (i == 22) {
      console.log(22)
    } else {
      console.log('Other nums')
    }
    ```

    转成 switch 语句表达：

    ``` js
    switch (i) {
      case 11:
        console.log(11)
        break
      case 22:
        console.log(22)
        break
      default:
        console.log('Other nums')
    }
    ```

    在 switch 语句中，没有类型转换。

### 函数

``` js
function sayHi(name, msg) {
  console.log(`Hello, ${name}. ${msg}`) // Hello, Tianhe Gao. How are you?
}
sayHi('Tianhe Gao', 'How are you?')
```

在函数内部，执行到 `return` 部分，即停止，不再执行剩余部分。

``` js
function sayHi(name, msg) {
  return 'nihao'
  console.log(`Hello, ${name}. ${msg}`)
}
sayHi('Tianhe Gao', 'How are you?')
```

# 第 4 章 变量、作用域与内存（要多次阅读，很多地方都不理解）

-   处理变量中的原始值和引用值
-   理解执行上下文
-   理解垃圾回收

### 原始值与引用值

当值赋给变量时，JavaScript 引擎必须决定该值是原始值还是引用值。

六个原始数据类型（Undefined、Null、Boolean、Number、String、Symbol）已经在上一章讨论过。

引用值是存储在内存中的对象。与其他语言不同，JavaScript
不允许直接接触内存位置，所以对对象内存空间的直接操作是不被允许的。

当操作对象时，实际操作的是对对象的引用，而不是对象本体。由此产生了「引用」的概念。

::: info
在其他一些语言中，字符串由对象表示，因此被认为是引用类型。ECMAScript
打破了这个传统。 :::

1.  动态属性

    当处理引用值时，可以任意增加、改变、删除属性和方法。

    ``` js
    let person = new Object();
    person.name = 'Tianhe Gao';
    console.log(person.name);
    ```

    新属性 name 是一直可以访问的，知道对象 person 被销毁，或者 name
    属性被移除。

    ``` js
    let name = 'Tianhe Gao';
    name.age = 22;
    console.log(name.age); // TypeError: can't assign to property "age" on "Tianhe Gao": not an object
    ```

    给原始类型进行这样操作，就会报错。

    实例化原始类型只能通过文本定义（=let name = \"Tianhe
    Gao\"=），如果使用 new
    关键字创建原始类型，得到的是一个对象，而不是字符串。

    ``` js
    let name1 = 'Tianhe';
    let name2 = new String('Gao');
    // name1.age = 21 如果不注释掉，会无法执行下去
    name2.age = 22;
    console.log(name1.age);
    console.log(name2.age); // 22
    console.log(typeof name1); // string
    console.log(typeof name2); // object
    ```

2.  复制值

    原始值在传递时是完全复制的。

    ``` js
    let num1 = 21;
    let num2 = num1;
    ```

    以上代码，当 num1 把自己的值赋给 num2
    时，是做了一份拷贝后，把拷贝值赋给了 num2，对 num1
    本身的值无影响。如下图所示。

    ```{=org}
    #+CAPTION: 展示原始值的复制原理
    ```
    [*img/copying-values-0.jpg*]{.spurious-link
    target="img/copying-values-0.jpg"}
    而对于引用值来讲，赋值只是将新变量指向了旧变量所指向的堆（Heap）中的对象，旧变量的变化同样反映在新变量上。

    ``` js
    let obj1 = new Object();
    let obj2 = obj1;
    obj1.name = 'Tianhe Gao';
    console.log(obj2.name); // Tianhe Gao
    ```

    ```{=org}
    #+CAPTION: 展示引用值的复制原理
    ```
    [*img/copying-values-1.jpg*]{.spurious-link
    target="img/copying-values-1.jpg"}

3.  传递参数

    当参数由值传递，值被拷贝进本地变量（命名参数，即
    `arguments`
    对象）；当参数由引用传递，参数值在内存中的位置被存储在本地变量中，这表示本地变量被映射到函数外部。（这在
    ECMAScript 中无法实现）。例子：

    ``` js
    function addTen(num) {
      num += 10;
      return num;
    }

    let count = 20;
    let result = addTen(count);
    console.log(count); // 20 - no change
    console.log(result); // 30
    ```

    这是原始值的情况。

    ``` js
    function setName(obj) {
      obj.name = 'Nicholas';
    }

    let person = new Object();
    setName(person);
    console.log(person.name); // "Nicholas"
    ```

    这是引用值的情况。person 和 obj 指向同一个对象。

    ::: warning The result is that obj is accessing an object by
    reference, even though it was passed into the function by value.
    When the name property is set on obj inside the function, this
    change is reflected outside the function, because the object that it
    points to exists globally on the heap. Many developers incorrectly
    assume that when a local change to an object is reflected globally,
    that means an argument was passed by reference. :::

    这段话什么意思？

    紧接着一个例子：

    ``` js
    function setName(obj) {
      obj.name = 'Tianhe';
      obj = new Object();
      obj.name = 'Gao';
    }

    let person = new Object();
    setName(person);
    console.log(person.name); // "Tianhe"
    ```

    obj
    在函数内部重新赋值。它变成了本地对象的指针。当函数执行完毕，本地对象即被销毁。

    ::: info If person were passed by reference, then person would
    automatically be changed to point to the object whose name is
    \"Greg\". However, when person .name is accessed again, its value is
    \"Nicholas\", indicating that the original reference remained intact
    even though the argument\'s value changed inside the function. :::

    > Think of function arguments in ECMAScript as nothing more than
    > local variables.

4.  确定类型

    `typeof`
    是一个不错的工具，用来判断一个变量是字符串、布尔型、数字还是
    undefined。它无法区分对象和 null。

    ``` js
    let s = 'Nicholas';
    let b = true;
    let i = 22;
    let u;
    let n = null;
    let o = new Object();

    console.log(typeof s); // string
    console.log(typeof i); // number
    console.log(typeof b); // boolean
    console.log(typeof u); // undefined
    console.log(typeof n); // object
    console.log(typeof o); // object
    ```

    为了区分是哪种对象，ECMAScript 有
    [`instanceof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof)。

    ``` js
    result = variable instanceof constructor;
    ```

    > The **`instanceof` operator** tests to see if the
    > `prototype` property of a constructor appears anywhere
    > in the prototype chain of an object. The return value is a boolean
    > value.

    根据定义，所有的引用值都是 Object 的实例。

    ``` js
    console.log(person instanceof Object); // is the variable person an Object?
    console.log(colors instanceof Array); // is the variable colors an Array?
    console.log(pattern instanceof RegExp); // is the variable pattern a RegExp?
    ```

### 执行上下文和作用域

::: warning The concept of execution context, referred to as context for
simplicity, is of the utmost importance in JavaScript. :::

全局上下文是最外层的上下文。根据实现环境有多个。浏览器中的
window。所有由 var 定义的全局变量和函数都是 window
对象的属性和方法。使用 `let` 和 `const`
的顶级不会定义在全局上下文中，但在作用域链解析上效果是一样的。上下文在全部代码执行完毕后会被销毁，包括定义的变量和函数（全局上下文在应用退出后才会被销毁。）

每次函数调用都会形成自己的上下文。当代码执行流进入一个函数时，函数的上下文被推入上下文栈。执行完函数，上下文栈弹出。返回控制之前的上下文。

当上下文中的某段代码执行时，会创建变量对象的一个作用域链。这个作用域链决定了各级上下文中的代码在访问变量和函数时的顺序。代码正在执行的上下文的变量对象始终处于作用域链的最前端。如果上下文是函数，则其活动对象用作变量对象。活动对象最初只有一个定义变量：arguments。（全局上下文中没有这个变量。）作用域链中的下一个变量对象来自包含上下文，再下一个对象来自再下一个包含上下文（containing
context）。以此类推，直至全局上下文；全局上下文的变量对象始终是作用域链的最后一个变量对象。

``` js
var color = 'blue';

function changeColor() {
  if (color === 'blue') {
    color = 'red';
    return color;
  } else {
    color = 'blue';
  }
}

console.log(changeColor()); // red
```

关于作用域链的简单例子。

``` js
var color = 'blue';

function changeColor() {
  let anotherColor = 'red';

  function swapColors() {
    let tempColor = anotherColor;
    anotherColor = color;
    color = tempColor;

    // color, anotherColor, and tempColor are all accessible here
  }

  // color and anotherColor are accessible here, but not tempColor
  swapColors();
}

// only color is accessible here
changeColor();
```

```{=org}
#+CAPTION: 上述代码片段的执行上下文、作用域链示意
```
[*img/scope-chain-0.jpg*]{.spurious-link target="img/scope-chain-0.jpg"}
::: info Function arguments are considered to be variables and follow
the same access rules as any other variable in the execution context.
:::

1.  作用域链增强

    主要有两种执行上下文：全局和函数。

    有方式能够增强作用域链上下文。某些语句在执行时，会导致临时在作用域前端添加一个上下文，代码执行后上下文会被删除。以下是两种情况：

    1.  try/catch 语句的 catch 块
    2.  with 语句

    在这两种情况下，都会在作用域前端添加一个变量对象。对 with
    语句来说，会向作用域链前端添加指定的对象；对于 catch
    语句而言，则会创建一个新的变量对象，这个变量对象会包含要抛出的错误对象的声明。

2.  变量声明

    1.  使用 var 的函数作用域声明

    ``` js
    function add(num1, num2) {
      var sum = num1 + num2;
      return sum;
    }

    let result = add(21, 22);
    console.log(result); // 43
    console.log(sum); // ReferenceError: sum is not defined
    ```

    ``` js
    function add(num1, num2) {
      sum = num1 + num2;
      return sum;
    }

    let result = add(21, 22);
    console.log(result); // 43
    console.log(sum); // 43
    ```

    如果函数内部的变量，未经声明就初始化，变量会被自动加到全局上下文。如第二个例子。

    ::: tip 变量一定要先声明，再初始化赋值。 :::

    ``` js
    var name = 'Jake';

    // This is equivalent to:

    name = 'Jake';
    var name;
    ```

    ``` js
    function fn1() {
      var name = 'Jake';
    }

    // This is equivalent to:
    function fn2() {
      var name;
      name = 'Jake';
    }
    ```

    1.  使用 let 的块级作用域声明

    let 声明被限制在块级作用域（={}=）。

    ``` js
    if (true) {
      let a;
    }
    console.log(a); // ReferenceError: a is not defined

    while (true) {
      let b;
    }
    console.log(b); // ReferenceError: b is not defined

    function foo() {
      let c;
    }
    console.log(c); // ReferenceError: c is not defined
    // This should be unsurprising, as
    // a var declaration would also throw an Error

    // This is not an object literal, this is a standalone block.
    // The JavaScript interpreter will identify it as such based on its contents.
    {
      let d;
    }
    console.log(d); // ReferenceError: d is not defined
    ```

    ``` js
    var a;
    var a;
    // No errors thrown

    {
      let b;
      let b;
    }
    // SyntaxError: Identifier 'b' has already been declared
    ```

    ``` js
    for (var i = 0; i < 10; ++i) {}
    console.log(i); // 10

    for (let j = 0; j < 10; ++j) {}
    console.log(j); // ReferenceError: j is not defined
    ```

    1.  使用 const 的常量声明

    ``` js
    const a;  // SyntaxError: Missing initializer in const declaration

    const b = 3;
    console.log(b);  // 3
    b = 4;  // TypeError: Assignment to a constant variable
    ```

    ``` js
    if (true) {
      const a = 0;
    }
    console.log(a); // ReferenceError: a is not defined

    while (true) {
      const b = 1;
    }
    console.log(b); // ReferenceError: b is not defined

    function foo() {
      const c = 2;
    }
    console.log(c); // ReferenceError: c is not defined

    {
      const d = 3;
    }
    console.log(d); // ReferenceError: d is not defined
    ```

    ``` js
    const o1 = {};
    o1 = {}; // TypeError: Assignment to a constant variable;

    const o2 = {};
    o2.name = 'Jake';
    console.log(o2.name); // 'Jake'
    ```

    ``` js
    const o3 = Object.freeze({});
    o3.name = 'Jake';
    console.log(o3.name); // undefined
    ```

    ::: tip 一个好选择是全部使用 const 声明常量，除非需要变量时才用
    let，绝不用 var。 :::

    1.  标识符查找

    ``` js
    var color = 'blue';

    function getColor() {
      return color;
    }

    console.log(getColor()); // 'blue'
    ```

    如果本地上下文存在与全局上下文一致的变量，优先引用本地上下文的变量。

    ``` js
    var color = 'blue';

    function getColor() {
      let color = 'red';
      return color;
    }

    console.log(getColor()); // red
    ```

    使用块级作用域声明并不改变，搜索过程，但它可以给词法层级添加额外的层次。

    ``` js
    var color = 'blue';

    function getColor() {
      let color = 'red';
      {
        let color = 'green';
        return color;
      }
    }

    console.log(getColor()); // green
    ```

    ``` js
    var color = 'blue';

    function getColor() {
      let color;
      {
        color = 'green';
        return color;
      }
    }

    console.log(getColor());
    ```

    这样的结果也是 green。

### 垃圾回收

::: info The basic idea is simple: figure out which variables aren\'t
going to be used and free the memory associated with them.

The garbage collector must keep track of which variables can and can\'t
be used so it can identify likely candidates for memory reclamation. :::

如何标记未使用的变量？有两种主要方式，标记清理和引用计数。

1.  标记清理（Mark-and-Sweep）

2.  引用计数（Reference Counting）

    原理：

    ::: info The idea is that every value keeps track of how many
    references are made to it. When a variable is declared and a
    reference value is assigned, the reference count is one. If another
    variable is then assigned to the same value, the reference count is
    incremented. Likewise, if a variable with a reference to that value
    is overwritten with another value, then the reference count is
    decremented. When the reference count of a value reaches zero, there
    is no way to reach that value and it is safe to reclaim the
    associated memory. :::

    ::: info Not all objects in Internet Explorer 8 and earlier are
    native JavaScript objects. Objects in the Browser Object Model (BOM)
    and Document Object Model (DOM) are implemented as COM (Component
    Object Model) objects in C++, and COM objects use reference counting
    for garbage collection. :::

    为了切断引用计数占用的内存，需要为引用计数中变量置
    null（当函数执行结束时）。

3.  性能

4.  内存管理

    只为必备数据分配内存。

    When data is no longer necessary, it\'s best to set the value to
    null, freeing up the reference---this is called dereferencing the
    value.Local variables are dereferenced automatically when they go
    out of context.

    ``` js
    function createPerson(name) {
      let localPerson = new Object();
      localPerson.name = name;
      return localPerson;
    }

    let globalPerson = createPerson('Tianhe');
    console.log(globalPerson);
    globalPerson = null;
    console.log(globalPerson);
    ```

    Keep in mind that dereferencing a value doesn\'t automatically
    reclaim the memory associated with it. The point of dereferencing is
    to make sure the value is out of context and will be reclaimed the
    next time garbage collection occurs.

    1.  Performance Boosts with const and let Declarations
    2.  Hidden Classes and the delete Operation

    As of 2017, the most popular web browser is Google Chrome, which
    uses the V8 JavaScript engine. This engine utilizes "hidden classes"
    when compiling the interpreted JavaScript code into actual machine
    code.

    During runtime, V8 will associate hidden classes for every object
    created to keep track of the shape of its properties. Objects that
    are able to share the same hidden class will have better
    performance, and V8 will optimize for this but may not always be
    able to.

    The solution, of course, is to avoid JavaScript\'s ready-fire-aim
    dynamic property assignment and instead declare all properties
    inside the constructor.

    ``` js
    function Article(opt_author) {
      this.title = 'Hello, World'
      this.author = opt_author
    }
    let a1 = new Article()
    let a2 = new Article('Tianhe')
    console.log(a1) // { title: "Hello, World", author: undefined }
    console.log(a2) // { title: "Hello, World", author: "Tianhe" }
    ```

    Now, the two instances will behave in essentially the same way (not
    counting the return values of hasOwnProperty), and **they will also
    share a hidden class**, potentially yielding improved performance.
    Bear in mind though that using the delete keyword can generate the
    same hidden class fragmentation. This is demonstrated here:

    ``` js
    function Article() {
      this.title = 'Hello, World'
      this.author = 'opt_author'
    }
    let a1 = new Article()
    let a2 = new Article()
    delete a1.author
    console.log(a1) // { title: "Hello, World" }
    console.log(a2) // { title: "Hello, World", author: "opt_author" }
    ```

    At the end of this snippet, the two instances will no longer share a
    hidden class even though they use a unified constructor. Dynamic
    deletion of a property will yield the same effect as dynamic
    addition. Best practices dictate that unwanted properties should be
    set to null. It will allow the hidden classes to remain intact and
    shared, and it has the same effect on removing references for the
    benefit of the garbage collector.

    ``` js
    function Article() {
      this.title = 'Hello, World'
      this.author = 'opt_author'
    }
    let a1 = new Article()
    let a2 = new Article()
    a1.author = null
    console.log(a1) // { title: "Hello, World", author: null }
    console.log(a2) // { title: "Hello, World", author: "opt_author" }
    ```

    1.  内存泄露（Memory Leaks）

    写得不好的 JavaScript 可能会产生一些狡猾和隐蔽的内存泄漏。

    比较简单容易处理的一种内存泄露：错误地声明了全局变量。

    ``` js
    function Person() {
      name = 'Tianhe'
    }
    ```

    In this example, the interpreter will handle this as window.name =
    \'Jake\', and, of course, properties set on the window object will
    never be cleaned up if the window object itself is not cleaned up.

    加上 let/const 即可解决。

    间隔计时器（Interval timers）也可能导致内存泄露。

    ``` js
    let name = 'Tianhe'
    setInterval(() => {
      console.log(name)
    }, 100)
    ```

    只要计时器一直在运行，垃圾回收器就不能回收这部分内存。

    JavaScript 闭包很容易造成内存泄露。

    1.  静态分配和对象池（Static Allocation and Object Pools）

    ``` js
    function addVector(a, b) {
      let resultant = new Vector();
      resultant.x = a.x + b.x;
      resultant.y = a.y + b.y;
      return resultant;
    }
    ```

    第一次优化：

    ``` js
    function addVector(a, b, resultant) {
      resultant.x = a.x + b.x;
      resultant.y = a.y + b.y;
      return resultant;
    }
    ```

    One strategy is to use an object pool. At some point in
    initialization, you will create an object pool that manages a
    collection of recyclable objects.

### 本章小结

1.  原始类型在内存中存储为栈；引用类型在内存中存储为堆。
2.  变量中包含引用值，只是包含了一个指向对象堆的指针。
3.  typeof 决定一个值的原始类型；instanceof 决定一个引用值的类型。
4.  全局执行上下文存在于函数和块级作用域。
5.  每进入一个新的执行上下文，都会创建一个新的作用域链，来寻找变量和函数。
6.  本地上下文不仅可以接触本地函数/块级作用域，还可以接触全局上下文。
7.  但全局上下文不能接触本地上下文。
8.  脱离作用域的值会被自动标记为要移除的部分，会在垃圾回收过程中被删除。
9.  两种垃圾回收算法：标记清除（主导）和引用计数（JS 引擎不再使用）。
10. 解除变量的引用不仅可以消除循环引用，而且对垃圾回收也有帮助。

# 第 5 章 基本引用类型

## Date

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\\\_Objects/Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/Date)

### Date 方法

-   toLocaleString - 6/18/2022, 2:05:49 PM
-   toString - Sat Jun 18 2022 14:04:58 GMT+0800 (China Standard Time)

1.  格式化日期

-   toDateString - Sat Jun 18 2022
-   toTimeString - 14:06:12 GMT+0800 (China Standard Time)
-   toLocaleDateString - 6/18/2022
-   toLocaleTimeString - 2:07:29 PM
-   toUTCString - Sat, 18 Jun 2022 06:07:47 GMT

1.  Date/Time 组件方法

-   getTime - 1655532560792
-   setTime(165552) - 165552
-   getFullYear - 2022
-   getUTCFullYear - 2022
-   setFullYear(2019) - 1560838293767
-   setUTCFullYear(2019) - 1560838312052
-   getMonth - 5(6 月份）
-   getUTCMonth - 5(6 月份）
-   setMonth(5) - 1655532820046
-   setUTCMonth(5) - 1655532841823
-   getDate() - 18
-   getUTCDate() - 18
-   getDay() - 6（今天周六）
-   getUTCDay() - 6（今天周六）
-   getHours() - 14(下午两点多)
-   getUTCHours() - 6(上午六点多)
-   setHours(11) - 1655522287254
-   setUTCHours(11) - 1655551103218
-   getMinutes - 18
-   getUTCMinutes - 18
-   setMinutes(19)
-   setUTCMinutes(19)
-   getSeconds
-   getUTCSeconds
-   setSeconds
-   setUTCSeconds
-   getMilliseconds
-   getUTCMilliseconds
-   setMilliseconds
-   setUTCMilliseconds
-   getTimezoneOffset - -480

## RegExp

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\\\_Objects/RegExp/](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/RegExp/)

``` js
let expresson = /pattern/flag
```

创建正则表达式。

一些 flags：

-   g - 全部模式，找到全部匹配
-   i - 大小写不敏感
-   m - 多行
-   y - 固定模式，从 lastIndex 开始
-   u - 开启 Unicode
-   s - dotAll 模式，表示元字符匹配任何字符

一些 metacharacters：

( \[ {  \\\^ \$ \| ) \] } ? \* + .

通过构造器创建正则表达式：

``` js
let pattern = new RegExp("[bc]at", "i")
// 等价于
let pattern = /[bc]at/i
```

文本正则表达式 vs 在字符串中表示：

  文本格式                        与之对应的字符串格式
  ------------------------------- ----------------------------------
  `/\[bc\]at/`         `"\\[bc\\]at"`
  `/\.at/`             `"\\.at"`
  `/name\/age/`        `"name\\/age"`
  `/\d.\d{1,2}/`       `\\d.\\d{1,2}`
  `/\w\\hello\\123/`   `\\w\\\\hello\\\\123`

使用 RegExp 可以选择性地基于已有的正则。

``` js
const re1 = /cat/g;

const re2 = new RegExp(re1);

const re3 = new RegExp(re1, "i")
```

### RegExp 实例属性

-   dotAll
-   flags
-   global
-   hasIndices
-   ignoreCase
-   lastIndex
-   multiline
-   source
-   sticky
-   unicode

### RegExp 实例方法

-   exec
-   test
-   toString

# 第 7 章 迭代器与生成器

## 什么是迭代？

「迭代」是指，按照顺序多次执行程序，一般有明确的终止条件。ES6
规范新增了两个高级特性：迭代器和生成器。它们能帮助我们更好地实现迭代。

在 JS 中，计数循环是一种最为简单的迭代：

``` js
for (let i = 1; i <= 20; ++i) {
    console.log(i);
}
```

循环是迭代机制的基础，这是因为循环可以指定迭代次数，以及每次迭代的操作。

迭代会在一个有序集合上进行。数组是 JS 中有序集合的典型例子：

``` js
let collection = ['foo', 'bar', 'baz'];

for (let index = 0; index < collection.length; ++index) {
    console.log(collection[index])
}
```

数组的长度已知，且可以索引到每一项，所以整个数组可以通过递增索引来遍历。但是，通过这种循环执行例程并不理想，原因如下：

1.  迭代之前需要事先知道如何使用数据结构
2.  遍历顺序不是数据结构固有的

ES5 新增了 `Array.prototype.forEach()`
方法，部分解决了通过迭代的需要（但不够理想）：

``` js
let collection = ['foo', 'bar', 'baz'];

collection.forEach((item) => console.log(item));
```

该方法解决了「单独记录索引」和「通过数组对象取值」的问题，但无法标识迭代的终止时间。故而它只适用于「数组」，且回调结构笨拙。

迭代器就是为了解决「使用过多循环导致代码混乱度增加」而出现的。

## 迭代器模式

迭代器模式使某些结构被称为「可迭代对象」（iterable），因为它们实现了正式的
Iterable 接口，而且可通过迭代器 Iterator 消费（？）。

可迭代对象，具体来讲可理解为数组或集合，这样的集合类型对象。特点：「有限元素」，「无歧义的遍历顺序」。

可迭代对象不仅可以是集合类型对象，也可以是仅仅具有类似数组行为的其他数据结构，比如文章开头的计数循环。该循环生成的值是暂时的，但循环本身在执行迭代。

任何实现 Iterable 接口的数据结构都可以被实现 Iterator
接口的结构「消费」（consume）。

**迭代器（iterator）是按需创建的一次性对象。每个迭代器都会关联一个可迭代对象，而迭代器会暴露迭代其关联可迭代对象的
API。迭代器不关心可迭代对象的内部结构，只关心如何取得连续的值。**

### 可迭代协议

实现 Iterable
接口（可迭代协议）要求同时具备两种能力：「支持迭代的自我识别」和「创建实现
Iterator 接口的对象」。

实现了 Iterable 接口的内置类型：

-   字符串
-   数组
-   映射
-   集合
-   arguments 对象
-   NodeList 等 DOM 集合类型

问题：什么是工厂函数？

解答：它是[返回新对象的函数](file:///posts/js-factory-function/)。

实现可迭代协议的所有类型，都会自动兼容接收可迭代对象的任何语言特性。接收可迭代对象的原生语言特性包括：

-   for-of 循环
-   数组解构
-   扩展操作符
-   Array.form()
-   创建集合
-   创建映射
-   Promise.all() 接收由期约组成的可迭代对象
-   Promise.race() 接收由期约组成的可迭代对象
-   yield\* 操作符，在生成器中使用

这些原生语言结构会在后台调用提供的可迭代对象的这个工厂函数，从而创建一个迭代器：

``` js
let arr = ["foo", "bar", "baz"];

// for...of 循环
for (let el of arr) {
    console.log(el);
}

// 数组解构
let [a, b, c] = arr;
console.log(a, b, c);

// 扩展操作符
let arr2 = [...arr];
console.log(arr2);

// Array.from()
let arr3 = Array.from(arr);
console.log(arr3);

// Set 构造函数
let set = new Set(arr);
console.log(set);

// Map 构造函数
let pairs = arr.map((x, i) => [x,, i]);
console.log(pairs);
let map = new Map(pairs);
console.log(map);
```

# 第 18 章 动画与 Canvas 图形

主要内容：

-   使用 requestAnimationFrame
-   使用 `<canvas>`
-   绘制 2D 图形
-   使用 WebGL 绘制 3D 图形

## requestAnimationFrame

该方法 API 能够使浏览器通过最优方式确定重绘顺序。

过去使用 setInterval 和 setTimeout
实现动画，无法保证时间精度，延时参数确定的是将代码添加到浏览器的任务队列，不能确定代码的具体执行时间。

**知道何时绘制下一帧是创造平滑动画的关键。** setInterval 和 setTimeout
不够精确是第一个问题，浏览器的计时器也并不是精确统一的。

Mozilla 的 Robert O\' Callahan 创造了一个 mozRequestAnimationFrame()
的新方法，用来通知浏览器某些 JS
代码要执行动画了，这样浏览器就可以在运行某些代码后进行适当的优化。

所有浏览器都支持标准的 requestAnimationFrame()
方法，它接收一个函数参数，在重绘屏幕前调用。而在函数内部，又可以接收一个参数，用于确定动画重绘的具体时间。

`cancelAnimationFrame` 取消重绘任务

通过 requestAnimationFrame 节流（节省流量，减少加载时间）

## canvas

canvas 标签要设置 id、width、height，还有当 canvas 不被支持的说明文字。

``` example
<canvas id="canvas" width="250" height="200">Sorry, your browser don't support canvas tag yet.</canvas>
```

### 2D

在画布上绘图前，要先获得绘图上下文：

``` js
const drawing = document.getElementById('canvas')

if (drawing.getContext) {
  const context = drawing.getContext('2d')
  // context 可以简写为 ctx
  ...
}
```

在使用时，先确定绘图上下文是存在的。有些浏览器对 HTML
规范中没有的元素会创建默认 HTML 元素对象。这样表示：即使 drawing
包含一个有效的元素引用，getContext() 方法也未必存在。

toDataURL() 方法能够导出 `<canvas>` 元素上的图像。默认编码为
png 格式。

2D 上下文的坐标原点(0, 0)在 `<canvas>` 元素的左上角。

填充和描边：fillStyle、strokeStyle，这两个属性的值，可以是字符串、渐变对象、图案对象，默认值为
=#000=。字符串表示颜色时，支持 CSS
支持的所有格式：名称、十六进制代码、rgb、rgba、hsl、hsla。

绘制矩形：fillRect、strokeRect、clearRect。

绘制路径：beginPath、arc(x, y, radius, startAngle, endAngle,
counterclockwise)、arcTo(x1, y1, x2, y2, radius)、bezierCurveTo(c1x,
c1y, c2x, c2y, x, y)、lineTo(x, y)、moveTo(x, y)、quadraticCurveTo(cx,
cy, x, y)、rect(x, y, width, height)、closePath。

isPointInPath 确定指定点是否在路径上，可以在关闭路径前随时调用。

什么叫「2D 上下文的路径 API
非常可靠」？说它可靠，那么是和谁比较得出来的结论？

绘制文本：fillText、strokeText。还有三个属性：font、textAlign、textBaseLine。属性有默认值，在一次绘图中，设置一次即可。

measureText 辅助确定文本大小。

变换：rotate、scale、translate、transform、setTransform。save 和
restore，保存和恢复「绘图上下文的设置和变换」。

绘制图像：drawImage（最多 9 个参数）。

阴影：shadowColor、shadowOffsetX、shadowOffsetY、shadowBlur。

# 第 19 章 表单脚本

## HTML 和 JS 对表单的操作

  HTML                  JS
  --------------------- ------------------------------
  `<form>`   `HTMLFormElement`

因为 HTMLFormElement 类型继承自 HTMLElement，所以 HTMLElement
有的属性，它都有。除此之外，它还有一些专属的属性和方法。

  HTMLFormElement   HTML
  ----------------- ----------------
  accpetCharset     accept-charset
  action            action
  elements          
  enctype           enctype
  length            
  method            method
  name              name
  reset()           
  submit()          
  target            target

获取 `<form>` 元素的几种方式：

1.  `document.getElementById('')`
2.  `document.forms[0]` /
    `document.forms["form2"]`

表单可以同时拥有 name 和 id，两者可以不相同。

## 提交表单

三种书写方式：

``` example
<!-- 通用 -->
<input type="submit" value="Submit Form">

<!-- 自定义按钮 -->
<button type="submit">Submit Form</button>

<!-- 图片按钮 -->
<input type="image">
```

表单中出现以上的任何一种时，该表单即具备提交功能，当焦点位于当前表单的某些位置时（textarea
除外，焦点位于它时，回车会换行）回车即可提交。如果表单无提交按钮，按回车不会提交。

该种方式进行提交，在将数据发送至服务器前会触发 submit
事件，此时就可以在客户端验证数据了。阻止 submit
事件可以取消提交，详细代码：

``` js
let form = document.getElementById("myForm")

form.addEventListener("submit", (event) => {
  // 阻止表单提交
  event.preventDefault()
}
```

可以直接在 JS 中调用 submit() 进行提交，HTML 没有提交按钮是可以的：

``` js
let form = document.getElementById("myForm")

form.submit()
```

但是，这种做法需要提前进行数据验证，因为通过 submit() 提交表单并不会触发
submit 事件。

\*表单提交的一个最大的问题是可能会提交两次表单\*。如果提交表单后没有什么反应，那么用户可能会再次点击提交。会给服务器带来多余的请求并有可能让用户损失金钱（如果他在购物，点击了两次，却只获得一次的商品）。

解决这个问题的两种方式：在表单提交后，禁用提交按钮 或者 通过 onsubmit
事件处理程序取消之后的表单提交。

## 重置表单

通过重置按钮重置表单，有以下两种形式：

``` example
<!-- 通用重置按钮 -->
<input type="reset" value="Reset Form">

<!-- 自定义 -->
<button type="reset">Reset Form</button>
```

单击重置按钮触发 reset 事件。和 submit 按钮类似，也能在 JS 中通过 reset
事件取消重置。

``` js
let form = document.getElementById("myForm")

form.addEventListener("reset", (event) => {
  event.preventDefault()
}
```

和表单提交类似，重置表单也可以通过 JS 调用 reset() 完成：

``` js
let form = document.getElementById("myForm")

form.reset()
```

与 submit() 的唯一区别就是，调用 reset() 方法和点击重置按钮一样，会触发
reset 事件。

::: tip
实践中不提倡使用重置表单。这样会让用户之前输入的内容白费，最好提供一个回退的页面，可以退回前一步操作。
:::

## 表单字段

表单元素可用原生 DOM 访问，所有表单元素都是表单 elements
属性（元素集合）中包含的一个值。

-   elements 集合是一个有序列表，包含对表单中有字段的引用。
-   elements 集合中的每个字段都以它们在 HTML
    标记中出现的次序保存，可通过索引位置和 name 属性来访问。

例子：

``` js
let form = document.getElementById("myForm")

// 获取表单中第一个字段
let field1 = form.elements[0]

// 找到表单中名为 “txt” 的字段
let field2 = form.elements['txt']

// 当前表格的字段数量
form.elements.length
```

1.  表单字段的公共属性

-   disabled
-   form 只读，不理解是什么意思？
-   name
-   readOnly
-   tabIndex
-   type
-   value

以上除了 form 属性，JS 可以动态修改任何属性。

如何在第一次点击提交后禁用提交按钮？

``` js
let form = document.getElementById('myForm')

form.addEventListener('submit', (event) => {
  let target = event.target

  // 找到提交按钮
  let btn = target.elements['submit-btn']
  // 禁用提交按钮
  btn.disabled = true
})
```

上述代码在表单的 submit
事件上注册了一个事件处理程序。这种做法不能直接用在提交按钮上的 onclick
事件处理程序上，因为不同的浏览器触发事件的时机不同。

这种方式也不适合没有提交按钮的表单提交。

type 属性可用于除 `<fieldset>` 之外的任何表单字段。

`<input>` 和 `<button>` 元素中的 type
可以任意修改，但 `<select>` 元素的 type 属性是只读的。

1.  表达字段的公共方法

-   focus() 引起用户对某部分的注意
-   blur() 取消聚焦

focus 应用例子------页面加载后将焦点定位到表单的第一个字段：

``` js
window.addEventListener("load", (event) => {
  document.forms[0].elements[0].focus()
})
```

但是，如果第一个字段被隐藏了（type 为 hidden 的 input 元素 / CSS 设置
display 或 visibility）代码就会报错。

HTML5 为表单字段增加了 autofocus
属性，支持该属性的浏览器，加载页面后会自动聚焦于该字段。

修改上述代码以适应有 autofocus 的情况：

``` js
window.addEventListener("load", (event) => {
  let element = document.forms[0].elements[0]

  if (element.autofocus !== true) {
    element.focus()
    console.log('JS focus')
  }
})
```

1.  表单字段的公共事件

-   鼠标
-   键盘
-   mutation
-   HTML
-   blur
-   change 可用于验证输入内容
-   focus

## 文本框编程

HTML 中的两种文本框表示方式：单行 `<input>` 多行
=\<textarea\>=。

input 省略 type 默认 type 为 text。

示例------一个可显示 25 个字符、但最多允许显示 50 个字符的文本框：

``` example
<input type="text" size="25" maxLength="50" value="初始值">
```

textarea 示例------一个高 25 字符、宽 5 字符的多行文本框：

``` example
<textarea rows="25" cols="5">初始值</textarea>
```

两类文本框的值都可以通过 value 属性获取。\*在处理文本框值时不要使用 DOM
方法\*（为什么？）。

### 选择文本

select() 方法用于选中文本框中的全部文本。

文本框有默认值时，聚焦于文本框会全选文字，尤其是默认值：

``` js
let textbox = document.forms[0].elements["textbox1"]
textbox.addEventListener("focus", (event) => {
  event.target.select()
})
```

1.  select 事件

2.  取得选中文本

``` js
function getSelectedtext(textbox) {
  return textbox.value.substring(textbox.selectionStart, textbox.selectionEnd)
}
```

1.  部分选中文本

``` js
textbox.value = "Hello World!"

textbox.setSelectionRange(0, textbox.value.length)
```

### 输入过滤

怎样在一个输入框中只输入字符（无数字），怎样在输入框中输入非字符纯数字？

``` js
textbox.addEventListener("input", (event) => {
  if (/\d/.test(String.fromCharCode(event.charCode))) {
    event.preventDefault()
  }
})
```

上述代码暂时不起作用。

1.  屏蔽字符
2.  处理剪切板

### 自动切换

在常用的数据格式上输入时，如果一条数据输入完毕，自动将光标移动到下一条待输入的信息框。

一个输入美国号码的例子：

``` example
<form action="">
  <input type="text" id="txtTel1" maxlength="3">
  <input type="text" id="txtTel2" maxlength="3">
  <input type="text" id="txtTel3" maxlength="4">
</form>
```

``` js
function tabForward(event) {
  let target = event.target;
  if (target.value.length == target.maxLength) {
    let form = target.form;
    for (let i = 0, len = form.elements.length; i < len; i++) {
      if (form.elements[i] == target) {
        if (form.elements[i + 1]) {
          form.elements[i + 1].focus();
        }
        return;
      }
    }
  }
}

let inputIds = ["txtTel1", "txtTel2", "txtTel3"];
for (let id of inputIds) {
  let textbox = document.getElementById(id);
  textbox.addEventListener("keyup", tabForward);
}

let textbox1 = document.getElementById("txtTel1");
let textbox2 = document.getElementById("txtTel2");
let textbox3 = document.getElementById("txtTel3");
```

```{=html}
<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/tianheg/embed/zYWxEPo?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
```
See the Pen Untitled by tianheg (@tianheg) on CodePen.

```{=html}
</iframe>
```
代码没有考虑隐藏字段。

### HTML5 约束验证 API

无需 JS 即可进行一些基本验证。

1.  必填字段 `required`
2.  有些输入类型自带验证，如 email、url
3.  有些新支持的输入类型，还处在变化改进之中

对当前数值进行增减：stepUp、stepDown。

1.  输入内容的正则匹配

不阻止输入不符合条件的字符。

1.  检测有效性

checkValidity() 方法和 validity
属性。前者只能检测是否有效，后者可以提供更多的信息。

1.  禁用验证

## 选择框编程

选择框是使用 `<select>` 和 `<option>` 创建的。

HTMLSelectElement 类型除去表单字段的公共能力外，又提供了以下属性和方法：

-   add(newOption, relOption)
-   multiple
-   options
-   remove(index)
-   selectedIndex
-   size

选择框的 type 属性可能是 "select-one" 或 "select-multiple"。

每个 option 元素在 DOM 中都由一个 HTMLOptionElement
对象表示；HTMLOptionElement 类型为方便数据存取添加了以下属性：

-   index
-   label
-   selected
-   text
-   value

通过这些属性比一般的 DOM 方法能够更高效地获取到对应的值。

```{=html}
<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/tianheg/embed/eYMmeEe?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
```
See the Pen Untitled by tianheg (@tianheg) on CodePen.

```{=html}
</iframe>
```
change 事件在选择框和其他表单字段的不同：

在选择框中，在选中选项时，会立即触发表单事件；在其他表单字段中，会在自己的值修改后触发，然后字段失去焦点。

当 HTML 中没有指定 value 值时，JS 会选择 text 值作为 value 值。

### 选项处理

选择框提供了 selectedIndex 属性来获取当前的选择信息。

```{=html}
<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/tianheg/embed/jOzEevO?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
```
See the Pen Untitled by tianheg (@tianheg) on CodePen.

```{=html}
</iframe>
```
### 添加选项

```{=html}
<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/tianheg/embed/OJvPBKY?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
```
See the Pen Untitled by tianheg (@tianheg) on CodePen.

```{=html}
</iframe>
```
以上有两种方式添加选项，一种是创建 option 元素，另一种是使用 Option
构造函数。选项的值不是必需的，只有文本也是可以的。

另一种添加新选项的方法：add()。

``` js
let newOption2 = new Option("Option2 text", "Option2 value");
selectbox.add(newOption2, null); // null 换成 undefined 也可以
```

### 移除选项

三种方法：

```js
selectbox.removeChild(selectbox.options[0])

selectbox.remove[0]

selectbox.options[0] = null
```

### 移动和重排选项

```html
<iframe height="300" style="width: 100%;" scrolling="no" title="移动和重排" src="https://codepen.io/tianheg/embed/QWmwJGN?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
```
See the Pen 移动和重排 by tianheg (@tianheg) on CodePen.

```html
</iframe>
```
## 表单序列化 form serialization

在点击提交时，服务器收到的数据是由什么决定的？

```{=html}
<iframe height="300" style="width: 100%;" scrolling="no" title="表单序列化" src="https://codepen.io/tianheg/embed/BaryGGz?default-tab=js" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
```
See the Pen 表单序列化 by tianheg (@tianheg) on CodePen.

```{=html}
</iframe>
```
## 富文本编辑

富文本编辑，就是「所见即所得」（WYSIWYG，What You See Is What You Get）

```{=html}
<iframe height="300" style="width: 100%;" scrolling="no" title="富文本编辑" src="https://codepen.io/tianheg/embed/NWYPEod?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
```
See the Pen 富文本编辑 by tianheg (@tianheg) on CodePen.

```{=html}
</iframe>
```
### contenteditable

另一种比较方便的富文本交互方式。对任意元素指定一个 contenteditable
属性。见上一个 CodePen 演示。

contenteditable 还可以用在 html 标签上，将整个页面变成可编辑的区域。

### 与富文本交互

### 选择富文本内容

getSelection()

### 通过表单提交富文本

