import{r as i,j as t,L as x}from"./index-39c65143.js";import{a as j}from"./fetchData-d16b6d81.js";import{g as m}from"./roesc-e5813c88.js";function E(){var d;const[s,u]=i.useState([]),[l,h]=i.useState(0),[a,o]=i.useState(0),[c,r]=i.useState([]);return i.useEffect(()=>{j().then(e=>u(e))},[]),i.useEffect(()=>{var e;r([]),o(0),m((e=s[l])==null?void 0:e.link).then(n=>r(n))},[l,s]),s?t.jsxs("div",{children:[t.jsx("h1",{children:"Select a RoESC to edit"}),t.jsx("hr",{}),t.jsx("div",{className:"select is-fullwidth",children:t.jsx("select",{value:l,onChange:e=>h(e.target.value),children:s.map((e,n)=>t.jsx("option",{value:n,children:e.name},e.link))})}),t.jsx("div",{className:"select is-fullwidth",children:t.jsx("select",{value:a,onChange:e=>o(e.target.value),children:c.map((e,n)=>t.jsx("option",{value:n,children:e.edition},e.link))})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(x,{className:"button is-primary",to:s.length>0?`${s[l].link}/${(d=c[a])==null?void 0:d.link}`:"",children:"Continue"})]}):t.jsx("h1",{children:"Loading..."})}export{E as default};