const n=`<template>\r
  <div class="container">\r
    <l-input v-model="Val"  showpwd  @input="input"/>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const Val = ref()\r
\r
const input = (e) => {\r
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
