const r=`<template>\r
  <l-radio\r
    v-model="radioVal"\r
    :options="radioOptions"\r
    labelFiled="name"\r
    valueFiled="id"\r
  ></l-radio>\r
</template>\r
\r
<script setup>\r
import { reactive, ref } from "vue";\r
const radioVal = ref(1);\r
const state = reactive({\r
  radioOptions: [\r
    { name: "金克丝", id: 0 },\r
    { name: "拉克丝", id: 1 },\r
    { name: "霞", id: 2 },\r
    { name: "ikun", id: 3 },\r
  ],\r
});\r
const { radioOptions } = state;\r
<\/script>`;export{r as default};
