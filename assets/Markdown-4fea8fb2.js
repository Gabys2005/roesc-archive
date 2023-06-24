import{r as G,j as ke}from"./index-00973617.js";function O(){return O=Object.assign||function(r){for(var o=1;o<arguments.length;o++){var c=arguments[o];for(var l in c)Object.prototype.hasOwnProperty.call(c,l)&&(r[l]=c[l])}return r},O.apply(this,arguments)}const ye=["children","options"],U=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce((r,o)=>(r[o.toLowerCase()]=o,r),{for:"htmlFor"}),Z={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},$e=["style","script"],xe=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,He=/mailto:/i,ve=/\n{2,}$/,K=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,Me=/^ *> ?/gm,Ie=/^ {2,}\n/,_e=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,Y=/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,ee=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,Se=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,be=/^(?:\n *)*\n/,Oe=/\r\n?/g,Ae=/^\[\^([^\]]+)](:.*)\n/,Le=/^\[\^([^\]]+)]/,Ee=/\f/g,we=/^\s*?\[(x|\s)\]/,ne=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,te=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,j=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,Ge=/&([a-zA-Z]+);/g,re=/^<!--[\s\S]*?(?:-->)/,Re=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,X=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,Ce=/^\{.*\}$/,Ne=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,Te=/^<([^ >]+@[^ >]+)>/,ze=/^<([^ >]+:\/[^ >]+)>/,Be=/-([a-z])?/gi,oe=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,je=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,Xe=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,De=/^\[([^\]]*)\] ?\[([^\]]*)\]/,Fe=/(\[|\])/g,We=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,Ue=/\t/g,Ze=/^ *\| */,Pe=/(^ *\||\| *$)/g,qe=/ *$/,Ve=/^ *:-+: *$/,Je=/^ *:-+ *$/,Qe=/^ *-+: *$/,Ke=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,Ye=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,en=/^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,nn=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,tn=/^\\([^0-9A-Za-z\s])/,rn=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,on=/^\n+/,ln=/^([ \t]*)/,cn=/\\([^\\])/g,P=/ *\n+$/,an=/(?:^|\n)( *)$/,D="(?:\\d+\\.)",F="(?:[*+-])";function le(r){return"( *)("+(r===1?D:F)+") +"}const ce=le(1),ie=le(2);function ae(r){return new RegExp("^"+(r===1?ce:ie))}const sn=ae(1),un=ae(2);function se(r){return new RegExp("^"+(r===1?ce:ie)+"[^\\n]*(?:\\n(?!\\1"+(r===1?D:F)+" )[^\\n]*)*(\\n|$)","gm")}const ue=se(1),pe=se(2);function fe(r){const o=r===1?D:F;return new RegExp("^( *)("+o+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+o+" (?!"+o+" ))\\n*|\\s*\\n*$)")}const he=fe(1),de=fe(2);function q(r,o){const c=o===1,l=c?he:de,f=c?ue:pe,g=c?sn:un;return{t(u,h,m){const H=an.exec(m);return H&&(h.o||!h._&&!h.u)?l.exec(u=H[1]+u):null},i:s.HIGH,l(u,h,m){const H=c?+u[2]:void 0,b=u[0].replace(ve,`
`).match(f);let L=!1;return{p:b.map(function(E,e){const t=g.exec(E)[0].length,n=new RegExp("^ {1,"+t+"}","gm"),a=E.replace(n,"").replace(g,""),i=e===b.length-1,d=a.indexOf(`

`)!==-1||i&&L;L=d;const p=m._,x=m.o;let $;m.o=!0,d?(m._=!1,$=a.replace(P,`

`)):(m._=!0,$=a.replace(P,""));const v=h($,m);return m._=p,m.o=x,v}),m:c,g:H}},h:(u,h,m)=>r(u.m?"ol":"ul",{key:m.k,start:u.g},u.p.map(function(H,b){return r("li",{key:b},h(H,m))}))}}const pn=/^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,fn=/^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,ge=[K,Y,ee,ne,te,re,oe,ue,he,pe,de],hn=[...ge,/^[^\n]+(?:  \n|\n{2,})/,j,X];function dn(r){return r.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function gn(r){return Qe.test(r)?"right":Ve.test(r)?"center":Je.test(r)?"left":null}function V(r,o,c){const l=c.v;c.v=!0;const f=o(r.trim(),c);c.v=l;let g=[[]];return f.forEach(function(u,h){u.type==="tableSeparator"?h!==0&&h!==f.length-1&&g.push([]):(u.type!=="text"||f[h+1]!=null&&f[h+1].type!=="tableSeparator"||(u.$=u.$.replace(qe,"")),g[g.length-1].push(u))}),g}function mn(r,o,c){c._=!0;const l=V(r[1],o,c),f=r[2].replace(Pe,"").split("|").map(gn),g=function(u,h,m){return u.trim().split(`
`).map(function(H){return V(H,h,m)})}(r[3],o,c);return c._=!1,{S:f,A:g,L:l,type:"table"}}function J(r,o){return r.S[o]==null?{}:{textAlign:r.S[o]}}function _(r){return function(o,c){return c._?r.exec(o):null}}function S(r){return function(o,c){return c._||c.u?r.exec(o):null}}function M(r){return function(o,c){return c._||c.u?null:r.exec(o)}}function w(r){return function(o){return r.exec(o)}}function kn(r,o,c){if(o._||o.u||c&&!c.endsWith(`
`))return null;let l="";r.split(`
`).every(g=>!ge.some(u=>u.test(g))&&(l+=g+`
`,g.trim()));const f=l.trimEnd();return f==""?null:[l,f]}function A(r){try{if(decodeURIComponent(r).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return null}catch{return null}return r}function Q(r){return r.replace(cn,"$1")}function R(r,o,c){const l=c._||!1,f=c.u||!1;c._=!0,c.u=!0;const g=r(o,c);return c._=l,c.u=f,g}function yn(r,o,c){const l=c._||!1,f=c.u||!1;c._=!1,c.u=!0;const g=r(o,c);return c._=l,c.u=f,g}function $n(r,o,c){return c._=!1,r(o+`

`,c)}const N=(r,o,c)=>({$:R(o,r[1],c)});function T(){return{}}function z(){return null}function xn(...r){return r.filter(Boolean).join(" ")}function B(r,o,c){let l=r;const f=o.split(".");for(;f.length&&(l=l[f[0]],l!==void 0);)f.shift();return l||c}var s;function Hn(r,o={}){o.overrides=o.overrides||{},o.slugify=o.slugify||dn,o.namedCodesToUnicode=o.namedCodesToUnicode?O({},Z,o.namedCodesToUnicode):Z;const c=o.createElement||G.createElement;function l(e,t,...n){const a=B(o.overrides,`${e}.props`,{});return c(function(i,d){const p=B(d,i);return p?typeof p=="function"||typeof p=="object"&&"render"in p?p:B(d,`${i}.component`,i):i}(e,o.overrides),O({},t,a,{className:xn(t==null?void 0:t.className,a.className)||void 0}),...n)}function f(e){let t=!1;o.forceInline?t=!0:o.forceBlock||(t=We.test(e)===!1);const n=b(H(t?e:`${e.trimEnd().replace(on,"")}

`,{_:t}));for(;typeof n[n.length-1]=="string"&&!n[n.length-1].trim();)n.pop();if(o.wrapper===null)return n;const a=o.wrapper||(t?"span":"div");let i;if(n.length>1||o.forceWrapper)i=n;else{if(n.length===1)return i=n[0],typeof i=="string"?l("span",{key:"outer"},i):i;i=null}return G.createElement(a,{key:"outer"},i)}function g(e){const t=e.match(xe);return t?t.reduce(function(n,a,i){const d=a.indexOf("=");if(d!==-1){const p=function(k){return k.indexOf("-")!==-1&&k.match(Re)===null&&(k=k.replace(Be,function(y,I){return I.toUpperCase()})),k}(a.slice(0,d)).trim(),x=function(k){const y=k[0];return(y==='"'||y==="'")&&k.length>=2&&k[k.length-1]===y?k.slice(1,-1):k}(a.slice(d+1).trim()),$=U[p]||p,v=n[$]=function(k,y){return k==="style"?y.split(/;\s?/).reduce(function(I,C){const W=C.slice(0,C.indexOf(":"));return I[W.replace(/(-[a-z])/g,me=>me[1].toUpperCase())]=C.slice(W.length+1).trim(),I},{}):k==="href"?A(y):(y.match(Ce)&&(y=y.slice(1,y.length-1)),y==="true"||y!=="false"&&y)}(p,x);typeof v=="string"&&(j.test(v)||X.test(v))&&(n[$]=G.cloneElement(f(v.trim()),{key:i}))}else a!=="style"&&(n[U[a]||a]=!0);return n},{}):null}const u=[],h={},m={blockQuote:{t:M(K),i:s.HIGH,l:(e,t,n)=>({$:t(e[0].replace(Me,""),n)}),h:(e,t,n)=>l("blockquote",{key:n.k},t(e.$,n))},breakLine:{t:w(Ie),i:s.HIGH,l:T,h:(e,t,n)=>l("br",{key:n.k})},breakThematic:{t:M(_e),i:s.HIGH,l:T,h:(e,t,n)=>l("hr",{key:n.k})},codeBlock:{t:M(ee),i:s.MAX,l:e=>({$:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),M:void 0}),h:(e,t,n)=>l("pre",{key:n.k},l("code",O({},e.I,{className:e.M?`lang-${e.M}`:""}),e.$))},codeFenced:{t:M(Y),i:s.MAX,l:e=>({I:g(e[3]||""),$:e[4],M:e[2]||void 0,type:"codeBlock"})},codeInline:{t:S(Se),i:s.LOW,l:e=>({$:e[2]}),h:(e,t,n)=>l("code",{key:n.k},e.$)},footnote:{t:M(Ae),i:s.MAX,l:e=>(u.push({O:e[2],B:e[1]}),{}),h:z},footnoteReference:{t:_(Le),i:s.HIGH,l:e=>({$:e[1],R:`#${o.slugify(e[1])}`}),h:(e,t,n)=>l("a",{key:n.k,href:A(e.R)},l("sup",{key:n.k},e.$))},gfmTask:{t:_(we),i:s.HIGH,l:e=>({T:e[1].toLowerCase()==="x"}),h:(e,t,n)=>l("input",{checked:e.T,key:n.k,readOnly:!0,type:"checkbox"})},heading:{t:M(ne),i:s.HIGH,l:(e,t,n)=>({$:R(t,e[2],n),j:o.slugify(e[2]),C:e[1].length}),h:(e,t,n)=>l(`h${e.C}`,{id:e.j,key:n.k},t(e.$,n))},headingSetext:{t:M(te),i:s.MAX,l:(e,t,n)=>({$:R(t,e[1],n),C:e[2]==="="?1:2,type:"heading"})},htmlComment:{t:w(re),i:s.HIGH,l:()=>({}),h:z},image:{t:S(fn),i:s.HIGH,l:e=>({D:e[1],R:Q(e[2]),N:e[3]}),h:(e,t,n)=>l("img",{key:n.k,alt:e.D||void 0,title:e.N||void 0,src:A(e.R)})},link:{t:_(pn),i:s.LOW,l:(e,t,n)=>({$:yn(t,e[1],n),R:Q(e[2]),N:e[3]}),h:(e,t,n)=>l("a",{key:n.k,href:A(e.R),title:e.N},t(e.$,n))},linkAngleBraceStyleDetector:{t:_(ze),i:s.MAX,l:e=>({$:[{$:e[1],type:"text"}],R:e[1],type:"link"})},linkBareUrlDetector:{t:(e,t)=>t.Z?null:_(Ne)(e,t),i:s.MAX,l:e=>({$:[{$:e[1],type:"text"}],R:e[1],N:void 0,type:"link"})},linkMailtoDetector:{t:_(Te),i:s.MAX,l(e){let t=e[1],n=e[1];return He.test(n)||(n="mailto:"+n),{$:[{$:t.replace("mailto:",""),type:"text"}],R:n,type:"link"}}},orderedList:q(l,1),unorderedList:q(l,2),newlineCoalescer:{t:M(be),i:s.LOW,l:T,h:()=>`
`},paragraph:{t:kn,i:s.LOW,l:N,h:(e,t,n)=>l("p",{key:n.k},t(e.$,n))},ref:{t:_(je),i:s.MAX,l:e=>(h[e[1]]={R:e[2],N:e[4]},{}),h:z},refImage:{t:S(Xe),i:s.MAX,l:e=>({D:e[1]||void 0,F:e[2]}),h:(e,t,n)=>l("img",{key:n.k,alt:e.D,src:A(h[e.F].R),title:h[e.F].N})},refLink:{t:_(De),i:s.MAX,l:(e,t,n)=>({$:t(e[1],n),P:t(e[0].replace(Fe,"\\$1"),n),F:e[2]}),h:(e,t,n)=>h[e.F]?l("a",{key:n.k,href:A(h[e.F].R),title:h[e.F].N},t(e.$,n)):l("span",{key:n.k},t(e.P,n))},table:{t:M(oe),i:s.HIGH,l:mn,h:(e,t,n)=>l("table",{key:n.k},l("thead",null,l("tr",null,e.L.map(function(a,i){return l("th",{key:i,style:J(e,i)},t(a,n))}))),l("tbody",null,e.A.map(function(a,i){return l("tr",{key:i},a.map(function(d,p){return l("td",{key:p,style:J(e,p)},t(d,n))}))})))},tableSeparator:{t:function(e,t){return t.v?Ze.exec(e):null},i:s.HIGH,l:function(){return{type:"tableSeparator"}},h:()=>" | "},text:{t:w(rn),i:s.MIN,l:e=>({$:e[0].replace(Ge,(t,n)=>o.namedCodesToUnicode[n]?o.namedCodesToUnicode[n]:t)}),h:e=>e.$},textBolded:{t:S(Ke),i:s.MED,l:(e,t,n)=>({$:t(e[2],n)}),h:(e,t,n)=>l("strong",{key:n.k},t(e.$,n))},textEmphasized:{t:S(Ye),i:s.LOW,l:(e,t,n)=>({$:t(e[2],n)}),h:(e,t,n)=>l("em",{key:n.k},t(e.$,n))},textEscaped:{t:S(tn),i:s.HIGH,l:e=>({$:e[1],type:"text"})},textMarked:{t:S(en),i:s.LOW,l:N,h:(e,t,n)=>l("mark",{key:n.k},t(e.$,n))},textStrikethroughed:{t:S(nn),i:s.LOW,l:N,h:(e,t,n)=>l("del",{key:n.k},t(e.$,n))}};o.disableParsingRawHTML!==!0&&(m.htmlBlock={t:w(j),i:s.HIGH,l(e,t,n){const[,a]=e[3].match(ln),i=new RegExp(`^${a}`,"gm"),d=e[3].replace(i,""),p=(x=d,hn.some(y=>y.test(x))?$n:R);var x;const $=e[1].toLowerCase(),v=$e.indexOf($)!==-1;n.Z=n.Z||$==="a";const k=v?e[3]:p(t,d,n);return n.Z=!1,{I:g(e[2]),$:k,G:v,H:v?$:e[1]}},h:(e,t,n)=>l(e.H,O({key:n.k},e.I),e.G?e.$:t(e.$,n))},m.htmlSelfClosing={t:w(X),i:s.HIGH,l:e=>({I:g(e[2]||""),H:e[1]}),h:(e,t,n)=>l(e.H,O({},e.I,{key:n.k}))});const H=function(e){let t=Object.keys(e);function n(a,i){let d=[],p="";for(;a;){let x=0;for(;x<t.length;){const $=t[x],v=e[$],k=v.t(a,i,p);if(k){const y=k[0];a=a.substring(y.length);const I=v.l(k,n,i);I.type==null&&(I.type=$),d.push(I),p=y;break}x++}}return d}return t.sort(function(a,i){let d=e[a].i,p=e[i].i;return d!==p?d-p:a<i?-1:1}),function(a,i){return n(function(d){return d.replace(Oe,`
`).replace(Ee,"").replace(Ue,"    ")}(a),i)}}(m),b=(L=function(e){return function(t,n,a){return e[t.type].h(t,n,a)}}(m),function e(t,n={}){if(Array.isArray(t)){const a=n.k,i=[];let d=!1;for(let p=0;p<t.length;p++){n.k=p;const x=e(t[p],n),$=typeof x=="string";$&&d?i[i.length-1]+=x:x!==null&&i.push(x),d=$}return n.k=a,i}return L(t,e,n)});var L;const E=f(r);return u.length?l("div",null,E,l("footer",{key:"footer"},u.map(function(e){return l("div",{id:o.slugify(e.B),key:e.B},e.B,b(H(e.O,{_:!0})))}))):E}(function(r){r[r.MAX=0]="MAX",r[r.HIGH=1]="HIGH",r[r.MED=2]="MED",r[r.LOW=3]="LOW",r[r.MIN=4]="MIN"})(s||(s={}));const vn=r=>{let{children:o,options:c}=r,l=function(f,g){if(f==null)return{};var u,h,m={},H=Object.keys(f);for(h=0;h<H.length;h++)g.indexOf(u=H[h])>=0||(m[u]=f[u]);return m}(r,ye);return G.cloneElement(Hn(o,c),l)};function In({value:r,overrides:o}){return ke.jsx(vn,{options:{overrides:{h1:{component:"h2"},h2:{component:"h3"},h3:{component:"h4"},h4:{component:"h5"},h5:{component:"h6"},...o}},children:r})}export{In as M};
