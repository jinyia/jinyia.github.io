const r=`<template>\r
    <div class="progress">\r
    <div class="progress-row">\r
        <l-progress circle :length=10 :percent=30 color="danger"></l-progress>\r
    </div>\r
    <div class="progress-row">\r
        <l-progress circle :length=10 :percent=40 color="success"></l-progress>\r
    </div>\r
    <div class="progress-row">\r
        <l-progress circle :length=10 :percent=50 color="warning"></l-progress>\r
    </div>\r
    <div class="progress-row">\r
        <l-progress circle :length=10 :percent=60 color="primary"></l-progress>\r
    </div>\r
    <div class="progress-row">\r
        <l-progress circle :length=10 :percent=70 color="default"></l-progress>\r
    </div>\r
</div>\r
</template>\r
<style scoped>\r
.progress{\r
    overflow: hidden;\r
}\r
.progress-row{\r
    float: left;\r
    margin-left: 2vw;\r
}\r
</style>`;export{r as default};
