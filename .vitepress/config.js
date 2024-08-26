import { defineConfig } from "vitepress";
import {
  chineseSearchOptimize,
  pagefindPlugin,
} from "vitepress-plugin-pagefind";
import { sidebarBook, sidebarNonBook } from "./sidebar.js";

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
    sidebar: {
      "/": { base: "/", items: sidebarBook() },
      "/non-book/": { base: "/non-book/", items: sidebarNonBook() },
    },
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
  const books = [...sidebarBook()].flatMap(({ items }) => items);
  const nonBooks = [...sidebarNonBook()];
  const all = [...books, ...nonBooks];

  return {
    text: getRandomItem(all).text,
    link: getRandomItem(all).link,
  };
}

function getRandomItem(items) {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}
