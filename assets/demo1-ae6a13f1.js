const e=`<template>\r
  <l-upload label="上传文件" @beforeChange="beforeChangeClick" @change="changeClick"></l-upload>\r
</template>\r
\r
<script lang="ts" setup>\r
\r
const beforeChangeClick = (e)=> {\r
  console.log(e, 'beforeChangeClick')\r
}\r
\r
const changeClick = (e) => {\r
  console.log(e, 'changeClick')\r
}\r
\r
<\/script>\r
`;export{e as default};
