import{u as m,r as o,j as s}from"./index-ddc4a9f6.js";import{g as c}from"./fetchData-0f99ff15.js";import{R as p}from"./RoescEditor-86c3d464.js";import"./Output-fdf0af38.js";import"./Markdown-ad17c2cf.js";import"./OutLink-b8274887.js";import"./Editor-8f9761eb.js";import"./index.esm-20cfbd7a.js";import"./v4-872b0555.js";function R(){const{link:e}=m(),[t,i]=o.useState(),[a,n]=o.useState("");return o.useEffect(()=>{i(null),n(""),c(e).then(r=>{i(r)}).catch(r=>{n(r)})},[e]),a!==""?s.jsxs("h1",{children:["Error: ",a]}):t?s.jsx(p,{name:t.name,initialData:t}):s.jsx("h1",{children:"Loading..."})}export{R as default};
