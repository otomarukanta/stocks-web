(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{393:function(t,e,n){"use strict";n.r(e);n(16);var o={data:function(){return{codes:[],headers:[{text:"code",value:"code"},{text:"類似度",value:"sim"}],inputCode:null,simCodes:[],search:null}},watch:{search:function(t){var e=this;this.codes.length>0||this.isLoading||(this.isLoading=!0,fetch("/api/codes.json").then((function(t){return t.json()})).then((function(t){e.codes=t.codes})).catch((function(t){console.log(t)})).finally((function(){return e.isLoading=!1})))},inputCode:function(t){var e=this;fetch("/api/similarities/"+t+".json").then((function(t){return t.json()})).then((function(t){e.simCodes=t.codes})).catch((function(t){console.log(t)})).finally((function(){return e.isLoading=!1}))}}},c=n(75),r=n(110),l=n.n(r),d=n(389),h=n(318),f=n(294),v=n(390),m=n(392),C=n(391),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v("\n        類似度検索\n      ")]),t._v(" "),n("v-card-text",[n("v-autocomplete",{attrs:{items:t.codes,"search-input":t.search},on:{"update:searchInput":function(e){t.search=e},"update:search-input":function(e){t.search=e}},model:{value:t.inputCode,callback:function(e){t.inputCode=e},expression:"inputCode"}}),t._v(" "),n("v-data-table",{attrs:{headers:t.headers,items:t.simCodes,"items-per-page":5}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VAutocomplete:d.a,VCard:h.a,VCardText:f.b,VCardTitle:f.c,VCol:v.a,VDataTable:m.a,VRow:C.a})}}]);