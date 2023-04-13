"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[2209],{96387:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>k,frontMatter:()=>c,metadata:()=>g,toc:()=>v});var s=a(87462),i=(a(67294),a(3905)),r=a(26389),n=a(94891),p=a(75190),o=a(47507),d=a(24310),l=a(63303),m=(a(75035),a(85162));const c={id:"get-transfer-process",title:"getTransferProcess",description:"Gets an transfer process with the given ID",sidebar_label:"getTransferProcess",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Transfer Process"],description:"Gets an transfer process with the given ID",operationId:"getTransferProcess",parameters:[{name:"id",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string"}}],responses:{200:{description:"The transfer process",content:{"application/json":{schema:{type:"object",properties:{createdAt:{type:"integer",format:"int64"},dataDestination:{type:"object",properties:{properties:{type:"object",additionalProperties:{type:"string"}}}},dataRequest:{type:"object",properties:{assetId:{type:"string"},connectorId:{type:"string"},contractId:{type:"string"},id:{type:"string"}}},errorDetail:{type:"string"},id:{type:"string"},state:{type:"string"},stateTimestamp:{type:"integer",format:"int64"},type:{type:"string"},updatedAt:{type:"integer",format:"int64"}}}}}},400:{description:"Request was malformed, e.g. id was null",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{invalidValue:{type:"string"},message:{type:"string"},path:{type:"string"},type:{type:"string"}}}}}}},404:{description:"A transfer process with the given ID does not exist",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{invalidValue:{type:"string"},message:{type:"string"},path:{type:"string"},type:{type:"string"}}}}}}}},method:"get",path:"/transferprocess/{id}",servers:[{url:"/"}],info:{title:"management-api",description:"REST API documentation for the management-api",version:"0.0.1-SNAPSHOT"},postman:{name:"get Transfer Process",description:{content:"Gets an transfer process with the given ID",type:"text/plain"},url:{path:["transferprocess",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"./docs/kits/product-edc/docs/kit/development-view/openAPI/management-api/management-api",custom_edit_url:null},u=void 0,g={unversionedId:"kits/product-edc/docs/kit/development-view/openAPI/management-api/get-transfer-process",id:"kits/product-edc/docs/kit/development-view/openAPI/management-api/get-transfer-process",title:"getTransferProcess",description:"Gets an transfer process with the given ID",source:"@site/docs/kits/product-edc/docs/kit/development-view/openAPI/management-api/get-transfer-process.api.mdx",sourceDirName:"kits/product-edc/docs/kit/development-view/openAPI/management-api",slug:"/kits/product-edc/docs/kit/development-view/openAPI/management-api/get-transfer-process",permalink:"/docs/kits/product-edc/docs/kit/development-view/openAPI/management-api/get-transfer-process",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-transfer-process",title:"getTransferProcess",description:"Gets an transfer process with the given ID",sidebar_label:"getTransferProcess",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Transfer Process"],description:"Gets an transfer process with the given ID",operationId:"getTransferProcess",parameters:[{name:"id",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string"}}],responses:{200:{description:"The transfer process",content:{"application/json":{schema:{type:"object",properties:{createdAt:{type:"integer",format:"int64"},dataDestination:{type:"object",properties:{properties:{type:"object",additionalProperties:{type:"string"}}}},dataRequest:{type:"object",properties:{assetId:{type:"string"},connectorId:{type:"string"},contractId:{type:"string"},id:{type:"string"}}},errorDetail:{type:"string"},id:{type:"string"},state:{type:"string"},stateTimestamp:{type:"integer",format:"int64"},type:{type:"string"},updatedAt:{type:"integer",format:"int64"}}}}}},400:{description:"Request was malformed, e.g. id was null",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{invalidValue:{type:"string"},message:{type:"string"},path:{type:"string"},type:{type:"string"}}}}}}},404:{description:"A transfer process with the given ID does not exist",content:{"application/json":{schema:{type:"array",items:{type:"object",properties:{invalidValue:{type:"string"},message:{type:"string"},path:{type:"string"},type:{type:"string"}}}}}}}},method:"get",path:"/transferprocess/{id}",servers:[{url:"/"}],info:{title:"management-api",description:"REST API documentation for the management-api",version:"0.0.1-SNAPSHOT"},postman:{name:"get Transfer Process",description:{content:"Gets an transfer process with the given ID",type:"text/plain"},url:{path:["transferprocess",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"./docs/kits/product-edc/docs/kit/development-view/openAPI/management-api/management-api",custom_edit_url:null},sidebar:"kits",previous:{title:"getTransferProcessState",permalink:"/docs/kits/product-edc/docs/kit/development-view/openAPI/management-api/get-transfer-process-state"},next:{title:"initiateContractNegotiation",permalink:"/docs/kits/product-edc/docs/kit/development-view/openAPI/management-api/initiate-contract-negotiation"}},y={},v=[{value:"getTransferProcess",id:"gettransferprocess",level:2}],h={toc:v};function k(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,s.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"gettransferprocess"},"getTransferProcess"),(0,i.kt)("p",null,"Gets an transfer process with the given ID"),(0,i.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(p.Z,{className:"paramsItem",param:{name:"id",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"The transfer process")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"createdAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"dataDestination"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"properties"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("code",null,"property name*"),(0,i.kt)("span",{style:{opacity:"0.6"}}," string"))))))))),(0,i.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"dataRequest"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"assetId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"connectorId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"contractId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(d.Z,{collapsible:!1,name:"errorDetail",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"state",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"stateTimestamp",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"updatedAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "createdAt": 0,\n  "dataDestination": {\n    "properties": {}\n  },\n  "dataRequest": {\n    "assetId": "string",\n    "connectorId": "string",\n    "contractId": "string",\n    "id": "string"\n  },\n  "errorDetail": "string",\n  "id": "string",\n  "state": "string",\n  "stateTimestamp": 0,\n  "type": "string",\n  "updatedAt": 0\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(m.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Request was malformed, e.g. id was null")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema"),(0,i.kt)("span",{style:{opacity:"0.6"}}," array")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'[\n  {\n    "invalidValue": "string",\n    "message": "string",\n    "path": "string",\n    "type": "string"\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(m.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"A transfer process with the given ID does not exist")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(l.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema"),(0,i.kt)("span",{style:{opacity:"0.6"}}," array")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(d.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,i.kt)(d.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'[\n  {\n    "invalidValue": "string",\n    "message": "string",\n    "path": "string",\n    "type": "string"\n  }\n]',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);