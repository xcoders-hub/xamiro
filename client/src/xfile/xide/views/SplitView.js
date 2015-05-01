//>>built
define("xide/views/SplitView","dojo/_base/declare xide/utils xide/types xide/widgets/TemplatedWidgetBase xide/widgets/_CSSMixin xide/widgets/_StyleMixin xide/widgets/_InsertionMixin dojo/dom-class xide/widgets/_PermaMixin xide/mixins/EventedMixin xide/mixins/ItemActionMixin".split(" "),function(c,d,e,f,g,h,k,b,l,m,n){return c("xide.views.SplitView",[f,g,h,k,l,m,n],{config:null,ctx:null,cssClass:"splitView",layoutMain:null,layoutTop:null,layoutLeft:null,layoutCenter:null,layoutRight:null,layoutBottom:null,
preventCaching:!0,leftPanel:null,centerPanel:null,initialReload:!1,persistent:!1,_restoredPermaItems:0,layoutRightPlaceHolder:null,mode:"vertical",templateString:"\x3cdiv\x3e\x3cdiv data-dojo-attach-point\x3d'layoutMain' data-dojo-type\x3d'xide.layout.BorderContainer' data-dojo-props\x3d\"design:'headline'\" class\x3d'layoutMain '\x3e\x3cdiv data-dojo-attach-point\x3d'layoutLeft' data-dojo-type\x3d'xide.layout.ContentPane' data-dojo-props\x3d\"region:'left',splitter:'true'\" class\x3d'layoutLeftSplit' style\x3d'width: 50%'\x3e\x3c/div\x3e\x3cdiv data-dojo-attach-point\x3d'layoutCenter' data-dojo-type\x3d'xide.layout.ContentPane' data-dojo-props\x3d\"region:'center',splitter:'true'\" class\x3d'layoutCenterSplit' style\x3d'width: 50%'\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e",
firstContainer:null,secondContainer:null,setFirstContainer:function(a){d.destroyWidget(this.firstContainer);dojo.empty(this.layoutLeft.containerNode)},postMixInProperties:function(){"horizontal"==this.mode&&(this.templateString="\x3cdiv\x3e\x3cdiv data-dojo-attach-point\x3d'layoutMain' data-dojo-type\x3d'xide.layout.BorderContainer' data-dojo-props\x3d\"design:'headline'\" class\x3d'layoutMain '\x3e\x3cdiv data-dojo-attach-point\x3d'layoutLeft' data-dojo-type\x3d'xide.layout.ContentPane' data-dojo-props\x3d\"region:'top',splitter:'true'\" class\x3d'layoutLeftSplit' style\x3d'height: 50%'\x3e\x3c/div\x3e\x3cdiv data-dojo-attach-point\x3d'layoutCenter' data-dojo-type\x3d'xide.layout.ContentPane' data-dojo-props\x3d\"region:'center',splitter:'true'\" class\x3d'layoutCenterSplit' style\x3d'height: 50%'\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e");
this.inherited(arguments)},onChildAdded:function(a,b){this.resize()},openItem:function(){},resize:function(){this.inherited(arguments);this.layoutMain&&this._resizeContainer(this.layoutMain,"main");this.layoutLeft&&this._resizeContainer(this.layoutLeft,"left");this.layoutTop&&this._resizeContainer(this.layoutTop,"top");this.layoutCenter&&this._resizeContainer(this.layoutCenter,"center");this.layoutRight&&this._resizeContainer(this.layoutRight,"right");this.layoutLeft&&this._resizeContainer(this.layoutLeft,
"left");this.layoutBottom&&this._resizeContainer(this.layoutBottom,"bottom")},_resizeContainer:function(a,b){try{a&&a.domNode&&a.resize()}catch(c){}},startup:function(){this.inherited(arguments);"vertical"==this.mode?b.add(this.domNode,"splitViewVertical"):b.add(this.domNode,"splitViewHorizontal");this.subscribe(e.EVENTS.RESIZE,this.resize)}})});
//# sourceMappingURL=SplitView.js.map