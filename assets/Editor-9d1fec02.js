import{r as n,j as s}from"./index-17a66be7.js";import{I as u,O as x}from"./Output-b0ff4880.js";import{I as m}from"./Info-f730865f.js";import{a as j}from"./ImagesInput-4710c2af.js";import{a as p}from"./users-59418c9f.js";function v({data:t,setData:l,users:r}){const[i,c]=n.useState(r),[e,a]=n.useState("editor");return n.useEffect(()=>{r||p().then(o=>c(o))},[r]),r?s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"box",children:s.jsx("div",{className:"tabs is-boxed is-centered",children:s.jsxs("ul",{children:[s.jsx("li",{className:e==="editor"?"is-active":"",children:s.jsx("a",{onClick:()=>a("editor"),children:"Editor"})}),s.jsx("li",{className:e==="users"?"is-active":"",children:s.jsx("a",{onClick:()=>a("users"),children:"Users Editor"})}),s.jsx("li",{className:e==="output"?"is-active":"",children:s.jsx("a",{onClick:()=>a("output"),children:"Output"})})]})})}),e==="editor"&&s.jsxs(s.Fragment,{children:[s.jsx(m,{optional:!0}),s.jsx(u,{data:t,setData:(o,d)=>l({...t,[o]:d}),users:i})]}),e==="users"&&s.jsx(j,{users:i,setUsers:c}),e==="output"&&s.jsx(x,{broadcaster:t,users:i,downloadName:`newbroadcaster-${t.name}`})]}):s.jsx("h1",{children:"Loading..."})}export{v as E};
