import{r as t,j as e}from"./index-767832bb.js";import{F as m}from"./index.esm-7d64a09e.js";import{B as S}from"./Info-34ac6467.js";import{E as C}from"./Editor-64d8135b.js";import"./Markdown-5b0ced84.js";import"./utils-81a459e7.js";import"./OutLink-ffda679b.js";import"./users-b00033a0.js";import"./fetchData-0cf5f178.js";import"./Editor-3009b770.js";import"./v4-872b0555.js";import"./Inputs-2ad68ef4.js";import"./BroadcastingTable-afac40b3.js";import"./Table-c0f63105.js";import"./countryList-da3e760e.js";import"./UserList-19579454.js";function G(){const[a,d]=t.useState(),[i,p]=t.useState(),[r,f]=t.useState(""),[l,n]=t.useState(),[x,h]=t.useState();function j(){if(a.type!=="application/json")return f("This file is not valid");const s=new FileReader;s.onload=async u=>{const N=u.target.result,o=JSON.parse(N);if(i){const c=new FileReader;c.onload=g=>{const b=g.target.result,F=JSON.parse(b);h(F),n(o)},c.readAsText(i)}else n(o)},s.readAsText(a)}return l?e.jsx(C,{name:l.edition,initialData:l,initialUsers:x}):e.jsxs("div",{children:[e.jsx("h1",{children:"Edit homepage data from file"}),e.jsx("hr",{}),e.jsx("div",{className:`file has-name is-fullwidth ${r&&"is-danger"}`,children:e.jsxs("label",{className:"file-label",children:[e.jsx("input",{className:"file-input",type:"file",onChange:s=>d(s.target.files[0])}),e.jsxs("span",{className:"file-cta",children:[e.jsx("span",{className:"file-icon",children:e.jsx(m,{})}),e.jsx("span",{className:"file-label",children:"Choose an edition file…"})]}),e.jsx("span",{className:"file-name",children:a==null?void 0:a.name})]})}),e.jsx("br",{}),e.jsx("div",{className:`file has-name is-fullwidth ${r&&"is-danger"}`,children:e.jsxs("label",{className:"file-label",children:[e.jsx("input",{className:"file-input",type:"file",onChange:s=>p(s.target.files[0])}),e.jsxs("span",{className:"file-cta",children:[e.jsx("span",{className:"file-icon",children:e.jsx(m,{})}),e.jsx("span",{className:"file-label",children:"Choose a users file…"})]}),e.jsx("span",{className:"file-name",children:i==null?void 0:i.name})]})}),e.jsx("br",{}),e.jsx(S,{onClick:j,children:"Continue"})]})}export{G as default};
