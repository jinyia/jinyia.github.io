const n=`<!-- html -->\r
<template>\r
  <l-menu :options="menuOptions">\r
    <l-dropdown\r
      title="下拉菜单"\r
      :options="dorpoptions"\r
      size="small"\r
    >\r
    <template #CameraOutline>\r
      <l-icon size="20"><CameraOutline/></l-icon>\r
    </template>\r
    <template #DesktopOutline>\r
      <l-icon size="20"><DesktopOutline/></l-icon>\r
    </template>\r
    <template #FishOutline>\r
      <l-icon size="20"><FishOutline/></l-icon>\r
    </template>\r
    <template #CloudDownloadOutline>\r
      <l-icon size="20"><CloudDownloadOutline/></l-icon>\r
    </template>\r
  </l-dropdown>\r
  </l-menu>\r
</template>\r
\r
<!-- js -->\r
<script setup>\r
import { reactive } from "vue";\r
import {CameraOutline,DesktopOutline,FishOutline,CloudDownloadOutline} from '@vicons/ionicons5';\r
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
  dorpoptions: [\r
    { label: "浪浪山1",Icon:'CameraOutline'},\r
    { label: "浪浪山2",Icon:'DesktopOutline'},\r
    { label: "浪浪山3",Icon:'FishOutline'},\r
    { label: "浪浪山4",Icon:'CloudDownloadOutline'},\r
  ],\r
});\r
const { menuOptions, dorpoptions } = state;\r
<\/script>`;export{n as default};
