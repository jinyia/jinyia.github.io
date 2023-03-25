const e=`<template>\r
  <l-select\r
    v-model="selVal"\r
    placeholder="请选择"\r
    :options="selOptions"\r
    @change="selchange"\r
    multiple\r
  ></l-select>\r
</template>\r
\r
<script setup>\r
import { reactive, ref } from "vue";\r
const selVal = ref([]);\r
const state = reactive({\r
  selOptions: [\r
    { label: "PHP是世界上最好的语言", value: "PHP" },\r
    { label: "python才是最好的语言", value: "python" },\r
    { label: "Java天下第一", value: "Java" },\r
    { label: "C++说第二没人敢说第一", value: "C++" },\r
    { label: "你是ikun吗", value: "ikun" },\r
  ],\r
});\r
const selchange = (item, index) => {\r
  // 当前选中的值及index\r
  console.log(item, index);\r
};\r
const { selOptions } = state;\r
<\/script>`;export{e as default};
