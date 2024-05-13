# read-dom-scripting-v2
\## 介绍 JS

DOM 用于对文档内容进行抽象。

\## JS 语法

程序设计语言：编译型、解释型。

每行代码即是一条语句。可以注释掉暂时不需要的代码。

不断变化的事物，用一个专有名词------变量，定义。变量命名规则：不包含空格、标点（除
\$）；允许包含字母、数字、美元符号和下划线（但首字母必须是非数字）。变量的作用域（scope）：全局变量、局部变量。

修改前

\`\`\`js function square(num) { total = num \* num return total } var
total = 50 var number = square(20) alert(total) \`\`\`

修改后

\`\`\`js function square(num) { var total = num \* num return total }
var total = 50 var number = square(20) alert(total) \`\`\`

数据类型：字符串、数值、布尔值、数组（关联数组）、对象。

操作：算术操作符。

条件语句：if、if-else、比较操作符、逻辑操作符。

循环语句：while、do-while、for

函数：参数

对象（object）：属性（property）、方法（method）
