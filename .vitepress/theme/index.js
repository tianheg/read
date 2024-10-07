// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import CustomLayout from "./CustomLayout.vue";
import SingleFeed from "./components/SingleFeed.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  Layout: CustomLayout,

  enhanceApp({ app }) {
    app.component("SingleFeed", SingleFeed);
  },
};
