//>>built
define("xide/views/ActionTogglePane","dojo/_base/declare xide/widgets/_CSSMixin xide/utils xide/mixins/EventedMixin xide/mixins/ReloadMixin xide/views/TitlePane xide/widgets/ActionToolbar".split(" "),function(b,c,d,e,f,g,h){return b("xide.views.ActionTogglePane",[g,c,e,f],{delegate:null,actions:null,cssClass:"actionTogglePane",titleBarNode:null,_onTitleClick:function(a){if(a.target==this.titleBarNode&&(this.toggleable&&this.toggle(),this.delegate&&this.delegate.onTitlebarToggled))this.delegate.onTitlebarToggled(this.open)},
createWidgets:function(){var a=this.actions;a&&(this.focusNode.style["float"]="left",this.toolbar=d.addWidget(h,{delegate:this,style:"display:inline-block;float:right",baseClass:"dijitToolbar"},this,this.titleBarNode,!0),this.toolbar.addActions(a,this,null));this.doCSSClass(this.domNode);this.didWidgets=!0},startup:function(){this.inherited(arguments);this.initReload();this.createWidgets()}})});
//# sourceMappingURL=ActionTogglePane.js.map