const n=`<template>\r
  <div class="container">\r
    <l-input @focus="click" @blur="blur"/>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
\r
const click = (e) => {\r
  console.log(e.type)\r
}\r
\r
const blur = (e) => {\r
  console.log(e.type)\r
}\r
\r
<\/script>\r
\r
<style scoped>\r
.container {\r
  width: 250px;\r
}\r
</style>`;export{n as default};
