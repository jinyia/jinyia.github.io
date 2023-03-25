const r=`<!-- html -->\r
<template>\r
  <l-table :options="options" :headStyle="headStyle" :rowStyle="rowStyle" size="small"></l-table>\r
</template>\r
\r
<!-- js -->\r
<script setup>\r
import { reactive, ref } from "vue";\r
const state = reactive({\r
  options: {\r
    fileds: [\r
      { field: 'id', title: 'ID', align: 'center' },\r
      { field: 'name', title: '姓名', align: 'center' },\r
      { field: 'job', title: '职业', align: 'center' },\r
      { field: 'salary', title: '薪资', align: 'center' },\r
      { field: 'from', title: '籍贯', align: 'center' }\r
    ],\r
    datas: [\r
      { id: 1, name: '张三', job: '前端开发工程师', salary: '18k', from: "北京" },\r
      { id: 2, name: '李四', job: '后端开发工程师', salary: '18k', from: "上海" },\r
      { id: 3, name: '王五', job: '前端开发实习生', salary: '9k', from: "深圳" },\r
      { id: 4, name: '赵六', job: '后端开发实习生', salary: '9k', from: "杭州" },\r
    ],\r
  },\r
  headStyle: {\r
    color: "#0e80eb",\r
    borderColor: "#f0f3fa",\r
    backgroundColor: "#f0f8ff",\r
  },\r
  rowStyle: {\r
    borderColor: "#f0f3fa",\r
  },\r
});\r
const { options, headStyle, rowStyle } = state;\r
<\/script>`;export{r as default};
