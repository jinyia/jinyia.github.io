const n=`<!-- html -->\r
<template>\r
  <div>\r
    <l-button @click="openMsg1">消息提示</l-button>\r
    <l-button @click="openMsg2">5秒后消失</l-button>\r
  </div>\r
</template>\r
\r
<!-- js -->\r
<script setup>\r
import {Funnel,Time} from '@vicons/ionicons5';\r
import Message from "../index.js"; //此处为本地示例，请使用import {Message} from "mzl-ui";引入\r
const openMsg1 = () => {\r
  Message({\r
    text: "自定义Icon！",\r
    icon: Funnel,\r
  });\r
};\r
const openMsg2 = () => {\r
  Message({\r
    text: "5秒后消失！",\r
    icon: Time,\r
    timeout: 5000,\r
  });\r
};\r
<\/script>`;export{n as default};
