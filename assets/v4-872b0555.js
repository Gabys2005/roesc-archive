const m={current:{username:"",id:""},previous:[],aliases:[],joined:"",left:"",textContent:""},g={name:"",shortName:"",link:"",created:"",roescJoin:"",closed:"",links:[],logos:[{name:"Light Logo",link:""},{name:"Dark Logo",link:""}],textContent:"",owners:[],staff:[]},p={name:"",shortName:"",link:"",previousNames:[],creationDate:"",cancellationDate:"",textContent:"",links:[],owners:[],previousOwners:[],developers:[],staff:[],designers:[],broadcasters:[],media:[{name:"logos",images:[{name:"Light Logo",link:""},{name:"Dark Logo",link:""}]}]},D={edition:"",link:"",cancelled:!1,slogans:[],countries:[],venues:[],presenters:[],broadcasters:[],links:[],entries:[],shows:[],media:[{name:"logos",images:[]}],textContent:"",sfDraw:[],sfDrawText:"",bidding:[],biddingText:""};let i;const r=new Uint8Array(16);function c(){if(!i&&(i=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!i))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(r)}const t=[];for(let n=0;n<256;++n)t.push((n+256).toString(16).slice(1));function l(n,e=0){return(t[n[e+0]]+t[n[e+1]]+t[n[e+2]]+t[n[e+3]]+"-"+t[n[e+4]]+t[n[e+5]]+"-"+t[n[e+6]]+t[n[e+7]]+"-"+t[n[e+8]]+t[n[e+9]]+"-"+t[n[e+10]]+t[n[e+11]]+t[n[e+12]]+t[n[e+13]]+t[n[e+14]]+t[n[e+15]]).toLowerCase()}const u=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),d={randomUUID:u};function y(n,e,s){if(d.randomUUID&&!e&&!n)return d.randomUUID();n=n||{};const a=n.random||(n.rng||c)();if(a[6]=a[6]&15|64,a[8]=a[8]&63|128,e){s=s||0;for(let o=0;o<16;++o)e[s+o]=a[o];return e}return l(a)}export{g as a,p as b,D as c,m as d,y as v};