// .vitepress/theme/index.js
import DefaultTheme from "vitepress/theme";
import CustomLayout from "./CustomLayout.vue";
import "./custom.css";

export default {
  extends: DefaultTheme,
  Layout: CustomLayout,
};
