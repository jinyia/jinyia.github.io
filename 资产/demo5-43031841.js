const r=`<template>\r
  <l-switch\r
    v-model="switchVal"\r
    :showTipsText="true"\r
    closeColor="#bc3457"\r
    activeColor="#45d426"\r
  ></l-switch>\r
</template>\r
\r
\r
<script setup lang="ts">\r
\r
import { ref } from "vue";\r
const switchVal = ref(false);\r
\r
<\/script>`;export{r as default};
