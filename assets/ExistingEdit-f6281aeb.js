import{u as m,r as o,j as s}from"./index-39c65143.js";import{g as c}from"./fetchData-d16b6d81.js";import{R as p}from"./RoescEditor-e8621310.js";import"./Output-2655c384.js";import"./Markdown-3e4b824a.js";import"./OutLink-45fd4ae7.js";import"./Editor-1ed0e0dd.js";import"./index.esm-6410f5e6.js";import"./v4-872b0555.js";function R(){const{link:e}=m(),[t,i]=o.useState(),[a,n]=o.useState("");return o.useEffect(()=>{i(null),n(""),c(e).then(r=>{i(r)}).catch(r=>{n(r)})},[e]),a!==""?s.jsxs("h1",{children:["Error: ",a]}):t?s.jsx(p,{name:t.name,initialData:t}):s.jsx("h1",{children:"Loading..."})}export{R as default};