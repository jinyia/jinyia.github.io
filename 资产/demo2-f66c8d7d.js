const r=`<template>\r
  <l-radio v-model="radioVal" :options="radioOptions"></l-radio>\r
</template>\r
\r
\r
<script setup>\r
import { reactive, ref } from "vue";\r
const radioVal = ref("php");\r
const state = reactive({\r
  radioOptions: [\r
    { label: "java编程", value: "java" },\r
    { label: "js编程", value: "js", disabled: true },\r
    { label: "php编程", value: "php" },\r
    { label: "python编程", value: "python", disabled: true },\r
  ],\r
});\r
const { radioOptions } = state;\r
<\/script>`;export{r as default};
