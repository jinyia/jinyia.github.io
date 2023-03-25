const r=`<template>\r
\r
    <l-datePicker\r
      v-model="dateVal"\r
      placeholder="请选择日期"\r
      format="yyyy年MM月dd日"\r
    ></l-datePicker>\r
    <l-datePicker\r
      v-model="dateVal"\r
      placeholder="请选择日期"\r
      format="yyyy/MM/dd"\r
    ></l-datePicker>\r
    <l-datePicker\r
      v-model="dateVal"\r
      placeholder="请选择日期"\r
      format="yyyy-MM-dd"\r
    ></l-datePicker>\r
\r
</template>\r
\r
\r
<script setup>\r
import { ref } from "vue";\r
const dateVal = ref("");\r
<\/script>`;export{r as default};
