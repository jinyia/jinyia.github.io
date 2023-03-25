const n=`<!-- html -->\r
<template>\r
  <l-table :options="options">\r
    <!-- 自定标表头job(职业)的插槽内容，展示为下拉菜单 -->\r
    <template #head-job="item">\r
      <l-dropdown :title="item.scope.title" :options="dorpoptions" @change="dropchange"></l-dropdown>\r
    </template>\r
    <!-- 自定义id列，插槽名为id，并接受item作为行数据 -->\r
    <template #id="item">\r
      <div style="color: #008dff">{{ item.scope.row.id }}</div>\r
    </template>\r
    <!-- 自定义操作列，插槽名为action，并接受item作为行数据 (操作类的列固定插槽名为action)-->\r
    <template #action="item">\r
      <l-button type="default" sizes="small">编辑</l-button>\r
      <l-button type="danger" sizes="small">删除</l-button>\r
    </template>\r
  </l-table>\r
</template>\r
\r
<!-- js -->\r
<script setup>\r
import { reactive } from "vue";\r
const state = reactive({\r
  options: {\r
    fileds: [\r
      { field: 'id', title: 'ID', align: 'center' },\r
      { field: 'name', title: '姓名', align: 'center' },\r
      { field: 'job', title: '职业', align: 'center' },\r
      { field: 'salary', title: '薪资', align: 'center' },\r
      { field: 'from', title: '籍贯', align: 'center' },\r
      { field: 'action', title: '操作', align: 'center' }\r
    ],\r
    datas: [\r
      { id: 1, name: '张三', job: '前端开发工程师', salary: '18k', from: "北京" },\r
      { id: 2, name: '李四', job: '后端开发工程师', salary: '18k', from: "上海" },\r
      { id: 3, name: '王五', job: '前端开发实习生', salary: '9k', from: "深圳" },\r
      { id: 4, name: '赵六', job: '后端开发实习生', salary: '9k', from: "杭州" },\r
    ]\r
  },\r
  dorpoptions: [\r
    { label: "前端开发工程师", icon: "m-icon-file" },\r
    { label: "后端开发工程师", icon: "m-icon-keyboard-9" },\r
    { label: "前端开发实习生", icon: "m-icon-link" },\r
    { label: "后端开发实习生", icon: "m-icon-file" },\r
  ],\r
});\r
const dropchange = (item, index) => {\r
  // console.log(item, index);\r
};\r
const { options, dorpoptions } = state;\r
<\/script>`;export{n as default};
