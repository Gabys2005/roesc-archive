import{r as u,j as e,E as R}from"./index-39c65143.js";import{c as U}from"./users-51239890.js";import{b as X}from"./fetchData-d16b6d81.js";import{E as T,B as I,T as N,L as V,a as C,U as _}from"./Editor-1ed0e0dd.js";import{B as x,c as m,M as $,b as g,T as k,D as H,I as z}from"./Output-2655c384.js";import{I as O}from"./Inputs-f478ece4.js";import{a as P,v as Y}from"./v4-872b0555.js";import{a as S,g as q}from"./countryList-fb00d126.js";import{U as G}from"./UserList-c8773b24.js";import{d as y}from"./OutLink-45fd4ae7.js";import{B as Q,a as w,s as M,v as L,b as K}from"./BiddingTable-907a1931.js";import{T as Z}from"./Table-aa9625fc.js";function ee({users:t,addBroadcaster:l}){const o=localStorage.getItem("backup-broadcaster"),[n,a]=u.useState(o?JSON.parse(o):P);return u.useEffect(()=>{localStorage.setItem("backup-broadcaster",JSON.stringify(n))},[n]),e.jsxs("div",{children:[e.jsx(O,{users:t,data:n,setData:(i,d)=>a({...n,[i]:d})}),e.jsx("div",{className:"box",children:e.jsx(x,{onClick:()=>{l({id:Y(),name:n.name,shortName:n.shortName,link:n.link,created:n.created,closed:n.closed,links:n.links,logos:n.logos,owners:n.owners,staff:n.staff,textContent:n.textContent}),a(P)},children:"Create Broadcaster"})})]})}function se({broadcasters:t,setBroadcasters:l,users:o}){var d;const[n,a]=u.useState((d=t[0])==null?void 0:d.id),i=t.map(s=>e.jsxs("option",{value:s.id,children:[s.name," (",s.shortName,")"]},s.id));return e.jsxs("div",{children:[e.jsx("div",{className:"box",children:e.jsx(m,{name:"Choose a broadcaster to edit",children:e.jsx("div",{className:"select is-fullwidth",children:e.jsx("select",{value:n,onChange:s=>a(s.target.value),children:i})})})}),e.jsx(O,{data:t.find(s=>s.id===n),setData:(s,r)=>l(t.map(c=>c.id===n?{...c,[s]:r}:c)),users:o})]})}function ne({broadcasters:t,setBroadcasters:l,users:o}){const n=[{name:"Edit Broadcasters",component:e.jsx(se,{broadcasters:t,setBroadcasters:l,users:o})},{name:"New Broadcaster",component:e.jsx(ee,{users:o,addBroadcaster:d=>l([...t,d])})}],[a,i]=u.useState(n[0].name);return e.jsxs("div",{children:[e.jsx("div",{className:"box",children:e.jsx("div",{className:"tabs is-centered",children:e.jsx("ul",{className:"ml-0",children:n.map(d=>e.jsx("li",{className:a===d.name?"is-active":"",children:e.jsx("a",{onClick:()=>d.name!=="|"&&i(d.name),children:d.name})},d.name))})})}),e.jsx(T,{FallbackComponent:I,children:n.find(d=>d.name===a).component})]})}function te({broadcasters:t,value:l,setValue:o,name:n,description:a}){return e.jsxs("div",{children:[e.jsx(m,{name:n,description:a,children:l.map((i,d)=>e.jsxs("div",{className:"field has-addons",children:[e.jsx("div",{className:"control select is-fullwidth",children:e.jsxs("select",{value:i,onChange:s=>o(l.map((r,c)=>c!==d?r:s.target.value)),children:[e.jsx("option",{default:!0,hidden:!0,children:"Select"}),t.sort((s,r)=>s.name.localeCompare(r.name)).map(s=>e.jsxs("option",{value:s.id,children:[s.name," (",s.shortName,")"]},s.id))]})}),e.jsx("div",{className:"control",children:e.jsx(x,{color:"danger",onClick:()=>o(l.filter((s,r)=>d!==r)),children:"X"})})]},d))}),e.jsx(x,{onClick:()=>o([...l,""]),children:"Add Another"})]})}function v({checked:t,onChange:l,label:o,size:n,border:a}){const i=n==="small"?"is-small":"",d=a?"input":"";return e.jsxs("label",{className:`b-checkbox checkbox ${d} ${i}`,children:[e.jsx("input",{type:"checkbox",checked:t,onChange:s=>l(s.target.checked)}),e.jsx("span",{className:"check"}),e.jsx("span",{className:"control-label",children:o})]})}function b({name:t,description:l,value:o,setValue:n,buttonText:a,multiple:i}){return i?e.jsxs(m,{name:t,description:l,children:[o.map((d,s)=>e.jsxs("div",{className:"field has-addons",children:[e.jsx("div",{className:"select control is-fullwidth",children:e.jsxs("select",{value:d,onChange:r=>n(o.map((c,h)=>s!==h?c:r.target.value)),children:[e.jsx("option",{default:!0,hidden:!0,children:"Select"}),S.map(r=>e.jsx("option",{value:r.id,children:r.name},r.id))]})}),e.jsx("div",{className:"control",children:e.jsx(x,{color:"danger",onClick:()=>n(o.filter((r,c)=>s!==c)),children:"X"})})]},s)),e.jsx(x,{onClick:()=>n([...o,""]),children:a||"Add Another"})]}):e.jsx(m,{name:t,description:l,children:e.jsx("div",{className:"select control is-fullwidth",children:e.jsxs("select",{value:o,onChange:d=>n(d.target.value),children:[e.jsx("option",{default:!0,hidden:!0,children:"Select"}),S.map(d=>e.jsx("option",{value:d.id,children:d.name},d.id))]})})})}function ie({value:t,setValue:l,name:o,description:n,users:a}){function i(d,s,r){l(t.map((c,h)=>d!==h?c:{...c,[s]:r}))}return e.jsxs(m,{name:o,description:n,children:[t.map((d,s)=>e.jsxs("div",{className:"field has-addons",children:[e.jsx("div",{className:"control is-expanded",children:e.jsx("input",{className:"input",type:"text",value:d.name,onChange:r=>i(s,"name",r.target.value),placeholder:"Name"})}),e.jsx("div",{className:"control",children:e.jsxs("label",{className:"b-checkbox checkbox input",children:[e.jsx("input",{type:"checkbox",checked:d.bot,onChange:r=>i(s,"bot",r.target.checked)}),e.jsx("span",{className:"check"}),e.jsx("span",{className:"control-label",children:"Bot?"})]})}),e.jsx(G,{users:a,value:d.id,setValue:r=>i(s,"id",r),disabled:d.bot}),e.jsx("div",{className:"control",children:e.jsx(x,{color:"danger",onClick:()=>l(t.filter((r,c)=>c!==s)),children:"X"})})]},s)),e.jsx(x,{onClick:()=>l([...t,{name:"",bot:!1,id:""}]),children:"Add Another"})]})}function ae({name:t,description:l,value:o,setValue:n}){function a(i,d,s){n(o.map((r,c)=>i!==c?r:{...r,[d]:s}))}return e.jsxs(m,{name:t,description:l,children:[o.map((i,d)=>e.jsxs("div",{className:"field has-addons",children:[e.jsx("div",{className:"control is-expanded",children:e.jsx("input",{className:"input",type:"text",value:i.name,onChange:s=>a(d,"name",s.target.value),placeholder:"Name"})}),e.jsx("div",{className:"control is-expanded",children:e.jsx("input",{className:"input",type:"text",value:i.city,onChange:s=>a(d,"city",s.target.value),placeholder:"City"})}),e.jsx("div",{className:"control is-expanded",children:e.jsx("div",{className:"select control is-fullwidth",children:e.jsxs("select",{value:o.country,onChange:s=>a(d,"country",s.target.value),children:[e.jsx("option",{default:!0,hidden:!0,children:"Select Country"}),S.map(s=>e.jsx("option",{value:s.id,children:s.name},s.id))]})})}),e.jsx("div",{className:"control is-expanded",children:e.jsx("input",{className:"input",type:"text",value:i.link,onChange:s=>a(d,"link",s.target.value),placeholder:"Wikipedia link"})}),e.jsx("div",{className:"control",children:e.jsx(x,{color:"danger",onClick:()=>n(o.filter((s,r)=>r!==d)),children:"X"})})]},d)),e.jsx(x,{onClick:()=>n([...o,{name:"",city:"",link:""}]),children:"Add Another"})]})}function A({value:t,setValue:l,values:o,name:n,description:a}){return e.jsx(m,{name:n,description:a,children:e.jsx("div",{className:"control select is-fullwidth",children:e.jsxs("select",{value:t,onChange:i=>l(i.target.value),children:[e.jsx("option",{default:!0,hidden:!0,children:"Select"}),o.map(i=>e.jsx("option",{value:i.value,children:i.label},i.value))]})})})}const le=[{value:"earthvision",label:"Earthvision"},{value:"eurovision",label:"Eurovision"},{value:"asiavision",label:"Asiavision"},{value:"other",label:"Other (tell me so I can add it to this list)"}];function oe({data:t,setValue:l,users:o,broadcasters:n}){return e.jsxs("div",{className:"box",children:[e.jsx(N,{name:"Full Name",description:"Full contest for this edition. For example: Gabys' Eurovision Song Contest #03. This has to be edition specific because the name of a RoESC can change over time",value:t.fullName,setValue:a=>l("fullName",a)}),e.jsx(N,{name:"Edition Number",description:"For example: #04 or WC #01. This will be visible in tables",value:t.edition,setValue:a=>l("edition",a)}),e.jsx(N,{name:"Link",description:"Generally the name from above, but without any special characters, for example: 04, wc_01 or 15_2021",value:t.link,setValue:a=>l("link",a)}),e.jsx(m,{name:"Edition Cancelled",description:"Check this box if the edition was cancelled / was later restarted from scratch",children:e.jsx(v,{label:"Cancelled",checked:t.cancelled,onChange:a=>l("cancelled",a)})}),e.jsx(A,{name:"Edition Type",description:"Was this edition an Earthvision? A Eurovision?",value:t.type,setValue:a=>l("type",a),values:le}),e.jsx("hr",{}),e.jsx($,{name:"Slogan(s)",description:"Slogan(s) used for this edition",value:t.slogans,setValue:a=>l("slogans",a)}),e.jsx("hr",{}),e.jsx(b,{name:"Host Countries",description:"Country or countries that hosted this edition",value:t.countries,setValue:a=>l("countries",a),multiple:!0}),e.jsx("hr",{}),e.jsx(ae,{name:"Host Venue(s)",description:"Venue(s) that hosted this edition",value:t.venues,setValue:a=>l("venues",a)}),e.jsx("hr",{}),e.jsx(ie,{name:"Presenter(s)",description:"People that hosted the show",value:t.presenters,setValue:a=>l("presenters",a),users:o}),e.jsx("hr",{}),e.jsx(V,{name:"Links",description:"Links to that edition's Roblox game, official wiki page, etc.",value:t.links,setValue:a=>l("links",a)}),e.jsx("hr",{}),e.jsx(te,{name:"Broadcaster(s)",description:"Broadcasters that livestreamed the show",value:t.broadcasters,setValue:a=>l("broadcasters",a),broadcasters:n}),e.jsx("hr",{}),e.jsx(m,{name:"Primary written content",description:"This text will appear at the very top of this edition's page. You can find content boxes for individual sections in their tabs",children:e.jsx(g,{value:t.textContent,setValue:a=>l("textContent",a)})})]})}function re({data:t,users:l,broadcasters:o}){const n=structuredClone(t);return n.entries=n.entries.map(a=>({...a,shows:a.shows.filter(i=>i.participated||i.shouldveVoted)})),e.jsxs("div",{children:[e.jsx("div",{className:"box",children:e.jsx("p",{children:"Download all of the files below and send them as attachments in the thread of this RoESC in the #roesc-archive channel"})}),e.jsxs("div",{className:"columns",children:[e.jsx("div",{className:"column",children:e.jsxs("div",{className:"box",children:[e.jsx("h2",{children:"Edition File"}),e.jsx(k,{disabled:!0,value:JSON.stringify(n,null,4),className:"mb-2"}),e.jsx(x,{onClick:()=>y(n,t.link),children:"Download"})]})}),e.jsx("div",{className:"column",children:e.jsxs("div",{className:"box",children:[e.jsx("h2",{children:"Users File"}),e.jsx(k,{disabled:!0,value:JSON.stringify(l,null,4),className:"mb-2"}),e.jsx(x,{onClick:()=>y(l,"users"),children:"Download"})]})}),e.jsx("div",{className:"column",children:e.jsxs("div",{className:"box",children:[e.jsx("h2",{children:"Broadcasters File"}),e.jsx(k,{disabled:!0,value:JSON.stringify(o,null,4),className:"mb-2"}),e.jsx(x,{onClick:()=>y(o,"broadcasters"),children:"Download"})]})})]})]})}function de({data:t,setValue:l}){function o(n,a,i){l("bidding",t.bidding.map((d,s)=>n!==s?d:{...d,[a]:i}))}return e.jsxs("div",{children:[e.jsxs("div",{className:"box",children:[e.jsx("h1",{children:"Bidding Table"}),e.jsx(Z,{columns:["City","Venue","Notes","Wikipedia link","Won?",""],children:t.bidding.map((n,a)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("input",{type:"text",className:"input is-small",value:n.city,onChange:i=>o(a,"city",i.target.value)})}),e.jsx("td",{children:e.jsx("input",{type:"text",className:"input is-small",value:n.venue,onChange:i=>o(a,"venue",i.target.value)})}),e.jsx("td",{children:e.jsx("input",{type:"text",className:"input is-small",value:n.notes,onChange:i=>o(a,"notes",i.target.value)})}),e.jsx("td",{children:e.jsx("input",{type:"text",className:"input is-small",value:n.link,onChange:i=>o(a,"link",i.target.value)})}),e.jsx("td",{children:e.jsx(v,{size:"small",border:!0,checked:n.won,onChange:i=>o(a,"won",i)})}),e.jsx("td",{children:e.jsx(x,{color:"danger",size:"small",onClick:()=>l("bidding",t.bidding.filter((i,d)=>a!==d)),children:"X"})})]},a))}),e.jsx(x,{onClick:()=>l("bidding",[...t.bidding,{city:"",venue:"",notes:"",link:"",won:!1}]),children:"Add Another Row"})]}),e.jsxs("div",{className:"box",children:[e.jsx("h1",{children:"Written Content"}),e.jsx("p",{children:"Custom components for this editor:"}),e.jsx("ul",{children:e.jsxs("li",{children:[e.jsxs("span",{className:"tag",children:["<","BiddingTable /",">"]})," ","will insert the table from above. If omitted, the table will be generated at the very bottom of this section"]})}),e.jsx(g,{value:t.biddingText,setValue:n=>l("biddingText",n),overrides:{BiddingTable:{component:Q,props:{data:t.bidding,stopLinks:!0}}}})]})]})}function ce({data:t,setValue:l}){function o(n,a){l("media",t.media.map(i=>i.name===n?{...i,images:a}:i))}return e.jsxs("div",{children:[e.jsx("div",{className:"box",children:"Remember to include any new images you add in your message on the Discord server."}),e.jsx("div",{className:"box",children:e.jsx(V,{name:"Logos",description:"Logos made for this edition. First logo will be used in the side table",value:t.media.find(n=>n.name==="logos").images,setValue:n=>o("logos",n),namePlaceholder:"Description",linkPlaceholder:"File Name"})})]})}function he({data:t,setValue:l}){return e.jsxs("div",{children:[e.jsxs("div",{className:"box",children:[e.jsx("h1",{children:"Pots"}),t.sfDraw.map((o,n)=>e.jsxs("div",{children:[e.jsx(b,{name:`Pot ${n+1}`,value:o,setValue:a=>l("sfDraw",t.sfDraw.map((i,d)=>n!==d?i:a)),multiple:!0,buttonText:"Add Another Country"}),e.jsx(x,{color:"danger",onClick:()=>l("sfDraw",t.sfDraw.filter((a,i)=>n!==i)),children:"Remove Pot"}),e.jsx("br",{}),e.jsx("br",{})]},n)),e.jsx("br",{}),e.jsx(x,{onClick:()=>l("sfDraw",[...t.sfDraw,[]]),children:"Add Another Pot"})]}),e.jsx("div",{className:"box",children:e.jsx(m,{name:"Written content",children:e.jsx(g,{value:t.sfDrawText,setValue:o=>l("sfDrawText",o)})})})]})}function E({value:t,setValue:l,name:o,description:n,multiple:a}){function i(s,r,c){l(t.map((h,j)=>s!==j?h:{...h,[r]:c}))}function d(s,r){l({...t,[s]:r})}return a?e.jsxs(m,{name:o,description:n,children:[t.map((s,r)=>e.jsxs("div",{className:"field has-addons",children:[e.jsx("div",{className:"control is-expanded",children:e.jsx("input",{className:"input",type:"text",value:s.artists.join(", "),placeholder:"Artist",onChange:c=>i(r,"artists",c.target.value.split(", "))})}),e.jsx("div",{className:"control",children:e.jsx("div",{className:"button is-static",children:"-"})}),e.jsx("div",{className:"control is-expanded",children:e.jsx("input",{className:"input",type:"text",value:s.title,placeholder:"Song",onChange:c=>i(r,"title",c.target.value)})}),e.jsx("div",{className:"control",children:e.jsx("div",{className:"button is-static",children:"-"})}),e.jsx("div",{className:"control is-expanded",children:e.jsx("input",{type:"url",className:"input",value:s.link,placeholder:"YouTube Link",onChange:c=>i(r,"link",c.target.value)})}),e.jsx("div",{className:"control",children:e.jsx(x,{color:"danger",onClick:()=>l(t.filter((c,h)=>r!==h)),children:"X"})})]},r)),e.jsx(x,{onClick:()=>l([...t,{artists:[],title:"",link:""}]),children:"Add Another"})]}):e.jsx(m,{name:o,description:n,children:e.jsxs("div",{className:"field has-addons",children:[e.jsx("div",{className:"control is-expanded",children:e.jsx("input",{className:"input",type:"text",value:t.artists.join(", "),placeholder:"Artist",onChange:s=>d("artists",s.target.value.split(", "))})}),e.jsx("div",{className:"control",children:e.jsx("div",{className:"button is-static",children:"-"})}),e.jsx("div",{className:"control is-expanded",children:e.jsx("input",{className:"input",type:"text",value:t.title,placeholder:"Song",onChange:s=>d("title",s.target.value)})}),e.jsx("div",{className:"control",children:e.jsx("div",{className:"button is-static",children:"-"})}),e.jsx("div",{className:"control is-expanded",children:e.jsx("input",{type:"url",className:"input",value:t.link,placeholder:"YouTube Link",onChange:s=>d("link",s.target.value)})})]})})}function xe({data:t,setValue:l}){return e.jsxs("div",{children:[e.jsx("div",{className:"box",children:e.jsx(m,{name:"Shows",description:"Which shows were a part of this edition?",children:w.map(o=>e.jsx("div",{children:e.jsx(v,{label:o.name,checked:!!t.shows.find(n=>n.id===o.id),onChange:()=>l("shows",t.shows.find(n=>n.id===o.id)?t.shows.filter(n=>n.id!==o.id):[...t.shows,{id:o.id,date:"",openings:[],intervals:[]}].sort((n,a)=>w.findIndex(i=>i.id===n.id)-w.findIndex(i=>i.id===a.id)))})},o.id))})}),t.shows.map((o,n)=>e.jsxs("div",{className:"box",children:[e.jsx("h2",{children:M[o.id]}),e.jsx(H,{name:"Show Date",description:"When did this show happen?",value:o.date,setValue:a=>l("shows",t.shows.map((i,d)=>n!==d?i:{...i,date:a}))}),e.jsx(A,{name:"Voting Method",description:"Method used in this show's jury voting",value:o.votingMethod,setValue:a=>l("shows",t.shows.map((i,d)=>n!==d?i:{...i,votingMethod:a})),values:L}),e.jsx(E,{name:"Opening Acts",description:"Songs that opened the show",multiple:!0,value:o.openings,setValue:a=>l("shows",t.shows.map((i,d)=>n!==d?i:{...i,openings:a}))}),e.jsx(E,{name:"Interval Acts",description:"Intevals",multiple:!0,value:o.intervals,setValue:a=>l("shows",t.shows.map((i,d)=>n!==d?i:{...i,intervals:a}))}),e.jsx(m,{name:"Written Content",description:"This text will be shown above the results table (if there is one)",children:e.jsx(g,{value:o.textContent,setValue:a=>l("shows",t.shows.map((i,d)=>n!==d?i:{...i,textContent:a}))})})]},o.id))]})}function f({name:t,description:l,value:o,setValue:n,margin:a}){function i(d){n(Number(d.target.value.replaceAll("e","").replaceAll(",","")))}return e.jsx("div",{className:a?"mr-3":"",children:e.jsx(m,{name:t,description:l,children:e.jsx("div",{className:"control",children:e.jsx("input",{className:"input",type:"number",value:o,onChange:i})})})})}const D={order:0,place:0,points:{total:0,tele:0,jury:0,penalty:0},participated:!1,attended:!1,shouldveVoted:!1,failedToVote:!1,votes:[]};function me({fullData:t,setData:l,data:o,showId:n}){var d;const a=t.shows.find(s=>s.id===n),i=(d=L.find(s=>s.value===a.votingMethod))==null?void 0:d.points;return i?e.jsx("div",{children:i.map((s,r)=>e.jsx(b,{name:`${s} points`,value:o.votes[r],setValue:c=>l(r,c)},r))}):e.jsxs("p",{children:["Choose a voting method in the ",e.jsx("span",{className:"tag",children:"Shows"})," tab"]})}function W({data:t,setData:l,users:o,fullData:n}){const a=K.map(s=>t.shows.find(r=>r.id===s)||{id:s,...D});function i(s,r,c){t.shows.find(h=>h.id===s)?l("shows",t.shows.map(h=>h.id!==s?h:{...h,[r]:c})):l("shows",[...t.shows,{id:s,...D,[r]:c}])}function d(s,r,c){if(c.votes.at(s))i(c.id,"votes",c.votes.map((h,j)=>s!=j?h:r));else{const h=structuredClone(c.votes);h[s]=r,i(c.id,"votes",h)}}return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"box",children:[e.jsx("h2",{children:"The Basics"}),e.jsx(E,{name:"Song",description:"The song that represented this entry. Separate artists with commas (,)",value:t.song,setValue:s=>l("song",s)}),e.jsx("hr",{}),e.jsx(b,{name:"Country",description:"The country being represented",value:t.country,setValue:s=>l("country",s)}),e.jsx("hr",{}),e.jsx(C,{name:"Heads Of Delegation",description:"People who were chosen as the 'Participants'",value:t.hods,setValue:s=>l("hods",s),users:o,multiple:!0}),e.jsx("hr",{}),e.jsx(C,{name:"Performers",description:"People who performed on stage",value:t.performers,setValue:s=>l("performers",s),users:o,multiple:!0}),e.jsx("hr",{}),e.jsx(C,{name:"Delegation Members",description:"Other delegation members",value:t.delegationMembers,setValue:s=>l("delegationMembers",s),users:o,multiple:!0})]}),a.map(s=>e.jsxs("div",{className:"box",children:[e.jsx("h1",{children:M[s.id]}),e.jsx(v,{label:"Took part in this show?",checked:s.participated,onChange:r=>i(s.id,"participated",r)}),s.participated&&e.jsxs("div",{children:[e.jsx(v,{label:"Attended the show?",checked:s.attended,onChange:r=>i(s.id,"attended",r)}),e.jsx("br",{}),s.id==="gf"?e.jsx(v,{label:"Won?",checked:s.won,onChange:r=>i(s.id,"won",r)}):e.jsx(v,{label:"Qualified?",checked:s.qualified,onChange:r=>i(s.id,"qualified",r)}),e.jsxs("div",{className:"field is-grouped mt-2",children:[e.jsx(f,{name:"Running Order",value:s.order,setValue:r=>i(s.id,"order",r),margin:!0}),e.jsx(f,{name:"Place",value:s.place,setValue:r=>i(s.id,"place",r),margin:!0})]}),e.jsxs("div",{className:"field is-grouped mt-2",children:[e.jsx(f,{name:"Total Points",value:s.points.total,setValue:r=>i(s.id,"points",{...s.points,total:r}),margin:!0}),e.jsx(f,{name:"Jury Points",value:s.points.jury,setValue:r=>i(s.id,"points",{...s.points,jury:r}),margin:!0}),e.jsx(f,{name:"Tele Points",value:s.points.tele,setValue:r=>i(s.id,"points",{...s.points,tele:r}),margin:!0}),e.jsx(f,{name:"Penalty Points",value:s.points.penalty,setValue:r=>i(s.id,"points",{...s.points,penalty:r}),margin:!0})]})]}),e.jsx("hr",{}),e.jsx(v,{label:"Was supposed to vote in this show?",checked:s.shouldveVoted,onChange:r=>i(s.id,"shouldveVoted",r)}),s.shouldveVoted&&e.jsxs("div",{children:[e.jsx(v,{label:"Failed to vote?",checked:s.failedToVote,onChange:r=>i(s.id,"failedToVote",r)}),e.jsx("h3",{children:"Jury Vote"}),e.jsx(me,{fullData:n,data:s,setData:(r,c)=>d(r,c,s),showId:s.id})]})]},s.id))]})}const F={country:"",hods:[],performers:[],song:{artists:[],title:"",link:""},shows:[]};function ue({data:t,setValue:l,users:o}){const n=localStorage.getItem("backup-entry"),[a,i]=u.useState(JSON.parse(n)||F);function d(){l("entries",[...t.entries,a]),i(F)}return u.useEffect(()=>{localStorage.setItem("backup-entry",JSON.stringify(a))},[a]),e.jsxs("div",{children:[e.jsx(W,{data:a,setData:(s,r)=>i({...a,[s]:r}),users:o,fullData:t}),e.jsx("div",{className:"box",children:e.jsx(x,{onClick:d,children:"Add Entry"})})]})}function pe({data:t,setValue:l,users:o}){const[n,a]=u.useState(0);return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"box",children:e.jsx(A,{name:"Select an entry to edit",value:n,setValue:a,values:t.entries.map((i,d)=>({value:d,label:q(i.country)}))})}),t.entries.length>0&&e.jsx(W,{data:t.entries[n],users:o,fullData:t,setData:(i,d)=>l("entries",t.entries.map((s,r)=>r!=n?s:{...s,[i]:d}))})]})}function je({data:t,setValue:l,users:o}){const[n,a]=u.useState("edit");return e.jsxs("div",{children:[e.jsx("div",{className:"box",children:e.jsx("div",{className:"tabs is-centered",children:e.jsxs("ul",{children:[e.jsx("li",{className:n==="edit"?"is-active":"",children:e.jsx("a",{onClick:()=>a("edit"),children:"Edit Entry"})}),e.jsx("li",{className:n==="new"?"is-active":"",children:e.jsx("a",{onClick:()=>a("new"),children:"New Entry"})})]})})}),e.jsxs(T,{FallbackComponent:I,children:[n==="new"&&e.jsx(ue,{data:t,setValue:l,users:o}),n==="edit"&&e.jsx(pe,{data:t,setValue:l,users:o})]})]})}function ve({data:t,setValue:l}){return e.jsxs("div",{className:"box",children:[e.jsx("h1",{children:"Incidents"}),e.jsx("p",{children:"List stuff exploiters, prop malfunctions, and so on here. No template, just text content"}),e.jsx(m,{name:"Written Content",children:e.jsx(g,{value:t.incidents,setValue:o=>l("incidents",o)})})]})}function Ae({initialData:t,name:l,initialUsers:o}){const[n,a]=u.useState(t),[i,d]=u.useState("Editing Info"),[s,r]=u.useState(o||[]),[c,h]=u.useState([]);u.useEffect(()=>{o||U().then(p=>r(p))},[o]),u.useEffect(()=>{X().then(p=>h(p))},[]);function j(p,J){a({...n,[p]:J})}u.useEffect(()=>{localStorage.setItem("backup-edition",JSON.stringify(n))},[n]);const B=[{name:"Editing Info",component:e.jsx(z,{})},{name:"Basic Information",component:e.jsx(oe,{data:n,setValue:j,users:s,broadcasters:c})},{name:"Location",component:e.jsx(de,{data:n,setValue:j})},{name:"Shows",component:e.jsx(xe,{data:n,setValue:j})},{name:"SF Draw",component:e.jsx(he,{data:n,setValue:j})},{name:"Entries",component:e.jsx(je,{data:n,setValue:j,users:s})},{name:"Incidents",component:e.jsx(ve,{data:n,setValue:j})},{name:"Media",component:e.jsx(ce,{data:n,setValue:j})},{name:"Output",component:e.jsx(re,{data:n,users:s,broadcasters:c})},{name:"|",component:e.jsx(R,{})},{name:"Users Editor",component:e.jsx(_,{users:s,setUsers:r})},{name:"Broadcasters Editor",component:e.jsx(ne,{broadcasters:c,setBroadcasters:h,users:s,embedded:!0})}];return e.jsxs("div",{children:[e.jsxs("h1",{children:["Editing Edition File - ",l]}),e.jsx("div",{className:"tabs is-centered is-boxed",children:e.jsx("ul",{className:"ml-0",children:B.map(p=>e.jsx("li",{className:i===p.name?"is-active":"",children:e.jsx("a",{onClick:()=>p.name!=="|"&&d(p.name),children:p.name})},p.name))})}),e.jsx(T,{FallbackComponent:I,children:B.find(p=>p.name===i).component})]})}export{Ae as E};