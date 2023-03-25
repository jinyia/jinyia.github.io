const e=`\r
<template>\r
  <l-datePicker v-model="dateVal" placeholder="请选择日期" type="year"> </l-datePicker>\r
</template>\r
\r
\r
<script setup>\r
import { ref } from "vue";\r
const dateVal = ref("");\r
<\/script>`;export{e as default};
