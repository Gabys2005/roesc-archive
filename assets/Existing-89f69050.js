import{r as i,j as e,L as c}from"./index-11b50e1b.js";import{a as o}from"./fetchData-31fc4ce1.js";function u(){const[t,r]=i.useState(),[n,a]=i.useState(0);return i.useEffect(()=>{o().then(s=>r(s))},[]),t?e.jsxs("div",{children:[e.jsx("h1",{children:"Select a RoESC to edit"}),e.jsx("hr",{}),e.jsx("div",{className:"select is-fullwidth",children:e.jsx("select",{value:n,onChange:s=>a(s.target.value),children:t.map((s,l)=>e.jsx("option",{value:l,children:s.name},s.link))})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(c,{to:t[n].link,className:"button is-primary",children:"Continue"})]}):e.jsx("h1",{children:"Loading..."})}export{u as default};