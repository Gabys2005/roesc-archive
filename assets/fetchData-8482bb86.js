import{_ as r}from"./index-beff47e6.js";function _(){return new Promise(e=>{r(()=>import("./roescs-6e7f6fa1.js"),[]).then(t=>{e(t.default)})})}function u(e){return new Promise((t,n)=>{_().then(s=>{const o=s.find(i=>i.link===e.toLowerCase());o?t(o):n("This RoESC doesn't exist (yet)")})})}function c(){return new Promise(e=>{r(()=>import("./broadcasters-ccc2400d.js"),[]).then(t=>{e(t.default)})})}export{u as a,c as b,_ as g};
