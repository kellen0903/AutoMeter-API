webpackJsonp([37],{ULyv:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("Dd8w"),n=a.n(i),s=a("2d0t"),l=a("W+bg"),c=a("XcM5"),o=a("NXqa"),p=a("vuyV"),u=a("0xDb"),r=a("NYxO"),d={filters:{statusFilter:function(e){return{published:"success",draft:"gray",deleted:"danger"}[e]}},data:function(){return{itemplanKey:null,itemcaseKey:null,tmpplancasedeployunitname:null,tmpplancaseexecuteplanname:null,tmpplancaseapiname:null,tmpcasecasetype:null,tmpcasedeployunitname:null,tmpcaseapiname:null,tmpexecuteplanid:null,tmploadexecuteplanid:null,tmpdeployunitid:null,tmploaddeployunitid:null,tmploadapiid:null,tmpapiid:null,execplanList:[],apiList:[],loadapiList:[],deployunitList:[],loaddeployunitList:[],multipleSelection:[],casemultipleSelection:[],executeplancaseList:[],executeplancaseremovetList:[],testcaseList:[],testcaselastList:[],listLoading:!1,caselistLoading:!1,total:0,casetotal:0,apiQuery:{page:1,size:10,deployunitid:"",deployunitname:""},dialogStatus:"add",dialogFormVisible:!1,casedialogFormVisible:!1,loadcase:"装载用例",btnLoading:!1,casebtnLoading:!1,search:{page:1,size:10,executeplanid:null,deployunitid:null,apiid:null,executeplanname:null,deployunitname:null,apiname:null},searchcase:{page:1,size:10,executeplanid:null,executeplanname:null,deployunitid:null,deployunitname:null,apiid:null,apiname:null,casetype:null}}},computed:n()({},Object(r.b)(["name","sidebar","avatar"])),created:function(){this.getexecplanList(),this.getloadexecplanList(),this.getexecuteplancaseList(),this.getdepunitLists(),this.getloaddepunitLists(),this.getenviromentallList(),this.getdatabydiccodeList()},methods:{unix2CurrentTime:u.b,handleSelectionChange:function(e){this.multipleSelection=e,console.log("00000000000000000000000000"),console.log(this.multipleSelection)},casehandleClickTableRow:function(e,t,a){console.log(e)},casehandleSelectionChange:function(e){this.casemultipleSelection=e},getexecplanList:function(){var e=this;Object(p.d)().then(function(t){e.execplanList=t.data}).catch(function(t){e.$message.error("加载计划列表失败")})},getloadexecplanList:function(){var e=this;Object(p.d)().then(function(t){e.loadexecplanList=t.data}).catch(function(t){e.$message.error("加载计划列表失败")})},getexecuteplancaseList:function(){var e=this;this.search.executeplanid=this.tmploadexecuteplanid,this.search.deployunitid=this.tmploaddeployunitid,this.search.apiid=this.tmploadapiid,this.listLoading=!0,Object(o.e)(this.search).then(function(t){e.executeplancaseList=t.data.list,e.total=t.data.total,e.listLoading=!1}).catch(function(t){e.$message.error("加载测试集合用例列表失败")})},searchBy:function(){var e=this;this.search.page=1,this.search.executeplanid=this.tmploadexecuteplanid,this.search.deployunitid=this.tmploaddeployunitid,this.search.apiid=this.tmploadapiid,this.listLoading=!0,console.log(this.search),Object(o.e)(this.search).then(function(t){e.itemKey=Math.random(),e.executeplancaseList=t.data.list,e.total=t.data.total}).catch(function(t){e.$message.error("搜索失败")}),this.listLoading=!1,this.btnLoading=!1},handleSizeChange:function(e){this.search.page=1,this.search.size=e,this.getexecuteplancaseList()},handleCurrentChange:function(e){this.search.page=e,this.getexecuteplancaseList()},getIndex:function(e){return(this.search.page-1)*this.search.size+e+1},testplanselectChanged:function(e){this.tmpexecuteplanid=null,this.tmpcasecasetype=null,console.log(this.execplanList);for(var t=0;t<this.execplanList.length;t++)this.execplanList[t].executeplanname===e&&(this.tmpexecuteplanid=this.execplanList[t].id,this.tmpcasecasetype=this.execplanList[t].usetype,console.log("1111111111111111111111"),console.log(this.tmpcasecasetype))},loadtestplanselectChanged:function(e){this.tmploadapiid=null,this.tmploaddeployunitid=null,this.search.apiname=null,this.search.deployunitname=null,this.tmploadexecuteplanid=null;for(var t=0;t<this.loadexecplanList.length;t++)this.loadexecplanList[t].executeplanname===e&&(this.tmploadexecuteplanid=this.loadexecplanList[t].id,console.log(this.tmploadexecuteplanid))},loadApiselectChanged:function(e){this.tmploadapiid=null;for(var t=0;t<this.loadapiList.length;t++)this.loadapiList[t].apiname===e&&(this.tmploadapiid=this.loadapiList[t].id)},ApiselectChanged:function(e){this.tmpapiid=null;for(var t=0;t<this.apiList.length;t++)this.apiList[t].apiname===e&&(this.tmpapiid=this.apiList[t].id)},loaddeployunitselectChanged:function(e){var t=this;this.tmploadapiid=null,this.tmploaddeployunitid=null,this.search.apiname=null;for(var a=0;a<this.loaddeployunitList.length;a++)this.loaddeployunitList[a].deployunitname===e&&(this.tmploaddeployunitid=this.loaddeployunitList[a].id,this.apiQuery.deployunitid=this.loaddeployunitList[a].id);this.loadapiList=null,this.apiQuery.deployunitname=e,Object(l.d)(this.apiQuery).then(function(e){t.loadapiList=e.data}).catch(function(e){t.$message.error("加载api列表失败")})},deployunitselectChanged:function(e){var t=this;this.tmpapiid=null,this.tmpdeployunitid=null;for(var a=0;a<this.deployunitList.length;a++)this.deployunitList[a].deployunitname===e&&(this.tmpdeployunitid=this.deployunitList[a].id,this.apiQuery.deployunitid=this.deployunitList[a].id);this.apiList=null,this.searchcase.apiname="",this.apiQuery.deployunitname=e,Object(l.d)(this.apiQuery).then(function(e){t.apiList=e.data}).catch(function(e){t.$message.error("加载api列表失败")})},getdepunitLists:function(){var e=this;Object(c.e)().then(function(t){e.deployunitList=t.data}).catch(function(t){e.$message.error("加载发布单元列表失败")})},getloaddepunitLists:function(){var e=this;Object(c.e)().then(function(t){e.loaddeployunitList=t.data}).catch(function(t){e.$message.error("加载发布单元列表失败")})},getapicasesList:function(){var e=this;this.caselistLoading=!0,this.searchcase.executeplanid=this.tmpexecuteplanid,this.searchcase.deployunitid=this.tmpdeployunitid,this.searchcase.apiid=this.tmpapiid,this.searchcase.casetype=this.tmpcasecasetype,Object(s.m)(this.searchcase).then(function(t){e.testcaselastList=t.data.list,e.casetotal=t.data.total,e.caselistLoading=!1}).catch(function(t){e.$message.error("加载用例列表失败")})},searchcaseBy:function(){var e=this;this.searchcase.page=1,this.searchcase.executeplanid=this.tmpexecuteplanid,this.searchcase.deployunitid=this.tmpdeployunitid,this.searchcase.apiid=this.tmpapiid,this.searchcase.casetype=this.tmpcasecasetype,console.log(this.searchcase),this.caselistLoading=!0,this.$refs.searchcase.validate(function(t){t&&Object(s.m)(e.searchcase).then(function(t){e.testcaselastList=t.data.list,e.casetotal=t.data.total}).catch(function(t){e.$message.error("获取已装载的用例失败")})}),this.caselistLoading=!1},casehandleSizeChange:function(e){this.searchcase.page=1,this.searchcase.size=e,this.getapicasesList()},casehandleCurrentChange:function(e){this.searchcase.page=e,this.getapicasesList()},casegetIndex:function(e){return(this.searchcase.page-1)*this.searchcase.size+e+1},showUpdateexecuteplanDialog:function(e){this.dialogFormVisible=!0,this.dialogStatus="update",this.tmpexecuteplan.id=this.executeplancaseList[e].id,this.tmpexecuteplan.executeplanname=this.executeplancaseList[e].executeplanname,this.tmpexecuteplan.status=this.executeplancaseList[e].status,this.tmpexecuteplan.usetype=this.executeplancaseList[e].usetype,this.tmpexecuteplan.memo=this.executeplancaseList[e].memo,this.tmpexecuteplan.enviromentname=this.executeplancaseList[e].enviromentname,this.tmpexecuteplan.businesstype=this.executeplancaseList[e].businesstype,this.tmpexecuteplan.creator=this.name,this.tmpexecuteplan.runmode=this.executeplancaseList[e].runmode,console.log(this.tmpexecuteplan.runmode),"性能"===this.tmpexecuteplan.usetype?this.PerformanceVisible=!0:(this.PerformanceVisible=!1,this.tmpexecuteplan.runmode="多机执行");for(var t=0;t<this.enviromentnameList.length;t++)this.enviromentnameList[t].enviromentname===this.tmpexecuteplan.enviromentname&&(this.tmpexecuteplan.envid=this.enviromentnameList[t].id)},addexecuteplantestcase:function(){var e=this;if(this.testcaseList=[],0===this.casemultipleSelection.length)this.$message.error("请选择装载的用例");else{for(var t=0;t<this.casemultipleSelection.length;t++)this.testcaseList.push({executeplanid:this.tmpexecuteplanid,deployunitid:this.casemultipleSelection[t].deployunitid,apiid:this.casemultipleSelection[t].apiid,deployunitname:this.casemultipleSelection[t].deployunitname,apiname:this.casemultipleSelection[t].apiname,testcaseid:this.casemultipleSelection[t].id,casename:this.casemultipleSelection[t].casename,creator:this.name});Object(o.a)(this.testcaseList).then(function(){e.casedialogFormVisible=!1,e.getexecuteplancaseList(),e.$message.success("装载成功")}).catch(function(t){e.$message.error("装载失败")})}},removebatchexecuteplantestcase:function(){var e=this;if(this.executeplancaseremovetList=[],this.testcaselastList.length===this.casemultipleSelection.length)this.$message.error("未找到需要取消装载的用例");else{for(var t=0;t<this.testcaselastList.length;t++){for(var a=!1,i=0;i<this.casemultipleSelection.length;i++)if(this.testcaselastList[t].id===this.casemultipleSelection[i].id){a=!0;break}this.testcaselastList[t].id,a||this.executeplancaseremovetList.push({executeplanid:this.tmpexecuteplan.id,deployunitname:this.testcaselastList[t].deployunitname,apiname:this.testcaselastList[t].apiname,testcaseid:this.testcaselastList[t].id,casename:this.testcaselastList[t].casename})}console.log(this.executeplancaseremovetList),Object(o.c)(this.executeplancaseremovetList).then(function(){e.$message.success("取消装载用例成功")}).catch(function(t){e.$message.error("取消装载用例失败")})}},showTestCaseDialog:function(){this.casedialogFormVisible=!0,this.dialogStatus="add",this.searchcase.executeplanname=null,this.searchcase.deployunitname=null,this.searchcase.apiname=null,this.testcaselastList=[],this.casetotal=0},removeexecuteplantestcase:function(e){var t=this;this.$confirm("删除该测试集合用例？","警告",{confirmButtonText:"是",cancelButtonText:"否",type:"warning"}).then(function(){var a=t.executeplancaseList[e].id;Object(o.d)(a).then(function(){t.$message.success("删除成功"),t.getexecuteplancaseList()})}).catch(function(){t.$message.info("已取消删除")})},DeleteBatchPlanTestCase:function(){var e=this;this.$confirm("取消所选测试集合装载的用例？","警告",{confirmButtonText:"是",cancelButtonText:"否",type:"warning"}).then(function(){if(0===e.multipleSelection.length)e.$message.error("请选择需要取消的用例");else{e.executeplancaseremovetList=[],console.log(e.multipleSelection);for(var t=0;t<e.multipleSelection.length;t++)e.executeplancaseremovetList.push({executeplanid:e.multipleSelection[t].executeplanid,deployunitname:e.multipleSelection[t].deployunitname,apiname:e.multipleSelection[t].apiname,testcaseid:e.multipleSelection[t].testcaseid,casename:e.multipleSelection[t].casename});Object(o.c)(e.executeplancaseremovetList).then(function(){e.$message.success("取消装载用例成功"),e.getexecuteplancaseList()}).catch(function(t){e.$message.error("取消装载用例失败")})}}).catch(function(){e.$message.info("取消装载用例异常")})}}},h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("el-form",{attrs:{inline:!0}},[a("el-form-item",[e.hasPermission("executeplan:list")?a("el-button",{attrs:{type:"success",size:"mini",icon:"el-icon-refresh"},nativeOn:{click:function(t){return t.preventDefault(),e.getexecuteplancaseList(t)}}},[e._v("刷新")]):e._e(),e._v(" "),e.hasPermission("executeplan:list")?a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-plus"},nativeOn:{click:function(t){return t.preventDefault(),e.showTestCaseDialog(t)}}},[e._v("装载用例")]):e._e(),e._v(" "),e.hasPermission("executeplan:list")?a("el-button",{attrs:{type:"danger",size:"mini"},nativeOn:{click:function(t){return t.preventDefault(),e.DeleteBatchPlanTestCase(t)}}},[e._v("取消装载")]):e._e()],1),e._v(" "),e.hasPermission("executeplan:search")?a("span",[a("el-form-item",{attrs:{prop:"executeplanname"}},[a("el-select",{attrs:{placeholder:"测试集合"},on:{change:function(t){return e.loadtestplanselectChanged(t)}},model:{value:e.search.executeplanname,callback:function(t){e.$set(e.search,"executeplanname",t)},expression:"search.executeplanname"}},[a("el-option",{attrs:{label:"请选择",value:""}}),e._v(" "),e._l(e.execplanList,function(e,t){return a("div",{key:t},[a("el-option",{attrs:{label:e.executeplanname,value:e.executeplanname}})],1)})],2)],1),e._v(" "),a("el-form-item",{attrs:{prop:"deployunitname"}},[a("el-select",{attrs:{placeholder:"发布单元"},on:{change:function(t){return e.loaddeployunitselectChanged(t)}},model:{value:e.search.deployunitname,callback:function(t){e.$set(e.search,"deployunitname",t)},expression:"search.deployunitname"}},[a("el-option",{attrs:{label:"请选择",value:""}}),e._v(" "),e._l(e.loaddeployunitList,function(e,t){return a("div",{key:t},[a("el-option",{attrs:{label:e.deployunitname,value:e.deployunitname,required:""}})],1)})],2)],1),e._v(" "),a("el-form-item",{attrs:{prop:"apiname"}},[a("el-select",{attrs:{placeholder:"api名"},on:{change:function(t){return e.loadApiselectChanged(t)}},model:{value:e.search.apiname,callback:function(t){e.$set(e.search,"apiname",t)},expression:"search.apiname"}},[a("el-option",{attrs:{label:"请选择",value:""}}),e._v(" "),e._l(e.loadapiList,function(e,t){return a("div",{key:t},[a("el-option",{attrs:{label:e.apiname,value:e.apiname}})],1)})],2)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.searchBy}},[e._v("查询")])],1)],1):e._e()],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],key:e.itemplanKey,ref:"fileTable",attrs:{data:e.executeplancaseList,"element-loading-text":"loading",border:"",fit:"","highlight-current-row":""},on:{"row-click":e.handleClickTableRow,"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"40"}}),e._v(" "),a("el-table-column",{attrs:{label:"编号",align:"center",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{domProps:{textContent:e._s(e.getIndex(t.$index))}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"测试集合名",align:"center",prop:"executeplanname",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{label:"发布单元",align:"center",prop:"deployunitname",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{label:"用例名",align:"center",prop:"casename",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{label:"API",align:"center",prop:"apiname",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作人",align:"center",prop:"creator",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.unix2CurrentTime(t.row.createTime)))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"最后修改时间",align:"center",prop:"lastmodifyTime",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.unix2CurrentTime(t.row.lastmodifyTime))+"\n      ")]}}])}),e._v(" "),e.hasPermission("executeplan:update")||e.hasPermission("executeplan:delete")?a("el-table-column",{attrs:{label:"管理",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e.hasPermission("executeplan:delete")&&t.row.id!==e.id?a("el-button",{attrs:{type:"danger",size:"mini"},nativeOn:{click:function(a){return a.preventDefault(),e.removeexecuteplantestcase(t.$index)}}},[e._v("删除")]):e._e()]}}],null,!1,1980059618)}):e._e()],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.search.page,"page-size":e.search.size,total:e.total,"page-sizes":[10,20,30,40],layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),e._v(" "),a("el-dialog",{attrs:{title:e.loadcase,visible:e.casedialogFormVisible},on:{"update:visible":function(t){e.casedialogFormVisible=t}}},[a("div",{staticClass:"filter-container"},[a("el-form",{ref:"searchcase",attrs:{inline:!0,model:e.searchcase}},[a("el-form-item",{attrs:{label:"测试集合:",prop:"executeplanname",required:""}},[a("el-select",{attrs:{placeholder:"测试集合"},on:{change:function(t){return e.testplanselectChanged(t)}},model:{value:e.searchcase.executeplanname,callback:function(t){e.$set(e.searchcase,"executeplanname",t)},expression:"searchcase.executeplanname"}},[a("el-option",{attrs:{label:"请选择",value:""}}),e._v(" "),e._l(e.execplanList,function(e,t){return a("div",{key:t},[a("el-option",{attrs:{label:e.executeplanname,value:e.executeplanname}})],1)})],2)],1),e._v(" "),a("el-form-item",{attrs:{label:"发布单元:",prop:"deployunitname",required:""}},[a("el-select",{attrs:{placeholder:"发布单元"},on:{change:function(t){return e.deployunitselectChanged(t)}},model:{value:e.searchcase.deployunitname,callback:function(t){e.$set(e.searchcase,"deployunitname",t)},expression:"searchcase.deployunitname"}},[a("el-option",{attrs:{label:"请选择",value:""}}),e._v(" "),e._l(e.deployunitList,function(e,t){return a("div",{key:t},[a("el-option",{attrs:{label:e.deployunitname,value:e.deployunitname}})],1)})],2)],1),e._v(" "),a("el-form-item",{attrs:{label:"API:"}},[a("el-select",{attrs:{placeholder:"api名"},on:{change:function(t){return e.ApiselectChanged(t)}},model:{value:e.searchcase.apiname,callback:function(t){e.$set(e.searchcase,"apiname",t)},expression:"searchcase.apiname"}},[a("el-option",{attrs:{label:"请选择",value:""}}),e._v(" "),e._l(e.apiList,function(e,t){return a("div",{key:t},[a("el-option",{attrs:{label:e.apiname,value:e.apiname}})],1)})],2)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.searchcaseBy}},[e._v("查询")])],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.caselistLoading,expression:"caselistLoading",modifiers:{body:!0}}],key:e.itemcaseKey,ref:"caseTable",attrs:{data:e.testcaselastList,"element-loading-text":"loading",border:"",fit:"","highlight-current-row":""},on:{"row-click":e.casehandleClickTableRow,"selection-change":e.casehandleSelectionChange}},[a("el-table-column",{attrs:{label:"编号",align:"center",width:"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{domProps:{textContent:e._s(e.getIndex(t.$index))}})]}}])}),e._v(" "),a("el-table-column",{attrs:{type:"selection",prop:"status",width:"50"}}),e._v(" "),e.show?a("el-table-column",{attrs:{label:"apiid",align:"center",prop:"apiid",width:"120"}}):e._e(),e._v(" "),e.show?a("el-table-column",{attrs:{label:"deployunitid",align:"center",prop:"deployunitid",width:"120"}}):e._e(),e._v(" "),a("el-table-column",{attrs:{label:"用例名",align:"center",prop:"casename",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{label:"发布单元",align:"center",prop:"deployunitname",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{label:"API",align:"center",prop:"apiname",width:"220"}})],1),e._v(" "),a("el-pagination",{attrs:{"current-page":e.searchcase.page,"page-size":e.searchcase.size,total:e.casetotal,"page-sizes":[10,20,30,40],layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.casehandleSizeChange,"current-change":e.casehandleCurrentChange}}),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{nativeOn:{click:function(t){t.preventDefault(),e.casedialogFormVisible=!1}}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"success",loading:e.btnLoading},nativeOn:{click:function(t){return t.preventDefault(),e.addexecuteplantestcase(t)}}},[e._v("装载")])],1)],1)],1)},staticRenderFns:[]},m=a("VU/8")(d,h,!1,null,null,null);t.default=m.exports}});
//# sourceMappingURL=37.bfcfd1fbafbff0c72254.js.map