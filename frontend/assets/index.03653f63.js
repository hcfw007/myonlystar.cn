import{d as e,z as t,c as a,r as n,o,w as s,a as r,b as l,e as c,f as u,g as d,A as i}from"./vendor.2dcc69e8.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const n=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,s)=>{const r=new URL(e,n);if(self[t].moduleMap[r])return a(self[t].moduleMap[r]);const l=new Blob([`import * as m from '${r}';`,`${t}.moduleMap['${r}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){s(new Error(`Failed to import: ${e}`)),o(c)},onload(){a(self[t].moduleMap[r]),o(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/assets/");var m=e({name:"App",data:()=>({locale:t})});m.render=function(e,t,l,c,u,d){const i=n("router-view"),m=n("a-config-provider");return o(),a(m,{locale:e.locale},{default:s((()=>[r(i,{class:"light"})])),_:1},8,["locale"])};var p=e({name:"Navbar"});const f=r("div",{class:"website-title-block"},[r("span",{class:"website-title"},"MyOnlyStar.CN"),r("span",{class:"website-subtitle"},"想到啥做啥 请勿抱有太多期待")],-1);p.render=function(e,t,r,l,c,u){const d=n("a-layout-header");return o(),a(d,{class:"nav"},{default:s((()=>[f])),_:1})};var v=e({name:"Feet"});const b=l(" 脚 ");v.render=function(e,t,r,l,c,u){const d=n("a-layout-footer");return o(),a(d,null,{default:s((()=>[b])),_:1})};var w=e({name:"Index",components:{Navbar:p,Feet:v}});const _=l(" 现在还空空如也 ");w.render=function(e,t,l,c,u,d){const i=n("Navbar"),m=n("a-col"),p=n("a-row"),f=n("a-layout-content"),v=n("Feet"),b=n("a-layout");return o(),a(b,null,{default:s((()=>[r(i),r(f,null,{default:s((()=>[r(p,null,{default:s((()=>[r(m,{span:24},{default:s((()=>[_])),_:1})])),_:1})])),_:1}),r(v)])),_:1})};const y=c({history:u(),routes:[{path:"/",component:w}]});d(m).use(y).use(i).mount("#app");
