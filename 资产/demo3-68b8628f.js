const t=`<template>\r
    <l-list>\r
        <l-list-item v-for="(item, idx) in data.list" @detail="onDetail" @left-click="onLeftClick" @item-click="onClick"\r
            :key="idx" :title="item.title" :detail="item.detail" :iconLeft="item.iconLeft"\r
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
            iconLeft: true,\r
        },\r
        {\r
            title: "列表2",\r
            detail: true,\r
            iconLeft: true,\r
        },\r
        { title: "列表3", detail: true, iconLeft: true, },\r
    ],\r
});\r
\r
const onClick = () => {\r
    Message({\r
        text: "您点击了列表",\r
    });\r
};\r
const onDetail = () => {\r
    Message({\r
        text: "详情事件",\r
    });\r
};\r
\r
\r
const onLeftClick = () => {\r
    \r
}\r
\r
\r
<\/script>\r
`;export{t as default};
