import { IMaterial } from "@lcd1024/shared";

export const materialList: IMaterial[] = [
  {
    id: 1,
    mid: 1,
    name: "@lcd1024/image",
    title: "图片组件1",
    thumbnail: "/demo.jpeg",
    type: "component",
    version: "1.0.0",
    source: "/image.0.0.2.umd.js",
    category: {
      name: "图片",
    },
    data: [
      {
        version: "1.0.0",
        source: "/image.0.0.2.umd.js",
      },
    ],
  },
  {
    id: 2,
    mid: 2,
    name: "@lcd1024/title",
    title: "标题组件",
    thumbnail: "/demo.jpeg",
    type: "component",
    version: "1.0.0",
    source: "/title.0.0.1.umd.js",
    category: {
      name: "图片",
    },
    data: [
      {
        version: "1.0.0",
        source: "/title.0.0.1.umd.js",
      },
    ],
  },
];

export const materialMap: { [key: string]: IMaterial } = materialList.reduce(
  (pre, item) => {
    pre[item.id] = item;
    return pre;
  },
  {}
);
export function getMaterialEditorProps(material: IMaterial) {
  return (window as any)[material.name].editorProps;
}
export function getMaterialRenderFun(material: IMaterial) {
  return (window as any)[material.name].render;
}
export function getMaterialDefaultProps(material: IMaterial) {
  const props = getMaterialEditorProps(material);
  return Object.keys(props).reduce((pre, key) => {
    pre[key] = props[key].defaultValue;
    return pre;
  }, {});
}
