# read-professional-javascript-for-web-developers-c19

## HTML 和 JS 对表单的操作

  -------------- ---------------------
  HTML           JS
  ---            ---
  \`\<form\>\`   \`HTMLFormElement\`
  -------------- ---------------------

因为 HTMLFormElement 类型继承自 HTMLElement，所以 HTMLElement
有的属性，它都有。除此之外，它还有一些专属的属性和方法。

  ----------------- ----------------
  HTMLFormElement   HTML
  ---               ---
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
  ----------------- ----------------

获取 \`\<form\>\` 元素的几种方式：

1.  \`document.getElementById(\'\')\`
2.  \`document.forms\[0\]\` / \`document.forms\[\"form2\"\]\`

表单可以同时拥有 name 和 id，两者可以不相同。

\## 提交表单

三种书写方式：

\`\`\`html \<!-- 通用 --\> \<input type=\"submit\" value=\"Submit
Form\"\>

\<!-- 自定义按钮 --\> \<button type=\"submit\"\>Submit Form\</button\>

\<!-- 图片按钮 --\> \<input type=\"image\"\> \`\`\`

表单中出现以上的任何一种时，该表单即具备提交功能，当焦点位于当前表单的某些位置时（textarea
除外，焦点位于它时，回车会换行）回车即可提交。如果表单无提交按钮，按回车不会提交。

该种方式进行提交，在将数据发送至服务器前会触发 submit
事件，此时就可以在客户端验证数据了。阻止 submit
事件可以取消提交，详细代码：

\`\`\`js let form = document.getElementById(\"myForm\")

form.addEventListener(\"submit\", (event) =\> { // 阻止表单提交
event.preventDefault() } \`\`\`

可以直接在 JS 中调用 submit() 进行提交，HTML 没有提交按钮是可以的：

\`\`\`js let form = document.getElementById(\"myForm\")

form.submit() \`\`\`

但是，这种做法需要提前进行数据验证，因为通过 submit() 提交表单并不会触发
submit 事件。

\*\*表单提交的一个最大的问题是可能会提交两次表单\*\*。如果提交表单后没有什么反应，那么用户可能会再次点击提交。会给服务器带来多余的请求并有可能让用户损失金钱（如果他在购物，点击了两次，却只获得一次的商品）。

解决这个问题的两种方式：在表单提交后，禁用提交按钮 或者 通过 onsubmit
事件处理程序取消之后的表单提交。

\## 重置表单

通过重置按钮重置表单，有以下两种形式：

\`\`\`html \<!-- 通用重置按钮 --\> \<input type=\"reset\" value=\"Reset
Form\"\>

\<!-- 自定义 --\> \<button type=\"reset\"\>Reset Form\</button\> \`\`\`

单击重置按钮触发 reset 事件。和 submit 按钮类似，也能在 JS 中通过 reset
事件取消重置。

\`\`\`js let form = document.getElementById(\"myForm\")

form.addEventListener(\"reset\", (event) =\> { event.preventDefault() }
\`\`\`

和表单提交类似，重置表单也可以通过 JS 调用 reset() 完成：

\`\`\`js let form = document.getElementById(\"myForm\")

form.reset() \`\`\`

与 submit() 的唯一区别就是，调用 reset() 方法和点击重置按钮一样，会触发
reset 事件。

::: tip
实践中不提倡使用重置表单。这样会让用户之前输入的内容白费，最好提供一个回退的页面，可以退回前一步操作。
:::

\## 表单字段

表单元素可用原生 DOM 访问，所有表单元素都是表单 elements
属性（元素集合）中包含的一个值。

-   elements 集合是一个有序列表，包含对表单中有字段的引用。
-   elements 集合中的每个字段都以它们在 HTML
    标记中出现的次序保存，可通过索引位置和 name 属性来访问。

例子：

\`\`\`js let form = document.getElementById(\"myForm\")

// 获取表单中第一个字段 let field1 = form.elements\[0\]

// 找到表单中名为 "txt" 的字段 let field2 = form.elements\[\'txt\'\]

// 当前表格的字段数量 form.elements.length \`\`\`

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

\`\`\`js let form = document.getElementById(\'myForm\')

form.addEventListener(\'submit\', (event) =\> { let target =
event.target

// 找到提交按钮 let btn = target.elements\[\'submit-btn\'\] //
禁用提交按钮 btn.disabled = true }) \`\`\`

上述代码在表单的 submit
事件上注册了一个事件处理程序。这种做法不能直接用在提交按钮上的 onclick
事件处理程序上，因为不同的浏览器触发事件的时机不同。

这种方式也不适合没有提交按钮的表单提交。

type 属性可用于除 \`\<fieldset\>\` 之外的任何表单字段。

\`\<input\>\` 和 \`\<button\>\` 元素中的 type 可以任意修改，但
\`\<select\>\` 元素的 type 属性是只读的。

1.  表达字段的公共方法

-   focus() 引起用户对某部分的注意
-   blur() 取消聚焦

focus 应用例子------页面加载后将焦点定位到表单的第一个字段：

\`\`\`js window.addEventListener(\"load\", (event) =\> {
document.forms\[0\].elements\[0\].focus() }) \`\`\`

但是，如果第一个字段被隐藏了（type 为 hidden 的 input 元素 / CSS 设置
display 或 visibility）代码就会报错。

HTML5 为表单字段增加了 autofocus
属性，支持该属性的浏览器，加载页面后会自动聚焦于该字段。

修改上述代码以适应有 autofocus 的情况：

\`\`\`js window.addEventListener(\"load\", (event) =\> { let element =
document.forms\[0\].elements\[0\]

if (element.autofocus !== true) { element.focus() console.log(\'JS
focus\') } }) \`\`\`

1.  表单字段的公共事件

-   鼠标
-   键盘
-   mutation
-   HTML
-   blur
-   change 可用于验证输入内容
-   focus

\## 文本框编程

HTML 中的两种文本框表示方式：单行 \`\<input\>\` 多行 \`\<textarea\>\`。

input 省略 type 默认 type 为 text。

示例------一个可显示 25 个字符、但最多允许显示 50 个字符的文本框：

\`\`\`html \<input type=\"text\" size=\"25\" maxLength=\"50\"
value=\"初始值\"\> \`\`\`

textarea 示例------一个高 25 字符、宽 5 字符的多行文本框：

\`\`\`html \<textarea rows=\"25\" cols=\"5\"\>初始值\</textarea\> \`\`\`

两类文本框的值都可以通过 value 属性获取。\*\*在处理文本框值时不要使用
DOM 方法\*\*（为什么？）。

\### 选择文本

select() 方法用于选中文本框中的全部文本。

文本框有默认值时，聚焦于文本框会全选文字，尤其是默认值：

\`\`\`js let textbox = document.forms\[0\].elements\[\"textbox1\"\]
textbox.addEventListener(\"focus\", (event) =\> { event.target.select()
}) \`\`\`

1.  select 事件

2.  取得选中文本

\`\`\`js function getSelectedtext(textbox) { return
textbox.value.substring(textbox.selectionStart, textbox.selectionEnd) }
\`\`\`

1.  部分选中文本

\`\`\`js textbox.value = \"Hello World!\"

textbox.setSelectionRange(0, textbox.value.length) \`\`\`

\### 输入过滤

怎样在一个输入框中只输入字符（无数字），怎样在输入框中输入非字符纯数字？

\`\`\`js textbox.addEventListener(\"input\", (event) =\> { if
(//̣.test(String.fromCharCode(event.charCode))) { event.preventDefault()
} }) \`\`\`

上述代码暂时不起作用。

1.  屏蔽字符
2.  处理剪切板

\### 自动切换

在常用的数据格式上输入时，如果一条数据输入完毕，自动将光标移动到下一条待输入的信息框。

一个输入美国号码的例子：

\`\`\`html \<form action=\"\"\> \<input type=\"text\" id=\"txtTel1\"
maxlength=\"3\"\> \<input type=\"text\" id=\"txtTel2\" maxlength=\"3\"\>
\<input type=\"text\" id=\"txtTel3\" maxlength=\"4\"\> \</form\> \`\`\`

\`\`\`js function tabForward(event) { let target = event.target; if
(target.value.length == target.maxLength) { let form = target.form; for
(let i = 0, len = form.elements.length; i \< len; i++) { if
(form.elements\[i\] == target) { if (form.elements\[i + 1\]) {
form.elements\[i + 1\].focus(); } return; } } } }

let inputIds = \[\"txtTel1\", \"txtTel2\", \"txtTel3\"\]; for (let id of
inputIds) { let textbox = document.getElementById(id);
textbox.addEventListener(\"keyup\", tabForward); }

let textbox1 = document.getElementById(\"txtTel1\"); let textbox2 =
document.getElementById(\"txtTel2\"); let textbox3 =
document.getElementById(\"txtTel3\"); \`\`\`

\<iframe height=\"300\" style=\"width: 100%;\" scrolling=\"no\"
title=\"Untitled\"
src=\"<https://codepen.io/tianheg/embed/zYWxEPo?default-tab=html%2Cresult>\"
frameborder=\"no\" loading=\"lazy\" allowtransparency=\"true\"
allowfullscreen=\"true\"\> See the Pen \<a
href=\"<https://codepen.io/tianheg/pen/zYWxEPo>\"\> Untitled\</a\> by
tianheg (\<a href=\"<https://codepen.io/tianheg>\"\>@tianheg\</a\>) on
\<a href=\"<https://codepen.io>\"\>CodePen\</a\>. \</iframe\>

代码没有考虑隐藏字段。

\### HTML5 约束验证 API

无需 JS 即可进行一些基本验证。

1.  必填字段 \`required\`
2.  有些输入类型自带验证，如 email、url
3.  有些新支持的输入类型，还处在变化改进之中

对当前数值进行增减：stepUp、stepDown。

1.  输入内容的正则匹配

不阻止输入不符合条件的字符。

1.  检测有效性

checkValidity() 方法和 validity
属性。前者只能检测是否有效，后者可以提供更多的信息。

1.  禁用验证

\## 选择框编程

选择框是使用 \`\<select\>\` 和 \`\<option\>\` 创建的。

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

\<iframe height=\"300\" style=\"width: 100%;\" scrolling=\"no\"
title=\"Untitled\"
src=\"<https://codepen.io/tianheg/embed/eYMmeEe?default-tab=html%2Cresult>\"
frameborder=\"no\" loading=\"lazy\" allowtransparency=\"true\"
allowfullscreen=\"true\"\> See the Pen \<a
href=\"<https://codepen.io/tianheg/pen/eYMmeEe>\"\> Untitled\</a\> by
tianheg (\<a href=\"<https://codepen.io/tianheg>\"\>@tianheg\</a\>) on
\<a href=\"<https://codepen.io>\"\>CodePen\</a\>. \</iframe\>

change 事件在选择框和其他表单字段的不同：

在选择框中，在选中选项时，会立即触发表单事件；在其他表单字段中，会在自己的值修改后触发，然后字段失去焦点。

当 HTML 中没有指定 value 值时，JS 会选择 text 值作为 value 值。

\### 选项处理

选择框提供了 selectedIndex 属性来获取当前的选择信息。

\<iframe height=\"300\" style=\"width: 100%;\" scrolling=\"no\"
title=\"Untitled\"
src=\"<https://codepen.io/tianheg/embed/jOzEevO?default-tab=html%2Cresult>\"
frameborder=\"no\" loading=\"lazy\" allowtransparency=\"true\"
allowfullscreen=\"true\"\> See the Pen \<a
href=\"<https://codepen.io/tianheg/pen/jOzEevO>\"\> Untitled\</a\> by
tianheg (\<a href=\"<https://codepen.io/tianheg>\"\>@tianheg\</a\>) on
\<a href=\"<https://codepen.io>\"\>CodePen\</a\>. \</iframe\>

\### 添加选项

\<iframe height=\"300\" style=\"width: 100%;\" scrolling=\"no\"
title=\"Untitled\"
src=\"<https://codepen.io/tianheg/embed/OJvPBKY?default-tab=html%2Cresult>\"
frameborder=\"no\" loading=\"lazy\" allowtransparency=\"true\"
allowfullscreen=\"true\"\> See the Pen \<a
href=\"<https://codepen.io/tianheg/pen/OJvPBKY>\"\> Untitled\</a\> by
tianheg (\<a href=\"<https://codepen.io/tianheg>\"\>@tianheg\</a\>) on
\<a href=\"<https://codepen.io>\"\>CodePen\</a\>. \</iframe\>

以上有两种方式添加选项，一种是创建 option 元素，另一种是使用 Option
构造函数。选项的值不是必需的，只有文本也是可以的。

另一种添加新选项的方法：add()。

\`\`\`js let newOption2 = new Option(\"Option2 text\", \"Option2
value\"); selectbox.add(newOption2, null); // null 换成 undefined 也可以
\`\`\`

\### 移除选项

三种方法：

\`\`\`js selectbox.removeChild(selectbox.options\[0\])

selectbox.remove\[0\]

selectbox.options\[0\] = null \`\`\`

\### 移动和重排选项

\<iframe height=\"300\" style=\"width: 100%;\" scrolling=\"no\"
title=\"移动和重排\"
src=\"<https://codepen.io/tianheg/embed/QWmwJGN?default-tab=html%2Cresult>\"
frameborder=\"no\" loading=\"lazy\" allowtransparency=\"true\"
allowfullscreen=\"true\"\> See the Pen \<a
href=\"<https://codepen.io/tianheg/pen/QWmwJGN>\"\> 移动和重排\</a\> by
tianheg (\<a href=\"<https://codepen.io/tianheg>\"\>@tianheg\</a\>) on
\<a href=\"<https://codepen.io>\"\>CodePen\</a\>. \</iframe\>

\## 表单序列化 form serialization

在点击提交时，服务器收到的数据是由什么决定的？

\<iframe height=\"300\" style=\"width: 100%;\" scrolling=\"no\"
title=\"表单序列化\"
src=\"<https://codepen.io/tianheg/embed/BaryGGz?default-tab=js>\"
frameborder=\"no\" loading=\"lazy\" allowtransparency=\"true\"
allowfullscreen=\"true\"\> See the Pen \<a
href=\"<https://codepen.io/tianheg/pen/BaryGGz>\"\> 表单序列化\</a\> by
tianheg (\<a href=\"<https://codepen.io/tianheg>\"\>@tianheg\</a\>) on
\<a href=\"<https://codepen.io>\"\>CodePen\</a\>. \</iframe\>

\## 富文本编辑

富文本编辑，就是「所见即所得」（WYSIWYG，What You See Is What You Get）

\<iframe height=\"300\" style=\"width: 100%;\" scrolling=\"no\"
title=\"富文本编辑\"
src=\"<https://codepen.io/tianheg/embed/NWYPEod?default-tab=html%2Cresult>\"
frameborder=\"no\" loading=\"lazy\" allowtransparency=\"true\"
allowfullscreen=\"true\"\> See the Pen \<a
href=\"<https://codepen.io/tianheg/pen/NWYPEod>\"\> 富文本编辑\</a\> by
tianheg (\<a href=\"<https://codepen.io/tianheg>\"\>@tianheg\</a\>) on
\<a href=\"<https://codepen.io>\"\>CodePen\</a\>. \</iframe\>

\### contenteditable

另一种比较方便的富文本交互方式。对任意元素指定一个 contenteditable
属性。见上一个 CodePen 演示。

contenteditable 还可以用在 html 标签上，将整个页面变成可编辑的区域。

\### 与富文本交互

\### 选择富文本内容

getSelection()

\### 通过表单提交富文本
