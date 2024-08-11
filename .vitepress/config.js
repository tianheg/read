import { defineConfig } from "vitepress";
import {
  chineseSearchOptimize,
  pagefindPlugin,
} from "vitepress-plugin-pagefind";

const sidebar = {
  "/": [
    {
      text: "软件开发+计算机科学",
      collapsed: true,
      items: [
        { text: "Eloquent JavaScript", link: "/eloquent-javascript", score: 5 },
        { text: "RESTful Best Practices", link: "/restful-best-practices" },
        { text: "Refactoring UI", link: "/refactoring-ui" },
        {
          text: "Resilient web design",
          link: "/resilient-web-design",
          score: "3",
        },
        {
          text: "CSS: The Definitive Guide",
          link: "/css-the-definitive-guide",
          score: "3",
        },
        { text: "CSS设计的禅意", link: "/the-zen-of-css-design", score: "4" },
        {
          text: "The Definitive Guide to HTML5",
          link: "/the-definitive-guide-html5",
          score: "3",
        },
        { text: "图解 HTTP", link: "/tujie-http" },
        { text: "如何成为一名程序员", link: "/how-to-be-a-programmer" },
        {
          text: "程序员修炼之道",
          link: "/the-pragmatic-programmer",
          score: "4",
        },
        { text: "MAKE：独立创客手册", link: "/make-the-indie-maker-handbook" },
        { text: "操作系统概念", link: "/operating-system-concepts" },
        { text: "操作系统导论", link: "/operating-system-three-easy-pieces" },
      ],
    },
    {
      text: "人物传记+随笔",
      collapsed: true,
      items: [
        { text: "创新者", link: "/the-innovators" },
        { text: "亲爱的三毛", link: "/qinaide-sanmao" },
        { text: "蒙田随笔全集", link: "/essays-montaigne" },
        {
          text: "美学、心理学和宗教信仰的演讲与对话集(1938—1946)",
          link: "/lectures-and-conversations-on-aesthetics-psychology-and-religious-belief",
        },
        { text: "只是为了好玩", link: "/just-for-fun" },
        { text: "史蒂夫·乔布斯传", link: "/steve-jobs" },
        { text: "黑客与画家", link: "/hackers-and-painters" },
        { text: "文化苦旅", link: "/wenhua-kulv" },
        { text: "借我一生", link: "/jiewo-yisheng" },
        { text: "朝花夕拾", link: "/zhaohua-xishi" },
        { text: "爱你就像爱生命", link: "/aini-jiuxiang-aishengming" },
        { text: "天生有罪", link: "/born-a-crime" },
        { text: "读书随想录", link: "/the-summing-up" },
        { text: "爱因斯坦自述", link: "/einstein-himself" },
        { text: "什锦拼盘", link: "/shijin-pinpan" },
        {
          text: "我生有涯愿无尽",
          link: "/wo-shengyouya-yuanwujin",
          score: "5",
        },
        { text: "时间之书", link: "/shijian-zhi-shu" },
        { text: "未来世界的幸存者", link: "/weilai-shijie-de-xingcunzhe" },
        { text: "看见", link: "/kanjian" },
        { text: "不迷茫手册", link: "/bumimang-shouce" },
      ],
    },
    {
      text: "社会科学",
      collapsed: true,
      items: [
        { text: "Techno Feudalism", link: "/techno-feudalism" },
        { text: "刘擎现代思想讲义", link: "/liuqing-xiandai-sixiang-jiangyi" },
        { text: "格（杂志）", link: "/ge-magazine", score: "1" },
        { text: "狂热分子", link: "/true-believer", score: "5" },
        { text: "心理学与生活", link: "/psychology-and-life" },
        { text: "哲学的故事", link: "/story-of-philosophy" },
        { text: "谈美", link: "/tan-mei" },
        { text: "社会心理学", link: "/social-psychology" },
        { text: "极简个性心理学", link: "/making-sence-of-people" },
        { text: "你的第一本哲学书", link: "/what-does-it-all-mean" },
      ],
    },
    {
      text: "自我成长+健康",
      collapsed: true,
      items: [
        { text: "你是你吃出来的", link: "/ni-shini-chichulai-de", score: "5" },
        { text: "癌症密码", link: "/cancer-code", score: "5" },
        { text: "人的自我寻求", link: "/mans-search-for-himself", score: "5" },
        { text: "芒格之道", link: "/tao-of-munger" },
        { text: "穷查理宝典", link: "/poor-charlies-almanack" },
        { text: "窗边的小豆豆", link: "/chuangbian-de-xiaodoudou" },
        {
          text: "高效能人士的七个习惯",
          link: "/the-7-habits-of-highly-effective-people",
        },
        { text: "如何阅读一本书", link: "/how-to-read-a-book" },
        { text: "那些忧伤的年轻人", link: "/naxie-youshangde-nianqingren" },
      ],
    },
    {
      text: "文学创作",
      collapsed: true,
      items: [
        { text: "永生的操练", link: "/divine-comedy-comment-by-canxue" },
        { text: "神曲", link: "/divine-comedy" },
        { text: "The Little Prince", link: "/the-little-prince", score: "5" },
        { text: "追忆似水年华", link: "/in-search-of-lost-time" },
        { text: "吉米·哈利索引", link: "/james-herriot" },
        { text: "哑舍", link: "/yashe" },
        { text: "挽救计划", link: "/project-hail-mary" },
        { text: "小偷家族", link: "/xiaotou-jiazu" },
        { text: "献给阿尔吉侬的花束", link: "/flowers-for-algernon" },
        { text: "索拉里斯星", link: "/solaris" },
        { text: "以鸟兽之名", link: "/yiniaoshou-zhi-ming" },
        { text: "寂寞的游戏", link: "/jimo-de-youxi" },
        { text: "钢铁是怎样炼成的", link: "/how-the-steel-was-tempered" },
        { text: "阿西莫夫索引", link: "/asimov" },
        { text: "查拉图斯特拉如是说", link: "/thus-spoke-zarathustra" },
        { text: "道德经", link: "/dao-de-jing" },
        { text: "一九八四", link: "/nineteen-eighty-four" },
        { text: "心经", link: "/xinjing" },
        { text: "醉步男", link: "/zui-bu-nan" },
        { text: "看海的人", link: "/kanhaide-ren" },
        { text: "毛姆索引", link: "/maugham" },
        { text: "牧羊少年奇幻之旅", link: "/o-alquimista" },
        { text: "克拉拉与太阳", link: "/klara-and-the-sun" },
        { text: "雪崩", link: "/snow-crash" },
        { text: "拉多之星", link: "/la-duo-zhi-xing" },
        { text: "刘慈欣索引", link: "/liucixin" },
        { text: "过于喧嚣的孤独", link: "/too-loud-a-solitude" },
        { text: "遥远的救世主", link: "/yaoyuande-jiushizhu" },
        { text: "网络小说", link: "/wangluo-novels" },
      ],
    },
  ],
  "/non-book/": [
    {
      text: "Building Programmable Web Sites",
      link: "/non-book/building-programmable-web-sites",
    },
    {
      text: "Art is useless, and so am I",
      link: "/non-book/art-is-usefull-so-am-i",
    },
    {
      text: "全面理解机器智能与生成式AI加速的新工业革命",
      link: "/non-book/understanding-genai-and-the-new-industrial-revolution",
    },
    {
      text: "Hacker News Guidelines",
      link: "/non-book/hacker-news-guidelines",
    },
    {
      text: "王小伟：一个哲学视角的日常审查",
      link: "/non-book/wang-xiaowei-zhexue-richang-shencha",
    },
    {
      text: "So you sucks, now what?",
      link: "/non-book/so-you-sucks-now-what",
    },
    {
      text: "You're a shit",
      link: "/non-book/you-re-a-shit",
    },
    {
      text: "How To Learn Stuff Quickly",
      link: "/non-book/how-to-learn-stuff-quickly",
    },
    {
      text: "Write for others but mostly for yourself",
      link: "/non-book/write-for-others-but-mostly-for-yourself",
    },
    {
      text: "Let's learn how modern JavaScript frameworks work by building one",
      link: "/non-book/lets-learn-how-modern-javascript-frameworks-work-by-building-one",
    },
    {
      text: "History of Psychology",
      link: "/non-book/history-of-psychology",
    },
  ],
};

