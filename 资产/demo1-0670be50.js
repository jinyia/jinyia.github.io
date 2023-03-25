const n=`<!-- html -->\r
<template>\r
  <div>\r
    <l-button @click="openMsg">消息提示</l-button>\r
    <l-button @click="openVNodeMsg">消息提示(VNode)</l-button>\r
  </div>\r
</template>\r
\r
<!-- js -->\r
<script setup>\r
import Message from '../index.js' //此处为本地示例，请使用import {Message} from "mzl-ui";引入\r
import { h } from 'vue'\r
\r
const openMsg = () => {\r
  Message({\r
    text: '默认消息提示'\r
  })\r
}\r
\r
const openVNodeMsg = () => {\r
  Message({\r
    text: h('p', null, '默认消息提示(VNode)')\r
  })\r
}\r
<\/script>\r
`;export{n as default};
