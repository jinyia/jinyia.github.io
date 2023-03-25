import{d as h,k as _,o as a,h as d,r as v,c as w,e as l,F as V,g as s,w as u,S as r}from"./index-51698d03.js";import{c as p}from"./codeds-bc5e701c.js";import{_ as f}from"./docview.vue_vue_type_style_index_0_lang-18b5d127.js";const x=h({__name:"demo1",setup(i){const e=_(!1),c=o=>{console.log(o)};return(o,t)=>{const n=v("l-switch");return a(),d(n,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=m=>e.value=m),onChange:c},null,8,["modelValue"])}}}),g={__name:"demo2",setup(i){const e=_(!0);return(c,o)=>{const t=v("l-switch");return a(),d(t,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=n=>e.value=n),disabled:""},null,8,["modelValue"])}}},T=g,C=h({__name:"demo3",setup(i){const e=_(!1);return(c,o)=>{const t=v("l-switch");return a(),d(t,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=n=>e.value=n),showTipsText:!0},null,8,["modelValue"])}}}),B=h({__name:"demo4",setup(i){const e=_(!0),c=_(!0);return(o,t)=>{const n=v("l-switch");return a(),w(V,null,[l(n,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=m=>e.value=m),closeText:"关闭",activeText:"开启"},null,8,["modelValue"]),l(n,{modelValue:c.value,"onUpdate:modelValue":t[1]||(t[1]=m=>c.value=m),closeText:"关闭",activeText:"开启",textAlign:"right"},null,8,["modelValue"])],64)}}}),S=h({__name:"demo5",setup(i){const e=_(!1);return(c,o)=>{const t=v("l-switch");return a(),d(t,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=n=>e.value=n),showTipsText:!0,closeColor:"#bc3457",activeColor:"#45d426"},null,8,["modelValue"])}}}),b={class:"markdown-body"},y=s("h1",null,"Switch 开关",-1),U=s("div",{class:"doc1"},"基本使用 change事件",-1),$={class:"doc2"},k=s("div",{class:"doc1"},"禁用",-1),F={class:"doc2"},A=s("div",{class:"doc1"},"提示信息",-1),D={class:"doc2"},N=s("div",{class:"doc1"},"提示文本 可更换位置",-1),E={class:"doc2"},j=s("div",{class:"doc1"},"自定义颜色",-1),q={class:"doc2"},z=s("br",null,null,-1),J={},K="",L=h({__name:"doc",setup(i,{expose:e}){e({frontmatter:{},excerpt:void 0});const c=[["v-model","开关状态","Boolean","true / false","-"],["disabled","是否禁用，详细规则参考async-validator","Boolean","true / false","-"],["closeColor","关闭状态时的背景色","String","-","#BFBFBF"],["activeColor","开启状态时的背景色","String","-","#74baff"],["closeText","关闭状态时辅助文字","String","-","-"],["activeText","开启状态时辅助文字","String","-","-"],["textAlign","辅助文字位置","String","left / right","left"],["showTipsText","是否显示提示信息","Boolean","true / false","false"],["customClass","自定义整体的Class类名","String","-","-"]],o=[["change","开关事件","change = (e) =>{console.log(e)}"]];return(t,n)=>(a(),w("div",b,[y,U,s("div",$,[l(x)]),(a(),d(r,null,{default:u(()=>[l(p,{compname:"lswitch",demoname:"demo1"})]),_:1})),k,s("div",F,[l(T)]),(a(),d(r,null,{default:u(()=>[l(p,{compname:"lswitch",demoname:"demo2"})]),_:1})),A,s("div",D,[l(C)]),(a(),d(r,null,{default:u(()=>[l(p,{compname:"lswitch",demoname:"demo3"})]),_:1})),N,s("div",E,[l(B)]),(a(),d(r,null,{default:u(()=>[l(p,{compname:"lswitch",demoname:"demo4"})]),_:1})),j,s("div",q,[l(S)]),(a(),d(r,null,{default:u(()=>[l(p,{compname:"lswitch",demoname:"demo5"})]),_:1})),s("p",null,[l(f,{title:"属性",type:"prop",body:c})]),z,s("p",null,[l(f,{title:"input 事件",type:"event",body:o})])]))}});export{L as default,K as excerpt,J as frontmatter};