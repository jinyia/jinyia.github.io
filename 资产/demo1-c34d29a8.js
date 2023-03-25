const r=`<template>\r
  <l-form\r
    :model="state"\r
  >\r
    <l-form-item \r
    >\r
      <l-input  placeholder="请输入用户名" v-model="state.username"/>\r
      <template #label>用户名</template>\r
    </l-form-item>\r
    <l-form-item \r
    >\r
      <l-input placeholder="请输入密码" type="password"   v-model="state.password"/>\r
      <template #label>密码</template>\r
    </l-form-item>\r
    <l-button class="btn" type="primary" @click="validateForm" >按钮</l-button>\r
  </l-form>\r
\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref, reactive } from 'vue';\r
// import { FormInstance } from '../../index';\r
const state = reactive({\r
  username: '',\r
  password: ''\r
})\r
\r
const formRef = ref()\r
\r
const validateForm = () => {\r
  console.log(state)\r
}\r
<\/script>\r
\r
<style scoped>\r
.l-from-item {\r
  margin-top: 20px;\r
}\r
.btn {\r
  margin-top: 20px;\r
}\r
</style>`;export{r as default};
