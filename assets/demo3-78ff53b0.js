const e=`\r
<template>\r
    <l-datePicker class="item" v-model="dateVal" placeholder="请选择日期" size="small"> </l-datePicker>\r
    <l-datePicker class="item" v-model="dateVal" placeholder="请选择日期" size="medium"> </l-datePicker>\r
    <l-datePicker class="item" v-model="dateVal" placeholder="请选择日期" size="large"> </l-datePicker>\r
</template>\r
\r
\r
<script setup>\r
import { ref } from "vue";\r
const dateVal = ref("");\r
<\/script>\r
\r
<style scoped>\r
.item {\r
  margin-right: 50px;\r
}\r
</style>`;export{e as default};
