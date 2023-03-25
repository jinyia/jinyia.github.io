const n=`<!-- html -->\r
<template>\r
  <l-dropdown\r
    title="下拉菜单"\r
    :options="dorpoptions"\r
    @change="dropchange"\r
  ></l-dropdown>\r
</template>\r
\r
<!-- js -->\r
<script setup>\r
import { reactive } from "vue";\r
const state = reactive({\r
  dorpoptions: [\r
    { label: "菜单1" },\r
    { label: "菜单2" },\r
    { label: "菜单3" },\r
    { label: "菜单4" },\r
    { label: "菜单5" },\r
  ],\r
});\r
const dropchange = (item, index) => {\r
  console.log(item, index);\r
};\r
const { dorpoptions } = state;\r
<\/script>`;export{n as default};
