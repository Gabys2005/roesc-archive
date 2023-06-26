import{j as e,r as l,L as a,u as j}from"./index-06e615ff.js";import{g as m}from"./fetchData-3839814f.js";import{p as c,M as u}from"./Markdown-50067b5c.js";import{U as d}from"./UsersString-fd795583.js";import{g as h}from"./utils-86689d73.js";import{L as p}from"./LogoImage-677fbd2c.js";import{T as f}from"./Table-9a73dc10.js";import{g}from"./roesc-db9af543.js";import{T as b,C as E,M as y}from"./Media-39a3f875.js";import"./users-f70d0145.js";import"./MediaSection-e6fffaad.js";import"./countryList-2a07b954.js";function v({data:r,style:n}){return e.jsx("div",{className:"table-container sideTable",style:n,children:e.jsxs("table",{className:"table is-bordered is-striped is-hoverable",children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsx("th",{colSpan:2,style:{textAlign:"center"},children:r.name})})}),e.jsxs("tbody",{children:[h(r.media,"logos").length>0?e.jsx("tr",{children:e.jsx("td",{colSpan:2,children:e.jsx(p,{logos:h(r.media,"logos")})})}):"",e.jsxs("tr",{children:[e.jsx("th",{children:"Short Name:"}),e.jsx("td",{children:r.shortName})]}),e.jsxs("tr",{children:[e.jsx("th",{children:"Owners:"}),e.jsx("td",{children:e.jsx(d,{userids:r.owners})})]}),r.previousOwners.length>0?e.jsxs("tr",{children:[e.jsx("th",{children:"Previous Owners: "}),e.jsx("td",{children:e.jsx(d,{userids:r.previousOwners})})]}):"",e.jsxs("tr",{children:[e.jsx("th",{children:"Created: "}),e.jsx("td",{children:c(r.creationDate)})]}),r.cancellationDate!==""?e.jsxs("tr",{children:[e.jsx("th",{children:"Cancelled: "}),e.jsx("td",{children:c(r.cancellationDate)})]}):"",e.jsx("tr",{children:e.jsx("td",{colSpan:2,style:{textAlign:"center"},children:r.links.map((t,i)=>e.jsxs("a",{href:t.link,target:"_blank",rel:"noreferrer",children:[t.name,e.jsx("br",{})]},i))})})]})]})})}function S({roesc:r}){const[n,t]=l.useState(),[i,o]=l.useState("");return l.useEffect(()=>{t(null),o(""),g(r).then(s=>t(s)).catch(s=>o(s))},[r]),i?e.jsxs("p",{children:["Error: ",i]}):n?e.jsx(f,{columns:["Edition","Host City","Date"],children:n.map((s,x)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(a,{to:`/roescs/${r}/${s.link}`,children:s.edition})}),e.jsx("td",{children:e.jsxs(b,{children:[s.venues[0].city,", ",e.jsx(E,{id:s.venues[0].country})]})}),e.jsx("td",{children:c(s.date)})]},x))}):e.jsx("p",{children:"Loading..."})}function k({data:r}){return e.jsxs("div",{children:[e.jsx("h1",{children:r.name}),e.jsx("hr",{}),e.jsx(v,{data:r,style:{float:"right"}}),e.jsx("div",{children:e.jsx(u,{value:r.textContent})}),e.jsx("div",{style:{clear:"both"}}),e.jsx("h1",{children:"Editions"}),e.jsx(S,{roesc:r.link}),e.jsx("hr",{}),e.jsx(y,{media:r.media}),e.jsx("hr",{style:{clear:"both"}}),e.jsx(a,{to:`/editor/main/existing/${r.link}`,className:"button is-primary is-outlined",children:"Edit This Page"})]})}function U(){const{roesc:r}=j(),[n,t]=l.useState(),[i,o]=l.useState("");return l.useEffect(()=>{t(null),o(""),m(r).then(s=>{t(s)}).catch(s=>{o(s)})},[r]),i?e.jsxs("h1",{children:["Error: ",i]}):n?e.jsx(k,{data:n}):e.jsx("h1",{children:"Loading..."})}export{U as default};
