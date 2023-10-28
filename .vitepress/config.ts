import { defineConfig } from "vitepress"

export default defineConfig({
  title: "书Book",
  titleTemplate: "📚",
  lang: "zh-CN",
  cleanUrls: true,

  themeConfig: {
    search: {
      provider: "local"
    },
    
    sidebar:
    [
      {
        text: "2020",
        collapsed: true,
        items: [
          { text: "什锦拼盘", link: "/2020/shijin-pinpan" },
          { text: "拉多之星", link: "/2020/la-duo-zhi-xing" },
          { text: "我生有涯愿无尽：梁漱溟自述文录", link: "/2020/wo-shengyouya-yuanwujin" },
          { text: "时间之书", link: "/2020/shijian-zhi-shu" },
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
    ]
  },
})
