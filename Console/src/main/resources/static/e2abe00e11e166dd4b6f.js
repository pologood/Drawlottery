webpackJsonp([8],{473:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.reducer=t.actions=t.submitForm=t.onChoose=t.saveTableState=t.showLoading=t.showData=t.hideModal=t.hideConfirm=t.showConfirm=t.showModal=t.ON_CHOOSE_KEY=void 0;var o,l=a(8),u=n(l),r=a(36),i=n(r),d="LOAD_DATA",s="SHOW_LOADING",c="SAVE_STATE",f=t.ON_CHOOSE_KEY="ON_CHOOSE_KEY",m="SHOW_MODAL",h="SHOW_CONFIRM_LOADING",p="HIDE_CONFIRM_LOADING",v="HIDE_MODAL",b="SUBMIT",g=(t.showModal=function(e){return{type:m,data:e}},t.showConfirm=function(){return{type:h}},t.hideConfirm=function(){return{type:p}},t.hideModal=function(){return{type:v}},t.showData=function(e){return{type:d,data:e}}),C=t.showLoading=function(){return{type:s}},y=t.saveTableState=function(e){return{type:c,data:e}},E=t.onChoose=function(e){return{type:f,data:e}},w=t.submitForm=function(){return{type:b}},_=(t.actions={showData:g,showLoading:C,saveTableState:y,onChoose:E,submitForm:w},o={},(0,u.default)(o,d,function(e,t){return(0,i.default)({},e,{source:t.data,loading:!1})}),(0,u.default)(o,s,function(e){return(0,i.default)({},e,{loading:!0})}),(0,u.default)(o,c,function(e,t){return(0,i.default)({},e,{tableState:t.data})}),(0,u.default)(o,f,function(e,t){return(0,i.default)({},e,{choose:t.data})}),(0,u.default)(o,m,function(e,t){return(0,i.default)({},e,{visible:!0,modalSource:t.data})}),(0,u.default)(o,h,function(e){return(0,i.default)({},e,{confirmLoading:!0})}),(0,u.default)(o,p,function(e){return(0,i.default)({},e,{confirmLoading:!1})}),(0,u.default)(o,v,function(e){return(0,i.default)({},e,{visible:!1})}),(0,u.default)(o,b,function(e){return(0,i.default)({},e,{submit:!0})}),o),S={source:{},loading:!1,tableState:{},choose:null,visible:!1,confirmLoading:!1,modalSource:{title:"添加卡密",source:[]},submit:!1},O=t.reducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments[1],a=_[t.type];return a?a(e,t):e};t.default=O},1046:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=a(7),l=n(o),u=a(19),r=n(u),i=a(3),d=n(i),s=a(20),c=n(s),f=a(5),m=n(f),h=a(4),p=n(h),v=a(1),b=n(v),g=a(30),C=a(45),y=n(C),E=g.Form.Item,w=g.Select.Option,_="commodity/getCards",S="commodity/addCard",O="commodity/deleteCards",k="commodity/updateCard",D=[{title:"编号",dataIndex:"id",sorter:!0},{title:"卡号",dataIndex:"cardNum"},{title:"密码",dataIndex:"password"},{title:"面额",dataIndex:"money"},{title:"运营商",dataIndex:"corporation",filters:[{text:"移动",value:0},{text:"联通",value:1},{text:"电信",value:2}],render:function(e){switch(e){case 0:return"移动";case 1:return"联通";case 2:return"电信"}}}],M=function(e){function t(){return(0,d.default)(this,t),(0,m.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,p.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"loadData",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=this.props,n=a.showLoading,o=a.showData;n(),(0,y.default)(_+"?p="+t,o,{data:e})}},{key:"handleTableChange",value:function(e,t,a){var n=0;switch(a.field){case"cardNum":n=1;break;default:n=0}var o={order:n,direction:"ascend"==a.order?1:0},u=(0,l.default)({corporation:t.corporation},o);this.loadData(u,e.current)}},{key:"selections",value:function(){var e=this.props.onChoose;return{onChange:function(t,a){e(t)}}}},{key:"add",value:function(){}},{key:"delete",value:function(){var e=this.props,t=e.keys,a=e.callback;null!=t&&(0,y.default)(O,function(e){e.success?(g.message.success(e.message),a()):g.message.error(e.message)},{data:t})}},{key:"update",value:function(){var e=this.props,t=e.keys,a=e.callback;null!=t&&(0,y.default)(k,function(e){e.success?(g.message.success(e.message),a()):g.message.error(e.message)},{data:t})}},{key:"toAdd",value:function(){var e=this.props.showModal;e({title:"添加卡密"})}},{key:"handleOk",value:function(){var e=this.props.showConfirm;e(),this.handleSubmit()}},{key:"handleCancel",value:function(){var e=this.props.hideModal,t=this.props.form.resetFields;t(),e()}},{key:"after",value:function(){var e=this.props.hideConfirm;e(),this.loadData()}},{key:"handleSubmit",value:function(){var e=this,t=this.props.form,a=t.validateFields,n=t.resetFields,o=t.getFieldsValue;a(function(t,a){t||(0,y.default)(S,function(t){g.message.success(t.message),n(),e.after()},{data:o()})})}},{key:"render",value:function(){var e=this.props.home.source,t=this.props.home,a=t.visible,n=t.confirmLoading,o=t.modalSource,u={labelCol:{span:6},wrapperCol:{span:14}},r=this.props.form.getFieldDecorator;return b.default.createElement("div",null,b.default.createElement("div",{className:"mine-row"},b.default.createElement("span",null,b.default.createElement(g.Button,{onClick:this.toAdd.bind(this)},"增加"),b.default.createElement("span",{className:"ant-divider"}),b.default.createElement(g.Button,{onClick:this.delete.bind(this)},"删除"),b.default.createElement("span",{className:"ant-divider"}),b.default.createElement(g.Button,{onClick:this.update.bind(this)},"修改"))),b.default.createElement(g.Table,{columns:D,dataSource:e.list,rowKey:"id",pagination:e,rowSelection:this.selections(),bordered:!0,onChange:this.handleTableChange.bind(this)}),b.default.createElement(g.Modal,{title:o.title,visible:a,onOk:this.handleOk.bind(this),confirmLoading:n,onCancel:this.handleCancel.bind(this)},b.default.createElement(g.Form,{onSubmit:this.handleSubmit.bind(this)},b.default.createElement(E,(0,l.default)({},u,{label:"运营商"}),r("corporation",{initialValue:"0",rules:[{required:!0,message:"请选择运营商"}]})(b.default.createElement(g.Select,null,b.default.createElement(w,{value:"0"},"移动"),b.default.createElement(w,{value:"1"},"联通"),b.default.createElement(w,{value:"2"},"电信")))),b.default.createElement(E,(0,l.default)({},u,{label:"金额"}),r("money",{initialValue:"10",rules:[{required:!0,message:"请选择金额"}]})(b.default.createElement(g.Select,null,b.default.createElement(w,{value:"10"},"10元"),b.default.createElement(w,{value:"30"},"30元"),b.default.createElement(w,{value:"50"},"50元"),b.default.createElement(w,{value:"100"},"100元")))),b.default.createElement(E,(0,l.default)({},u,{label:"卡号"}),r("cardNum",{rules:[{required:!0,message:"请输入卡号"}]})(b.default.createElement(g.Input,null))),b.default.createElement(E,(0,l.default)({},u,{label:"密码"}),r("password",{rules:[{required:!0,message:"请输入密码"}]})(b.default.createElement(g.Input,null))))))}}]),t}(v.Component);t.default=g.Form.create()(M)},1047:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.mapDispatchToProps=t.mapStateToProps=void 0;var o=a(31),l=a(473),u=a(1046),r=n(u),i=t.mapStateToProps=function(e){return{home:e.card}},d=t.mapDispatchToProps={showData:l.showData,showLoading:l.showLoading,saveTableState:l.saveTableState,onChoose:l.onChoose,showModal:l.showModal,hideConfirm:l.hideConfirm,hideModal:l.hideModal,showConfirm:l.showConfirm,submitForm:l.submitForm};t.default=(0,o.connect)(i,d)(r.default)}});