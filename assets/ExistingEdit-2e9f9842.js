import{u as n,r as o,j as r}from"./index-2e5d3364.js";import{d as p}from"./broadcasters-690830cb.js";import{E as d}from"./Editor-e39389b5.js";import"./Inputs-8f257dd6.js";import"./Editor-f29771b8.js";import"./Output-bc8e1b3d.js";import"./Markdown-c5df2fd4.js";import"./OutLink-46edd8d0.js";import"./utils-db9b6197.js";import"./index.esm-07bbea8e.js";import"./v4-872b0555.js";import"./BroadcastingTable-0bf8155e.js";import"./Table-dd595d29.js";import"./users-bd952676.js";function I(){const{id:s}=n(),[t,e]=o.useState(),[a,m]=o.useState();return o.useEffect(()=>{p(s).then(i=>e(i)).catch(i=>m(i))},[s]),a?r.jsxs("h1",{children:["Error: ",a]}):t?r.jsxs("div",{children:[r.jsxs("h1",{children:["Editing ",t.name]}),r.jsx("hr",{}),r.jsx(d,{data:t,setData:e})]}):r.jsx("h1",{children:"Loading..."})}export{I as default};
