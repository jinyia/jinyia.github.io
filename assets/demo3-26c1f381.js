const n=`<template>\r
  <div class="container">\r
    <l-textarea  \r
      @input="input"\r
      @blur="handleBlur"\r
      @focus="handleFocus"\r
      @change="handleChange"\r
    />\r
    {{value}}\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
\r
const value = ref()\r
\r
const handleBlur = (e) => {\r
  console.log('blur事件触发', e)\r
}\r
\r
const input = (e) => {\r
  console.log('input事件触发', e)\r
\r
}\r
\r
const handleFocus = (e) => {\r
  console.log('focus事件触发', e)\r
}\r
\r
const handleChange = (e) => {\r
  console.log('change事件触发', e)\r
}\r
\r
<\/script>\r
\r
<style scoped>\r
.container {\r
  width: 250px;\r
}\r
</style>`;export{n as default};
