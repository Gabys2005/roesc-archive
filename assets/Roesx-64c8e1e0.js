import{u as c,r as e,j as s}from"./index-2c7134b2.js";import{R as m}from"./RoescEditor-10006145.js";import{g as u}from"./fetchData-a62960bf.js";import"./ImagesInput-20ca40a1.js";import"./parseDate-e6b73185.js";function h(){const{link:a}=c(),[t,o]=e.useState(),[n,i]=e.useState("");return e.useEffect(()=>{o(null),i(""),u(a).then(r=>{o(r)}).catch(r=>{i(r)})},[a]),n!==""?s.jsxs("h1",{children:["Error: ",n]}):t?s.jsx(m,{name:t.name,initialData:t}):s.jsx("h1",{children:"Loading..."})}export{h as default};
