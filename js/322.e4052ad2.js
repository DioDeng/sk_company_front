"use strict";(self["webpackChunkweb"]=self["webpackChunkweb"]||[]).push([[322],{5044:function(t,e,a){a.d(e,{B1:function(){return d},Ck:function(){return c},IP:function(){return _},Jh:function(){return p},LW:function(){return y},Mu:function(){return r},Mz:function(){return k},RJ:function(){return b},TA:function(){return f},Vh:function(){return g},WA:function(){return w},fy:function(){return h},i3:function(){return s},mL:function(){return i},nx:function(){return n},rO:function(){return m},yb:function(){return u}});var o=a(5121);const l="https://skcompoany.zeabur.app",i=()=>o.Z.get(`${l}/admin/workers`),n=t=>o.Z.post(`${l}/admin/worker`,t),s=t=>o.Z.patch(`${l}/admin/worker`,t),r=t=>o.Z.delete(`${l}/admin/worker/${t}`),d=t=>o.Z.get(`${l}/admin/workerList/${t}`),m=()=>o.Z.get(`${l}/admin/companys`),u=t=>o.Z.post(`${l}/admin/company`,t),c=t=>o.Z.patch(`${l}/admin/company`,t),p=t=>o.Z.delete(`${l}/admin/company/${t}`),h=t=>o.Z.get(`${l}/admin/cooperateList/${t}`),b=t=>o.Z.get(`${l}/admin/orders`,{params:t}),_=t=>o.Z.get(`${l}/admin/order/${t}`),g=t=>o.Z.post(`${l}/admin/order`,t),f=t=>o.Z.patch(`${l}/admin/orderStatus`,t),w=t=>o.Z.patch(`${l}/admin/order`,t),y=t=>o.Z.delete(`${l}/admin/order/${t}`),k=t=>o.Z.post(`${l}/admin/sign_in`,t)},8769:function(t,e,a){a.d(e,{LP:function(){return o},qz:function(){return l}});const o=()=>{const t=document.cookie.replace(/(?:(?:^|.*;\s*)admin\s*=\s*([^;]*).*$)|^.*$/,"$1");return t},l=()=>{document.cookie="admin=;expires=;path=/"}},322:function(t,e,a){a.r(e),a.d(e,{default:function(){return qt}});var o=a(6252),l=a(3577);const i={class:"py-4"},n={class:"mb-3 d-flex justify-content-between"},s=(0,o._)("ul",{class:"list-unstyled"},[(0,o._)("li",{class:"nav-item dropdown"},[(0,o._)("a",{class:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," 篩選 "),(0,o._)("ul",{class:"dropdown-menu"},[(0,o._)("li",null,[(0,o._)("a",{class:"dropdown-item",href:"#"},"Action")]),(0,o._)("li",null,[(0,o._)("a",{class:"dropdown-item",href:"#"},"Another action")]),(0,o._)("li",null,[(0,o._)("hr",{class:"dropdown-divider"})]),(0,o._)("li",null,[(0,o._)("a",{class:"dropdown-item",href:"#"},"Something else here")])])])],-1),r={class:"table table-striped table-hover"},d=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",{scope:"col"},"#"),(0,o._)("th",{scope:"col"},"姓名"),(0,o._)("th",{scope:"col"},"電話"),(0,o._)("th",{scope:"col"},"身份證"),(0,o._)("th",{scope:"col"},"年資"),(0,o._)("th",{scope:"col"},"職別"),(0,o._)("th",{scope:"col"},"工作記錄"),(0,o._)("th",{scope:"col"},"修改")])],-1),m={scope:"row"},u=["onClick"],c=["onClick"],p=(0,o._)("i",{class:"bi bi-journal-text"},null,-1),h=[p],b=["onClick"],_=(0,o._)("i",{class:"bi bi-pencil"},null,-1),g=[_];function f(t,e,a,p,_,f){const w=(0,o.up)("IdCardModal"),y=(0,o.up)("WorkRecordModal"),k=(0,o.up)("AddEditModal");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("section",i,[(0,o._)("div",n,[s,(0,o._)("button",{class:"btn btn-dark",onClick:e[0]||(e[0]=t=>this.$emitter.emit("addEdit",{status:!0}))}," 新增員工 ")]),(0,o._)("table",r,[d,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(_.workerList,((t,e)=>((0,o.wg)(),(0,o.iD)("tr",{key:e},[(0,o._)("th",m,(0,l.zw)(e+1),1),(0,o._)("td",null,(0,l.zw)(t.name),1),(0,o._)("td",null,(0,l.zw)(t.phone),1),(0,o._)("td",null,[(0,o._)("button",{type:"button",onClick:e=>this.$refs.idModal.showModal(t),class:"btn btn-outline-dark"},(0,l.zw)(t.idNumber),9,u)]),(0,o._)("td",null,(0,l.zw)(t.seniority),1),(0,o._)("td",null,(0,l.zw)(t.position),1),(0,o._)("td",null,[(0,o._)("button",{class:"btn btn-dark",onClick:e=>this.$emitter.emit("workerList",t._id)},h,8,c)]),(0,o._)("td",null,[(0,o._)("button",{class:"btn btn-success",onClick:e=>this.$emitter.emit("addEdit",{status:!1,data:t})},g,8,b)])])))),128))])])]),(0,o.Wm)(w,{ref:"idModal"},null,512),(0,o.Wm)(y),(0,o.Wm)(k)],64)}a(560);var w=a(5044);const y={class:"modal fade",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"idCardModal"},k={class:"modal-dialog"},$={class:"modal-content"},v={class:"modal-header"},D={class:"modal-title fs-5",id:"exampleModalLabel"},M=(0,o._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),x={class:"modal-body"},S=["src"];function W(t,e,a,i,n,s){return(0,o.wg)(),(0,o.iD)("div",y,[(0,o._)("div",k,[(0,o._)("div",$,[(0,o._)("div",v,[(0,o._)("h1",D,(0,l.zw)(n.tempData.idNumber),1),M]),(0,o._)("div",x,[(0,o._)("img",{src:n.tempData.imageFront,alt:""},null,8,S)])])])],512)}var C=a(8877),L={data(){return{modal:"",tempData:""}},methods:{showModal(t){this.tempData=t,this.modal.show()}},mounted(){this.modal=new C.u_(this.$refs.idCardModal)}},O=a(3744);const V=(0,O.Z)(L,[["render",W]]);var Z=V,E=a(9963);const z={class:"modal fade",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"workRecordModal"},A={class:"modal-dialog modal-fullscreen-xl-down"},P={class:"modal-content"},U=(0,o._)("div",{class:"modal-header"},[(0,o._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),I={class:"modal-body"},N={class:"table table-striped"},R=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",{scope:"col"},"#"),(0,o._)("th",{scope:"col"},"工程名稱"),(0,o._)("th",{scope:"col"},"日期"),(0,o._)("th",{scope:"col"},"時數")])],-1),F={scope:"row"},T=["onClick"],j=(0,o._)("td",{colspan:"3"},"總累積時數：",-1),B={key:0},q={class:"row g-3"},J={class:"col-md-6"},H=(0,o._)("label",{for:"inputEmail4",class:"form-label"},"廠商名稱",-1),Y={class:"col-md-6"},G=(0,o._)("label",{for:"inputPassword4",class:"form-label"},"負責人",-1),K={class:"col-12"},Q=(0,o._)("label",{for:"inputAddress",class:"form-label"},"施工地址",-1),X={class:"col-md-6"},tt=(0,o._)("label",{for:"inputAddress2",class:"form-label"},"工程日期",-1),et={class:"col-md-6"},at={key:0},ot={key:1};function lt(t,e,a,i,n,s){return(0,o.wg)(),(0,o.iD)("div",z,[(0,o._)("div",A,[(0,o._)("div",P,[U,(0,o._)("div",I,[(0,o._)("table",N,[R,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.tempData,((t,e)=>((0,o.wg)(),(0,o.iD)("tr",{key:e},[(0,o._)("th",F,(0,l.zw)(e+1),1),(0,o._)("td",null,[(0,o._)("button",{class:"btn btn-dark",onClick:e=>s.getOrder(t._id)},(0,l.zw)(t._id),9,T)]),(0,o._)("td",null,(0,l.zw)(t.constructionDate),1),(0,o._)("td",null,(0,l.zw)(t.time),1)])))),128)),(0,o._)("tr",null,[j,(0,o._)("td",null,(0,l.zw)(n.times),1)])])]),n.tempOrder?((0,o.wg)(),(0,o.iD)("div",B,[(0,o._)("form",q,[(0,o._)("div",J,[H,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"inputEmail4",disabled:"","onUpdate:modelValue":e[0]||(e[0]=t=>n.tempOrder.company.companyName=t)},null,512),[[E.nr,n.tempOrder.company.companyName]])]),(0,o._)("div",Y,[G,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"inputPassword4","onUpdate:modelValue":e[1]||(e[1]=t=>n.tempOrder.company.name=t),disabled:""},null,512),[[E.nr,n.tempOrder.company.name]])]),(0,o._)("div",K,[Q,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"inputAddress","onUpdate:modelValue":e[2]||(e[2]=t=>n.tempOrder.address=t),disabled:""},null,512),[[E.nr,n.tempOrder.address]])]),(0,o._)("div",X,[tt,(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"inputAddress2",disabled:"","onUpdate:modelValue":e[3]||(e[3]=t=>n.tempOrder.constructionDate=t)},null,512),[[E.nr,n.tempOrder.constructionDate]])]),(0,o._)("div",et,[(0,o._)("button",{class:(0,l.C_)(["btn",[n.tempOrder.status?"btn-outline-success":"btn-outline-danger"]]),disabled:""},[n.tempOrder.status?((0,o.wg)(),(0,o.iD)("span",at,"完工")):((0,o.wg)(),(0,o.iD)("span",ot,"未完工"))],2)])])])):(0,o.kq)("",!0)])])])],512)}var it={data(){return{modal:"",tempData:"",times:0,tempOrder:""}},methods:{getOrder(t){this.$emitter.emit("loadingStatus",!0),(0,w.IP)(t).then((t=>{this.$emitter.emit("loadingStatus",!1),this.tempOrder=t.data.data})).catch((t=>{console.log(t),this.$emitter.emit("loadingStatus",!1)}))},getWorkerList(t){this.$emitter.emit("loadingStatus",!0),(0,w.B1)(t).then((t=>{this.tempData=t.data.data,this.$emitter.emit("loadingStatus",!1),this.totalTime()})).catch((t=>{console.log(t),this.$emitter.emit("loadingStatus",!0)}))},totalTime(){this.times=0,this.tempData.forEach((t=>{this.times+=t.time}))},showModal(){this.modal.show()}},mounted(){this.modal=new C.u_(this.$refs.workRecordModal),this.$emitter.on("workerList",(t=>{this.tempOrder="",this.getWorkerList(t),this.showModal()}))}};const nt=(0,O.Z)(it,[["render",lt]]);var st=nt;const rt={class:"modal fade","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"AddEdit"},dt={class:"modal-dialog"},mt={class:"modal-content"},ut={class:"modal-header"},ct={class:"modal-title fs-5",id:"exampleModalLabel"},pt={key:0},ht={key:1},bt={class:"modal-body"},_t={class:"form-floating mb-3"},gt={for:"floatingInput"},ft={class:"form-floating mb-3"},wt={for:"phone"},yt={class:"form-floating mb-3"},kt={for:"floatingInput"},$t={class:"input-group mb-3"},vt=(0,o._)("label",{for:"imageFront",class:"input-group-text"},"上傳身分證或居留證正面",-1),Dt=(0,o._)("div",{class:"input-group mb-3"},[(0,o._)("input",{type:"file",class:"form-control",accept:"image/*",id:"imageBack",name:"image"}),(0,o._)("label",{for:"imageBack",class:"input-group-text"},"上傳身分證或居留證反面")],-1),Mt={class:"input-group mb-3"},xt=(0,o._)("label",{class:"input-group-text",for:"inputGroupSelect01"},"員工職別",-1),St=(0,o._)("option",{value:"工人",selected:""},"工人",-1),Wt=(0,o._)("option",{value:"監工"},"監工",-1),Ct=(0,o._)("option",{value:"工地主任"},"工地主任",-1),Lt=(0,o._)("option",{value:"工頭"},"工頭",-1),Ot=[St,Wt,Ct,Lt],Vt={class:"input-group mb-3"},Zt=(0,o._)("label",{for:"date",class:"input-group-text"},"入職日期",-1),Et={class:"form-floating mb-3"},zt={for:"floatingInput"},At={class:"modal-footer justify-content-between"},Pt=(0,o._)("div",null,null,-1),Ut=["disabled"];function It(t,e,a,i,n,s){const r=(0,o.up)("VField"),d=(0,o.up)("ErrorMessage"),m=(0,o.up)("error-message"),u=(0,o.up)("VForm");return(0,o.wg)(),(0,o.iD)("div",rt,[(0,o._)("div",dt,[(0,o._)("div",mt,[(0,o._)("div",ut,[(0,o._)("h1",ct,[n.status?((0,o.wg)(),(0,o.iD)("span",pt,"新增員工")):((0,o.wg)(),(0,o.iD)("span",ht,"修改員工"))]),(0,o._)("button",{type:"button",class:"btn-close",onClick:e[0]||(e[0]=(...t)=>s.hideModal&&s.hideModal(...t)),"aria-label":"Close"})]),(0,o.Wm)(u,{ref:"formRefSignin",id:"profileForm",onSubmit:s.addEditWorker},{default:(0,o.w5)((({errors:a,meta:i})=>[(0,o._)("div",bt,[(0,o._)("div",_t,[(0,o.Wm)(r,{name:"姓名",type:"text",rules:"required",class:"form-control",modelValue:n.tempData.name,"onUpdate:modelValue":e[1]||(e[1]=t=>n.tempData.name=t)},null,8,["modelValue"]),(0,o._)("label",gt,[(0,o.Uk)("員工姓名 "),(0,o.Wm)(d,{name:"姓名",class:"text-danger ms-3"})])]),(0,o._)("div",ft,[(0,o.Wm)(r,{id:"phone",name:"phone",type:"text",class:(0,l.C_)(["form-control",{"is-invalid":a["電話"]}]),rules:s.isPhone,modelValue:n.tempData.phone,"onUpdate:modelValue":e[2]||(e[2]=t=>n.tempData.phone=t)},null,8,["class","rules","modelValue"]),(0,o._)("label",wt,[(0,o.Uk)("phone"),(0,o.Wm)(m,{name:"phone",class:"text-danger ms-3"})])]),(0,o._)("div",yt,[(0,o.Wm)(r,{name:"身分證字號或居留證",class:"form-control",type:"text",rules:"required|min:10",modelValue:n.tempData.idNumber,"onUpdate:modelValue":e[3]||(e[3]=t=>n.tempData.idNumber=t)},null,8,["modelValue"]),(0,o._)("label",kt,[(0,o.Uk)("身分證字號或居留證 "),(0,o.Wm)(d,{name:"身分證字號或居留證",class:"ms-3 text-danger"})])]),(0,o._)("div",$t,[(0,o._)("input",{class:"form-control",type:"file",accept:"image/*",id:"imageFront",name:"image",onChange:e[4]||(e[4]=(...e)=>t.uploadImage&&t.uploadImage(...e))},null,32),vt]),Dt,(0,o._)("div",Mt,[xt,(0,o.wy)((0,o._)("select",{class:"form-select",id:"inputGroupSelect01","onUpdate:modelValue":e[5]||(e[5]=t=>n.tempData.position=t)},Ot,512),[[E.bM,n.tempData.position]])]),(0,o._)("div",Vt,[Zt,(0,o.wy)((0,o._)("input",{id:"date",name:"date",type:"date",placeholder:"Enter email",class:"form-control","onUpdate:modelValue":e[6]||(e[6]=t=>n.tempData.seniority=t)},null,512),[[E.nr,n.tempData.seniority]])]),(0,o._)("div",Et,[(0,o.Wm)(r,{name:"時薪",type:"text",modelValue:n.tempData.hourlyRate,"onUpdate:modelValue":e[7]||(e[7]=t=>n.tempData.hourlyRate=t),rules:"numeric",class:"form-control"},null,8,["modelValue"]),(0,o._)("label",zt,[(0,o.Uk)("時薪 "),(0,o.Wm)(d,{name:"時薪",class:"text-danger ms-3"})])])]),(0,o._)("div",At,[n.status?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("button",{key:0,type:"button",class:"btn btn-outline-danger",onClick:e[8]||(e[8]=(...t)=>s.deleteProfile&&s.deleteProfile(...t))}," 刪除員工資料 ")),Pt,(0,o._)("button",{type:"submit",class:"btn btn-primary",disabled:!i.valid}," Save changes ",8,Ut)])])),_:1},8,["onSubmit"])])])],512)}var Nt={data(){return{modal:"",status:!1,tempData:{name:"",phone:"",idNumber:"",imageFront:"",imageBack:"",seniority:"",hourlyRate:0,position:"工人",_id:""}}},methods:{isPhone(t){const e=/^(09)[0-9]{8}$/;return!!e.test(t)||"需要正確的電話號碼"},addEditWorker(){this.$emitter.emit("loadingStatus",!0),this.tempData._id?(0,w.i3)(this.tempData).then((()=>{this.$emitter.emit("messageModal",{status:!0,message:"修改成功"}),this.$emitter.emit("getWorkerLsit"),this.$emitter.emit("loadingStatus",!1),this.hideModal()})).catch((t=>{console.log(t),this.$emitter.emit("loadingStatus",!1)})):(0,w.nx)(this.tempData).then((t=>{console.log(t),this.$emitter.emit("messageModal",{status:!0,message:"新增成功"}),this.$emitter.emit("getWorkerLsit"),this.$emitter.emit("loadingStatus",!1),this.hideModal()})).catch((t=>{console.log(t),this.$emitter.emit("loadingStatus",!1)}))},deleteProfile(){this.$emitter.emit("loadingStatus",!0);const t=prompt(`輸入該用戶ＩＤ：${this.tempData._id}`,"");t===this.tempData._id?(0,w.Mu)(this.tempData._id).then((t=>{console.log(t),this.$emitter.emit("messageModal",{status:!0,message:"刪除成功"}),this.$emitter.emit("loadingStatus",!1),this.$emitter.emit("getWorkerLsit"),this.hideModal()})).catch((t=>{console.log(t),this.$emitter.emit("messageModal",{status:!1,message:"刪除失敗"}),this.$emitter.emit("loadingStatus",!1)})):this.$emitter.emit("loadingStatus",!1)},showModal(){this.modal.show()},hideModal(){this.tempData={},this.modal.hide()}},mounted(){this.modal=new C.u_(this.$refs.AddEdit),this.$emitter.on("addEdit",(t=>{this.status=t.status,t.status||(this.tempData=JSON.parse(JSON.stringify(t.data))),this.showModal()}))}};const Rt=(0,O.Z)(Nt,[["render",It]]);var Ft=Rt,Tt=a(8769),jt={data(){return{workerList:[]}},components:{IdCardModal:Z,WorkRecordModal:st,AddEditModal:Ft},methods:{checkSignIn(){const t=(0,Tt.LP)();t?this.$http.defaults.headers.common.Authorization=`Bearer ${t}`:this.$router.push("/login")},getWorkers(){this.$emitter.emit("loadingStatus",!0),(0,w.mL)().then((t=>{this.workerList=t.data.data,this.$emitter.emit("loadingStatus",!1)})).catch((t=>{console.log(t),this.$emitter.emit("loadingStatus",!1)}))}},mounted(){this.getWorkers(),this.$emitter.on("getWorkerLsit",(()=>{this.getWorkers()}))},created(){this.checkSignIn()}};const Bt=(0,O.Z)(jt,[["render",f]]);var qt=Bt},5649:function(t,e,a){var o=a(7697),l=a(2297),i=TypeError,n=Object.getOwnPropertyDescriptor,s=o&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=s?function(t,e){if(l(t)&&!n(t,"length").writable)throw new i("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},5565:function(t){var e=TypeError,a=9007199254740991;t.exports=function(t){if(t>a)throw e("Maximum allowed index exceeded");return t}},560:function(t,e,a){var o=a(9989),l=a(690),i=a(6310),n=a(5649),s=a(5565),r=a(3689),d=r((function(){return 4294967297!==[].push.call({length:4294967296},1)})),m=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},u=d||!m();o({target:"Array",proto:!0,arity:1,forced:u},{push:function(t){var e=l(this),a=i(e),o=arguments.length;s(a+o);for(var r=0;r<o;r++)e[a]=arguments[r],a++;return n(e,a),a}})}}]);
//# sourceMappingURL=322.e4052ad2.js.map