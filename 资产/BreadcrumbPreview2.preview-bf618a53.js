const r=`<!-- <preview>图标分隔符</preview> -->\r
<template>\r
  <l-breadcrumb :separatorIcon="ArrowForward">\r
    <l-breadcrumbitem :to="{ path: '/' }">homepage</l-breadcrumbitem>\r
    <l-breadcrumbitem\r
      ><a href="/">promotion management</a></l-breadcrumbitem\r
    >\r
    <l-breadcrumbitem>promotion list</l-breadcrumbitem>\r
    <l-breadcrumbitem>langlangshan</l-breadcrumbitem>\r
  </l-breadcrumb>\r
</template>\r
\r
<script setup lang="ts">\r
import {ArrowForward} from '@vicons/ionicons5';\r
<\/script>\r
`;export{r as default};
