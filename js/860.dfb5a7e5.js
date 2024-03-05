"use strict";(self["webpackChunkweb"]=self["webpackChunkweb"]||[]).push([[860],{3860:function(t,e,s){s.r(e),s.d(e,{default:function(){return I}});var l=s(6252),i=s(9963),o=s(3577);const n={class:"py-4"},a={class:"mb-3 d-flex justify-content-between"},c={class:"list-unstyled"},r={class:"nav-item dropdown"},d=(0,l._)("a",{class:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," 篩選 ",-1),u={class:"dropdown-menu"},h=(0,l._)("li",null,[(0,l._)("hr",{class:"dropdown-divider"})],-1),p=["onClick"],_=(0,l._)("i",{class:"bi bi-plus-lg"},null,-1),m={class:"table table-striped table-hover"},w=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",{scope:"col"},"#"),(0,l._)("th",{scope:"col"},"廠商"),(0,l._)("th",{scope:"col"},"付款方式"),(0,l._)("th",{scope:"col"},"案子金額"),(0,l._)("th",{scope:"col"},"施工地址"),(0,l._)("th",{scope:"col"},"施工日期"),(0,l._)("th",{scope:"col"},"工人名單"),(0,l._)("th",{scope:"col"},"狀態"),(0,l._)("th",{scope:"col"},"修改"),(0,l._)("th",{scope:"col"},"檢視")])],-1),g={scope:"row"},b={class:"table mb-0"},k=(0,l._)("thead",{class:"table-light"},[(0,l._)("tr",null,[(0,l._)("th",{scope:"col"},"#"),(0,l._)("th",{scope:"col"},"姓名"),(0,l._)("th",{scope:"col"},"電話"),(0,l._)("th",{scope:"col"},"工作時數")])],-1),y={scope:"row"},f={scope:"row"},C=["onClick"],O={key:0},$={key:1},z=["onClick"],L=(0,l._)("i",{class:"bi bi-pencil"},null,-1),v=[L],S=["onClick"],D=(0,l._)("i",{class:"bi bi-filetype-pdf"},null,-1),M=[D];function H(t,e,s,L,D,H){return(0,l.wg)(),(0,l.iD)("section",n,[(0,l._)("div",a,[(0,l._)("ul",c,[(0,l._)("li",r,[d,(0,l._)("ul",u,[(0,l._)("li",null,[(0,l._)("a",{class:"dropdown-item",href:"#",onClick:e[0]||(e[0]=(0,i.iM)((t=>D.selectOption.sort="asc"),["prevent"]))},"新->舊")]),(0,l._)("li",null,[(0,l._)("a",{class:"dropdown-item",href:"#",onClick:e[1]||(e[1]=(0,i.iM)((t=>D.selectOption.sort=""),["prevent"]))},"舊->新")]),h,(0,l._)("li",null,[(0,l._)("a",{class:"dropdown-item",href:"#",onClick:e[2]||(e[2]=(0,i.iM)((t=>D.selectOption.keyword=void 0),["prevent"]))},"所有")]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(D.companyList,((t,e)=>((0,l.wg)(),(0,l.iD)("li",{key:e},[(0,l._)("a",{class:"dropdown-item",href:"#",onClick:(0,i.iM)((e=>D.selectOption.keyword=t._id),["prevent"])},(0,o.zw)(t.companyName),9,p)])))),128))])])]),(0,l._)("button",{class:"btn btn-dark",onClick:e[3]||(e[3]=t=>this.$emitter.emit("addEditOrder",{status:!0}))},[(0,l.Uk)(" 新增工單"),_])]),(0,l._)("table",m,[w,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(D.orderList,((t,e)=>((0,l.wg)(),(0,l.iD)("tr",{key:e},[(0,l._)("th",g,(0,o.zw)(e+1),1),(0,l._)("td",null,(0,o.zw)(t.company.companyName),1),(0,l._)("td",null,(0,o.zw)(t.paymentMethod),1),(0,l._)("td",null,"$"+(0,o.zw)(this.$toCurrency(t.total)),1),(0,l._)("td",null,(0,o.zw)(t.address),1),(0,l._)("td",null,(0,o.zw)(t.constructionDate),1),(0,l._)("td",null,[(0,l._)("table",b,[k,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.workers,((t,e)=>((0,l.wg)(),(0,l.iD)("tr",{key:e},[(0,l._)("th",y,(0,o.zw)(e+1),1),(0,l._)("td",null,(0,o.zw)(t._id.name),1),(0,l._)("td",null,(0,o.zw)(t._id.phone),1),(0,l._)("td",null,(0,o.zw)(t.time),1)])))),128)),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.transferWorkers,((t,e)=>((0,l.wg)(),(0,l.iD)("tr",{key:e},[(0,l._)("th",f,"調用"+(0,o.zw)(e+1),1),(0,l._)("td",null,(0,o.zw)(t.name),1),(0,l._)("td",null,(0,o.zw)(t.phone),1),(0,l._)("td",null,(0,o.zw)(t.time),1)])))),128))])])]),(0,l._)("td",null,[(0,l._)("button",{type:"button",class:(0,o.C_)(["btn",[t.status?"btn-success":"btn-outline-danger"]]),onClick:e=>H.updateStatus(t)},[t.status?((0,l.wg)(),(0,l.iD)("span",O,"已完成")):((0,l.wg)(),(0,l.iD)("span",$,"未完成"))],10,C)]),(0,l._)("td",null,[(0,l._)("button",{class:"btn btn-secondary",onClick:e=>this.$emitter.emit("editOrder",{status:!1,data:t})},v,8,z)]),(0,l._)("td",null,[(0,l._)("button",{class:"btn btn-warning",onClick:e=>this.$emitter.emit("pdfEmit",t)},M,8,S)])])))),128))])])])}s(560);var K=s(5044),Y=s(8769),x={data(){return{companyList:[],orderList:[],selectOption:{sort:"asc",keyword:void 0}}},watch:{"selectOption.sort"(){this.getOrderList()},"selectOption.keyword"(){this.getOrderList()}},methods:{checkSignIn(){const t=(0,Y.LP)();t?this.$http.defaults.headers.common.Authorization=`Bearer ${t}`:this.$router.push("/login")},getOrderList(){this.$emitter.emit("loadingStatus",!0),(0,K.RJ)(this.selectOption).then((t=>{this.$emitter.emit("loadingStatus",!1),this.orderList=t.data.data})).catch((t=>{this.$emitter.emit("loadingStatus",!1),console.log(t.response.data.message)}))},updateStatus(t){this.$emitter.emit("loadingStatus",!0),(0,K.TA)(t).then((()=>{this.getOrderList(),this.$emitter.emit("loadingStatus",!1)})).catch((t=>{console.log(t),this.$emitter.emit("loadingStatus",!1)}))},getCompanyList(){this.$emitter.emit("loadingStatus",!0),(0,K.rO)().then((t=>{this.$emitter.emit("loadingStatus",!1),this.companyList=t.data.data})).catch((t=>{this.$emitter.emit("loadingStatus",!1),console.log(t)}))}},mounted(){this.getOrderList(),this.getCompanyList(),this.$emitter.on("getOrder",(()=>{this.getOrderList()}))},created(){this.checkSignIn()}},A=s(3744);const E=(0,A.Z)(x,[["render",H]]);var I=E}}]);
//# sourceMappingURL=860.dfb5a7e5.js.map