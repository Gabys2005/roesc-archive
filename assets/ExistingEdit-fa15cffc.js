import{u as p,r as i,j as o}from"./index-39c65143.js";import{a as u}from"./roesc-e5813c88.js";import{E as c}from"./Editor-6550b404.js";import"./users-51239890.js";import"./fetchData-d16b6d81.js";import"./Editor-1ed0e0dd.js";import"./Output-2655c384.js";import"./Markdown-3e4b824a.js";import"./OutLink-45fd4ae7.js";import"./index.esm-6410f5e6.js";import"./v4-872b0555.js";import"./Inputs-f478ece4.js";import"./BroadcastingTable-a730adae.js";import"./Table-aa9625fc.js";import"./countryList-fb00d126.js";import"./UserList-c8773b24.js";import"./BiddingTable-907a1931.js";function w(){const{roesc:s,link:e}=p(),[t,a]=i.useState(),[m,n]=i.useState("");return i.useEffect(()=>{a(null),n(""),u(s,e).then(r=>{a(r)}).catch(r=>{n(r)})},[s,e]),m!==""?o.jsxs("h1",{children:["Error: ",m]}):t?o.jsx(c,{name:t.edition,initialData:t}):o.jsx("h1",{children:"Loading..."})}export{w as default};
