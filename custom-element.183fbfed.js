(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["custom-element"],{"638c":function(e,t,n){"use strict";function s(e,t,n,s,o,r,a,i,c,u){"boolean"!==typeof a&&(c=i,i=a,a=!1);var d,l="function"===typeof n?n.options:n;if(e&&e.render&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0,o&&(l.functional=!0)),s&&(l._scopeId=s),r?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(r)},l._ssrRegister=d):t&&(d=a?function(){t.call(this,u(this.$root.$options.shadowRoot))}:function(e){t.call(this,i(e))}),d)if(l.functional){var f=l.render;l.render=function(e,t){return d.call(t),f(e,t)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,d):[d]}return n}var o=s;t.__vue_normalize__=o},"66c4":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("638c"),o={name:"VButton",inheritAttrs:!1,props:{className:{type:String,default:""},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},computed:{classes:function(){return this.className.split(" ")}}};const r=o;var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"field"},[n("div",{staticClass:"control"},[n("button",e._g(e._b({staticClass:"button",class:e.classes.concat([{"is-loading":e.loading}]),attrs:{disabled:e.disabled}},"button",e.$attrs,!1),e.$listeners),[e._t("default")],2)])])},i=[];const c=void 0,u=void 0,d=void 0,l=!1;var f=s.__vue_normalize__({render:a,staticRenderFns:i},c,r,u,l,d,void 0,void 0);t.default=f},"6eb5":function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"section"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-content"},[n("v-button",{attrs:{"data-test":"endpass-sign-in-button"},on:{click:e.onOpen}},[e._v("\n          Open account\n        ")]),n("div",{attrs:{id:"endpass-form"}})],1)])])])},o=[],r=(n("96cf"),n("3b8d")),a=n("66c4"),i=n.n(a),c=n("4360"),u={name:"CustomElement",methods:{onOpen:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c["a"].openAccount();case 2:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t="#endpass-form",e.next=3,c["a"].initConnect({widget:!1,element:t});case 3:n=document.querySelector(t),n.addEventListener("open",function(){console.log("dialog is open")}),n.addEventListener("close",function(){console.log("dialog is close")});case 6:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}(),components:{VButton:i.a}},d=u,l=n("2877"),f=Object(l["a"])(d,s,o,!1,null,null,null),p=f.exports;n.d(t,"default",function(){return p})}}]);