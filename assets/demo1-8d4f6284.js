const r=`<template>\r
  <div class="container">\r
    <l-textarea  \r
      :maxLength="110" \r
      :rows="10"\r
      :cols="50" \r
      v-model="value" \r
    />\r
    value：{{value}}\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
\r
const value = ref()\r
\r
<\/script>\r
\r
<style scoped>\r
.container {\r
  width: 250px;\r
}\r
</style>`;export{r as default};
