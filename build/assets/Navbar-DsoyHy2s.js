import{R as o,j as e,u as y,r as u,L as n}from"./index-DvM2a42B.js";var f={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},v=o.createContext&&o.createContext(f),N=["attr","size","title"];function z(t,a){if(t==null)return{};var r=C(t,a),s,l;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(l=0;l<c.length;l++)s=c[l],!(a.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(r[s]=t[s])}return r}function C(t,a){if(t==null)return{};var r={},s=Object.keys(t),l,c;for(c=0;c<s.length;c++)l=s[c],!(a.indexOf(l)>=0)&&(r[l]=t[l]);return r}function h(){return h=Object.assign?Object.assign.bind():function(t){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s])}return t},h.apply(this,arguments)}function g(t,a){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),r.push.apply(r,s)}return r}function m(t){for(var a=1;a<arguments.length;a++){var r=arguments[a]!=null?arguments[a]:{};a%2?g(Object(r),!0).forEach(function(s){M(t,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(r,s))})}return t}function M(t,a,r){return a=k(a),a in t?Object.defineProperty(t,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[a]=r,t}function k(t){var a=P(t,"string");return typeof a=="symbol"?a:String(a)}function P(t,a){if(typeof t!="object"||t===null)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var s=r.call(t,a||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(t)}function j(t){return t&&t.map((a,r)=>o.createElement(a.tag,m({key:r},a.attr),j(a.child)))}function i(t){return a=>o.createElement(O,h({attr:m({},t.attr)},a),j(t.child))}function O(t){var a=r=>{var{attr:s,size:l,title:c}=t,w=z(t,N),p=l||r.size||"1em",x;return r.className&&(x=r.className),t.className&&(x=(x?x+" ":"")+t.className),o.createElement("svg",h({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,s,w,{className:x,style:m(m({color:t.color||r.color},r.style),t.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),c&&o.createElement("title",null,c),t.children)};return v!==void 0?o.createElement(v.Consumer,null,r=>a(r)):a(f)}function H(t){return i({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(t)}function F(t){return i({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(t)}function I(t){return i({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 122.8c-72.7 0-131.8 59.1-131.9 131.8 0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6 49.9-13.1 4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8 0-35.2-15.2-68.3-40.1-93.2-25-25-58-38.7-93.2-38.7zm77.5 188.4c-3.3 9.3-19.1 17.7-26.7 18.8-12.6 1.9-22.4.9-47.5-9.9-39.7-17.2-65.7-57.2-67.7-59.8-2-2.6-16.2-21.5-16.2-41s10.2-29.1 13.9-33.1c3.6-4 7.9-5 10.6-5 2.6 0 5.3 0 7.6.1 2.4.1 5.7-.9 8.9 6.8 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9c-7.6 15.2-15.7 14.6-11.6 21.6 15.3 26.3 30.6 35.4 53.9 47.1 4 2 6.3 1.7 8.6-1 2.3-2.6 9.9-11.6 12.5-15.5 2.6-4 5.3-3.3 8.9-2 3.6 1.3 23.1 10.9 27.1 12.9s6.6 3 7.6 4.6c.9 1.9.9 9.9-2.4 19.1zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM223.9 413.2c-26.6 0-52.7-6.7-75.8-19.3L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5 29.9 30 47.9 69.8 47.9 112.2 0 87.4-72.7 158.5-160.1 158.5z"},child:[]}]})(t)}function S(t){return i({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(t)}function W(t){return i({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"},child:[]}]})(t)}function d(t){return i({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"},child:[]}]})(t)}function B(t){return i({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(t)}function A(t){return i({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(t)}function K(t){return i({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(t)}function _(t){return i({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(t)}function $(t){return i({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(t)}function R(t){return i({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"},child:[]}]})(t)}function L(t){return i({tag:"svg",attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(t)}const V="/assets/linesM-C8mHV4Fv.svg",b="/assets/logoM-FgCplK-i.svg",E="/assets/moreInfoM-mPVH5bT1.jpg",T="/assets/footerM-DhNVjW3R.jpg",U=()=>e.jsxs("div",{className:"relative overflow-hidden lg:flex flex-col w-screen h-max pt-14",children:[e.jsx("img",{src:T,alt:"footer-background",className:"w-full h-full absolute left-0 top-0"}),e.jsxs("div",{className:"relative z-[555] w-screen h-max lg:flex items-center px-4 lg:px-20",children:[e.jsxs("div",{className:"w-full lg:w-[40%] lg:mb-0 mb-12",children:[e.jsx("img",{src:b,alt:"logo-mitranet",className:"mb-6"}),e.jsxs("p",{className:"text-[14px] leading-loose",children:["Alamat: ",e.jsx("br",{}),"PT Bahtera Mitra Net ",e.jsx("br",{}),"Plaza Aminta 2nd Floor, suite 201 Jl. TB Simatupang Kav.10 Jakarta  ",e.jsx("br",{}),"Selatan 12310"]})]}),e.jsxs("div",{className:"w-full lg:w-[60%] lg:flex lg:justify-end relative top-0",children:[e.jsxs("div",{className:"w-full lg:w-[30%] lg:mb-0 mb-12",children:[e.jsx("h2",{className:"text-[20px] lg:text-[22px] mb-6",children:"Beranda"}),e.jsxs("ul",{className:"list-none",children:[e.jsx("li",{className:"my-4 cursor-pointerhover:brightness-[90%] active:scale-[0.98] duration-100",children:"Produk"}),e.jsx("li",{className:"my-4 cursor-pointerhover:brightness-[90%] active:scale-[0.98] duration-100",children:"Hubungi Kami"})]})]}),e.jsxs("div",{className:"w-full lg:w-[30%] lg:mb-0 mb-12",children:[e.jsx("h2",{className:"text-[20px] lg:text-[22px] mb-6",children:"Tentang Kami"}),e.jsxs("ul",{className:"list-none",children:[e.jsx("li",{className:"my-4 cursor-pointerhover:brightness-[90%] active:scale-[0.98] duration-100",children:"Filosofi"}),e.jsx("li",{className:"my-4 cursor-pointerhover:brightness-[90%] active:scale-[0.98] duration-100",children:"Visi Misi"}),e.jsx("li",{className:"my-4 cursor-pointerhover:brightness-[90%] active:scale-[0.98] duration-100",children:"Partners"})]})]}),e.jsxs("div",{className:"w-full lg:w-[30%]",children:[e.jsx("h2",{className:"text-[20px] lg:text-[22px] mb-6",children:"Contact Us :"}),e.jsxs("div",{className:"flex items-center w-max",children:[e.jsx(F,{className:"text-green-600 text-[18px] mx-3"}),e.jsx(H,{className:"text-green-600 text-[18px] mx-3"}),e.jsx(B,{className:"text-green-600 text-[18px] mx-3"}),e.jsx(S,{className:"text-green-600 text-[18px] mx-3"})]})]})]})]}),e.jsx("div",{className:"relative w-full mt-8 border-t border-t-slate-300 text-black h-max py-8 text-center flex justify-center items-center",children:e.jsx("small",{children:"© MitraNet. All rights reserved."})})]}),J=()=>{const a=y().pathname.includes("/data-tunai");return e.jsxs("section",{className:`relative overflow-hidden w-screen mx-auto ${a?"mt-0":"mt-16"} px-16 flex bgwhite items-center h-[70vh] lg:h-max lg:h-[360px] justify-center`,children:[e.jsxs("div",{className:"absolute z-[99999999999] w-[90%] lg:w-[60%] top-[50%] transform translate-y-[-50%] text-white left-[5.5%] top-0",children:[e.jsx("h2",{className:"w-full text-[26px] lg:text-[32px]",children:"Ingin tau lebih lanjut tentang produk syariah MitraNet?"}),e.jsx("p",{className:"w-full mt-5 text-[14px] tlg:ext-[16px]",children:"Dengan senang hati, kami akan membantu Anda. Silahkan hubungi kami!"}),e.jsx("div",{className:"w-max h-max px-6 bg-[#568660] rounded-full py-3 text-center flex items-center cursor-pointer hover:brightness-[90%] active:scale-[0.98] my-5 shadow-md",children:e.jsx("p",{children:"Selengkapnya"})})]}),e.jsx("img",{src:V,alt:"line",className:"relative z-[222222222222222] w-full left-0 top-0"}),e.jsx("div",{className:"absolute w-full h-full bg-green-800 bg-opacity-[0.5] z-[22222]"}),e.jsx("img",{src:E,alt:"moreInfo",className:"absolute left-0w-full h-full top-0"})]})},Q=()=>{const[t,a]=u.useState(!1),[r,s]=u.useState(!1),[l,c]=u.useState(!1);return e.jsxs("div",{className:"relative w-screen h-max bg-white flex px-4 lg:px-12 py-6 items-center justify-between pz-12 shadow-md z-[9999999999]",children:[e.jsx("img",{src:b,alt:"logo-mitranet",className:"lg:w-max w-[40%]"}),e.jsx("div",{className:`absolute bg-white shadow-md z-[444444] ${l?"left-0":"left-[-100%]"} lg:hidden inline duration-200 top-0 h-screen w-[80%] overflow-x-hidden`,children:e.jsxs("ul",{className:"list-none",children:[e.jsx("li",{className:"my-12 ml-8 text-grayColor cursor-pointer active:scale-[0.98] hover:text-black duration-100",children:"Beranda"}),e.jsx(n,{to:"/tentang-mitranet",children:e.jsx("li",{className:"my-12 ml-8 text-grayColor cursor-pointer active:scale-[0.98] hover:text-black duration-100",children:"Tentang Mitra"})}),e.jsxs("li",{className:"my-12 z-[33] relative ml-8 text-grayColor cursor-pointer duration-100",children:[e.jsxs("p",{className:"hover:text-black flex items-center",onClick:()=>{a(!t),s(!1)},children:["Haji & Wisata"," ",e.jsx(d,{className:"ml-2 text-[12px]"})]}),e.jsxs("div",{className:`w-max h-max px-2 py-3 bg-white rounded-[12px] shadow-lg absolute ${t?"bottom-[-120px] left-[-20px] [999] opacity-[1]":"z-[-1] opacity-[0] bottom-[-50px] left-[-20px]"} border border-slate-200 flex flex-col items-center justify-center`,children:[e.jsx(n,{to:"/haji",children:e.jsx("div",{className:"px-4 py-2 font-[600] text-center w-full bg-[#568660] text-white h-[40px] rounded-[12px] cursor-pointer hover:brightness-[90%] active:scale-[0.98] duration-200",children:"Haji & Umrah"})}),e.jsx(n,{to:"/wisata",children:e.jsx("div",{className:"px-4 py-2 font-[600] text-center w-full h-[40px] rounded-[12px] cursor-pointer hover:brightness-[90%] active:scale-[0.98] duration-200",children:"Wisata"})})]})]}),e.jsxs("li",{className:"my-12 relative ml-8 text-grayColor cursor-pointer duration-100",children:[e.jsxs("p",{className:"hover:text-black flex items-center",onClick:()=>{s(!r),a(!1)},children:["Produk"," ",e.jsx(d,{className:"ml-2 text-[12px]"})]}),e.jsxs("div",{className:`w-max h-max pt-3 pb-2 bg-white rounded-[12px] shadow-lg absolute ${r?"bottom-[-120px] left-[-20px] [999] opacity-[1]":"z-[-1] opacity-[0] bottom-[-50px] left-[-20px]"} border border-slate-200 flex flex-col items-center justify-center`,children:[e.jsx(n,{to:"/emas",children:e.jsx("div",{className:"px-4 py-2 font-[600] text-center w-full bg-[#568660] text-white h-[40px] rounded-[12px] cursor-pointer hover:brightness-[90%] active:scale-[0.98] duration-200",children:"Emas"})}),e.jsx(n,{to:"/dana-tunai",children:e.jsx("div",{className:"px-4 py-2 font-[600] text-center w-full h-[40px] rounded-[12px] cursor-pointer hover:brightness-[90%] active:scale-[0.98] duration-200",children:"Dana Tunai"})})]})]}),e.jsx("li",{className:"my-12 ml-8 text-grayColor cursor-pointer active:scale-[0.98] hover:text-black duration-100",children:"Hubungi Kami"}),e.jsx("li",{className:"my-12 ml-8 text-grayColor cursor-pointer active:scale-[0.98] hover:text-black duration-100",children:"FAQ"})]})}),e.jsx("div",{className:"w-full flex items-center justify-center",children:e.jsxs("ul",{className:"list-none hidden lg:flex items-center ",children:[e.jsx("li",{className:"ml-8 text-grayColor cursor-pointer active:scale-[0.98] hover:text-black duration-100",children:"Beranda"}),e.jsx(n,{to:"/tentang-mitranet",children:e.jsx("li",{className:"ml-8 text-grayColor cursor-pointer active:scale-[0.98] hover:text-black duration-100",children:"Tentang Mitra"})}),e.jsxs("li",{className:"relative ml-8 text-grayColor cursor-pointer duration-100",children:[e.jsxs("p",{className:"hover:text-black flex items-center",onClick:()=>{a(!t),s(!1)},children:["Haji & Wisata"," ",e.jsx(d,{className:"ml-2 text-[12px]"})]}),e.jsxs("div",{className:`w-max h-max px-2 py-3 bg-white rounded-[12px] shadow-lg absolute ${t?"bottom-[-120px] left-[-20px] [999] opacity-[1]":"z-[-1] opacity-[0] bottom-[-50px] left-[-20px]"} border border-slate-200 flex flex-col items-center justify-center`,children:[e.jsx(n,{to:"/haji",children:e.jsx("div",{className:"px-4 py-2 font-[600] text-center w-full bg-[#568660] text-white h-[40px] rounded-[12px] cursor-pointer hover:brightness-[90%] active:scale-[0.98] duration-200",children:"Haji & Umrah"})}),e.jsx(n,{to:"/wisata",children:e.jsx("div",{className:"px-4 py-2 font-[600] text-center w-full h-[40px] rounded-[12px] cursor-pointer hover:brightness-[90%] active:scale-[0.98] duration-200",children:"Wisata"})})]})]}),e.jsxs("li",{className:"relative ml-8 text-grayColor cursor-pointer duration-100",children:[e.jsxs("p",{className:"hover:text-black flex items-center",onClick:()=>{s(!r),a(!1)},children:["Produk"," ",e.jsx(d,{className:"ml-2 text-[12px]"})]}),e.jsxs("div",{className:`w-max h-max pt-3 pb-2 bg-white rounded-[12px] shadow-lg absolute ${r?"bottom-[-120px] left-[-20px] [999] opacity-[1]":"z-[-1] opacity-[0] bottom-[-50px] left-[-20px]"} border border-slate-200 flex flex-col items-center justify-center`,children:[e.jsx(n,{to:"/emas",children:e.jsx("div",{className:"px-4 py-2 font-[600] text-center w-full bg-[#568660] text-white h-[40px] rounded-[12px] cursor-pointer hover:brightness-[90%] active:scale-[0.98] duration-200",children:"Emas"})}),e.jsx(n,{to:"/dana-tunai",children:e.jsx("div",{className:"px-4 py-2 font-[600] text-center w-full h-[40px] rounded-[12px] cursor-pointer hover:brightness-[90%] active:scale-[0.98] duration-200",children:"Dana Tunai"})})]})]}),e.jsx("li",{className:"ml-8 text-grayColor cursor-pointer active:scale-[0.98] hover:text-black duration-100",children:"Hubungi Kami"}),e.jsx("li",{className:"ml-8 text-grayColor cursor-pointer active:scale-[0.98] hover:text-black duration-100",children:"FAQ"})]})}),e.jsx("div",{className:"w-max px-8 h-max py-3 bg-mainColor text-white hidden lg:flex items-center justify-center ml-[100px] rounded-[8px] text-white cursor-pointer hover:brightness-[90%] active:scale-[0.98]",children:e.jsx("p",{children:"Daftar"})}),l?e.jsx("div",{onClick:()=>c(!1),className:"w-[90px] h-[40px] lg:hidden inline bg-red-500 text-white cursor-pointer active:scale-[0.98] flex items-center rounded-[4px] justify-center",children:e.jsx(L,{})}):e.jsxs("div",{onClick:()=>c(!l),className:"ml-auto  lg:hidden inline cursor-pointer hover:brightness-[90%] active:scale-[0.98] duration-100 lg:hidden flex flex-col items-center justify-between h-[40px] w-[70px] border border-slate-200 rounded-[4px] p-2",children:[e.jsx("div",{className:"w-[90%] h-[2px] bg-slate-600"}),e.jsx("div",{className:"w-[90%] h-[2px] bg-slate-600"}),e.jsx("div",{className:"w-[90%] h-[2px] bg-slate-600"})]})]})};export{R as F,J as M,Q as N,K as a,U as b,W as c,$ as d,d as e,I as f,A as g,_ as h};