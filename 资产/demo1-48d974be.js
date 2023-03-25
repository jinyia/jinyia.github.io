const n=`<template>\r
  <div>\r
  <l-icon class="item" :size=30><Camera/></l-icon>\r
  <l-icon class="item" :size=30 color="green"><Cloudy/></l-icon>\r
  <l-icon class="item" :size=40 ><Cloudy/></l-icon>\r
  <l-icon class="item" :size=50 color="red" ><Cloudy/></l-icon>\r
  </div>\r
\r
</template>\r
<script setup>\r
import {Camera} from '@vicons/ionicons5';\r
import {Cloudy} from '@vicons/ionicons5';\r
<\/script>\r
\r
<style lang="scss" scoped>\r
\r
.item {\r
  margin-right: 10px;\r
}\r
</style>`;export{n as default};
