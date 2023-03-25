const r=`<template>\r
  <l-form\r
    :model="state"\r
    ref="formRef"\r
    :rules="{\r
      username:{\r
        min: 6,\r
        max: 10,\r
        message: '用户名至少6-10位',\r
        trigger: ['change', 'blur']\r
      },\r
      password: {\r
        min: 10,\r
        max: 15,\r
        message: '用户名至少10-15位',\r
        trigger: ['change', 'blur']\r
      }\r
    }"\r
  >\r
    <l-form-item \r
      hideRequiredAsterisk\r
      prop="username" \r
      labelWidth="80px"\r
      labelPosition="start"\r
      :rules="[\r
        {\r
          required: true, \r
          message: '请输入用户名', \r
          trigger: 'blur'\r
        }\r
      ]"\r
    >\r
    <template #default = {context}>\r
      <l-input :context="context" placeholder="请输入用户名" v-model="state.username"/>\r
    </template>\r
      <template #label>用户名</template>\r
      \r
    </l-form-item>\r
\r
    <l-form-item \r
      prop="password" \r
      labelWidth="80px"\r
      hideRequiredAsterisk\r
      labelPosition="start"\r
      :rules="[\r
        {\r
          required: true, \r
          message: '请输入密码', \r
          trigger: 'blur'\r
        }\r
      ]"\r
    >\r
      <template #default = {context}>\r
        <l-input :context="context"  placeholder="请输入密码" type="password" showpwd v-model="state.password"/>\r
      </template>\r
      \r
      <template #label>密码</template>\r
      \r
    </l-form-item>\r
    <l-switch class="item" v-model="switchVal" @change="switchChange"></l-switch>\r
    <l-radio\r
      class="item"\r
      v-model="radioVal"\r
      :options="state.radioOptions"\r
      @change="radioChange"\r
    ></l-radio>\r
    <l-button class="item" type="primary" @click="validateForm" >按钮</l-button>\r
  </l-form>\r
\r
</template>\r
\r
<script lang="ts" setup>\r
import { ref, reactive } from 'vue';\r
const radioVal = ref("python");\r
const switchVal = ref(false);\r
const state = reactive({\r
  username: '',\r
  password: '',\r
  radioOptions: [\r
    { label: "java编程", value: "java" },\r
    { label: "js编程", value: "js" },\r
    { label: "php编程", value: "php" },\r
    { label: "python编程", value: "python" },\r
  ],\r
})\r
\r
const formRef = ref()\r
\r
const validateForm = () => {\r
  const form = formRef.value\r
  form?.validate((valid, errors) => {\r
    console.log(valid, errors)\r
  })\r
}\r
\r
const radioChange = (e) => {\r
  console.log(e.value, e.index);\r
};\r
\r
const switchChange = (e) => {\r
  console.log(e);\r
};\r
\r
<\/script>\r
\r
<style scoped>\r
.l-from-item {\r
  margin-top: 20px;\r
}\r
.item {\r
  margin-top: 20px;\r
}\r
</style>`;export{r as default};
