const e=`<template>\r
  <l-select\r
    v-model="selVal"\r
    placeholder="请选择"\r
    :options="selOptions"\r
    labelFiled="cityName"\r
    valueFiled="cityCode"\r
    @change="selchange"\r
  ></l-select>\r
</template>\r
\r
<script setup>\r
import { reactive, ref } from "vue";\r
const selVal = ref("111");\r
const state = reactive({\r
  selOptions: [\r
    { cityName: "北京", cityCode: "111" },\r
    { cityName: "上海", cityCode: "222" },\r
    { cityName: "广州", cityCode: "333", disabled: true },\r
    { cityName: "深圳", cityCode: "444" },\r
    { cityName: "成都", cityCode: "555" },\r
    { cityName: "我不是小黑子", cityCode: "666"}\r
  ],\r
});\r
const selchange = (item, index) => {\r
  console.log(item, index);\r
};\r
const { selOptions } = state;\r
<\/script>`;export{e as default};
