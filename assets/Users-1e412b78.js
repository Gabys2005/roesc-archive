import{r as n,j as s,L as a}from"./index-beff47e6.js";import{b as l}from"./users-0bc15ced.js";import{T as o}from"./Table-58916d27.js";function d(){const[r,i]=n.useState([]);return n.useEffect(()=>{l().then(e=>i(e))},[]),r.length===0?s.jsx("p",{children:"Loading..."}):s.jsx(o,{columns:["#","Username","Also Known As","Previous Usernames"],smallFirst:!0,children:r.map((e,t)=>s.jsxs("tr",{children:[s.jsx("th",{children:t+1}),s.jsx("td",{children:s.jsx(a,{to:`/users/${e.name}`,children:e.name})}),s.jsx("td",{children:e.aliases.join(", ")}),s.jsx("td",{children:e.previousNames.join(", ")})]},e.id))})}function x(){return s.jsxs("div",{children:[s.jsx("h1",{children:"User List"}),s.jsx("hr",{}),s.jsx("p",{children:"This list is in an alphabetical order"}),s.jsx(d,{})]})}export{x as default};
