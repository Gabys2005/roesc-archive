import{_ as e}from"./index-2c7134b2.js";const a=(r,o)=>{const t=r[o];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((i,n)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+o)))})};function s(r){return new Promise((o,t)=>{a(Object.assign({"../data/generated/broadcasters.json":()=>e(()=>import("./broadcasters-761a8415.js"),[]),"../data/generated/broadcasters_detailed.json":()=>e(()=>import("./broadcasters_detailed-8e7c4dd7.js"),[]),"../data/generated/gesc.json":()=>e(()=>import("./gesc-4a92a1fe.js"),[]),"../data/generated/lfst.json":()=>e(()=>import("./lfst-eeb5cf20.js"),[]),"../data/generated/nresc.json":()=>e(()=>import("./nresc-937fc694.js"),[]),"../data/generated/roescs.json":()=>e(()=>import("./roescs-22d96b80.js"),[]),"../data/generated/users.json":()=>e(()=>import("./users-71bdefb3.js"),[])}),`../data/generated/${r}.json`).then(i=>{o(i.default)}).catch(()=>{t("This RoESC doesn't exist")})})}function d(r,o){return new Promise((t,i)=>{a(Object.assign({"../data/original/gesc/main.json":()=>e(()=>import("./main-b630ab94.js"),[]),"../data/original/lfst/main.json":()=>e(()=>import("./main-29e12d87.js"),[]),"../data/original/nresc/04.json":()=>e(()=>import("./04-6c5b536f.js"),[]),"../data/original/nresc/main.json":()=>e(()=>import("./main-64b91711.js"),[])}),`../data/original/${r}/${o}.json`).then(n=>t(n.default)).catch(()=>i("This RoESC or edition doesn't exist (yet)"))})}export{d as a,s as g};