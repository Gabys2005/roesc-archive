import{u as d,r as e,j as r}from"./index-53095592.js";import{d as c}from"./users-ff76e958.js";import{E as m}from"./Editor-06621abf.js";import"./Output-e2f403be.js";import"./Markdown-a71b809b.js";import"./OutLink-19f03da7.js";import"./utils-197843b4.js";function l(){const{id:i}=d(),[t,o]=e.useState(),[a,n]=e.useState();return e.useEffect(()=>{c(i).then(s=>o(s)).catch(s=>n(s))},[i]),a?r.jsxs("h1",{children:["Error: ",a]}):t?r.jsxs("div",{children:[r.jsxs("h1",{children:["Editing ",t.current.username]}),r.jsx("hr",{}),r.jsx(m,{data:t,setData:o})]}):r.jsx("h1",{children:"Loading..."})}export{l as default};