webpackJsonp([47],{dhRa:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("Dd8w"),a=i.n(n),l=i("XcM5"),o=i("0xDb"),s=i("NYxO"),r={filters:{statusFilter:function(t){return{published:"success",draft:"gray",deleted:"danger"}[t]}},data:function(){return{itemKey:null,tmpdeployunitname:null,tmpprotocal:null,depunitList:[],listLoading:!1,total:0,dialogStatus:"add",dialogFormVisible:!1,textMap:{updateRole:"修改发布单元(服务)",update:"修改发布单元(服务)",add:"添加发布单元(服务)"},btnLoading:!1,tmpdepunit:{id:"",deployunitname:"",protocal:"",port:"",baseurl:"",memo:"",creator:""},search:{page:1,size:10,deployunitname:null,protocal:null},createRules:{email:[{required:!0,trigger:"blur",validator:function(t,e,i){e.length<3?i(new Error("账户名长度必须 ≥ 3")):i()}}]}}},computed:a()({},Object(s.b)(["name","sidebar","avatar"])),created:function(){this.getdepunitList()},methods:{unix2CurrentTime:o.b,getdepunitList:function(){var t=this;this.search.deployunitname=this.tmpdeployunitname,this.search.protocal=this.tmpprotocal,this.listLoading=!0,Object(l.h)(this.search).then(function(e){t.depunitList=e.data.list,t.total=e.data.total,t.listLoading=!1}).catch(function(e){t.$message.error("加载发布单元(服务)列表失败")})},searchBy:function(){var t=this;this.search.page=1,this.listLoading=!0,Object(l.h)(this.search).then(function(e){t.itemKey=Math.random(),t.depunitList=e.data.list,t.total=e.data.total}).catch(function(e){t.$message.error("搜索失败")}),this.tmpdeployunitname=this.search.deployunitname,this.tmpprotocal=this.search.protocal,this.listLoading=!1},handleSizeChange:function(t){this.search.page=1,this.search.size=t,this.getdepunitList()},handleCurrentChange:function(t){this.search.page=t,this.getdepunitList()},getIndex:function(t){return(this.search.page-1)*this.search.size+t+1},showAdddepunitDialog:function(){this.dialogFormVisible=!0,this.dialogStatus="add",this.tmpdepunit.id="",this.tmpdepunit.deployunitname="",this.tmpdepunit.protocal="",this.tmpdepunit.port="",this.tmpdepunit.baseurl="",this.tmpdepunit.memo="",this.tmpdepunit.creator=this.name},adddepunit:function(){var t=this;this.$refs.tmpdepunit.validate(function(e){e&&(t.btnLoading=!0,Object(l.a)(t.tmpdepunit).then(function(){t.$message.success("添加成功"),t.getdepunitList(),t.dialogFormVisible=!1,t.btnLoading=!1}).catch(function(e){t.$message.error("添加失败"),t.btnLoading=!1}))})},showUpdatedepunitDialog:function(t){this.dialogFormVisible=!0,this.dialogStatus="update",this.tmpdepunit.id=this.depunitList[t].id,this.tmpdepunit.deployunitname=this.depunitList[t].deployunitname,this.tmpdepunit.protocal=this.depunitList[t].protocal,this.tmpdepunit.port=this.depunitList[t].port,this.tmpdepunit.baseurl=this.depunitList[t].baseurl,this.tmpdepunit.memo=this.depunitList[t].memo,this.tmpdepunit.creator=this.name},updatedepunit:function(){var t=this;this.$refs.tmpdepunit.validate(function(e){e&&Object(l.i)(t.tmpdepunit).then(function(){t.$message.success("更新成功"),t.getdepunitList(),t.dialogFormVisible=!1}).catch(function(e){t.$message.error("更新失败"),t.btnLoading=!1})})},removedepunit:function(t){var e=this;this.$confirm("删除该发布单元(服务)？","警告",{confirmButtonText:"是",cancelButtonText:"否",type:"warning"}).then(function(){var i=e.depunitList[t].id;Object(l.g)(i).then(function(){e.$message.success("删除成功"),e.getdepunitList()})}).catch(function(){e.$message.info("已取消删除")})},isUniqueDetail:function(t){for(var e=0;e<this.depunitList.length;e++)if(this.depunitList[e].id!==t.id&&this.depunitList[e].deployunitname===t.deployunitname)return this.$message.error("发布单元(服务)名已存在"),!1;return!0}}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app-container"},[i("div",{staticClass:"filter-container"},[i("el-form",{attrs:{inline:!0}},[i("el-form-item",[t.hasPermission("depunit:list")?i("el-button",{attrs:{type:"success",size:"mini",icon:"el-icon-refresh"},nativeOn:{click:function(e){return e.preventDefault(),t.getdepunitList(e)}}},[t._v("刷新")]):t._e(),t._v(" "),t.hasPermission("depunit:add")?i("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-plus"},nativeOn:{click:function(e){return e.preventDefault(),t.showAdddepunitDialog(e)}}},[t._v("添加发布单元(服务)")]):t._e()],1),t._v(" "),t.hasPermission("depunit:search")?i("span",[i("el-form-item",[i("el-input",{attrs:{clearable:"",placeholder:"发布单元(服务)名"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchBy(e)}},model:{value:t.search.deployunitname,callback:function(e){t.$set(t.search,"deployunitname",e)},expression:"search.deployunitname"}})],1),t._v(" "),i("el-form-item",[i("el-input",{attrs:{clearable:"",placeholder:"协议"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchBy(e)}},model:{value:t.search.protocal,callback:function(e){t.$set(t.search,"protocal",e)},expression:"search.protocal"}})],1),t._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary",loading:t.btnLoading},on:{click:t.searchBy}},[t._v("查询")])],1)],1):t._e()],1)],1),t._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.listLoading,expression:"listLoading",modifiers:{body:!0}}],key:t.itemKey,attrs:{data:t.depunitList,"element-loading-text":"loading",border:"",fit:"","highlight-current-row":""}},[i("el-table-column",{attrs:{label:"编号",align:"center",width:"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",{domProps:{textContent:t._s(t.getIndex(e.$index))}})]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"发布单元(服务)名",align:"center",prop:"deployunitname",width:"120"}}),t._v(" "),i("el-table-column",{attrs:{label:"协议",align:"center",prop:"protocal",width:"110"}}),t._v(" "),i("el-table-column",{attrs:{label:"访问端口",align:"center",prop:"port",width:"100"}}),t._v(" "),i("el-table-column",{attrs:{label:"基础路径",align:"center",prop:"baseurl",width:"100"}}),t._v(" "),i("el-table-column",{attrs:{label:"描述",align:"center",prop:"memo",width:"100"}}),t._v(" "),i("el-table-column",{attrs:{label:"操作人",align:"center",prop:"creator",width:"100"}}),t._v(" "),i("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.unix2CurrentTime(e.row.createTime)))]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"最后修改时间",align:"center",prop:"lastmodifyTime",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.unix2CurrentTime(e.row.lastmodifyTime))+"\n      ")]}}])}),t._v(" "),t.hasPermission("depunit:update")||t.hasPermission("depunit:delete")?i("el-table-column",{attrs:{label:"管理",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.hasPermission("depunit:update")&&e.row.id!==t.id?i("el-button",{attrs:{type:"warning",size:"mini"},nativeOn:{click:function(i){return i.preventDefault(),t.showUpdatedepunitDialog(e.$index)}}},[t._v("修改")]):t._e(),t._v(" "),t.hasPermission("depunit:delete")&&e.row.id!==t.id?i("el-button",{attrs:{type:"danger",size:"mini"},nativeOn:{click:function(i){return i.preventDefault(),t.removedepunit(e.$index)}}},[t._v("删除")]):t._e()]}}],null,!1,2436649510)}):t._e()],1),t._v(" "),i("el-pagination",{attrs:{"current-page":t.search.page,"page-size":t.search.size,total:t.total,"page-sizes":[10,20,30,40],layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),t._v(" "),i("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[i("el-form",{ref:"tmpdepunit",staticClass:"small-space",staticStyle:{width:"400px","margin-left":"50px"},attrs:{"status-icon":"","label-position":"left","label-width":"120px",model:t.tmpdepunit}},[i("el-form-item",{attrs:{label:"发布单元名",prop:"deployunitname",required:""}},[i("el-input",{attrs:{type:"text",maxlength:"40","prefix-icon":"el-icon-edit","auto-complete":"off"},model:{value:t.tmpdepunit.deployunitname,callback:function(e){t.$set(t.tmpdepunit,"deployunitname",e)},expression:"tmpdepunit.deployunitname"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"协议",prop:"protocal",required:""}},[i("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"协议"},model:{value:t.tmpdepunit.protocal,callback:function(e){t.$set(t.tmpdepunit,"protocal",e)},expression:"tmpdepunit.protocal"}},[i("el-option",{attrs:{label:"http",value:"http"}}),t._v(" "),i("el-option",{attrs:{label:"https",value:"https"}})],1)],1),t._v(" "),i("el-form-item",{attrs:{label:"端口",prop:"port",required:""}},[i("el-input",{attrs:{type:"text",maxlength:"40","prefix-icon":"el-icon-message","auto-complete":"off"},model:{value:t.tmpdepunit.port,callback:function(e){t.$set(t.tmpdepunit,"port",e)},expression:"tmpdepunit.port"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"基础路径",prop:"baseurl"}},[i("el-input",{attrs:{type:"text",maxlength:"40","prefix-icon":"el-icon-message","auto-complete":"off"},model:{value:t.tmpdepunit.baseurl,callback:function(e){t.$set(t.tmpdepunit,"baseurl",e)},expression:"tmpdepunit.baseurl"}})],1),t._v(" "),i("el-form-item",{attrs:{label:"备注",prop:"memo"}},[i("el-input",{attrs:{type:"text",maxlength:"300","prefix-icon":"el-icon-message","auto-complete":"off"},model:{value:t.tmpdepunit.memo,callback:function(e){t.$set(t.tmpdepunit,"memo",e)},expression:"tmpdepunit.memo"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{nativeOn:{click:function(e){e.preventDefault(),t.dialogFormVisible=!1}}},[t._v("取消")]),t._v(" "),"add"===t.dialogStatus?i("el-button",{attrs:{type:"danger"},nativeOn:{click:function(e){return e.preventDefault(),t.$refs.tmpdepunit.resetFields()}}},[t._v("重置")]):t._e(),t._v(" "),"add"===t.dialogStatus?i("el-button",{attrs:{type:"success",loading:t.btnLoading},nativeOn:{click:function(e){return e.preventDefault(),t.adddepunit(e)}}},[t._v("添加")]):t._e(),t._v(" "),"update"===t.dialogStatus?i("el-button",{attrs:{type:"success",loading:t.btnLoading},nativeOn:{click:function(e){return e.preventDefault(),t.updatedepunit(e)}}},[t._v("修改")]):t._e()],1)],1)],1)},staticRenderFns:[]},p=i("VU/8")(r,u,!1,null,null,null);e.default=p.exports}});
//# sourceMappingURL=47.ed64235aef6040c807b0.js.map