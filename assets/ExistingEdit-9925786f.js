import{u as p,r as i,j as o}from"./index-7a857c10.js";import{a as u}from"./roesc-b7a4f800.js";import{E as c}from"./Editor-0763a34c.js";import"./users-467c4b94.js";import"./fetchData-a1ba928f.js";import"./Editor-644e3530.js";import"./Output-6cea2ac4.js";import"./Markdown-e6af9996.js";import"./OutLink-23ff3c7e.js";import"./utils-6136262e.js";import"./index.esm-bd6b7ec4.js";import"./v4-872b0555.js";import"./Inputs-c73c903a.js";import"./BroadcastingTable-c31709df.js";import"./Table-ccebe09a.js";import"./countryList-da3e760e.js";import"./UserList-c72588f6.js";function w(){const{roesc:s,link:e}=p(),[t,a]=i.useState(),[m,n]=i.useState("");return i.useEffect(()=>{a(null),n(""),u(s,e).then(r=>{a(r)}).catch(r=>{n(r)})},[s,e]),m!==""?o.jsxs("h1",{children:["Error: ",m]}):t?o.jsx(c,{name:t.edition,initialData:t}):o.jsx("h1",{children:"Loading..."})}export{w as default};
