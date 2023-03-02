"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[9350],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},96188:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={},a="Release Notes Version 0.1.2",s={unversionedId:"kits/product-edc/docs/release-notes/Version 0.1.2",id:"kits/product-edc/docs/release-notes/Version 0.1.2",title:"Release Notes Version 0.1.2",description:"30.09.2022",source:"@site/docs/kits/product-edc/docs/release-notes/Version 0.1.2.md",sourceDirName:"kits/product-edc/docs/release-notes",slug:"/kits/product-edc/docs/release-notes/Version 0.1.2",permalink:"/docs/kits/product-edc/docs/release-notes/Version 0.1.2",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/kits/product-edc/docs/release-notes/Version 0.1.2.md",tags:[],version:"current",frontMatter:{}},c={},l=[{value:"1. Eclipse Dataspace Connector",id:"1-eclipse-dataspace-connector",level:2},{value:"2. Product EDC",id:"2-product-edc",level:2},{value:"2.1 Alpine Image",id:"21-alpine-image",level:3},{value:"3. Fixed Issues",id:"3-fixed-issues",level:2}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"release-notes-version-012"},"Release Notes Version 0.1.2"),(0,o.kt)("p",null,"30.09.2022"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This version introduced mostly bugfixes and thread mitigation by updating libraries.")),(0,o.kt)("h2",{id:"1-eclipse-dataspace-connector"},"1. Eclipse Dataspace Connector"),(0,o.kt)("p",null,"The Git submodule references commit ",(0,o.kt)("inlineCode",{parentName:"p"},"740c100ac162bc41b1968c232ad81f7d739aefa9")," from the 23th of September 2022 (newer than ",(0,o.kt)("strong",{parentName:"p"},"0.0.1-milestone-6"),")."),(0,o.kt)("h2",{id:"2-product-edc"},"2. Product EDC"),(0,o.kt)("h3",{id:"21-alpine-image"},"2.1 Alpine Image"),(0,o.kt)("p",null,"Introduce alpine image as base for all Product EDC Images (replaced distroless image)."),(0,o.kt)("h2",{id:"3-fixed-issues"},"3. Fixed Issues"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Contract negotiation not working when initiated with policy id (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eclipse-dataspaceconnector/DataSpaceConnector/issues/1251"},"issue"),")")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Negotiation of Policies with extensible properties now works as expected"))))}u.isMDXComponent=!0}}]);