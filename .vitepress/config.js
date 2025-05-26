import { defineConfig } from "vitepress";
import { sidebarBook } from "./sidebar.js";

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
    nav: [todaysReview()],
    search: {
      provider: "local",
    },
    sidebar: {
      "/": { base: "/", items: sidebarBook() },
    },
    editLink: {
      pattern: "https://github.com/tianheg/read/edit/main/src/:path",
      text: "Edit page",
    },
  },
});

function todaysReview() {
  const books = [...sidebarBook()].flatMap(({ items }) => items);
  const randomItem = getRandomItem(books);
  return {
    text: "随便看看",
    link: randomItem.link,
  };
}

function getRandomItem(items) {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}
