import{j as e,r as l,L as x,u as j}from"./index-beff47e6.js";import{a as m}from"./fetchData-8482bb86.js";import{p as c}from"./parseDate-e6b73185.js";import{U as d}from"./UsersString-17787f52.js";import{g as h}from"./utils-a9b59537.js";import{L as u}from"./LogoImage-568a60e6.js";import{M as f}from"./Markdown-178a2702.js";import{T as p}from"./Table-58916d27.js";import{g}from"./roesc-c41d1627.js";import{M as b}from"./Media-08b3b460.js";import"./users-0bc15ced.js";import"./MediaSection-4e7b56bd.js";function E({data:r,style:n}){return e.jsx("div",{className:"table-container sideTable",style:n,children:e.jsxs("table",{className:"table is-bordered is-striped is-hoverable",children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsx("th",{colSpan:2,style:{textAlign:"center"},children:r.name})})}),e.jsxs("tbody",{children:[h(r.media,"logos").length>0?e.jsx("tr",{children:e.jsx("td",{colSpan:2,children:e.jsx(u,{logos:h(r.media,"logos")})})}):"",e.jsxs("tr",{children:[e.jsx("th",{children:"Short Name:"}),e.jsx("td",{children:r.shortName})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Owners:"}),e.jsx("td",{children:e.jsx(d,{userids:r.owners})})]}),r.previousOwners.length>0?e.jsxs("tr",{children:[e.jsx("th",{children:"Previous Owners: "}),e.jsx("td",{children:e.jsx(d,{userids:r.previousOwners})})]}):"",e.jsxs("tr",{children:[e.jsx("th",{children:"Created: "}),e.jsx("td",{children:c(r.creationDate)})]}),r.cancellationDate!==""?e.jsxs("tr",{children:[e.jsx("th",{children:"Cancelled: "}),e.jsx("td",{children:c(r.cancellationDate)})]}):"",e.jsx("tr",{children:e.jsx("td",{colSpan:2,style:{textAlign:"center"},children:r.links.map((t,i)=>e.jsxs("a",{href:t.link,target:"_blank",rel:"noreferrer",children:[t.name,e.jsx("br",{})]},i))})})]})]})})}function v({roesc:r}){const[n,t]=l.useState(),[i,o]=l.useState("");return l.useEffect(()=>{t(null),o(""),g(r).then(s=>t(s)).catch(s=>o(s))},[r]),i?e.jsxs("p",{children:["Error: ",i]}):n?e.jsx(p,{columns:["Edition","Host City"],children:n.map((s,a)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(x,{to:`/roescs/${r}/${s.link}`,children:s.edition})}),e.jsx("td",{children:s.venues[0].city})]},a))}):e.jsx("p",{children:"Loading..."})}function S({data:r}){return e.jsxs("div",{children:[e.jsx("h1",{children:r.name}),e.jsx("hr",{}),e.jsx(E,{data:r,style:{float:"right"}}),e.jsx("div",{style:{float:"left"},children:e.jsx(f,{value:r.textContent})}),e.jsx("div",{style:{clear:"both"}}),e.jsx("h1",{children:"Editions"}),e.jsx(v,{roesc:r.link}),e.jsx("hr",{}),e.jsx(b,{media:r.media})]})}function A(){const{roesc:r}=j(),[n,t]=l.useState(),[i,o]=l.useState("");return l.useEffect(()=>{t(null),o(""),m(r).then(s=>{t(s)}).catch(s=>{o(s)})},[r]),i?e.jsxs("h1",{children:["Error: ",i]}):n?e.jsx(S,{data:n}):e.jsx("h1",{children:"Loading..."})}export{A as default};
