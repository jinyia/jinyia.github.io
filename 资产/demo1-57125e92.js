const n=`<template>\r
  <l-switch v-model="switchVal" @change="switchChange"></l-switch>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const switchVal = ref(false);\r
const switchChange = (e) => {\r
  console.log(e);\r
};\r
\r
<\/script>`;export{n as default};
