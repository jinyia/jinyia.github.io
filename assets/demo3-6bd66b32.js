const t=`<template>\r
  <l-switch v-model="switchVal" :showTipsText="true"></l-switch>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const switchVal = ref(false);\r
\r
<\/script>`;export{t as default};
