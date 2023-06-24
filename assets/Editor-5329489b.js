import{j as e,r as d}from"./index-00973617.js";import{b as j,a as b,B as f,T as g,I as N}from"./Info-5e156363.js";import{T as h,D as x,L as k,I as w,U as u,E as I,B,a as C}from"./ImagesInput-5f02c264.js";import{B as L}from"./BroadcastingTable-f510713d.js";import{v as S}from"./v4-a960c1f4.js";import{d as E}from"./utils-9e8c86e2.js";function v({users:t,data:a,setData:n}){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"box",children:[e.jsx("h1",{children:"Names"}),e.jsx(h,{name:"Name",description:"Full name of this broadcaster, for example: Giorgio World Media",value:a.name,setValue:s=>n("name",s)}),e.jsx(h,{name:"Short Name",description:"Shortened name of this broadcaster, for example: GWM",value:a.shortName,setValue:s=>n("shortName",s)}),e.jsx(h,{name:"Link",description:"Link for this broadcaster, generally short name but lowercase, for example: gwm",value:a.link,setValue:s=>n("link",s)})]}),e.jsxs("div",{className:"box",children:[e.jsx("h1",{children:"Dates"}),e.jsx(x,{name:"Creation Date",description:"When this broadcaster started their journey",value:a.created,setValue:s=>n("created",s)}),e.jsx(x,{name:"Closure Date",description:"When this broadcaster stopped broadcasting",value:a.closed,setValue:s=>n("closed",s)})]}),e.jsxs("div",{className:"box",children:[e.jsx("h1",{children:"Lists"}),e.jsx(k,{name:"Links",description:"YouTube channel, Twitch channel, Roblox group, etc.",value:a.links,setValue:s=>n("links",s)}),e.jsx("hr",{}),e.jsx(w,{name:"Logos",description:"Logos of the broadcaster",value:a.logos,setValue:s=>n("logos",s),requiredValues:["Dark Logo","Light Logo"]})]}),e.jsxs("div",{className:"box",children:[e.jsx("h1",{children:"People"}),e.jsxs("p",{children:["If someone is missing, you can add them in the ",e.jsx("span",{className:"tag",children:"Users Editor"})," section"]}),e.jsx(u,{users:t,multiple:!0,name:"Owners",description:"Owners of this broadcaster",value:a.owners,setValue:s=>n("owners",s)}),e.jsx("hr",{}),e.jsx(u,{users:t,multiple:!0,name:"Staff",description:"People working for this broadcaster",value:a.staff,setValue:s=>n("staff",s)})]}),e.jsxs("div",{className:"box",children:[e.jsx("h1",{children:"Text"}),e.jsx("p",{children:"Custom components for this editor:"}),e.jsx("ul",{children:e.jsxs("li",{children:[e.jsxs("span",{className:"tag",children:["<","BroadcastTable /",">"]})," ","will generate a table with all shows livestreamed by this broadcaster. If omitted, the table will be generated at the very bottom of this broadcaster","'","s page"]})}),e.jsx(j,{name:"Text content",description:"Markdown that will be displayed next to all of the data from above",children:e.jsx(b,{value:a.textContent,setValue:s=>n("textContent",s),overrides:{BroadcastTable:{component:L,props:{example:!0}}}})})]})]})}const p={name:"",shortName:"",link:"",created:"",closed:"",links:[],logos:[{name:"Light Logo",link:""},{name:"Dark Logo",link:""}],textContent:"",owners:[],staff:[]};function T({users:t,addBroadcaster:a}){const n=localStorage.getItem("backup-broadcaster"),[s,c]=d.useState(n?JSON.parse(n):p);return d.useEffect(()=>{localStorage.setItem("backup-broadcaster",JSON.stringify(s))},[s]),e.jsxs("div",{children:[e.jsx(v,{users:t,data:s,setData:(i,l)=>c({...s,[i]:l})}),e.jsx("div",{className:"box",children:e.jsx(f,{onClick:()=>{a({id:S(),name:s.name,shortName:s.shortName,link:s.link,created:s.created,closed:s.closed,links:s.links,logos:s.logos,owners:s.owners,staff:s.staff,textContent:s.textContent}),c(p)},children:"Create Broadcaster"})})]})}function V({broadcasters:t,setBroadcasters:a,users:n}){var l;const[s,c]=d.useState((l=t[0])==null?void 0:l.id),i=t.map(o=>e.jsxs("option",{value:o.id,children:[o.name," (",o.shortName,")"]},o.id));return e.jsxs("div",{children:[e.jsx("div",{className:"box",children:e.jsx(j,{name:"Choose a broadcaster to edit",children:e.jsx("div",{className:"select is-fullwidth",children:e.jsx("select",{value:s,onChange:o=>c(o.target.value),children:i})})})}),e.jsx(v,{data:t.find(o=>o.id===s),setData:(o,r)=>a(t.map(m=>m.id===s?{...m,[o]:r}:m)),users:n})]})}function y({data:t}){return e.jsxs("div",{className:"box",children:[e.jsx("h1",{children:"Output"}),e.jsx("p",{children:"Send this file in the Broadcasters thread in the #roesc-archive channel"}),e.jsx(g,{disabled:!0,value:JSON.stringify(t,null,4),className:"mb-2"}),e.jsx(f,{onClick:()=>E(t,"broadcasters"),children:"Download"})]})}function G({broadcasters:t,setBroadcasters:a,users:n,setUsers:s,embedded:c}){const i=[{name:"Edit Broadcasters",component:e.jsx(V,{broadcasters:t,setBroadcasters:a,users:n})},{name:"New Broadcaster",component:e.jsx(T,{users:n,addBroadcaster:r=>a([...t,r])})},{name:"|"},{name:"Users Editor",component:e.jsx(C,{users:n,setUsers:s})}];c||(i.splice(0,0,{name:"Info",component:e.jsx(N,{})}),i.splice(3,0,{name:"Output",component:e.jsx(y,{data:t})}));const[l,o]=d.useState(i[0].name);return e.jsxs("div",{children:[e.jsx("div",{className:"box",children:e.jsx("div",{className:"tabs is-centered",children:e.jsx("ul",{className:"ml-0",children:i.map(r=>e.jsx("li",{className:l===r.name?"is-active":"",children:e.jsx("a",{onClick:()=>r.name!=="|"&&o(r.name),children:r.name})},r.name))})})}),e.jsx(I,{FallbackComponent:B,children:i.find(r=>r.name===l).component})]})}export{G as E};
