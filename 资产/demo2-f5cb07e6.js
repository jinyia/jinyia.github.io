const a=`<template>\r
    <div>\r
        <l-avatar :src="imgUrl" shape="square" size="small" class="lavatar" />\r
        <l-avatar :src="imgUrl" shape="square" size="default" class="lavatar" />\r
        <l-avatar :src="imgUrl" shape="square" size="large" class="lavatar" />\r
        <l-avatar :src="imgUrl" shape="square" :size="100" class="lavatar" />\r
    </div>\r
</template>\r
\r
<script setup>\r
import imgUrl from "/src/assets/img/avatar.jpg";\r
<\/script>\r
\r
<style>\r
.lavatar {\r
    margin: 6px;\r
}\r
</style>`;export{a as default};
