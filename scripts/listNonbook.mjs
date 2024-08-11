import fs from "node:fs/promises";
import config from "../.vitepress/config.js";

(async () => {
  try {
    const nonBookList = config.themeConfig.sidebar["/non-book/"]
      .map(
        ({ text, link }, index) =>
          // emojis https://www.emojitell.com/
          // 📄👍💯
          `${index + 1}. [:star: ${text}](${link})`,
      )
      .join("\n");

    const filePath = "src/non-book/index.md";
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
    )}\n${nonBookList}\n${data.slice(endIndexPos)}`;

    await fs.writeFile(filePath, updatedData, "utf8");

    console.log("Non-book list added to index.md successfully");
  } catch (err) {
    console.error(err);
  }
})();
