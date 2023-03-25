const e=`\r
<template>\r
  <l-datePicker v-model="dateVal" @change="dateChange" placeholder="请选择日期"></l-datePicker>\r
</template>\r
\r
\r
<script setup>\r
import { ref } from 'vue'\r
const dateVal = ref('')\r
const dateChange = (e) => {\r
  console.log(e)\r
}\r
<\/script>\r
`;export{e as default};
