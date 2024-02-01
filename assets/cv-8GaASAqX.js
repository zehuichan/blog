var _u=Object.defineProperty,xu=Object.defineProperties;var yu=Object.getOwnPropertyDescriptors;var au=Object.getOwnPropertySymbols;var ku=Object.prototype.hasOwnProperty,Su=Object.prototype.propertyIsEnumerable;var ru=(u,t,e)=>t in u?_u(u,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):u[t]=e,U=(u,t)=>{for(var e in t||(t={}))ku.call(t,e)&&ru(u,e,t[e]);if(au)for(var e of au(t))Su.call(t,e)&&ru(u,e,t[e]);return u},L=(u,t)=>xu(u,yu(t));import{i as fu,d as R,o as F,c as b,a as c,b as tu,w as wu,u as l,e as x,g as Mu,f as hu,h as W,r as G,m as Eu,j as pu,k as gu,l as Tu,n as P,p as Hu,q as Iu,T as Ru,s as $u,t as m,v as h,F as B,x as X,y as K,z as H,A as Nu,B as zu,C as iu,D as ju,E as n,G as s,H as V,I as g,_ as z,J as j,K as Pu,L as Vu,M as Gu,N as Uu,O as Lu,P as Ou,Q as qu,R as Wu}from"./index-ZV1FB6Xd.js";const Ku=u=>u===void 0,Ju=u=>typeof u=="number",Qu=u=>fu(u)?!Number.isNaN(Number(u)):!1;function Zu(u,t="px"){if(!u)return"";if(Ju(u)||Qu(u))return`${u}${t}`;if(fu(u))return u}/*! Element Plus Icons Vue v2.3.1 */var Xu=R({name:"Loading",__name:"loading",setup(u){return(t,e)=>(F(),b("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024"},[c("path",{fill:"currentColor",d:"M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0m-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"})]))}}),Yu=Xu;const su=tu([String,Object,Function]),ut=({from:u,replacement:t,scope:e,version:a,ref:i,type:r="API"},o)=>{wu(()=>l(o),d=>{},{immediate:!0})},vu=u=>{const t=Mu();return x(()=>{var e,a;return(a=(e=t==null?void 0:t.proxy)==null?void 0:e.$props)==null?void 0:a[u]})};var eu=(u,t)=>{const e=u.__vccOpts||u;for(const[a,i]of t)e[a]=i;return e};const tt=hu({size:{type:tu([Number,String])},color:{type:String}}),et=R({name:"ElIcon",inheritAttrs:!1}),nt=R(L(U({},et),{props:tt,setup(u){const t=u,e=W("icon"),a=x(()=>{const{size:i,color:r}=t;return!i&&!r?{}:{fontSize:Ku(i)?void 0:Zu(i),"--color":r}});return(i,r)=>(F(),b("i",Eu({class:l(e).b(),style:l(a)},i.$attrs),[G(i.$slots,"default")],16))}}));var at=eu(nt,[["__file","icon.vue"]]);const ou=pu(at),nu=Symbol("formContextKey"),Cu=Symbol("formItemContextKey"),rt=(u,t={})=>{const e=gu(void 0),a=t.prop?e:vu("size"),i=t.global?e:Tu(),r=t.form?{size:void 0}:P(nu,void 0),o=t.formItem?{size:void 0}:P(Cu,void 0);return x(()=>a.value||l(u)||(o==null?void 0:o.size)||(r==null?void 0:r.size)||i.value||"")},bu=u=>{const t=vu("disabled"),e=P(nu,void 0);return x(()=>t.value||l(u)||(e==null?void 0:e.disabled)||!1)},it=()=>{const u=P(nu,void 0),t=P(Cu,void 0);return{form:u,formItem:t}},mu=Symbol("buttonGroupContextKey"),st=(u,t)=>{ut({from:"type.text",replacement:"link",version:"3.0.0",scope:"props",ref:"https://element-plus.org/en-US/component/button.html#button-attributes"},x(()=>u.type==="text"));const e=P(mu,void 0),a=Hu("button"),{form:i}=it(),r=rt(x(()=>e==null?void 0:e.size)),o=bu(),d=gu(),p=Iu(),A=x(()=>u.type||(e==null?void 0:e.type)||""),k=x(()=>{var w,$,N;return(N=($=u.autoInsertSpace)!=null?$:(w=a.value)==null?void 0:w.autoInsertSpace)!=null?N:!1}),S=x(()=>u.tag==="button"?{ariaDisabled:o.value||u.loading,disabled:o.value||u.loading,autofocus:u.autofocus,type:u.nativeType}:{}),f=x(()=>{var w;const $=(w=p.default)==null?void 0:w.call(p);if(k.value&&($==null?void 0:$.length)===1){const N=$[0];if((N==null?void 0:N.type)===Ru){const Au=N.children;return new RegExp("^\\p{Unified_Ideograph}{2}$","u").test(Au.trim())}}return!1});return{_disabled:o,_size:r,_type:A,_ref:d,_props:S,shouldAddSpace:f,handleClick:w=>{u.nativeType==="reset"&&(i==null||i.resetFields()),t("click",w)}}},ot=["default","primary","success","warning","info","danger","text",""],lt=["button","submit","reset"],Y=hu({size:$u,disabled:Boolean,type:{type:String,values:ot,default:""},icon:{type:su},nativeType:{type:String,values:lt,default:"button"},loading:Boolean,loadingIcon:{type:su,default:()=>Yu},plain:Boolean,text:Boolean,link:Boolean,bg:Boolean,autofocus:Boolean,round:Boolean,circle:Boolean,color:String,dark:Boolean,autoInsertSpace:{type:Boolean,default:void 0},tag:{type:tu([String,Object]),default:"button"}}),ct={click:u=>u instanceof MouseEvent};function C(u,t){dt(u)&&(u="100%");var e=Ft(u);return u=t===360?u:Math.min(t,Math.max(0,parseFloat(u))),e&&(u=parseInt(String(u*t),10)/100),Math.abs(u-t)<1e-6?1:(t===360?u=(u<0?u%t+t:u%t)/parseFloat(String(t)):u=u%t/parseFloat(String(t)),u)}function O(u){return Math.min(1,Math.max(0,u))}function dt(u){return typeof u=="string"&&u.indexOf(".")!==-1&&parseFloat(u)===1}function Ft(u){return typeof u=="string"&&u.indexOf("%")!==-1}function Du(u){return u=parseFloat(u),(isNaN(u)||u<0||u>1)&&(u=1),u}function q(u){return u<=1?"".concat(Number(u)*100,"%"):u}function I(u){return u.length===1?"0"+u:String(u)}function ft(u,t,e){return{r:C(u,255)*255,g:C(t,255)*255,b:C(e,255)*255}}function lu(u,t,e){u=C(u,255),t=C(t,255),e=C(e,255);var a=Math.max(u,t,e),i=Math.min(u,t,e),r=0,o=0,d=(a+i)/2;if(a===i)o=0,r=0;else{var p=a-i;switch(o=d>.5?p/(2-a-i):p/(a+i),a){case u:r=(t-e)/p+(t<e?6:0);break;case t:r=(e-u)/p+2;break;case e:r=(u-t)/p+4;break}r/=6}return{h:r,s:o,l:d}}function J(u,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?u+(t-u)*(6*e):e<1/2?t:e<2/3?u+(t-u)*(2/3-e)*6:u}function ht(u,t,e){var a,i,r;if(u=C(u,360),t=C(t,100),e=C(e,100),t===0)i=e,r=e,a=e;else{var o=e<.5?e*(1+t):e+t-e*t,d=2*e-o;a=J(d,o,u+1/3),i=J(d,o,u),r=J(d,o,u-1/3)}return{r:a*255,g:i*255,b:r*255}}function cu(u,t,e){u=C(u,255),t=C(t,255),e=C(e,255);var a=Math.max(u,t,e),i=Math.min(u,t,e),r=0,o=a,d=a-i,p=a===0?0:d/a;if(a===i)r=0;else{switch(a){case u:r=(t-e)/d+(t<e?6:0);break;case t:r=(e-u)/d+2;break;case e:r=(u-t)/d+4;break}r/=6}return{h:r,s:p,v:o}}function Et(u,t,e){u=C(u,360)*6,t=C(t,100),e=C(e,100);var a=Math.floor(u),i=u-a,r=e*(1-t),o=e*(1-i*t),d=e*(1-(1-i)*t),p=a%6,A=[e,o,r,r,d,e][p],k=[d,e,e,o,r,r][p],S=[r,r,d,e,e,o][p];return{r:A*255,g:k*255,b:S*255}}function du(u,t,e,a){var i=[I(Math.round(u).toString(16)),I(Math.round(t).toString(16)),I(Math.round(e).toString(16))];return a&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function pt(u,t,e,a,i){var r=[I(Math.round(u).toString(16)),I(Math.round(t).toString(16)),I(Math.round(e).toString(16)),I(gt(a))];return i&&r[0].startsWith(r[0].charAt(1))&&r[1].startsWith(r[1].charAt(1))&&r[2].startsWith(r[2].charAt(1))&&r[3].startsWith(r[3].charAt(1))?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0)+r[3].charAt(0):r.join("")}function gt(u){return Math.round(parseFloat(u)*255).toString(16)}function Fu(u){return D(u)/255}function D(u){return parseInt(u,16)}function vt(u){return{r:u>>16,g:(u&65280)>>8,b:u&255}}var uu={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Ct(u){var t={r:0,g:0,b:0},e=1,a=null,i=null,r=null,o=!1,d=!1;return typeof u=="string"&&(u=Dt(u)),typeof u=="object"&&(y(u.r)&&y(u.g)&&y(u.b)?(t=ft(u.r,u.g,u.b),o=!0,d=String(u.r).substr(-1)==="%"?"prgb":"rgb"):y(u.h)&&y(u.s)&&y(u.v)?(a=q(u.s),i=q(u.v),t=Et(u.h,a,i),o=!0,d="hsv"):y(u.h)&&y(u.s)&&y(u.l)&&(a=q(u.s),r=q(u.l),t=ht(u.h,a,r),o=!0,d="hsl"),Object.prototype.hasOwnProperty.call(u,"a")&&(e=u.a)),e=Du(e),{ok:o,format:u.format||d,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:e}}var bt="[-\\+]?\\d+%?",mt="[-\\+]?\\d*\\.\\d+%?",T="(?:".concat(mt,")|(?:").concat(bt,")"),Q="[\\s|\\(]+(".concat(T,")[,|\\s]+(").concat(T,")[,|\\s]+(").concat(T,")\\s*\\)?"),Z="[\\s|\\(]+(".concat(T,")[,|\\s]+(").concat(T,")[,|\\s]+(").concat(T,")[,|\\s]+(").concat(T,")\\s*\\)?"),_={CSS_UNIT:new RegExp(T),rgb:new RegExp("rgb"+Q),rgba:new RegExp("rgba"+Z),hsl:new RegExp("hsl"+Q),hsla:new RegExp("hsla"+Z),hsv:new RegExp("hsv"+Q),hsva:new RegExp("hsva"+Z),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Dt(u){if(u=u.trim().toLowerCase(),u.length===0)return!1;var t=!1;if(uu[u])u=uu[u],t=!0;else if(u==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var e=_.rgb.exec(u);return e?{r:e[1],g:e[2],b:e[3]}:(e=_.rgba.exec(u),e?{r:e[1],g:e[2],b:e[3],a:e[4]}:(e=_.hsl.exec(u),e?{h:e[1],s:e[2],l:e[3]}:(e=_.hsla.exec(u),e?{h:e[1],s:e[2],l:e[3],a:e[4]}:(e=_.hsv.exec(u),e?{h:e[1],s:e[2],v:e[3]}:(e=_.hsva.exec(u),e?{h:e[1],s:e[2],v:e[3],a:e[4]}:(e=_.hex8.exec(u),e?{r:D(e[1]),g:D(e[2]),b:D(e[3]),a:Fu(e[4]),format:t?"name":"hex8"}:(e=_.hex6.exec(u),e?{r:D(e[1]),g:D(e[2]),b:D(e[3]),format:t?"name":"hex"}:(e=_.hex4.exec(u),e?{r:D(e[1]+e[1]),g:D(e[2]+e[2]),b:D(e[3]+e[3]),a:Fu(e[4]+e[4]),format:t?"name":"hex8"}:(e=_.hex3.exec(u),e?{r:D(e[1]+e[1]),g:D(e[2]+e[2]),b:D(e[3]+e[3]),format:t?"name":"hex"}:!1)))))))))}function y(u){return!!_.CSS_UNIT.exec(String(u))}var Bt=function(){function u(t,e){t===void 0&&(t=""),e===void 0&&(e={});var a;if(t instanceof u)return t;typeof t=="number"&&(t=vt(t)),this.originalInput=t;var i=Ct(t);this.originalInput=t,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=(a=e.format)!==null&&a!==void 0?a:i.format,this.gradientType=e.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}return u.prototype.isDark=function(){return this.getBrightness()<128},u.prototype.isLight=function(){return!this.isDark()},u.prototype.getBrightness=function(){var t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3},u.prototype.getLuminance=function(){var t=this.toRgb(),e,a,i,r=t.r/255,o=t.g/255,d=t.b/255;return r<=.03928?e=r/12.92:e=Math.pow((r+.055)/1.055,2.4),o<=.03928?a=o/12.92:a=Math.pow((o+.055)/1.055,2.4),d<=.03928?i=d/12.92:i=Math.pow((d+.055)/1.055,2.4),.2126*e+.7152*a+.0722*i},u.prototype.getAlpha=function(){return this.a},u.prototype.setAlpha=function(t){return this.a=Du(t),this.roundA=Math.round(100*this.a)/100,this},u.prototype.isMonochrome=function(){var t=this.toHsl().s;return t===0},u.prototype.toHsv=function(){var t=cu(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}},u.prototype.toHsvString=function(){var t=cu(this.r,this.g,this.b),e=Math.round(t.h*360),a=Math.round(t.s*100),i=Math.round(t.v*100);return this.a===1?"hsv(".concat(e,", ").concat(a,"%, ").concat(i,"%)"):"hsva(".concat(e,", ").concat(a,"%, ").concat(i,"%, ").concat(this.roundA,")")},u.prototype.toHsl=function(){var t=lu(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}},u.prototype.toHslString=function(){var t=lu(this.r,this.g,this.b),e=Math.round(t.h*360),a=Math.round(t.s*100),i=Math.round(t.l*100);return this.a===1?"hsl(".concat(e,", ").concat(a,"%, ").concat(i,"%)"):"hsla(".concat(e,", ").concat(a,"%, ").concat(i,"%, ").concat(this.roundA,")")},u.prototype.toHex=function(t){return t===void 0&&(t=!1),du(this.r,this.g,this.b,t)},u.prototype.toHexString=function(t){return t===void 0&&(t=!1),"#"+this.toHex(t)},u.prototype.toHex8=function(t){return t===void 0&&(t=!1),pt(this.r,this.g,this.b,this.a,t)},u.prototype.toHex8String=function(t){return t===void 0&&(t=!1),"#"+this.toHex8(t)},u.prototype.toHexShortString=function(t){return t===void 0&&(t=!1),this.a===1?this.toHexString(t):this.toHex8String(t)},u.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},u.prototype.toRgbString=function(){var t=Math.round(this.r),e=Math.round(this.g),a=Math.round(this.b);return this.a===1?"rgb(".concat(t,", ").concat(e,", ").concat(a,")"):"rgba(".concat(t,", ").concat(e,", ").concat(a,", ").concat(this.roundA,")")},u.prototype.toPercentageRgb=function(){var t=function(e){return"".concat(Math.round(C(e,255)*100),"%")};return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}},u.prototype.toPercentageRgbString=function(){var t=function(e){return Math.round(C(e,255)*100)};return this.a===1?"rgb(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%)"):"rgba(".concat(t(this.r),"%, ").concat(t(this.g),"%, ").concat(t(this.b),"%, ").concat(this.roundA,")")},u.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var t="#"+du(this.r,this.g,this.b,!1),e=0,a=Object.entries(uu);e<a.length;e++){var i=a[e],r=i[0],o=i[1];if(t===o)return r}return!1},u.prototype.toString=function(t){var e=!!t;t=t!=null?t:this.format;var a=!1,i=this.a<1&&this.a>=0,r=!e&&i&&(t.startsWith("hex")||t==="name");return r?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(a=this.toRgbString()),t==="prgb"&&(a=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(a=this.toHexString()),t==="hex3"&&(a=this.toHexString(!0)),t==="hex4"&&(a=this.toHex8String(!0)),t==="hex8"&&(a=this.toHex8String()),t==="name"&&(a=this.toName()),t==="hsl"&&(a=this.toHslString()),t==="hsv"&&(a=this.toHsvString()),a||this.toHexString())},u.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},u.prototype.clone=function(){return new u(this.toString())},u.prototype.lighten=function(t){t===void 0&&(t=10);var e=this.toHsl();return e.l+=t/100,e.l=O(e.l),new u(e)},u.prototype.brighten=function(t){t===void 0&&(t=10);var e=this.toRgb();return e.r=Math.max(0,Math.min(255,e.r-Math.round(255*-(t/100)))),e.g=Math.max(0,Math.min(255,e.g-Math.round(255*-(t/100)))),e.b=Math.max(0,Math.min(255,e.b-Math.round(255*-(t/100)))),new u(e)},u.prototype.darken=function(t){t===void 0&&(t=10);var e=this.toHsl();return e.l-=t/100,e.l=O(e.l),new u(e)},u.prototype.tint=function(t){return t===void 0&&(t=10),this.mix("white",t)},u.prototype.shade=function(t){return t===void 0&&(t=10),this.mix("black",t)},u.prototype.desaturate=function(t){t===void 0&&(t=10);var e=this.toHsl();return e.s-=t/100,e.s=O(e.s),new u(e)},u.prototype.saturate=function(t){t===void 0&&(t=10);var e=this.toHsl();return e.s+=t/100,e.s=O(e.s),new u(e)},u.prototype.greyscale=function(){return this.desaturate(100)},u.prototype.spin=function(t){var e=this.toHsl(),a=(e.h+t)%360;return e.h=a<0?360+a:a,new u(e)},u.prototype.mix=function(t,e){e===void 0&&(e=50);var a=this.toRgb(),i=new u(t).toRgb(),r=e/100,o={r:(i.r-a.r)*r+a.r,g:(i.g-a.g)*r+a.g,b:(i.b-a.b)*r+a.b,a:(i.a-a.a)*r+a.a};return new u(o)},u.prototype.analogous=function(t,e){t===void 0&&(t=6),e===void 0&&(e=30);var a=this.toHsl(),i=360/e,r=[this];for(a.h=(a.h-(i*t>>1)+720)%360;--t;)a.h=(a.h+i)%360,r.push(new u(a));return r},u.prototype.complement=function(){var t=this.toHsl();return t.h=(t.h+180)%360,new u(t)},u.prototype.monochromatic=function(t){t===void 0&&(t=6);for(var e=this.toHsv(),a=e.h,i=e.s,r=e.v,o=[],d=1/t;t--;)o.push(new u({h:a,s:i,v:r})),r=(r+d)%1;return o},u.prototype.splitcomplement=function(){var t=this.toHsl(),e=t.h;return[this,new u({h:(e+72)%360,s:t.s,l:t.l}),new u({h:(e+216)%360,s:t.s,l:t.l})]},u.prototype.onBackground=function(t){var e=this.toRgb(),a=new u(t).toRgb(),i=e.a+a.a*(1-e.a);return new u({r:(e.r*e.a+a.r*a.a*(1-e.a))/i,g:(e.g*e.a+a.g*a.a*(1-e.a))/i,b:(e.b*e.a+a.b*a.a*(1-e.a))/i,a:i})},u.prototype.triad=function(){return this.polyad(3)},u.prototype.tetrad=function(){return this.polyad(4)},u.prototype.polyad=function(t){for(var e=this.toHsl(),a=e.h,i=[this],r=360/t,o=1;o<t;o++)i.push(new u({h:(a+o*r)%360,s:e.s,l:e.l}));return i},u.prototype.equals=function(t){return this.toRgbString()===new u(t).toRgbString()},u}();function M(u,t=20){return u.mix("#141414",t).toString()}function At(u){const t=bu(),e=W("button");return x(()=>{let a={};const i=u.color;if(i){const r=new Bt(i),o=u.dark?r.tint(20).toString():M(r,20);if(u.plain)a=e.cssVarBlock({"bg-color":u.dark?M(r,90):r.tint(90).toString(),"text-color":i,"border-color":u.dark?M(r,50):r.tint(50).toString(),"hover-text-color":`var(${e.cssVarName("color-white")})`,"hover-bg-color":i,"hover-border-color":i,"active-bg-color":o,"active-text-color":`var(${e.cssVarName("color-white")})`,"active-border-color":o}),t.value&&(a[e.cssVarBlockName("disabled-bg-color")]=u.dark?M(r,90):r.tint(90).toString(),a[e.cssVarBlockName("disabled-text-color")]=u.dark?M(r,50):r.tint(50).toString(),a[e.cssVarBlockName("disabled-border-color")]=u.dark?M(r,80):r.tint(80).toString());else{const d=u.dark?M(r,30):r.tint(30).toString(),p=r.isDark()?`var(${e.cssVarName("color-white")})`:`var(${e.cssVarName("color-black")})`;if(a=e.cssVarBlock({"bg-color":i,"text-color":p,"border-color":i,"hover-bg-color":d,"hover-text-color":p,"hover-border-color":d,"active-bg-color":o,"active-border-color":o}),t.value){const A=u.dark?M(r,50):r.tint(50).toString();a[e.cssVarBlockName("disabled-bg-color")]=A,a[e.cssVarBlockName("disabled-text-color")]=u.dark?"rgba(255, 255, 255, 0.5)":`var(${e.cssVarName("color-white")})`,a[e.cssVarBlockName("disabled-border-color")]=A}}}return a})}const _t=R({name:"ElButton"}),xt=R(L(U({},_t),{props:Y,emits:ct,setup(u,{expose:t,emit:e}){const a=u,i=At(a),r=W("button"),{_ref:o,_size:d,_type:p,_disabled:A,_props:k,shouldAddSpace:S,handleClick:f}=st(a,e);return t({ref:o,size:d,type:p,disabled:A,shouldAddSpace:S}),(E,w)=>(F(),m(K(E.tag),Eu({ref_key:"_ref",ref:o},l(k),{class:[l(r).b(),l(r).m(l(p)),l(r).m(l(d)),l(r).is("disabled",l(A)),l(r).is("loading",E.loading),l(r).is("plain",E.plain),l(r).is("round",E.round),l(r).is("circle",E.circle),l(r).is("text",E.text),l(r).is("link",E.link),l(r).is("has-bg",E.bg)],style:l(i),onClick:l(f)}),{default:h(()=>[E.loading?(F(),b(B,{key:0},[E.$slots.loading?G(E.$slots,"loading",{key:0}):(F(),m(l(ou),{key:1,class:X(l(r).is("loading"))},{default:h(()=>[(F(),m(K(E.loadingIcon)))]),_:1},8,["class"]))],64)):E.icon||E.$slots.icon?(F(),m(l(ou),{key:1},{default:h(()=>[E.icon?(F(),m(K(E.icon),{key:0})):G(E.$slots,"icon",{key:1})]),_:3})):H("v-if",!0),E.$slots.default?(F(),b("span",{key:2,class:X({[l(r).em("text","expand")]:l(S)})},[G(E.$slots,"default")],2)):H("v-if",!0)]),_:3},16,["class","style","onClick"]))}}));var yt=eu(xt,[["__file","button.vue"]]);const kt={size:Y.size,type:Y.type},St=R({name:"ElButtonGroup"}),wt=R(L(U({},St),{props:kt,setup(u){const t=u;Nu(mu,zu({size:iu(t,"size"),type:iu(t,"type")}));const e=W("button");return(a,i)=>(F(),b("div",{class:X(`${l(e).b("group")}`)},[G(a.$slots,"default")],2))}}));var Bu=eu(wt,[["__file","button-group.vue"]]);const Mt=pu(yt,{ButtonGroup:Bu});ju(Bu);const v={name:"陈泽辉",initials:"chan_",location:"广州",about:"高级前端-广州兴工科技有限公司",summary:()=>n("ul",null,[n("li",null,[s("组件库 element-components、vant-components 作者")]),n("li",null,[s("多年前端开发经验，能独立开发项目，善于组件抽象、前端架构与性能优化")]),n("li",null,[s("能从0到1开发项目，熟悉 vue2、vue3、taro(vue3)、uniapp(vue2/3) 开发模式，熟悉模块化开发")]),n("li",null,[s("熟悉 axios 数据请求方式，使用 mockjs，JSON-Server 模拟后台数据")]),n("li",null,[s("熟悉前端⼯程化，掌握 webpack、vite 代码打包工具，能针对项目进行性能分析以及性能优化")]),n("li",null,[s("熟悉 yarn、npm、pnpm 包管理工具")]),n("li",null,[s("熟悉 eslint、stylelint、prettier、husky 配套的开发模式")]),n("li",null,[s("了解 Gitlab 持续集成(CI\\CD)流程")]),n("li",null,[s("了解 Node.js 及 express、koa 框架，体验输出接口思想")]),n("li",null,[s("重度极客，致力于代码的整体结构规范及优化")]),n("li",null,[s("爱好跑步、游泳、codeing、源码阅读")])]),avatarUrl:"/avatar.png",personalWebsiteUrl:"https://github.com/zehuichan",contact:{email:"jasonchenzehui@gmail.com",tel:"+8615800066380",github:"https://github.com/zehuichan"},education:[{school:"广东外语外贸大学",degree:"工商管理 - 本科",start:"2019",end:"2022"},{school:"广东机电职业技术学院",degree:"应用电子技术 - 大专",start:"2010",end:"2013"}],work:[{company:"广州兴工科技有限公司",badges:()=>n(B,null,[n(V("el-tag"),null,{default:()=>[s("全职")]})]),title:"高级前端",start:"2022",end:"2023",description:()=>n("ul",null,[n("li",null,[s("负责众包服务平台需求评审及开发落地工作，包括任务拆分、人员分配、工作排期")]),n("li",null,[s("担任核心主程，负责主要功能模块实现，公共组件封装")]),n("li",null,[s("制定前端组技术规划，优化前端开发流程，包括但不限于 Git 分支管理策略，Code Review 流程")]),n("li",null,[s("配合运维搭建基于Gitlab、Jenkins的持续集成(CI\\CD)流程")])])},{company:"广东中视信息科技有限公司",badges:()=>n(B,null,[n(V("el-tag"),null,{default:()=>[s("全职")]})]),title:"中级前端 → 高级前端",start:"2020",end:"2022",description:()=>n("ul",null,[n("li",null,[s("主导并设计、维护公司通用业务组件库，支持 npm 私有化发布，加快开发效率")]),n("li",null,[s("参与需求评审会议与产品沟通需求合理性，及时提出疑问点及优化点")]),n("li",null,[s("责前端团队的任务拆解、人员分配，主要功能模块实现，公共组件抽离")]),n("li",null,[s("配合运维搭建基于Gitlab、Jenkins的持续集成(CI\\CD)流程")])])},{company:"广州创思云网络科技有限公司",badges:()=>n(B,null,[n(V("el-tag"),null,{default:()=>[s("全职")]})]),title:"中级前端",start:"2019",end:"2020",description:()=>n("ul",null,[n("li",null,[s("参与前端小组的技术选型、框架搭建")]),n("li",null,[s("负责h5app及其配套的管理后台开发")]),n("li",null,[s("设计开发高效可复用的基础组件，动态路由实现")]),n("li",null,[s("配合项目负责人完成项目指标，根据业务需求，优化完善项目代码")])])},{company:"佛山市电子口岸有限公司",badges:()=>n(B,null,[n(V("el-tag"),null,{default:()=>[s("全职")]})]),title:"初级前端 → 中级前端",start:"2015",end:"2019",description:()=>n("ul",null,[n("li",null,[s("参与项目需求分析编写文档，根据文档输出产品原型图")]),n("li",null,[s("独立负责前端项目，包括项目搭建、技术选型")]),n("li",null,[s("独立分析和解决问题，并协助其他开发人员解决问题")]),n("li",null,[s("熟练使用 vue 全家桶及其 UI 框架，例如：Element-ui、vux、vant等")])])}],skills:["javascript","vue/router/pinia","taro","uni-app","element-plus","vant","vite","unocss"],projects:[{title:"田园牧客点餐系统",techStack:["vue3","pinia","vueuse","Vite","element-plus","unocss","nutui4","taro3/vue3"],start:"2023.12",end:"至今",description:`
      田园牧客点餐系统是一个基于小程序技术搭建的点餐平台，旨在为用户提供方便、快捷的点餐服务。
      用户端小程序主要功能包括：菜单展示、点餐、购物车、订单提交、微信支付、历史记录。
      商家端管理后台主要功能包括：餐厅基本信息管理、餐桌参数管理、订座信息管理、菜品管理、订单管理、系统管理。
       `,responsibilities:()=>n("ul",null,[n("li",null,[s("主导 taro3/vue3 技术栈，搭建项目框架，编写公共组件，实现项目功能")]),n("li",null,[s("使用 unocss 原子样式，实现组件样式复用，提高开发效率")]),n("li",null,[s("根据业务功能，提炼公共组件")]),n("li",null,[s("项目日常维护、版本迭代")])])},{title:"和林国际物流信息管理系统",techStack:["vue3","pinia","vueuse","vite4","element-plus","unocss","vant","jweixin"],start:"2023.07",end:"至今",description:`
      本套系统是在全球范围内进行货物运输和物流管理的一套综合性系统。 它涉及到了货物的收发、运输、仓储、报关、跟踪等一系列环节，通过高效的协调和管理，确保货物能够按时、安全地送达目的地。
      客户端公众号主要功能包括：下单、查货、地址簿、价格查询、仓库地址。
      管理后台主要功能模块包括：下单、配载、订舱、清关、派送、签收、财务报表等等，其他功能涉及商业保密。
       `,responsibilities:()=>n("ul",null,[n("li",null,[s("使用 vue3 搭建项目框架，编写公共组件，实现项目功能")]),n("li",null,[s("使用 unocss 原子样式，实现组件样式复用，提高开发效率")]),n("li",null,[s("根据业务功能，提炼公共组件")]),n("li",null,[s("项目日常维护、版本迭代")])])},{title:"广东科技成果转移转化中心全链条线上平台",techStack:["taro3/vue3","vue3","pinia","vueuse","vite","element-plus","unocss","nutui"],start:"2022.11",end:"2023.06",description:`
      其定位是提供专家科研成果、知识产权、项⽬课题、个⼈荣誉等集中管理和展⽰，推动专家成果与企业需求的有效对接，并且为企业寻找高端人才、突破技术瓶颈、汇聚科技资源，提升核心竞争力。
      主要应用板块包括：众包服务平台前站、配套的管理后台、专家小程序、专家直播平台4大项目。
      `,responsibilities:()=>n("ul",null,[n("li",null,[s("负责整站业务需求评审与开发落地工作，使用 vue3 从0-1的推动项目，并如期落地")]),n("li",null,[s("担任核心主程，负责任务拆解，前端人员分配")]),n("li",null,[s("统一处理请求方法，基础缓存方法，工具函数，增强代码可复用性")]),n("li",null,[s("根据设计图，抽离公共组件，加快开发效率")]),n("li",null,[s("整合 即构 zego 实时音视频、超级白板功能，搭建专家直播平台")])])},{title:"中视ETC一站式发行平台",techStack:["vue2/3","vite","pinia","taro","uniapp","原生小程序"],start:"2020.09",end:"2022.10",description:`
      中视ETC一站式发行平台，是一个建立于支付宝生态下，与全国各省ETC发行方对接客货车ETC发行、通行免密扣费、售后处理、车主服务的系统服务平台。
      目前平台已接入了广西、内蒙古、黑龙江、北京、安徽、江苏等省份的ETC发行业务，日均发行量为10000+，总用户规模达到了100万。
      主要功能模块包括：ETC发行、审核、售后、激活、通行扣费、财务报表等等，其他功能涉及商业保密。
      `,responsibilities:()=>n("ul",null,[n("li",null,[s("主要负责省方ETC小程序、配套的管理后台的维护版本迭代")]),n("li",null,[s("管理后台主要负责其重构工作，包括统一处理请求方法、公共组件搭建、前端字典的引入、菜单+按钮权限的适配")]),n("li",null,[s("小程序主要负责其首页界面可配置化、公告配置、售后服务中心包括（取消订单，设备更换，ETC 注销，设备补办，生态回流补签，设备检测，免密代购补签）")]),n("li",null,[s("基于 element-ui 封装公共组件库的日常维护、版本迭代、文档维护")]),n("li",null,[s("配合运维搭建基于Gitlab、Jenkins的持续集成(CI\\CD)流程")]),n("li",null,[s("负责前端小组的技术选型、框架搭建、code review")])])},{title:"4S店SAAS系统-支付宝小程序",techStack:["vue2/3","vite","pinia","taro","uniapp","原生小程序"],start:"2022.02",end:"2022.08",description:`
      用户端针对4s店锁客难等痛点，基于支付宝开放能力（芝麻go，花呗分期）等信用能力，设计2年三次承诺到店保养可享7折优惠等活动，单店月保养GMV达到40w；
      并基于支付宝端3千万认证车主的公域内流量，利用支付宝域内消息通知、灯火平台等触达能力，设计支付宝域内运营工具。
      商户端针对用户端小程序功能设计了对应的活动发布、订单管理、营销短信管理、券码核销等管理功能，方便快速进行用户端小程序管理。
      `,responsibilities:()=>n("ul",null,[n("li",null,[s("主要负责项目前端整站建设包括界面搭建，数据对接，规范设计")]),n("li",null,[s("统一处理请求方法，公共组件搭建，基础缓存方法，增强代码可复用性")]),n("li",null,[s("负责小程序授权登录流程的对接、用户中心模块的开发")]),n("li",null,[s("负责公共组件搭建，包括oss图片上传组件、ocr文字识别组件、车牌号输入框、车牌号选择器、toggle选择器")]),n("li",null,[s("负责公共hooks的封装，基于 Taro.setStorageSync 和 Taro.getStorageSync 封装的useStorage，支持响应式数据")])])},{title:"同律人-法律咨询",techStack:["vue2","webpack","uniapp","less","vant","tim-js-sdk","jweixin"],start:"2020.01",end:"2020.07",description:`
      法律咨询App，为用户提供了更为便利的法律咨询平台，有利于帮助群众增加法律常识和守法意识。
      主要功能有：文章课程、法律产品、时事新闻、在线咨询、在线支付、地址管理、钱包管理、发票管理、订单管理、个人中心、投诉建议、人才招聘等等，其他功能涉及商业保密。
      `,responsibilities:()=>n("ul",null,[n("li",null,[s("独立负责前端整站搭建，包括统一请求方法、模块页面编写、接口联调")]),n("li",null,[s("在全局前置守卫初始化 wx.config，以实现每个页面支持微信分享功能")]),n("li",null,[s("在线咨询使用 tim-js-sdk 搭建即时通信功能")]),n("li",null,[s("使用 wx.chooseImage、wx.getLocalImgData 封装上传图片组件")])])},{title:"内容管理后台",techStack:["react16","ant-design-pro","ant-design","dva","less","es6"],start:"2019.04",end:"2019.12",description:`
      本项目属于公司内部使用的saas管理后台，支持租户开通、动态菜单的一个管理系统。
      主要功能有：系统设置、收款设置、提款设置、开户管理、公告管理、消息管理、充值种类、反馈管理、角色管理等等，其他功能涉及商业保密。
      `,responsibilities:()=>n("ul",null,[n("li",null,[s("负责主要功能的前端开发，包括页面编写、公共组件抽离、接口联调")]),n("li",null,[s("使用 Select 封装了自定义表单控件，包括用户选择器、部门选择器等组件")]),n("li",null,[s("使用 Tag 封装了关键字表单控件")]),n("li",null,[s("封装 ImageUpload 自定义七牛云上传表单控件")]),n("li",null,[s("项目日常维护、版本迭代")])])},{title:"国药齐富微信商城",techStack:["vue2","vue-router","vuex","vant2","less","es6"],start:"2018.12",end:"2019.12",description:`
      本项目是一个线上药店商城，业务包含中西药品、滋补保健、母婴孕产、生活个护、医疗器械、成人计生等多个板块，为消费者提供全面、安全、普惠的医药、医疗、健康服务。
      为药房信息化赋能，让用户享受到最为专业的医疗服务。主要功能有：医生预约模块、医药文化模块、商品模块、分类列表模块、购物车模块、
      下单支付模块、个人中心模块、我的订单模块、积分模块、卡券管理模块、收货地址模块等等，其他功能涉及商业保密。
      `,responsibilities:()=>n("ul",null,[n("li",null,[s("独立负责主要功能的前端开发，包括页面编写、公共组件抽离、接口联调")]),n("li",null,[s("移动端适配，使用 postcss-px-to-viewport 进行单位转换")]),n("li",null,[s("使用 axios 拦截器模式，对响应进行统一错误处理")]),n("li",null,[s("封装多个组件，包括送货地址选择器、高德地图地址选择器、预约时间选择器、优惠券选择器、商品卡片组件、分割线组件")]),n("li",null,[s("项目日常维护、版本迭代")])])},{title:"南海燃气-燃气管家",techStack:["vue2","vue-router","vuex","vux","axios","less","es6"],start:"2017.08",end:"2019.03",description:`
      燃气管家公众号主要是为了帮助用户在线燃气安检、燃气安装、燃气维修预约服务。
      公司后台接到预约后，操作员会在管理后台上分配给施工师傅。施工师傅收到消息后赶往施工现场，将施工图片及进程通过APP反馈给公司客服以此形成业务闭环。
      主要功能有：我要缴费、我要报数、我要安装、我要改管、我要点火、我要维修、我要安检、气费查询、个人中心、发票管理、用户绑定等等，其他功能涉及商业保密。
      `,responsibilities:()=>n("ul",null,[n("li",null,[s("负责项目的前站以及配套的管理后台的主要功能开发，包括页面编写、接口联调")]),n("li",null,[s("全局 filters 注入，方便调用")]),n("li",null,[s("使用 require.context 自动引入 vuex module")]),n("li",null,[s("项目日常维护、版本迭代")])])},{title:"佛山智慧口岸",techStack:["vue2","vue-router","vuex","element-ui","axios","less","es6"],start:"2018.01",end:"2018.07",description:`
      该项目是“单一窗口”功能的细化和延伸，项目的建设内容围绕“单一窗口”并结合佛山本地口岸信息化的建设情况开展。
      主要功能有：首页仪表板模块、查验管理模块、放行查询模块、查验流程模块、查验费用管理目录、集装箱动态查询模块、散货动态查询模块、
      机构管理模块、角色管理模块、长期堆存集装箱预警模块、分区堆放预警模块、集装箱号异常预警模块、
      集装箱口岸漂移预警模块、集装箱异常离场预警模块、超时未申报预警模块、超时未提离预警模块。
      `,responsibilities:()=>n("ul",null,[n("li",null,[s("负责项目的主要功能开发，包括页面编写、接口联调")]),n("li",null,[s("使用 router.beforeEach 结合 router.addRoutes 两个api，实现动态菜单")]),n("li",null,[s("封装 v-permission，实现按钮权限")]),n("li",null,[s("全局 filters 注入，方便调用")]),n("li",null,[s("使用 require.context 自动引入 vuex module")]),n("li",null,[s("项目日常维护、版本迭代")])])},{title:"跨境电子商务公共平台",techStack:["ace-admin","jsp","jquery","less/scss","ajax"],start:"2015.11",end:"2017.01",description:`
      该项目为管理后台项目，主要为跨境电子商务企业及国内消费者提供便捷的通关、退税、结汇、身份认证、查询等服务。
      主要功能有：商品备案查询模块、企业备案查询模块、商家诚信查询模块、问题管理模块、站内信模块、订单管理模块、税率查询模块、
      商品行邮税查询模块、个人设置模块、电子订单查询模块、电子运单查询模块、电子支付单查询模块。
      `,responsibilities:()=>n("ul",null,[n("li",null,[s("负责项目的主要功能开发，包括页面编写、接口联调")]),n("li",null,[s("运用单例设计模式开发多页应用")]),n("li",null,[s("项目日常维护、版本迭代")])])}],repository:[{title:"element-components",techStack:["Side Project","component","vue","element-ui"],description:"增强组件库，基于 element-ui 实现",link:"https://github.com/zehuichan/element-components"},{title:"vant-components",techStack:["Side Project","component","vue","vant2.x"],description:"增强组件库，基于 vant2.x 实现",link:"https://github.com/zehuichan/vant-components"},{title:"vite-element-plus-admin",techStack:["vite4","vue3","element-plus","admin-template","vue-admin"],description:"是一个后台前端解决方案，它基于 vue3 和 element-plus 实现。",link:"https://github.com/zehuichan/vite-element-plus-admin"}]},Tt={class:"container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16"},Ht={class:"mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6"},It={class:"flex items-center justify-between"},Rt={class:"flex-1 space-y-1.5"},$t={class:"text-2xl font-bold"},Nt={class:"max-w-md text-pretty text-sm text-muted-foreground"},zt=c("p",{class:"max-w-md items-center text-pretty text-sm text-muted-foreground"},[c("span",{class:"inline-flex gap-x-1.5 align-baseline leading-none hover:underline"}," 8年前端，本科 ")],-1),jt={class:"flex pt-1 text-sm text-muted-foreground print:hidden"},Pt={class:"hidden flex-col gap-x-1 text-sm text-muted-foreground print:flex"},Vt=["href"],Gt={class:"underline"},Ut=["href"],Lt={class:"underline"},Ot={class:"relative flex shrink-0 overflow-hidden rounded-xl size-28"},qt=["src"],Wt=c("h2",{class:"text-xl font-bold"},"关于我",-1),Kt={class:"text-pretty text-sm text-muted-foreground"},Jt=c("h2",{class:"text-xl font-bold"},"工作经历",-1),Qt={class:"flex items-center justify-between gap-x-2 text-base"},Zt={class:"inline-flex items-center justify-center gap-x-1 font-semibold"},Xt={class:"text-sm tabular-nums text-gray-500"},Yt={class:"text-sm"},ue=c("h2",{class:"text-xl font-bold"},"项目经历",-1),te={class:"flex items-center justify-between gap-x-2 text-base"},ee={class:"inline-flex items-center justify-center gap-x-1 font-semibold"},ne={class:"text-sm tabular-nums text-gray-500 fw-400"},ae=c("h4",{class:"mt-2 text-sm text-card-foreground"},"项目描述：",-1),re={class:"text-pretty mt-2"},ie=c("h4",{class:"mt-2 text-sm text-card-foreground"},"工作职责：",-1),se={class:"text-pretty mt-2"},oe=c("h4",{class:"mt-2 text-sm text-card-foreground"},"技术栈：",-1),le={class:"mt-2 flex flex-wrap gap-1.5"},ce=c("h2",{class:"text-xl font-bold"},"教育经历",-1),de={class:"flex items-center justify-between gap-x-2 text-base"},Fe={class:"font-semibold leading-none"},fe={class:"text-sm tabular-nums text-gray-500"},he=c("h2",{class:"text-xl font-bold"},"开源项目",-1),Ee={class:"-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3"},pe={class:"space-y-1"},ge=["href"],ve=c("span",{class:"size-1 rounded-full bg-green-500"},null,-1),Ce={class:"hidden font-mono text-xs underline print:visible"},be={class:"mt-2 flex flex-wrap gap-1"},me=c("h2",{class:"text-xl font-bold"},"致谢",-1),De=c("div",{class:"mt-2 text-sm text-card-foreground"},"感谢您花时间阅读我的简历，期待能有机会和您共事",-1),_e={__name:"cv",setup(u){return(t,e)=>{const a=V("icon-park"),i=Mt,r=Pu,o=Gu,d=Uu,p=Lu,A=Ou,k=qu,S=Wu;return F(),b("main",Tt,[c("section",Ht,[c("div",It,[c("div",Rt,[c("h1",$t,g(l(v).name),1),c("p",Nt,g(l(v).about),1),zt,c("div",jt,[l(v).contact.email?(F(),m(i,{key:0,tag:"a",text:"",bg:"",href:`mailto:${l(v).contact.email}`},{default:h(()=>[n(a,{type:"mail"})]),_:1},8,["href"])):H("",!0),l(v).contact.tel?(F(),m(i,{key:1,tag:"a",text:"",bg:"",href:`tel:${l(v).contact.tel}`},{default:h(()=>[n(a,{type:"phone"})]),_:1},8,["href"])):H("",!0),l(v).contact.github?(F(),m(i,{key:2,tag:"a",text:"",bg:"",href:`${l(v).contact.github}`},{default:h(()=>[n(a,{type:"github"})]),_:1},8,["href"])):H("",!0)]),c("div",Pt,[l(v).contact.email?(F(),b("a",{key:0,href:`mailto:${l(v).contact.email}`},[c("span",Gt,g(l(v).contact.email),1)],8,Vt)):H("",!0),l(v).contact.tel?(F(),b("a",{key:1,href:`tel:${l(v).contact.tel}`},[c("span",Lt,g(l(v).contact.tel),1)],8,Ut)):H("",!0)])]),c("div",Ot,[c("img",{class:"aspect-square h-full w-full",src:l(v).avatarUrl,alt:""},null,8,qt)])]),n(z,null,{default:h(()=>[Wt,c("div",Kt,[n(r,{render:l(v).summary},null,8,["render"])])]),_:1}),n(z,null,{default:h(()=>[Jt,(F(!0),b(B,null,j(l(v).work,f=>(F(),m(p,null,{default:h(()=>[n(o,null,{default:h(()=>[c("div",Qt,[c("h3",Zt,g(f.company),1),c("div",Xt,g(f.start)+" - "+g(f.end),1)]),c("h4",Yt,g(f.title),1)]),_:2},1024),n(d,{class:"mt-2 text-pretty text-sm text-muted-foreground"},{default:h(()=>[n(r,{render:f.description},null,8,["render"])]),_:2},1024)]),_:2},1024))),256))]),_:1}),n(z,{class:"scroll-mb-16"},{default:h(()=>[ue,(F(!0),b(B,null,j(l(v).projects,f=>(F(),m(p,{bg:""},{default:h(()=>[n(o,null,{default:h(()=>[n(A,null,{default:h(()=>[c("div",te,[c("h3",ee,g(f.title),1),c("div",ne,g(f.start)+" - "+g(f.end),1)])]),_:2},1024)]),_:2},1024),n(d,null,{default:h(()=>[ae,c("div",re,[l(Vu)(f.description)?(F(),m(r,{key:0,render:f.description},null,8,["render"])):(F(),b(B,{key:1},[s(g(f.description),1)],64))]),ie,c("div",se,[n(r,{render:f.responsibilities},null,8,["render"])]),oe,c("div",le,[(F(!0),b(B,null,j(f.techStack,E=>(F(),m(k,null,{default:h(()=>[s(g(E),1)]),_:2},1024))),256))])]),_:2},1024)]),_:2},1024))),256))]),_:1}),n(z,null,{default:h(()=>[ce,(F(!0),b(B,null,j(l(v).education,f=>(F(),m(p,null,{default:h(()=>[n(o,null,{default:h(()=>[c("div",de,[c("h3",Fe,g(f.school),1),c("div",fe,g(f.start)+" - "+g(f.end),1)])]),_:2},1024),n(d,{class:"mt-2"},{default:h(()=>[s(g(f.degree),1)]),_:2},1024)]),_:2},1024))),256))]),_:1}),n(z,null,{default:h(()=>[he,c("div",Ee,[(F(!0),b(B,null,j(l(v).repository,f=>(F(),m(p,{class:"repository border border-muted p-3"},{default:h(()=>[c("div",pe,[n(o,null,{default:h(()=>{var E;return[c("a",{href:f.link,target:"_blank",class:"inline-flex items-center gap-1 hover:underline"},[s(g(f.title)+" ",1),ve],8,ge),c("div",Ce,g((E=f.link)==null?void 0:E.replace("https://","").replace("www.","").replace("/","")),1),n(S,{class:"font-mono text-xs"},{default:h(()=>[s(g(f.description),1)]),_:2},1024)]}),_:2},1024),n(d,{class:"mt-auto flex"},{default:h(()=>[c("div",be,[(F(!0),b(B,null,j(f.techStack,E=>(F(),m(k,{light:""},{default:h(()=>[s(g(E),1)]),_:2},1024))),256))])]),_:2},1024)])]),_:2},1024))),256))])]),_:1}),n(z,null,{default:h(()=>[me,De]),_:1})])])}}};export{_e as default};
