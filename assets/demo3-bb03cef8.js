const r=`<template>\r
    <l-button type="primary" @click="toggle">点击打开对话框</l-button>\r
</template>\r
\r
<script setup lang="ts">\r
import { openDialog } from "../ldialog"; //此处引入的是本地示例对话框组件\r
const toggle = () => {\r
    openDialog({\r
        overlay: true,\r
        overlayClosable: true,\r
        title: () => "我是标题",\r
        content: () => "我是内容",\r
        confirm: () => { },\r
        cancel: () => { },\r
    });\r
};\r
<\/script>`;export{r as default};
