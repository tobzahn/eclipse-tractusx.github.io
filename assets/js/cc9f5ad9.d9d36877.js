"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[8670],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),i=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},c=function(t){var e=i(t.components);return n.createElement(d.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),s=i(a),m=r,g=s["".concat(d,".").concat(m)]||s[m]||u[m]||l;return a?n.createElement(g,p(p({ref:e},c),{},{components:a})):n.createElement(g,p({ref:e},c))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=m;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[s]="string"==typeof t?t:r,p[1]=o;for(var i=2;i<l;i++)p[i]=a[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},92707:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const l={},p="EDC Control-Plane backed by [Postgresql](https://www.postgresql.org/) and [HashiCorp vault](https://www.vaultproject.io/docs)",o={unversionedId:"kits/product-edc/edc-controlplane/edc-controlplane-postgresql-hashicorp-vault/README",id:"kits/product-edc/edc-controlplane/edc-controlplane-postgresql-hashicorp-vault/README",title:"EDC Control-Plane backed by [Postgresql](https://www.postgresql.org/) and [HashiCorp vault](https://www.vaultproject.io/docs)",description:"Building",source:"@site/docs/kits/product-edc/edc-controlplane/edc-controlplane-postgresql-hashicorp-vault/README.md",sourceDirName:"kits/product-edc/edc-controlplane/edc-controlplane-postgresql-hashicorp-vault",slug:"/kits/product-edc/edc-controlplane/edc-controlplane-postgresql-hashicorp-vault/",permalink:"/docs/kits/product-edc/edc-controlplane/edc-controlplane-postgresql-hashicorp-vault/",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/kits/product-edc/edc-controlplane/edc-controlplane-postgresql-hashicorp-vault/README.md",tags:[],version:"current",frontMatter:{},sidebar:"kits",previous:{title:"EDC Control-Plane backed by [Postgresql](https://www.postgresql.org/)",permalink:"/docs/kits/product-edc/edc-controlplane/edc-controlplane-postgresql/"},next:{title:"Data Plane",permalink:"/docs/kits/product-edc/edc-dataplane/"}},d={},i=[{value:"Building",id:"building",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Example configuration.properties",id:"example-configurationproperties",level:4},{value:"Example logging.properties",id:"example-loggingproperties",level:4},{value:"Example opentelemetry.properties",id:"example-opentelemetryproperties",level:4},{value:"Running",id:"running",level:3}],c={toc:i};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"edc-control-plane-backed-by-postgresql-and-hashicorp-vault"},"EDC Control-Plane backed by ",(0,r.kt)("a",{parentName:"h1",href:"https://www.postgresql.org/"},"Postgresql")," and ",(0,r.kt)("a",{parentName:"h1",href:"https://www.vaultproject.io/docs"},"HashiCorp vault")),(0,r.kt)("h3",{id:"building"},"Building"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./mvnw -pl .,edc-controlplane/edc-controlplane-postgresql-hashicorp-vault -am package -Pwith-docker-image\n")),(0,r.kt)("h3",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Listed below are configuration keys needed to get the ",(0,r.kt)("inlineCode",{parentName:"p"},"edc-controlplane-postgresql-hashicorp-vault")," up and running.\nDetails regarding each configuration property can be found at the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eclipse-edc/Connector/tree/main/docs"},"documentary section of the EDC"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Example"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.api.auth.key"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"default value: random UUID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"web.http.default.port"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"8080"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"web.http.default.path"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"/api"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"web.http.data.port"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"8181"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"web.http.data.path"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"/data"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"web.http.validation.port"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"8182"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"web.http.validation.path"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"/validation"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"web.http.control.port"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"9999"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"web.http.control.path"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"/api/controlplane/control"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"web.http.ids.port"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"8282"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"web.http.ids.path"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"/api/v1/ids"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.receiver.http.endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://backend-service"},"http://backend-service")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.ids.title"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Eclipse Dataspace Connector"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.ids.description"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Eclipse Dataspace Connector"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.ids.id"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"urn:connector:edc"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.ids.security.profile"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"base"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.ids.endpoint"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://localhost:8282/api/v1/ids"},"http://localhost:8282/api/v1/ids")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.ids.maintainer"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://localhost"},"http://localhost")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.ids.curator"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://localhost"},"http://localhost")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.ids.catalog.id"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"urn:catalog:default"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ids.webhook.address"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://localhost:8282/api/v1/ids"},"http://localhost:8282/api/v1/ids")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.hostname"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"localhost"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.oauth.token.url"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://daps.catena-x.net"},"https://daps.catena-x.net")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.oauth.public.key.alias"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"key-to-daps-certificate-in-keyvault"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.oauth.private.key.alias"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"key-to-private-key-in-keyvault"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.oauth.client.id"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"daps-oauth-client-id"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.vault.hashicorp.url"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://vault"},"http://vault")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.vault.hashicorp.token"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"55555555-6666-7777-8888-999999999999"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.vault.hashicorp.timeout.seconds"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"30"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.datasource.asset.name"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"asset"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.datasource.asset.url"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"jdbc:postgresql://postgres.svc.cluster.local:5432/edc_asset_db"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.datasource.asset.user"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.datasource.asset.password"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.datasource.contractdefinition.name"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"contractdefinition"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.datasource.contractdefinition.url"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"jdbc:postgresql://postgres.svc.cluster.local:5432/edc_contractdefinition_db"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.datasource.contractdefinition.user"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.datasource.contractdefinition.password"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.datasource.contractnegotiation.name"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"contractnegotiation"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.datasource.contractnegotiation.url"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"jdbc:postgresql://postgres.svc.cluster.local:5432/edc_contractnegotiation_db"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.datasource.contractnegotiation.user"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.datasource.contractnegotiation.password"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.datasource.policy.name"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"policy"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.datasource.policy.url"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"jdbc:postgresql://postgres.svc.cluster.local:5432/edc_policy_db"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.datasource.policy.user"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.datasource.policy.password"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.datasource.transferprocess.name"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"transferprocess"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.datasource.transferprocess.url"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"jdbc:postgresql://postgres.svc.cluster.local:5432/edc_transferprocess_db"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.datasource.transferprocess.user"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.datasource.transferprocess.password"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.transfer.proxy.endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://proxy"},"http://proxy")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edc.transfer.proxy.token.signer.privatekey.alias"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"example-configurationproperties"},"Example configuration.properties"),(0,r.kt)("p",null,"JDK properties-style configuration of the EDC Control-Plane is expected to be mounted to ",(0,r.kt)("inlineCode",{parentName:"p"},"/app/configuration.properties")," within the container."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Create configuration.properties\nexport CONFIGURATION_PROPERTIES_FILE=$(mktemp /tmp/configuration.properties.XXXXXX)\ncat << 'EOF' > ${CONFIGURATION_PROPERTIES_FILE}\n\nweb.http.default.port=8080\nweb.http.default.path=/api\nweb.http.data.port=8181\nweb.http.data.path=/data\nweb.http.validation.port=8182\nweb.http.validation.path=/validation\nweb.http.control.port=9999\nweb.http.control.path=/api/controlplane/control\nweb.http.ids.port=8282\nweb.http.ids.path=/api/v1/ids\n\nedc.receiver.http.endpoint=http://backend-service\n\nedc.ids.title=Eclipse Dataspace Connector\nedc.ids.description=Eclipse Dataspace Connector\nedc.ids.id=urn:connector:edc\nedc.ids.security.profile=base\nedc.ids.endpoint=http://localhost:8282/api/v1/ids\nedc.ids.maintainer=http://localhost\nedc.ids.curator=http://localhost\nedc.ids.catalog.id=urn:catalog:default\nids.webhook.address=http://localhost:8282/api/v1/ids\n\nedc.hostname=localhost\n\nedc.api.auth.key=password\n\n# OAuth / DAPS related configuration\nedc.oauth.token.url=https://daps.catena-x.net\nedc.oauth.public.key.alias=key-to-daps-certificate-in-keyvault\nedc.oauth.private.key.alias=key-to-private-key-in-keyvault\nedc.oauth.client.id=daps-oauth-client-id\n\n# HashiCorp vault related configuration\nedc.vault.hashicorp.url=http://vault\nedc.vault.hashicorp.token=55555555-6666-7777-8888-999999999999\nedc.vault.hashicorp.timeout.seconds=30\n\n# Control- / Data- Plane configuration\nedc.transfer.proxy.endpoint=http://dataplane-public-endpoint/public\nedc.transfer.proxy.token.signer.privatekey.alias=token-signer-private-key\n\n# Postgresql related configuration\nedc.datasource.asset.name=asset\nedc.datasource.asset.url=jdbc:postgresql://postgres.svc.cluster.local:5432/edc_asset\nedc.datasource.asset.user=user\nedc.datasource.asset.password=pass\nedc.datasource.contractdefinition.name=contractdefinition\nedc.datasource.contractdefinition.url=jdbc:postgresql://postgres.svc.cluster.local:5432/edc_contractdefinition\nedc.datasource.contractdefinition.user=user\nedc.datasource.contractdefinition.password=pass\nedc.datasource.contractnegotiation.name=contractnegotiation\nedc.datasource.contractnegotiation.url=jdbc:postgresql://postgres.svc.cluster.local:5432/edc_contractnegotiation\nedc.datasource.contractnegotiation.user=user\nedc.datasource.contractnegotiation.password=pass\nedc.datasource.policy.name=policy\nedc.datasource.policy.url=jdbc:postgresql://postgres.svc.cluster.local:5432/edc_policy\nedc.datasource.policy.user=user\nedc.datasource.policy.password=pass\nedc.datasource.transferprocess.name=transferprocess\nedc.datasource.transferprocess.url=jdbc:postgresql://postgres.svc.cluster.local:5432/edc_transferprocess\nedc.datasource.transferprocess.user=user\nedc.datasource.transferprocess.password=pass\nEOF\n")),(0,r.kt)("h4",{id:"example-loggingproperties"},"Example logging.properties"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Create logging.properties\nexport LOGGING_PROPERTIES_FILE=$(mktemp /tmp/logging.properties.XXXXXX)\ncat << 'EOF' > ${LOGGING_PROPERTIES_FILE}\n.level=INFO\norg.eclipse.edc.level=ALL\nhandlers=java.util.logging.ConsoleHandler\njava.util.logging.ConsoleHandler.formatter=java.util.logging.SimpleFormatter\njava.util.logging.ConsoleHandler.level=ALL\njava.util.logging.SimpleFormatter.format=[%1$tY-%1$tm-%1$td %1$tH:%1$tM:%1$tS] [%4$-7s] %5$s%6$s%n\nEOF\n")),(0,r.kt)("h4",{id:"example-opentelemetryproperties"},"Example opentelemetry.properties"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Create opentelemetry.properties\nexport OPENTELEMETRY_PROPERTIES_FILE=$(mktemp /tmp/opentelemetry.properties.XXXXXX)\ncat << 'EOF' > ${OPENTELEMETRY_PROPERTIES_FILE}\notel.javaagent.enabled=false\notel.javaagent.debug=false\nEOF\n")),(0,r.kt)("h3",{id:"running"},"Running"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run \\\n  -p 8080:8080 -p 8181:8181 -p 8182:8182 -p 8282:8282 -p 9090:9090 -p 9999:9999 \\\n  -v ${CONFIGURATION_PROPERTIES_FILE:-/dev/null}:/app/configuration.properties \\\n  -v ${LOGGING_PROPERTIES_FILE:-/dev/null}:/app/logging.properties \\\n  -v ${OPENTELEMETRY_PROPERTIES_FILE:-/dev/null}:/app/opentelemetry.properties \\\n  -i edc-controlplane-postgresql-hashicorp-vault:latest\n")))}s.isMDXComponent=!0}}]);