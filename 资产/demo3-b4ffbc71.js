const n=`<!-- html -->\r
<template>\r
  <div>\r
    <l-button @click="openInfo">文本状态</l-button>\r
    <l-button @click="openSuccess" type="success">成功状态</l-button>\r
    <l-button @click="openWarn" type="warning">警告状态</l-button>\r
    <l-button @click="openError" type="danger">错误状态</l-button>\r
    <l-button @click="openCustom" type="primary">自定义</l-button>\r
  </div>\r
</template>\r
\r
<!-- js -->\r
<script setup>\r
import {Flash} from '@vicons/ionicons5';\r
import Message from "../index.js"; //此处为本地示例，请使用import {Message} from "mzl-ui";引入\r
const openInfo = () => {\r
  Message({\r
    type: "info",\r
    text: "文本消息提示!",\r
  });\r
};\r
const openSuccess = () => {\r
  Message({\r
    type: "success",\r
    text: "成功状态消息提示!",\r
  });\r
};\r
const openWarn = () => {\r
  Message({\r
    type: "warn",\r
    text: "警告状态消息提示!",\r
  });\r
};\r
const openError = () => {\r
  Message({\r
    type: "error",\r
    text: "错误状态消息提示!",\r
  });\r
};\r
const openCustom = () => {\r
  Message({\r
    type: "custom",\r
    text: "自定义消息弹窗样式",\r
    icon: Flash,\r
    textColor: "#000",\r
    bgColor: "#e19af3",\r
  });\r
};\r
<\/script>`;export{n as default};
