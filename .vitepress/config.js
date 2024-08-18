import { defineConfig } from "vitepress";
import {
  chineseSearchOptimize,
  pagefindPlugin,
} from "vitepress-plugin-pagefind";
import sidebar from "./sidebar.js";

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
