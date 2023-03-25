const e=`<template>\r
  <l-select\r
    v-model="selVal"\r
    placeholder="可搜索"\r
    :options="selOptions"\r
    searchable\r
  ></l-select>\r
</template>\r
\r
<script setup>\r
import { reactive, ref } from "vue";\r
const selVal = ref("");\r
const state = reactive({\r
  selOptions: [\r
    { label: "php", value: "php" },\r
    { label: "Node", value: "Node" },\r
    { label: "CSS", value: "CSS" },\r
    { label: "javascript", value: "javascript" },\r
    { label: "element-ui", value: "element-ui" },\r
    { label: "ant", value: "ant" },\r
    { label: "Npm", value: "Npm" },\r
    { label: "HTML", value: "HTML", disabled: true },\r
    { label: "java", value: "java" },\r
    { label: "XML", value: "XML" },\r
    { label: "pnpm", value: "pnpm" },\r
  ],\r
});\r
const { selOptions } = state;\r
<\/script>`;export{e as default};
