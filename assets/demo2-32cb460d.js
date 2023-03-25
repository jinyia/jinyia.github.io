const o=`<template>\r
    <m-row>\r
      <l-grid :span="10"><div class="col-box-2 col-box">10</div></l-grid>\r
      <l-grid :span="12" :offset="2"><div class="col-box-1 col-box">12</div></l-grid>\r
    </m-row>\r
    <m-row>\r
      <l-grid :span="8"><div class="col-box-1 col-box">8</div></l-grid>\r
      <l-grid :span="8" :offset="8"><div class="col-box-1 col-box">8</div></l-grid>\r
    </m-row>\r
    <m-row>\r
      <l-grid :span="2"><div class="col-box-2 col-box">2</div></l-grid>\r
      <l-grid :span="6" :offset="4"><div class="col-box-1 col-box">6</div></l-grid>\r
      <l-grid :span="6" :offset="6"><div class="col-box-2 col-box">6</div></l-grid>\r
    </m-row>\r
    <m-row>\r
      <l-grid :span="4"><div class="col-box-1 col-box">4</div></l-grid>\r
      <l-grid :span="2" :offset="4"><div class="col-box-2 col-box">2</div></l-grid>\r
      <l-grid :span="4" :offset="2"><div class="col-box-1 col-box">4</div></l-grid>\r
      <l-grid :span="6" :offset="2"><div class="col-box-2 col-box">6</div></l-grid>\r
    </m-row>\r
  </template>\r
  \r
  <style lang="scss" scoped>\r
  .col-box {\r
    height: 34px;\r
    margin-bottom: 10px;\r
    text-align: center;\r
    line-height: 34px;\r
  }\r
  .col-box-1 {\r
    background-color: #9eaaaf;\r
    color: #333;\r
  }\r
  .col-box-2 {\r
    background-color: #505050;\r
    color: #fff;\r
  }\r
  </style>`;export{o as default};
