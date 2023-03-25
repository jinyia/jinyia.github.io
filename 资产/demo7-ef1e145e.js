const e=`<!-- html -->\r
<template>\r
  <l-datePicker\r
    v-model="dateVal"\r
    placeholder="请选择日期"\r
    :startDate="startDate"\r
    :endDate="endDate"\r
  >\r
  </l-datePicker>\r
</template>\r
\r
<!-- js -->\r
<script setup>\r
import { ref, computed } from "vue";\r
const dateVal = ref("");\r
const startDate = computed(() => {\r
  let date = new Date();\r
  return new Date(\r
    date.getFullYear(),\r
    date.getMonth(),\r
    date.getDate() - 10\r
  ).toLocaleDateString();\r
});\r
const endDate = computed(() => {\r
  let date = new Date();\r
  return new Date(\r
    date.getFullYear(),\r
    date.getMonth(),\r
    date.getDate() + 10\r
  ).toLocaleDateString();\r
});\r
<\/script>`;export{e as default};
