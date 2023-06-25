import{j as e}from"./index-17a66be7.js";import{T as o,L as h,I as m,U as l}from"./ImagesInput-4710c2af.js";import{D as i,b as x,a as u,T as t,B as c}from"./Info-f730865f.js";import{B as p}from"./BroadcastingTable-eb430d16.js";import{d}from"./utils-1c551ff5.js";function N({users:n,data:a,setData:r}){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"box",children:[e.jsx("h1",{children:"Names"}),e.jsx(o,{name:"Name",description:"Full name of this broadcaster, for example: Giorgio World Media",value:a.name,setValue:s=>r("name",s)}),e.jsx(o,{name:"Short Name",description:"Shortened name of this broadcaster, for example: GWM",value:a.shortName,setValue:s=>r("shortName",s)}),e.jsx(o,{name:"Link",description:"Link for this broadcaster, generally short name but lowercase, for example: gwm",value:a.link,setValue:s=>r("link",s)})]}),e.jsxs("div",{className:"box",children:[e.jsx("h1",{children:"Dates"}),e.jsx(i,{name:"Creation Date",description:"When this broadcaster started their journey",value:a.created,setValue:s=>r("created",s)}),e.jsx(i,{name:"RoESC Join Date",description:"When this broadcaster started livestreaming RoESCs",value:a.roescJoin,setValue:s=>r("roescJoin",s)}),e.jsx(i,{name:"Closure Date",description:"When this broadcaster stopped broadcasting",value:a.closed,setValue:s=>r("closed",s)})]}),e.jsxs("div",{className:"box",children:[e.jsx("h1",{children:"Lists"}),e.jsx(h,{name:"Links",description:"YouTube channel, Twitch channel, Roblox group, etc.",value:a.links,setValue:s=>r("links",s)}),e.jsx("hr",{}),e.jsx(m,{name:"Logos",description:"Logos of the broadcaster",value:a.logos,setValue:s=>r("logos",s),requiredValues:["Dark Logo","Light Logo"]})]}),e.jsxs("div",{className:"box",children:[e.jsx("h1",{children:"People"}),e.jsxs("p",{children:["If someone is missing, you can add them in the ",e.jsx("span",{className:"tag",children:"Users Editor"})," section"]}),e.jsx(l,{users:n,multiple:!0,name:"Owners",description:"Owners of this broadcaster",value:a.owners,setValue:s=>r("owners",s)}),e.jsx("hr",{}),e.jsx(l,{users:n,multiple:!0,name:"Staff",description:"People working for this broadcaster",value:a.staff,setValue:s=>r("staff",s)})]}),e.jsxs("div",{className:"box",children:[e.jsx("h1",{children:"Text"}),e.jsx("p",{children:"Custom components for this editor:"}),e.jsx("ul",{children:e.jsxs("li",{children:[e.jsxs("span",{className:"tag",children:["<","BroadcastTable /",">"]})," ","will generate a table with all shows livestreamed by this broadcaster. If omitted, the table will be generated at the very bottom of this broadcaster","'","s page"]})}),e.jsx(x,{name:"Text content",description:"Markdown that will be displayed next to all of the data from above",children:e.jsx(u,{value:a.textContent,setValue:s=>r("textContent",s),overrides:{BroadcastTable:{component:p,props:{example:!0}}}})})]})]})}function w({users:n,broadcaster:a,downloadName:r}){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"box",children:[e.jsx("h1",{children:"Output"}),e.jsxs("p",{children:["Send these file in the ",e.jsx("span",{className:"tag",children:"Users / Broadcasters"})," thread in the #roesc-archive channel"]})]}),e.jsxs("div",{className:"columns",children:[e.jsx("div",{className:"column",children:e.jsxs("div",{className:"box",children:[e.jsx(t,{disabled:!0,value:JSON.stringify(a,null,4),className:"mb-2"}),e.jsx(c,{onClick:()=>d(a,r||"broadcasters"),children:"Download"})]})}),e.jsx("div",{className:"column",children:e.jsxs("div",{className:"box",children:[e.jsx(t,{disabled:!0,value:JSON.stringify(n,null,4),className:"mb-2"}),e.jsx(c,{onClick:()=>d(n,"users"),children:"Download"})]})})]})]})}export{N as I,w as O};