export default defineConfig({
  title: "书Book",
  titleTemplate: "📚",
  description: "一生所读，尽皆于此",
  lang: "zh",
  head: [["link", { rel: "icon", href: "/favicon.svg" }]],
  cleanUrls: true,
  srcDir: "src",
  lastUpdated: true,
  sitemap: {
    hostname: "https://read.tianheg.org",
  },
  metaChunk: true,

  themeConfig: {
    outline: [2, 3],
    nav: [
      todaysReview(),
      { text: "Book", link: "/" },
      { text: "Non-book", link: "/non-book/", activeMatch: "/non-book/" },
    ],
    sidebar: sidebar,
    editLink: {
      pattern: "https://github.com/tianheg/read/edit/main/src/:path",
      text: "Edit page",
    },
  },
  vite: {
    plugins: [
      pagefindPlugin({
        btnPlaceholder: "搜索",
        placeholder: "搜索文档",
        emptyText: "空空如也",
        heading: "共: {{searchResult}} 条结果",
        customSearchQuery: chineseSearchOptimize,
      }),
    ],
  },
});

function todaysReview() {
  const keys = Object.keys(sidebar);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  const randomIndex = Math.floor(Math.random() * sidebar[randomKey].length);
  const randomItem = sidebar[randomKey][randomIndex];

  if (randomItem) {
    return {
      text: randomItem.text,
      link: randomItem.link,
    };
  }
}
