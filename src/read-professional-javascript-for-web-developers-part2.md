# read-professional-javascript-for-web-developers-part2
\## 第4章 变量、作用域与内存（要多次阅读，很多地方都不理解）

-   处理变量中的原始值和引用值
-   理解执行上下文
-   理解垃圾回收

\### 原始值与引用值

当值赋给变量时，JavaScript 引擎必须决定该值是原始值还是引用值。

六个原始数据类型（Undefined、Null、Boolean、Number、String、Symbol）已经在上一章讨论过。

引用值是存储在内存中的对象。与其他语言不同，JavaScript
不允许直接接触内存位置，所以对对象内存空间的直接操作是不被允许的。

当操作对象时，实际操作的是对对象的引用，而不是对象本体。由此产生了「引用」的概念。

::: info
在其他一些语言中，字符串由对象表示，因此被认为是引用类型。ECMAScript
打破了这个传统。 :::

\#### 动态属性

当处理引用值时，可以任意增加、改变、删除属性和方法。

\`\`\`js let person = new Object(); person.name = \'Tianhe Gao\';
console.log(person.name); \`\`\`

新属性 name 是一直可以访问的，知道对象 person 被销毁，或者 name
属性被移除。

\`\`\`js let name = \'Tianhe Gao\'; name.age = 22;
console.log(name.age); // TypeError: can\'t assign to property \"age\"
on \"Tianhe Gao\": not an object \`\`\`

给原始类型进行这样操作，就会报错。

实例化原始类型只能通过文本定义（\`let name = \"Tianhe
Gao\"\`），如果使用 new
关键字创建原始类型，得到的是一个对象，而不是字符串。

\`\`\`js let name1 = \'Tianhe\'; let name2 = new String(\'Gao\'); //
name1.age = 21 如果不注释掉，会无法执行下去 name2.age = 22;
console.log(name1.age); console.log(name2.age); // 22 console.log(typeof
name1); // string console.log(typeof name2); // object \`\`\`

\#### 复制值

原始值在传递时是完全复制的。

\`\`\`js let num1 = 21; let num2 = num1; \`\`\`

以上代码，当 num1 把自己的值赋给 num2
时，是做了一份拷贝后，把拷贝值赋给了 num2，对 num1
本身的值无影响。如下图所示。

\![展示原始值的复制原理\](img/copying-values-0.jpg)

而对于引用值来讲，赋值只是将新变量指向了旧变量所指向的堆（Heap）中的对象，旧变量的变化同样反映在新变量上。

\`\`\`js let obj1 = new Object(); let obj2 = obj1; obj1.name = \'Tianhe
Gao\'; console.log(obj2.name); // Tianhe Gao \`\`\`

\![展示引用值的复制原理\](img/copying-values-1.jpg)

\#### 传递参数

当参数由值传递，值被拷贝进本地变量（命名参数，即 \`arguments\`
对象）；当参数由引用传递，参数值在内存中的位置被存储在本地变量中，这表示本地变量被映射到函数外部。（这在
ECMAScript 中无法实现）。例子：

\`\`\`js function addTen(num) { num += 10; return num; }

let count = 20; let result = addTen(count); console.log(count); // 20 -
no change console.log(result); // 30 \`\`\`

这是原始值的情况。

\`\`\`js function setName(obj) { obj.name = \'Nicholas\'; }

let person = new Object(); setName(person); console.log(person.name); //
\"Nicholas\" \`\`\`

这是引用值的情况。person 和 obj 指向同一个对象。

::: warning The result is that obj is accessing an object by reference,
even though it was passed into the function by value. When the name
property is set on obj inside the function, this change is reflected
outside the function, because the object that it points to exists
globally on the heap. Many developers incorrectly assume that when a
local change to an object is reflected globally, that means an argument
was passed by reference. :::

这段话什么意思？

紧接着一个例子：

\`\`\`js function setName(obj) { obj.name = \'Tianhe\'; obj = new
Object(); obj.name = \'Gao\'; }

let person = new Object(); setName(person); console.log(person.name); //
\"Tianhe\" \`\`\`

obj
在函数内部重新赋值。它变成了本地对象的指针。当函数执行完毕，本地对象即被销毁。

::: info If person were passed by reference, then person would
automatically be changed to point to the object whose name is \"Greg\".
However, when person .name is accessed again, its value is \"Nicholas\",
indicating that the original reference remained intact even though the
argument's value changed inside the function. :::

\> Think of function arguments in ECMAScript as nothing more than local
variables.

\#### 确定类型

\`typeof\` 是一个不错的工具，用来判断一个变量是字符串、布尔型、数字还是
undefined。它无法区分对象和 null。

\`\`\`js let s = \'Nicholas\'; let b = true; let i = 22; let u; let n =
null; let o = new Object();

console.log(typeof s); // string console.log(typeof i); // number
console.log(typeof b); // boolean console.log(typeof u); // undefined
console.log(typeof n); // object console.log(typeof o); // object \`\`\`

为了区分是哪种对象，ECMAScript 有
\[\`instanceof\`\](<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof>)。

\`\`\`js result = variable instanceof constructor; \`\`\`

\> The ****\`instanceof\` operator**** tests to see if the \`prototype\`
property of a constructor appears anywhere in the prototype chain of an
object. The return value is a boolean value.

根据定义，所有的引用值都是 Object 的实例。

\`\`\`js console.log(person instanceof Object); // is the variable
person an Object? console.log(colors instanceof Array); // is the
variable colors an Array? console.log(pattern instanceof RegExp); // is
the variable pattern a RegExp? \`\`\`

\### 执行上下文和作用域

::: warning The concept of execution context, referred to as context for
simplicity, is of the utmost importance in JavaScript. :::

全局上下文是最外层的上下文。根据实现环境有多个。浏览器中的
window。所有由 var 定义的全局变量和函数都是 window
对象的属性和方法。使用 \`let\` 和 \`const\`
的顶级不会定义在全局上下文中，但在作用域链解析上效果是一样的。上下文在全部代码执行完毕后会被销毁，包括定义的变量和函数（全局上下文在应用退出后才会被销毁。）

每次函数调用都会形成自己的上下文。当代码执行流进入一个函数时，函数的上下文被推入上下文栈。执行完函数，上下文栈弹出。返回控制之前的上下文。

当上下文中的某段代码执行时，会创建变量对象的一个作用域链。这个作用域链决定了各级上下文中的代码在访问变量和函数时的顺序。代码正在执行的上下文的变量对象始终处于作用域链的最前端。如果上下文是函数，则其活动对象用作变量对象。活动对象最初只有一个定义变量：arguments。（全局上下文中没有这个变量。）作用域链中的下一个变量对象来自包含上下文，再下一个对象来自再下一个包含上下文（containing
context）。以此类推，直至全局上下文；全局上下文的变量对象始终是作用域链的最后一个变量对象。

\`\`\`js var color = \'blue\';

function changeColor() { if (color `=`{.verbatim} \'blue\') { color =
\'red\'; return color; } else { color = \'blue\'; } }

console.log(changeColor()); // red \`\`\`

关于作用域链的简单例子。

\`\`\`js var color = \'blue\';

function changeColor() { let anotherColor = \'red\';

function swapColors() { let tempColor = anotherColor; anotherColor =
color; color = tempColor;

// color, anotherColor, and tempColor are all accessible here }

// color and anotherColor are accessible here, but not tempColor
swapColors(); }

// only color is accessible here changeColor(); \`\`\`

\![上述代码片段的执行上下文、作用域链示意\](img/scope-chain-0.jpg)

::: info Function arguments are considered to be variables and follow
the same access rules as any other variable in the execution context.
:::

\#### 作用域链增强

主要有两种执行上下文：全局和函数。

有方式能够增强作用域链上下文。某些语句在执行时，会导致临时在作用域前端添加一个上下文，代码执行后上下文会被删除。以下是两种情况：

1.  try/catch 语句的 catch 块
2.  with 语句

在这两种情况下，都会在作用域前端添加一个变量对象。对 with
语句来说，会向作用域链前端添加指定的对象；对于 catch
语句而言，则会创建一个新的变量对象，这个变量对象会包含要抛出的错误对象的声明。

\#### 变量声明

1.  使用 var 的函数作用域声明

\`\`\`js function add(num1, num2) { var sum = num1 + num2; return sum; }

let result = add(21, 22); console.log(result); // 43 console.log(sum);
// ReferenceError: sum is not defined \`\`\`

\`\`\`js function add(num1, num2) { sum = num1 + num2; return sum; }

let result = add(21, 22); console.log(result); // 43 console.log(sum);
// 43 \`\`\`

如果函数内部的变量，未经声明就初始化，变量会被自动加到全局上下文。如第二个例子。

::: tip 变量一定要先声明，再初始化赋值。 :::

\`\`\`js var name = \'Jake\';

// This is equivalent to:

name = \'Jake\'; var name; \`\`\`

\`\`\`js function fn1() { var name = \'Jake\'; }

// This is equivalent to: function fn2() { var name; name = \'Jake\'; }
\`\`\`

1.  使用 let 的块级作用域声明

let 声明被限制在块级作用域（\`{}\`）。

\`\`\`js if (true) { let a; } console.log(a); // ReferenceError: a is
not defined

while (true) { let b; } console.log(b); // ReferenceError: b is not
defined

function foo() { let c; } console.log(c); // ReferenceError: c is not
defined // This should be unsurprising, as // a var declaration would
also throw an Error

// This is not an object literal, this is a standalone block. // The
JavaScript interpreter will identify it as such based on its contents. {
let d; } console.log(d); // ReferenceError: d is not defined \`\`\`

\`\`\`js var a; var a; // No errors thrown

{ let b; let b; } // SyntaxError: Identifier \'b\' has already been
declared \`\`\`

\`\`\`js for (var i = 0; i \< 10; ++i) {} console.log(i); // 10

for (let j = 0; j \< 10; ++j) {} console.log(j); // ReferenceError: j is
not defined \`\`\`

1.  使用 const 的常量声明

\`\`\`js const a; // SyntaxError: Missing initializer in const
declaration

const b = 3; console.log(b); // 3 b = 4; // TypeError: Assignment to a
constant variable \`\`\`

\`\`\`js if (true) { const a = 0; } console.log(a); // ReferenceError: a
is not defined

while (true) { const b = 1; } console.log(b); // ReferenceError: b is
not defined

function foo() { const c = 2; } console.log(c); // ReferenceError: c is
not defined

{ const d = 3; } console.log(d); // ReferenceError: d is not defined
\`\`\`

\`\`\`js const o1 = {}; o1 = {}; // TypeError: Assignment to a constant
variable;

const o2 = {}; o2.name = \'Jake\'; console.log(o2.name); // \'Jake\'
\`\`\`

\`\`\`js const o3 = Object.freeze({}); o3.name = \'Jake\';
console.log(o3.name); // undefined \`\`\`

::: tip 一个好选择是全部使用 const 声明常量，除非需要变量时才用
let，绝不用 var。 :::

1.  标识符查找

\`\`\`js var color = \'blue\';

function getColor() { return color; }

console.log(getColor()); // \'blue\' \`\`\`

如果本地上下文存在与全局上下文一致的变量，优先引用本地上下文的变量。

\`\`\`js var color = \'blue\';

function getColor() { let color = \'red\'; return color; }

console.log(getColor()); // red \`\`\`

使用块级作用域声明并不改变，搜索过程，但它可以给词法层级添加额外的层次。

\`\`\`js var color = \'blue\';

function getColor() { let color = \'red\'; { let color = \'green\';
return color; } }

console.log(getColor()); // green \`\`\`

\`\`\`js var color = \'blue\';

function getColor() { let color; { color = \'green\'; return color; } }

console.log(getColor()); \`\`\`

这样的结果也是 green。

\### 垃圾回收

::: info The basic idea is simple: figure out which variables aren't
going to be used and free the memory associated with them.

The garbage collector must keep track of which variables can and can't
be used so it can identify likely candidates for memory reclamation. :::

如何标记未使用的变量？有两种主要方式，标记清理和引用计数。

\#### 标记清理（Mark-and-Sweep）

\#### 引用计数（Reference Counting）

原理：

::: info The idea is that every value keeps track of how many references
are made to it. When a variable is declared and a reference value is
assigned, the reference count is one. If another variable is then
assigned to the same value, the reference count is incremented.
Likewise, if a variable with a reference to that value is overwritten
with another value, then the reference count is decremented. When the
reference count of a value reaches zero, there is no way to reach that
value and it is safe to reclaim the associated memory. :::

::: info Not all objects in Internet Explorer 8 and earlier are native
JavaScript objects. Objects in the Browser Object Model (BOM) and
Document Object Model (DOM) are implemented as COM (Component Object
Model) objects in C++, and COM objects use reference counting for
garbage collection. :::

为了切断引用计数占用的内存，需要为引用计数中变量置
null（当函数执行结束时）。

\#### 性能

\#### 内存管理

只为必备数据分配内存。

When data is no longer necessary, it's best to set the value to null,
freeing up the reference---this is called dereferencing the value.Local
variables are dereferenced automatically when they go out of context.

\`\`\`js function createPerson(name) { let localPerson = new Object();
localPerson.name = name; return localPerson; }

let globalPerson = createPerson(\'Tianhe\'); console.log(globalPerson);
globalPerson = null; console.log(globalPerson); \`\`\`

Keep in mind that dereferencing a value doesn't automatically reclaim
the memory associated with it. The point of dereferencing is to make
sure the value is out of context and will be reclaimed the next time
garbage collection occurs.

1.  Performance Boosts with const and let Declarations
2.  Hidden Classes and the delete Operation

As of 2017, the most popular web browser is Google Chrome, which uses
the V8 JavaScript engine. This engine utilizes "hidden classes" when
compiling the interpreted JavaScript code into actual machine code.

During runtime, V8 will associate hidden classes for every object
created to keep track of the shape of its properties. Objects that are
able to share the same hidden class will have better performance, and V8
will optimize for this but may not always be able to.

The solution, of course, is to avoid JavaScript's ready-fire-aim dynamic
property assignment and instead declare all properties inside the
constructor.

\`\`\`js function Article(opt~author~) { this.title = \'Hello, World\'
this.author = opt~author~ } let a1 = new Article() let a2 = new
Article(\'Tianhe\') console.log(a1) // { title: \"Hello, World\",
author: undefined } console.log(a2) // { title: \"Hello, World\",
author: \"Tianhe\" } \`\`\`

Now, the two instances will behave in essentially the same way (not
counting the return values of hasOwnProperty), and ****they will also
share a hidden class****, potentially yielding improved performance.
Bear in mind though that using the delete keyword can generate the same
hidden class fragmentation. This is demonstrated here:

\`\`\`js function Article() { this.title = \'Hello, World\' this.author
= \'opt~author~\' } let a1 = new Article() let a2 = new Article() delete
a1.author console.log(a1) // { title: \"Hello, World\" } console.log(a2)
// { title: \"Hello, World\", author: \"opt~author~\" } \`\`\`

At the end of this snippet, the two instances will no longer share a
hidden class even though they use a unified constructor. Dynamic
deletion of a property will yield the same effect as dynamic addition.
Best practices dictate that unwanted properties should be set to null.
It will allow the hidden classes to remain intact and shared, and it has
the same effect on removing references for the benefit of the garbage
collector.

\`\`\`js function Article() { this.title = \'Hello, World\' this.author
= \'opt~author~\' } let a1 = new Article() let a2 = new Article()
a1.author = null console.log(a1) // { title: \"Hello, World\", author:
null } console.log(a2) // { title: \"Hello, World\", author:
\"opt~author~\" } \`\`\`

1.  内存泄露（Memory Leaks）

写得不好的 JavaScript 可能会产生一些狡猾和隐蔽的内存泄漏。

比较简单容易处理的一种内存泄露：错误地声明了全局变量。

\`\`\`js function Person() { name = \'Tianhe\' } \`\`\`

In this example, the interpreter will handle this as window.name =
\'Jake\', and, of course, properties set on the window object will never
be cleaned up if the window object itself is not cleaned up.

加上 let/const 即可解决。

间隔计时器（Interval timers）也可能导致内存泄露。

\`\`\`js let name = \'Tianhe\' setInterval(() =\> { console.log(name) },
100) \`\`\`

只要计时器一直在运行，垃圾回收器就不能回收这部分内存。

JavaScript 闭包很容易造成内存泄露。

1.  静态分配和对象池（Static Allocation and Object Pools）

\`\`\`js function addVector(a, b) { let resultant = new Vector();
resultant.x = a.x + b.x; resultant.y = a.y + b.y; return resultant; }
\`\`\`

第一次优化：

\`\`\`js function addVector(a, b, resultant) { resultant.x = a.x + b.x;
resultant.y = a.y + b.y; return resultant; } \`\`\`

One strategy is to use an object pool. At some point in initialization,
you will create an object pool that manages a collection of recyclable
objects.

\### 本章小结

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
