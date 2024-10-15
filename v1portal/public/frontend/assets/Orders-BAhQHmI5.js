var j=Object.defineProperty,H=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var D=(s,e,a)=>e in s?j(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a,T=(s,e)=>{for(var a in e||(e={}))G.call(e,a)&&D(s,a,e[a]);if(S)for(var a of S(e))q.call(e,a)&&D(s,a,e[a]);return s},V=(s,e)=>H(s,E(e));var B=(s,e,a)=>new Promise((t,v)=>{var b=n=>{try{m(a.next(n))}catch(u){v(u)}},p=n=>{try{m(a.throw(n))}catch(u){v(u)}},m=n=>n.done?t(n.value):Promise.resolve(n.value).then(b,p);m((a=a.apply(s,e)).next())});import{L as A}from"./LeftSidebar-Bv_zMSK0.js";import{_ as J,P as K}from"./ListView-Bci8aoEt.js";import{R as Q}from"./RefreshButton-DjaifwEB.js";import{_ as W,b as X,r as d,c as Y,d as Z,o as $,e as w,f as r,n as L,g as i,w as N,u as ee,h as c,i as C,j as te,m as ae,t as z}from"./index-59s5irdc.js";import{_ as oe}from"./Badge.vue_vue_type_script_setup_true_lang-DhqV6aGv.js";import{D as le}from"./DatePicker-Cgkimws6.js";import{_ as se,a as ne}from"./FormControl.vue_vue_type_script_setup_true_lang-DN1lN8V8.js";import"./Avatar.vue_vue_type_script_setup_true_lang-Dt0vLd5E.js";import"./index-CFFX3Mdj.js";import"./index-Cd14MKN6.js";const re={components:{LeftSidebar:A,ListView:J,Pagination:K,TextInput:se,FormControl:ne,Badge:oe,DatePicker:le,RefreshButton:Q,Button:X},setup(){const s=d(!1),e=d([]),a=d([]),t=d(!1),v=d([{label:"Name",key:"name"},{label:"Status",key:"status"},{label:"Date",key:"transaction_date"},{label:"Item",key:"item_name"},{label:"Total",key:"grand_total"}]),b=Y({url:"v1portal.v1portal.api.api.get_salesorder",method:"get"}),p=()=>B(this,null,function*(){try{t.value=!0;const l=yield b.fetch();e.value=l.map(h=>V(T({},h),{total:String(h.total),item_name:h.items.map(R=>R.item_name).join(", ")||"No items"}))}catch(l){console.error("Error fetching data:",l)}finally{t.value=!1}}),m=()=>{p()},n=()=>{s.value=!s.value},u=ee(),y=l=>{l&&l.name?u.push({name:"OrderDetails",params:{id:l.name}}):console.error("Row data is invalid:",l)},x=l=>{a.value=l},k=()=>{g.value="",f.value="",o.value="",_.value=""},g=d(""),f=d(""),o=d(""),_=d(""),O=()=>{isItemBoxVisible.value=!isItemBoxVisible.value},I=Z(()=>e.value.filter(l=>{const h=l.name.toLowerCase().includes(g.value.toLowerCase()),R=l.status.toLowerCase()===f.value.toLowerCase()||!f.value,U=l.total.toString().replace(/[.,]/g,"").includes(o.value.toString().replace(/[.,]/g,""))||!o.value,F=_.value.split("-").reverse().join("-"),M=l.transaction_date&&l.transaction_date.includes(F);return h&&R&&U&&M})),P=l=>{switch(l){case"Draft":return{theme:"red"};case"Completed":return{theme:"blue"};case"Cancelled":return{theme:"Green"};case"On Hold":return{theme:"orange"};default:return{theme:"gray"}}};return $(()=>{p()}),{isSidebarCollapsed:s,rows:e,paginatedRows:a,columns:v,toggleItemBox:O,toggleSidebar:n,OpenClick:y,updatePaginatedRows:x,filterName:g,filterStatus:f,filterTotal:o,filteredRows:I,filterDate:_,resetFilters:k,getStatusTheme:P,reload:m,isLoading:t}}},ie={class:"h-[calc(100vh)] overflow-hidden flex flex-col"},de={class:"main-content"},ce={class:"fiter mb-2 flex gap-3"},me={class:"flex ml-auto"},ue={class:"flex gap-2 ml-2"},pe={key:0},fe={key:1},_e={class:"text-black text-base",style:{"max-width":"170px",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap",display:"block"}},ve={key:2},ge={class:"font-small text-gray-700 text-base",style:{"max-width":"170px",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap",display:"block"}};function he(s,e,a,t,v,b){const p=c("LeftSidebar"),m=c("TextInput"),n=c("FormControl"),u=c("DatePicker"),y=c("Button"),x=c("RefreshButton"),k=c("Badge"),g=c("ListView"),f=c("pagination");return C(),w("div",ie,[r("div",{class:L(["head-layout",{collapsed:t.isSidebarCollapsed}])},e[4]||(e[4]=[r("div",{class:"head-content"},[r("header",{class:"border-b bg-white px-5 py-2.5 sm:px-5"}," Sales Order ")],-1)]),2),r("div",{class:L(["layout",{collapsed:t.isSidebarCollapsed}])},[i(p,{class:"z-[8]",isCollapsed:t.isSidebarCollapsed,onToggle:t.toggleSidebar},null,8,["isCollapsed","onToggle"]),r("div",de,[r("div",ce,[i(m,{type:"search",size:"sm",variant:"subtle",placeholder:"Name",modelValue:t.filterName,"onUpdate:modelValue":e[0]||(e[0]=o=>t.filterName=o),class:"w-48"},null,8,["modelValue"]),i(n,{type:"select",options:[{},{label:"Draft",value:"Draft"},{label:"On Hold",value:"On Hold"},{label:"To Deliver and Bill",value:"To Deliver and Bill"},{label:"Completed",value:"Completed"},{label:"To Deliver",value:"To Deliver"},{label:"To Bill",value:"To Bill"},{label:"Cancelled",value:"Cancelled"},{label:"Closed",value:"Closed"}],size:"sm",variant:"subtle",placeholder:"Status",modelValue:t.filterStatus,"onUpdate:modelValue":e[1]||(e[1]=o=>t.filterStatus=o),class:"w-48"},null,8,["modelValue"]),i(m,{type:"search",size:"sm",variant:"subtle",placeholder:"Total",modelValue:t.filterTotal,"onUpdate:modelValue":e[2]||(e[2]=o=>t.filterTotal=o),class:"w-48"},null,8,["modelValue"]),i(u,{class:"border-none w-48",size:"md",variant:"subtle",placeholder:"Date",modelValue:t.filterDate,"onUpdate:modelValue":e[3]||(e[3]=o=>t.filterDate=o)},null,8,["modelValue"]),r("div",me,[i(y,{variant:"subtle",theme:"gray",size:"sm",onClick:t.resetFilters},{default:N(()=>e[5]||(e[5]=[te(" Reset")])),_:1},8,["onClick"]),r("div",ue,[i(x,{onRefresh:t.reload,isLoading:t.isLoading},null,8,["onRefresh","isLoading"])])])]),i(g,{class:"h-full",columns:t.columns,rows:t.paginatedRows,options:{getRowRoute:o=>({name:"OrderDetails",params:{id:o.name}}),selectable:!0,showTooltip:!0,resizeColumn:!0,emptyState:{title:"No records found"}},"row-key":"name",onRowClick:t.OpenClick},{cell:N(({item:o,column:_})=>[_.key==="status"?(C(),w("div",pe,[i(k,ae(t.getStatusTheme(o),{size:"sm",label:o}),null,16,["label"])])):_.key==="name"?(C(),w("div",fe,[r("span",_e,z(o),1)])):(C(),w("div",ve,[r("span",ge,z(o),1)]))]),_:1},8,["columns","rows","options","onRowClick"]),i(f,{rows:t.filteredRows,"onUpdate:paginatedRows":t.updatePaginatedRows},null,8,["rows","onUpdate:paginatedRows"])])],2)])}const Be=W(re,[["render",he],["__scopeId","data-v-10f77f0b"]]);export{Be as default};
