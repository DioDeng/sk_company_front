"use strict";(self["webpackChunkweb"]=self["webpackChunkweb"]||[]).push([[940],{5044:function(t,e,a){a.d(e,{B1:function(){return d},Ck:function(){return u},IP:function(){return b},Jh:function(){return p},LW:function(){return w},Mu:function(){return r},Mz:function(){return k},RJ:function(){return f},TA:function(){return g},Vh:function(){return _},WA:function(){return y},fy:function(){return h},i3:function(){return i},mL:function(){return o},nx:function(){return n},rO:function(){return m},yb:function(){return c}});var l=a(5121);const s="https://skcompoany.zeabur.app",o=()=>l.Z.get(`${s}/admin/workers`),n=t=>l.Z.post(`${s}/admin/worker`,t),i=t=>l.Z.patch(`${s}/admin/worker`,t),r=t=>l.Z.delete(`${s}/admin/worker/${t}`),d=t=>l.Z.get(`${s}/admin/workerList/${t}`),m=()=>l.Z.get(`${s}/admin/companys`),c=t=>l.Z.post(`${s}/admin/company`,t),u=t=>l.Z.patch(`${s}/admin/company`,t),p=t=>l.Z.delete(`${s}/admin/company/${t}`),h=t=>l.Z.get(`${s}/admin/cooperateList/${t}`),f=t=>l.Z.get(`${s}/admin/orders`,{params:t}),b=t=>l.Z.get(`${s}/admin/order/${t}`),_=t=>l.Z.post(`${s}/admin/order`,t),g=t=>l.Z.patch(`${s}/admin/orderStatus`,t),y=t=>l.Z.patch(`${s}/admin/order`,t),w=t=>l.Z.delete(`${s}/admin/order/${t}`),k=t=>l.Z.post(`${s}/admin/sign_in`,t)},8769:function(t,e,a){a.d(e,{LP:function(){return l},qz:function(){return s}});const l=()=>{const t=document.cookie.replace(/(?:(?:^|.*;\s*)admin\s*=\s*([^;]*).*$)|^.*$/,"$1");return t},s=()=>{document.cookie="admin=;expires=;path=/"}},6940:function(t,e,a){a.r(e),a.d(e,{default:function(){return fa}});var l=a(6252),s=a(9963),o=a(3577);const n={class:"py-4"},i={class:"mb-3 d-flex justify-content-between"},r={class:"list-unstyled"},d={class:"nav-item dropdown"},m=(0,l._)("a",{class:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," 篩選 ",-1),c={class:"dropdown-menu"},u=(0,l._)("li",null,[(0,l._)("hr",{class:"dropdown-divider"})],-1),p=["onClick"],h=(0,l._)("i",{class:"bi bi-plus-lg"},null,-1),f={class:"table table-striped table-hover"},b=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",{scope:"col"},"#"),(0,l._)("th",{scope:"col"},"廠商"),(0,l._)("th",{scope:"col"},"付款方式"),(0,l._)("th",{scope:"col"},"案子金額"),(0,l._)("th",{scope:"col"},"施工地址"),(0,l._)("th",{scope:"col"},"施工日期"),(0,l._)("th",{scope:"col"},"工人名單"),(0,l._)("th",{scope:"col"},"狀態"),(0,l._)("th",{scope:"col"},"修改"),(0,l._)("th",{scope:"col"},"檢視")])],-1),_={scope:"row"},g={class:"table mb-0"},y=(0,l._)("thead",{class:"table-light"},[(0,l._)("tr",null,[(0,l._)("th",{scope:"col"},"#"),(0,l._)("th",{scope:"col"},"姓名"),(0,l._)("th",{scope:"col"},"電話"),(0,l._)("th",{scope:"col"},"工作時數")])],-1),w={scope:"row"},k={scope:"row"},v=["onClick"],D={key:0},x={key:1},W=["onClick"],$=(0,l._)("i",{class:"bi bi-pencil"},null,-1),L=[$],V=["onClick"],U=(0,l._)("i",{class:"bi bi-filetype-pdf"},null,-1),C=[U];function M(t,e,a,$,U,M){const O=(0,l.up)("AddEdit"),S=(0,l.up)("Edit"),E=(0,l.up)("PDF");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("section",n,[(0,l._)("div",i,[(0,l._)("ul",r,[(0,l._)("li",d,[m,(0,l._)("ul",c,[(0,l._)("li",null,[(0,l._)("a",{class:"dropdown-item",href:"#",onClick:e[0]||(e[0]=(0,s.iM)((t=>U.selectOption.sort="asc"),["prevent"]))},"新->舊")]),(0,l._)("li",null,[(0,l._)("a",{class:"dropdown-item",href:"#",onClick:e[1]||(e[1]=(0,s.iM)((t=>U.selectOption.sort=""),["prevent"]))},"舊->新")]),u,(0,l._)("li",null,[(0,l._)("a",{class:"dropdown-item",href:"#",onClick:e[2]||(e[2]=(0,s.iM)((t=>U.selectOption.keyword=void 0),["prevent"]))},"所有")]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(U.companyList,((t,e)=>((0,l.wg)(),(0,l.iD)("li",{key:e},[(0,l._)("a",{class:"dropdown-item",href:"#",onClick:(0,s.iM)((e=>U.selectOption.keyword=t._id),["prevent"])},(0,o.zw)(t.companyName),9,p)])))),128))])])]),(0,l._)("button",{class:"btn btn-dark",onClick:e[3]||(e[3]=t=>this.$emitter.emit("addEditOrder",{status:!0}))},[(0,l.Uk)(" 新增工單"),h])]),(0,l._)("table",f,[b,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(U.orderList,((t,e)=>((0,l.wg)(),(0,l.iD)("tr",{key:e},[(0,l._)("th",_,(0,o.zw)(e+1),1),(0,l._)("td",null,(0,o.zw)(t.company.companyName),1),(0,l._)("td",null,(0,o.zw)(t.paymentMethod),1),(0,l._)("td",null,"$"+(0,o.zw)(this.$toCurrency(t.total)),1),(0,l._)("td",null,(0,o.zw)(t.address),1),(0,l._)("td",null,(0,o.zw)(t.constructionDate),1),(0,l._)("td",null,[(0,l._)("table",g,[y,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.workers,((t,e)=>((0,l.wg)(),(0,l.iD)("tr",{key:e},[(0,l._)("th",w,(0,o.zw)(e+1),1),(0,l._)("td",null,(0,o.zw)(t._id.name),1),(0,l._)("td",null,(0,o.zw)(t._id.phone),1),(0,l._)("td",null,(0,o.zw)(t.time),1)])))),128)),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.transferWorkers,((t,e)=>((0,l.wg)(),(0,l.iD)("tr",{key:e},[(0,l._)("th",k,"調用"+(0,o.zw)(e+1),1),(0,l._)("td",null,(0,o.zw)(t.name),1),(0,l._)("td",null,(0,o.zw)(t.phone),1),(0,l._)("td",null,(0,o.zw)(t.time),1)])))),128))])])]),(0,l._)("td",null,[(0,l._)("button",{type:"button",class:(0,o.C_)(["btn",[t.status?"btn-success":"btn-outline-danger"]]),onClick:e=>M.updateStatus(t)},[t.status?((0,l.wg)(),(0,l.iD)("span",D,"已完成")):((0,l.wg)(),(0,l.iD)("span",x,"未完成"))],10,v)]),(0,l._)("td",null,[(0,l._)("button",{class:"btn btn-secondary",onClick:e=>this.$emitter.emit("editOrder",{status:!1,data:t})},L,8,W)]),(0,l._)("td",null,[(0,l._)("button",{class:"btn btn-warning",onClick:e=>this.$emitter.emit("pdfEmit",t)},C,8,V)])])))),128))])])]),(0,l.Wm)(O),(0,l.Wm)(S),(0,l.Wm)(E)],64)}a(560);var O=a(5044);const S={class:"modal fade","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"AddEdit"},E={class:"modal-dialog modal-xl"},z={class:"modal-content"},Z={class:"modal-header"},A={class:"modal-title fs-5",id:"exampleModalLabel"},I={key:0},T={key:1},H={class:"modal-body row row-cols-2"},N={class:"form-floating mb-3"},Y={id:"datalistOptions"},K=["value"],P={for:"floatingInput"},q={class:"form-floating mb-3"},j={for:"floatingInput"},F={class:"form-floating mb-3"},J={for:"floatingInput"},R={class:"form-floating mb-3"},B=(0,l._)("option",{value:"現金"},"現金",-1),G=(0,l._)("option",{value:"支票"},"支票",-1),Q={for:"floatingInput"},X={class:"form-floating mb-3"},tt={for:"floatingInput"},et={class:"form-floating mb-3"},at={for:"floatingInput"},lt=(0,l._)("h5",null,"工人：",-1),st={key:0},ot={class:"form-floating mb-3"},nt={class:"row row-cols-3 row-cols-md-4 g-3 mb-3"},it=["value","id"],rt=["for"],dt=["value"],mt=["value"],ct=["onUpdate:modelValue"],ut={key:1},pt=["onUpdate:modelValue"],ht=["onUpdate:modelValue"],ft=["onUpdate:modelValue"],bt=(0,l._)("hr",null,null,-1),_t=(0,l._)("h5",null,"調用工人：",-1),gt=["onUpdate:modelValue"],yt=["onUpdate:modelValue"],wt=["onUpdate:modelValue"],kt=["onClick"],vt={class:"d-flex justify-content-center"},Dt={class:"modal-footer justify-content-between"},xt=(0,l._)("div",null,null,-1),Wt=["disabled"];function $t(t,e,a,n,i,r){const d=(0,l.up)("VField"),m=(0,l.up)("ErrorMessage"),c=(0,l.up)("VForm");return(0,l.wg)(),(0,l.iD)("div",S,[(0,l._)("div",E,[(0,l._)("div",z,[(0,l._)("div",Z,[(0,l._)("h1",A,[i.status?((0,l.wg)(),(0,l.iD)("span",I,"新增工單")):((0,l.wg)(),(0,l.iD)("span",T,"修改工單"))]),(0,l._)("button",{type:"button",class:"btn-close",onClick:e[0]||(e[0]=(...t)=>r.hideModal&&r.hideModal(...t)),"aria-label":"Close"})]),(0,l.Wm)(c,{ref:"formRefSignin",id:"profileForm",onSubmit:r.addEditOrder},{default:(0,l.w5)((({meta:a})=>[(0,l._)("div",H,[(0,l._)("section",null,[(0,l._)("div",N,[(0,l.Wm)(d,{name:"廠商",type:"text",rules:r.isCompanyExist,class:"form-control",list:"datalistOptions"},null,8,["rules"]),(0,l._)("datalist",Y,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.companyList,((t,e)=>((0,l.wg)(),(0,l.iD)("option",{key:e,value:t.companyName},null,8,K)))),128))]),(0,l._)("label",P,[(0,l.Uk)("廠商名稱"),(0,l.Wm)(m,{name:"廠商",class:"text-danger ms-3"})])]),(0,l._)("div",q,[(0,l.Wm)(d,{name:"施工地址",rules:"required",type:"text",modelValue:i.tempData.address,"onUpdate:modelValue":e[1]||(e[1]=t=>i.tempData.address=t),class:"form-control"},null,8,["modelValue"]),(0,l._)("label",j,[(0,l.Uk)("施工地址"),(0,l.Wm)(m,{name:"施工地址",class:"text-danger ms-3"})])]),(0,l._)("div",F,[(0,l.Wm)(d,{name:"施工日期",rules:"required",type:"date",modelValue:i.tempData.constructionDate,"onUpdate:modelValue":e[2]||(e[2]=t=>i.tempData.constructionDate=t),class:"form-control"},null,8,["modelValue"]),(0,l._)("label",J,[(0,l.Uk)("施工日期"),(0,l.Wm)(m,{name:"施工日期",class:"text-danger ms-3"})])]),(0,l._)("div",R,[(0,l.Wm)(d,{name:"付款方式",as:"select",rules:"required",class:"form-control",modelValue:i.tempData.paymentMethod,"onUpdate:modelValue":e[3]||(e[3]=t=>i.tempData.paymentMethod=t)},{default:(0,l.w5)((()=>[B,G])),_:1},8,["modelValue"]),(0,l._)("label",Q,[(0,l.Uk)("付款方式"),(0,l.Wm)(m,{name:"付款方式",class:"text-danger ms-3"})])]),(0,l._)("div",X,[(0,l.Wm)(d,{name:"總金額",type:"number",rules:"required",modelValue:i.tempData.total,"onUpdate:modelValue":e[4]||(e[4]=t=>i.tempData.total=t),class:"form-control"},null,8,["modelValue"]),(0,l._)("label",tt,[(0,l.Uk)("總金額"),(0,l.Wm)(m,{name:"總金額",class:"text-danger ms-3"})])]),(0,l._)("div",et,[(0,l.Wm)(d,{name:"保留款",type:"number",modelValue:i.tempData.retainage,"onUpdate:modelValue":e[5]||(e[5]=t=>i.tempData.retainage=t),class:"form-control"},null,8,["modelValue"]),(0,l._)("label",at,[(0,l.Uk)("保留款"),(0,l.Wm)(m,{name:"保留款",class:"text-danger ms-3"})])])]),(0,l._)("section",null,[lt,i.status?((0,l.wg)(),(0,l.iD)("div",st,[(0,l._)("div",ot,[(0,l._)("div",nt,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.workerList,((t,a)=>((0,l.wg)(),(0,l.iD)("div",{class:"form-check",key:a},[(0,l.wy)((0,l._)("input",{class:"form-check-input",type:"checkbox",value:t,id:`worker${a}`,"onUpdate:modelValue":e[6]||(e[6]=t=>i.tempData.workers=t)},null,8,it),[[s.e8,i.tempData.workers]]),(0,l._)("label",{class:"form-check-label",for:`worker${a}`},(0,o.zw)(t.name),9,rt)])))),128))])]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.tempData.workers,((t,e)=>((0,l.wg)(),(0,l.iD)("div",{key:e,class:"input-group mb-2"},[(0,l._)("input",{type:"text",placeholder:"工人姓名",class:"form-control",value:t.name,disabled:""},null,8,dt),(0,l._)("input",{type:"text",placeholder:"工人電話",class:"form-control",value:t.phone,disabled:""},null,8,mt),(0,l.wy)((0,l._)("input",{type:"number",placeholder:"工作時數",class:"form-control","onUpdate:modelValue":t=>i.tempData.workers[e].time=t},null,8,ct),[[s.nr,i.tempData.workers[e].time]])])))),128))])):((0,l.wg)(),(0,l.iD)("div",ut,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.tempData.workers,((t,e)=>((0,l.wg)(),(0,l.iD)("div",{key:e,class:"input-group mb-2"},[(0,l.wy)((0,l._)("input",{type:"text",placeholder:"工人姓名",class:"form-control","onUpdate:modelValue":e=>t._id.name=e,disabled:""},null,8,pt),[[s.nr,t._id.name]]),(0,l.wy)((0,l._)("input",{type:"text",placeholder:"工人電話",class:"form-control","onUpdate:modelValue":e=>t._id.phone=e,disabled:""},null,8,ht),[[s.nr,t._id.phone]]),(0,l.wy)((0,l._)("input",{type:"number",placeholder:"工作時數",class:"form-control","onUpdate:modelValue":t=>i.tempData.workers[e].time=t},null,8,ft),[[s.nr,i.tempData.workers[e].time]])])))),128))])),bt,(0,l._)("div",null,[_t,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.tempData.transferWorkers,((t,e)=>((0,l.wg)(),(0,l.iD)("div",{key:e,class:"input-group mb-2"},[(0,l.wy)((0,l._)("input",{type:"text",placeholder:"工人姓名",class:"form-control","onUpdate:modelValue":t=>i.tempData.transferWorkers[e].name=t},null,8,gt),[[s.nr,i.tempData.transferWorkers[e].name]]),(0,l.wy)((0,l._)("input",{type:"text","aria-label":"Last name",placeholder:"工人電話",class:"form-control","onUpdate:modelValue":t=>i.tempData.transferWorkers[e].phone=t},null,8,yt),[[s.nr,i.tempData.transferWorkers[e].phone]]),(0,l.wy)((0,l._)("input",{type:"number","aria-label":"Last name",placeholder:"工作時數",class:"form-control","onUpdate:modelValue":t=>i.tempData.transferWorkers[e].time=t},null,8,wt),[[s.nr,i.tempData.transferWorkers[e].time]]),(0,l._)("button",{class:"btn btn-outline-danger",type:"button",id:"button-add",onClick:t=>r.deleteTransArray(e)}," 刪除 ",8,kt)])))),128)),(0,l._)("div",vt,[(0,l._)("button",{class:"btn btn-outline-dark",type:"button",onClick:e[7]||(e[7]=(...t)=>r.addTransArray&&r.addTransArray(...t))}," 新增 ")])])])]),(0,l._)("div",Dt,[i.status?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("button",{key:0,type:"button",class:"btn btn-outline-danger",onClick:e[8]||(e[8]=e=>t.deleteOrder(i.tempData._id))}," 刪除該工單 ")),xt,(0,l._)("button",{type:"submit",class:"btn btn-primary",disabled:!a.valid}," 儲存 ",8,Wt)])])),_:1},8,["onSubmit"])])])],512)}var Lt=a(8877),Vt={data(){return{modal:"",status:!1,tempData:{address:"",company:"",status:0,paymentMethod:"",total:0,retainage:0,constructionDate:"",workers:[],transferWorkers:[]},tempWorker:[],companyList:[],workerList:[]}},watch:{},methods:{isCompanyExist(t){this.tempData.company="";let e="";return this.companyList.forEach((a=>{a.companyName===t&&(e=a.company,this.tempData.company=a._id)})),""!==e||"查無此廠商"},getCompany(){(0,O.rO)().then((t=>{this.companyList=t.data.data})).catch((t=>{console.log(t)}))},getWorker(){(0,O.mL)().then((t=>{this.workerList=t.data.data})).catch((t=>{console.log(t)}))},addEditOrder(){this.tempData._id?console.log("這是修改"):(0,O.Vh)(this.tempData).then((t=>{console.log(t)})).catch((t=>{console.log(t)}))},addTransArray(){this.tempData.transferWorkers.push({})},deleteTransArray(t){this.tempData.transferWorkers.splice(t,1)},showModal(){this.modal.show()},hideModal(){this.tempData={address:"",company:"",status:0,paymentMethod:"",total:0,retainage:0,constructionDate:"",workers:[],transferWorkers:[]},this.modal.hide()}},mounted(){this.getCompany(),this.getWorker(),this.modal=new Lt.u_(this.$refs.AddEdit),this.$emitter.on("addEditOrder",(t=>{this.status=t.status,t.status||(this.tempData=JSON.parse(JSON.stringify(t.data))),this.showModal()}))}},Ut=a(3744);const Ct=(0,Ut.Z)(Vt,[["render",$t]]);var Mt=Ct;const Ot={class:"modal fade","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"edit"},St={class:"modal-dialog modal-xl"},Et={class:"modal-content"},zt={class:"modal-header"},Zt={class:"modal-title fs-5",id:"exampleModalLabel"},At={key:0},It={key:1},Tt={class:"modal-body row row-cols-2"},Ht={class:"form-floating mb-3"},Nt={id:"datalistOptions"},Yt=["value"],Kt={for:"floatingInput"},Pt={class:"form-floating mb-3"},qt={for:"floatingInput"},jt={class:"form-floating mb-3"},Ft={for:"floatingInput"},Jt={class:"form-floating mb-3"},Rt=(0,l._)("option",{value:"現金"},"現金",-1),Bt=(0,l._)("option",{value:"支票"},"支票",-1),Gt={for:"floatingInput"},Qt={class:"form-floating mb-3"},Xt={for:"floatingInput"},te={class:"form-floating mb-3"},ee={for:"floatingInput"},ae=(0,l._)("h5",null,"工人：",-1),le={class:"form-floating mb-3"},se={class:"row row-cols-3 row-cols-md-5 g-3 mb-3"},oe=["onClick"],ne=["onUpdate:modelValue"],ie=["value"],re=["onUpdate:modelValue"],de=(0,l._)("hr",null,null,-1),me=(0,l._)("h5",null,"調用工人：",-1),ce=["onUpdate:modelValue"],ue=["onUpdate:modelValue"],pe=["onUpdate:modelValue"],he=["onClick"],fe={class:"d-flex justify-content-center"},be={class:"modal-footer justify-content-between"},_e=(0,l._)("div",null,null,-1),ge=["disabled"];function ye(t,e,a,n,i,r){const d=(0,l.up)("VField"),m=(0,l.up)("ErrorMessage"),c=(0,l.up)("VForm");return(0,l.wg)(),(0,l.iD)("div",Ot,[(0,l._)("div",St,[(0,l._)("div",Et,[(0,l._)("div",zt,[(0,l._)("h1",Zt,[i.status?((0,l.wg)(),(0,l.iD)("span",At,"新增工單")):((0,l.wg)(),(0,l.iD)("span",It,"修改工單"))]),(0,l._)("button",{type:"button",class:"btn-close",onClick:e[0]||(e[0]=(...t)=>r.hideModal&&r.hideModal(...t)),"aria-label":"Close"})]),(0,l.Wm)(c,{ref:"formRefSignin",id:"profileForm",onSubmit:r.editOrder},{default:(0,l.w5)((({meta:t})=>[(0,l._)("div",Tt,[(0,l._)("section",null,[(0,l._)("div",Ht,[(0,l.Wm)(d,{name:"廠商",type:"text",rules:r.isCompanyExist,class:"form-control",list:"datalistOptions"},null,8,["rules"]),(0,l._)("datalist",Nt,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.companyList,((t,e)=>((0,l.wg)(),(0,l.iD)("option",{key:e,value:t.companyName},null,8,Yt)))),128))]),(0,l._)("label",Kt,[(0,l.Uk)("廠商名稱"),(0,l.Wm)(m,{name:"廠商",class:"text-danger ms-3"})])]),(0,l._)("div",Pt,[(0,l.Wm)(d,{name:"施工地址",rules:"required",type:"text",modelValue:i.tempData.address,"onUpdate:modelValue":e[1]||(e[1]=t=>i.tempData.address=t),class:"form-control"},null,8,["modelValue"]),(0,l._)("label",qt,[(0,l.Uk)("施工地址"),(0,l.Wm)(m,{name:"施工地址",class:"text-danger ms-3"})])]),(0,l._)("div",jt,[(0,l.Wm)(d,{name:"施工日期",rules:"required",type:"date",modelValue:i.tempData.constructionDate,"onUpdate:modelValue":e[2]||(e[2]=t=>i.tempData.constructionDate=t),class:"form-control"},null,8,["modelValue"]),(0,l._)("label",Ft,[(0,l.Uk)("施工日期"),(0,l.Wm)(m,{name:"施工日期",class:"text-danger ms-3"})])]),(0,l._)("div",Jt,[(0,l.Wm)(d,{name:"付款方式",as:"select",rules:"required",class:"form-control",modelValue:i.tempData.paymentMethod,"onUpdate:modelValue":e[3]||(e[3]=t=>i.tempData.paymentMethod=t)},{default:(0,l.w5)((()=>[Rt,Bt])),_:1},8,["modelValue"]),(0,l._)("label",Gt,[(0,l.Uk)("付款方式"),(0,l.Wm)(m,{name:"付款方式",class:"text-danger ms-3"})])]),(0,l._)("div",Qt,[(0,l.Wm)(d,{name:"總金額",type:"number",rules:"required",modelValue:i.tempData.total,"onUpdate:modelValue":e[4]||(e[4]=t=>i.tempData.total=t),class:"form-control"},null,8,["modelValue"]),(0,l._)("label",Xt,[(0,l.Uk)("總金額"),(0,l.Wm)(m,{name:"總金額",class:"text-danger ms-3"})])]),(0,l._)("div",te,[(0,l.Wm)(d,{name:"保留款",type:"number",modelValue:i.tempData.retainage,"onUpdate:modelValue":e[5]||(e[5]=t=>i.tempData.retainage=t),class:"form-control"},null,8,["modelValue"]),(0,l._)("label",ee,[(0,l.Uk)("保留款"),(0,l.Wm)(m,{name:"保留款",class:"text-danger ms-3"})])])]),(0,l._)("section",null,[ae,(0,l._)("div",le,[(0,l._)("div",se,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.workerList,((t,e)=>((0,l.wg)(),(0,l.iD)("button",{key:e,type:"button",class:(0,o.C_)(["btn",t.status?"btn-primary":"btn-outline-primary"]),onClick:a=>r.toggleCheck(t,e)},(0,o.zw)(t.name),11,oe)))),128))]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.tempWorkerList,((t,e)=>((0,l.wg)(),(0,l.iD)("div",{key:e,class:"input-group mb-2"},[(0,l.wy)((0,l._)("input",{type:"text",placeholder:"工人姓名",class:"form-control","onUpdate:modelValue":e=>t.name=e,disabled:""},null,8,ne),[[s.nr,t.name]]),(0,l._)("input",{type:"text",placeholder:"工人電話",class:"form-control",value:t.phone,disabled:""},null,8,ie),(0,l.wy)((0,l._)("input",{type:"number",placeholder:"工作時數",class:"form-control","onUpdate:modelValue":t=>i.tempWorkerList[e].time=t},null,8,re),[[s.nr,i.tempWorkerList[e].time]])])))),128))]),de,(0,l._)("div",null,[me,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.tempData.transferWorkers,((t,e)=>((0,l.wg)(),(0,l.iD)("div",{key:e,class:"input-group mb-2"},[(0,l.wy)((0,l._)("input",{type:"text",placeholder:"工人姓名",class:"form-control","onUpdate:modelValue":t=>i.tempData.transferWorkers[e].name=t},null,8,ce),[[s.nr,i.tempData.transferWorkers[e].name]]),(0,l.wy)((0,l._)("input",{type:"text","aria-label":"Last name",placeholder:"工人電話",class:"form-control","onUpdate:modelValue":t=>i.tempData.transferWorkers[e].phone=t},null,8,ue),[[s.nr,i.tempData.transferWorkers[e].phone]]),(0,l.wy)((0,l._)("input",{type:"number","aria-label":"Last name",placeholder:"工作時數",class:"form-control","onUpdate:modelValue":t=>i.tempData.transferWorkers[e].time=t},null,8,pe),[[s.nr,i.tempData.transferWorkers[e].time]]),(0,l._)("button",{class:"btn btn-outline-danger",type:"button",id:"button-add",onClick:t=>r.deleteTransArray(e)}," 刪除 ",8,he)])))),128)),(0,l._)("div",fe,[(0,l._)("button",{class:"btn btn-outline-dark",type:"button",onClick:e[6]||(e[6]=(...t)=>r.addTransArray&&r.addTransArray(...t))}," 新增 ")])])])]),(0,l._)("div",be,[i.status?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("button",{key:0,type:"button",class:"btn btn-outline-danger",onClick:e[7]||(e[7]=t=>r.deleteOrder(i.tempData._id))}," 刪除該工單 ")),_e,(0,l._)("button",{type:"submit",class:"btn btn-primary",disabled:!t.valid}," 儲存 ",8,ge)])])),_:1},8,["onSubmit"])])])],512)}var we={data(){return{modal:"",status:!1,tempData:{address:"",company:"",status:0,paymentMethod:"",total:0,retainage:0,constructionDate:"",workers:[],transferWorkers:[]},tempWorker:[],companyList:[],workerList:[],tempWorkerList:[]}},watch:{},methods:{isCompanyExist(t){this.tempData.company="";let e="";return this.companyList.forEach((a=>{a.companyName===t&&(e=a.company,this.tempData.company=a._id)})),""!==e||"查無此廠商"},getCompany(){this.$emitter.emit("loadingStatus",!0),(0,O.rO)().then((t=>{this.$emitter.emit("loadingStatus",!1),this.companyList=t.data.data})).catch((t=>{this.$emitter.emit("loadingStatus",!1),console.log(t)}))},getWorker(){this.$emitter.emit("loadingStatus",!0),(0,O.mL)().then((t=>{this.$emitter.emit("loadingStatus",!1),this.workerList=t.data.data})).catch((t=>{this.$emitter.emit("loadingStatus",!1),console.log(t)}))},toggleCheck(t,e){if(this.workerList[e].status=!t.status,t.status)this.tempWorkerList.push(t);else{const e=e=>e._id===t._id,a=this.tempWorkerList.findIndex(e);this.tempWorkerList.splice(a,1)}},deleteOrder(t){this.$emitter.emit("loadingStatus",!0),(0,O.LW)(t).then((()=>{this.$emitter.emit("loadingStatus",!1),this.$emitter.emit("messageModal",{status:!0,message:"刪除成功"}),this.$emitter.emit("getOrder"),this.hideModal()})).catch((t=>{console.log(t)}))},editOrder(){this.tempData.workers=this.tempWorkerList,(0,O.WA)(this.tempData).then((()=>{this.$emitter.emit("loadingStatus",!1),this.$emitter.emit("messageModal",{status:!0,message:"修改成功"}),this.$emitter.emit("getOrder"),this.hideModal()})).catch((t=>{console.log(t),this.$emitter.emit("loadingStatus",!1)}))},addTransArray(){this.tempData.transferWorkers.push({})},deleteTransArray(t){this.tempData.transferWorkers.splice(t,1)},showModal(){this.modal.show()},hideModal(){this.tempData={address:"",company:"",status:0,paymentMethod:"",total:0,retainage:0,constructionDate:"",workers:[],transferWorkers:[]},this.modal.hide()}},mounted(){this.getCompany(),this.getWorker(),this.modal=new Lt.u_(this.$refs.edit),this.$emitter.on("editOrder",(t=>{this.status=t.status,t.status||(this.tempData=JSON.parse(JSON.stringify(t.data)),this.tempData.workers.forEach((t=>{this.workerList.forEach((e=>{t._id._id===e._id&&(e.status=!0)}))})),this.tempWorkerList=[],this.workerList.forEach((t=>{t.status&&this.tempWorkerList.push(t)})),this.tempWorkerList.forEach((t=>{this.tempData.workers.forEach((e=>{t._id===e._id._id&&(t.time=e.time)}))}))),this.showModal()}))}};const ke=(0,Ut.Z)(we,[["render",ye]]);var ve=ke;const De={class:"modal fade",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"pdfModal"},xe={class:"modal-dialog modal-xl"},We={class:"modal-content"},$e=(0,l._)("div",{class:"modal-header"},[(0,l._)("h1",{class:"modal-title fs-5"},"Modal title"),(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Le={class:"modal-body"},Ve={ref:"pdf",class:"px-5 py-0"},Ue=(0,l._)("h1",{class:"text-center mb-5"},"工程承攬合約書",-1),Ce={class:"h4 d-flex ms-5 mb-5"},Me=(0,l._)("div",null,"立合約書人：",-1),Oe={class:"d-flex flex-column"},Se=(0,l._)("div",{class:"mb-3"},"業主＿＿＿公司(以下稱甲方)",-1),Ee={class:"text-info px-3 text-decoration-underline"},ze=(0,l._)("div",{class:"h4 mb-5"}," 茲因乙方承包甲方______工程，雙方同意訂定合約條款如下，以資互相遵守: ",-1),Ze={class:"list-unstyled h5 mb-5"},Ae={class:"mb-4"},Ie={class:"text-info px-3 text-decoration-underline"},Te=(0,l._)("li",{class:"mb-4"}," 二、 工程圖說明:乙方應按經甲方認可之設計圖說規格切實施工。(圖說如附件) ",-1),He=(0,l._)("li",{class:"mb-4"}," 三、 工程材料:本工程須按設計圖及施工說明書中所註明之材料施工，甲方得隨時派人監工。 ",-1),Ne=(0,l._)("li",{class:"mb-4"}," 四、 施工期限:自民國 年 月 日起至民國 年 月 日止， 共計 工作天。 ",-1),Ye={class:"mb-4"},Ke={class:"text-info px-3 text-decoration-underline"},Pe=(0,l.uE)('<li class="mb-4"> 六、 付款辦法: <ul class="list-unstyled ps-5"><li class="mb-2"> (1)本契約訂定之日給付工程總價三○%計新台幣__元整。 </li><li class="mb-2"> (2)工程完成四成時給付工程總價四○%計新台幣__元整。 </li><li class="mb-2"> (3)工程完成八成時給付工程總價二五%計新台幣__元整。 </li><li class="mb-2">(4)工程完成驗收後付清工程尾款。</li><li class="mb-2">(5)付款方式以現款付之。</li><li class="mb-2"> (6)上列四項付款期限如甲方故意遲延給付時，乙方對以後工程得自動停止 進行。其停止期間不計入第四條之施工期限內。 </li></ul></li><li class="mb-4"><div class="d-flex"><div class="text-nowrap">七、 工程變更:</div><div> 甲方認為本工程其中部份有變更之必要時，得通知乙方辦理，因 工程變更而有數量之增減時，其工程費之計算，仍以估價單內所 列單價為準，如有新增項目，應由雙方共同議定合理之單價。是 項增減工程價款及付款方式經雙方議定後，用書面附入本合約內 作為附件。 </div></div></li><li class="mb-4"> 八、 工程意外: <ul class="list-unstyled ps-4"><li class="mb-2"> (1) 本工程進行中因乙方之疏忽及過失，以致損害他人之身體或財產時，乙 方應付賠償責任。但因不可抗力之損失者不在此限。 </li><li> (2) 施工期間如遇天災地變等非人為因素之變故，亦不在此限。 </li></ul></li><li class="mb-4"><div class="d-flex"><div class="text-nowrap">九、 工程配合:</div><div> 本工程由甲方供給之材料或他包之配合工程，如未能按期供應或 未能按期施工，致使乙方之工程進度滯緩時，得依遲緩日數延長 本工程施工期限。 </div></div></li><li class="mb-4"><div class="d-flex"><div class="text-nowrap">十、 工程驗收:</div><div>工程完成後，甲方應於三天內驗收完畢，不得拖延。</div></div></li>',5),qe=(0,l.uE)('<div class="h4 mb-2"> 本契約壹式貳份，由甲乙雙方各執乙份為憑。 </div><div class="h4 mb-5"> 如有未盡事宜，雙方以誠實合理商獲協議以書面補充之。 </div><div class="h4 mb-5"><div class="mb-3 h3">業主(即甲方)</div><div class="mb-3">公司名稱:</div><div class="mb-3">代表人:</div><div class="mb-3">統一編號:</div><div class="mb-3">地址:</div><div class="mb-3">電話:</div></div>',3),je={class:"h4 mb-5"},Fe=(0,l._)("div",{class:"mb-3 h3"},"承包商(即乙方)",-1),Je={class:"mb-3"},Re={class:"ms-2 fw-bolder text-info"},Be={class:"mb-3"},Ge={class:"ms-2 fw-bolder text-info"},Qe={class:"mb-3"},Xe={class:"ms-2 fw-bolder text-info"},ta={class:"mb-3"},ea={class:"ms-2 fw-bolder text-info"},aa={class:"mb-3"},la={class:"ms-2 fw-bolder text-info"},sa=(0,l.uE)('<div class="text-center h3 text-nowrap"><span class="mx-5">中</span><span class="mx-5">華</span><span class="mx-5">民</span><span class="mx-5">國</span><span class="mx-5">年</span><span class="mx-5">月</span><span class="mx-5">日</span></div><div class="text-nowrap text-center h6">_</div>',2),oa={class:"modal-footer"};function na(t,e,a,s,n,i){return(0,l.wg)(),(0,l.iD)("div",De,[(0,l._)("div",xe,[(0,l._)("div",We,[$e,(0,l._)("div",Le,[(0,l._)("section",null,[(0,l._)("div",Ve,[Ue,(0,l._)("div",Ce,[Me,(0,l._)("div",Oe,[Se,(0,l._)("div",null,[(0,l.Uk)(" 承包商"),(0,l._)("span",Ee,(0,o.zw)(n.tempCompany.companyName),1),(0,l.Uk)("公司(以下稱乙方) ")])])]),ze,(0,l._)("ul",Ze,[(0,l._)("li",Ae,[(0,l.Uk)(" 一、 工程位置:本件工程座落於 "),(0,l._)("span",Ie,(0,o.zw)(n.tempData.address),1)]),Te,He,Ne,(0,l._)("li",Ye,[(0,l.Uk)(" 五、 工程總價:新台幣"),(0,l._)("span",Ke,(0,o.zw)(n.tempData.total),1),(0,l.Uk)("元整。 ")]),Pe]),qe,(0,l._)("div",je,[Fe,(0,l._)("div",Je,[(0,l.Uk)(" 公司名稱:"),(0,l._)("span",Re,(0,o.zw)(n.tempCompany.companyName),1)]),(0,l._)("div",Be,[(0,l.Uk)(" 代表人:"),(0,l._)("span",Ge,(0,o.zw)(n.tempCompany.name),1)]),(0,l._)("div",Qe,[(0,l.Uk)(" 統一編號:"),(0,l._)("span",Xe,(0,o.zw)(n.tempCompany.taxIdNumber),1)]),(0,l._)("div",ta,[(0,l.Uk)(" 地址:"),(0,l._)("span",ea,(0,o.zw)(n.tempCompany.address),1)]),(0,l._)("div",aa,[(0,l.Uk)(" 電話:"),(0,l._)("span",la,(0,o.zw)(n.tempCompany.taxIdNumber),1)])]),sa],512)])]),(0,l._)("div",oa,[(0,l._)("button",{class:"btn btn-dark",onClick:e[0]||(e[0]=t=>i.download())},"Download PDF")])])])],512)}var ia=a(4730),ra=a(1120),da={data(){return{pdfModal:"",tempData:{},tempCompany:{}}},methods:{download(){const t=595.28,e=841.89;ra(this.$refs.pdf,{scale:2,useCORS:!0,backgroundColor:"#fff"}).then((a=>{const l=a.width/t*e;let s=a.height,o=0;const n=t,i=t/a.width*a.height,r=a.toDataURL("image/jpeg",1),d=new ia.kH("p","pt","a4");if(s<l)d.addImage(r,"JPEG",0,0,n,i);else while(s>0)d.addImage(r,"JPEG",0,o,n,i),s-=l,o-=e,s>0&&d.addPage();d.save("test.pdf")}))},showModal(){this.pdfModal.show()}},mounted(){this.pdfModal=new Lt.u_(this.$refs.pdfModal),this.$emitter.on("pdfEmit",(t=>{this.tempData=t,this.tempCompany=this.tempData.company,this.showModal()}))}};const ma=(0,Ut.Z)(da,[["render",na]]);var ca=ma,ua=a(8769),pa={data(){return{companyList:[],orderList:[],selectOption:{sort:"asc",keyword:void 0}}},components:{AddEdit:Mt,Edit:ve,PDF:ca},watch:{"selectOption.sort"(){this.getOrderList()},"selectOption.keyword"(){this.getOrderList()}},methods:{checkSignIn(){const t=(0,ua.LP)();t?this.$http.defaults.headers.common.Authorization=`Bearer ${t}`:this.$router.push("/login")},getOrderList(){this.$emitter.emit("loadingStatus",!0),(0,O.RJ)(this.selectOption).then((t=>{this.$emitter.emit("loadingStatus",!1),this.orderList=t.data.data})).catch((t=>{this.$emitter.emit("loadingStatus",!1),console.log(t.response.data.message)}))},updateStatus(t){this.$emitter.emit("loadingStatus",!0),(0,O.TA)(t).then((()=>{this.getOrderList(),this.$emitter.emit("loadingStatus",!1)})).catch((t=>{console.log(t),this.$emitter.emit("loadingStatus",!1)}))},getCompanyList(){this.$emitter.emit("loadingStatus",!0),(0,O.rO)().then((t=>{this.$emitter.emit("loadingStatus",!1),this.companyList=t.data.data})).catch((t=>{this.$emitter.emit("loadingStatus",!1),console.log(t)}))}},mounted(){this.getOrderList(),this.getCompanyList(),this.$emitter.on("getOrder",(()=>{this.getOrderList()}))},created(){this.checkSignIn()}};const ha=(0,Ut.Z)(pa,[["render",M]]);var fa=ha},5649:function(t,e,a){var l=a(7697),s=a(2297),o=TypeError,n=Object.getOwnPropertyDescriptor,i=l&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=i?function(t,e){if(s(t)&&!n(t,"length").writable)throw new o("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},5565:function(t){var e=TypeError,a=9007199254740991;t.exports=function(t){if(t>a)throw e("Maximum allowed index exceeded");return t}},560:function(t,e,a){var l=a(9989),s=a(690),o=a(6310),n=a(5649),i=a(5565),r=a(3689),d=r((function(){return 4294967297!==[].push.call({length:4294967296},1)})),m=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},c=d||!m();l({target:"Array",proto:!0,arity:1,forced:c},{push:function(t){var e=s(this),a=o(e),l=arguments.length;i(a+l);for(var r=0;r<l;r++)e[a]=arguments[r],a++;return n(e,a),a}})}}]);
//# sourceMappingURL=940.e314e343.js.map