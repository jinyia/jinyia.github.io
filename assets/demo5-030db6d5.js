const n=`<template>\r
  <div class="container">\r
    <l-input \r
    v-model="Val" \r
    :maxLength="10"\r
    />\r
    <br>\r
    <div class="inputValue">\r
      value：{{Val}}\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const Val = ref()\r
\r
\r
<\/script>\r
\r
<style scoped>\r
.container {\r
  width: 250px;\r
}\r
.inputValue{\r
  margin-top: 10px;\r
}\r
</style>`;export{n as default};
