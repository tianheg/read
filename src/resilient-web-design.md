# Resilient web design by Jeremy Keith

https://resilientwebdesign.com/

从 https://developer.mozilla.org/en-US/curriculum/core/web-standards/ 这里遇到这本书

> 在 IT 语境下，“Resilient”通常指的是系统、网络或设计能够从故障或不利条件中快速恢复的能力。对于“Resilient Web Design”，这通常意味着网页设计能够适应不同的浏览环境和技术限制，即使在用户设备、网络连接或浏览器不支持某些特性的情况下，也能够提供基本的内容和功能。这样的设计强调了网页的可访问性和健壮性，确保用户无论使用何种设备或网络条件，都能获得良好的体验。

无论用户的设备环境如何，都能提供最基本的服务。

## Intro

> We look at the present through a rear‐view mirror. We march backwards into the future.
>
> --Marshall McLuhan

关于网页设计，我们或许应该回头看，从历史中寻找关于未来的启示。

作者的写作目的：强调一些**常用的弹性设计**网页的方法。

## Chapter 1: Foundations

每一代人的工作都建立在前人的基础之上，有的时候会退步，但总体来看是进步的。

一些例子：

- 古登堡发明印刷机，基于用于酿酒的螺旋压榨机
- QWERTY 键盘布局和手机上的虚拟键盘，基于第一代打字机的设计
- 钟表指针的走向之所以只向顺时针方向，是因为在北半球日晷的影子在一天中的移动方向就是这样，如果南半球的文明占据主导，那么现在钟表的指针大概率会是相反的方向
- 至于时钟的单位，是基于苏美尔人的计数习惯
- 电脑中的软盘图标，占据3又1/2英寸的空间，是因为现实中软盘被设计成可以放进口袋

### Share what we know

知识在代际间传递。

> 当知识从一代传到下一代时，理论变得更加精细、测量单位变得标准化、实验的精度得到了提高。

Tim Berners‐Lee，一位上个世纪在 CERN 工作的计算机科学家，发明了 World Wide Web。

### Net value

为了工作而建立的局域网使用的是电话线来传输数据。

互联网的最初目的是为了规避审查。

### Hyperspace

HTML 中的 A 标签威力无穷，将众多网页连接在一起。

hypertext: Tim Berners‐Lee -> Ted Nelson -> Vannevar Bush -> Paul Otlet

网络中的链接非常简单。

### Mark me up, mark me down

HTML 是基于 SGML 的。

> Once again, it made sense to build on what people were already familiar with rather than creating something from scratch.

如果浏览器遇到自己不认识的 HTML 标签时，怎么办？

> Browser software may ignore this tag.

为什么作者说，“这个决定（浏览器忽略不认识的标签）会对万维网产生深远的影响”？

我想，因为这种决定使得之后的浏览器都陷入一种兼容性竞争中。

## Chapter 2: Materials

浏览器解析 HTML 元素时，有哪些步骤：

1. 读取 HTTP 发送来的 HTML
2. 生成 DOM 树、CSSOM 树
3. 解析 JS 脚本 defer、async

~~如果浏览器不认识某个 HTML 元素，它就不会解析这个元素包含的内容。~~

实际上是忽略标签，直接显示其中的内容。浏览器不会报错、也不会停止解析余下的内容。

这种容错，使得即使 HTML 已经是 HTML5 了，在旧版本浏览器上，即使不认识新增的标签，但仍然显示其中的内容。

### meaning of markup

大多数 HTML 标签是有着语义含义的。A 标签有着最了不起的超能力——连接网页。

早期的 HTML 标签有很多样式标签，在语义上没什么含义，比如 `<big>`, `<small>`。

### matter of style

Håkon Wium Lie 提出了 Cascading Style Sheets。

### killing it

一些人没等到 CSS 出现，转而使用另外的方法实现样式：

- 长宽都是 1px 的透明 GIF 图片
- `<table>`

### browser wars

网页设计师不使用 CSS 的原因之一是缺乏浏览器支持。当时有两个浏览器：微软的 IE 和网景的 Netscape。它们彼此的设计不兼容，用不同的设计实现相同的功能，导致设计师们不得不使用双倍的时间创建网站。

于是，有一群人开始游说两个浏览器厂商，让他们支持标准。

另外，有一个叫 CSS Zen Garden 的网站，同样的 HTML 内容，使用了不同的 CSS 构建出了如此差异化的视角效果。

### coupling

系统的相互依赖程度，决定了当发生故障时，系统能否依然维持基本功能运转。

把 CSS 从 HTML 中提取到文件中是一种从紧耦合到松耦合的变化。这种举措，使得 David Siegel 能够在只改变 CSS 的情况下创造出如此多样的 Zen Garden。

### dancing about architecture

从建筑界借鉴的设计价值观——“the principle of material honesty”。

> The world of architecture has accrued its own set of design values over the years. One of those values is the principle of material honesty. One material should not be used as a substitute for another. Otherwise the end result is deceptive.
>
> “the principle of material honesty” 指的是在建筑和设计领域中，材料应该诚实地表达其自身特性和功能的原则。这意味着在设计过程中，应选择最适合项目需求的材料，并以真实和透明的方式使用它们，而不是用一种材料去模仿或代替另一种材料，从而避免误导用户对材料本质或性能的认知。这种原则强调了对材料真实性和美学价值的尊重，以及对建筑环境和用户诚实的责任。

使用 TABLE 进行布局就是一种不诚实。使用 CSS 进行布局是实质上的诚实，同时也使得 HTML 达成了这一点——专注于标记内容，而非为内容添加样式。

使用 CSS 也可以进行不诚实的布局，但随着 CSS 的逐渐完善，这种情况会越来越不必要。

## Chapter 3: Visions

设计让内容更清晰。他们可以利用颜色、排版、层级、对比度以及他们掌握的所有其他工具，将无序的混乱信息转化为易于使用和令人愉悦的视觉效果。

> Like life itself, design can win a small victory against the entropy of the universe, creating pockets of order from the raw materials of chaos.

### Prints and the revolution

页面的限制给了设计师确定性。

### taking your talent to the web

将印刷的纸质书的设计思想，迁移到网页设计时，有一个问题：纸张的大小是确定的，而网页的大小是不确定的。

### if it ain't fixed, don't break it

> There are known knowns. There are things we know we know. We also know there are known unknowns, that is to say we know there are some things we do not know. But there are also unknown unknowns—the ones we don’t know we don’t know.
>
> --former US Secretary of Defense Donald Rumsfeld

> In the early days of the web, most monitors were 640 pixels wide. Web designers created layouts that were 640 pixels wide. As more and more people began using monitors that were 800 pixels wide, more and more designers began creating 800 pixel wide layouts. A few years later, that became 1024 pixels. At some point web designers settled on the magic number of 960 pixels as the ideal width.

有趣的变化

### dao or dao not

> The control which designers know in the print medium, and often desire in the web medium, is simply a function of the limitation of the printed page. We should embrace the fact that the web doesn’t have the same constraints, and design for this flexibility.

网页设计师们不应沿袭在印刷时的习惯，认为网页存在限制，他们应该把这一限制移除。

### ship of tools

> It’s a poor craftsperson who always blames their tools.
>
> We shape our tools and thereafter our tools shape us. --John Culkin

### reality bites

网页设计师们以为：

- 所有人都有超过 960px 的大屏幕
- 所有人都接入了宽带互联网，不需要降低图片和文件大小
- 所有人都使用最新的网页浏览器

### stuck inside of mobile

初代 iPhone 于 2007 年发布，这在根本上改变了网页设计师们的思维定势。

### we are one
