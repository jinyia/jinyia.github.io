import{k as p,o as d,h as r,r as m,b as k,c as h,e as o,F as x,x as g,u as f,j as y,d as P,g as n,w as i,S as _}from"./index-51698d03.js";import{c as u}from"./codeds-bc5e701c.js";const D={__name:"demo1",setup(c){const e=p(""),s=t=>{console.log(t)};return(t,l)=>{const a=m("l-datePicker");return d(),r(a,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=v=>e.value=v),onChange:s,placeholder:"请选择日期"},null,8,["modelValue"])}}},b=D,w={__name:"demo2",setup(c){const e=p("");return(s,t)=>{const l=m("l-datePicker");return d(),r(l,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=a=>e.value=a),disabled:"",placeholder:"请选择日期"},null,8,["modelValue"])}}},M=w;const S={__name:"demo3",setup(c){const e=p("");return(s,t)=>{const l=m("l-datePicker");return d(),h(x,null,[o(l,{class:"item",modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=a=>e.value=a),placeholder:"请选择日期",size:"small"},null,8,["modelValue"]),o(l,{class:"item",modelValue:e.value,"onUpdate:modelValue":t[1]||(t[1]=a=>e.value=a),placeholder:"请选择日期",size:"medium"},null,8,["modelValue"]),o(l,{class:"item",modelValue:e.value,"onUpdate:modelValue":t[2]||(t[2]=a=>e.value=a),placeholder:"请选择日期",size:"large"},null,8,["modelValue"])],64)}}},U=k(S,[["__scopeId","data-v-406e4bf1"]]),$={__name:"demo4",setup(c){const e=p("");return(s,t)=>{const l=m("l-datePicker");return d(),r(l,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=a=>e.value=a),placeholder:"请选择日期",type:"year"},null,8,["modelValue"])}}},z=$,B={__name:"demo5",setup(c){const e=p("");return(s,t)=>{const l=m("l-datePicker");return d(),r(l,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=a=>e.value=a),placeholder:"请选择日期",type:"month"},null,8,["modelValue"])}}},C=B,F={__name:"demo6",setup(c){const e=p("");return(s,t)=>{const l=m("l-datePicker");return d(),h(x,null,[o(l,{modelValue:e.value,"onUpdate:modelValue":t[0]||(t[0]=a=>e.value=a),placeholder:"请选择日期",format:"yyyy年MM月dd日"},null,8,["modelValue"]),o(l,{modelValue:e.value,"onUpdate:modelValue":t[1]||(t[1]=a=>e.value=a),placeholder:"请选择日期",format:"yyyy/MM/dd"},null,8,["modelValue"]),o(l,{modelValue:e.value,"onUpdate:modelValue":t[2]||(t[2]=a=>e.value=a),placeholder:"请选择日期",format:"yyyy-MM-dd"},null,8,["modelValue"])],64)}}},E=F,H={__name:"demo7",setup(c){const e=p(""),s=g(()=>{let l=new Date;return new Date(l.getFullYear(),l.getMonth(),l.getDate()-10).toLocaleDateString()}),t=g(()=>{let l=new Date;return new Date(l.getFullYear(),l.getMonth(),l.getDate()+10).toLocaleDateString()});return(l,a)=>{const v=m("l-datePicker");return d(),r(v,{modelValue:e.value,"onUpdate:modelValue":a[0]||(a[0]=V=>e.value=V),placeholder:"请选择日期",startDate:f(s),endDate:f(t)},null,8,["modelValue","startDate","endDate"])}}},A=H,L={__name:"Attributes",setup(c){const e=y({options:{fileds:[{field:"attr",title:"参数",align:"center"},{field:"type",title:"类型",align:"center"},{field:"red",title:"说明",align:"center",width:"350px"},{field:"sel",title:"可选值",align:"center"},{field:"def",title:"默认值",align:"center"}],datas:[{attr:"v-model",type:"String",red:"可被 new Date() 解析的字符串，例如：2022-02-01,2022/02/01",sel:"——",def:"——"},{attr:"disabled",type:"Boolean",red:"是否禁用",sel:"true / false",def:"false"},{attr:"placeholder",type:"String",red:"输入框占位字符",sel:"——",def:"——"},{attr:"size",type:"String",red:"组件尺寸",sel:"large/medium/small",def:"medium"},{attr:"format",type:"String",red:"日期格式，见下方日期格式说明",sel:"——",def:"yyyy/MM/dd"},{attr:"clearable",type:"Boolean",red:"是否可清空",sel:"true / false",def:"false"},{attr:"type",type:"String",red:"日期选择类型",sel:"date / year / month",def:"date"},{attr:"showToday",type:"Boolean",red:'是否显示 "今天" 快捷按钮',sel:"true / false",def:"true"},{attr:"startDate",type:"String",red:"限制可选择开始日期，可被 new Date() 解析的字符串",sel:"——",def:"——"},{attr:"endDate",type:"String",red:"限制可选择结束日期，可被 new Date() 解析的字符串",sel:"——",def:"——"},{attr:"customClass",type:"String",red:"自定义组件日期面板类名",sel:"——",def:"——"}]}}),{options:s}=e;return(t,l)=>{const a=m("l-table");return d(),r(a,{options:f(s),size:"small"},null,8,["options"])}}},N=L,Y={__name:"format",setup(c){const e=y({options:{fileds:[{field:"attr",title:"参数",align:"center"},{field:"red",title:"说明",align:"center",width:"350px"},{field:"example",title:"举例",align:"center"},{field:"sel",title:"可选值",align:"center",width:"350px"},{field:"def",title:"默认值",align:"center"}],datas:[{attr:"yyyy",red:"年",example:"2022",sel:"——",def:"——"},{attr:"M",red:"月（不补0）",example:"1",sel:"——",def:"——"},{attr:"MM",red:"月（补0）",example:"01",sel:"——",def:"——"},{attr:"d",red:"日（不补0）",example:"9",sel:"——",def:"——"},{attr:"dd",red:"日（补0）",example:"09",sel:"——",def:"——"},{attr:"H",red:"时，24小时制（不补0）",example:"9",sel:"——",def:"——"},{attr:"HH",red:"时，24小时制（补0）",example:"09",sel:"——",def:"——"},{attr:"h",red:"时，12小时制（不补0）",example:"9",sel:"——",def:"——"},{attr:"hh",red:"时，12小时制（补0）",example:"09",sel:"——",def:"——"},{attr:"m",red:"分（不补0）",example:"9",sel:"——",def:"——"},{attr:"mm",red:"分（补0）",example:"09",sel:"——",def:"——"},{attr:"s",red:"秒（不补0）",example:"9",sel:"——",def:"——"},{attr:"ss",red:"秒（补0）",example:"09",sel:"——",def:"——"}]}}),{options:s}=e;return(t,l)=>{const a=m("l-table");return d(),r(a,{options:f(s),size:"small"},null,8,["options"])}}},j=Y,I={__name:"Events",setup(c){const e=y({options:{fileds:[{field:"name",title:"事件名",align:"center"},{field:"red",title:"说明",align:"center",width:"350px"},{field:"attr",title:"回调参数",align:"center"},{field:"exm",title:"示例",align:"center",width:"350px"}],datas:[{name:"change",red:"日期选中事件",attr:"(value:value)",exm:"change = (e) =>{console.log(e)}"},{name:"clear",red:"清空事件",attr:"()",exm:'clear = () =>{console.log("清空")}'},{name:"open",red:"日期面板打开事件",attr:"()",exm:'open = () =>{console.log("打开")}'},{name:"close",red:"日期面板关闭事件",attr:"()",exm:'close = () =>{console.log("关闭")}'}]}}),{options:s}=e;return(t,l)=>{const a=m("l-table");return d(),r(a,{options:f(s),size:"small"},null,8,["options"])}}},T=I,q={class:"markdown-body"},G=n("h1",null,"DatePicker 日期选择",-1),J=n("div",{class:"doc1"}," 基本使用 Date 组件基本使用示例 ",-1),K={class:"doc2"},O=n("div",{class:"doc1"}," 禁用状态 通过 disabled 属性开启禁用。 ",-1),Q={class:"doc2"},R=n("div",{class:"doc1"}," 不同大小 通过 size 属性设置显示不同大小。 ",-1),W={class:"doc2"},X=n("div",{class:"doc1"}," 选择年 通过设置 type=“year” 快捷选择年。 ",-1),Z={class:"doc2"},ee=n("div",{class:"doc1"}," 选择月 通过设置 type=“month” 快捷选择月 ",-1),te={class:"doc2"},le=n("div",{class:"doc1"}," 格式化日期显示 通过设置 format 格式化日期显示 ",-1),ae={class:"doc2"},oe=n("div",{class:"doc1"}," 日期选择范围限制 设置可选择的日期范围限制 ",-1),ne={class:"doc2"},de=n("br",null,null,-1),se=n("br",null,null,-1),re=n("h2",null,"format 日期格式说明",-1),ce=n("br",null,null,-1),me=n("h2",null,"Event 事件",-1),ie=n("br",null,null,-1),pe={},fe="",ve=P({__name:"doc",setup(c,{expose:e}){return e({frontmatter:{},excerpt:void 0}),(s,t)=>(d(),h("div",q,[G,J,n("div",K,[o(b)]),(d(),r(_,null,{default:i(()=>[o(u,{compname:"ldatePicker",demoname:"demo1"})]),_:1})),O,n("div",Q,[o(M)]),(d(),r(_,null,{default:i(()=>[o(u,{compname:"ldatePicker",demoname:"demo2"})]),_:1})),R,n("div",W,[o(U)]),(d(),r(_,null,{default:i(()=>[o(u,{compname:"ldatePicker",demoname:"demo3"})]),_:1})),X,n("div",Z,[o(z)]),(d(),r(_,null,{default:i(()=>[o(u,{compname:"ldatePicker",demoname:"demo4"})]),_:1})),ee,n("div",te,[o(C)]),(d(),r(_,null,{default:i(()=>[o(u,{compname:"ldatePicker",demoname:"demo5"})]),_:1})),le,n("div",ae,[o(E)]),(d(),r(_,null,{default:i(()=>[o(u,{compname:"ldatePicker",demoname:"demo6"})]),_:1})),oe,n("div",ne,[o(A)]),(d(),r(_,null,{default:i(()=>[o(u,{compname:"ldatePicker",demoname:"demo7"})]),_:1})),de,o(N),se,re,o(j),ce,me,o(T),ie]))}});export{ve as default,fe as excerpt,pe as frontmatter};
