import{r as n,u as l,_ as e,a as t,j as p}from"./index-b39423cb.js";import{_ as f}from"./dynamic-import-helper-be004503.js";import{N as g}from"./NationalFinalsList-096c99b7.js";import"./Flag-fd888b75.js";import"./TableHeader-e96d4ade.js";function P(){const[o,r]=n.useState(!0),[s,d]=n.useState(),{roesc:a,edition:i,nf:_}=l();return n.useEffect(()=>{f(Object.assign({"../data/generated/combined.json":()=>e(()=>import("./combined-f42231e6.js"),[]),"../data/generated/esc.json":()=>e(()=>import("./esc-22b24732.js"),[]),"../data/generated/gesc.json":()=>e(()=>import("./gesc-7904ce2f.js"),[]),"../data/generated/nresc.json":()=>e(()=>import("./nresc-48acdc9e.js"),[]),"../data/generated/sesc.json":()=>e(()=>import("./sesc-0e3c464b.js"),[])}),`../data/generated/${a}.json`).then(c=>{const m=c.editions.find(u=>u.link===i);d(m.nfs),r(!1)})},[a,i,_]),o?t("h1",{children:"Loading..."}):p("div",{children:[t("h1",{children:"National Finals"}),t("hr",{}),t(g,{source:s,roesc:a,edition:i})]})}export{P as default};
