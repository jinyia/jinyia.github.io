const n=`<!-- html -->\r
<template>\r
  <l-dropdown title="下拉菜单" :options="dorpoptions">\r
    <template #CameraOutline>\r
      <l-icon :size="20"><CameraOutline/></l-icon>\r
    </template>\r
    <template #DesktopOutline>\r
      <l-icon :size="20"><DesktopOutline/></l-icon>\r
    </template>\r
    <template #FishOutline>\r
      <l-icon :size="20"><FishOutline/></l-icon>\r
    </template>\r
    <template #CloudDownloadOutline>\r
      <l-icon :size="20"><CloudDownloadOutline/></l-icon>\r
    </template>\r
  </l-dropdown>\r
</template>\r
\r
<!-- js -->\r
<script setup>\r
import { reactive } from "vue";\r
import {CameraOutline,DesktopOutline,FishOutline,CloudDownloadOutline} from '@vicons/ionicons5';\r
const state = reactive({\r
  dorpoptions: [\r
    { label: "菜单1",Icon:'CameraOutline'},\r
    { label: "菜单2",Icon:'DesktopOutline'},\r
    { label: "菜单3",Icon:'FishOutline'},\r
    { label: "菜单4",Icon:'CloudDownloadOutline'},\r
  ],\r
});\r
const { dorpoptions } = state;\r
\r
<\/script>`;export{n as default};
