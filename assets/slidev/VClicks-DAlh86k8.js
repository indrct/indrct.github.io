import{ap as x,_ as C,ar as V,as as z}from"../index-CXqmis6x.js";import{d as b,ad as I,aC as w,o as B,c as D,F as G,aA as $,v as a,aD as f,aE as M,l as E,ab as F}from"../modules/vue-BEAdwd-K.js";import{u as L}from"./context-B-AAWePf.js";const T=b({__name:"VClickGap",props:{size:{type:[String,Number],default:1}},setup(d){const n=d,{$clicksContext:i}=L(),p=x();let o=+n.size;return Number.isNaN(o)&&(console.warn(`[slidev] Invalid size for VClickGap: ${n.size}`),o=1),I(()=>{const l=i.currentOffset+o-1;i.register(p,{max:l,delta:o})}),w(()=>{i.unregister(p)}),(l,r)=>(B(),D(G))}}),j=C(T,[["__file","/home/js/Downloads/sli.dev/indrct/node_modules/@slidev/client/builtin/VClickGap.vue"]]),g=["ul","ol"],q=b({props:{depth:{type:[Number,String],default:1},every:{type:[Number,String],default:1},at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},handleSpecialElements:{type:Boolean,default:!0}},render(){var A,N;const d=+this.every,n=V(this.at),i=typeof n=="string";if(!n){console.warn("[slidev] Invalid at prop for v-clicks component:",n);return}const p=$("click"),o=(s,e)=>F(s,[[p,e,"",{hide:this.hide,fade:this.fade}]]),l=s=>s.flatMap(e=>f(e)&&typeof e.type=="symbol"&&Array.isArray(e.children)?l(e.children):[e]);let r=(N=(A=this.$slots).default)==null?void 0:N.call(A);if(!r)return;r=l(z(r));const k=(s,e=1)=>l(s).map(t=>{if(!f(t))return t;if(g.includes(t.type)&&Array.isArray(t.children)){const c=u(t.children,e+1);return a(t,{},c)}return a(t)});let _=1,h=0;const u=(s,e=1)=>l(s).map(t=>{if(!f(t)||t.type===M)return t;const c=+n+Math.ceil(_++/d)-1;let y;e<+this.depth&&Array.isArray(t.children)?y=a(t,{},k(t.children,e)):y=a(t);const v=c-h;return h=c,o(y,i?v>=0?`+${v}`:`${v}`:c)}),m=()=>E(j,{size:+n+Math.ceil((_-1)/d)-1-h});if(this.handleSpecialElements){if(r.length===1&&g.includes(r[0].type)&&Array.isArray(r[0].children))return a(r[0],{},[...u(r[0].children),m()]);if(r.length===1&&r[0].type==="table"){const s=r[0];if(Array.isArray(s.children))return a(s,{},s.children.map(e=>f(e)?e.type==="tbody"&&Array.isArray(e.children)?a(e,{},[...u(e.children),m()]):a(e):e))}}return[...u(r),m()]}});export{q as _};
