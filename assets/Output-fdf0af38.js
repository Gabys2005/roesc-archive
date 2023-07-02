import{j as e,L as f,r as m}from"./index-ddc4a9f6.js";import{M as g,p as v}from"./Markdown-ad17c2cf.js";import{O as b,d as y}from"./OutLink-b8274887.js";function c({name:s,description:n,children:t}){return e.jsxs("div",{className:"field",children:[e.jsxs("label",{className:"label",children:[s," ",e.jsx("span",{className:"has-text-grey has-text-weight-normal",children:n&&`- ${n}`})]}),t]})}function l(s){let n="button ";return s.color==="danger"?n+="is-danger ":n+="is-primary ",s.size==="small"&&(n+="is-small"),s.link?e.jsx(f,{to:s.to,className:n,children:s.children}):e.jsx("button",{className:n,onClick:s.onClick,children:s.children})}function u({value:s,setValue:n,showDeleteButton:t,remove:i}){return e.jsxs("div",{className:"field has-addons",children:[e.jsx("div",{className:"control is-expanded",children:e.jsx("input",{className:"input",type:"text",value:s.username,onChange:o=>n({...s,username:o.target.value}),placeholder:"Username"})}),e.jsx("div",{className:"control is-expanded",children:e.jsx("input",{type:"text",className:"input",value:s.id,onChange:o=>n({...s,id:o.target.value}),placeholder:"Account ID"})}),t?e.jsx("div",{className:"control",children:e.jsx(l,{color:"danger",onClick:i,children:"X"})}):""]})}function j({disabled:s,value:n,className:t,setValue:i,style:o}){return e.jsx("textarea",{className:`textarea ${t}`,rows:"20",disabled:s,value:n,onChange:r=>i(r.target.value),style:o})}function w({value:s,setValue:n,overrides:t}){return m.useEffect(()=>{s==null&&n("")},[s,n]),s==null?e.jsx(e.Fragment,{}):e.jsxs("div",{className:"columns",children:[e.jsx("div",{className:"column",children:e.jsx(j,{style:{height:"100%"},value:s,setValue:n})}),e.jsx("div",{className:"column",children:e.jsx(g,{value:s,overrides:t})})]})}function k({name:s,description:n,value:t,setValue:i}){function o(r,a){const d=t.map((h,p)=>p===r?a:h);i(d)}return e.jsxs(c,{name:s,description:n,children:[t.map((r,a)=>e.jsxs("div",{className:"field has-addons",children:[e.jsx("div",{className:"control is-expanded",children:e.jsx("input",{className:"input",type:"text",value:r,onChange:d=>o(a,d.target.value)})}),e.jsx("div",{className:"control",children:e.jsx(l,{color:"danger",onClick:()=>i(t.filter((d,h)=>h!==a)),children:"X"})})]},a)),e.jsx(l,{onClick:()=>i([...t,""]),children:"Add Another"})]})}function x({name:s,description:n,value:t,setValue:i}){return e.jsx(c,{name:s,description:n,children:e.jsxs("div",{className:"field has-addons",children:[e.jsx("div",{className:"control is-expanded",children:e.jsx("input",{className:"input",type:"text",value:t,onChange:o=>i(o.target.value),placeholder:"YYYY/MM/DD"})}),e.jsx("div",{className:"control",children:e.jsx("div",{className:"button is-static",children:v(t)})})]})})}function S({data:s,setData:n}){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"box",children:[e.jsx("h2",{children:"Names"}),e.jsx(c,{name:"Current Account",description:"Current Roblox username and ID",children:e.jsx(u,{value:s.current,setValue:t=>n("current",t)})}),e.jsx("hr",{}),e.jsxs(c,{name:"Previous Accounts",description:"Previous Roblox usernames and IDs",children:[s.previous.map((t,i)=>e.jsx(u,{value:t,setValue:o=>n("previous",s.previous.map((r,a)=>i==a?o:r)),showDeleteButton:!0,remove:()=>n("previous",s.previous.filter((o,r)=>r!==i))},i)),e.jsx(l,{onClick:()=>n("previous",[...s.previous,{username:"",id:""}]),children:"Add Another"})]}),e.jsx("hr",{}),e.jsx(k,{name:"Aliases",description:"Previous usernames that weren't separate accounts",value:s.aliases,setValue:t=>n("aliases",t)})]}),e.jsxs("div",{className:"box",children:[e.jsx("h2",{children:"Written content"}),e.jsx(c,{name:"Written content",description:"This content will be displayed next to the info table on that user's page",children:e.jsx(w,{value:s.textContent,setValue:t=>n("textContent",t)})})]}),e.jsxs("div",{className:"box",children:[e.jsx("h2",{children:"Dates"}),e.jsx(x,{name:"Join date",description:"When this user joined the RoESC community",value:s.joined,setValue:t=>n("joined",t)}),e.jsx(x,{name:"Leave date",description:"When this user left/quit the RoESC community. Leave empty if they're still active in the community",value:s.left,setValue:t=>n("left",t)})]})]})}function A({optional:s}){const[n,t]=m.useState(!s);return e.jsxs("div",{className:"box",children:[s&&e.jsxs(l,{onClick:()=>t(!n),children:[n?"Hide":"Show"," Basic Information About Editing"]}),n&&e.jsxs(e.Fragment,{children:[e.jsxs("h2",{children:["Important: When you","'","re done making edits"]}),e.jsxs("p",{children:["RoESC Archive is a fully static site, meaning it","'","s impossible to edit the site live. When you make the changes you wanted to make, go to the ",e.jsx("b",{children:"Output"})," section and download all files found there. Then go to the #roesc-archive channel in the Gybasoft server and send those files in the appropriate thread."]}),e.jsxs("h2",{children:["You don","'","t have to edit everything at once"]}),e.jsxs("p",{children:["You can download the files, take a break and import them later. If you don","'","t know the answer to some of the fields or you","'","re just too lazy to fill them out right now, leave them empty. Maybe someone else will do it for you."]}),e.jsx("h2",{children:"Images"}),e.jsxs("p",{children:["Once again, RoESC Archive is fully static so it","'","s just not possible to upload files. Some fields ask you to upload files, this is done just to get their name. When sending the files downloaded from Output, remember to include those images as well so I can upload them."]}),e.jsx("h2",{children:"Switching between editors"}),e.jsxs("p",{children:["If you want to add a broadcaster or a user while using another editor, make sure to switch to the right one in the tab bar here. Don","'","t go to the main editor website, as that will cause your changes to be lost (sorry!)"]}),e.jsx("h2",{children:"Markdown / Text Content / Written Content"}),e.jsx("p",{children:"Fields labeled as one of the above are markdown editors. You can use:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"*cursive*"}),e.jsx("li",{children:"**bold**"}),e.jsx("li",{children:"~~strikethrough~~"}),e.jsx("li",{children:"# Headers (also ##, ###, and so on)"}),e.jsx("li",{children:"--- (horizontal line)"}),e.jsx("li",{children:"[name](link) - named links"}),e.jsx("li",{children:e.jsx(b,{to:"https://www.markdownguide.org/basic-syntax/",children:"Full Guide"})})]}),e.jsx("p",{children:"You can see a live preview of your text to make it easier to use"}),e.jsxs("p",{children:["Some pages allow you to insert generated content (like tables) into your markdown content. They","'","re going to be listed above the markdown box. You insert them like this:"," "]}),e.jsxs("pre",{children:["<","SomeTable /",">"]}),e.jsxs("p",{children:["Those components often use generated content which isn","'","t available at the time of editing, so an example will be displayed instead"]}),e.jsxs("h2",{children:["Why isn","'","t RoESC Archive just a text editor, like other wikis?"]}),e.jsx("p",{children:"Because having data organised like this allows me to generate other stuff with it (for example automatic country / user pages, records, etc.), as well as keep it consistent between RoESCs."}),e.jsx("h2",{children:"Questions"}),e.jsxs("p",{children:["If you","'","re confused about something or you just have a question, you can ask it in Gybasoft #general or in my DMs. My Discord username is ",e.jsx("span",{className:"tag",children:".gabys"})]})]})]})}function M({data:s,downloadName:n}){return e.jsxs("div",{className:"box",children:[e.jsx("h2",{children:"Output"}),e.jsxs("p",{children:["Send this file in the ",e.jsx("span",{className:"tag",children:"Users / Broadcasters"})," thread in the #roesc-archive channel"]}),e.jsx(j,{disabled:!0,value:JSON.stringify(s,null,4),className:"mb-2"}),e.jsx(l,{onClick:()=>y(s,n||"user"),children:"Download"})]})}export{l as B,x as D,A as I,k as M,M as O,j as T,S as a,w as b,c};
