const e=`<template>\r
     <l-progress circle :length=10 :percent=p color="success"></l-progress>\r
     <div style="height: 1vh;"></div>\r
     <l-button type="default" @click="es">+1</l-button>\r
     <l-button type="default" @click="add">-1</l-button>\r
</template>\r
<script setup>\r
    import {ref} from 'vue';\r
    const p=ref(0);\r
    p.value=60;\r
    function es(){\r
        p.value=p.value+1;\r
    }\r
    function add(){\r
        p.value=p.value-1;\r
    }\r
<\/script>\r
<style>\r
</style>`;export{e as default};
