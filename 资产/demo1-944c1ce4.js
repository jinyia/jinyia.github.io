const n=`<template>\r
  <div class="container">\r
    <l-input :prefixIcon="Person" />\r
    \r
    <l-input class="item" :suffixIcon="Sad" />\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import {Person} from '@vicons/ionicons5';\r
import {Sad} from '@vicons/ionicons5';\r
<\/script>\r
\r
<style scoped>\r
.container {\r
  width: 250px;\r
}\r
.item {\r
  margin-top: 20px;\r
}\r
</style>`;export{n as default};
