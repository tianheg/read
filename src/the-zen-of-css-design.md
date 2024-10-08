# The Zen of CSS Design by Dave Shea, Molly E. Holzschlag

- <https://www.amazon.com/exec/obidos/ASIN/0321303474/mezzoblue-20/>
- <https://www.csszengarden.com/>

这本书由两部分组成：

-   Zen Garden 的构建历史，也包括一些设计基础\
-   一些Web设计理念，如何应用 CSS 进行设计

Chapter 1. View Source
----------------------

> In late 2002, Zen Garden creator Dave Shea started thinking about
> this\
>  problem. How could those who were capable of producing real beauty\
>  with CSS be inspired by examples that were less than beautiful?\
>  Because he had a background in both coding and visual arts, Shea\
>  recognized the potential of CSS as a design language. And he
> realized\
>  that the people who should be using it weren't.

> **What's the difference between a `<p>` tag and a p element, anyway?**
>
> In some senses they refer to the same thing, but there's a subtle\
>  distinction. A tag is simply the actual HTML delimiter; `<p>`,\
>  `<div>`, and `</body>` are all tags. An element is made up of a pair\
>  of opening and closing tags, which presumably contain content of
> some\
>  sorta notable exception being the `<br>` tag which opens and closes\
>  itself, without content.
>
> Basically, an element is a specific piece of structure, while a tag
> is\
>  just the syntax that helps you create the structure. {.is-info}

HTML 主要任务：根据语义选择标签，This is what defines HTML semantics:\
elements that are chosen for their purpose and not their appearance.

HTML 中相同的部分：

```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>TITLE</title>
      </head>
      <body>
      </body>
    </html>
```

### Avoid div-itis

避免使用太多 =&lt;div&gt;=。

But that doesn't mean they should be avoided. A few `divs` in logical\
spots throughout your document will provide extra styling control and\
logical separation of sections. Think of a `div` as a reusable\
container: You don't want to bury your content in too many containers,\
but a few well-placed divs can keep content sorted well.

### Minimize Markup

前两个技巧暗示的是，标签越少越好。只有确定十分需要某标签时才使用。这样能够降低文件大小，更快下载到用户浏览器；还能够减少解释最终文件的时间。

### 正确使用 class 和 id

一个 class 是一个可复用的能用于一个页面上的任何一个/几个元素的属性，而\
id 是只能在一个页面上使用一次的唯一属性。

### 设计的灵活性

选中除第一个以外的剩余：

``` {.css}
    #quickSummary p:nth-child(2) {
    }
```

1.  替换图片

```html
    <style>
      h3 > span {
        display: none;
      }
      h3 {
        background: url(image.jpg);
      }
    </style>
    <body>
      <h3><span>Text</span></h3>
    </body>
```

用 `<img>` 在那时似乎有些问题。后来不需要 span 了。

### 学习到了

-   用 CSS 文件可以将样式应用在不止一个页面\
-   Increased Portability\
-   Better Accessibility\
-   Precise Control

### 可访问性检查

一个网站：https://wave.webaim.org/

