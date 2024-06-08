# Eloquent JavaScript 4th(2024) by Marijn Haverbeke

https://eloquentjavascript.net/

## "eloquent"

形容词，意思：能说会道的，用在这里指：JS的表现力丰富，能够用于多种任务。

## Introduction

> We think we are creating the system for our own purposes. We believe we are making it in our own image... But the computer is not really like us. It is a projection of a very slim part of ourselves: that portion devoted to logic, order, ruls, and clarity.

“我们”以自己的形象制造计算机，但计算机和我们相比，只是我们性格中，特定于逻辑、秩序、规则和明晰的那一部分。

编程的本质是无聊且乏味的，但如果能够用这些乏味的东西与计算机沟通，那么将是很大的助力。

编程借助编程语言来实现，而编程语言的构造和人的语言是类似的。

编程是困难的。基础的规则是简单且清晰的，但建立在这些规则之上的程序往往会变得足够复杂，从而引入自己的规则和复杂性。写到这里，我想到了 React.js/Vue.js 之于 JS。

学习这本书遇到的不会的地方很正常，但不要让困难阻碍自己，认为自己不适合学习。要做的只是坚持下去，休息一会儿，对不理解的地方反复停留思考。确保自己理解范例程序练习。

学习是困难的，但所有你学到的都成为了你的一部分，你会发现往深处学习会变得更容易。

> The skill of programming is the skill of building programs that don’t confuse the programmer.

> The best programs are those that manage to do something interesting while still being easy to understand.

因为初学者容易写出不那么容易理解的程序，所以当他们变得有经验以后，会开始规定一些最佳实践，这样以后所编写的程序都在“最佳实践”下进行。

但是这样做，让初学者无法犯错，不能深刻理解错误的含义。

对好的程序的认识，是从实践中得来的，而不是一系列规则。

## Values, Types, and Operators

遇到这三个词，关于 JS 的，想到：定义变量的 let/const、七种基本类型（字符串、数组、对象、Set、Map、数字）、数值运算操作符、或与非逻辑操作符。

### Values

在计算机中，有两个比特海：内存和硬盘。为了能够把比特抽象成人类更容易理解的概念，值（Values）的概念出现了，它表示一小块比特。

值按种类划分，在 JS 语境下，值可以是数字、字符串、数组和函数等。

我们在使用值的时候，需要为其命名，这样用起来更方便。这个名字被称为变量，值存储在内存中，而变量指向值在内存中的地址。

因为 JS 的垃圾回收机制，当一个变量不再使用时，与之相关联的值会自动被释放，以便下次声明时使用。

### Numbers

JS 在数值上可以表示 2^64 个不同的数字。JS 也可以用来表示负数。真正困扰的是小数（fractional numbers），因为有些位数必须存储小数点的位置，这占用了数字的位数。即使是这样，能够表示的数字也是相当大的。

对于很大或很小的数值，可以用科学记数法。

```js
console.log(2.998e80)
// 2.998e+80
```

在进行数值计算时，整数之间的计算一般可视为精确，但涉及到小数的计算只能视为大约数。

```js
100e120 + 4 * 1
// 1e+122
```

见上述计算，后面的 4 被省掉了，因为前面的数值很大。

算术操作符：`+ - * / %`。`%` 有时被称为 modulo。

特殊数字：Infinity -Infinity NaN

```js
typeof NaN; // "number"
```

### Strings

JS 支持 Unicode 标准，该标准把全世界所使用的绝大部分语言都包括进去，并为每个字符匹配一串数字，这样该字符就能够存储在计算机内存中。

JS 使用 16 比特表示每个字符，这样最多可支持 2^16 个字符，但 Unicode 定义的字符比这个量级要多得多。所以，有些字符，比如 emoji 表情，每个表情在 JS 字符串中占据两字符位。

算术操作符除了 + 其他三个都不能用于字符串，+ 用于字符串拼接。

### Unary operators 一元

```js
typeof 4.3
typeof "acb"
```

typeof 只接受一个参数，之前介绍的运算符需要两个，其中最特殊的是减法运算符，它可以接受一个参数。

```js
- (10 - 8)
```

## Boolean values

使用 <, > 对数字、字符串进行数值比较。

还有 <=, >=, ==, !=。

```js
'abc' > 'as' // false
'abc' < 'as' // true
```

在比较字符串大小时，顺序是从左到右，比较 unicode 大小。

a 比 A 大，也就是说，当字母一致时，小写的数值和大写的相比，是更大的。

当涉及到 NaN 时，这是很特殊的。

```js
NaN == NaN // false
```

因为 NaN 表达的本义就是无意义计算的结果，那么自然不与其他任何内容相等，即使是它自己也不行。

使用 &&, ||, ! 对内容进行逻辑比较。

下面例子中的 &, | 是位运算符（bitwise operator）：

```js
true && false // false
true || false // true
true & false // 0
true | false // 1
```

这样的一个表达式：

```js
1 + 1 == 2 && 10 * 10 > 50
```

## Empty values

两个表达“空值”含义的保留字：null, undefined。在大多数情况下，可以将这两种视为同等存在。

## Automatic type conversion

```js
console.log(4 * null)
console.log("2" - 1)
console.log("2" + 1)
console.log("five" * 3)
console.log(false == 0)
```

```js
null == undefined
null === undefined
null == 0
```

在测试变量时，可以与 null 进行比较，true 就是没定义，false 就是有值。

禁止自动类型转换的操作符：===, !==。
