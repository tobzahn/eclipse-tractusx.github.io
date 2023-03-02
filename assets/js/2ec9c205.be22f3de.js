"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[3358],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,h=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6763:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={},i="EDC Extensions",s={unversionedId:"kits/product-edc/docs/kit/operation-view/page10_extensions",id:"kits/product-edc/docs/kit/operation-view/page10_extensions",title:"EDC Extensions",description:"The following extensions provide additional functionality to the core EDC.",source:"@site/docs/kits/product-edc/docs/kit/operation-view/page10_extensions.md",sourceDirName:"kits/product-edc/docs/kit/operation-view",slug:"/kits/product-edc/docs/kit/operation-view/page10_extensions",permalink:"/docs/kits/product-edc/docs/kit/operation-view/page10_extensions",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/kits/product-edc/docs/kit/operation-view/page10_extensions.md",tags:[],version:"current",frontMatter:{},sidebar:"kits",previous:{title:"Software Operation View",permalink:"/docs/kits/product-edc/docs/kit/operation-view/page00_operation_view"},next:{title:"Omejdn DAPS",permalink:"/docs/kits/product-edc/edc-tests/src/main/resources/deployment/helm/omejdn/"}},l={},c=[{value:"Business Partner Validation",id:"business-partner-validation",level:3},{value:"Control Plane Adapter",id:"control-plane-adapter",level:3},{value:"CX OAuth2",id:"cx-oauth2",level:3},{value:"Data Encryption",id:"data-encryption",level:3},{value:"Data Plane Selector",id:"data-plane-selector",level:3},{value:"Hashicorp Vault",id:"hashicorp-vault",level:3},{value:"PostrgreSQL Migration",id:"postrgresql-migration",level:3},{value:"Transfer Process SFTP",id:"transfer-process-sftp",level:3},{value:"S3 Data Transfer",id:"s3-data-transfer",level:3}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"edc-extensions"},"EDC Extensions"),(0,o.kt)("p",null,"The following extensions provide additional functionality to the core EDC.\nThey are currently only available in TractusX EDC."),(0,o.kt)("h3",{id:"business-partner-validation"},"Business Partner Validation"),(0,o.kt)("p",null,"This extension allows for validation of business partners after the creation of a contract."),(0,o.kt)("h3",{id:"control-plane-adapter"},"Control Plane Adapter"),(0,o.kt)("p",null,"The goal of this extension is to simplify the process of retrieving data out of EDC.\nIt returns ",(0,o.kt)("inlineCode",{parentName:"p"},"EndpointDataReference")," object, hiding all the communication details for contract offers,\ncontract negotiation process and retrieving ",(0,o.kt)("inlineCode",{parentName:"p"},"DataReference")," from EDC control-plane."),(0,o.kt)("h3",{id:"cx-oauth2"},"CX OAuth2"),(0,o.kt)("p",null,"This extension enables OAuth2 authentication between EDC connectors,\ninstead of the more complex authentication flow used by core EDC."),(0,o.kt)("h3",{id:"data-encryption"},"Data Encryption"),(0,o.kt)("p",null,"The EDC encrypts sensitive information inside a token it sends to other applications (potentially cross-company).\nThis extension implements the encryption of this data and should be used with secure keys and algorithms at all times."),(0,o.kt)("h3",{id:"data-plane-selector"},"Data Plane Selector"),(0,o.kt)("p",null,"This control plane extension makes it possible configure one or more data plane instances.\nDuring a transfer the control plane will look for an instance with matching capabilities to transfer data."),(0,o.kt)("h3",{id:"hashicorp-vault"},"Hashicorp Vault"),(0,o.kt)("p",null,"The core EDC assumes secret storage via Azure Vault.\nThis extension allows for usage of Hashicorp Vault instead,\nwith the goal of platform agnosticism."),(0,o.kt)("h3",{id:"postrgresql-migration"},"PostrgreSQL Migration"),(0,o.kt)("p",null,"While the core EDC is able to interact with PostgreSQL databases,\nit does not automate migrations between schema versions.\nThis extension adds that functionality."),(0,o.kt)("h3",{id:"transfer-process-sftp"},"Transfer Process SFTP"),(0,o.kt)("p",null,"This extension allows for the use of SFTP backends for the data plane."),(0,o.kt)("h3",{id:"s3-data-transfer"},"S3 Data Transfer"),(0,o.kt)("p",null,"TODO: Check for correct name and path"))}d.isMDXComponent=!0}}]);