"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[1736],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=r,h=p["".concat(o,".").concat(d)]||p[d]||m[d]||i;return t?a.createElement(h,l(l({ref:n},u),{},{components:t})):a.createElement(h,l({ref:n},u))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},61844:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const i={id:"documentation",title:"Documentation",description:"Business Partner Kit",sidebar_position:4},l=void 0,s={unversionedId:"kits/Business Partner Kit/documentation",id:"kits/Business Partner Kit/documentation",title:"Documentation",description:"Business Partner Kit",source:"@site/docs/kits/Business Partner Kit/page_documentation.md",sourceDirName:"kits/Business Partner Kit",slug:"/kits/Business Partner Kit/documentation",permalink:"/docs/kits/Business Partner Kit/documentation",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/kits/Business Partner Kit/page_documentation.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"documentation",title:"Documentation",description:"Business Partner Kit",sidebar_position:4},sidebar:"kits",previous:{title:"Operation View",permalink:"/docs/kits/Business Partner Kit/Operation View"},next:{title:"Specification",permalink:"/docs/kits/Business Partner Kit/Software Development View/Specification"}},o={},c=[{value:"Business Partner Kit",id:"business-partner-kit",level:3},{value:"Authentication",id:"authentication",level:2},{value:"Reference Data",id:"reference-data",level:2},{value:"Get the address of a legal entity",id:"get-the-address-of-a-legal-entity",level:2},{value:"Example request (1.)",id:"example-request-1",level:3},{value:"Example response (1.)",id:"example-response-1",level:3},{value:"Example request (2.)",id:"example-request-2",level:3},{value:"Example response (2.)",id:"example-response-2",level:3}],u={toc:c};function p(e){let{components:n,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Business partner kit banner",src:t(20140).Z,width:"285",height:"244"})),(0,r.kt)("h3",{id:"business-partner-kit"},"Business Partner Kit"),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"You will need to get a technical user and authenticate via OAuth 2.0. You can find the getting\nstarted documentation with a description on how to get the technical user here. After that, you\nstart an authorization request via the API and get an access token, with that you can start\nrequesting data from the resource. API requests without authentication will fail."),(0,r.kt)("p",null,"Authorization URL"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://centralidp.demo.catena-x.net/auth/realms/CXCentral/protocol/openid-connect/auth"},"https://centralidp.demo.catena-x.net/auth/realms/CXCentral/protocol/openid-connect/auth")),(0,r.kt)("p",null,"Token URL"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://centralidp.demo.catena-x.net/auth/realms/CX-Central/protocol/openidconnect/token"},"https://centralidp.demo.catena-x.net/auth/realms/CX-Central/protocol/openidconnect/token")),(0,r.kt)("h2",{id:"reference-data"},"Reference Data"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open Search Controller"),(0,r.kt)("li",{parentName:"ol"},"CDQ Controller"),(0,r.kt)("li",{parentName:"ol"},"Site Controller"),(0,r.kt)("li",{parentName:"ol"},"Meta Data Controller"),(0,r.kt)("li",{parentName:"ol"},"Business Partner Controller"),(0,r.kt)("li",{parentName:"ol"},"BPN Controller"),(0,r.kt)("li",{parentName:"ol"},"Adress Controller")),(0,r.kt)("h2",{id:"get-the-address-of-a-legal-entity"},"Get the address of a legal entity"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The Business Parter Pool API offers a search for the company name and gives you the business partner number (BPN) as a response. This endpoint tries to find matches among all existing business partners of type legal entity, filtering out partners which entirely do not match and ranking the remaining partners according to the accuracy of the match, e.g., name + postalCode. The match of a partner is better the higher its relevancy score.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"With the response of the business partner number for legal entity (BPNL you can  search for the address of this legal entity."))),(0,r.kt)("h3",{id:"example-request-1"},"Example request (1.)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'GET' \\\n'https://partners-pool.dev.demo.catena-x.net/api/catena/legal-\nentities?name=Zolemba&page=0&size=10' \\\n-H 'accept: */*' \\\n")),(0,r.kt)("h3",{id:"example-response-1"},"Example response (1.)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{\n"totalElements": 2,\n"totalPages": 1,\n"page": 0,\n"contentSize": 2,\n"content": [\n{\n"score": 80.74726,\n"legalEntity": {\n"bpn": "BPNL0000000002XY",\n"identifiers": [\n{\n"value": "62457a3f3fd2374f924ef83b",\n"type": {\n"technicalKey": "CDQID",\n"name": "CDQ Identifier",\n"url": "" \n},\n"issuingBody": {\n"technicalKey": "CDQ",\n"name": "CDQ AG",\n"url": ""\n},\n"status": {\n"technicalKey": "CDQ_IMPORTED",\n"name": "Imported from CDQ but not synchronized"\n}\n},\n{\n"value": "CX.POOL:623D9AABD2D1D42CBAD7ED240",\n"type": {\n"technicalKey": "CX_POOL_ID",\n"name": "",\n"url": null\n},\n"issuingBody": null,\n"status": null\n},\n{\n"value": "DE281308185",\n"type": {\n"technicalKey": "EU_VAT_ID_DE",\n"name": "Umsatzsteuer-Identifikationsnummer",\n"url": "https://meta.cdq.com/European_value_added_tax_identifier_(Germany)"\n},\n"issuingBody": null,\n"status": null\n},\n{\n"value": "BPNL0000000002XY",\n"type": {\n"technicalKey": "BPN",\n"name": "Business Partner Number",\n"url": ""\n},\n"issuingBody": {\n"technicalKey": "CATENAX",\n"name": "Catena-X",\n"url": ""\n},\n"status": \n{\n"technicalKey": "UNKNOWN",\n"name": "Unknown"\n}\n}\n],\n"names": [\n{\n"value": "Zolemba GmbH",\n"shortName": null,\n"type": {\n"technicalKey": "LOCAL",\n"name": "The business partner name identifies a business partner in a given\ncontext, e.g. a country or region.",\n"url": ""\n},\n"language": {\n"technicalKey": "undefined",\n"name": "Undefined"\n}\n}\n],\n"legalForm": null,\n"status": null,\n"profileClassifications": [],\n"types": [],\n"bankAccounts": [],\n"roles": [],\n"relations": [],\n"currentness": "2022-08-26T07:45:17.709906Z"\n}\n},\n{\n"score": 80.74726,\n"legalEntity": {\n"bpn": "BPNL00000003GPOV",\n"identifiers": [\n{\n"value": "BPNL00000003GPOV",\n"type": {\n"technicalKey": "BPN",\n"name": "Business Partner Number",\n"url": ""\n},\n"issuingBody": {\n"technicalKey": "CATENAX",\n"name": "Catena-X",\n"url": ""\n},\n"status": {\n"technicalKey": "UNKNOWN",\n"name": "Unknown"\n}\n},\n{\n"value": "CX.POOL:62DE475A3E64DC6E7B1761D80",\n"type": {\n"technicalKey": "CX_POOL_ID",\n"name": "",\n"url": null\n},\n"issuingBody": null,\n"status": null\n},\n{\n"value": "DE281308185",\n"type": {\n"technicalKey": "EU_VAT_ID_DE",\n"name": "Umsatzsteuer-Identifikationsnummer",\n"url": "https://meta.cdq.com/European_value_added_tax_identifier_(Germany)"\n},\n"issuingBody": null,\n"status": null\n},\n{\n"value": "62de48bd1e6b3b3852690904",\n"type": {\n"technicalKey": "CDQID",\n"name": "CDQ Identifier",\n"url": ""\n},\n"issuingBody": {\n"technicalKey": "CDQ",\n"name": "CDQ AG",\n"url": ""\n},\n"status": {\n"technicalKey": "CDQ_IMPORTED",\n"name": "Imported from CDQ but not synchronized"\n}\n}\n],\n"names": [\n{\n"value": "Zolemba GmbH",\n"shortName": null,\n"type": {\n"technicalKey": "LOCAL",\n"name": "The business partner name identifies a business partner in a given\ncontext, e.g. a country or region.",\n"url": ""\n},\n"language": {\n"technicalKey": "undefined",\n"name": "Undefined"\n}\n}\n],\n"legalForm": null,\n"status": null,\n"profileClassifications": [],\n"types": [],\n"bankAccounts": [],\n"roles": [],\n"relations": [],\n"currentness": \n"2022-08-26T07:46:03.102647Z"\n}\n}\n]\n}\n')),(0,r.kt)("h3",{id:"example-request-2"},"Example request (2.)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'POST' \\\n'https://partners-pool.dev.demo.catena-x.net/api/catena/legal-entities/legaladdresses/\nsearch' \\\n-H 'accept: */*' \\\n-H 'Content-Type: application/json' \\\n-d '[\n\"BPNL0000000002XY\"\n]'\n")),(0,r.kt)("h3",{id:"example-response-2"},"Example response (2.)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'[\n{\n"legalEntity": "BPNL0000000002XY",\n"legalAddress": {\n"version": {\n"characterSet": {\n"technicalKey": "LATIN",\n"name": "Latin"\n},\n"language": {\n"technicalKey": "en",\n"name": "English"\n}\n},\n"careOf": null,\n"contexts": [],\n"country": {\n"technicalKey": "DE",\n"name": "Germany"\n},\n"administrativeAreas": [],\n"postCodes": [\n{\n"value": "48465",\n"type": {\n"technicalKey": "OTHER",\n"name": "Other type",\n"url": ""\n}\n}\n],\n"localities": [\n{\n"value": "Schu\u0308ttorf",\n"shortName": null,\n"type": {\n"technicalKey": "OTHER",\n"name": "Other",\n"url": ""\n},\n"language": {\n"technicalKey": "en",\n"name": "English"\n}\n}\n],\n"thoroughfares": [\n{\n"value": "Nordring",\n"name": null,\n"shortName": null,\n"number": "59 A",\n"direction": null,\n"type": {\n"technicalKey": "OTHER",\n"name": "Other type",\n"url": ""\n},\n"language": {\n"technicalKey": "en",\n"name": "English"\n}\n}\n],\n"premises": [],\n"postalDeliveryPoints": [],\n"geographicCoordinates": null,\n"types": []\n}\n}\n]   \n')))}p.isMDXComponent=!0},20140:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/BPKitIcon-55e920e08d5706764626858aebe41780.png"}}]);