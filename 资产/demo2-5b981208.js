const r=`<template>\r
    <l-button type="primary" @click="toggle">点击打开对话框</l-button>\r
    <l-dialog v-model="visible" :overlay-closable="false" @onOverlayClick="onOverlayClick">\r
        此时点击遮罩无法取消。\r
    </l-dialog>\r
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
const onOverlayClick = () => {\r
\r
};\r
<\/script>\r
`;export{r as default};
