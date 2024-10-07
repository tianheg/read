import { defineConfig } from "vitepress";
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
    search: {
      provider: "local",
    },
    sidebar: {
      "/": { base: "/", items: sidebarBook() },
      "/non-book/": { base: "/non-book/", items: sidebarNonBook() },
    },
    editLink: {
      pattern: "https://github.com/tianheg/read/edit/main/src/:path",
      text: "Edit page",
    },
  },
});

function todaysReview() {
  const today = new Date();
  const dateNum = today.getDate();

  let randomItem;

  if (dateNum % 2 === 0) {
    const books = [...sidebarBook()].flatMap(({ items }) => items);
    randomItem = getRandomItem(books);
  } else {
    const nonBooks = [...sidebarNonBook()];
    randomItem = getRandomItem(nonBooks);
    return {
      text: randomItem.text,
      link: `/non-book/${randomItem.link}`,
    };
  }

  return {
    text: randomItem.text,
    link: link,
  };
}

function getRandomItem(items) {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}
