const e=`<template>\r
    <l-select\r
      class="l-select"\r
      v-model="selVal1"\r
      placeholder="默认大小"\r
      :options="selOptions"\r
    ></l-select>\r
    <br>\r
    <l-select\r
      class="l-select"\r
      v-model="selVal1"\r
      placeholder="小一点的"\r
      :options="selOptions"\r
      size="small"\r
    ></l-select>\r
    <br>\r
    <l-select\r
      class="l-select"\r
      v-model="selVal1"\r
      placeholder="mini型的"\r
      :options="selOptions"\r
      size="mini"\r
    ></l-select>\r
</template>\r
\r
<script setup>\r
import { reactive, ref } from "vue";\r
const selVal1 = ref("");\r
const state = reactive({\r
  selOptions: [\r
    { label: "PHP是世界上最好的语言", value: "PHP" },\r
    { label: "python才是最好的语言", value: "python" },\r
    { label: "Java天下第一", value: "Java" },\r
    { label: "C++说第二没人敢说第一", value: "C++" },\r
    { label: "你是ikun吗", value: "ikun" },\r
  ],\r
});\r
const { selOptions } = state;\r
<\/script>\r
\r
<style>\r
l-select {\r
  margin-top: 30px;\r
}\r
\r
</style>`;export{e as default};
