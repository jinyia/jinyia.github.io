const n=`<!-- html -->\r
<template>\r
  <div class="setstyle">\r
    <l-dropdown title="默认大小" :options="dorpoptions"></l-dropdown>\r
    <l-dropdown\r
      title="小一点的"\r
      :options="dorpoptions"\r
      size="small"\r
    ></l-dropdown>\r
    <l-dropdown\r
      title="更小点的"\r
      :options="dorpoptions"\r
      size="mini"\r
    ></l-dropdown>\r
  </div>\r
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
<\/script>\r
\r
<style scoped>\r
.setstyle{\r
  display: flex;\r
  justify-content:space-between;\r
  align-items: center;\r
  width: 300px;\r
}\r
</style>`;export{n as default};
