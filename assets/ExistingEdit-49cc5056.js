import{u as n,r as o,j as r}from"./index-53095592.js";import{d as p}from"./broadcasters-b685ec94.js";import{E as d}from"./Editor-8f03ba47.js";import"./Inputs-aaa9fa37.js";import"./Editor-2c703741.js";import"./Output-e2f403be.js";import"./Markdown-a71b809b.js";import"./OutLink-19f03da7.js";import"./utils-197843b4.js";import"./index.esm-0465047d.js";import"./v4-872b0555.js";import"./BroadcastingTable-9f8fd844.js";import"./Table-b7b3513c.js";import"./users-ff76e958.js";function I(){const{id:s}=n(),[t,e]=o.useState(),[a,m]=o.useState();return o.useEffect(()=>{p(s).then(i=>e(i)).catch(i=>m(i))},[s]),a?r.jsxs("h1",{children:["Error: ",a]}):t?r.jsxs("div",{children:[r.jsxs("h1",{children:["Editing ",t.name]}),r.jsx("hr",{}),r.jsx(d,{data:t,setData:e})]}):r.jsx("h1",{children:"Loading..."})}export{I as default};