const r=`<!-- html -->\r
<template>\r
  <l-button @click="openDrawer" type="primary">基本使用</l-button>\r
  <l-drawer\r
    v-model="drawerShow"\r
    title="基本使用"\r
    @confirm="confirmFn"\r
    @cancel="cancelFn"\r
  >\r
    <template #content>\r
      <div>这是内容区域...</div>\r
      <div>这是内容区域...</div>\r
      <div>这是内容区域...</div>\r
    </template>\r
  </l-drawer>\r
</template>\r
\r
<!-- js -->\r
<script setup>\r
import { ref } from "vue";\r
import Message from "../../message/index.js"; //此处为本地示例，请使用import {Message} from "mzl-ui";引入\r
const drawerShow = ref(false);\r
const openDrawer = () => {\r
  drawerShow.value = true;\r
};\r
const confirmFn = () => {\r
  Message({ text: "确认事件" });\r
};\r
const cancelFn = () => {\r
  Message({ text: "取消事件" });\r
};\r
<\/script>`;export{r as default};
