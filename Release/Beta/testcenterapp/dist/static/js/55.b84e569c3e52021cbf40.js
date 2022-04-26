webpackJsonp([55],{OfNB:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("Dd8w"),r=a.n(i),o=a("vLgD");function s(t){return Object(o.a)({url:"/project/search",method:"post",data:t})}var n=a("0xDb"),l=a("NYxO"),c={filters:{statusFilter:function(t){return{published:"success",draft:"gray",deleted:"danger"}[t]}},data:function(){return{itemKey:null,tmpprojectname:"",projectList:[],listLoading:!1,total:0,dialogStatus:"add",dialogFormVisible:!1,textMap:{updateRole:"修改项目迭代",update:"修改项目迭代",add:"添加项目迭代"},btnLoading:!1,tmpproject:{id:"",projectname:"",status:"",startTime:"",endTime:"",memo:"",creator:""},search:{page:1,size:10,projectname:null,status:null}}},created:function(){this.getprojectList()},computed:r()({},Object(l.b)(["name","sidebar","avatar"])),methods:{unix2CurrentTime:n.b,getprojectList:function(){var t=this;this.listLoading=!0,this.search.projectname=this.tmpprojectname,s(this.search).then(function(e){t.projectList=e.data.list,t.total=e.data.total,t.listLoading=!1}).catch(function(e){t.$message.error("加载项目迭代列表失败")})},searchBy:function(){var t=this;this.search.page=1,this.listLoading=!0,s(this.search).then(function(e){t.itemKey=Math.random(),t.projectList=e.data.list,t.total=e.data.total}).catch(function(e){t.$message.error("搜索失败")}),this.tmpprojectname=this.search.projectname,this.listLoading=!1,this.btnLoading=!1},handleSizeChange:function(t){this.search.page=1,this.search.size=t,this.getprojectList()},handleCurrentChange:function(t){this.search.page=t,this.getprojectList()},getIndex:function(t){return(this.search.page-1)*this.search.size+t+1},showAddprojectDialog:function(){this.dialogFormVisible=!0,this.dialogStatus="add",this.tmpproject.id="",this.tmpproject.projectname="",this.tmpproject.memo="",this.tmpproject.status="",this.tmpproject.startTime="",this.tmpproject.endTime="",this.tmpproject.creator=this.name},addproject:function(){var t=this;this.$refs.tmpproject.validate(function(e){var a;e&&(t.btnLoading=!0,(a=t.tmpproject,Object(o.a)({url:"/project",method:"post",data:a})).then(function(){t.$message.success("添加成功"),t.getprojectList(),t.dialogFormVisible=!1,t.btnLoading=!1}).catch(function(e){t.$message.error("添加失败"),t.btnLoading=!1}))})},showUpdateprojectDialog:function(t){this.dialogFormVisible=!0,this.dialogStatus="update",this.tmpproject.id=this.projectList[t].id,this.tmpproject.projectname=this.projectList[t].projectname,this.tmpproject.status=this.projectList[t].status,this.tmpproject.startTime=this.projectList[t].startTime,this.tmpproject.endTime=this.projectList[t].endTime,this.tmpproject.memo=this.projectList[t].memo,this.tmpproject.creator=this.name},updateproject:function(){var t=this;this.$refs.tmpproject.validate(function(e){var a;e&&(a=t.tmpproject,Object(o.a)({url:"/project/detail",method:"put",data:a})).then(function(){t.$message.success("更新成功"),t.getprojectList(),t.dialogFormVisible=!1}).catch(function(e){t.$message.error("更新失败")})})},removeproject:function(t){var e=this;this.$confirm("删除该项目迭代？","警告",{confirmButtonText:"是",cancelButtonText:"否",type:"warning"}).then(function(){var a,i=e.projectList[t].id;(a=i,Object(o.a)({url:"/project/"+a,method:"delete"})).then(function(){e.$message.success("删除成功"),e.getprojectList()})}).catch(function(){e.$message.info("已取消删除")})},isUniqueDetail:function(t){for(var e=0;e<this.projectList.length;e++)if(this.projectList[e].id!==t.id&&this.projectList[e].projectname===t.projectname)return this.$message.error("项目迭代名已存在"),!1;return!0}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",[t.hasPermission("project:list")?a("el-button",{attrs:{type:"success",size:"mini",icon:"el-icon-refresh"},nativeOn:{click:function(e){return e.preventDefault(),t.getprojectList(e)}}},[t._v("刷新")]):t._e(),t._v(" "),t.hasPermission("project:add")?a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-plus"},nativeOn:{click:function(e){return e.preventDefault(),t.showAddprojectDialog(e)}}},[t._v("添加项目迭代")]):t._e()],1),t._v(" "),t.hasPermission("project:search")?a("span",[a("el-form-item",[a("el-input",{attrs:{clearable:"",maxlength:"40",placeholder:"项目迭代名"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchBy(e)}},model:{value:t.search.projectname,callback:function(e){t.$set(t.search,"projectname",e)},expression:"search.projectname"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"状态"},model:{value:t.search.status,callback:function(e){t.$set(t.search,"status",e)},expression:"search.status"}},[a("el-option",{attrs:{label:"待测试",value:"待测试"}}),t._v(" "),a("el-option",{attrs:{label:"测试中",value:"测试中"}}),t._v(" "),a("el-option",{attrs:{label:"测试完成",value:"测试完成"}})],1)],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:t.btnLoading},on:{click:t.searchBy}},[t._v("查询")])],1)],1):t._e()],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.listLoading,expression:"listLoading",modifiers:{body:!0}}],key:t.itemKey,attrs:{data:t.projectList,"element-loading-text":"loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"编号",align:"center",width:"60"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{domProps:{textContent:t._s(t.getIndex(e.$index))}})]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"项目/迭代",align:"center",prop:"projectname",width:"150"}}),t._v(" "),a("el-table-column",{attrs:{label:"状态",align:"center",prop:"status",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"startTime",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.unix2CurrentTime(e.row.startTime)))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"结束时间",align:"center",prop:"endTime",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.unix2CurrentTime(e.row.endTime)))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.unix2CurrentTime(e.row.createTime)))]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"最后修改时间",align:"center",prop:"lastmodifyTime",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.unix2CurrentTime(e.row.lastmodifyTime))+"\n      ")]}}])}),t._v(" "),t.hasPermission("project:update")||t.hasPermission("project:delete")?a("el-table-column",{attrs:{label:"管理",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t.hasPermission("project:update")&&e.row.id!==t.id?a("el-button",{attrs:{type:"warning",size:"mini"},nativeOn:{click:function(a){return a.preventDefault(),t.showUpdateprojectDialog(e.$index)}}},[t._v("修改")]):t._e(),t._v(" "),t.hasPermission("project:delete")&&e.row.id!==t.id?a("el-button",{attrs:{type:"danger",size:"mini"},nativeOn:{click:function(a){return a.preventDefault(),t.removeproject(e.$index)}}},[t._v("删除")]):t._e()]}}],null,!1,1911403110)}):t._e()],1),t._v(" "),a("el-pagination",{attrs:{"current-page":t.search.page,"page-size":t.search.size,total:t.total,"page-sizes":[10,20,30,40],layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),t._v(" "),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"tmpproject",staticClass:"small-space",staticStyle:{width:"400px","margin-left":"50px"},attrs:{"status-icon":"","label-position":"left","label-width":"120px",model:t.tmpproject}},[a("el-form-item",{attrs:{label:"项目迭代名",prop:"projectname",required:""}},[a("el-input",{attrs:{maxlength:"50",type:"text","prefix-icon":"el-icon-edit","auto-complete":"off"},model:{value:t.tmpproject.projectname,callback:function(e){t.$set(t.tmpproject,"projectname",e)},expression:"tmpproject.projectname"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"状态",prop:"status",required:""}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"状态"},model:{value:t.tmpproject.status,callback:function(e){t.$set(t.tmpproject,"status",e)},expression:"tmpproject.status"}},[a("el-option",{attrs:{label:"待测试",value:"待测试"}}),t._v(" "),a("el-option",{attrs:{label:"测试中",value:"测试中"}}),t._v(" "),a("el-option",{attrs:{label:"测试完成",value:"测试完成"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"开始时间：",prop:"startTime",required:""}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime",format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"开始时间"},model:{value:t.tmpproject.startTime,callback:function(e){t.$set(t.tmpproject,"startTime",e)},expression:"tmpproject.startTime"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"结束时间：",prop:"endTime",required:""}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"datetime",format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"结束时间"},model:{value:t.tmpproject.endTime,callback:function(e){t.$set(t.tmpproject,"endTime",e)},expression:"tmpproject.endTime"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"memo"}},[a("el-input",{attrs:{type:"text","prefix-icon":"el-icon-message","auto-complete":"off"},model:{value:t.tmpproject.memo,callback:function(e){t.$set(t.tmpproject,"memo",e)},expression:"tmpproject.memo"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(e){e.preventDefault(),t.dialogFormVisible=!1}}},[t._v("取消")]),t._v(" "),"add"===t.dialogStatus?a("el-button",{attrs:{type:"danger"},nativeOn:{click:function(e){return e.preventDefault(),t.$refs.tmpproject.resetFields()}}},[t._v("重置")]):t._e(),t._v(" "),"add"===t.dialogStatus?a("el-button",{attrs:{type:"success",loading:t.btnLoading},nativeOn:{click:function(e){return e.preventDefault(),t.addproject(e)}}},[t._v("添加")]):t._e(),t._v(" "),"update"===t.dialogStatus?a("el-button",{attrs:{type:"success",loading:t.btnLoading},nativeOn:{click:function(e){return e.preventDefault(),t.updateproject(e)}}},[t._v("修改")]):t._e()],1)],1)],1)},staticRenderFns:[]},m=a("VU/8")(c,p,!1,null,null,null);e.default=m.exports}});
//# sourceMappingURL=55.b84e569c3e52021cbf40.js.map