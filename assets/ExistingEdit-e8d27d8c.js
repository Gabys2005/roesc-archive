import{u as n,r as i,j as o}from"./index-11b50e1b.js";import{a as u}from"./roesc-ff4e6864.js";import{E as c}from"./Editor-5cfce813.js";import"./users-45c85a33.js";import"./fetchData-31fc4ce1.js";import"./Editor-8b870363.js";import"./Output-e13c363d.js";import"./Markdown-192092f6.js";import"./OutLink-5202f1c5.js";import"./index.esm-c359d6ed.js";import"./v4-872b0555.js";import"./Inputs-79e311c8.js";import"./BroadcastingTable-af0bdc01.js";import"./Table-54b5198d.js";import"./countryList-498b3ce4.js";import"./UserList-9f257db4.js";import"./BiddingTable-83ecda22.js";function v(){const{roesc:s,link:a}=n(),[t,e]=i.useState(),[m,p]=i.useState("");return i.useEffect(()=>{e(null),p(""),u(s,a).then(r=>{e(r)}).catch(r=>{p(r)})},[s,a]),m!==""?o.jsxs("h1",{children:["Error: ",m]}):t?o.jsx(c,{name:t.fullName,initialData:t}):o.jsx("h1",{children:"Loading..."})}export{v as default};