> "Accessibility is ultimately a human endeavor. It is determined by\
>  whether or not a diverse group of people with a variety of abilities\
>  and disabilities can access information efficiently. Bobby is just
> one\
>  step in helping to make web pages more accessible, but cannot\
>  guarantee total accessibility."
>
> --Frequently Asked Questions\
>
> [http://bobby.watchfire.com/bobby/html/en/faq.jsp\#faq\\\_onetool](http://bobby.watchfire.com/bobby/html/en/faq.jsp#faq\_onetool)

### 文本可伸缩性 Text Scalability

无论我设置多大字体，总有人对此不满意。在合适的位置放大字体------宗旨是方便用户。

### XHTML and Mime Types

### Foreign Languages

### Copyright and Theft

### Build it Bigger, Build it Better!

Chapter 2. Design
-----------------

> THE PROCESS OF WEB DESIGN is undergoing a dramatic transition, but\
>  good design principles remain unchanged. Whether you're choosing a\
>  color palette, thinking about a design's visual flow, effectively\
>  using shapes, or managing visual proximity of page elements,\
>  traditional values hold true.

### 亚特兰蒂斯: 极简的设计，统一性和象征性 Atlantis: Minimal design,

unity, and symbolism

视觉设计关于交流，一个成功的设计向观看者传递言语无发表达的信息。设计能够唤起气氛和情感，创造一种基调，并征求观众的反应。

凯文 ·\
戴维斯在创建亚特兰蒂斯时的目标是结合设计元素，比如字体和图像，就像室内设计师在创建一个情绪化的咖啡馆内部时结合桌子、柜台和油漆一样。从照片和调色板开始，戴维斯混合元素，直到达到预期的效果。然后，他将这个图形框架应用到他所制定的布局中。

1.  Minimalism 简约主义

将一些摄影元素和简单的布局相结合。CSS Zen Garden\
诞生于这样一种环境------大家都将盒子式的设计作为一种极简。极简主义不等同于糟糕的视觉设计。

Typography：

字体是一种沟通的手段，有着自己的层次、模式和韵律。

Iconography：

一个好的图标不需要被解释，但图标经常是出于需要而被抽象化。

关键是强烈而一贯地将图标和相关的想法联系起来，经过反复曝光后，会更容易辨认。

Line：

简单的线为视觉进行了很好的分割。但使用过多会造成视觉困扰。

Margins：

文本需要空间表达。缺乏外边界会导致问题。

1.  Unity and Symbolism 统一与象征

Consistency 一致性：

与线条艺术和摄影中的主要形状相呼应。例如，类型与周围线条之间的匹配比例和尺寸。

如果没有颜色对比，可能会缺乏某种强烈情感。

Representation 表现：

简单的设计元素代替更复杂的图像创意（这种使用简单的设计元素来代表更复杂的图像或思想的表现方法强有力地为设计工作增加了微妙和额外的深度）。

1.  Design Prerogative 设计特权

设计方便于交流。整个网站清晰统一的信息有利于提升用户体验。并非所有的网站都需要同样的设计关注度，在内容和功能占据中心位置的情况下，设计师可能有责任避开简单的图像和有效的、最小化的布局。

在其他情况下，设计必须传达一个更强烈的信息，往往不止一个。对一个设计的第一次分析有可能会错过设计师的一些微妙的设想。解释是由个人的经验和知识来调节的，所以要掌握像亚特兰蒂斯这样的作品的全部含义，就不可避免地要与设计师进行半途而废的交流，分享共同的理解。

设计师的责任是提供一个明确的信息，将被理解为尽可能广泛的观众，在一个独特的和令人信服的方式。不过，正如凯文•戴维斯(Kevin\
Davis)的亚特兰蒂斯号所证明的那样，在主要信息之下存在着许多分层附加信息的机会。

### Zunflower: Playing with light and shadow, shape and space

1.  光的作用\
2.  阴影在作怪\
3.  形状的影响

Primary Shapes：

圆形和女人味联系在一起。

圆圈(或弧线)经常被用来代表团体、整体、耐力、运动和安全。许多与女性、社区、整体生活和浪漫有关的网站使用圈子来强化信息。

三角形被认为是阳性的，表现出力量、攻击性和动态运动等特征。三角形的方向也影响意义。眼睛倾向于跟随任何主要的角度。如果三角面朝上，则表示向上运动和攻击性。如果三角形朝下，则联想可以是负的，表示被动和无能。

当然，矩形(包括正方形)也有关联。矩形暗示着力量和基础，很可能是因为它们的刚性和质量的暗示。矩形图像可以向观众暗示秩序、逻辑、包容和安全感。

Combining Shapes for Maximum Impact：

Rectangles help balance the design.

1.  Give Me My Space!

在视觉设计中正确使用空间有许多目的:\
空间可以帮助引导眼睛到感兴趣的页面上的一个点; 它缓冲文本和图像;\
并为眼睛提供一个休息的地方。这提高了可读性，并给予我们额外的精神空间来处理所呈现的信息。

Psychological and Social Relevance：

-   空间与经济的相关性\
-   空间不仅仅是物质的缺失，事实上，空间帮助定义物质。非常拥挤的设计意味着需要保护，并可能使游客感到紧张，而当空间以一种平衡但扩张的方式被使用时，所传递的信息是更复杂和轻松的\
-   空间还与文化有关。正如一个人对颜色的感知和对形状的理解会受到文化的影响一样，来自不同文化背景的人们对空间的反应方式也是不同的。在一些文化中，非常接近另一个人被认为是首选的互动方式。在其他文化中，正如在美国显而易见的那样，物理空间的感觉远远不够

Positive and Negative Space：

当解释正面和负面空间之间的区别时，空间如何与设计相结合就更加清楚了。

正空间是内容占据的地方，负空间是内容以外的地方。将正空间与负空间分离是不可能的，这是一种相互依存、始终存在的关系。

1.  Adding Professional Polish 添加专业抛光

### Springtime: Using color to evoke emotion

色彩诱发人类各种各样的情感早已确立。

这就是为什么我们把红色定义为暖色。我们把红色与火焰或红辣椒联系起来。然后，我们允许这些想法影响我们使用颜色设计的方式，例如，在自然产品的包装设计中使用棕色和棕褐色等大地色调。

在春天，单调的冬天与涌现的春天相遇，形成了一种既不冷也不热的调色板，而是表达了温暖与和谐，为观众创造了一种舒缓、积极的感觉。

1.  颜色的影响

传递信息：

当然，使用预期的相反颜色可能会产生冲突，从而形成一种有趣的设计方法，这可能会导致出色的结果。然而，这样的大胆需要更多的计划和测试，以确保所选择的颜色正在发挥作用。这里的重点是要展示颜色和人类反应之间的自然联系。

1.  色彩与人的内心

如果有人看不见，这一点显然是没有意义的。对于那些有部分色觉的人来说，其体验根本不可能与有完全色觉的人相同。大约每12个北美人中就有一个患有最普遍的色盲（重色性，无法区分两种颜色，最常见的是红色和绿色）。出于这个原因，在选择颜色时，必须牢记你的受众群体。

颜色的色调也可以改变它的意义。明亮的绿色能唤起某种情感，而卡其色则会产生不同的效果。同样，给颜色添加纹理可以改变它的感知。表1列出了常见的颜色及其一般的心理联想。

  <div style="text-align: center;margin-top:1rem;">

Table 1. Psychological Associations with Common Colors

  Color         Associations
  ------------- ---------------------------------------------------------------------
  Red           Power, energy, love, passion, aggression, danger
  Blue          Trust, conservative, secure, clean, sorrowful, order
  Green         Nature, earth, health, jealousy, renewal
  Orange        Fun, happiness
  Yellow        Optimism, hope, philosophy, cowardice
  Violet        Royalty, mystery, religion
  Brown         Reliability, comfort, endurance, earth
  Gray/silver   Intellect, futurism, modesty, sadness, decay, elegance
  Black         Power, sexuality, sophistication, mystery, fear, unhappiness, death
  White         Purity, cleanliness, precision, innocence, sterility, death

  </div>

正如你可能已经注意到的，在个别颜色的联想中存在一些矛盾，以及像黑色和白色这样不同颜色之间的二分法。例如，红色既能激发激情，又能表达危险（也许这两者真的没有什么不同？）\
同样，有许多因素与这些明显的矛盾有关，文化和性别差异是造成这些差异的主要原因。

在 "春天\
"的案例中，所选择的绿色的色调和强度都很柔和，令人愉悦，令人联想到草和叶。设计中的一抹蓝色也有助于扩展对自然的表达。

1.  Color, Culture, and Gender 颜色、文化、性别

阿提拉是匈牙利人。一个艺术家的文化根源以及他或她的生活和工作环境是否影响他们的设计选择和对色彩的感知？专家们会同意这样的说法。同样，《春光乍泄》的观众的性别和文化也很可能影响该观众对设计的体验。

文化和性别扩展了上一节讨论的对颜色的基本反应和联想，并使之复杂化。表2提供了一些基于文化和性别的色彩反应和联想的洞察力。正如你可以迅速推测的那样，特别是在像网络这样的世界性论坛上使用颜色，必须非常谨慎地考虑。

  <div style="text-align: center;margin-top:1rem;">

Table 2. Color and Influences of Culture and Gender

  Color    Influence
  -------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Red      In China, a symbol of profound good luck. When mixed with white, this intensifies. More women choose red over blue.
  Blue     The color of immortality in many Eastern countries, blue is the color of holiness for the Jews, and it represents Krishna in Hinduism. It is revered throughout the world and, as a result, is considered to be the most globally safe color. Men prefer blue to red.
  Green    Associated with money in the United States but not necessarily in other cultures. Green has strong emotional associations in Ireland, where it represents Irish Catholic nationalists. Women can identify more named hues of green than men.
  Orange   In the United States, a tradition in packaging design is to use orange to signify inexpensive items. When designing with orange for business sites, it's important to bear this in mind. Orange has strong emotional connotations for the Irish, as it represents Protestantism. Men prefer orange to yellow.
  Yellow   A sacred, imperial color in Asian cultures. Women prefer yellow to orange and associate it with warmth and optimism.
  Violet   Associated with mourning in Europe. It is also associated with newage and alternative religions, so it can be considered controversial. Violet is found relatively rarely in nature: a few species of flowers and some saltwater fish.
  Brown    A neutral color both culturally and gender-wise.
  Black    Mourning and death in most Western cultures and many others, too.
  White    Mourning and death in most Asian cultures. Purity and chastity in most of Western society.

  </div>

1.  网站调色板

当您为自己的项目构建调色板时，您需要将这些颜色问题牢记在心。除了了解你的信息，你还需要了解你的听众的期望，以便提出一系列的调色板来满足你的需求。

了解你的观众：

这是沟通的黄金法则。因为人类的心理、文化认知和性别都在如何感知颜色方面发挥作用，所以在确定配色方案之前，有必要了解你的听众。在某些情况下，颜色关联是如此广泛，以至于适合所有群体。

Before launching a design, it's a good idea to create a number of test\
palettes.

你甚至可以把它设置为可用性研究的一部分，在这个研究中，你给你的主题提供不同的配色方案，然后评估他们的反应。

1.  Color Options in CSS

-   颜色名\
-   16进制 \#223331\
-   rgb、rgba\
-   hsl、hsla

1.  Colorful Conclusions

无论你是出于个人还是专业原因进行设计，最好从理解你的信息和它所针对的受众开始。有了这些信息，你就更有可能做出颜色选择来增强你的信息。

春季是色彩设计的一个很好的例子，它完全符合设计的目标:\
表达从冬天到春天的过渡，给访问者带来一点平静的乐观，并确保这些情绪表达给全球观众，这是\
CSS 禅花园最肯定的。

### Viridity: Balancing pattern, texture, and contrast

<https://www.toptal.com/designers/colorfilter>

### Ballade: Using the imagination to create visual flow and guide the

eye

用 CSS 思考。

### Night Drive: Converting static site mock-ups to code, and solving

problems when doing so

Chapter 3. Layout
-----------------

四种 CSS 位置范式：absolute、static、relative、fixed。

绝对布局可以将元素从正常的文档流移除，放到任意位置。还有 CSS float\
这个东西。

-   Backyard: Understanding absolute positioning and floats\
-   Entomology: Centered layouts in contemporary Web design\
-   White Lily: Principles and process for designing effective layouts\
-   Prêt-à-porter: Exploring horizontal lines in a vertical world\
-   CS(S) Monk: Meaningful positioning and understanding the grid\
-   Not So Minimal: Dealing with common overflow problems

Chapter 4. Imagery
------------------

-   Japanese Garden: Understanding image formats and optimization\
     透明度的取舍\
-   Revolution!: Applying images with CSS\
-   Minimal imagery, maximum impact\
-   Breaking out of the box using rounded imagery\
-   Three-dimensional environments in two-dimensional form

Chapter 5. Typography
---------------------

简洁

font-sizing

排版设计中的优雅和庄重

Chapter 6. Special Effects
--------------------------

Chapter 7. Reconstruction
-------------------------

Closing Thoughts
----------------

### CSS Crib Sheet

-   <https://web.archive.org/web/20031202151935/http://www.mezzoblue.com/css/cribsheet/>\
-   HTML and CSS validators <https://validator.w3.org/> ，\
     <https://jigsaw.w3.org/css-validator/>\
-   Build and test your CSS in the most advanced browser available
    before\
     testing in others, not after\
-   When relying on floats for layouts, make sure they clear properly\
-   Margins collapse; apply padding or a border to avoid\
-   Try to avoid applying padding/borders and a specific width or
    height\
     to an element\
-   When in doubt, decrease percentage values\
-   Make sure your desired effect actually exists\
-   Test different font sizes

### Understand the Problem

\*Perhaps the most important piece of advice we can pass on is that\
understanding why a problem exists is the key to fixing it. This can\
only come from experience and time spent working with the code.\*

### CSS Design Web Sites

<http://css.maxdesign.com.au/>
