import{u as p,r as i,j as o}from"./index-7eefb166.js";import{a as u}from"./roesc-6a9518f3.js";import{E as c}from"./Editor-5068cb24.js";import"./users-8a83242f.js";import"./fetchData-6dc11da3.js";import"./Editor-069e07f0.js";import"./Output-215dc2af.js";import"./Markdown-d752c619.js";import"./OutLink-d60a92a6.js";import"./utils-4982e13e.js";import"./index.esm-50623407.js";import"./v4-872b0555.js";import"./Inputs-ae541765.js";import"./BroadcastingTable-69ee0638.js";import"./Table-adce74ca.js";import"./countryList-da3e760e.js";import"./UserList-66662850.js";function w(){const{roesc:s,link:e}=p(),[t,a]=i.useState(),[m,n]=i.useState("");return i.useEffect(()=>{a(null),n(""),u(s,e).then(r=>{a(r)}).catch(r=>{n(r)})},[s,e]),m!==""?o.jsxs("h1",{children:["Error: ",m]}):t?o.jsx(c,{name:t.edition,initialData:t}):o.jsx("h1",{children:"Loading..."})}export{w as default};
