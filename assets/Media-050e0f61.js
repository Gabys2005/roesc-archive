import{j as Q,c as jd,g as xe,a as Ae,r as Pe}from"./index-2e5d3364.js";import{c as au}from"./countryList-2a07b954.js";import{a as je}from"./MediaSection-a48a39fb.js";function We({id:o}){return o?Q.jsxs(Q.Fragment,{children:[au[o].emoji," ",au[o].name]}):Q.jsx(Q.Fragment,{})}var iu={},Cd={exports:{}};Cd.exports;(function(o,v){var m=200,j="__lodash_hash_undefined__",D=1,M=2,z=9007199254740991,L="[object Arguments]",C="[object Array]",$="[object AsyncFunction]",rd="[object Boolean]",H="[object Date]",V="[object Error]",nd="[object Function]",bd="[object GeneratorFunction]",F="[object Map]",ad="[object Number]",k="[object Null]",E="[object Object]",q="[object Promise]",r="[object Proxy]",n="[object RegExp]",a="[object Set]",f="[object String]",t="[object Symbol]",s="[object Undefined]",l="[object WeakMap]",b="[object ArrayBuffer]",h="[object DataView]",x="[object Float32Array]",T="[object Float64Array]",id="[object Int8Array]",dd="[object Int16Array]",pd="[object Int32Array]",K="[object Uint8Array]",od="[object Uint8ClampedArray]",A="[object Uint16Array]",Y="[object Uint32Array]",sd=/[\\^$.*+?()[\]{}|]/g,gd=/^\[object .+?Constructor\]$/,bu=/^(?:0|[1-9]\d*)$/,p={};p[x]=p[T]=p[id]=p[dd]=p[pd]=p[K]=p[od]=p[A]=p[Y]=!0,p[L]=p[C]=p[b]=p[rd]=p[h]=p[H]=p[V]=p[nd]=p[F]=p[ad]=p[E]=p[n]=p[a]=p[f]=p[l]=!1;var Fd=typeof jd=="object"&&jd&&jd.Object===Object&&jd,pu=typeof self=="object"&&self&&self.Object===Object&&self,G=Fd||pu||Function("return this")(),Ud=v&&!v.nodeType&&v,Gd=Ud&&!0&&o&&!o.nodeType&&o,Wd=Gd&&Gd.exports===Ud,Ed=Wd&&Fd.process,Bd=function(){try{return Ed&&Ed.binding&&Ed.binding("util")}catch{}}(),$d=Bd&&Bd.isTypedArray;function gu(d,u){for(var e=-1,c=d==null?0:d.length,g=0,i=[];++e<c;){var y=d[e];u(y,e,d)&&(i[g++]=y)}return i}function hu(d,u){for(var e=-1,c=u.length,g=d.length;++e<c;)d[g+e]=u[e];return d}function _u(d,u){for(var e=-1,c=d==null?0:d.length;++e<c;)if(u(d[e],e,d))return!0;return!1}function yu(d,u){for(var e=-1,c=Array(d);++e<d;)c[e]=u(e);return c}function mu(d){return function(u){return d(u)}}function vu(d,u){return d.has(u)}function Tu(d,u){return d==null?void 0:d[u]}function Ou(d){var u=-1,e=Array(d.size);return d.forEach(function(c,g){e[++u]=[g,c]}),e}function wu(d,u){return function(e){return d(u(e))}}function Su(d){var u=-1,e=Array(d.size);return d.forEach(function(c){e[++u]=c}),e}var xu=Array.prototype,Au=Function.prototype,vd=Object.prototype,Id=G["__core-js_shared__"],Hd=Au.toString,U=vd.hasOwnProperty,qd=function(){var d=/[^.]+$/.exec(Id&&Id.keys&&Id.keys.IE_PROTO||"");return d?"Symbol(src)_1."+d:""}(),Kd=vd.toString,Pu=RegExp("^"+Hd.call(U).replace(sd,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Yd=Wd?G.Buffer:void 0,Td=G.Symbol,Jd=G.Uint8Array,Xd=vd.propertyIsEnumerable,ju=xu.splice,ud=Td?Td.toStringTag:void 0,Zd=Object.getOwnPropertySymbols,Cu=Yd?Yd.isBuffer:void 0,Eu=wu(Object.keys,Object),Rd=ld(G,"DataView"),hd=ld(G,"Map"),Nd=ld(G,"Promise"),Dd=ld(G,"Set"),Md=ld(G,"WeakMap"),_d=ld(Object,"create"),Iu=td(Rd),Ru=td(hd),Nu=td(Nd),Du=td(Dd),Mu=td(Md),Qd=Td?Td.prototype:void 0,zd=Qd?Qd.valueOf:void 0;function ed(d){var u=-1,e=d==null?0:d.length;for(this.clear();++u<e;){var c=d[u];this.set(c[0],c[1])}}function zu(){this.__data__=_d?_d(null):{},this.size=0}function Lu(d){var u=this.has(d)&&delete this.__data__[d];return this.size-=u?1:0,u}function Fu(d){var u=this.__data__;if(_d){var e=u[d];return e===j?void 0:e}return U.call(u,d)?u[d]:void 0}function Uu(d){var u=this.__data__;return _d?u[d]!==void 0:U.call(u,d)}function Gu(d,u){var e=this.__data__;return this.size+=this.has(d)?0:1,e[d]=_d&&u===void 0?j:u,this}ed.prototype.clear=zu,ed.prototype.delete=Lu,ed.prototype.get=Fu,ed.prototype.has=Uu,ed.prototype.set=Gu;function W(d){var u=-1,e=d==null?0:d.length;for(this.clear();++u<e;){var c=d[u];this.set(c[0],c[1])}}function Wu(){this.__data__=[],this.size=0}function Bu(d){var u=this.__data__,e=wd(u,d);if(e<0)return!1;var c=u.length-1;return e==c?u.pop():ju.call(u,e,1),--this.size,!0}function $u(d){var u=this.__data__,e=wd(u,d);return e<0?void 0:u[e][1]}function Hu(d){return wd(this.__data__,d)>-1}function qu(d,u){var e=this.__data__,c=wd(e,d);return c<0?(++this.size,e.push([d,u])):e[c][1]=u,this}W.prototype.clear=Wu,W.prototype.delete=Bu,W.prototype.get=$u,W.prototype.has=Hu,W.prototype.set=qu;function fd(d){var u=-1,e=d==null?0:d.length;for(this.clear();++u<e;){var c=d[u];this.set(c[0],c[1])}}function Ku(){this.size=0,this.__data__={hash:new ed,map:new(hd||W),string:new ed}}function Yu(d){var u=Sd(this,d).delete(d);return this.size-=u?1:0,u}function Ju(d){return Sd(this,d).get(d)}function Xu(d){return Sd(this,d).has(d)}function Zu(d,u){var e=Sd(this,d),c=e.size;return e.set(d,u),this.size+=e.size==c?0:1,this}fd.prototype.clear=Ku,fd.prototype.delete=Yu,fd.prototype.get=Ju,fd.prototype.has=Xu,fd.prototype.set=Zu;function Od(d){var u=-1,e=d==null?0:d.length;for(this.__data__=new fd;++u<e;)this.add(d[u])}function Qu(d){return this.__data__.set(d,j),this}function Vu(d){return this.__data__.has(d)}Od.prototype.add=Od.prototype.push=Qu,Od.prototype.has=Vu;function J(d){var u=this.__data__=new W(d);this.size=u.size}function ku(){this.__data__=new W,this.size=0}function de(d){var u=this.__data__,e=u.delete(d);return this.size=u.size,e}function ue(d){return this.__data__.get(d)}function ee(d){return this.__data__.has(d)}function fe(d,u){var e=this.__data__;if(e instanceof W){var c=e.__data__;if(!hd||c.length<m-1)return c.push([d,u]),this.size=++e.size,this;e=this.__data__=new fd(c)}return e.set(d,u),this.size=e.size,this}J.prototype.clear=ku,J.prototype.delete=de,J.prototype.get=ue,J.prototype.has=ee,J.prototype.set=fe;function te(d,u){var e=xd(d),c=!e&&me(d),g=!e&&!c&&Ld(d),i=!e&&!c&&!g&&ru(d),y=e||c||g||i,O=y?yu(d.length,String):[],w=O.length;for(var _ in d)(u||U.call(d,_))&&!(y&&(_=="length"||g&&(_=="offset"||_=="parent")||i&&(_=="buffer"||_=="byteLength"||_=="byteOffset")||pe(_,w)))&&O.push(_);return O}function wd(d,u){for(var e=d.length;e--;)if(eu(d[e][0],u))return e;return-1}function ce(d,u,e){var c=u(d);return xd(d)?c:hu(c,e(d))}function yd(d){return d==null?d===void 0?s:k:ud&&ud in Object(d)?le(d):ye(d)}function Vd(d){return md(d)&&yd(d)==L}function kd(d,u,e,c,g){return d===u?!0:d==null||u==null||!md(d)&&!md(u)?d!==d&&u!==u:re(d,u,e,c,kd,g)}function re(d,u,e,c,g,i){var y=xd(d),O=xd(u),w=y?C:X(d),_=O?C:X(u);w=w==L?E:w,_=_==L?E:_;var P=w==E,N=_==E,S=w==_;if(S&&Ld(d)){if(!Ld(u))return!1;y=!0,P=!1}if(S&&!P)return i||(i=new J),y||ru(d)?du(d,u,e,c,g,i):oe(d,u,w,e,c,g,i);if(!(e&D)){var I=P&&U.call(d,"__wrapped__"),R=N&&U.call(u,"__wrapped__");if(I||R){var Z=I?d.value():d,B=R?u.value():u;return i||(i=new J),g(Z,B,e,c,i)}}return S?(i||(i=new J),se(d,u,e,c,g,i)):!1}function ne(d){if(!cu(d)||he(d))return!1;var u=fu(d)?Pu:gd;return u.test(td(d))}function ae(d){return md(d)&&tu(d.length)&&!!p[yd(d)]}function ie(d){if(!_e(d))return Eu(d);var u=[];for(var e in Object(d))U.call(d,e)&&e!="constructor"&&u.push(e);return u}function du(d,u,e,c,g,i){var y=e&D,O=d.length,w=u.length;if(O!=w&&!(y&&w>O))return!1;var _=i.get(d);if(_&&i.get(u))return _==u;var P=-1,N=!0,S=e&M?new Od:void 0;for(i.set(d,u),i.set(u,d);++P<O;){var I=d[P],R=u[P];if(c)var Z=y?c(R,I,P,u,d,i):c(I,R,P,d,u,i);if(Z!==void 0){if(Z)continue;N=!1;break}if(S){if(!_u(u,function(B,cd){if(!vu(S,cd)&&(I===B||g(I,B,e,c,i)))return S.push(cd)})){N=!1;break}}else if(!(I===R||g(I,R,e,c,i))){N=!1;break}}return i.delete(d),i.delete(u),N}function oe(d,u,e,c,g,i,y){switch(e){case h:if(d.byteLength!=u.byteLength||d.byteOffset!=u.byteOffset)return!1;d=d.buffer,u=u.buffer;case b:return!(d.byteLength!=u.byteLength||!i(new Jd(d),new Jd(u)));case rd:case H:case ad:return eu(+d,+u);case V:return d.name==u.name&&d.message==u.message;case n:case f:return d==u+"";case F:var O=Ou;case a:var w=c&D;if(O||(O=Su),d.size!=u.size&&!w)return!1;var _=y.get(d);if(_)return _==u;c|=M,y.set(d,u);var P=du(O(d),O(u),c,g,i,y);return y.delete(d),P;case t:if(zd)return zd.call(d)==zd.call(u)}return!1}function se(d,u,e,c,g,i){var y=e&D,O=uu(d),w=O.length,_=uu(u),P=_.length;if(w!=P&&!y)return!1;for(var N=w;N--;){var S=O[N];if(!(y?S in u:U.call(u,S)))return!1}var I=i.get(d);if(I&&i.get(u))return I==u;var R=!0;i.set(d,u),i.set(u,d);for(var Z=y;++N<w;){S=O[N];var B=d[S],cd=u[S];if(c)var nu=y?c(cd,B,S,u,d,i):c(B,cd,S,d,u,i);if(!(nu===void 0?B===cd||g(B,cd,e,c,i):nu)){R=!1;break}Z||(Z=S=="constructor")}if(R&&!Z){var Ad=d.constructor,Pd=u.constructor;Ad!=Pd&&"constructor"in d&&"constructor"in u&&!(typeof Ad=="function"&&Ad instanceof Ad&&typeof Pd=="function"&&Pd instanceof Pd)&&(R=!1)}return i.delete(d),i.delete(u),R}function uu(d){return ce(d,Oe,be)}function Sd(d,u){var e=d.__data__;return ge(u)?e[typeof u=="string"?"string":"hash"]:e.map}function ld(d,u){var e=Tu(d,u);return ne(e)?e:void 0}function le(d){var u=U.call(d,ud),e=d[ud];try{d[ud]=void 0;var c=!0}catch{}var g=Kd.call(d);return c&&(u?d[ud]=e:delete d[ud]),g}var be=Zd?function(d){return d==null?[]:(d=Object(d),gu(Zd(d),function(u){return Xd.call(d,u)}))}:we,X=yd;(Rd&&X(new Rd(new ArrayBuffer(1)))!=h||hd&&X(new hd)!=F||Nd&&X(Nd.resolve())!=q||Dd&&X(new Dd)!=a||Md&&X(new Md)!=l)&&(X=function(d){var u=yd(d),e=u==E?d.constructor:void 0,c=e?td(e):"";if(c)switch(c){case Iu:return h;case Ru:return F;case Nu:return q;case Du:return a;case Mu:return l}return u});function pe(d,u){return u=u??z,!!u&&(typeof d=="number"||bu.test(d))&&d>-1&&d%1==0&&d<u}function ge(d){var u=typeof d;return u=="string"||u=="number"||u=="symbol"||u=="boolean"?d!=="__proto__":d===null}function he(d){return!!qd&&qd in d}function _e(d){var u=d&&d.constructor,e=typeof u=="function"&&u.prototype||vd;return d===e}function ye(d){return Kd.call(d)}function td(d){if(d!=null){try{return Hd.call(d)}catch{}try{return d+""}catch{}}return""}function eu(d,u){return d===u||d!==d&&u!==u}var me=Vd(function(){return arguments}())?Vd:function(d){return md(d)&&U.call(d,"callee")&&!Xd.call(d,"callee")},xd=Array.isArray;function ve(d){return d!=null&&tu(d.length)&&!fu(d)}var Ld=Cu||Se;function Te(d,u){return kd(d,u)}function fu(d){if(!cu(d))return!1;var u=yd(d);return u==nd||u==bd||u==$||u==r}function tu(d){return typeof d=="number"&&d>-1&&d%1==0&&d<=z}function cu(d){var u=typeof d;return d!=null&&(u=="object"||u=="function")}function md(d){return d!=null&&typeof d=="object"}var ru=$d?mu($d):ae;function Oe(d){return ve(d)?te(d):ie(d)}function we(){return[]}function Se(){return!1}o.exports=Te})(Cd,Cd.exports);var Ce=Cd.exports,ou={exports:{}},Ee="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ie=Ee,Re=Ie;function su(){}function lu(){}lu.resetWarningCache=su;var Ne=function(){function o(j,D,M,z,L,C){if(C!==Re){var $=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw $.name="Invariant Violation",$}}o.isRequired=o;function v(){return o}var m={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:v,element:o,elementType:o,instanceOf:v,node:o,objectOf:v,oneOf:v,oneOfType:v,shape:v,exact:v,checkPropTypes:lu,resetWarningCache:su};return m.PropTypes=m,m};ou.exports=Ne();var De=ou.exports;/*! Copyright Twitter Inc. and other contributors. Licensed under MIT */var Me=function(){var o={base:"https://twemoji.maxcdn.com/v/14.0.1/",ext:".png",size:"72x72",className:"emoji",convert:{fromCodePoint:E,toCodePoint:a},onerror:function(){this.parentNode&&this.parentNode.replaceChild(C(this.alt,!1),this)},parse:q,replace:r,test:n},v={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},m=/(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c[\udffc-\udfff]|\ud83e\udef1\ud83c\udffc\u200d\ud83e\udef2\ud83c[\udffb\udffd-\udfff]|\ud83e\udef1\ud83c\udffd\u200d\ud83e\udef2\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\udef1\ud83c\udffe\u200d\ud83e\udef2\ud83c[\udffb-\udffd\udfff]|\ud83e\udef1\ud83c\udfff\u200d\ud83e\udef2\ud83c[\udffb-\udffe]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83e\udd1d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91]|\ud83e\udd1d)|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd\udec3-\udec5\udef0-\udef6]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udedd-\udedf\udeeb\udeec\udef4-\udefc\udfe0-\udfeb\udff0]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78-\uddb4\uddb7\uddba\uddbc-\uddcc\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7c\ude80-\ude86\ude90-\udeac\udeb0-\udeba\udec0-\udec2\uded0-\uded9\udee0-\udee7]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g,j=/\uFE0F/g,D=String.fromCharCode(8205),M=/[&<>'"]/g,z=/^(?:iframe|noframes|noscript|script|select|style|textarea)$/,L=String.fromCharCode;return o;function C(f,t){return document.createTextNode(t?f.replace(j,""):f)}function $(f){return f.replace(M,F)}function rd(f,t){return"".concat(t.base,t.size,"/",f,t.ext)}function H(f,t){for(var s=f.childNodes,l=s.length,b,h;l--;)b=s[l],h=b.nodeType,h===3?t.push(b):h===1&&!("ownerSVGElement"in b)&&!z.test(b.nodeName.toLowerCase())&&H(b,t);return t}function V(f){return a(f.indexOf(D)<0?f.replace(j,""):f)}function nd(f,t){for(var s=H(f,[]),l=s.length,b,h,x,T,id,dd,pd,K,od,A,Y,sd,gd;l--;){for(x=!1,T=document.createDocumentFragment(),id=s[l],dd=id.nodeValue,K=0;pd=m.exec(dd);){if(od=pd.index,od!==K&&T.appendChild(C(dd.slice(K,od),!0)),Y=pd[0],sd=V(Y),K=od+Y.length,gd=t.callback(sd,t),sd&&gd){A=new Image,A.onerror=t.onerror,A.setAttribute("draggable","false"),b=t.attributes(Y,sd);for(h in b)b.hasOwnProperty(h)&&h.indexOf("on")!==0&&!A.hasAttribute(h)&&A.setAttribute(h,b[h]);A.className=t.className,A.alt=Y,A.src=gd,x=!0,T.appendChild(A)}A||T.appendChild(C(Y,!1)),A=null}x&&(K<dd.length&&T.appendChild(C(dd.slice(K),!0)),id.parentNode.replaceChild(T,id))}return f}function bd(f,t){return r(f,function(s){var l=s,b=V(s),h=t.callback(b,t),x,T;if(b&&h){l="<img ".concat('class="',t.className,'" ','draggable="false" ','alt="',s,'"',' src="',h,'"'),x=t.attributes(s,b);for(T in x)x.hasOwnProperty(T)&&T.indexOf("on")!==0&&l.indexOf(" "+T+"=")===-1&&(l=l.concat(" ",T,'="',$(x[T]),'"'));l=l.concat("/>")}return l})}function F(f){return v[f]}function ad(){return null}function k(f){return typeof f=="number"?f+"x"+f:f}function E(f){var t=typeof f=="string"?parseInt(f,16):f;return t<65536?L(t):(t-=65536,L(55296+(t>>10),56320+(t&1023)))}function q(f,t){return(!t||typeof t=="function")&&(t={callback:t}),(typeof f=="string"?bd:nd)(f,{callback:t.callback||rd,attributes:typeof t.attributes=="function"?t.attributes:ad,base:typeof t.base=="string"?t.base:o.base,ext:t.ext||o.ext,size:t.folder||k(t.size||o.size),className:t.className||o.className,onerror:t.onerror||o.onerror})}function r(f,t){return String(f).replace(m,t)}function n(f){m.lastIndex=0;var t=m.test(f);return m.lastIndex=0,t}function a(f,t){for(var s=[],l=0,b=0,h=0;h<f.length;)l=f.charCodeAt(h++),b?(s.push((65536+(b-55296<<10)+(l-56320)).toString(16)),b=0):55296<=l&&l<=56319?b=l:s.push(l.toString(16));return s.join(t||"-")}}();const ze=Object.freeze(Object.defineProperty({__proto__:null,default:Me},Symbol.toStringTag,{value:"Module"})),Le=xe(ze);(function(o){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var v=M(Ce),m=M(Pe),j=M(De),D=M(Le);function M(r){return r&&r.__esModule?r:{default:r}}function z(r){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?z=function(a){return typeof a}:z=function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},z(r)}function L(r){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?arguments[n]:{},f=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(f=f.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),f.forEach(function(t){E(r,t,a[t])})}return r}function C(r,n){if(r==null)return{};var a=$(r,n),f,t;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);for(t=0;t<s.length;t++)f=s[t],!(n.indexOf(f)>=0)&&Object.prototype.propertyIsEnumerable.call(r,f)&&(a[f]=r[f])}return a}function $(r,n){if(r==null)return{};var a={},f=Object.keys(r),t,s;for(s=0;s<f.length;s++)t=f[s],!(n.indexOf(t)>=0)&&(a[t]=r[t]);return a}function rd(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}function H(r,n){for(var a=0;a<n.length;a++){var f=n[a];f.enumerable=f.enumerable||!1,f.configurable=!0,"value"in f&&(f.writable=!0),Object.defineProperty(r,f.key,f)}}function V(r,n,a){return n&&H(r.prototype,n),a&&H(r,a),r}function nd(r,n){return n&&(z(n)==="object"||typeof n=="function")?n:bd(r)}function bd(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function F(r){return F=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)},F(r)}function ad(r,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(n&&n.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),n&&k(r,n)}function k(r,n){return k=Object.setPrototypeOf||function(f,t){return f.__proto__=t,f},k(r,n)}function E(r,n,a){return n in r?Object.defineProperty(r,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[n]=a,r}var q=function(r){ad(n,r);function n(a){var f;return rd(this,n),f=nd(this,F(n).call(this,a)),a.noWrapper?f.childrenRefs={}:f.rootRef=m.default.createRef(),f}return V(n,[{key:"_parseTwemoji",value:function(){var f=this.props.noWrapper;if(f)for(var t in this.childrenRefs){var s=this.childrenRefs[t].current;D.default.parse(s,this.props.options)}else{var l=this.rootRef.current;D.default.parse(l,this.props.options)}}},{key:"componentDidUpdate",value:function(f){(0,v.default)(this.props,f)||this._parseTwemoji()}},{key:"componentDidMount",value:function(){this._parseTwemoji()}},{key:"render",value:function(){var f=this,t=this.props,s=t.children,l=t.noWrapper,b=t.tag,h=C(t,["children","noWrapper","tag"]);return l?m.default.createElement(m.default.Fragment,null,m.default.Children.map(s,function(x,T){return typeof x=="string"?(console.warn(`Twemoji can't parse string child when noWrapper is set. Skipping child "`.concat(x,'"')),x):(f.childrenRefs[T]=f.childrenRefs[T]||m.default.createRef(),m.default.cloneElement(x,{ref:f.childrenRefs[T]}))})):(delete h.options,m.default.createElement(b,L({ref:this.rootRef},h),s))}}]),n}(m.default.Component);o.default=q,E(q,"propTypes",{children:j.default.node,noWrapper:j.default.bool,options:j.default.object,tag:j.default.string}),E(q,"defaultProps",{tag:"div"})})(iu);const Be=Ae(iu);function $e({media:o}){return Q.jsxs("div",{children:[Q.jsx("h1",{children:"Media"}),Q.jsx("hr",{}),o.map(v=>Q.jsx(je,{images:v.images,name:v.name},v.name))]})}export{We as C,$e as M,Be as T};
