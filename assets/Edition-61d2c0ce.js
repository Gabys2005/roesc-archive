import{u as p,r as o,j as i}from"./index-9a3ba486.js";import{E as c}from"./Editor-8ac2d7fa.js";import{a as u}from"./roesc-cd091e88.js";import"./users-ab3ae7f6.js";import"./fetchData-b531ca74.js";import"./Editor-56c5434e.js";import"./Button-35cd4d45.js";import"./Markdown-a1ca881b.js";import"./utils-43366424.js";import"./Editor-cf6e7bc5.js";import"./ImagesInput-45aa32bd.js";import"./parseDate-e6b73185.js";import"./OutLink-a3797e63.js";import"./BroadcastingTable-23a7ce87.js";import"./Table-8bd37db6.js";import"./showList-e6e837d7.js";function v(){const{roesc:e,edition:s}=p(),[t,a]=o.useState(),[m,n]=o.useState("");return o.useEffect(()=>{a(null),n(""),u(e,s).then(r=>a(r)).catch(r=>n(r))},[e,s]),m!==""?i.jsxs("h1",{children:["Error: ",m]}):t?i.jsx(c,{name:t.edition,initialData:t}):i.jsx("h1",{children:"Loading..."})}export{v as default};
