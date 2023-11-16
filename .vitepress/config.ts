import { defineConfig } from "vitepress"
import { SearchPlugin } from "vitepress-plugin-search"

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
        text: "2023",
        collapsed: false,
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
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://vitepress.dev/guide/what-is-vitepress" },
    ]
  },
  vite: {
    plugins: [SearchPlugin({
      previewLength: 62,
      buttonLabel: "Search",
      placeholder: "Search...",
      allow: [],
      ignore: [],
      encode: false,
      tokenize: "full"
    })]
  }
})
