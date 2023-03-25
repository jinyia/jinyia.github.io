const n=`<!-- html -->\r
<template>\r
  <div class="setstyle">\r
    <l-dropdown title="下拉菜单" :options="dorpoptions">\r
      <template #Img>\r
        <img src="https://q1.qlogo.cn/g?b=qq&nk=(2827459285)&s=640" alt="" />\r
      </template>\r
    </l-dropdown>\r
\r
    <l-dropdown\r
      title="下拉菜单"\r
      :options="dorpoptions"\r
      @change="dropchange"\r
      size="small"\r
    >\r
      <template #Img>\r
        <img src="https://q1.qlogo.cn/g?b=qq&nk=(2827459286)&s=640" alt="" />\r
      </template>\r
    </l-dropdown>\r
\r
    <l-dropdown\r
      title="下拉菜单"\r
      :options="dorpoptions"\r
      @change="dropchange"\r
      size="mini"\r
    >\r
      <template #Img>\r
        <img src="https://p.qlogo.cn/gh/(877277040)/(877277040)/640/" alt="" />\r
      </template>\r
    </l-dropdown>\r
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
const { dorpoptions } = state;\r
\r
const dropchange = (e) => {\r
  console.log(e)\r
}\r
<\/script>\r
\r
<style scoped>\r
.setstyle{\r
  display: flex;\r
  justify-content:space-between;\r
  align-items: center;\r
  width: 400px;\r
}\r
</style>`;export{n as default};
