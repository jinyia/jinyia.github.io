const n=`<template>\r
  <div class="container">\r
    <l-input \r
    v-model="Val" \r
    placeholder="请输入密碼"\r
    clearable\r
    @clear="clearHandle"\r
    @change="handleChange"\r
    />\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const Val = ref('clear inputValue')\r
\r
//clear事件\r
const clearHandle = (e) => {\r
  console.log(Val.value, e)\r
}\r
\r
const handleChange = (e) => {\r
  console.log(e.target.value)\r
}\r
\r
<\/script>\r
\r
<style scoped>\r
.container {\r
  width: 250px;\r
}\r
</style>`;export{n as default};
