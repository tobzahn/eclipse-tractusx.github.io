"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[2279],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(r),m=o,f=l["".concat(s,".").concat(m)]||l[m]||d[m]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85807:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={},a="Setup in Kubernetes via Helm",c={unversionedId:"kits/product-edc/docs/kit/operation-view/page06_kubernetes_setup",id:"kits/product-edc/docs/kit/operation-view/page06_kubernetes_setup",title:"Setup in Kubernetes via Helm",description:"Introduction",source:"@site/docs/kits/product-edc/docs/kit/operation-view/page06_kubernetes_setup.md",sourceDirName:"kits/product-edc/docs/kit/operation-view",slug:"/kits/product-edc/docs/kit/operation-view/page06_kubernetes_setup",permalink:"/docs/kits/product-edc/docs/kit/operation-view/page06_kubernetes_setup",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/kits/product-edc/docs/kit/operation-view/page06_kubernetes_setup.md",tags:[],version:"current",frontMatter:{},sidebar:"kits",previous:{title:"Argo CD for Developers",permalink:"/docs/kits/product-edc/docs/kit/operation-view/page05_argocd"},next:{title:"Tests",permalink:"/docs/kits/product-edc/docs/kit/operation-view/page07_tests"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Setup",id:"setup",level:2},{value:"Configuration",id:"configuration",level:2}],u={toc:p};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setup-in-kubernetes-via-helm"},"Setup in Kubernetes via Helm"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"While the local setup described earlier is sufficient to test basic EDC functionality, it is not appropriate for any actual environments.\nFor a more complete setup, Helm charts are provided."),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"To set up an example environment, you can use the following Helm commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"helm repo add catenax-ng-product-edc https://catenax-ng.github.io/product-edc\nhelm install tractusx-connector catenax-ng-product-edc/tractusx-connector --version 0.2.0\n")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"The Helm chart used above can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/tractusx-edc/tree/main/charts"},"here"),".\nConfiguring that deployment requires the same parameters as the local setup described previously.\nHelm expects these parameters in the relevant ",(0,o.kt)("inlineCode",{parentName:"p"},"values.yaml"),".\nSimilar example configurations can be found with the respective charts under the above link."))}l.isMDXComponent=!0}}]);