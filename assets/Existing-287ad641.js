import{r as e,j as s,L as a}from"./index-767832bb.js";import{U as x}from"./UserList-19579454.js";import{c}from"./users-b00033a0.js";function l(){const[t,i]=e.useState(""),[r,n]=e.useState();return e.useEffect(()=>{c().then(o=>n(o))},[]),r?s.jsxs("div",{children:[s.jsx("h1",{children:"Edit An Existing User"}),s.jsx("hr",{}),s.jsx("h2",{children:"Choose the user that you want to edit"}),s.jsx(x,{value:t,setValue:i,users:r}),s.jsx("br",{}),s.jsx("br",{}),s.jsx(a,{to:t,className:"button is-primary",children:"Continue"})]}):s.jsx("div",{children:s.jsx("h1",{children:"Loading"})})}export{l as default};
