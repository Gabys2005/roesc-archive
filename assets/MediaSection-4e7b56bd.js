import{j as e}from"./index-beff47e6.js";const n="https://roesc-archive.gabys.workers.dev";function t({link:r,isLink:i}){if(!r)return e.jsx("div",{className:"p-2",children:"🦫"});const s=e.jsx("img",{className:"p-2",src:`${n}/${r}`});return i?e.jsx("a",{href:`${n}/${r}`,target:"_blank",rel:"noreferrer",children:s}):s}const a={logos:"Logos"};function c({images:r,name:i}){return r.filter(s=>s.link).length===0?e.jsx(e.Fragment,{}):e.jsxs("div",{children:[e.jsx("h2",{children:a[i]}),e.jsx("div",{className:"columns is-multiline",children:r.filter(s=>s.link).map(s=>e.jsx("div",{className:"column is-one-quarter-desktop is-two-thirds-tablet",children:e.jsxs("figure",{className:"box",children:[e.jsx(t,{link:s.link,isLink:!0}),e.jsx("figcaption",{children:s.name})]})},s.link))})]})}export{t as M,c as a};
