var p=(r,e,i)=>new Promise((m,t)=>{var n=l=>{try{u(i.next(l))}catch(a){t(a)}},o=l=>{try{u(i.throw(l))}catch(a){t(a)}},u=l=>l.done?m(l.value):Promise.resolve(l.value).then(n,o);u((i=i.apply(r,e)).next())});import{_ as f,c as b,a as s,w as g,b as d,v as w,o as h}from"./index-Di0g_f2l.js";const x={data(){return{email:null,password:null}},inject:["$auth"],mounted(){return p(this,null,function*(){var r,e;(e=(r=this.$route)==null?void 0:r.query)!=null&&e.route&&(this.redirect_route=this.$route.query.route,this.$router.replace({query:null}))})},methods:{login(){return p(this,null,function*(){this.email&&this.password&&(yield this.$auth.login(this.email,this.password))&&this.$router.push({name:"Home"})})}}},y={class:"min-h-screen bg-white flex"},v={class:"mx-auto w-full max-w-sm lg:w-96"};function $(r,e,i,m,t,n){return h(),b("div",y,[s("div",v,[s("form",{onSubmit:e[2]||(e[2]=g((...o)=>n.login&&n.login(...o),["prevent"])),class:"space-y-6"},[e[3]||(e[3]=s("label",{for:"email"}," Username: ",-1)),d(s("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>t.email=o)},null,512),[[w,t.email]]),e[4]||(e[4]=s("br",null,null,-1)),e[5]||(e[5]=s("label",{for:"password"}," Password: ",-1)),d(s("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=o=>t.password=o)},null,512),[[w,t.password]]),e[6]||(e[6]=s("button",{class:"bg-blue-500 block text-white p-2 hover:bg-blue-700",type:"submit"}," Sign in ",-1))],32)])])}const B=f(x,[["render",$]]);export{B as default};
