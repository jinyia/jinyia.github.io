const t=`<template>\r
         <l-progress circle :length=10 color="success" :percent=p></l-progress>\r
         <br/>\r
         <l-button type="default" @click="start">开始</l-button>\r
         <l-button type="default" @click="stop">暂停</l-button>\r
</template>\r
<script setup>\r
import {ref} from 'vue';\r
let p=ref(0);\r
let status=ref(false);\r
function start(){\r
    status=true;\r
}\r
function stop(){\r
    status=false;\r
}\r
setInterval(()=>{\r
    if(p.value==100){return}\r
    if(status==true){\r
        p.value=p.value+1;\r
    }\r
},50)\r
<\/script>`;export{t as default};
