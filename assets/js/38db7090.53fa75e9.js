"use strict";(self.webpackChunkopenfga_dev=self.webpackChunkopenfga_dev||[]).push([[1649],{17298:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=i(87462),n=(i(67294),i(3905)),a=i(5270);const r={sidebar_position:10,slug:"/modeling/migrating-relations"},l="Migrating Relations",s={unversionedId:"content/modeling/migrating-relations",id:"content/modeling/migrating-relations",title:"Migrating Relations",description:"In the lifecycle of software development, you will need to make updates or changes to the . In this guide, you will learn best practices for changing your existing authorization model. With these recommendations, you will minimize downtime and ensure your relationship models stay up to date.",source:"@site/docs/content/modeling/migrating-relations.mdx",sourceDirName:"content/modeling",slug:"/modeling/migrating-relations",permalink:"/docs/modeling/migrating-relations",draft:!1,editUrl:"https://github.com/openfga/openfga.dev/edit/main/docs/content/modeling/migrating-relations.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,slug:"/modeling/migrating-relations"},sidebar:"docs",previous:{title:"Authorization Through Organization Context",permalink:"/docs/modeling/organization-context-authorization"},next:{title:"Building Blocks",permalink:"/docs/modeling/building-blocks"}},d={},p=[{value:"Before You Start",id:"before-you-start",level:2},{value:"Step By Step",id:"step-by-step",level:2},{value:"01. Create A Backwards Compatible Model",id:"01-create-a-backwards-compatible-model",level:3},{value:"02. Create a New Relationship Tuple",id:"02-create-a-new-relationship-tuple",level:3},{value:"03. Migrate The Existing Relationship Tuples",id:"03-migrate-the-existing-relationship-tuples",level:3},{value:"04. Remove Obsolete Relationship From The Model",id:"04-remove-obsolete-relationship-from-the-model",level:3},{value:"Related Sections",id:"related-sections",level:2}],u={toc:p};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"migrating-relations"},"Migrating Relations"),(0,n.kt)(a.AH,{mdxType:"DocumentationNotice"}),(0,n.kt)("p",null,"In the lifecycle of software development, you will need to make updates or changes to the ",(0,n.kt)(a.uH,{section:"what-is-an-authorization-model",linkName:"authorization model",mdxType:"ProductConcept"}),". In this guide, you will learn best practices for changing your existing authorization model. With these recommendations, you will minimize downtime and ensure your relationship models stay up to date."),(0,n.kt)("h2",{id:"before-you-start"},"Before You Start"),(0,n.kt)("p",null,"This guide assumes you are familiar with the following OpenFGA concepts:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)(a.uH,{section:"what-is-a-type",linkName:"Type",mdxType:"ProductConcept"}),": a class of objects that have similar characteristics"),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)(a.uH,{section:"what-is-a-user",linkName:"User",mdxType:"ProductConcept"}),": an entity in the system that can be related to an object"),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)(a.uH,{section:"what-is-a-relation",linkName:"Relation",mdxType:"ProductConcept"}),": is a string defined in the type definition of an authorization model that defines the possibility of a relationship between an object of the same type as the type definition and a user in the system"),(0,n.kt)("li",{parentName:"ul"},"An ",(0,n.kt)(a.uH,{section:"what-is-an-object",linkName:"Object",mdxType:"ProductConcept"}),": represents an entity in the system. Users' relationships to it can be define through relationship tuples and the authorization model"),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)(a.uH,{section:"what-is-a-relationship-tuple",linkName:"Relationship Tuple",mdxType:"ProductConcept"}),": a grouping consisting of a user, a relation and an object stored in ",(0,n.kt)(a.rZ,{format:a.v7.ShortForm,mdxType:"ProductName"})),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/configuration-language#the-intersection-operator"},"Intersection Operator"),": the intersection operator can be used to indicate a relationship exists if the user is in all the sets of users")),(0,n.kt)("h2",{id:"step-by-step"},"Step By Step"),(0,n.kt)("p",null,"The document below is an example of a relational authorization model. In this model, you can assign users to the ",(0,n.kt)("inlineCode",{parentName:"p"},"editor")," relation. The ",(0,n.kt)("inlineCode",{parentName:"p"},"editor")," relation has write privileges that regular users do not."),(0,n.kt)("p",null,"In this scenario, you will migrate the following model:"),(0,n.kt)(a.lG,{configuration:{type_definitions:[{type:"document",relations:{editor:{this:{}},can_edit:{computedUserset:{object:"",relation:"editor"}}}},{type:"user"}]},mdxType:"AuthzModelSnippetViewer"}),(0,n.kt)("p",null,"There are existing ",(0,n.kt)(a.uH,{section:"what-is-a-relationship-tuple",linkName:"relationship tuples",mdxType:"ProductConcept"})," associated with editor relation."),(0,n.kt)(a.Wz,{relationshipTuples:[{user:"user:anne",relation:"editor",object:"document:roadmap"},{user:"user:charles",relation:"editor",object:"document:roadmap"}],mdxType:"RelationshipTuplesViewer"}),(0,n.kt)("p",null,"This is the authorization model that you will want to migrate to:"),(0,n.kt)(a.lG,{configuration:{type_definitions:[{type:"document",relations:{writer:{this:{}},can_write:{computedUserset:{object:"",relation:"writer"}}}},{type:"user"}]},mdxType:"AuthzModelSnippetViewer"}),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"01-create-a-backwards-compatible-model"},"01. Create A Backwards Compatible Model"),(0,n.kt)("p",null,"To avoid service disruption, you will create a backwards compatible model. The backwards compatible model ensures the existing relationship tuple will still work."),(0,n.kt)("p",null,"In the example below, ",(0,n.kt)("inlineCode",{parentName:"p"},"user:Anne")," still has write privileges to the ",(0,n.kt)("inlineCode",{parentName:"p"},"document:roadmap")," resource."),(0,n.kt)(a.lG,{configuration:{type_definitions:[{type:"document",relations:{editor:{this:{}},writer:{union:{child:[{this:{}},{computedUserset:{relation:"editor"}}]}},can_write:{computedUserset:{object:"",relation:"writer"}},can_edit:{computedUserset:{object:"",relation:"writer"}}}},{type:"user"}]},mdxType:"AuthzModelSnippetViewer"}),(0,n.kt)("p",null,"Test the ",(0,n.kt)("inlineCode",{parentName:"p"},"can_edit")," definition. It should produce a value of ",(0,n.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,n.kt)(a.uT,{user:"user:anne",relation:"can_write",object:"document:roadmap",allowed:!0,mdxType:"CheckRequestViewer"}),(0,n.kt)(a.uT,{user:"user:anne",relation:"can_edit",object:"document:roadmap",allowed:!0,mdxType:"CheckRequestViewer"}),(0,n.kt)("h3",{id:"02-create-a-new-relationship-tuple"},"02. Create a New Relationship Tuple"),(0,n.kt)("p",null,"Now that you have a backwards compatible model, you can create new relationship tuples with a new relation."),(0,n.kt)("p",null,"In this example, you will add Bethany to the ",(0,n.kt)("inlineCode",{parentName:"p"},"writer")," relationship."),(0,n.kt)(a.Gb,{relationshipTuples:[{_description:"Bethany assigned writer instead of editor",user:"user:bethany",relation:"writer",object:"document:roadmap"}],mdxType:"WriteRequestViewer"}),(0,n.kt)("p",null,"Run a check in the API for Bethany to ensure correct access."),(0,n.kt)(a.uT,{user:"user:bethany",relation:"can_write",object:"document:roadmap",allowed:!0,mdxType:"CheckRequestViewer"}),(0,n.kt)("h3",{id:"03-migrate-the-existing-relationship-tuples"},"03. Migrate The Existing Relationship Tuples"),(0,n.kt)("p",null,"Next, migrate the existing relationship tuples. The new relation makes this definition obsolete."),(0,n.kt)("p",null,"Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"read")," API to lookup all relationship tuples with the ",(0,n.kt)("inlineCode",{parentName:"p"},"editor")," name in your model."),(0,n.kt)(a.Nq,{relation:"editor",object:"document:",tuples:[{user:"user:anne",relation:"editor",object:"document:planning"},{user:"user:charles",relation:"editor",object:"document:planning"}],mdxType:"ReadRequestViewer"}),(0,n.kt)("p",null,"Update the new tuples with the ",(0,n.kt)("inlineCode",{parentName:"p"},"write")," relationship."),(0,n.kt)(a.Gb,{relationshipTuples:[{user:"user:anne",relation:"writer",object:"document:roadmap"},{user:"user:charles",relation:"writer",object:"document:roadmap"}],mdxType:"WriteRequestViewer"}),(0,n.kt)("p",null,"Finally, remove the old relationship tuples."),(0,n.kt)(a.Gb,{deleteRelationshipTuples:[{user:"user:anne",relation:"editor",object:"document:roadmap"},{user:"user:charles",relation:"editor",object:"document:roadmap"}],mdxType:"WriteRequestViewer"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Perform a ",(0,n.kt)("inlineCode",{parentName:"p"},"write")," operation before a ",(0,n.kt)("inlineCode",{parentName:"p"},"delete")," operation to ensure Anne still has access.")),(0,n.kt)("p",null,"Confirm the tuples are correct by running a check on the user."),(0,n.kt)(a.uT,{user:"user:anne",relation:"can_write",object:"document:roadmap",allowed:!0,mdxType:"CheckRequestViewer"}),(0,n.kt)("p",null,"The old relationship tuple no longer exists."),(0,n.kt)(a.uT,{user:"user:anne",relation:"editor",object:"document:roadmap",allowed:!1,mdxType:"CheckRequestViewer"}),(0,n.kt)("h3",{id:"04-remove-obsolete-relationship-from-the-model"},"04. Remove Obsolete Relationship From The Model"),(0,n.kt)("p",null,"After you remove the previous relationship tuples, update your authorization model to remove the obsolete relation."),(0,n.kt)(a.lG,{configuration:{type_definitions:[{type:"document",relations:{writer:{this:{}},can_write:{computedUserset:{object:"",relation:"writer"}}}},{type:"user"}]},mdxType:"AuthzModelSnippetViewer"}),(0,n.kt)("p",null,"Now, the ",(0,n.kt)("inlineCode",{parentName:"p"},"write")," API will only accept the new relation name."),(0,n.kt)("h2",{id:"related-sections"},"Related Sections"),(0,n.kt)(a.$q,{description:"Review the following sections for more information on managing relationship tuples.",relatedLinks:[{title:"Transactional Writes",description:"Learn how to perform transactional write",link:"../interacting/transactional-writes",id:"../interacting/transactional-writes.mdx"},{title:"Relationship Queries",description:"Understand the differences between check, read, expand and list objects.",link:"../interacting/relationship-queries",id:"../interacting/relationship-queries.mdx"}],mdxType:"RelatedSection"}))}c.isMDXComponent=!0}}]);