import{u as m,r as o,j as s}from"./index-7293fa4e.js";import{g as c}from"./fetchData-a3e1cd85.js";import{R as p}from"./RoescEditor-44dae72a.js";import"./Output-329929dc.js";import"./Markdown-3941189b.js";import"./OutLink-704c32e6.js";import"./Editor-564528ab.js";import"./index.esm-0cd5dd6d.js";import"./v4-872b0555.js";function R(){const{link:e}=m(),[t,i]=o.useState(),[a,n]=o.useState("");return o.useEffect(()=>{i(null),n(""),c(e).then(r=>{i(r)}).catch(r=>{n(r)})},[e]),a!==""?s.jsxs("h1",{children:["Error: ",a]}):t?s.jsx(p,{name:t.name,initialData:t}):s.jsx("h1",{children:"Loading..."})}export{R as default};
