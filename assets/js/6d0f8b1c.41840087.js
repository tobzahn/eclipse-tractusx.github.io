"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[7335],{72024:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>y,contentTitle:()=>c,default:()=>h,frontMatter:()=>u,metadata:()=>g,toc:()=>b});var s=i(87462),a=(i(67294),i(3905)),n=i(26389),r=i(94891),p=i(75190),o=i(47507),l=i(24310),m=i(63303),d=(i(75035),i(85162));const u={id:"get-sites",title:"Get site partners of a legal entity",description:"Get business partners of type site belonging to a business partner of type legal entity, identified by the business partner's bpn ignoring case.",sidebar_label:"Get site partners of a legal entity",hide_title:!0,hide_table_of_contents:!0,api:{tags:["legal-entity-controller"],description:"Get business partners of type site belonging to a business partner of type legal entity, identified by the business partner's bpn ignoring case.",operationId:"getSites",parameters:[{name:"bpn",in:"path",description:"Bpn value",required:!0,schema:{type:"string"}},{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}}],responses:{200:{description:"The sites for the specified bpn",content:{"*/*":{schema:{type:"object",properties:{totalElements:{type:"integer",format:"int64"},totalPages:{type:"integer",format:"int32"},page:{type:"integer",format:"int32"},contentSize:{type:"integer",format:"int32"},content:{type:"array",items:{type:"object",properties:{bpn:{type:"string"},name:{type:"string"}},description:"Business partner of type site"}}},description:"Paginated collection of results"}}}},400:{description:"On malformed pagination request"},404:{description:"No business partner found for specified bpn"}},method:"get",path:"/api/catena/legal-entities/{bpn}/sites",servers:[{url:"http://127.0.0.1:8080",description:"Generated server url"}],info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"3.0.0"},postman:{name:"Get site partners of a legal entity",description:{content:"Get business partners of type site belonging to a business partner of type legal entity, identified by the business partner's bpn ignoring case.",type:"text/plain"},url:{path:["api","catena","legal-entities",":bpn","sites"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Number of page to get results from",type:"text/plain"},key:"page",value:""},{disabled:!1,description:{content:"Size of each page",type:"text/plain"},key:"size",value:""}],variable:[{disabled:!1,description:{content:"(Required) Bpn value",type:"text/plain"},type:"any",value:"",key:"bpn"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"./docs/kits/Business Partner Kit/Software Development View//business-partner-data-management-pool",custom_edit_url:null},c=void 0,g={unversionedId:"kits/Business Partner Kit/Software Development View/get-sites",id:"kits/Business Partner Kit/Software Development View/get-sites",title:"Get site partners of a legal entity",description:"Get business partners of type site belonging to a business partner of type legal entity, identified by the business partner's bpn ignoring case.",source:"@site/docs/kits/Business Partner Kit/Software Development View/get-sites.api.mdx",sourceDirName:"kits/Business Partner Kit/Software Development View",slug:"/kits/Business Partner Kit/Software Development View/get-sites",permalink:"/docs/kits/Business Partner Kit/Software Development View/get-sites",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-sites",title:"Get site partners of a legal entity",description:"Get business partners of type site belonging to a business partner of type legal entity, identified by the business partner's bpn ignoring case.",sidebar_label:"Get site partners of a legal entity",hide_title:!0,hide_table_of_contents:!0,api:{tags:["legal-entity-controller"],description:"Get business partners of type site belonging to a business partner of type legal entity, identified by the business partner's bpn ignoring case.",operationId:"getSites",parameters:[{name:"bpn",in:"path",description:"Bpn value",required:!0,schema:{type:"string"}},{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}}],responses:{200:{description:"The sites for the specified bpn",content:{"*/*":{schema:{type:"object",properties:{totalElements:{type:"integer",format:"int64"},totalPages:{type:"integer",format:"int32"},page:{type:"integer",format:"int32"},contentSize:{type:"integer",format:"int32"},content:{type:"array",items:{type:"object",properties:{bpn:{type:"string"},name:{type:"string"}},description:"Business partner of type site"}}},description:"Paginated collection of results"}}}},400:{description:"On malformed pagination request"},404:{description:"No business partner found for specified bpn"}},method:"get",path:"/api/catena/legal-entities/{bpn}/sites",servers:[{url:"http://127.0.0.1:8080",description:"Generated server url"}],info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"3.0.0"},postman:{name:"Get site partners of a legal entity",description:{content:"Get business partners of type site belonging to a business partner of type legal entity, identified by the business partner's bpn ignoring case.",type:"text/plain"},url:{path:["api","catena","legal-entities",":bpn","sites"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Number of page to get results from",type:"text/plain"},key:"page",value:""},{disabled:!1,description:{content:"Size of each page",type:"text/plain"},key:"size",value:""}],variable:[{disabled:!1,description:{content:"(Required) Bpn value",type:"text/plain"},type:"any",value:"",key:"bpn"}]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"./docs/kits/Business Partner Kit/Software Development View//business-partner-data-management-pool",custom_edit_url:null},sidebar:"kits",previous:{title:"Get site partners by bpn",permalink:"/docs/kits/Business Partner Kit/Software Development View/get-site"},next:{title:"Find best matches for given text in business statuses",permalink:"/docs/kits/Business Partner Kit/Software Development View/get-status-suggestion"}},y={},b=[{value:"Get site partners of a legal entity",id:"get-site-partners-of-a-legal-entity",level:2}],f={toc:b};function h(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,s.Z)({},f,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"get-site-partners-of-a-legal-entity"},"Get site partners of a legal entity"),(0,a.kt)("p",null,"Get business partners of type site belonging to a business partner of type legal entity, identified by the business partner's bpn ignoring case."),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(p.Z,{className:"paramsItem",param:{name:"bpn",in:"path",description:"Bpn value",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Query Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(p.Z,{className:"paramsItem",param:{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},mdxType:"ParamsItem"}),(0,a.kt)(p.Z,{className:"paramsItem",param:{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(n.Z,{mdxType:"ApiTabs"},(0,a.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"The sites for the specified bpn")),(0,a.kt)("div",null,(0,a.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(d.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,a.kt)(m.Z,{mdxType:"SchemaTabs"},(0,a.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"totalElements",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"totalPages",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"page",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"contentSize",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,a.kt)("details",{style:{}},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"content"),(0,a.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,a.kt)("div",{style:{marginLeft:"1rem"}},(0,a.kt)(l.Z,{collapsible:!1,name:"bpn",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,a.kt)(l.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,a.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,a.kt)(o.Z,{responseExample:'{\n  "totalElements": 0,\n  "totalPages": 0,\n  "page": 0,\n  "contentSize": 0,\n  "content": [\n    {\n      "bpn": "string",\n      "name": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,a.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"On malformed pagination request")),(0,a.kt)("div",null)),(0,a.kt)(d.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"No business partner found for specified bpn")),(0,a.kt)("div",null)))))}h.isMDXComponent=!0}}]);