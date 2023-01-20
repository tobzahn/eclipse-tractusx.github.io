"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[6287],{78202:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>v,frontMatter:()=>l,metadata:()=>m,toc:()=>b});var r=s(87462),a=(s(67294),s(3905)),n=s(26389),i=s(94891),o=(s(75190),s(47507)),p=s(24310),d=s(63303),c=(s(75035),s(85162));const l={id:"export",title:"Index new business partner records on OpenSearch",description:"Triggers an asynchronous export of business partner records from BPDM to OpenSearch. Only exports records which have been updated since the last export.",sidebar_label:"Index new business partner records on OpenSearch",hide_title:!0,hide_table_of_contents:!0,api:{tags:["open-search-controller"],description:"Triggers an asynchronous export of business partner records from BPDM to OpenSearch. Only exports records which have been updated since the last export. ",operationId:"export",responses:{200:{description:"Export of records successfully",content:{"*/*":{schema:{type:"object",properties:{type:{type:"string",enum:["OPENSEARCH","CDQ_IMPORT"]},status:{type:"string",enum:["NOT_SYNCED","RUNNING","SUCCESS","ERROR"]},count:{type:"integer",format:"int32"},progress:{type:"number",format:"float"},errorDetails:{type:"string"},startedAt:{type:"string",format:"date-time"},finishedAt:{type:"string",format:"date-time"}}}}}},500:{description:"Export failed (no connection to OpenSearch or database)"}},method:"post",path:"/api/opensearch/business-partner",servers:[{url:"http://127.0.0.1:8080",description:"Generated server url"}],info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"3.0.0"},postman:{name:"Index new business partner records on OpenSearch",description:{content:"Triggers an asynchronous export of business partner records from BPDM to OpenSearch. Only exports records which have been updated since the last export. ",type:"text/plain"},url:{path:["api","opensearch","business-partner"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"POST"}},sidebar_class_name:"post api-method",info_path:"./docs/kits/Business Partner Kit/Software Development View//business-partner-data-management-pool",custom_edit_url:null},u=void 0,m={unversionedId:"kits/Business Partner Kit/Software Development View/export",id:"kits/Business Partner Kit/Software Development View/export",title:"Index new business partner records on OpenSearch",description:"Triggers an asynchronous export of business partner records from BPDM to OpenSearch. Only exports records which have been updated since the last export.",source:"@site/docs/kits/Business Partner Kit/Software Development View/export.api.mdx",sourceDirName:"kits/Business Partner Kit/Software Development View",slug:"/kits/Business Partner Kit/Software Development View/export",permalink:"/docs/kits/Business Partner Kit/Software Development View/export",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"export",title:"Index new business partner records on OpenSearch",description:"Triggers an asynchronous export of business partner records from BPDM to OpenSearch. Only exports records which have been updated since the last export.",sidebar_label:"Index new business partner records on OpenSearch",hide_title:!0,hide_table_of_contents:!0,api:{tags:["open-search-controller"],description:"Triggers an asynchronous export of business partner records from BPDM to OpenSearch. Only exports records which have been updated since the last export. ",operationId:"export",responses:{200:{description:"Export of records successfully",content:{"*/*":{schema:{type:"object",properties:{type:{type:"string",enum:["OPENSEARCH","CDQ_IMPORT"]},status:{type:"string",enum:["NOT_SYNCED","RUNNING","SUCCESS","ERROR"]},count:{type:"integer",format:"int32"},progress:{type:"number",format:"float"},errorDetails:{type:"string"},startedAt:{type:"string",format:"date-time"},finishedAt:{type:"string",format:"date-time"}}}}}},500:{description:"Export failed (no connection to OpenSearch or database)"}},method:"post",path:"/api/opensearch/business-partner",servers:[{url:"http://127.0.0.1:8080",description:"Generated server url"}],info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"3.0.0"},postman:{name:"Index new business partner records on OpenSearch",description:{content:"Triggers an asynchronous export of business partner records from BPDM to OpenSearch. Only exports records which have been updated since the last export. ",type:"text/plain"},url:{path:["api","opensearch","business-partner"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"POST"}},sidebar_class_name:"post api-method",info_path:"./docs/kits/Business Partner Kit/Software Development View//business-partner-data-management-pool",custom_edit_url:null},sidebar:"kits",previous:{title:"Create new site business partners",permalink:"/docs/kits/Business Partner Kit/Software Development View/create-site"},next:{title:"Find business partner numbers by identifiers",permalink:"/docs/kits/Business Partner Kit/Software Development View/find-bpns-by-identifiers"}},h={},b=[{value:"Index new business partner records on OpenSearch",id:"index-new-business-partner-records-on-opensearch",level:2}],f={toc:b};function v(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"index-new-business-partner-records-on-opensearch"},"Index new business partner records on OpenSearch"),(0,a.kt)("p",null,"Triggers an asynchronous export of business partner records from BPDM to OpenSearch. Only exports records which have been updated since the last export. "),(0,a.kt)("div",null,(0,a.kt)(n.Z,{mdxType:"ApiTabs"},(0,a.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Export of records successfully")),(0,a.kt)("div",null,(0,a.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(c.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,a.kt)(d.Z,{mdxType:"SchemaTabs"},(0,a.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(p.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`OPENSEARCH`, `CDQ_IMPORT`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`NOT_SYNCED`, `RUNNING`, `SUCCESS`, `ERROR`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"count",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"progress",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"float",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"errorDetails",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"startedAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(p.Z,{collapsible:!1,name:"finishedAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,a.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(o.Z,{responseExample:'{\n  "type": "OPENSEARCH",\n  "status": "NOT_SYNCED",\n  "count": 0,\n  "progress": 0,\n  "errorDetails": "string",\n  "startedAt": "2023-01-19",\n  "finishedAt": "2023-01-19"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(c.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Export failed (no connection to OpenSearch or database)")),(0,a.kt)("div",null)))))}v.isMDXComponent=!0}}]);