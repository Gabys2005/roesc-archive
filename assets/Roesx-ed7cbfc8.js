import{u as m,r as o,j as e}from"./index-17a66be7.js";import{R as c}from"./RoescEditor-0b2d3da8.js";import{g as p}from"./fetchData-bc302a12.js";import"./Info-f730865f.js";import"./Markdown-179098dc.js";import"./utils-1c551ff5.js";import"./OutLink-3a1610d5.js";import"./ImagesInput-4710c2af.js";import"./defaultEditorData-3d63535f.js";import"./index.esm-ae14151e.js";function k(){const{link:s}=m(),[t,a]=o.useState(),[i,n]=o.useState("");return o.useEffect(()=>{a(null),n(""),p(s).then(r=>{a(r)}).catch(r=>{n(r)})},[s]),i!==""?e.jsxs("h1",{children:["Error: ",i]}):t?e.jsx(c,{name:t.name,initialData:t}):e.jsx("h1",{children:"Loading..."})}export{k as default};
