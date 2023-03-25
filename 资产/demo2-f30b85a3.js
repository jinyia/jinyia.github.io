const r=`<!-- html -->\r
<template>\r
\r
    <l-button type="primary" @click="openDrawerOfLeft">左边-left</l-button>\r
    <l-button type="primary" @click="openDrawerOfTop">上边-top</l-button>\r
    <l-button type="primary" @click="openDrawerOfRight">右边-right</l-button>\r
    <l-button type="primary" @click="openDrawerOfBottom">下边-bottom</l-button>\r
\r
\r
  <l-drawer v-model="drawerShow1" title="左边出现的抽屉">\r
    <template #content>\r
      <div>这是内容区域...</div>\r
      <div>这是内容区域...</div>\r
      <div>这是内容区域...</div>\r
    </template>\r
  </l-drawer>\r
  <l-drawer v-model="drawerShow2" title="上边出现的抽屉" direction="top">\r
    <template #content>\r
      <div>这是内容区域...</div>\r
      <div>这是内容区域...</div>\r
      <div>这是内容区域...</div>\r
    </template>\r
  </l-drawer>\r
  <l-drawer v-model="drawerShow3" title="右边出现的抽屉" direction="right">\r
    <template #content>\r
      <div>这是内容区域...</div>\r
      <div>这是内容区域...</div>\r
      <div>这是内容区域...</div>\r
    </template>\r
  </l-drawer>\r
  <l-drawer v-model="drawerShow4" title="下边出现的抽屉" direction="bottom">\r
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
const drawerShow1 = ref(false);\r
const drawerShow2 = ref(false);\r
const drawerShow3 = ref(false);\r
const drawerShow4 = ref(false);\r
const openDrawerOfLeft = () => {\r
  drawerShow1.value = true;\r
};\r
const openDrawerOfTop = () => {\r
  drawerShow2.value = true;\r
};\r
const openDrawerOfRight = () => {\r
  drawerShow3.value = true;\r
};\r
const openDrawerOfBottom = () => {\r
  drawerShow4.value = true;\r
};\r
<\/script>`;export{r as default};
