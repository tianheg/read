import { defineConfig } from "vitepress"

export default defineConfig({
  title: "书Book",
  titleTemplate: "📚",
  description: "一生所读，尽皆于此",
  lang: "zh-CN",
  head: [["link", { rel: "icon", href: "/favicon.svg" }]],
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    outline: [2, 3],
    sidebar:
    [
      {
        text: "2024",
        collapsed: false,
        items: [
          { text: "狼书Node.js", link: "/2024/langshu-nodejs" }
        ]
      },
      {
        text: "2023",
        collapsed: true,
        items: [
          { text: "面纱", link: "/2023/the-painted-veil" },
          { text: "月亮与六便士", link: "/2023/the-moon-and-sixpence" },
          { text: "红楼梦", link: "/2023/honglou-meng" },
          { text: "学会如何学习", link: "/2023/learning-how-to-learn" },
          { text: "人的自我寻求", link: "/2023/mans-search-for-himself" },
          { text: "幸福的方法", link: "/2023/happier" },
          { text: "穷查理宝典", link: "/2023/poor-charlies-almanack" },
          { text: "玄幻小说", link: "/2023/xuanhuan" },
          { text: "哑舍", link: "/2023/yashe" },
        ]
      },
      {
        text: "2022",
        collapsed: true,
        items: [
          { text: "狂热分子", link: "/2022/true-believer" },
          { text: "操作系统概念", link: "/2022/operating-system-concepts" },
          { text: "操作系统导论", link: "/2022/operating-system-three-easy-pieces" },
          { text: "文化苦旅", link: "/2022/wenhua-kulv" },
          { text: "挽救计划", link: "/2022/project-hail-mary" },
          { text: "小偷家族", link: "/2022/shoplifters" },
          { text: "献给阿尔吉侬的花束", link: "/2022/flowers-for-algernon" },
          { text: "只是为了好玩", link: "/2022/just-for-fun" },
          { text: "索拉里斯星", link: "/2022/solaris" },
          { text: "以鸟兽之名", link: "/2022/yiniaoshou-zhi-ming" },
          { text: "寂寞的游戏", link: "/2022/jimo-de-youxi" },
          { text: "钢铁是怎样炼成的", link: "/2022/how-the-steel-was-tempered" },
          { text: "心理学与生活", link: "/2022/psychology-and-life" },
          { text: "哲学的故事", link: "/2022/story-of-philosophy" },
          { text: "CSS设计的禅意", link: "/2022/the-zen-of-css-design" },
          { text: "窗边的小豆豆", link: "/2022/chuangbian-de-xiaodoudou" },
          { text: "张春桥：1949及以后", link: "/2022/zhang-chunqiao-1949-jiyihou" },
        ]
      },
      {
        text: "2021",
        collapsed: true,
        items: [
          { text: "高效能人士的七个习惯", link: "/2021/the-7-habits-of-highly-effective-people" },
          { text: "阿西莫夫索引", link: "/2021/asimov" },
          { text: "如何阅读一本书", link: "/2021/how-to-read-a-book" },
          { text: "史蒂夫·乔布斯传", link: "/2021/steve-jobs" },
          { text: "黑客与画家", link: "/2021/hackers-and-painters" },
          { text: "如何成为一名程序员", link: "/2021/how-to-be-a-programmer" },
          { text: "谈美", link: "/2021/tan-mei" },
          { text: "那些忧伤的年轻人", link: "/2021/naxie-youshangde-nianqingren" },
          { text: "查拉图斯特拉如是说", link: "/2021/thus-spoke-zarathustra" },
          { text: "社会心理学", link: "/2021/social-psychology-book" },
          { text: "神曲", link: "/2021/divine-comedy" },
          { text: "道德经", link: "/2021/dao-de-jing" },
          { text: "借我一生", link: "/2021/jiewo-yisheng" },
          { text: "心经", link: "/2021/xinjing" },
          { text: "SICP(JS ver.)", link: "/2021/sicpjs" },
          { text: "醉步男", link: "/2021/zui-bu-nan" },
          { text: "看海的人", link: "/2021/kanhaide-ren" },
          { text: "朝花夕拾", link: "/2021/zhaohua-xishi" },
          { text: "人性的枷锁", link: "/2021/of-human-bondage" },
          { text: "刀锋", link: "/2021/the-razors-edge" },
          { text: "图解HTTP", link: "/2021/tujie-http" },
          { text: "寻欢作乐", link: "/2021/cakes-and-ale" },
          { text: "爱你就像爱生命", link: "/2021/aini-jiuxiang-aishengming" },
          { text: "天生有罪", link: "/2021/born-a-crime" },
          { text: "Web开发JS专业指南", link: "/2021/professional-javascript-for-web-developers" },
          { text: "读书随想录", link: "/2021/the-summing-up" },
          { text: "雪崩", link: "/2021/snow-crash" },
          { text: "极简个性心理学", link: "/2021/making-sence-of-people" },
          { text: "牧羊少年奇幻之旅", link: "/2021/o-alquimista" },
          { text: "爱因斯坦自述", link: "/2021/einstein-himself" },
          { text: "克拉拉与太阳", link: "/2021/klara-and-the-sun" },
        ]
      },
      {
        text: "2020",
        collapsed: true,
        items: [
          { text: "什锦拼盘", link: "/2020/shijin-pinpan" },
          { text: "拉多之星", link: "/2020/la-duo-zhi-xing" },
          { text: "我生有涯愿无尽：梁漱溟自述文录", link: "/2020/wo-shengyouya-yuanwujin" },
          { text: "时间之书", link: "/2020/shijian-zhi-shu" },
          { text: "未来世界的幸存者", link: "/2020/weilai-shijie-de-xingcunzhe" },
          { text: "三体", link: "/2020/santi" },
          { text: "程序员修炼之道", link: "/2020/the-pragmatic-programmer" },
          { text: "一九八四", link: "/2020/nineteen-eighty-four" },
        ]
      },
      {
        text: "2019",
        collapsed: true,
        items: [
          { text: "看见", link: "/2019/kanjian" },
          { text: "不迷茫手册", link: "/2019/bumimang-shouce" },
          { text: "恍惚人间", link: "/2019/huanghu-renjian" },
          { text: "过于喧嚣的孤独", link: "/2019/too-loud-a-solitude" },
          { text: "你的第一本哲学书", link: "/2019/what-does-it-all-mean" },
          { text: "遥远的救世主", link: "/2019/yaoyuande-jiushizhu" },
        ]
      },
      { text: "金句X", link: "/x-twitter" }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/tianheg/read" },
      { icon: { svg: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"32\" height=\"32\" viewBox=\"0 0 32 32\"><g fill=\"none\"><path fill=\"url(#vscodeIconsFileTypeVite0)\" d=\"m29.884 6.146l-13.142 23.5a.714.714 0 0 1-1.244.005L2.096 6.148a.714.714 0 0 1 .746-1.057l13.156 2.352a.714.714 0 0 0 .253 0l12.881-2.348a.714.714 0 0 1 .752 1.05z\"/><path fill=\"url(#vscodeIconsFileTypeVite1)\" d=\"M22.264 2.007L12.54 3.912a.357.357 0 0 0-.288.33l-.598 10.104a.357.357 0 0 0 .437.369l2.707-.625a.357.357 0 0 1 .43.42l-.804 3.939a.357.357 0 0 0 .454.413l1.672-.508a.357.357 0 0 1 .454.414l-1.279 6.187c-.08.387.435.598.65.267l.143-.222l7.925-15.815a.357.357 0 0 0-.387-.51l-2.787.537a.357.357 0 0 1-.41-.45l1.818-6.306a.357.357 0 0 0-.412-.45\"/><defs><linearGradient id=\"vscodeIconsFileTypeVite0\" x1=\"6\" x2=\"235\" y1=\"33\" y2=\"344\" gradientTransform=\"translate(1.34 1.894)scale(.07142)\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#41D1FF\"/><stop offset=\"1\" stop-color=\"#BD34FE\"/></linearGradient><linearGradient id=\"vscodeIconsFileTypeVite1\" x1=\"194.651\" x2=\"236.076\" y1=\"8.818\" y2=\"292.989\" gradientTransform=\"translate(1.34 1.894)scale(.07142)\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#FFEA83\"/><stop offset=\".083\" stop-color=\"#FFDD35\"/><stop offset=\"1\" stop-color=\"#FFA800\"/></linearGradient></defs></g></svg>" } , link: "https://vitepress.dev/guide/getting-started", ariaLabel: "VitePress Getting Started" }
    ]
  }
})
