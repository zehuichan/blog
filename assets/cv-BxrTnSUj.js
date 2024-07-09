var Bt=Object.defineProperty,Dt=Object.defineProperties;var At=Object.getOwnPropertyDescriptors;var at=Object.getOwnPropertySymbols;var kt=Object.prototype.hasOwnProperty,St=Object.prototype.propertyIsEnumerable;var rt=(t,e,u)=>e in t?Bt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:u}):t[e]=u,j=(t,e)=>{for(var u in e||(e={}))kt.call(e,u)&&rt(t,u,e[u]);if(at)for(var u of at(e))St.call(e,u)&&rt(t,u,e[u]);return t},U=(t,e)=>Dt(t,At(e));import{i as ht,d as I,o as f,c as E,a as o,b as et,w as wt,u as d,e as y,g as Mt,f as gt,h as q,r as G,m as pt,j as Ft,k as bt,l as Tt,n as P,p as Ht,q as Rt,T as $t,s as It,t as C,v as g,F as D,x as X,y as K,z as R,A as Nt,B as zt,C as st,D as Vt,E as s,G as l,H as W,I as F,_ as z,J as V,K as Pt,L as Gt,M as jt,N as Ut,O as Lt,P as Ot,Q as Wt,R as qt}from"./index-A0PrvgU2.js";const Kt=t=>t===void 0,Jt=t=>typeof t=="number",Qt=t=>ht(t)?!Number.isNaN(Number(t)):!1;function Zt(t,e="px"){if(!t)return"";if(Jt(t)||Qt(t))return`${t}${e}`;if(ht(t))return t}/*! Element Plus Icons Vue v2.3.1 */var Xt=I({name:"Loading",__name:"loading",setup(t){return(e,u)=>(f(),E("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[o("path",{fill:"currentColor",d:"M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"})]))}}),Yt=Xt;const it=et([String,Object,Function]),te=({from:t,replacement:e,scope:u,version:n,ref:r,type:a="API"},i)=>{wt(()=>d(i),c=>{},{immediate:!0})},vt=t=>{const e=Mt();return y(()=>{var u,n;return(n=(u=e==null?void 0:e.proxy)==null?void 0:u.$props)==null?void 0:n[t]})};var ut=(t,e)=>{const u=t.__vccOpts||t;for(const[n,r]of e)u[n]=r;return u};const ee=gt({size:{type:et([Number,String])},color:{type:String}}),ue=I({name:"ElIcon",inheritAttrs:!1}),ne=I(U(j({},ue),{props:ee,setup(t){const e=t,u=q("icon"),n=y(()=>{const{size:r,color:a}=e;return!r&&!a?{}:{fontSize:Kt(r)?void 0:Zt(r),"--color":a}});return(r,a)=>(f(),E("i",pt({class:d(u).b(),style:d(n)},r.$attrs),[G(r.$slots,"default")],16))}}));var ae=ut(ne,[["__file","icon.vue"]]);const ot=Ft(ae),nt=Symbol("formContextKey"),mt=Symbol("formItemContextKey"),re=(t,e={})=>{const u=bt(void 0),n=e.prop?u:vt("size"),r=e.global?u:Tt(),a=e.form?{size:void 0}:P(nt,void 0),i=e.formItem?{size:void 0}:P(mt,void 0);return y(()=>n.value||d(t)||(i==null?void 0:i.size)||(a==null?void 0:a.size)||r.value||"")},Et=t=>{const e=vt("disabled"),u=P(nt,void 0);return y(()=>e.value||d(t)||(u==null?void 0:u.disabled)||!1)},se=()=>{const t=P(nt,void 0),e=P(mt,void 0);return{form:t,formItem:e}},Ct=Symbol("buttonGroupContextKey"),ie=(t,e)=>{te({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},y(()=>t.type==="text"));const u=P(Ct,void 0),n=Ht("button"),{form:r}=se(),a=re(y(()=>u==null?void 0:u.size)),i=Et(),c=bt(),p=Rt(),x=y(()=>t.type||(u==null?void 0:u.type)||""),S=y(()=>{var b,H,N;return(N=(H=t.autoInsertSpace)!=null?H:(b=n.value)==null?void 0:b.autoInsertSpace)!=null?N:!1}),w=y(()=>t.tag==="button"?{ariaDisabled:i.value||t.loading,disabled:i.value||t.loading,autofocus:t.autofocus,type:t.nativeType}:{}),h=y(()=>{var b;const H=(b=p.default)==null?void 0:b.call(p);if(S.value&&(H==null?void 0:H.length)===1){const N=H[0];if((N==null?void 0:N.type)===$t){const xt=N.children;return new RegExp("^\\p{Unified_Ideograph}{2}$","u").test(xt.trim())}}return!1});return{_disabled:i,_size:a,_type:x,_ref:c,_props:w,shouldAddSpace:h,handleClick:b=>{t.nativeType==="reset"&&(r==null||r.resetFields()),e("click",b)}}},oe=["default","primary","success","warning","info","danger","text",""],le=["button","submit","reset"],Y=gt({size:It,disabled:Boolean,type:{type:String,values:oe,default:""},icon:{type:it},nativeType:{type:String,values:le,default:"button"},loading:Boolean,loadingIcon:{type:it,default:()=>Yt},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0},tag:{type:et([String,Object]),default:"button"}}),ce={click:t=>t instanceof MouseEvent};function m(t,e){de(t)&&(t="100%");var u=fe(t);return t=e===360?t:Math.min(e,Math.max(0,parseFloat(t))),u&&(t=parseInt(String(t*e),10)/100),Math.abs(t-e)<1e-6?1:(e===360?t=(t<0?t%e+e:t%e)/parseFloat(String(e)):t=t%e/parseFloat(String(e)),t)}function L(t){return Math.min(1,Math.max(0,t))}function de(t){return typeof t=="string"&&t.indexOf(".")!==-1&&parseFloat(t)===1}function fe(t){return typeof t=="string"&&t.indexOf("%")!==-1}function _t(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function O(t){return t<=1?"".concat(Number(t)*100,"%"):t}function $(t){return t.length===1?"0"+t:String(t)}function he(t,e,u){return{r:m(t,255)*255,g:m(e,255)*255,b:m(u,255)*255}}function lt(t,e,u){t=m(t,255),e=m(e,255),u=m(u,255);var n=Math.max(t,e,u),r=Math.min(t,e,u),a=0,i=0,c=(n+r)/2;if(n===r)i=0,a=0;else{var p=n-r;switch(i=c>.5?p/(2-n-r):p/(n+r),n){case t:a=(e-u)/p+(e<u?6:0);break;case e:a=(u-t)/p+2;break;case u:a=(t-e)/p+4;break}a/=6}return{h:a,s:i,l:c}}function J(t,e,u){return u<0&&(u+=1),u>1&&(u-=1),u<1/6?t+(e-t)*(6*u):u<1/2?e:u<2/3?t+(e-t)*(2/3-u)*6:t}function ge(t,e,u){var n,r,a;if(t=m(t,360),e=m(e,100),u=m(u,100),e===0)r=u,a=u,n=u;else{var i=u<.5?u*(1+e):u+e-u*e,c=2*u-i;n=J(c,i,t+1/3),r=J(c,i,t),a=J(c,i,t-1/3)}return{r:n*255,g:r*255,b:a*255}}function ct(t,e,u){t=m(t,255),e=m(e,255),u=m(u,255);var n=Math.max(t,e,u),r=Math.min(t,e,u),a=0,i=n,c=n-r,p=n===0?0:c/n;if(n===r)a=0;else{switch(n){case t:a=(e-u)/c+(e<u?6:0);break;case e:a=(u-t)/c+2;break;case u:a=(t-e)/c+4;break}a/=6}return{h:a,s:p,v:i}}function pe(t,e,u){t=m(t,360)*6,e=m(e,100),u=m(u,100);var n=Math.floor(t),r=t-n,a=u*(1-e),i=u*(1-r*e),c=u*(1-(1-r)*e),p=n%6,x=[u,i,a,a,c,u][p],S=[c,u,u,i,a,a][p],w=[a,a,c,u,u,i][p];return{r:x*255,g:S*255,b:w*255}}function dt(t,e,u,n){var r=[$(Math.round(t).toString(16)),$(Math.round(e).toString(16)),$(Math.round(u).toString(16))];return n&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function Fe(t,e,u,n,r){var a=[$(Math.round(t).toString(16)),$(Math.round(e).toString(16)),$(Math.round(u).toString(16)),$(be(n))];return r&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))&&a[3].startsWith(a[3].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}function be(t){return Math.round(parseFloat(t)*255).toString(16)}function ft(t){return _(t)/255}function _(t){return parseInt(t,16)}function ve(t){return{r:t>>16,g:(t&65280)>>8,b:t&255}}var tt={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function me(t){var e={r:0,g:0,b:0},u=1,n=null,r=null,a=null,i=!1,c=!1;return typeof t=="string"&&(t=_e(t)),typeof t=="object"&&(k(t.r)&&k(t.g)&&k(t.b)?(e=he(t.r,t.g,t.b),i=!0,c=String(t.r).substr(-1)==="%"?"prgb":"rgb"):k(t.h)&&k(t.s)&&k(t.v)?(n=O(t.s),r=O(t.v),e=pe(t.h,n,r),i=!0,c="hsv"):k(t.h)&&k(t.s)&&k(t.l)&&(n=O(t.s),a=O(t.l),e=ge(t.h,n,a),i=!0,c="hsl"),Object.prototype.hasOwnProperty.call(t,"a")&&(u=t.a)),u=_t(u),{ok:i,format:t.format||c,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:u}}var Ee="[-\\+]?\\d+%?",Ce="[-\\+]?\\d*\\.\\d+%?",T="(?:".concat(Ce,")|(?:").concat(Ee,")"),Q="[\\s|\\(]+(".concat(T,")[,|\\s]+(").concat(T,")[,|\\s]+(").concat(T,")\\s*\\)?"),Z="[\\s|\\(]+(".concat(T,")[,|\\s]+(").concat(T,")[,|\\s]+(").concat(T,")[,|\\s]+(").concat(T,")\\s*\\)?"),B={CSS_UNIT:new RegExp(T),rgb:new RegExp("rgb"+Q),rgba:new RegExp("rgba"+Z),hsl:new RegExp("hsl"+Q),hsla:new RegExp("hsla"+Z),hsv:new RegExp("hsv"+Q),hsva:new RegExp("hsva"+Z),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function _e(t){if(t=t.trim().toLowerCase(),t.length===0)return!1;var e=!1;if(tt[t])t=tt[t],e=!0;else if(t==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var u=B.rgb.exec(t);return u?{r:u[1],g:u[2],b:u[3]}:(u=B.rgba.exec(t),u?{r:u[1],g:u[2],b:u[3],a:u[4]}:(u=B.hsl.exec(t),u?{h:u[1],s:u[2],l:u[3]}:(u=B.hsla.exec(t),u?{h:u[1],s:u[2],l:u[3],a:u[4]}:(u=B.hsv.exec(t),u?{h:u[1],s:u[2],v:u[3]}:(u=B.hsva.exec(t),u?{h:u[1],s:u[2],v:u[3],a:u[4]}:(u=B.hex8.exec(t),u?{r:_(u[1]),g:_(u[2]),b:_(u[3]),a:ft(u[4]),format:e?"name":"hex8"}:(u=B.hex6.exec(t),u?{r:_(u[1]),g:_(u[2]),b:_(u[3]),format:e?"name":"hex"}:(u=B.hex4.exec(t),u?{r:_(u[1]+u[1]),g:_(u[2]+u[2]),b:_(u[3]+u[3]),a:ft(u[4]+u[4]),format:e?"name":"hex8"}:(u=B.hex3.exec(t),u?{r:_(u[1]+u[1]),g:_(u[2]+u[2]),b:_(u[3]+u[3]),format:e?"name":"hex"}:!1)))))))))}function k(t){return!!B.CSS_UNIT.exec(String(t))}var ye=function(){function t(e,u){e===void 0&&(e=""),u===void 0&&(u={});var n;if(e instanceof t)return e;typeof e=="number"&&(e=ve(e)),this.originalInput=e;var r=me(e);this.originalInput=e,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=(n=u.format)!==null&&n!==void 0?n:r.format,this.gradientType=u.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}return t.prototype.isDark=function(){return this.getBrightness()<128},t.prototype.isLight=function(){return!this.isDark()},t.prototype.getBrightness=function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},t.prototype.getLuminance=function(){var e=this.toRgb(),u,n,r,a=e.r/255,i=e.g/255,c=e.b/255;return a<=.03928?u=a/12.92:u=Math.pow((a+.055)/1.055,2.4),i<=.03928?n=i/12.92:n=Math.pow((i+.055)/1.055,2.4),c<=.03928?r=c/12.92:r=Math.pow((c+.055)/1.055,2.4),.2126*u+.7152*n+.0722*r},t.prototype.getAlpha=function(){return this.a},t.prototype.setAlpha=function(e){return this.a=_t(e),this.roundA=Math.round(100*this.a)/100,this},t.prototype.isMonochrome=function(){var e=this.toHsl().s;return e===0},t.prototype.toHsv=function(){var e=ct(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}},t.prototype.toHsvString=function(){var e=ct(this.r,this.g,this.b),u=Math.round(e.h*360),n=Math.round(e.s*100),r=Math.round(e.v*100);return this.a===1?"hsv(".concat(u,", ").concat(n,"%, ").concat(r,"%)"):"hsva(".concat(u,", ").concat(n,"%, ").concat(r,"%, ").concat(this.roundA,")")},t.prototype.toHsl=function(){var e=lt(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}},t.prototype.toHslString=function(){var e=lt(this.r,this.g,this.b),u=Math.round(e.h*360),n=Math.round(e.s*100),r=Math.round(e.l*100);return this.a===1?"hsl(".concat(u,", ").concat(n,"%, ").concat(r,"%)"):"hsla(".concat(u,", ").concat(n,"%, ").concat(r,"%, ").concat(this.roundA,")")},t.prototype.toHex=function(e){return e===void 0&&(e=!1),dt(this.r,this.g,this.b,e)},t.prototype.toHexString=function(e){return e===void 0&&(e=!1),"#"+this.toHex(e)},t.prototype.toHex8=function(e){return e===void 0&&(e=!1),Fe(this.r,this.g,this.b,this.a,e)},t.prototype.toHex8String=function(e){return e===void 0&&(e=!1),"#"+this.toHex8(e)},t.prototype.toHexShortString=function(e){return e===void 0&&(e=!1),this.a===1?this.toHexString(e):this.toHex8String(e)},t.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},t.prototype.toRgbString=function(){var e=Math.round(this.r),u=Math.round(this.g),n=Math.round(this.b);return this.a===1?"rgb(".concat(e,", ").concat(u,", ").concat(n,")"):"rgba(".concat(e,", ").concat(u,", ").concat(n,", ").concat(this.roundA,")")},t.prototype.toPercentageRgb=function(){var e=function(u){return"".concat(Math.round(m(u,255)*100),"%")};return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}},t.prototype.toPercentageRgbString=function(){var e=function(u){return Math.round(m(u,255)*100)};return this.a===1?"rgb(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%)"):"rgba(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%, ").concat(this.roundA,")")},t.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var e="#"+dt(this.r,this.g,this.b,!1),u=0,n=Object.entries(tt);u<n.length;u++){var r=n[u],a=r[0],i=r[1];if(e===i)return a}return!1},t.prototype.toString=function(e){var u=!!e;e=e!=null?e:this.format;var n=!1,r=this.a<1&&this.a>=0,a=!u&&r&&(e.startsWith("hex")||e==="name");return a?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(n=this.toRgbString()),e==="prgb"&&(n=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(n=this.toHexString()),e==="hex3"&&(n=this.toHexString(!0)),e==="hex4"&&(n=this.toHex8String(!0)),e==="hex8"&&(n=this.toHex8String()),e==="name"&&(n=this.toName()),e==="hsl"&&(n=this.toHslString()),e==="hsv"&&(n=this.toHsvString()),n||this.toHexString())},t.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},t.prototype.clone=function(){return new t(this.toString())},t.prototype.lighten=function(e){e===void 0&&(e=10);var u=this.toHsl();return u.l+=e/100,u.l=L(u.l),new t(u)},t.prototype.brighten=function(e){e===void 0&&(e=10);var u=this.toRgb();return u.r=Math.max(0,Math.min(255,u.r-Math.round(255*-(e/100)))),u.g=Math.max(0,Math.min(255,u.g-Math.round(255*-(e/100)))),u.b=Math.max(0,Math.min(255,u.b-Math.round(255*-(e/100)))),new t(u)},t.prototype.darken=function(e){e===void 0&&(e=10);var u=this.toHsl();return u.l-=e/100,u.l=L(u.l),new t(u)},t.prototype.tint=function(e){return e===void 0&&(e=10),this.mix("white",e)},t.prototype.shade=function(e){return e===void 0&&(e=10),this.mix("black",e)},t.prototype.desaturate=function(e){e===void 0&&(e=10);var u=this.toHsl();return u.s-=e/100,u.s=L(u.s),new t(u)},t.prototype.saturate=function(e){e===void 0&&(e=10);var u=this.toHsl();return u.s+=e/100,u.s=L(u.s),new t(u)},t.prototype.greyscale=function(){return this.desaturate(100)},t.prototype.spin=function(e){var u=this.toHsl(),n=(u.h+e)%360;return u.h=n<0?360+n:n,new t(u)},t.prototype.mix=function(e,u){u===void 0&&(u=50);var n=this.toRgb(),r=new t(e).toRgb(),a=u/100,i={r:(r.r-n.r)*a+n.r,g:(r.g-n.g)*a+n.g,b:(r.b-n.b)*a+n.b,a:(r.a-n.a)*a+n.a};return new t(i)},t.prototype.analogous=function(e,u){e===void 0&&(e=6),u===void 0&&(u=30);var n=this.toHsl(),r=360/u,a=[this];for(n.h=(n.h-(r*e>>1)+720)%360;--e;)n.h=(n.h+r)%360,a.push(new t(n));return a},t.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new t(e)},t.prototype.monochromatic=function(e){e===void 0&&(e=6);for(var u=this.toHsv(),n=u.h,r=u.s,a=u.v,i=[],c=1/e;e--;)i.push(new t({h:n,s:r,v:a})),a=(a+c)%1;return i},t.prototype.splitcomplement=function(){var e=this.toHsl(),u=e.h;return[this,new t({h:(u+72)%360,s:e.s,l:e.l}),new t({h:(u+216)%360,s:e.s,l:e.l})]},t.prototype.onBackground=function(e){var u=this.toRgb(),n=new t(e).toRgb(),r=u.a+n.a*(1-u.a);return new t({r:(u.r*u.a+n.r*n.a*(1-u.a))/r,g:(u.g*u.a+n.g*n.a*(1-u.a))/r,b:(u.b*u.a+n.b*n.a*(1-u.a))/r,a:r})},t.prototype.triad=function(){return this.polyad(3)},t.prototype.tetrad=function(){return this.polyad(4)},t.prototype.polyad=function(e){for(var u=this.toHsl(),n=u.h,r=[this],a=360/e,i=1;i<e;i++)r.push(new t({h:(n+i*a)%360,s:u.s,l:u.l}));return r},t.prototype.equals=function(e){return this.toRgbString()===new t(e).toRgbString()},t}();function M(t,e=20){return t.mix("#141414",e).toString()}function xe(t){const e=Et(),u=q("button");return y(()=>{let n={};const r=t.color;if(r){const a=new ye(r),i=t.dark?a.tint(20).toString():M(a,20);if(t.plain)n=u.cssVarBlock({"bg-color":t.dark?M(a,90):a.tint(90).toString(),"text-color":r,"border-color":t.dark?M(a,50):a.tint(50).toString(),"hover-text-color":`var(${u.cssVarName("color-white")})`,"hover-bg-color":r,"hover-border-color":r,"active-bg-color":i,"active-text-color":`var(${u.cssVarName("color-white")})`,"active-border-color":i}),e.value&&(n[u.cssVarBlockName("disabled-bg-color")]=t.dark?M(a,90):a.tint(90).toString(),n[u.cssVarBlockName("disabled-text-color")]=t.dark?M(a,50):a.tint(50).toString(),n[u.cssVarBlockName("disabled-border-color")]=t.dark?M(a,80):a.tint(80).toString());else{const c=t.dark?M(a,30):a.tint(30).toString(),p=a.isDark()?`var(${u.cssVarName("color-white")})`:`var(${u.cssVarName("color-black")})`;if(n=u.cssVarBlock({"bg-color":r,"text-color":p,"border-color":r,"hover-bg-color":c,"hover-text-color":p,"hover-border-color":c,"active-bg-color":i,"active-border-color":i}),e.value){const x=t.dark?M(a,50):a.tint(50).toString();n[u.cssVarBlockName("disabled-bg-color")]=x,n[u.cssVarBlockName("disabled-text-color")]=t.dark?"rgba(255, 255, 255, 0.5)":`var(${u.cssVarName("color-white")})`,n[u.cssVarBlockName("disabled-border-color")]=x}}}return n})}const Be=I({name:"ElButton"}),De=I(U(j({},Be),{props:Y,emits:ce,setup(t,{expose:e,emit:u}){const n=t,r=xe(n),a=q("button"),{_ref:i,_size:c,_type:p,_disabled:x,_props:S,shouldAddSpace:w,handleClick:h}=ie(n,u),A=y(()=>[a.b(),a.m(p.value),a.m(c.value),a.is("disabled",x.value),a.is("loading",n.loading),a.is("plain",n.plain),a.is("round",n.round),a.is("circle",n.circle),a.is("text",n.text),a.is("link",n.link),a.is("has-bg",n.bg)]);return e({ref:i,size:c,type:p,disabled:x,shouldAddSpace:w}),(b,H)=>(f(),C(K(b.tag),pt({ref_key:"_ref",ref:i},d(S),{class:d(A),style:d(r),onClick:d(h)}),{default:g(()=>[b.loading?(f(),E(D,{key:0},[b.$slots.loading?G(b.$slots,"loading",{key:0}):(f(),C(d(ot),{key:1,class:X(d(a).is("loading"))},{default:g(()=>[(f(),C(K(b.loadingIcon)))]),_:1},8,["class"]))],64)):b.icon||b.$slots.icon?(f(),C(d(ot),{key:1},{default:g(()=>[b.icon?(f(),C(K(b.icon),{key:0})):G(b.$slots,"icon",{key:1})]),_:3})):R("v-if",!0),b.$slots.default?(f(),E("span",{key:2,class:X({[d(a).em("text","expand")]:d(w)})},[G(b.$slots,"default")],2)):R("v-if",!0)]),_:3},16,["class","style","onClick"]))}}));var Ae=ut(De,[["__file","button.vue"]]);const ke={size:Y.size,type:Y.type},Se=I({name:"ElButtonGroup"}),we=I(U(j({},Se),{props:ke,setup(t){const e=t;Nt(Ct,zt({size:st(e,"size"),type:st(e,"type")}));const u=q("button");return(n,r)=>(f(),E("div",{class:X(`${d(u).b("group")}`)},[G(n.$slots,"default")],2))}}));var yt=ut(we,[["__file","button-group.vue"]]);const Me=Ft(Ae,{ButtonGroup:yt});Vt(yt);const v={name:"陈泽辉",initials:"chan_",location:"广州",about:"高级前端-广州高鼎信息科技有限公司",summary:()=>s("div",null,[l("组件库 element-components、vant-components 作者，重度极客，致力于代码的整体结构规范及优化，平时爱好跑步、游泳、codeing、源码阅读")]),avatarUrl:"/avatar.png",personalWebsiteUrl:"https://github.com/zehuichan",contact:{email:"jasonchenzehui@gmail.com",tel:"+8615800066380",github:"https://github.com/zehuichan"},education:[{school:"广东外语外贸大学",degree:"工商管理 - 本科",start:"2019",end:"2022"},{school:"广东机电职业技术学院",degree:"应用电子技术 - 大专",start:"2010",end:"2013"}],work:[{company:"广州高鼎信息科技有限公司",badges:()=>s(D,null,[s(W("el-tag"),null,{default:()=>[l("全职")]})]),title:"高级前端",start:"2023",end:"至今",description:()=>s("ul",null,[s("li",null,[l("负责和林国际物流信息管理系统需求评审及开发落地工作，包括任务拆分、人员分配、工作排期")]),s("li",null,[l("负责项目核心代码的实现与优化、代码质量审查、制定代码规范")]),s("li",null,[l("编写公共组件库，提升团队开发效率，开发效率提升20%")])])},{company:"广州兴工科技有限公司",badges:()=>s(D,null,[s(W("el-tag"),null,{default:()=>[l("全职")]})]),title:"高级前端",start:"2022",end:"2023",description:()=>s("ul",null,[s("li",null,[l("负责众包服务平台需求评审及开发落地工作，包括任务拆分、人员分配、工作排期")]),s("li",null,[l("担任核心主程，负责主要功能模块实现，公共组件封装")]),s("li",null,[l("制定前端组技术规划，优化前端开发流程，包括但不限于 Git 分支管理策略，Code Review 流程")]),s("li",null,[l("配合运维搭建基于Gitlab、Jenkins的持续集成(CI\\CD)流程")])])},{company:"广东中视信息科技有限公司",badges:()=>s(D,null,[s(W("el-tag"),null,{default:()=>[l("全职")]})]),title:"中级前端 → 高级前端",start:"2020",end:"2022",description:()=>s("ul",null,[s("li",null,[l("主导并设计、维护公司通用业务组件库，支持 npm 私有化发布，加快开发效率")]),s("li",null,[l("参与需求评审会议与产品沟通需求合理性，及时提出疑问点及优化点")]),s("li",null,[l("责前端团队的任务拆解、人员分配，主要功能模块实现，公共组件抽离")]),s("li",null,[l("配合运维搭建基于Gitlab、Jenkins的持续集成(CI\\CD)流程")])])}],skills:["javascript","vue/router/pinia","taro","uni-app","element-plus","vant","vite","unocss"],projects:[{title:"和林国际物流信息管理系统",techStack:["vue3","pinia","vueuse","vite5","element-plus","unocss","vant","jweixin"],start:"2023.07",end:"至今",description:`
      本套系统是在全球范围内进行货物运输和物流管理的一套综合性系统。 它涉及到了货物的收发、运输、仓储、报关、跟踪等一系列环节，通过高效的协调和管理，确保货物能够按时、安全地送达目的地。
      客户端公众号主要功能包括：下单、查货、地址簿、价格查询、仓库地址。
      管理后台主要功能模块包括：下单、配载、订舱、清关、派送、签收、财务报表等等，其他功能涉及商业保密。
       `,responsibilities:()=>s("ul",null,[s("li",null,[l("使用 vue3 搭建项目框架，编写公共组件，实现项目功能")]),s("li",null,[l("使用 unocss 原子样式，实现组件样式复用，提高开发效率")]),s("li",null,[l("根据业务功能，提炼公共组件")]),s("li",null,[l("项目日常维护、版本迭代")])])},{title:"广东科技成果转移转化中心全链条线上平台",techStack:["taro3/vue3","vue3","pinia","vueuse","vite","element-plus","unocss","nutui"],start:"2022.11",end:"2023.06",description:`
      其定位是提供专家科研成果、知识产权、项⽬课题、个⼈荣誉等集中管理和展⽰，推动专家成果与企业需求的有效对接，并且为企业寻找高端人才、突破技术瓶颈、汇聚科技资源，提升核心竞争力。
      主要应用板块包括：众包服务平台前站、配套的管理后台、专家小程序、专家直播平台4大项目。
      `,responsibilities:()=>s("ul",null,[s("li",null,[l("负责整站业务需求评审与开发落地工作，使用 vue3 从0-1的推动项目，并如期落地")]),s("li",null,[l("担任核心主程，负责任务拆解，前端人员分配")]),s("li",null,[l("统一处理请求方法，基础缓存方法，工具函数，增强代码可复用性")]),s("li",null,[l("根据设计图，抽离公共组件，加快开发效率")]),s("li",null,[l("整合 即构 zego 实时音视频、超级白板功能，搭建专家直播平台")])])},{title:"中视ETC一站式发行平台",techStack:["vue2/3","vite","pinia","taro","uniapp","原生小程序"],start:"2020.09",end:"2022.10",description:`
      中视ETC一站式发行平台，是一个建立于支付宝生态下，与全国各省ETC发行方对接客货车ETC发行、通行免密扣费、售后处理、车主服务的系统服务平台。
      目前平台已接入了广西、内蒙古、黑龙江、北京、安徽、江苏等省份的ETC发行业务，日均发行量为10000+，总用户规模达到了100万。
      主要功能模块包括：ETC发行、审核、售后、激活、通行扣费、财务报表等等，其他功能涉及商业保密。
      `,responsibilities:()=>s("ul",null,[s("li",null,[l("主要负责省方ETC小程序、配套的管理后台的维护版本迭代")]),s("li",null,[l("管理后台主要负责其重构工作，包括统一处理请求方法、公共组件搭建、前端字典的引入、菜单+按钮权限的适配")]),s("li",null,[l("小程序主要负责其首页界面可配置化、公告配置、售后服务中心包括（取消订单，设备更换，ETC 注销，设备补办，生态回流补签，设备检测，免密代购补签）")]),s("li",null,[l("基于 element-ui 封装公共组件库的日常维护、版本迭代、文档维护")]),s("li",null,[l("配合运维搭建基于Gitlab、Jenkins的持续集成(CI\\CD)流程")]),s("li",null,[l("负责前端小组的技术选型、框架搭建、code review")])])},{title:"4S店SAAS系统-支付宝小程序",techStack:["vue2/3","vite","pinia","taro","uniapp","原生小程序"],start:"2022.02",end:"2022.08",description:`
      用户端针对4s店锁客难等痛点，基于支付宝开放能力（芝麻go，花呗分期）等信用能力，设计2年三次承诺到店保养可享7折优惠等活动，单店月保养GMV达到40w；
      并基于支付宝端3千万认证车主的公域内流量，利用支付宝域内消息通知、灯火平台等触达能力，设计支付宝域内运营工具。
      商户端针对用户端小程序功能设计了对应的活动发布、订单管理、营销短信管理、券码核销等管理功能，方便快速进行用户端小程序管理。
      `,responsibilities:()=>s("ul",null,[s("li",null,[l("主要负责项目前端整站建设包括界面搭建，数据对接，规范设计")]),s("li",null,[l("统一处理请求方法，公共组件搭建，基础缓存方法，增强代码可复用性")]),s("li",null,[l("负责小程序授权登录流程的对接、用户中心模块的开发")]),s("li",null,[l("负责公共组件搭建，包括oss图片上传组件、ocr文字识别组件、车牌号输入框、车牌号选择器、toggle选择器")]),s("li",null,[l("负责公共hooks的封装，基于 Taro.setStorageSync 和 Taro.getStorageSync 封装的useStorage，支持响应式数据")])])}],repository:[{title:"element-components",techStack:["Side Project","component","vue","element-ui"],description:"增强组件库，基于 element-ui 实现",link:"https://github.com/zehuichan/element-components"},{title:"vant-components",techStack:["Side Project","component","vue","vant2.x"],description:"增强组件库，基于 vant2.x 实现",link:"https://github.com/zehuichan/vant-components"},{title:"vite-element-plus-admin",techStack:["vite5","vue3","element-plus","admin-template","vue-admin"],description:"是一个后台前端解决方案，它基于 vue3 和 element-plus 实现。",link:"https://github.com/zehuichan/vite-element-plus-admin"}]},Te={class:"container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16"},He={class:"mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6"},Re={class:"flex items-center justify-between"},$e={class:"flex-1 space-y-1.5"},Ie={class:"text-2xl font-bold"},Ne={class:"max-w-md text-pretty text-sm text-muted-foreground"},ze=o("p",{class:"max-w-md items-center text-pretty text-sm text-muted-foreground"},[o("span",{class:"inline-flex gap-x-1.5 align-baseline leading-none hover:underline"}," 8年前端，本科 ")],-1),Ve={class:"flex pt-1 text-sm text-muted-foreground print:hidden"},Pe={class:"hidden flex-col gap-x-1 text-sm text-muted-foreground print:flex"},Ge=["href"],je={class:"underline"},Ue=["href"],Le={class:"underline"},Oe={class:"relative flex shrink-0 overflow-hidden rounded-xl size-28"},We=["src"],qe=o("h2",{class:"text-xl font-bold"},"关于我",-1),Ke={class:"text-pretty text-sm text-muted-foreground"},Je=o("h2",{class:"text-xl font-bold"},"工作经历",-1),Qe={class:"flex items-center justify-between gap-x-2 text-base"},Ze={class:"inline-flex items-center justify-center gap-x-1 font-semibold"},Xe={class:"text-sm tabular-nums text-gray-500"},Ye={class:"text-sm"},tu=o("h2",{class:"text-xl font-bold"},"项目经历",-1),eu={class:"flex items-center justify-between gap-x-2 text-base"},uu={class:"inline-flex items-center justify-center gap-x-1 font-semibold"},nu={class:"text-sm tabular-nums text-gray-500 fw-400"},au=o("h4",{class:"mt-2 text-sm text-card-foreground"},"项目描述：",-1),ru={class:"text-pretty mt-2"},su=o("h4",{class:"mt-2 text-sm text-card-foreground"},"工作职责：",-1),iu={class:"text-pretty mt-2"},ou=o("h4",{class:"mt-2 text-sm text-card-foreground"},"技术栈：",-1),lu={class:"mt-2 flex flex-wrap gap-1.5"},cu=o("h2",{class:"text-xl font-bold"},"教育经历",-1),du={class:"flex items-center justify-between gap-x-2 text-base"},fu={class:"font-semibold leading-none"},hu={class:"text-sm tabular-nums text-gray-500"},gu=o("h2",{class:"text-xl font-bold"},"开源项目",-1),pu={class:"-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3"},Fu={class:"space-y-1"},bu=["href"],vu=o("span",{class:"size-1 rounded-full bg-green-500"},null,-1),mu={class:"hidden font-mono text-xs underline print:visible"},Eu={class:"mt-2 flex flex-wrap gap-1"},Cu=o("h2",{class:"text-xl font-bold"},"致谢",-1),_u=o("div",{class:"mt-2 text-sm text-card-foreground"},"感谢您花时间阅读我的简历，期待能有机会和您共事",-1),Bu={__name:"cv",setup(t){return(e,u)=>{const n=W("icon-park"),r=Me,a=Pt,i=jt,c=Ut,p=Lt,x=Ot,S=Wt,w=qt;return f(),E("main",Te,[o("section",He,[o("div",Re,[o("div",$e,[o("h1",Ie,F(d(v).name),1),o("p",Ne,F(d(v).about),1),ze,o("div",Ve,[d(v).contact.email?(f(),C(r,{key:0,tag:"a",text:"",bg:"",href:`mailto:${d(v).contact.email}`},{default:g(()=>[s(n,{type:"mail"})]),_:1},8,["href"])):R("",!0),d(v).contact.tel?(f(),C(r,{key:1,tag:"a",text:"",bg:"",href:`tel:${d(v).contact.tel}`},{default:g(()=>[s(n,{type:"phone"})]),_:1},8,["href"])):R("",!0),d(v).contact.github?(f(),C(r,{key:2,tag:"a",text:"",bg:"",href:`${d(v).contact.github}`},{default:g(()=>[s(n,{type:"github"})]),_:1},8,["href"])):R("",!0)]),o("div",Pe,[d(v).contact.email?(f(),E("a",{key:0,href:`mailto:${d(v).contact.email}`},[o("span",je,F(d(v).contact.email),1)],8,Ge)):R("",!0),d(v).contact.tel?(f(),E("a",{key:1,href:`tel:${d(v).contact.tel}`},[o("span",Le,F(d(v).contact.tel),1)],8,Ue)):R("",!0)])]),o("div",Oe,[o("img",{class:"aspect-square h-full w-full",src:d(v).avatarUrl,alt:""},null,8,We)])]),s(z,null,{default:g(()=>[qe,o("div",Ke,[s(a,{render:d(v).summary},null,8,["render"])])]),_:1}),s(z,null,{default:g(()=>[Je,(f(!0),E(D,null,V(d(v).work,h=>(f(),C(p,null,{default:g(()=>[s(i,null,{default:g(()=>[o("div",Qe,[o("h3",Ze,F(h.company),1),o("div",Xe,F(h.start)+" - "+F(h.end),1)]),o("h4",Ye,F(h.title),1)]),_:2},1024),s(c,{class:"mt-2 text-pretty text-sm text-muted-foreground"},{default:g(()=>[s(a,{render:h.description},null,8,["render"])]),_:2},1024)]),_:2},1024))),256))]),_:1}),s(z,{class:"scroll-mb-16"},{default:g(()=>[tu,(f(!0),E(D,null,V(d(v).projects,h=>(f(),C(p,{bg:""},{default:g(()=>[s(i,null,{default:g(()=>[s(x,null,{default:g(()=>[o("div",eu,[o("h3",uu,F(h.title),1),o("div",nu,F(h.start)+" - "+F(h.end),1)])]),_:2},1024)]),_:2},1024),s(c,null,{default:g(()=>[au,o("div",ru,[d(Gt)(h.description)?(f(),C(a,{key:0,render:h.description},null,8,["render"])):(f(),E(D,{key:1},[l(F(h.description),1)],64))]),su,o("div",iu,[s(a,{render:h.responsibilities},null,8,["render"])]),ou,o("div",lu,[(f(!0),E(D,null,V(h.techStack,A=>(f(),C(S,null,{default:g(()=>[l(F(A),1)]),_:2},1024))),256))])]),_:2},1024)]),_:2},1024))),256))]),_:1}),s(z,null,{default:g(()=>[cu,(f(!0),E(D,null,V(d(v).education,h=>(f(),C(p,null,{default:g(()=>[s(i,null,{default:g(()=>[o("div",du,[o("h3",fu,F(h.school),1),o("div",hu,F(h.start)+" - "+F(h.end),1)])]),_:2},1024),s(c,{class:"mt-2"},{default:g(()=>[l(F(h.degree),1)]),_:2},1024)]),_:2},1024))),256))]),_:1}),s(z,null,{default:g(()=>[gu,o("div",pu,[(f(!0),E(D,null,V(d(v).repository,h=>(f(),C(p,{class:"repository border border-muted p-3"},{default:g(()=>[o("div",Fu,[s(i,null,{default:g(()=>{var A;return[o("a",{href:h.link,target:"_blank",class:"inline-flex items-center gap-1 hover:underline"},[l(F(h.title)+" ",1),vu],8,bu),o("div",mu,F((A=h.link)==null?void 0:A.replace("https://","").replace("www.","").replace("/","")),1),s(w,{class:"font-mono text-xs"},{default:g(()=>[l(F(h.description),1)]),_:2},1024)]}),_:2},1024),s(c,{class:"mt-auto flex"},{default:g(()=>[o("div",Eu,[(f(!0),E(D,null,V(h.techStack,A=>(f(),C(S,{light:""},{default:g(()=>[l(F(A),1)]),_:2},1024))),256))])]),_:2},1024)])]),_:2},1024))),256))])]),_:1}),s(z,null,{default:g(()=>[Cu,_u]),_:1})])])}}};export{Bu as default};
