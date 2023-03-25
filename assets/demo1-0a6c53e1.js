const n=`<template>\r
    <l-button type="primary" @click="toggle">点击打开对话框</l-button>\r
    <l-dialog v-model="visible" />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const visible = ref(false);\r
\r
const toggle = () => {\r
    visible.value = !visible.value;\r
};\r
\r
const confirm = () => { };\r
\r
const cancel = () => { };\r
<\/script>`;export{n as default};
