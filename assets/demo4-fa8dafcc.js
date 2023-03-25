const t=`<template>\r
    <l-list>\r
        <l-list-item v-for="(item, idx) in data.list" @detail="onDetail" @item-click="onClick" :key="idx"\r
            :title="item.title" :desc="item.desc" :detail="item.detail" :iconLeft="item.iconLeft"\r
            iconLeftColor="#595959"></l-list-item>\r
    </l-list>\r
</template>\r
\r
<script setup>\r
import { reactive } from "vue";\r
import Message from "../../message/index.js"; //此处本地示例引入消息组件\r
const data = reactive({\r
    list: [\r
        {\r
            title: "列表1",\r
            detail: true,\r
            desc: "描述内容",\r
            iconLeft: true,\r
        },\r
        {\r
            title: "列表2",\r
            detail: true,\r
            desc: "描述内容",\r
            iconLeft: true,\r
        },\r
        { title: "列表3", detail: true, desc: "描述内容", iconLeft: true, },\r
    ],\r
});\r
\r
const onClick = () => {\r
    Message({\r
        text: "您点击了列表",\r
    });\r
};\r
\r
const onDetail = () => {\r
    \r
}\r
\r
<\/script>\r
`;export{t as default};
