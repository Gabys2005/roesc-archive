import{r as e,j as s,L as o}from"./index-00973617.js";import{b as m}from"./fetchData-41e8535f.js";import{U as c}from"./UsersString-7b21ee1b.js";import{T as l}from"./Table-5fce3750.js";import"./users-e597582c.js";function u(){const[t,i]=e.useState([]);return e.useEffect(()=>{m().then(r=>{i(r)})},[]),s.jsx(l,{columns:["#","Name","Owner(s)"],smallFirst:!0,children:t.map((r,n)=>s.jsxs("tr",{children:[s.jsx("td",{children:n+1}),s.jsx("td",{children:s.jsx(o,{to:`/roescs/${r.link}`,children:r.name})}),s.jsx("td",{children:s.jsx(c,{userids:r.owners})})]},r.link))})}export{u as default};
