import{j as s,u as l,r as n,L as h}from"./index-cfd3194b.js";import{b as x}from"./broadcasters-44977052.js";import{p as o,M as j}from"./Markdown-9bd9de92.js";import{O as m}from"./OutLink-4d00e3c9.js";import{L as p}from"./LogoImage-5d318a43.js";import{U as u}from"./UsersString-0fd6c5c3.js";import{a as g}from"./MediaSection-b719012c.js";import{B as a}from"./BroadcastingTable-0f3b6738.js";import"./utils-75a31d05.js";import"./users-cf66bd67.js";import"./Table-cfad9ebf.js";function b({links:e}){return e.map((r,t)=>s.jsxs(m,{to:r.link,children:[r.name,s.jsx("br",{})]},t))}function f({data:e}){return s.jsx("div",{className:"table-container sideTable",style:{float:"right",marginLeft:"1rem"},children:s.jsxs("table",{className:"table is-bordered is-striped is-hoverable",children:[s.jsx("thead",{children:s.jsx("tr",{children:s.jsx("th",{colSpan:2,style:{textAlign:"center"},children:e.name})})}),s.jsxs("tbody",{children:[s.jsx("tr",{children:s.jsx("td",{colSpan:2,children:s.jsx(p,{logos:e.logos})})}),s.jsxs("tr",{children:[s.jsx("th",{children:"Short Name:"}),s.jsx("td",{children:e.shortName})]}),s.jsxs("tr",{children:[s.jsx("th",{children:"Owners:"}),s.jsx("td",{children:s.jsx(u,{userids:e.owners})})]}),e.created&&s.jsxs("tr",{children:[s.jsx("th",{children:"Created:"}),s.jsx("td",{children:o(e.created)})]}),e.roescJoin&&s.jsxs("tr",{children:[s.jsx("th",{children:"Joined RoESC:"}),s.jsx("td",{children:o(e.roescJoin)})]}),e.closed&&s.jsxs("tr",{children:[s.jsx("th",{children:"Closed:"}),s.jsx("td",{children:o(e.closed)})]}),s.jsx("tr",{children:s.jsx("td",{colSpan:2,style:{textAlign:"center"},children:s.jsx(b,{links:e.links})})})]})]})})}function J(){const{link:e}=l(),[r,t]=n.useState(),[d,c]=n.useState("");return n.useEffect(()=>{x(e).then(i=>t(i)).catch(i=>c(i))},[e]),d?s.jsxs("h1",{children:["Error: ",d]}):r?s.jsxs("div",{children:[s.jsx("h1",{children:r.name}),s.jsx("hr",{}),s.jsx(f,{data:r}),s.jsx("div",{children:s.jsx(j,{value:r.textContent,overrides:{BroadcastTable:{component:a,props:{data:r.broadcastedShows}}}})}),r.textContent.search(/<BroadcastTable(?:(?: )*|)\/>/g)===-1&&s.jsxs("div",{children:[s.jsx("h2",{children:"Broadcasted Shows"}),s.jsx(a,{data:r.broadcastedShows})]}),s.jsx(g,{images:r.logos,name:"logos"}),s.jsx("hr",{style:{clear:"both"}}),s.jsx(h,{to:`/editor/broadcasters/existing/${r.id}`,className:"button is-primary is-outlined",children:"Edit This Page"})]}):s.jsx("h1",{children:"Loading..."})}export{J as default};
