import{u as n,r as s,j as r}from"./index-39c65143.js";import{d}from"./broadcasters-2b78508b.js";import{E as p}from"./Editor-632186dd.js";import"./Inputs-f478ece4.js";import"./Editor-1ed0e0dd.js";import"./Output-2655c384.js";import"./Markdown-3e4b824a.js";import"./OutLink-45fd4ae7.js";import"./index.esm-6410f5e6.js";import"./v4-872b0555.js";import"./BroadcastingTable-a730adae.js";import"./Table-aa9625fc.js";import"./users-51239890.js";function y(){const{id:o}=n(),[t,e]=s.useState(),[a,m]=s.useState();return s.useEffect(()=>{d(o).then(i=>e(i)).catch(i=>m(i))},[o]),a?r.jsxs("h1",{children:["Error: ",a]}):t?r.jsxs("div",{children:[r.jsxs("h1",{children:["Editing ",t.name]}),r.jsx("hr",{}),r.jsx(p,{data:t,setData:e})]}):r.jsx("h1",{children:"Loading..."})}export{y as default};
