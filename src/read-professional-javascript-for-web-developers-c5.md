# read-professional-javascript-for-web-developers-c5
\## Date

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date>

\### Date 方法

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

\## RegExp

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/>

\`\`\`js let expresson = /pattern/flag \`\`\`

创建正则表达式。

一些 flags：

-   g - 全部模式，找到全部匹配
-   i - 大小写不敏感
-   m - 多行
-   y - 固定模式，从 lastIndex 开始
-   u - 开启 Unicode
-   s - dotAll 模式，表示元字符匹配任何字符

一些 metacharacters：

( \[ { \\ \^ \$ \| ) \] } ? \* + .

通过构造器创建正则表达式：

\`\`\`js let pattern = new RegExp(\"\[bc\]at\", \"i\") // 等价于 let
pattern = /\[bc\]at/i \`\`\`

文本正则表达式 vs 在字符串中表示：

  --------------------------------------------- -----------------------------------------------------
  文本格式                                      与之对应的字符串格式
  ---                                           ---
  \`/$$bc$$at/\`                                \`\"\\$$bc\$$at\"\`
  \`/\\.at/\`                                   \`\"\\\\.at\"\`
  \`/name\\/age/\`                              \`\"name\\\\/age\"\`
  \`/.̣1̣,2/\`                                    \`\\.̣\\1̣,2\`
  \`/`\w`{=latex}\\`\hello`{=latex}\\\\123/\`   \`\\`\w`{=latex}\\\\\\`\hello`{=latex}\\\\\\\\123\`
  --------------------------------------------- -----------------------------------------------------

使用 RegExp 可以选择性地基于已有的正则。

\`\`\`js const re1 = /cat/g;

const re2 = new RegExp(re1);

const re3 = new RegExp(re1, \"i\") \`\`\`

\### RegExp 实例属性

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

\### RegExp 实例方法

-   exec
-   test
-   toString
