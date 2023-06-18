import{j as e,r as u}from"./index-beff47e6.js";import{B as h}from"./Button-48b929c1.js";import{M as N}from"./Markdown-178a2702.js";import{d as f}from"./utils-a9b59537.js";function p({name:t,description:s,children:r}){return e.jsxs("div",{className:"field",children:[e.jsxs("label",{className:"label",children:[t," ",e.jsx("span",{className:"has-text-grey has-text-weight-normal",children:s&&`- ${s}`})]}),r]})}function k({name:t,description:s,value:r,setValue:n}){function i(o,a){const c=r.map((d,C)=>C===o?a:d);n(c)}return e.jsxs(p,{name:t,description:s,children:[r.map((o,a)=>e.jsxs("div",{className:"field has-addons",children:[e.jsx("div",{className:"control is-expanded",children:e.jsx("input",{className:"input",type:"text",value:o,onChange:c=>i(a,c.target.value)})}),e.jsx("div",{className:"control",children:e.jsx(h,{color:"danger",onClick:()=>n(r.filter((c,d)=>d!==a)),children:"X"})})]},a)),e.jsx(h,{onClick:()=>n([...r,""]),children:"Add Another"})]})}function y({disabled:t,value:s,className:r,setValue:n,style:i}){return e.jsx("textarea",{className:`textarea ${r}`,rows:"20",disabled:t,value:s,onChange:o=>n(o.target.value),style:i})}function w({value:t,setValue:s,overrides:r}){return e.jsxs("div",{className:"columns",children:[e.jsx("div",{className:"column",children:e.jsx(y,{style:{height:"100%"},value:t,setValue:s})}),e.jsx("div",{className:"column",children:e.jsx(N,{value:t,overrides:r})})]})}let m;const S=new Uint8Array(16);function E(){if(!m&&(m=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!m))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return m(S)}const l=[];for(let t=0;t<256;++t)l.push((t+256).toString(16).slice(1));function U(t,s=0){return(l[t[s+0]]+l[t[s+1]]+l[t[s+2]]+l[t[s+3]]+"-"+l[t[s+4]]+l[t[s+5]]+"-"+l[t[s+6]]+l[t[s+7]]+"-"+l[t[s+8]]+l[t[s+9]]+"-"+l[t[s+10]]+l[t[s+11]]+l[t[s+12]]+l[t[s+13]]+l[t[s+14]]+l[t[s+15]]).toLowerCase()}const I=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),j={randomUUID:I};function B(t,s,r){if(j.randomUUID&&!s&&!t)return j.randomUUID();t=t||{};const n=t.random||(t.rng||E)();if(n[6]=n[6]&15|64,n[8]=n[8]&63|128,s){r=r||0;for(let i=0;i<16;++i)s[r+i]=n[i];return s}return U(n)}function v({value:t,setValue:s,showDeleteButton:r,remove:n}){return e.jsxs("div",{className:"field has-addons",children:[e.jsx("div",{className:"control is-expanded",children:e.jsx("input",{className:"input",type:"text",value:t.username,onChange:i=>s({...t,username:i.target.value}),placeholder:"Username"})}),e.jsx("div",{className:"control is-expanded",children:e.jsx("input",{type:"text",className:"input",value:t.id,onChange:i=>s({...t,id:i.target.value}),placeholder:"ID"})}),r?e.jsx("div",{className:"control",children:e.jsx(h,{color:"danger",onClick:n,children:"X"})}):""]})}function b({data:t,setData:s}){return e.jsxs("div",{children:[e.jsx(p,{name:"Current Account",description:"Current Roblox username and ID",children:e.jsx(v,{value:t.current,setValue:r=>s("current",r)})}),e.jsxs(p,{name:"Previous Accounts",description:"Previous Roblox usernames and IDs",children:[t.previous.map((r,n)=>e.jsx(v,{value:r,setValue:i=>s("previous",t.previous.map((o,a)=>n==a?i:o)),showDeleteButton:!0,remove:()=>s("previous",t.previous.filter((i,o)=>o!==n))},n)),e.jsx(h,{onClick:()=>s("previous",[...t.previous,{username:"",id:""}]),children:"Add Another"})]}),e.jsx(k,{name:"Aliases",description:"Previous usernames that weren't separate accounts",value:t.aliases,setValue:r=>s("aliases",r)}),e.jsx("hr",{}),e.jsx(p,{name:"Written content",description:"This content will be displayed next to the info table on that user's page",children:e.jsx(w,{value:t.textContent,setValue:r=>s("textContent",r)})})]})}const g={current:"",previous:[],aliases:[],textContent:""};function R({addUser:t}){const s=localStorage.getItem("backup-users"),[r,n]=u.useState(s?JSON.parse(s):g);return u.useEffect(()=>{localStorage.setItem("backup-users",JSON.stringify(r))},[r]),e.jsxs("div",{children:[e.jsx(b,{data:r,setData:(i,o)=>n({...r,[i]:o})}),e.jsx("hr",{}),e.jsx(h,{onClick:()=>{t({id:B(),current:r.current,previous:r.previous,aliases:r.aliases,textContent:r.textContent}),n(g)},children:"Create User"})]})}function A({users:t,setUsers:s}){var o;const[r,n]=u.useState((o=t[0])==null?void 0:o.id),i=t.map(a=>e.jsxs("option",{value:a.id,children:[a.current.username," ",a.previous.length>0?`(${a.previous.map(c=>c.username).join(", ")})`:""]},a.id));return e.jsxs("div",{children:[e.jsx(p,{name:"Choose a user to edit",children:e.jsx("div",{className:"select is-fullwidth",children:e.jsx("select",{value:r,onChange:a=>n(a.target.value),children:i})})}),e.jsx("hr",{}),e.jsx(b,{data:t.find(a=>a.id===r),setData:(a,c)=>s(t.map(d=>d.id===r?{...d,[a]:c}:d))})]})}function D({data:t}){return e.jsxs("div",{children:[e.jsx("h2",{children:"Output"}),e.jsx("p",{children:"Send this file in the Users thread in the #roesc-archive channel"}),e.jsx(y,{disabled:!0,value:JSON.stringify(t,null,4),className:"mb-2"}),e.jsx(h,{onClick:()=>f(t,"users"),children:"Download"})]})}const O=u.createContext(null),x={didCatch:!1,error:null};class V extends u.Component{constructor(s){super(s),this.resetErrorBoundary=this.resetErrorBoundary.bind(this),this.state=x}static getDerivedStateFromError(s){return{didCatch:!0,error:s}}resetErrorBoundary(...s){var n,i;const{error:r}=this.state;r!==null&&((i=(n=this.props).onReset)==null||i.call(n,{args:s,reason:"imperative-api"}),this.setState(x))}componentDidCatch(s,r){var n,i;(i=(n=this.props).onError)==null||i.call(n,s,r)}componentDidUpdate(s,r){var o,a;const{didCatch:n}=this.state,{resetKeys:i}=this.props;n&&r.error!==null&&T(s.resetKeys,i)&&((a=(o=this.props).onReset)==null||a.call(o,{next:i,prev:s.resetKeys,reason:"keys"}),this.setState(x))}render(){const{children:s,fallbackRender:r,FallbackComponent:n,fallback:i}=this.props,{didCatch:o,error:a}=this.state;let c=s;if(o){const d={error:a,resetErrorBoundary:this.resetErrorBoundary};if(u.isValidElement(i))c=i;else if(typeof r=="function")c=r(d);else if(n)c=u.createElement(n,d);else throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return u.createElement(O.Provider,{value:{didCatch:o,error:a,resetErrorBoundary:this.resetErrorBoundary}},c)}}function T(t=[],s=[]){return t.length!==s.length||t.some((r,n)=>!Object.is(r,s[n]))}function M({error:t,resetErrorBoundary:s}){function r(){localStorage.removeItem("backup-main"),localStorage.removeItem("backup-broadcasters"),localStorage.removeItem("backup-entry"),localStorage.removeItem("backup-users"),s()}return e.jsxs("div",{style:{width:"100%",background:"var(--pastel-red)",padding:"2rem",borderRadius:"1rem",border:"1px solid red"},children:[e.jsxs("p",{children:["Something went wrong: ",t.message]}),e.jsxs("p",{children:["If you have time, please report this bug to me on Discord: ",e.jsx("div",{className:"tag",children:".gabys"})," with a short description of what you did before it happened"]}),e.jsx("p",{children:"You can try clearing your backups to see if that solves the issue. All progress saved in the backups will be lost forever"}),e.jsxs("div",{className:"buttons",children:[e.jsx("button",{className:"button is-primary",onClick:s,children:"Refresh"}),e.jsx("button",{className:"button is-danger",onClick:r,children:"Clear Backups"})]})]})}function $({users:t,setUsers:s,showOutput:r}){const[n,i]=u.useState("edit");return e.jsxs("div",{className:"box",children:[e.jsx("div",{className:"tabs is-centered",children:e.jsxs("ul",{className:"ml-0",children:[e.jsx("li",{className:n==="edit"?"is-active":"",children:e.jsx("a",{onClick:()=>i("edit"),children:"Edit User"})}),e.jsx("li",{className:n==="new"?"is-active":"",children:e.jsx("a",{onClick:()=>i("new"),children:"New User"})}),r?e.jsx("li",{className:n==="output"?"is-active":"",children:e.jsx("a",{onClick:()=>i("output"),children:"Output"})}):""]})}),e.jsxs(V,{FallbackComponent:M,children:[n==="new"?e.jsx(R,{addUser:o=>s([...t,o])}):"",n==="edit"?e.jsx(A,{users:t,setUsers:s}):"",n==="output"?e.jsx(D,{data:t}):""]})]})}export{M as B,V as E,p as I,k as M,y as T,$ as U,w as a,B as v};
