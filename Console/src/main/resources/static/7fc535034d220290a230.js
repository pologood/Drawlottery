webpackJsonp([4],{479:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.reducer=t.saveTableState=t.onChoose=t.loadTypes=t.showLoading=t.showData=t.LOADING=void 0;var o,u=a(8),l=n(u),r=a(36),d=n(r),s="SHOW_DATA",i="LOAD_TYPES",c=t.LOADING="LOADING",f="ON_CHOOSE_KEY",p="SAVE_STATE",m=(t.showData=function(e){return{type:s,data:e}},t.showLoading=function(){return{type:c}},t.loadTypes=function(e){return{type:i,data:e}},t.onChoose=function(e){return{type:f,data:e}},t.saveTableState=function(e){return{type:p,data:e}},o={},(0,l.default)(o,s,function(e,t){return(0,d.default)({},e,{source:t.data,loading:!1})}),(0,l.default)(o,i,function(e,t){return(0,d.default)({},e,{types:t.data})}),(0,l.default)(o,c,function(e){return(0,d.default)({},e,{loading:!0})}),(0,l.default)(o,f,function(e,t){return(0,d.default)({},e,{choose:t.data})}),(0,l.default)(o,p,function(e,t){return(0,d.default)({},e,{tableState:t.data})}),o),h={source:[],types:[],loading:!1,choose:null,test:!1,tableState:{}},y=t.reducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments[1],a=m[t.type];return a?a(e,t):e};t.default=y},1070:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(36),u=n(o),l=a(7),r=n(l),d=a(19),s=n(d),i=a(3),c=n(i),f=a(20),p=n(f),m=a(5),h=n(m),y=a(4),v=n(y),g=a(1),_=n(g),b=a(45),T=n(b),D=a(30),k=a(51),E=a(1071),S=n(E),w="commodity/temps",C="commodity/allType",O="commodity/filters",L=[{title:"编号",dataIndex:"id",sorter:!0},{title:"名称",dataIndex:"name"},{title:"属性",dataIndex:"genre",filters:[{text:"虚拟",value:0},{text:"实体",value:1},{text:"实体不可快递",value:2}],render:function(e){switch(e){case 0:return"虚拟";case 1:return"实体";case 2:return"实体不可快递"}}},{title:"分类",dataIndex:"typeName"},{title:"总需",dataIndex:"buyTotalNumber",sorter:!0}],M=function(e){function t(){return(0,c.default)(this,t),(0,h.default)(this,(t.__proto__||(0,s.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,p.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.loadTypes;(0,T.default)(C,e),this.loadData()}},{key:"handleTableChange",value:function(e,t,a){var n=0;switch(a.field){case"buyTotalNumber":n=1;break;default:n=0}var o={order:n,direction:"ascend"==a.order?1:0},l=this.props.saveTableState,d=(0,r.default)({type:t.typeName,genre:t.genre},o);l((0,u.default)({},d,{page:e})),this.loadData(d,e.current)}},{key:"loadFilters",value:function(){(0,T.default)(O,function(e){L[3].filters=[],e.types.map(function(e,t){L[3].filters.push({text:e.name,value:e.id})})})}},{key:"loadData",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=this.props,n=a.showLoading,o=a.showData;n(),(0,T.default)(w+"?p="+t,o,{data:e})}},{key:"selections",value:function(){var e=this.props.onChoose;return{onChange:function(t,a){e(t)}}}},{key:"render",value:function(){var e=this,t=this.props.home,a=t.source,n=t.loading,o=t.choose,u=t.tableState;return _.default.createElement("div",null,_.default.createElement("div",{className:"mine-row"},_.default.createElement(D.Button,{type:"primary"},_.default.createElement(k.Link,{to:"/commodityManagement/add"},"添加模板")),_.default.createElement("span",{className:"ant-divider"}),_.default.createElement(D.Button,{type:"primary"},_.default.createElement(k.Link,{to:"/commodityManagement"},"商品管理"))),_.default.createElement(S.default,{keys:o,callback:function(){null==u.page?e.loadData():e.loadData(u,u.page.current)}}),_.default.createElement(D.Table,{columns:L,dataSource:a.list,rowKey:"id",pagination:a,rowSelection:this.selections(),loading:n,bordered:!0,onChange:this.handleTableChange.bind(this)}))}}]),t}(g.Component);t.default=M},1071:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(19),u=n(o),l=a(3),r=n(l),d=a(20),s=n(d),i=a(5),c=n(i),f=a(4),p=n(f),m=a(1),h=n(m),y=a(30),v=a(45),g=n(v),_="commodity/groundTemp",b=function(e){function t(e){return(0,r.default)(this,t),(0,c.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e))}return(0,p.default)(t,e),(0,s.default)(t,[{key:"ground",value:function(){var e=this.props,t=e.keys,a=e.callback;null!=t&&(0,g.default)(_,function(e){e.success?(y.message.success(e.message),a()):y.message.error(e.message)},{data:t})}},{key:"render",value:function(){return h.default.createElement("span",null,h.default.createElement(y.Button,{onClick:this.ground.bind(this)},"上架"),h.default.createElement("span",{className:"ant-divider"}))}}]),t}(m.Component);t.default=b},1072:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.mapDispatchToProps=t.mapStateToProps=void 0;var o=a(479),u=a(31),l=a(1070),r=n(l),d=t.mapStateToProps=function(e){return{home:e.template}},s=t.mapDispatchToProps={showData:o.showData,loadTypes:o.loadTypes,showLoading:o.showLoading,onChoose:o.onChoose,saveTableState:o.saveTableState};t.default=(0,u.connect)(d,s)(r.default)}});