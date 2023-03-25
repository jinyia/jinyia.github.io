const r=`<template>\r
\r
    <l-radio v-model="radioVal" :options="radioOptions" customColor="#25B0F8"></l-radio>\r
    <l-radio v-model="radioVal" :options="radioOptions" size="small" customColor="#959595"></l-radio>\r
    <l-radio v-model="radioVal" :options="radioOptions" size="mini"></l-radio>\r
\r
</template>\r
\r
<script setup>\r
import { reactive, ref } from "vue";\r
const radioVal = ref("js");\r
const state = reactive({\r
  radioOptions: [\r
    { label: "java编程", value: "java" },\r
    { label: "js编程", value: "js" },\r
    { label: "php编程", value: "php" },\r
    { label: "python编程", value: "python" },\r
  ],\r
});\r
const { radioOptions } = state;\r
<\/script>`;export{r as default};
