import{j as e,p as h,u as o,r as i,M as d,L as x}from"./index-15610dad.js";import{g as a}from"./users-b41d9b46.js";function j({data:r,style:s}){return e.jsx("div",{className:"table-container",style:s,children:e.jsxs("table",{className:"table is-bordered is-striped is-hoverable",children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsx("th",{colSpan:2,style:{textAlign:"center"},children:r.current.username})})}),e.jsxs("tbody",{children:[r.previous.length>0&&e.jsxs("tr",{children:[e.jsx("th",{children:"Previous Usernames: "}),e.jsx("td",{children:r.previous.map(t=>t.username).join(", ")})]}),r.aliases.length>0&&e.jsxs("tr",{children:[e.jsx("th",{children:"Also known as: "}),e.jsx("td",{children:r.aliases.join(", ")})]}),r.joined&&e.jsxs("tr",{children:[e.jsx("th",{children:"Joined:"}),e.jsx("td",{children:h(r.joined)})]}),r.left&&e.jsxs("tr",{children:[e.jsx("th",{children:"Left:"}),e.jsx("td",{children:h(r.left)})]}),e.jsx("tr",{children:e.jsx("td",{colSpan:2,style:{textAlign:"center"},children:e.jsx("a",{href:`https://roblox.com/users/${r.current.id}/profile`,target:"_blank",rel:"noreferrer",children:"Roblox Profile"})})})]})]})})}function f(){const{username:r}=o(),[s,t]=i.useState(),[l,c]=i.useState();return i.useEffect(()=>{t(null),c(""),a(r).then(n=>t(n)).catch(n=>c(n))},[r]),l?e.jsxs("h1",{children:["Error: ",l]}):s?e.jsxs("div",{children:[e.jsx("h1",{children:s.current.username}),e.jsx("hr",{}),e.jsx(j,{data:s,style:{float:"right"}}),e.jsx("div",{children:e.jsx(d,{value:s.textContent})}),e.jsx("hr",{style:{clear:"both"}}),e.jsx(x,{to:`/editor/users/existing/${s.id}`,className:"button is-primary is-outlined",children:"Edit This Page"})]}):e.jsx("h1",{children:"Loading..."})}export{f as default};
