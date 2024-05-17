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

尽可能使用相同的技术，并适配不同的设备，使得不同终端的用户得到一致的体验。

但并不意味着，小屏幕上呈现的内容必须和大屏幕上的保持一致。

### positive response

Responsive design 来自建筑学。Ethan Marcotte 于 May 25, 2010 发表了一篇文章《[Responsive Web Design – A List Apart](https://alistapart.com/article/responsive-web-design/)》。

### adjacent possible

邻近可能

> At every moment in the timeline of an expanding biosphere, there are doors that cannot be unlocked yet. In human culture, we like to think of breakthrough ideas as sudden accelerations on the timeline, where a genius jumps ahead fifty years and invents something that normal minds, trapped in the present moment, couldn’t possibly have come up with. But the truth is that technological (and scientific) advances rarely break out of the adjacent possible; the history of cultural progress is, almost without exception, a story of one door leading to another door, exploring the palace one room at a time.
>
> --Steven Johnson *Where Good Ideas Come From*

科学与技术发展的每一步都是在前人基础上进行的。

生产、能源、理论 -> 微波炉

电脑 -> 因特网 -> 万维网 -> Facebook

响应式设计的一些技术：

1. fluid grids
2. flexible images
3. media queries

### changing mindset

改变心态——移动优先（这迫使网页设计师思考哪些内容是最重要的，不重要的内容都被删除了，以便能够在小屏幕上展示）。移动优先不是将注意力放在移动设备上，而是将注意力放在重要的内容上。避免对移动设备的具体型号、网络使用和浏览器兼容性进行假设。

## Chapter 4: Languages

> Be conservative in what you send; be liberal in what you accept.
>
> --Robustness Principle(Postel’s Law)

网络中流动的数据具有容错性，这和浏览器处理 HTML 和 CSS 是一致的。

### declaration

HTML 和 CSS 都是声明型语言。在编写它们时，只需要说明想做什么，而不需要输入具体让计算机执行的指令，这些指令的部分由浏览器代劳。

大多数编程语言是命令型的，像 Java、C++。你必须提供精确的指令，如果有错误，程序就会停止执行。

### scripting

> Q: I would like to know, whether anybody has extended WWW such, that it is possible to start arbitrary programs by hitting a button in a WWW browser.
>
> A: Very good question. The problem is that of programming language. You need something really powerful, but at the same time ubiquitous. Remember a facet of the web is universal readership. There is no universal interpreted programming language.

### patterns of progress

解决方案从 JS 中不断迁移到 HTML/CSS 中，与前者相比，这些解决方案在后者中更简单更安全。

### responsibility

JS 能够让设计师创建出更动态的网站，但同时也让设计师创建出更慢的网站。

设计师最好记住，在网络上用户说了算。

### 2.0

Ajax -> smoother user experience

The age of web apps was at hand.

### appiness

a web app required JS to run

### unforgiven

类比 JS 与 XHTML，它们都有一些强制措施。

HTML 可以一点一点渲染，但 JS 如果存储在文件中，则必须等它全部下载后才能开始解析。

### platform

> The language we use can subtly influence our thinking. In his book *Metaphors We Live By*, George Lakoff highlights the dangers of political language.
>
> Obvious examples are “friendly fire” and “collateral damage”, but a more insidious example is “tax relief”—before a debate has even begun, taxation has been framed as something requiring relief.

Web 不是一个平台，是多平台的，是跨平台的。

> The web isn’t a platform. It’s a continuum.
>
> The web is a hot mess.

## Chapter 5: Layers

> A building properly conceived is several layers of longevity.
>
> --In his classic book *How Buildings Learn* Stewart Brand highlights an idea by the British architect Frank Duffy

1. Site—the physical location of a building only changes on a geological timescale.
2. Structure—the building itself can last for centuries.
3. Skin—the exterior surface gets a facelift or a new lick of paint every few decades.
4. Services—the plumbing and wiring need to be updated every ten years or so.
5. Space plan—the layout of walls and doors might change occasionally.
6. Stuff—the arrangement of furniture in a room can change on a daily basis.

![A diagram of a house.](https://resilientwebdesign.com/chapter5/images/small/shearing-layers.jpg)

> The slowest moving layer is nature, then there’s culture, followed by governance, then infrastructure, and finally commerce and fashion are the fastest layers.
>
> --Stewart Brand *The Clock Of The Long Now*

每层以松散的方式相互依赖。正因为如此，每个层次的累积使得“临近可能”充满更多的机会。

与此（文明）类似，CSS 和 JS 基于 HTML，HTML 需要一个指向的 URL，这又依赖于 HTTP，HTTP 又是基于 TCP/IP。

> [!IMPORTANT]
> Each of the web’s shearing layers can be peeled back to reveal a layer below. Running that process in reverse—applying each layer in turn—is a key principle of resilient web design.

### progressive enhancement

> Web design must mature and accept the developments of the past several years, abandon the exclusionary attitudes formed in the rough and tumble dotcom era, realize the coming future of a wide variety of devices and platforms, and separate semantic markup from presentation logic and behavior.
>
> --Steven Champeon and Nick Finck *Inclusive Web Design For the Future with Progressive Enhancement*, 2003

提供同样的内容给大多数人，但每个人的体验不一定都相同。

### do websites need to look exactly the same in every browser?

结构和样式分离相对简单，如果使用一些错误的 JS 用法，浏览器会罢工。

在使用 JS 的一些功能之前，需要检查一下浏览器的支持情况。

### aggressive enhancement

以前的浏览器支持的功能比较少，设计师们在设计网站的时候，为了让网页在所有种类浏览器中都一致，所有浏览器都支持的使用标准方法，不支持的使用各种 hack 的方式，这就导致了网页的展现上的不够诚实——语义和样式没有分离。

后来移动互联网的兴起，让设计师从保持网站一致性上稍微挣脱出来。

一个观点：支持每个浏览器，但并非对每个浏览器都优化。

渐进式增强的意思是：为所有人提供核心功能，然后根据不同种类浏览器的支持程度，使用喜好的功能。

要分清：*核心功能与增强功能*。

## Chapter 6: Steps

在设计网站时，设计师思考的是各种网页的操作，滑动、点击、滚动、拖拽。但用户在浏览网站时不会思考这些，他们大多会想的是，阅读、写作、分享、购物或售卖。设计师需要看清楚设计网页与用户行为之间的联系。

作者提供的设计网站的三步法：

1. 确定核心功能；
2. 使用尽可能简单的技术实现；
3. 使用 CSS 和 JS 增强功能。

但是，关键在于：如何确定核心功能？

### information

举例，一个新闻网站最核心的功能是：提供新闻，其他的诸如实时通知、互动谜题，都没有提供新闻最重要。

而在网络中提供新闻的最简单方式是：一个 URL 指向的 HTML 文件。但并非这么简单，HTML 可能会变得冗杂、URL 可能很长不那么容易使用。

现代的新闻已经通过各种语义化标签，对新闻进行了分区，比如，文章、标题、段落、列表和图像。

第三步是：增强。这需要借助 CSS 和 JS。

### communication

举例，社交网站。核心功能是：收发信息。使用和新闻网站应用的 HTML 足够使用了。

第三步增强如何实现？

应用 CSS 添加样式，使用 JS 添加交互性（动画、Ajax）。

添加 Websockets、浏览器间点对点直接通信技术。

### creation

一个图片分享网站的核心功能：发送和接收图像。HTML 可以对图片进行排列，还需要表单处理文件的上传。

增强部分：除了前一小节提到的动画、Ajax、Websockets 等，还可以

- 使用 HTML5 中的文件操作 API，直接在浏览器操作图像。
- 通过 CSS 为图像添加滤镜。

### collaboration

在线文档处理的核心功能：写作、编辑、分享。

第二步，确定如何实现核心功能。

分享通过 URL 就能做到。写作和编辑，可以通过 HTML 元素 `<textarea>`。

第三步，增强。

通过 JS 添加丰富的交互，检测键盘的敲击实时显示输入状态，支持根据喜好切换字体，Ajax 支持自动将编辑的内容实时同步到服务器，Websockewts 支持了多人同步，Service worker 保证在网络条件不支持前面的丰富交互时能够维持基本功能的可用。

### scale

“技术债务”：在项目开始时没有妥善地计划，使得项目到后期很难推动。

“技术信用”：按照网页开发三步法，就能积累信用。

再次回顾三步法：

1. 确定核心功能；
2. 使用尽可能简单的技术实现；
3. 添加增强功能。

> What is the core functionality of this component? How can I make that functionality available using the simplest possible technology? Now how can I enhance it?
>
> Websites do not need to look exactly the same in every browser.

## Chapter 7: Challenges

在第四届超文本年会上，Tim Berners-Lee 提交了万维网项目提案，但被拒绝，理由是这个项目太过简单。

简单，正是 WWW 得以流行的原因。

> It’s all‐too tempting to quickly declare that an approach is naïve, overly simplistic, and unrealistic. The idea that a website can simultaneously offer universal access to everyone while also providing a rich immersive experience for more capable devices.

### "this is too simple"

推广 CSS 时，遇到了阻力，一些人认为它不能用于复杂项目，一些人使用 CSS 重构流行网站，做出了表率。

推广响应式设计时，又遇到阻力（应该不是同一批人吧`:)`），又有人做出了表率。

如今，渐进式增强（progressive enhancement）似乎遇到了类似的一群人，拒绝更好的网站设计方式，固执守旧。

### "this is too difficult"

为了构建弹性网站，为了为网站设计分层，需要时间的投入。但回报很可观：能更好地应对意外情况——不寻常的浏览器、不稳定的网络连接、过时的设备。

渐进式增强意味着，网站的核心功能是最高优先级，其他增强内容可以循序渐进地实现，不必急于一时。

### how do I convince...?

改变自己的行为思想就很困难，改变他人的就更困难，但是并非无法改变。

### tools

如果工作流程与所使用的工具发生冲突，那么改变工作流会变得不那么容易。

工具应该帮助人们高效地完成工作。工具应该服从工作流程。

但很多时候，是工具决定了工作流程。比如，所见即所得编辑器、图形设计程序、内容管理系统或 JS 框架。

如果能够意识到这种影响，我们就可以据此选择更符合自己哲学观念的工具，比如，在选择 JS 框架时，就是如此。

每个框架都有一种哲学，因为它们都是由人写出来的。如果你的理念与框架的哲学一致，那么框架将提高你的工作效率，反之则在使用框架时，举步维艰，最后甚至直接按照框架的哲学，安排自己的工作流。

明智地选择你的工具。如果因为与某个工具的理念不同，导致你放弃了弹性网站设计，这将是一种遗憾。

争论常常因为优先事项的不一致。渐进式增强优先考虑人们的需求，而不是开发者的需求。

每当遇到问题，总是认为是自己的问题，而不是用户的问题。因为这就是我们的工作。

### future friendly

唯一确定的是不确定：

> Disruption will only accelerate. The quantity and diversity of connected devices—many of which we haven’t imagined yet—will explode, as will the quantity and diversity of the people around the world who use them.

这并不是绝望的原因；这是值得庆祝的。我们要么与这个未来作斗争，要么拥抱它。意识到不可能面向未来，我们决定对未来友好：

1. Acknowledge and embrace unpredictability.
2. Think and behave in a future-friendly way.
3. Help others do the same.

第一步最重要：承认并接受不可预测性。这就是弹性网页设计背后的驱动力。对未来友好的最佳方式是向后兼容（The best way to be future-friendly is to be backwards‐compatible.）。

### assumptions

我们总会对现实状况做出一些假设，但这些假设往往背离现实。

### the future

> I wish I could predict the future. The only thing that I can predict for sure is that things are going to change.
>
> I don’t know what kind of devices people will be using on the web. I don’t know what kind of software people will be using on the web.
>
> The future, like the web, is unknown.
>
> The future, like the web, will be written by you.
