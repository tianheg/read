# read-definitive-guide-to-html5
Part I: 1-5 了解 HTML，CSS，JS

Part II: 6-15 HTML

Part III: 16-24 CSS

Part IV: 25-31 JS

Part V: 32-40 高级特性：Ajax、多媒体、Canvas、拖拽、地理、Web
存储、创建离线应用

\## 1-5

HTML5 不仅仅指最新的 HTML 标准，还包含构成 Web 的一系列重要技术。

有问题就去 \[World Wide Web Consortium(W3C)\](<https://www.w3.org/>)。另一个好去处 \[MDN Web Docs\](<https://developer.mozilla.org/en-US/>)。

不了解的元素：accesskey、contenteditable、draggable、spellcheck。

\> The collective name for software components and components that might
consume HTML is user agents.

浏览器属于用户代理的一种，但不仅仅只有浏览器是用户代理。

XHTML 是为了让 XML 解析器能够解析 HTML 语法的一种方式。\[HTML vs.
XHTML - WHATWG Wiki\](<https://wiki.whatwg.org/wiki/HTML_vs._XHTML>)

父子、后代和姊妹。

HTML 实体：（\`&lt;\` \`&gt;\` \`&amp;\` \`&euro;\` \`&pound;\`
\`&sect;\` \`&copy;\` \`&reg;\` \`&trade;\`）

HTML 全局属性。

\>
最正确的解决难题的办法------使用已有的知识和工具，为尽可能多的用户提供支持。

\`\`\`css \@charset \"UTF-8\"; \@import \"sth.css\"; \`\`\`

\### 样式的层叠与继承

browser styles( or user agent styles) 是浏览器一个应用于元素的默认样式。

样式层叠的优先级：

1.  通过 \`style\` 定义，作为元素属性的
2.  在 \`head\` 中通过 \`style\` 定义的
3.  在 \`head\` 中通过 \`link\` 引入的外部样式表
4.  用户样式：用户定义的
5.  user agent styles 浏览器的默认样式

可以通过 \`!important\` 对特定样式进行强调。

有时会存在 id class
和伪类同时作用在一个元素的情况，此时判断元素的样式就会些许复杂，所以引入了
Specificity 的概念。

类似于权重，通过样式中 id 值、其他属性和伪类、元素名和伪元素的数量。

\*\*继承\*\*是指，当元素的样式未被定义时，继承来自父元素的样式。

一些基本颜色：black、green、silver、lime、gray、olive、white、yellow、maroon、navy、red、blue、purple、teal、fuchsia、aqua。

长度单位：in（英寸）、cm（厘米）、mm、pt（1点相当于 1/72
英寸）、pc（1pica相当于 12点） \|\|
em（相对于元素字体大小）、ex（相对于字体的垂直高度）、rem（相对于根元素的字体大小）、px（像素大小，假设显示器分辨率为
96dpi）、%（相对于其他属性值的百分比）、vw、vh、vmin、vmax。

这几个单位里，px
是有争议的一个，CSS规范和实际使用时不太一致。通常，pixel
指显示器上的最小可定位单元。CSS 如下定义 pixel：

\> The reference pixel is the visual angle of one pixel on a device with
a pixel density of 96dpi and a distance from the reader of an arm\'s
length.

CSS 规范将 px
的长度依赖于人的手臂，这是不可靠的。尽管存在这些规范，浏览器并不遵守，在浏览器中，1
px 就是 1 inch 的 1/96。因此，尽管 px
被认为是相对单位长度，在浏览器上却是绝对单位长度。

在以后的 CSS 样式编写中，应大量使用相对单位长度（em、rem）。

\`calc(66% - 70px)\` 只能用于块级元素。

角度单位：deg（0-360）、grad（gradian 0-400）、rad（radian
0-6.28）、turn（1turn = 360deg）。

时间单位：s、ms（1s = 1000ms）

可以用的 CSS 工具：

-   <https://caniuse.com/> 查找某些特性在各个浏览器的应用情况

Array
的一些常用内置方法：concat、join、pop、push、reverse、shift、slice、sort、unshift。

注意：JS 中的两个特殊值：null、undefined。

\`\`\`js var first = null; var second console.log(\`\${first},
\${second}\`) // null, undefined \`\`\`

\## 6-15

语义：表达内容，与样式的分离。

应用 HTML5 元素时的几个小技巧：

1.  Less can be more, ask yourself how the semantics of an element are
    going to be used.
2.  Don\'t abuse elements.
3.  Be specific and consistent.
4.  Don\'t make assumptions about the audience.

不熟悉的元素：noscript、del、dfn、em、ruby、rb、rt、s、samp、sub、sup、time、u、var、wbr、dl、dd、dt、fugure、figuration、pre、address、aside、summary(details)、col、colgroup、table、tbody、td、tfoot、th、thead、tr、datalist、fieldset、legend、optgroup、option、output、map、area、audio、canvas、embed、iframe、meter、source、svg、track、wbr、bdo。

一些元素的附加内容：

-   ol 属性：start、reversed、type
-   base
-   meta: http header
-   style 属性：media

\`\`\`html \<meta name=\"robots\"
content=\"noindex/noarchive/nofollow\"\> \`\`\`

label 的 for 属性对应着 input 的 id 属性。

\### 使用 input

size 用于指定最大显示的字符。

datalist 用于指定可选项。

pattern 通过正则表达式筛选输入值。

date 作为 type 的属性表示日期。

file 作为 type 属性可以上传文件。
