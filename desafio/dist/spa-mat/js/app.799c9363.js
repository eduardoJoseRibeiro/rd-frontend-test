(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,n,t){e.exports=t("2f39")},"034f":function(e,n,t){"use strict";var a=t("fb1c"),o=t.n(a);o.a},"1e5d":function(e,n,t){},"2f39":function(e,n,t){"use strict";t.r(n);t("ac6a"),t("a114"),t("d14b"),t("1e5d"),t("7e6d");var a=t("2b0e"),o=t("e84f"),r=t("7051"),u=t("2040"),c=t("cf12"),i=t("46a9"),s=t("32a1"),f=t("f30c"),p=t("ce67"),l=t("482e"),d=t("52b5"),b=t("1180"),h=t("1e55"),m=t("506f"),v=t("b8d9"),w=t("7d43"),Q=t("1526"),y=t("133b");a["a"].use(o["a"],{config:{},components:{QLayout:r["a"],QLayoutHeader:u["a"],QLayoutDrawer:c["a"],QPageContainer:i["a"],QPage:s["a"],QToolbar:f["a"],QToolbarTitle:p["a"],QBtn:l["a"],QIcon:d["a"],QList:b["a"],QListHeader:h["a"],QItem:m["a"],QItemMain:v["a"],QItemSide:w["a"]},directives:{Ripple:Q["a"]},plugins:{Notify:y["a"]}});var g=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},L=[];g._withStripped=!0;var x={name:"App"},_=x,A=(t("034f"),t("2877")),I=Object(A["a"])(_,g,L,!1,null,null,null);I.options.__file="App.vue";var k=I.exports,S=t("2f62"),T={},V=t("a709"),$=t("8d6f"),q=t("5781"),B={namespaced:!0,state:T,getters:V,mutations:$,actions:q};a["a"].use(S["a"]);var C=function(){var e=new S["a"].Store({modules:{example:B}});return e},E=t("8c4f"),H=[{path:"/",component:function(){return t.e("32a5c660").then(t.bind(null,"f241"))},children:[{path:"",component:function(){return t.e("87649dd2").then(t.bind(null,"8b24"))},name:"home"}]},{path:"/user",component:function(){return t.e("e69dbc3e").then(t.bind(null,"a4b2"))},children:[{path:"/user/:id",component:function(){return t.e("6068f95c").then(t.bind(null,"d843"))},name:"user"}]}];H.push({path:"*",component:function(){return t.e("4b47640d").then(t.bind(null,"e51e"))}});var J=H;a["a"].use(E["a"]);var P=function(){var e=new E["a"]({scrollBehavior:function(){return{y:0}},routes:J,mode:"hash",base:""});return e},j=function(){var e="function"===typeof C?C():C,n="function"===typeof P?P({store:e}):P;e.$router=n;var t={el:"#q-app",router:n,store:e,render:function(e){return e(k)}};return{app:t,store:e,router:n}},D=t("a925"),M={failed:"Action failed",success:"Action was successful"},N={"en-us":M},O=function(e){var n=e.app,t=e.Vue;t.use(D["a"]),n.i18n=new D["a"]({locale:"en-us",fallbackLocale:"en-us",messages:N})},R=t("bc3a"),z=t.n(R),F=function(e){var n=e.Vue;n.prototype.$axios=z.a},G=j(),K=G.app,U=G.store,W=G.router;[O,F].forEach(function(e){e({app:K,router:W,store:U,Vue:a["a"],ssrContext:null})}),new a["a"](K)},5781:function(e,n){},"7e6d":function(e,n,t){},"8d6f":function(e,n){},a709:function(e,n){},fb1c:function(e,n,t){}},[[0,"runtime","vendor"]]]);