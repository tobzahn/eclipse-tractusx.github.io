"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[43043],{7715:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>k,frontMatter:()=>d,metadata:()=>y,toc:()=>x});var i=a(87462),l=(a(67294),a(3905)),n=a(26389),s=a(94891),m=a(75190),p=a(47507),o=a(24310),r=a(63303),c=(a(75035),a(85162));const d={id:"get-contract-definition",title:"getContractDefinition",description:"Gets an contract definition with the given ID",sidebar_label:"getContractDefinition",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Contract Definition"],description:"Gets an contract definition with the given ID",operationId:"getContractDefinition",parameters:[{name:"id",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string",example:null}}],responses:{200:{description:"The contract definition",content:{"application/json":{schema:{type:"object",properties:{"@context":{type:"object",example:null},"@id":{type:"string",example:null},"@type":{type:"string",example:null},accessPolicyId:{type:"string",example:null},assetsSelector:{type:"array",example:null,items:{type:"object",properties:{"@context":{type:"object",example:null},"@type":{type:"string",example:null},operandLeft:{type:"object",example:null},operandRight:{type:"object",example:null},operator:{type:"string",example:null}},example:null,title:"CriterionDto"}},contractPolicyId:{type:"string",example:null},createdAt:{type:"integer",format:"int64",example:null}},example:null,title:"ContractDefinitionResponseDto"}}}},400:{description:"Request was malformed, e.g. id was null",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null,title:"ApiErrorDetail"}}}}},404:{description:"An contract agreement with the given ID does not exist",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null,title:"ApiErrorDetail"}}}}}},method:"get",path:"/v2/contractdefinitions/{id}",servers:[{url:"/"}],info:{title:"management-api",description:"REST API documentation for the management-api",version:"0.1.3-SNAPSHOT"},postman:{name:"get Contract Definition",description:{content:"Gets an contract definition with the given ID",type:"text/plain"},url:{path:["v2","contractdefinitions",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/management-api",custom_edit_url:null},u=void 0,y={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/get-contract-definition",id:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/get-contract-definition",title:"getContractDefinition",description:"Gets an contract definition with the given ID",source:"@site/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/get-contract-definition.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/get-contract-definition",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/get-contract-definition",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-contract-definition",title:"getContractDefinition",description:"Gets an contract definition with the given ID",sidebar_label:"getContractDefinition",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Contract Definition"],description:"Gets an contract definition with the given ID",operationId:"getContractDefinition",parameters:[{name:"id",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string",example:null}}],responses:{200:{description:"The contract definition",content:{"application/json":{schema:{type:"object",properties:{"@context":{type:"object",example:null},"@id":{type:"string",example:null},"@type":{type:"string",example:null},accessPolicyId:{type:"string",example:null},assetsSelector:{type:"array",example:null,items:{type:"object",properties:{"@context":{type:"object",example:null},"@type":{type:"string",example:null},operandLeft:{type:"object",example:null},operandRight:{type:"object",example:null},operator:{type:"string",example:null}},example:null,title:"CriterionDto"}},contractPolicyId:{type:"string",example:null},createdAt:{type:"integer",format:"int64",example:null}},example:null,title:"ContractDefinitionResponseDto"}}}},400:{description:"Request was malformed, e.g. id was null",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null,title:"ApiErrorDetail"}}}}},404:{description:"An contract agreement with the given ID does not exist",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null,title:"ApiErrorDetail"}}}}}},method:"get",path:"/v2/contractdefinitions/{id}",servers:[{url:"/"}],info:{title:"management-api",description:"REST API documentation for the management-api",version:"0.1.3-SNAPSHOT"},postman:{name:"get Contract Definition",description:{content:"Gets an contract definition with the given ID",type:"text/plain"},url:{path:["v2","contractdefinitions",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/management-api",custom_edit_url:null},sidebar:"kits",previous:{title:"getAsset",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/get-asset"},next:{title:"getLiveness",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/get-liveness"}},g={},x=[{value:"getContractDefinition",id:"getcontractdefinition",level:2}],h={toc:x};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"getcontractdefinition"},"getContractDefinition"),(0,l.kt)("p",null,"Gets an contract definition with the given ID"),(0,l.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"Path Parameters")),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)(m.Z,{className:"paramsItem",param:{name:"id",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string",example:null}},mdxType:"ParamsItem"})))),(0,l.kt)("div",null,(0,l.kt)(n.Z,{mdxType:"ApiTabs"},(0,l.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"The contract definition")),(0,l.kt)("div",null,(0,l.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(r.Z,{mdxType:"SchemaTabs"},(0,l.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(o.Z,{collapsible:!1,name:"@context",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"object",example:null},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"@id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"@type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"accessPolicyId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"assetsSelector"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(o.Z,{collapsible:!1,name:"@context",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"object",example:null},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"@type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"operandLeft",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"object",example:null},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"operandRight",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"object",example:null},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"operator",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(o.Z,{collapsible:!1,name:"contractPolicyId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",example:null},mdxType:"SchemaItem"})))),(0,l.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(p.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Request was malformed, e.g. id was null")),(0,l.kt)("div",null,(0,l.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(r.Z,{mdxType:"SchemaTabs"},(0,l.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(o.Z,{collapsible:!1,name:"invalidValue",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"object",example:null},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"path",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(p.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(c.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"An contract agreement with the given ID does not exist")),(0,l.kt)("div",null,(0,l.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(r.Z,{mdxType:"SchemaTabs"},(0,l.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(o.Z,{collapsible:!1,name:"invalidValue",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"object",example:null},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"path",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(o.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(p.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);