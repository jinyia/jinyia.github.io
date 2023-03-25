const r=`<template>\r
  <l-radio\r
    v-model="radioVal"\r
    :options="radioOptions"\r
    @change="radioChange"\r
  ></l-radio>\r
</template>\r
\r
<script setup>\r
import { reactive, ref } from "vue";\r
const radioVal = ref("python");\r
const state = reactive({\r
  radioOptions: [\r
    { label: "java编程", value: "java" },\r
    { label: "js编程", value: "js" },\r
    { label: "php编程", value: "php" },\r
    { label: "python编程", value: "python" },\r
  ],\r
});\r
const radioChange = (e) => {\r
  console.log(e.value, e.index);\r
};\r
const { radioOptions } = state;\r
<\/script>`;export{r as default};
