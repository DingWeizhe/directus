(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a2c11f2"],{"26b2":function(t,e,n){"use strict";n.r(e);var l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-input",{attrs:{id:t.name,type:"text","icon-right-color":"",value:t.value||"",readonly:t.readonly,monospace:t.options.monospace,placeholder:t.options.placeholder,"icon-left":t.options.iconLeft,"icon-right":t.options.iconRight,maxlength:t.length?+t.length:null,charactercount:t.options.showCharacterCount},on:{input:t.updateValue}})},a=[],i=n("8db2"),o=n.n(i),u={mixins:[o.a],methods:{updateValue:function(t){var e=t;this.options.trim&&(!this.value||e.length>this.value.length)&&(e=e.trim()),this.$emit("input",e)}}},r=u,p=(n("666a"),n("2877")),d=Object(p["a"])(r,l,a,!1,null,"d626b438",null);e["default"]=d.exports},"666a":function(t,e,n){"use strict";var l=n("da13"),a=n.n(l);a.a},"8db2":function(t,e){t.exports={props:{id:{type:String,required:!0},name:{type:String,required:!0},value:{type:null,default:null},type:{type:String,required:!0},length:{type:[String,Number],default:null},readonly:{type:Boolean,default:!1},collection:{type:String,default:null},required:{type:Boolean,default:!1},options:{type:Object,default:()=>({})},newItem:{type:Boolean,default:!1},relation:{type:Object,default:null},fields:{type:Object,default:null},values:{type:Object,default:null},width:{type:String,default:null,validator(t){return["half","half-left","half-right","full","fill"].includes(t)}}}}},da13:function(t,e,n){}}]);
//# sourceMappingURL=chunk-3a2c11f2.679612fb.js.map