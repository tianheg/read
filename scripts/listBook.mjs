import fs from "node:fs/promises";
import { sidebarBook } from "../.vitepress/sidebar.js";

(async () => {
  try {
    const bookList = sidebarBook()
      .map(
        ({ text, items }) =>
          `- ${text}\n${items ? items.map(({ text, link, score }) => `  - [${":+1:".repeat(score)}${text}](${link})`).join("\n") : ""}`,
        // ({ text, link, score }) =>
        //   `- [${":+1:".repeat(score)}${text}](${link})`,
      )
      .join("\n");

    const filePath = "src/index.md";
    const startIndex = "<!-- index start -->";
    const endIndex = "<!-- index end -->";

    const data = await fs.readFile(filePath, "utf8");

    const startIndexPos = data.indexOf(startIndex);
    const endIndexPos = data.indexOf(endIndex);

    if (startIndexPos === -1 || endIndexPos === -1) {
      throw new Error("Start or end index not found in the file");
    }

    const updatedData = `${data.slice(
      0,
      startIndexPos + startIndex.length,
    )}\n${bookList}\n${data.slice(endIndexPos)}`;

    await fs.writeFile(filePath, updatedData, "utf8");

    console.log("Book list added to index.md successfully");
  } catch (err) {
    console.error(err);
  }
})();
