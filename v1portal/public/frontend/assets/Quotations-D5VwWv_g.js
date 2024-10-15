var j=Object.defineProperty,M=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var L=(s,e,a)=>e in s?j(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a,D=(s,e)=>{for(var a in e||(e={}))Q.call(e,a)&&L(s,a,e[a]);if(V)for(var a of V(e))q.call(e,a)&&L(s,a,e[a]);return s},T=(s,e)=>M(s,E(e));var B=(s,e,a)=>new Promise((t,g)=>{var b=n=>{try{m(a.next(n))}catch(u){g(u)}},p=n=>{try{m(a.throw(n))}catch(u){g(u)}},m=n=>n.done?t(n.value):Promise.resolve(n.value).then(b,p);m((a=a.apply(s,e)).next())});import{L as G}from"./LeftSidebar-Bv_zMSK0.js";import{_ as A,P as H}from"./ListView-Bci8aoEt.js";import{R as J}from"./RefreshButton-DjaifwEB.js";import{_ as K,a as W,b as X,r as d,c as Y,d as Z,o as $,e as w,f as r,n as P,g as i,w as N,u as ee,h as c,i as y,j as te,m as ae,t as O}from"./index-59s5irdc.js";import{_ as oe}from"./Badge.vue_vue_type_script_setup_true_lang-DhqV6aGv.js";import{D as le}from"./DatePicker-Cgkimws6.js";import{_ as se,a as ne}from"./FormControl.vue_vue_type_script_setup_true_lang-DN1lN8V8.js";import"./Avatar.vue_vue_type_script_setup_true_lang-Dt0vLd5E.js";import"./index-CFFX3Mdj.js";import"./index-Cd14MKN6.js";const re={components:{LeftSidebar:G,ListView:A,Pagination:H,RefreshButton:J,FeatherIcon:W,TextInput:se,FormControl:ne,DatePicker:le,Badge:oe,Button:X},setup(){const s=d(!1),e=d([]),a=d([]),t=d(!1),g=d([{label:"Name",key:"name"},{label:"Status",key:"status"},{label:"Date",key:"transaction_date"},{label:"Item",key:"item_name"},{label:"Total",key:"total"}]),b=Y({url:"v1portal.v1portal.api.api.get_quotation",method:"get"}),p=()=>B(this,null,function*(){try{t.value=!0;const l=yield b.fetch();e.value=l.map(v=>{const R=v.items.map(S=>S.item_name).join(", ");return T(D({},v),{total:String(v.grand_total),item_name:R||"No items",transaction_date:v.transaction_date})})}catch(l){console.error("Error fetching data:",l)}finally{t.value=!1}}),m=()=>{p()},n=()=>{s.value=!s.value},u=ee(),x=l=>{l&&l.name?u.push({name:"QuotationDetails",params:{id:l.name}}):console.error("Row data is invalid:",l)},C=l=>{a.value=l},k=()=>{h.value="",f.value="",o.value="",_.value=""},h=d(""),f=d(""),o=d(""),_=d(""),z=Z(()=>e.value.filter(l=>{const v=l.name.toLowerCase().includes(h.value.toLowerCase()),R=l.status.toLowerCase()===f.value.toLowerCase()||!f.value,S=l.grand_total.toString().replace(/[.,]/g,"").includes(o.value.toString().replace(/[.,]/g,""))||!o.value,I=_.value.split("-").reverse().join("-"),U=l.transaction_date&&l.transaction_date.includes(I);return v&&R&&S&&U})),F=l=>{switch(l){case"Draft":return{theme:"red"};case"Open":return{theme:"blue"};case"Cancelled":return{theme:"Green"};case"Ordered":return{theme:"orange"};default:return{theme:"gray"}}};return $(()=>{p()}),{isSidebarCollapsed:s,paginatedRows:a,rows:e,columns:g,toggleSidebar:n,OpenClick:x,updatePaginatedRows:C,reload:m,isLoading:t,filterName:h,filterStatus:f,filterTotal:o,filteredRows:z,filterDate:_,resetFilters:k,getStatusTheme:F}}},ie={class:"h-[calc(100vh)] overflow-hidden flex flex-col"},de={class:"main-content"},ce={class:"fiter flex gap-2 flex items-center justify-between px-1 py-4 -mt-3"},me={class:"flex ml-auto"},ue={key:0},pe={key:1},fe={class:"text-black text-base",style:{"max-width":"170px",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap",display:"block"}},_e={key:2},ve={class:"font-small text-gray-700 text-base",style:{"max-width":"170px",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap",display:"block"}};function ge(s,e,a,t,g,b){const p=c("LeftSidebar"),m=c("TextInput"),n=c("FormControl"),u=c("DatePicker"),x=c("Button"),C=c("RefreshButton"),k=c("Badge"),h=c("ListView"),f=c("Pagination");return y(),w("div",ie,[r("div",{class:P(["head-layout",{collapsed:t.isSidebarCollapsed}])},e[4]||(e[4]=[r("div",{class:"head-content"},[r("header",{class:"border-b bg-white flex h-11 items-center justify-between py-2.5 pl-5"},[r("div",{class:"float-left"},"Quotations"),r("div",{class:"float-right"})])],-1)]),2),r("div",{class:P(["layout",{collapsed:t.isSidebarCollapsed}])},[i(p,{class:"z-[8]",isCollapsed:t.isSidebarCollapsed,onToggle:t.toggleSidebar},null,8,["isCollapsed","onToggle"]),r("div",de,[r("div",ce,[i(m,{type:"search",size:"sm",variant:"subtle",placeholder:"Name",modelValue:t.filterName,"onUpdate:modelValue":e[0]||(e[0]=o=>t.filterName=o),class:"w-48"},null,8,["modelValue"]),i(n,{type:"select",options:[{},{label:"Draft",value:"Draft"},{label:"Open",value:"Open"},{label:"Replied",value:"Replied"},{label:"Partially Ordered",value:"Partially Ordered"},{label:"Ordered",value:"Ordered"},{label:"Lost",value:"Lost"},{label:"Cancelled",value:"Cancelled"},{label:"Expired",value:"Expired"}],size:"sm",variant:"subtle",placeholder:"Status",modelValue:t.filterStatus,"onUpdate:modelValue":e[1]||(e[1]=o=>t.filterStatus=o),class:"w-48"},null,8,["modelValue"]),i(m,{type:"search",size:"sm",variant:"subtle",placeholder:"Total",modelValue:t.filterTotal,"onUpdate:modelValue":e[2]||(e[2]=o=>t.filterTotal=o),class:"w-48"},null,8,["modelValue"]),i(u,{class:"border-none w-48",size:"md",variant:"subtle",placeholder:"Date",modelValue:t.filterDate,"onUpdate:modelValue":e[3]||(e[3]=o=>t.filterDate=o)},null,8,["modelValue"]),r("div",me,[i(x,{variant:"subtle",theme:"gray",size:"sm",onClick:t.resetFilters},{default:N(()=>e[5]||(e[5]=[te(" Reset")])),_:1},8,["onClick"])]),i(C,{onRefresh:t.reload,isLoading:t.isLoading},null,8,["onRefresh","isLoading"])]),i(h,{class:"h-full truncate",columns:t.columns,rows:t.paginatedRows,options:{getRowRoute:o=>({name:"QuotationDetails",params:{id:o.name}}),selectable:!0,showTooltip:!0,resizeColumn:!0,emptyState:{title:"No records found"}},"row-key":"name",onRowClick:t.OpenClick},{cell:N(({item:o,column:_})=>[_.key==="status"?(y(),w("div",ue,[i(k,ae(t.getStatusTheme(o),{size:"sm",label:o}),null,16,["label"])])):_.key==="name"?(y(),w("div",pe,[r("span",fe,O(o),1)])):(y(),w("div",_e,[r("span",ve,O(o),1)]))]),_:1},8,["columns","rows","options","onRowClick"]),i(f,{rows:t.filteredRows,"onUpdate:paginatedRows":t.updatePaginatedRows},null,8,["rows","onUpdate:paginatedRows"])])],2)])}const De=K(re,[["render",ge],["__scopeId","data-v-c9a82584"]]);export{De as default};
