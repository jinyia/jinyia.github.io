const r=`<!-- html -->\r
<template>\r
  <l-button @click="openDrawer" type="primary">自定义</l-button>\r
  <l-drawer v-model="drawerShow">\r
    <template #header>\r
      这是头部自定义信息\r
      <l-button\r
        size="small"\r
        type="primary"\r
        style="position: absolute; right: 20px"\r
        >自定义</l-button\r
      >\r
    </template>\r
    <template #content>\r
      <div>这是内容区域...</div>\r
      <div>这是内容区域...</div>\r
      <div>这是内容区域...</div>\r
    </template>\r
    <template #footer> 这是底部自定义信息 </template>\r
  </l-drawer>\r
</template>\r
\r
<!-- js -->\r
<script setup>\r
import { ref } from "vue";\r
const drawerShow = ref(false);\r
const openDrawer = () => {\r
  drawerShow.value = true;\r
};\r
<\/script>`;export{r as default};
