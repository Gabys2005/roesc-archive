import{j as e,u as a,r as i,L as c}from"./index-00973617.js";import{a as d}from"./users-e597582c.js";import{M as h}from"./Markdown-4fea8fb2.js";function x({data:r,style:s}){return e.jsx("div",{className:"table-container",style:s,children:e.jsxs("table",{className:"table is-bordered is-striped is-hoverable",children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsx("th",{colSpan:2,children:r.current.username})})}),e.jsxs("tbody",{children:[r.previous.length>0?e.jsxs("tr",{children:[e.jsx("td",{children:"Previous Usernames: "}),e.jsx("td",{children:r.previous.map(t=>t.username).join(", ")})]}):"",r.aliases.length>0?e.jsxs("tr",{children:[e.jsx("td",{children:"Also known as: "}),e.jsx("td",{children:r.aliases.join(", ")})]}):"",e.jsx("tr",{children:e.jsx("td",{colSpan:2,style:{textAlign:"center"},children:e.jsx("a",{href:`https://roblox.com/users/${r.current.id}/profile`,target:"_blank",rel:"noreferrer",children:"Roblox Profile"})})})]})]})})}function p(){const{username:r}=a(),[s,t]=i.useState(),[l,o]=i.useState();return i.useEffect(()=>{t(null),o(""),d(r).then(n=>t(n)).catch(n=>o(n))},[r]),l?e.jsxs("h1",{children:["Error: ",l]}):s?e.jsxs("div",{children:[e.jsx("h1",{children:s.current.username}),e.jsx("hr",{}),e.jsx(x,{data:s,style:{float:"right"}}),e.jsx("div",{children:e.jsx(h,{value:s.textContent})}),e.jsx("hr",{style:{clear:"both"}}),e.jsx(c,{to:`/editor/users/existing/${s.id}`,className:"button is-primary is-outlined",children:"Edit this page"})]}):e.jsx("h1",{children:"Loading..."})}export{p as default};
