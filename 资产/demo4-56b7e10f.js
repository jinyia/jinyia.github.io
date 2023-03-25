const r=`<!-- html -->\r
<template>\r
  <div class="setstyle">\r
    <l-dropdown title="hover唤醒" :options="dorpoptions"></l-dropdown>\r
    <l-dropdown\r
      title="click唤醒"\r
      :options="dorpoptions"\r
      trigger="click"\r
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
const { dorpoptions } = state;\r
<\/script>\r
\r
<style>\r
.setstyle{\r
  display: flex;\r
  justify-content:space-between;\r
  align-items: center;\r
  width: 200px;\r
}\r
</style>`;export{r as default};
