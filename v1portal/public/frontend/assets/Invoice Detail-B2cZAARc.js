var j=(_,e,x)=>new Promise((s,g)=>{var y=n=>{try{p(x.next(n))}catch(l){g(l)}},u=n=>{try{p(x.throw(n))}catch(l){g(l)}},p=n=>n.done?s(n.value):Promise.resolve(n.value).then(y,u);p((x=x.apply(_,e)).next())});import{L as O}from"./LeftSidebar-Bv_zMSK0.js";import{_ as G,b as H,r as o,c as M,q as P,o as Q,e as i,f as t,g as h,n as f,t as a,w as J,v as b,F as A,O as q,u as K,y as U,h as v,i as d,j as X}from"./index-59s5irdc.js";import{_ as Y}from"./Badge.vue_vue_type_script_setup_true_lang-DhqV6aGv.js";import{_ as Z}from"./Breadcrumbs.vue_vue_type_script_setup_true_lang-C_ouJCLj.js";import"./Avatar.vue_vue_type_script_setup_true_lang-Dt0vLd5E.js";import"./index-CFFX3Mdj.js";const $={components:{LeftSidebar:O,Breadcrumbs:Z,Button:H,Badge:Y},setup(){K();const _=U(),e=o(!1),x=o(""),s=o([]),g=o([]),y=o(""),u=o([]),p=o([]),n=o([]),l=o([]),c=o([]),w=o([]),V=o([]),k=o([]),T=o([]),C=o([]),L=o([]),I=o([]),B=o([]),D=o([]),N=o([]),S=o([]),W=M({url:"v1portal.v1portal.api.api.get_salesinvoice",method:"get"}),R=o([{label:"Invoice",route:{name:"InvoiceDetail"}},{label:"",route:{}}]),z=()=>j(this,null,function*(){try{const m=_.params.id,r=(yield W.fetch()).find(F=>F.name===m);r&&(x.value=r.name,y.value=r.status,p.value=r.items||[],u.value=r.project,n.value=r.taxes||[],c.value=r.rounded_total,s.value=r.address_line1,g.value=r.address_line2,T.value=r.city,C.value=r.country,L.value=r.phone_no,I.value=r.state,B.value=r.pincode,D.value=r.in_words,l.value=r.total,w.value=r.total_taxes_and_charges,S.value=r.quotation_to,k.value=r.customer,V.value=r.posting_date,N.value=r.due_date)}catch(m){console.error("Error fetching order details:",m)}}),E=()=>{e.value=!e.value};return P(x,m=>{R.value[1].label=m}),Q(()=>{z()}),{isSidebarCollapsed:e,name:x,inWord:D,inputValue:y,addressLine1:s,itemValue:p,taxValue:n,customerName:k,totalValue:l,dateValue:V,quotationTo:S,totalTaxValue:w,grandValue:c,toggleSidebar:E,projectValue:u,breadcrumbsList:R,duedateValue:N,addressLine2:g,city:T,country:C,phone:L,state:I,pincode:B,getTheme:m=>m==="Cancelled"?"green":m==="Overdue"?"blue":m==="Draft"?"red":m==="Return"?"orange":"gray"}}},tt={class:"head-content"},et={class:"border-b bg-white h-12 py-2.5 pb-[2.625rem] sm:px-5 mb-12"},st={class:"main-content p-5",style:{"padding-left":"150px","padding-right":"150px"}},at={class:"hai border rounded"},ot={class:"px-5 flex border-b h-12 items-center justify-between"},rt={class:"text-2xl font-bold text-blue-600"},lt={class:"badge"},nt={class:"main flex flex-row gap-6 pt-5"},it={class:"w-1/2 p-2 min-h-70"},dt={class:"flex items-center px-3 leading-5 first:mt-1 pb-1"},ct={class:"grid min-h-[18px] flex-1 items-center text-base text-center"},mt={class:"flex items-center gap-2 px-3 leading-5 first:mt-3 text-center mt-3 pb-1"},xt={class:"grid min-h-[18px] flex-1 items-center overflow-hidden text-base text-center"},pt={class:"flex items-center gap-2 px-3 leading-5 first:mt-3 text-center mt-3 pb-1"},gt={class:"grid min-h-[18px] flex-1 items-center overflow-hidden text-base text-center"},ut={class:"flex items-center gap-2 px-3 leading-5 first:mt-3 text-center mt-3 pb-1"},ft={class:"grid min-h-[18px] flex-1 items-center overflow-hidden text-base text-center"},bt={class:"w-1/2 p-2 min-h-70"},yt={class:"flex flex-col gap-2"},_t={class:"flex items-start gap-2 px-3 leading-5 first:mt-1 pb-1"},ht={class:"grid min-h-[18px] flex-1 items-center text-base text-left"},vt={class:"text-sm text-gray-900"},wt={key:0},Vt={key:1},kt={key:2},Tt={key:3},Ct={key:4},Lt={key:5},It={class:"flex items-center gap-2 px-3 leading-5 first:mt-3 text-center mt-3 pb-1"},Bt={class:"grid min-h-[18px] flex-1 items-center overflow-hidden text-base text-left"},Dt={class:"text-sm text-gray-900"},Nt={class:"bg-white mt-6"},St={class:"min-w-full border-b"},Rt={class:"bg-white"},jt={class:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"},At={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center"},qt={class:"px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right"},Wt={class:"px-6 py-4 whitespace-nowrap text-sm font-medium text-right"},zt={class:"px-6 py-4 whitespace-nowrap text-sm font-medium text-right"},Et={class:"main flex flex-row"},Ft={class:"w-2/5 flex flex-col"},Ot={class:"min-w-full border-l border-gray-200"},Gt={class:"bg-white"},Ht={class:"px-6 py-4 text-sm font-medium text-right border-b border-gray-200"},Mt={class:"px-6 py-4 text-sm font-medium text-right border-b border-gray-200"},Pt={class:"px-6 py-4 text-sm font-medium text-right border-b border-gray-200"},Qt={class:"items"},Jt={class:"flex flex-col",style:{"max-height":"400px","overflow-y":"auto"}},Kt={class:"min-w-full border-t border-gray-200"};function Ut(_,e,x,s,g,y){const u=v("Breadcrumbs"),p=v("LeftSidebar"),n=v("Badge");return d(),i("div",null,[t("div",{class:f(["head-layout",{collapsed:s.isSidebarCollapsed}])},[t("div",tt,[t("header",et,[h(u,{items:s.breadcrumbsList,class:"float-left"},null,8,["items"])])])],2),t("div",{class:f(["layout",{collapsed:s.isSidebarCollapsed}])},[h(p,{isCollapsed:s.isSidebarCollapsed,onToggle:s.toggleSidebar},null,8,["isCollapsed","onToggle"]),t("div",st,[t("div",at,[t("div",ot,[t("h1",rt,a(s.customerName),1),t("div",lt,[h(n,{variant:"subtle",theme:s.getTheme(s.inputValue),size:"sm",label:"Badge"},{default:J(()=>[X(a(s.inputValue),1)]),_:1},8,["theme"])])]),t("div",nt,[t("div",it,[e[4]||(e[4]=t("div",{class:"text-gray-700 mb-5 ml-1 flex h-7 max-w-fit cursor-pointer items-center gap-2 pl-2 pr-3 text-base font-semibold leading-5"}," Details ",-1)),t("div",dt,[e[0]||(e[0]=t("div",{class:"sm:w-36 shrink-0 text-sm text-gray-600 text-left"}," Customer Name: ",-1)),t("div",ct,a(s.customerName),1)]),t("div",mt,[e[1]||(e[1]=t("div",{class:"sm:w-36 shrink-0 text-sm text-gray-600 text-left"}," Project: ",-1)),t("div",xt,a(s.projectValue),1)]),t("div",pt,[e[2]||(e[2]=t("div",{class:"sm:w-36 shrink-0 text-sm text-gray-600 text-left"}," Date: ",-1)),t("div",gt,a(s.dateValue),1)]),t("div",ut,[e[3]||(e[3]=t("div",{class:"sm:w-36 shrink-0 text-sm text-gray-600 text-left"}," Due Date: ",-1)),t("div",ft,a(s.duedateValue),1)])]),t("div",bt,[e[7]||(e[7]=t("div",{class:"text-gray-700 mb-5 ml-1 flex h-7 max-w-fit cursor-pointer items-center gap-4 pl-2 pr-3 text-base font-semibold leading-5"}," Address & Contact ",-1)),t("div",yt,[t("div",_t,[e[5]||(e[5]=t("div",{class:"sm:w-20 shrink-0 text-sm text-gray-600 text-left"}," Address: ",-1)),t("div",ht,[t("div",vt,[s.addressLine1?(d(),i("span",wt,a(s.addressLine1),1)):b("",!0),s.addressLine2?(d(),i("span",Vt,a(s.addressLine2),1)):b("",!0),s.city?(d(),i("span",kt,a(s.city)+",",1)):b("",!0),s.state?(d(),i("span",Tt,a(s.state)+",",1)):b("",!0),s.country?(d(),i("span",Ct,a(s.country),1)):b("",!0),s.pincode?(d(),i("span",Lt,"- "+a(s.pincode),1)):b("",!0)])])]),t("div",It,[e[6]||(e[6]=t("div",{class:"sm:w-20 shrink-0 text-sm text-gray-600 text-left"}," Contact: ",-1)),t("div",Bt,[t("div",Dt,a(s.phone),1)])])])])]),t("div",Nt,[e[10]||(e[10]=t("div",{class:"text-gray-700 mb-2 ml-5 flex h-7 max-w-fit cursor-pointer items-center gap-2 pr-3 text-base font-semibold leading-5"}," Items ",-1)),e[11]||(e[11]=t("div",{class:"grid grid-cols-1 sm:grid-cols-2 gap-6"},null,-1)),t("table",St,[e[9]||(e[9]=t("thead",{class:"bg-gray-200"},[t("tr",null,[t("th",{class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Item "),t("th",{class:"px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"}," Quantity "),t("th",{class:"px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"}," Rate(INR) "),t("th",{class:"px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"}," Amount(INR) ")])],-1)),t("tbody",Rt,[(d(!0),i(A,null,q(s.itemValue,(l,c)=>(d(),i("tr",{key:c},[t("td",jt,a(l.item_name),1),t("td",At,a(l.qty),1),t("td",qt,a(l.rate),1),t("td",Wt,a(l.amount),1)]))),128)),t("tr",null,[e[8]||(e[8]=t("td",{class:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",colspan:"3"}," Item Total ",-1)),t("td",zt,a(s.totalValue),1)])])])]),t("div",Et,[e[15]||(e[15]=t("div",{class:"w-3/5 flex flex-col pr-4",style:{"max-height":"400px","overflow-y":"auto"}},null,-1)),t("div",Ft,[t("table",Ot,[t("tbody",Gt,[t("tr",null,[e[12]||(e[12]=t("td",{class:"px-6 py-4 text-sm font-medium text-left border-b border-gray-200"},"Total Taxes and Charges ",-1)),t("td",Ht,a(s.totalTaxValue),1)]),t("tr",null,[e[13]||(e[13]=t("td",{class:"px-6 py-4 text-sm font-medium text-left border-b border-gray-200"},"Grand Total",-1)),t("td",Mt,a(s.grandValue),1)]),t("tr",null,[e[14]||(e[14]=t("td",{class:"px-6 py-4 text-sm font-medium text-left border-b border-gray-200"},"In Words",-1)),t("td",Pt,a(s.inWord),1)])])])])]),t("div",Qt,[t("div",Jt,[e[17]||(e[17]=t("div",{class:"text-gray-700 p-5 flex h-7 max-w-fit cursor-pointer items-center gap-2 pr-3 text-base font-semibold leading-5"}," Taxes ",-1)),t("table",Kt,[e[16]||(e[16]=t("thead",null,[t("tr",null,[t("th",{class:"w-1/4 px-4 py-2 text-sm font-medium text-gray-500 text-left border-b border-gray-200"}," Type"),t("th",{class:"w-1/4 px-4 py-2 text-sm font-medium text-gray-500 text-left border-b border-gray-200"}," Account Head"),t("th",{class:"w-1/4 px-4 py-2 text-sm font-medium text-gray-500 text-left border-b border-gray-200"},"Tax Rate"),t("th",{class:"w-1/4 px-4 py-2 text-sm font-medium text-gray-500 text-left border-b border-gray-200"}," Amount")])],-1)),t("tbody",null,[(d(!0),i(A,null,q(s.taxValue,(l,c)=>(d(),i("tr",{key:c},[t("td",{class:f(["px-4 py-2 text-sm text-gray-900",{"border-b border-gray-200":c<s.taxValue.length-1}])},a(l.charge_type),3),t("td",{class:f(["px-4 py-2 text-sm text-gray-500",{"border-b border-gray-200":c<s.taxValue.length-1}])},a(l.account_head),3),t("td",{class:f(["px-4 py-2 text-sm text-gray-500",{"border-b border-gray-200":c<s.taxValue.length-1}])},a(l.rate)+"%",3),t("td",{class:f(["px-4 py-2 text-sm font-medium text-gray-900",{"border-b border-gray-200":c<s.taxValue.length-1}])},a(l.tax_amount),3)]))),128))])])])])]),e[18]||(e[18]=t("div",{class:"mt-8"}," ",-1))])],2)])}const re=G($,[["render",Ut],["__scopeId","data-v-6f166e1a"]]);export{re as default};
