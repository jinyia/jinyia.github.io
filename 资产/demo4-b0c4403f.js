const t=`\r
<template>\r
  <l-switch v-model="switchVal" closeText="关闭" activeText="开启"></l-switch>\r
  <l-switch\r
    v-model="switchVal1"\r
    closeText="关闭"\r
    activeText="开启"\r
    textAlign="right"\r
  ></l-switch>\r
</template>\r
\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const switchVal = ref(true);\r
const switchVal1 = ref(true);\r
\r
<\/script>`;export{t as default};
