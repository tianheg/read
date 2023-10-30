import { defineConfig } from "vitepress"
import { pagefindPlugin } from "vitepress-plugin-pagefind"

export default defineConfig({
  title: "书Book",
  titleTemplate: "📚",
  lang: "zh-CN",
  cleanUrls: true,

  themeConfig: {
    outline: [2, 3],
    sidebar:
    [
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
    ]
  },

  vite:{
    plugins:[pagefindPlugin({
      btnPlaceholder: "搜索",
      placeholder: "搜索文档",
      emptyText: "空空如也",
      heading: "共 {{searchResult}} 条结果",
      customSearchQuery(input){
        return input.replace(/[\u4e00-\u9fa5]/g, " $& ")
          .replace(/\s+/g," ")
          .trim()
      }
    })],
  }
})
