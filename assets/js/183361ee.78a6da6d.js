"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[2170],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||o;return n?i.createElement(m,r(r({ref:t},c),{},{components:n})):i.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},60289:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));const o={id:"Operation View",title:"Operation View",description:"Business Partner Kit",sidebar_position:3},r=void 0,l={unversionedId:"kits/Business Partner Kit/Operation View",id:"kits/Business Partner Kit/Operation View",title:"Operation View",description:"Business Partner Kit",source:"@site/docs/kits/Business Partner Kit/page_software-operation-view.md",sourceDirName:"kits/Business Partner Kit",slug:"/kits/Business Partner Kit/Operation View",permalink:"/docs/kits/Business Partner Kit/Operation View",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/kits/Business Partner Kit/page_software-operation-view.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"Operation View",title:"Operation View",description:"Business Partner Kit",sidebar_position:3},sidebar:"kits",previous:{title:"Adoption View",permalink:"/docs/kits/Business Partner Kit/Adoption View"},next:{title:"Documentation",permalink:"/docs/kits/Business Partner Kit/documentation"}},p={},s=[{value:"Business Partner Kit",id:"business-partner-kit",level:3},{value:"Installation Instructions",id:"installation-instructions",level:2},{value:"BPDM Pool",id:"bpdm-pool",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Profiles",id:"profiles",level:3},{value:"Auth",id:"auth",level:3},{value:"SaaS",id:"saas",level:3},{value:"Helm Deployment",id:"helm-deployment",level:3},{value:"BPDM Gate",id:"bpdm-gate",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Profiles",id:"profiles-1",level:3},{value:"Auth",id:"auth-1",level:3},{value:"Pool-Auth",id:"pool-auth",level:3},{value:"Helm Deployment",id:"helm-deployment-1",level:3}],c={toc:s};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Business partner kit banner",src:n(20140).Z,width:"285",height:"244"})),(0,a.kt)("h3",{id:"business-partner-kit"},"Business Partner Kit"),(0,a.kt)("h2",{id:"installation-instructions"},"Installation Instructions"),(0,a.kt)("p",null,"This file contains information on how to configure and run the BPDM applications."),(0,a.kt)("h2",{id:"bpdm-pool"},"BPDM Pool"),(0,a.kt)("p",null,"BPDM Pool is a SpringBoot Kotlin software project managed by Maven."),(0,a.kt)("p",null,"The project can be run with the following command: ",(0,a.kt)("inlineCode",{parentName:"p"},"mvn clean spring-boot:run")),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Maven"),(0,a.kt)("li",{parentName:"ul"},"JDK17"),(0,a.kt)("li",{parentName:"ul"},"PostgreSQL 14.2"),(0,a.kt)("li",{parentName:"ul"},"OpenSearch 2.1.0"),(0,a.kt)("li",{parentName:"ul"},"Keycloak 17.0.0 (with enabled ",(0,a.kt)("inlineCode",{parentName:"li"},"auth")," profile)"),(0,a.kt)("li",{parentName:"ul"},"Connection to an SaaS for the sharing process (with enabled ",(0,a.kt)("inlineCode",{parentName:"li"},"saas")," profile)")),(0,a.kt)("p",null,"When running, the project requires a Postgresql database and an Opensearch instance to be available to connect to.\nPer default configuration the application expects postgres to run on ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," on port ",(0,a.kt)("inlineCode",{parentName:"p"},"5432"),".\nOpensearch needs to run on ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," on port ",(0,a.kt)("inlineCode",{parentName:"p"},"9200")," on default."),(0,a.kt)("p",null,"You can find and edit the default configuration for the Pool in the ",(0,a.kt)("inlineCode",{parentName:"p"},"application.properties"),",  ",(0,a.kt)("inlineCode",{parentName:"p"},"application-auth.properties")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"application-saas.properties"),"\nfiles in the ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," folder."),(0,a.kt)("p",null,"The REST API documentation can be accessed at ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/api/swagger-ui"),"."),(0,a.kt)("h3",{id:"profiles"},"Profiles"),(0,a.kt)("p",null,"The default configuration of the application is determined by the ",(0,a.kt)("inlineCode",{parentName:"p"},"application.properties")," file.\nHere you can find core application configuration such as Swagger documentation, BPN generation and Actuator.\nFurthermore, here you can find the configuration for the connection to the Spring datasource (currently, developed against PostgreSQL) and Opensearch."),(0,a.kt)("p",null,"You can also run the project with Spring profiles to enable additional components on top of the default configuration.\nCurrently, the BPDM Pool offers the profiles ",(0,a.kt)("inlineCode",{parentName:"p"},"auth")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"saas"),".\nIn order to run the application with a specific profile you can use the appropriate maven flag ",(0,a.kt)("inlineCode",{parentName:"p"},"Dspring.profiles.active"),"."),(0,a.kt)("p",null,"For example, the command ",(0,a.kt)("inlineCode",{parentName:"p"},"mvn clean spring-boot:run -Dspring.profiles.active=auth")," starts the application with additional ",(0,a.kt)("inlineCode",{parentName:"p"},"auth")," configuration enabled.\nYou can also run several profiles at once, of course: ",(0,a.kt)("inlineCode",{parentName:"p"},"mvn clean spring-boot:run -Dspring.profiles.active=auth,saas"),"."),(0,a.kt)("p",null,"The following sections detail the configuration properties for each profile."),(0,a.kt)("h3",{id:"auth"},"Auth"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"application-auth.properties")," enables authorization of endpoints and configures the connection to a Keycloak instance on which the authorization relies on.\nThe application expects the Keycloak to run on ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," on port ",(0,a.kt)("inlineCode",{parentName:"p"},"8180"),".\nHowever, as with the Spring datasource and Opensearch connections, the connection to the Keycloak can be freely configured.\nThe application uses the configured auth server URL to validate incoming tokens."),(0,a.kt)("p",null,"For authorization purposes the application checks incoming token's permissions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"add_company_data: For endpoints creating or updating business partner records including triggering imports from SaaS/exports to Opensearch"),(0,a.kt)("li",{parentName:"ul"},"view_company_data: For read-only endpoints of business partner data")),(0,a.kt)("p",null,"The BPDM Pool looks for these permissions in the client/resource and not on the realm level."),(0,a.kt)("p",null,"This profile also enables/disables the login form in the auto-generated Swagger documentation.\nThe Swagger login uses the client specified in the property ",(0,a.kt)("inlineCode",{parentName:"p"},"springdoc.swagger-ui.oauth.client-id"),"."),(0,a.kt)("h3",{id:"saas"},"SaaS"),(0,a.kt)("p",null,"The file ",(0,a.kt)("inlineCode",{parentName:"p"},"application-saas.properties")," enables and configures the connection to a remote SaaS for the sharing process from which the application can import\nbusiness partner records.\nDepending on whether this component is enabled, the application offers an endpoint to import records from SaaS.\nIf enabled the application requires the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"BPDM_SAAS_KEY")," to contain an API key with necessary privileges for accessing the specified\nstorage.\nFurther, you need to provide a hostname (",(0,a.kt)("inlineCode",{parentName:"p"},"BPDM_SAAS_HOST"),"), storage ID (",(0,a.kt)("inlineCode",{parentName:"p"},"BPDM_SAAS_STORAGE"),") and datasource ID ",(0,a.kt)("inlineCode",{parentName:"p"},"BPDM_SAAS_DATASOURCE")," to specify from where the records\nshould be imported by the application."),(0,a.kt)("h3",{id:"helm-deployment"},"Helm Deployment"),(0,a.kt)("p",null,"This repository contains Helm files for deploying the BPDM Pool to a Kubernetes environment.\nSee the ",(0,a.kt)("a",{parentName:"p",href:"charts/pool/README.md"},"BPDM Pool Helm README")," for details."),(0,a.kt)("h2",{id:"bpdm-gate"},"BPDM Gate"),(0,a.kt)("p",null,"BPDM is a SpringBoot Kotlin software project managed by Maven and can be run with the following command: ",(0,a.kt)("inlineCode",{parentName:"p"},"mvn clean spring-boot:run")),(0,a.kt)("h3",{id:"prerequisites-1"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Maven"),(0,a.kt)("li",{parentName:"ul"},"JDK17"),(0,a.kt)("li",{parentName:"ul"},"Connection to an SaaS for the sharing process"),(0,a.kt)("li",{parentName:"ul"},"Connection to BPDM Pool API"),(0,a.kt)("li",{parentName:"ul"},"Keycloak 17.0.0 (with enabled ",(0,a.kt)("inlineCode",{parentName:"li"},"auth")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"pool-auth")," profile)")),(0,a.kt)("p",null,"When running, the BPDM Gate requires a remote SaaS storage and datasource to exchange data with. The application expects the environment variables ",(0,a.kt)("inlineCode",{parentName:"p"},"BPDM_SAAS_HOST"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"BPDM_SAAS_KEY"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"BPDM_SAAS_STORAGE")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"BPDM_SAAS_DATASOURCE")," to contain the hostname to connect to, the API key and the identifiers for the storage and datasource respectively."),(0,a.kt)("p",null,"The Gate also requires a connection to a BPDM Pool instance which is expected at ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," with port ",(0,a.kt)("inlineCode",{parentName:"p"},"8080")," on default configuration."),(0,a.kt)("p",null,"You can find and edit the default configuration for the Gate in the ",(0,a.kt)("inlineCode",{parentName:"p"},"application.properties"),",  ",(0,a.kt)("inlineCode",{parentName:"p"},"application-auth.properties"),"\nand  ",(0,a.kt)("inlineCode",{parentName:"p"},"application-pool-auth.properties")," files in the ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," folder."),(0,a.kt)("p",null,"The REST API documentation can be accessed at ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8081/api/swagger-ui"),"."),(0,a.kt)("h3",{id:"profiles-1"},"Profiles"),(0,a.kt)("p",null,"The default configuration of the application is determined by the ",(0,a.kt)("inlineCode",{parentName:"p"},"application.properties")," file.\nHere you can find core application configuration such as Swagger documentation, SaaS and BPDM Pool connection."),(0,a.kt)("p",null,"You can also run the project with Spring profiles to enable additional components on top of the default configuration.\nCurrently, the BPDM Gate offers the profiles ",(0,a.kt)("inlineCode",{parentName:"p"},"auth")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"auth-pool"),".\nIn order to run the application with a specific profile you can use the appropriate maven flag ",(0,a.kt)("inlineCode",{parentName:"p"},"Dspring.profiles.active"),"."),(0,a.kt)("p",null,"For example, the command ",(0,a.kt)("inlineCode",{parentName:"p"},"mvn clean spring-boot:run -Dspring.profiles.active=auth")," starts the application with additional ",(0,a.kt)("inlineCode",{parentName:"p"},"auth")," configuration enabled.\nYou can also run several profiles at once, of course: ",(0,a.kt)("inlineCode",{parentName:"p"},"mvn clean spring-boot:run -Dspring.profiles.active=auth,auth-pool"),"."),(0,a.kt)("p",null,"The following sections detail the configuration properties for each profile."),(0,a.kt)("h3",{id:"auth-1"},"Auth"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"application-auth.properties")," enables authorization of endpoints and configures the connection to a Keycloak instance on which the authorization relies on.\nThe application expects the Keycloak to run on ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," on port ",(0,a.kt)("inlineCode",{parentName:"p"},"8180")," and needs a client secret has to be submitted via environment\nvariable ",(0,a.kt)("inlineCode",{parentName:"p"},"BPDM_KEYCLOAK_SECRET"),".\nBut keep in mind that the connection to the Keycloak can be freely configured.\nThe application uses the configured auth server URL to validate incoming tokens."),(0,a.kt)("p",null,"For authorization purposes the application checks incoming token's permissions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"change_company_data: For endpoints adding or updating business partner data"),(0,a.kt)("li",{parentName:"ul"},"view_company_data: For endpoints reading the original unrefined business partner data"),(0,a.kt)("li",{parentName:"ul"},"view_shared_data: For endpoints reading the business partner data which has been cleaned and refined through the sharing process")),(0,a.kt)("p",null,"The BPDM Pool looks for these permissions in the client/resource and not on the realm level."),(0,a.kt)("p",null,"This profile also enables/disables the login form in the auto-generated Swagger documentation.\nThe Swagger login uses the client specified in the property ",(0,a.kt)("inlineCode",{parentName:"p"},"springdoc.swagger-ui.oauth.client-id"),"."),(0,a.kt)("h3",{id:"pool-auth"},"Pool-Auth"),(0,a.kt)("p",null,"On default configuration, the BPDM Gate expects the API of the BPDM Pool to be accessible without authorization requirements.\nIn case the Pool instance to connect to has authorization activated, you need to activate this profile.\nThe file ",(0,a.kt)("inlineCode",{parentName:"p"},"application-pool-auth.properties")," configures the oAuth2 client for connecting to a secured BPDM Pool.\nPer default, the client will try to acquire a token via client credentials flow and expects the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"BPDM_KEYCLOAK_SECRET")," to contain the\nsecret for the client."),(0,a.kt)("h3",{id:"helm-deployment-1"},"Helm Deployment"),(0,a.kt)("p",null,"This repository contains Helm files for deploying the BPDM Gate to a Kubernetes environment.\nSee the ",(0,a.kt)("a",{parentName:"p",href:"charts/gate/README.md"},"BPDM Gate Helm README")," for details."))}u.isMDXComponent=!0},20140:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/BPKitIcon-55e920e08d5706764626858aebe41780.png"}}]);