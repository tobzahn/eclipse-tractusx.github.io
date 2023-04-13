"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[2331],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||c;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1352:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const c={},a="Omejdn DAPS",i={unversionedId:"kits/product-edc/edc-tests/src/main/resources/deployment/helm/omejdn/README",id:"kits/product-edc/edc-tests/src/main/resources/deployment/helm/omejdn/README",title:"Omejdn DAPS",description:"This chart deployes an IDS Omejdn DAPS.",source:"@site/docs/kits/product-edc/edc-tests/src/main/resources/deployment/helm/omejdn/README.md",sourceDirName:"kits/product-edc/edc-tests/src/main/resources/deployment/helm/omejdn",slug:"/kits/product-edc/edc-tests/src/main/resources/deployment/helm/omejdn/",permalink:"/docs/kits/product-edc/edc-tests/src/main/resources/deployment/helm/omejdn/",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/kits/product-edc/edc-tests/src/main/resources/deployment/helm/omejdn/README.md",tags:[],version:"current",frontMatter:{},sidebar:"kits",previous:{title:"EDC Extensions",permalink:"/docs/kits/product-edc/docs/kit/operation-view/page10_extensions"},next:{title:"Chart Linting",permalink:"/docs/kits/product-edc/charts/"}},s={},l=[],p={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"omejdn-daps"},"Omejdn DAPS"),(0,o.kt)("p",null,"This chart deployes an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Fraunhofer-AISEC/omejdn-server"},"IDS Omejdn DAPS"),"."),(0,o.kt)("p",null,"Two Eclipse Dataspace Connectors need to be registered at the same DAPS instance, to be able to talk to each other. Each connector is registered in the DAPS by an unique client ID and a correpsonding client certificate."),(0,o.kt)("p",null,"New connectors are configured in the omejdn ",(0,o.kt)("em",{parentName:"p"},"values.yaml"),"."),(0,o.kt)("p",null,"In each Eclipse Dataspace Connector configure the following properties to use the DAPS."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},'    edc.oauth.client.id=<client ID from omejdn values.yaml>\n\n    edc.oauth.provider.jwks.url="http://<name>:4567/.well-known/jwks.json"\n    edc.oauth.token.url="http://<name>:4567/token"\n\n    edc.oauth.private.key.alias=<key vault alias of certificate private key>\n    edc.oauth.public.key.alias=<key vault alias of certificate configured in omejdn values.yaml>\n\n    edc.oauth.provider.audience=idsc:IDS_CONNECTORS_ALL\n')))}d.isMDXComponent=!0}}]);