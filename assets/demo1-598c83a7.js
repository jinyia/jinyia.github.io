const n=`<!-- html -->\r
<template>\r
  <l-menu :options="menuOptions"></l-menu>\r
</template>\r
\r
<!-- js -->\r
<script setup>\r
import { reactive } from "vue";\r
const state = reactive({\r
  menuOptions: [\r
    {\r
      title: "菜单1",\r
    },\r
    {\r
      title: "菜单2",\r
      children: [\r
        {\r
          title: "菜单2-1",\r
        },\r
        {\r
          title: "菜单2-2",\r
        },\r
        {\r
          title: "菜单2-3",\r
          children: [\r
            {\r
              title: "菜单2-3-1",\r
              children: [\r
                {\r
                  title: "菜单2-3-1-1",\r
                },\r
                {\r
                  title: "菜单2-3-1-2",\r
                },\r
              ],\r
            },\r
            {\r
              title: "菜单2-3-2",\r
            },\r
          ],\r
        },\r
      ],\r
    },\r
    {\r
      title: "菜单3",\r
      children: [\r
        {\r
          title: "菜单3-1",\r
        },\r
        {\r
          title: "菜单3-2",\r
        },\r
      ],\r
    },\r
    {\r
      title: "菜单4",\r
      children: [\r
        {\r
          title: "菜单4-1",\r
          children: [\r
            {\r
              title: "菜单4-1-1",\r
            },\r
            {\r
              title: "菜单4-1-2",\r
            },\r
          ],\r
        },\r
      ],\r
    },\r
    {\r
      title: "菜单5",\r
      children: [\r
        {\r
          title: "菜单3-1",\r
        },\r
      ],\r
    },\r
    {\r
      title: "菜单6",\r
    },\r
  ],\r
});\r
const { menuOptions } = state;\r
<\/script>`;export{n as default};
