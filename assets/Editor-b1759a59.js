import{j as s,r as c}from"./index-ddc4a9f6.js";import{I as h}from"./Inputs-836a20d8.js";import{T as d,B as x,I as j}from"./Output-fdf0af38.js";import{d as u}from"./OutLink-b8274887.js";import{U as f}from"./Editor-8f9761eb.js";import{c as p}from"./users-bc6b3522.js";function N({users:i,broadcaster:a,downloadName:r}){return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"box",children:[s.jsx("h1",{children:"Output"}),s.jsxs("p",{children:["Send these file in the ",s.jsx("span",{className:"tag",children:"Users / Broadcasters"})," thread in the #roesc-archive channel"]})]}),s.jsxs("div",{className:"columns",children:[s.jsx("div",{className:"column",children:s.jsxs("div",{className:"box",children:[s.jsx(d,{disabled:!0,value:JSON.stringify(a,null,4),className:"mb-2"}),s.jsx(x,{onClick:()=>u(a,r||"broadcasters"),children:"Download"})]})}),s.jsx("div",{className:"column",children:s.jsxs("div",{className:"box",children:[s.jsx(d,{disabled:!0,value:JSON.stringify(i,null,4),className:"mb-2"}),s.jsx(x,{onClick:()=>u(i,"users"),children:"Download"})]})})]})]})}function C({data:i,setData:a,users:r}){const[n,o]=c.useState(r),[e,t]=c.useState("info");return c.useEffect(()=>{r||p().then(l=>o(l))},[r]),n?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"box",children:s.jsx("div",{className:"tabs is-boxed is-centered",children:s.jsxs("ul",{children:[s.jsx("li",{className:e==="info"?"is-active":"",children:s.jsx("a",{onClick:()=>t("info"),children:"Info"})}),s.jsx("li",{className:e==="editor"?"is-active":"",children:s.jsx("a",{onClick:()=>t("editor"),children:"Editor"})}),s.jsx("li",{className:e==="users"?"is-active":"",children:s.jsx("a",{onClick:()=>t("users"),children:"Users Editor"})}),s.jsx("li",{className:e==="output"?"is-active":"",children:s.jsx("a",{onClick:()=>t("output"),children:"Output"})})]})})}),e==="info"&&s.jsx(j,{}),e==="editor"&&s.jsx(h,{data:i,setData:(l,m)=>a({...i,[l]:m}),users:n}),e==="users"&&s.jsx(f,{users:n,setUsers:o}),e==="output"&&s.jsx(N,{broadcaster:i,users:n,downloadName:`newbroadcaster-${i.name}`})]}):s.jsx("h1",{children:"Loading..."})}export{C as E};
