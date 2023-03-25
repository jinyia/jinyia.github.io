const r=`<template>\r
    <l-progress :percent=reo color="default"></l-progress>\r
    <br/>\r
    <l-button type="default" @click="rs">-1</l-button>\r
    <l-button type="default" @click="ad">+1</l-button>\r
</template>\r
<script setup>\r
import {ref} from "vue";\r
const reo=ref(0);\r
reo.value=20;\r
function rs(){\r
    reo.value=reo.value-1;\r
}\r
function ad(){\r
    reo.value=reo.value+1;\r
}\r
\r
<\/script>`;export{r as default};
