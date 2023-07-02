import{j as s,r as h,L as S,u as N}from"./index-6ab4e81d.js";import{a as w}from"./roesc-9699f327.js";import{g as E}from"./fetchData-1b36219e.js";import{p as A,M as m}from"./Markdown-782170bc.js";import{T as f}from"./Table-b8ae0673.js";import{O as P}from"./OutLink-bad4ca26.js";import{T as u,C as x,M as C}from"./Media-f3c6f146.js";import{g as v,f as M,c as k}from"./utils-ac6326dd.js";import{M as D}from"./MediaSection-325c24ec.js";import{s as p,v as B,B as L}from"./BiddingTable-33a71d0a.js";import{U as T}from"./UsersString-6b021a9c.js";import{g as R}from"./broadcasters-cf094ffa.js";import"./countryList-b15a9240.js";import"./users-0756d182.js";function b({data:i,titleOnly:l}){const e=l?i.title:`${i.artists.join(", ")} - ${i.title}`;return s.jsx("span",{children:s.jsx(P,{to:i.link,children:e})})}function $({ids:i}){const[l,e]=h.useState([]);return h.useEffect(()=>{const n=i.filter(t=>!!t).map(t=>R(t));Promise.all(n).then(t=>{e(t.map((r,d)=>s.jsxs(S,{to:`/broadcasters/${r.link}`,children:[r.name,d===t.length-1?"":", "]},r.id)))})},[i]),l}function O({data:i,roescData:l}){return s.jsx("div",{className:"table-container sideTable",style:{float:"right",marginLeft:"1rem"},children:s.jsxs("table",{className:"table is-bordered is-striped is-hoverable",children:[s.jsx("thead",{children:s.jsx("tr",{style:{textAlign:"center"},children:s.jsxs("th",{colSpan:2,children:[l.name," ",i.edition]})})}),s.jsxs("tbody",{children:[v(i.media,"logos").length>0?s.jsx("tr",{children:s.jsx("td",{colSpan:2,children:s.jsx(D,{link:v(i.media,"logos")[0].link})})}):"",s.jsxs("tr",{children:[s.jsx("th",{children:"Presenters"}),s.jsx("td",{children:i.presenters.map((e,n)=>s.jsxs("span",{children:[e.name," ",e.id&&s.jsxs("span",{children:["(",s.jsx(T,{userids:[e.id]}),")"]}),s.jsx("br",{})]},n))})]}),i.broadcasters.length>0&&s.jsxs("tr",{children:[s.jsx("th",{children:"Broadcaster"}),s.jsx("td",{children:s.jsx($,{ids:i.broadcasters})})]}),s.jsx("tr",{style:{textAlign:"center"},children:s.jsx("th",{colSpan:2,children:"Dates"})}),i.shows.map(e=>s.jsxs("tr",{children:[s.jsx("th",{children:p[e.id]}),s.jsx("td",{children:A(e.date)})]},e.id)),s.jsx("tr",{style:{textAlign:"center"},children:s.jsx("th",{colSpan:2,children:"Opening Acts"})}),i.shows.map(e=>s.jsxs("tr",{children:[s.jsx("th",{children:p[e.id]}),s.jsx("td",{children:e.openings.map((n,t)=>s.jsxs("div",{children:[s.jsx(b,{data:n}),s.jsx("br",{})]},t))})]},e.id)),s.jsx("tr",{style:{textAlign:"center"},children:s.jsx("th",{colSpan:2,children:"Interval Acts"})}),i.shows.map(e=>s.jsxs("tr",{children:[s.jsx("th",{children:p[e.id]}),s.jsx("td",{children:e.intervals.map((n,t)=>s.jsxs("div",{children:[s.jsx(b,{data:n}),s.jsx("br",{})]},t))})]},e.id))]})]})})}function q(i,l){var d;const e=l.votingMethod,n=(d=B.find(a=>a.value===e))==null?void 0:d.points[0],t=[];i.entries.forEach(a=>{const c=a.shows.find(o=>o.id===l.id);if(c&&c.votes&&c.votes[0]){const o=c.votes[0],j=t.find(g=>g.country=o);j?j.givers.push(a.country):t.push({country:o,givers:[a.country]})}});const r={maxPoints:n,getters:t};return console.log(r),r}function F({data:i,show:l}){const e=q(i,l);return s.jsx(u,{children:s.jsxs("table",{className:"table is-bordered is-striped is-hoverable is-narrow",style:{width:"inherit"},children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"N."}),s.jsx("th",{children:"Contestant"}),s.jsxs("th",{children:["Nation(s) giving ",e.maxPoints," points"]})]})}),s.jsx("tbody",{children:e.getters.map((n,t)=>s.jsxs("tr",{children:[s.jsx("th",{children:n.givers.length}),s.jsx("td",{children:s.jsx(x,{id:n.country})}),s.jsx("td",{children:n.givers.map((r,d)=>s.jsx(x,{id:r},d))})]},t))})]})})}function I(i,l){const e=[];return i.entries.forEach(n=>{const t=n.shows.find(r=>r.id===l);if(t){let r="";t.qualified&&(r="selected"),l==="gf"&&(console.log(t),t.place===1?r="firstplace":t.place===2?r="secondplace":t.place===3&&(r="thirdplace")),e.push({ro:t.order,country:n.country,participant:n.hods,song:n.song,place:t.place,points:t.points.total,qualified:t.qualified,className:r})}}),e.sort((n,t)=>n.ro-t.ro),e}function G({show:i,data:l}){return s.jsx(u,{children:s.jsx("div",{className:"my-5",children:s.jsx(f,{columns:["Order","Country","Participant","Artist","Song","Place","Points"],smallFirst:!0,compact:!0,children:I(l,i).map((e,n)=>s.jsxs("tr",{className:e.className,children:[s.jsx("td",{style:{textAlign:"center"},children:M(e.ro)}),s.jsx("td",{children:s.jsx(x,{id:e.country})}),s.jsx("td",{children:s.jsx(T,{userids:e.participant})}),s.jsx("td",{children:e.song.artists}),s.jsx("td",{children:s.jsx(b,{data:e.song,titleOnly:!0})}),s.jsx("td",{children:e.place}),s.jsx("td",{children:e.points})]},n))})})})}function y(i,l,e){const n=[];return i.entries.forEach(t=>{const r=t.shows.find(d=>d.id===l);if(r){let d="";r.qualified&&(d="selected"),n.push({country:t.country,juryPoints:r.points.jury,telePoints:r.points.tele,className:d})}}),n.sort((t,r)=>t[e]-r[e]),n}function J({show:i,data:l}){const e=y(l,i,"juryPoints"),n=y(l,i,"teleSorted");return s.jsx(u,{children:s.jsx("div",{className:"my-5",children:s.jsx("div",{className:"table-container",children:s.jsxs("table",{className:"table is-bordered is-striped is-hoverable is-narrow",style:{width:"inherit"},children:[s.jsxs("thead",{children:[s.jsx("tr",{children:s.jsx("th",{style:{textAlign:"center"},colSpan:5,children:"Split Results"})}),s.jsxs("tr",{style:{textAlign:"center"},children:[s.jsx("th",{rowSpan:2,children:"Place"}),s.jsx("th",{colSpan:2,children:"Jury"}),s.jsx("th",{colSpan:2,children:"Televoting"})]}),s.jsxs("tr",{children:[s.jsx("th",{children:"Country"}),s.jsx("th",{children:"Points"}),s.jsx("th",{children:"Country"}),s.jsx("th",{children:"Points"})]})]}),s.jsx("tbody",{children:e.map((t,r)=>s.jsxs("tr",{children:[s.jsx("th",{style:{textAlign:"center"},children:r+1}),s.jsx("td",{children:s.jsx(x,{id:t.country})}),s.jsx("td",{children:t.juryPoints}),s.jsx("td",{children:s.jsx(x,{id:n[r].country})}),s.jsx("td",{children:n[r].telePoints})]},r))})]})})})})}function U({data:i,show:l}){return s.jsxs("div",{className:"mb-5",children:[s.jsx("h2",{children:p[l.id]}),s.jsx(m,{value:l.textContent}),s.jsx(G,{data:i,show:l.id}),s.jsxs("div",{style:{display:"flex",alignItems:"baseline",justifyContent:"space-around",flexWrap:"wrap"},children:[s.jsx(J,{data:i,show:l.id}),s.jsx(F,{data:i,show:l})]})]})}function ns(){const{roesc:i,edition:l}=N(),[e,n]=h.useState(),[t,r]=h.useState(),[d,a]=h.useState("");return h.useEffect(()=>{w(i,l).then(c=>n(c)).catch(c=>a(c)),E(i).then(c=>r(c)).catch(()=>{})},[i,l]),!e||!t?s.jsx("h1",{children:"Loading..."}):d?s.jsxs("h1",{children:["Error: ",d]}):s.jsxs("div",{children:[s.jsx("h1",{children:e.fullName}),s.jsx("hr",{}),s.jsx(O,{data:e,roescData:t}),s.jsx(m,{value:e.textContent}),(e.biddingText||e.bidding.length>0)&&s.jsxs(s.Fragment,{children:[s.jsx("h1",{children:"Location"}),s.jsx("hr",{}),s.jsx(m,{value:e.biddingText,overrides:{BiddingTable:{component:L,props:{data:e.bidding}}}}),e.bidding.length>0&&!k(e.biddingText,"BiddingTable")&&s.jsx(f,{columns:["City","Venue","Notes"],children:e.bidding.map((c,o)=>s.jsxs("tr",{className:c.won?"selected":"",children:[s.jsx("td",{children:c.city}),s.jsx("td",{children:s.jsx(P,{to:c.link,children:c.venue})}),s.jsx("td",{children:c.notes})]},o))})]}),(e.sfDrawText||e.sfDraw.length>0)&&s.jsxs(s.Fragment,{children:[s.jsx("h1",{children:"Semi-Final Allocation Draw"}),s.jsx("hr",{}),s.jsx(m,{value:e.sfDrawText}),s.jsx(u,{children:s.jsx(f,{columns:e.sfDraw.map((c,o)=>`Pot ${o+1}`),children:s.jsx("tr",{children:e.sfDraw.map((c,o)=>s.jsx("td",{children:s.jsx("ul",{style:{marginTop:0},children:c.map((j,g)=>s.jsx("li",{children:s.jsx(x,{id:j})},g))})},o))})})})]}),s.jsx("h1",{children:"Shows"}),s.jsx("hr",{}),e.shows.map(c=>s.jsx(U,{show:c,data:e},c.id)),s.jsx("div",{style:{marginTop:"2rem"}}),s.jsx(C,{media:e.media}),s.jsx("hr",{style:{clear:"both"}}),s.jsx(S,{to:`/editor/edition/existing/${t.link}/${e.link}`,className:"button is-primary is-outlined",children:"Edit This Page"})]})}export{ns as default};
