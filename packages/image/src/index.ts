import App from "./index.vue";
import "./index.css";
export default {
  render: App,
  editorProps: {
    src: {
      type: "string",
      defaultValue: "",
      label: "图片路径",
    },
    width: {
      type: "string",
      defaultValue: "100px",
      label: "宽",
    },
    height: {
      type: "string",
      defaultValue: "100px",
      label: "高",
    },
  },
};
