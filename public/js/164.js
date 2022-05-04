"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[164],{5562:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(3645),a=n.n(r)()((function(e){return e[1]}));a.push([e.id,'.required label:after{color:red;content:"*"}',""]);const i=a},3645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var o=0;o<e.length;o++){var c=[].concat(e[o]);r&&a[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},3379:(e,t,n)=>{var r,a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function o(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],a=0;a<e.length;a++){var i=e[a],c=t.base?i[0]+t.base:i[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var d=o(u),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(s[d].references++,s[d].updater(p)):s.push({identifier:u,updater:m(p,t),references:1}),r.push(u)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=n.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var s=i(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function p(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=d(t,a);else{var i=document.createTextNode(a),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function v(e,t,n){var r=n.css,a=n.media,i=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,h=0;function m(e,t){var n,r,a;if(t.singleton){var i=h++;n=f||(f=l(t)),r=p.bind(null,n,i,!1),a=p.bind(null,n,i,!0)}else n=l(t),r=v.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=o(n[r]);s[a].references--}for(var i=c(e,t),l=0;l<n.length;l++){var u=o(n[l]);0===s[u].references&&(s[u].updater(),s.splice(u,1))}n=i}}}},1164:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var r=n(7757),a=n.n(r);function i(e,t,n,r,a,i,s){try{var o=e[i](s),c=o.value}catch(e){return void n(e)}o.done?t(c):Promise.resolve(c).then(r,a)}const s={name:"CategoriesEdit",props:["id"],data:function(){return{breadcrumbs:[{text:"Services",disabled:!1,href:"/services"},{text:"Edit category",disabled:!0}],name:null,description:null,dialogDelete:!1}},created:function(){this.getCategoryById()},methods:{getCategoryById:function(){var e,t=this;return(e=a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,axios.get("https://api.test.kaplankaya.app/api/web/services/categories/"+t.id).then((function(e){t.name=e.data.data.name,t.description=e.data.data.description,t.loading=!1}));case 2:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var s=e.apply(t,n);function o(e){i(s,r,a,o,c,"next",e)}function c(e){i(s,r,a,o,c,"throw",e)}o(void 0)}))})()},update:function(){var e=this;axios.put("https://api.test.kaplankaya.app/api/web/services/categories/"+this.id,{id:this.id,name:this.name,description:this.description}).then((function(t){e.$store.dispatch("showAlert",{isVisible:!0,msg:t.data.message,color:"success",type:"success"}),e.$router.push("/services")})).catch((function(t){e.$store.dispatch("showAlert",{isVisible:!0,msg:t.response.data.Message,color:"error",type:"error"})}))},deleteItemConfirm:function(){var e=this;axios.delete("https://api.test.kaplankaya.app/api/web/services/categories/"+this.id).then((function(t){e.dialogDelete=!1,e.$store.dispatch("showAlert",{isVisible:!0,msg:t.data.message,color:"success",type:"success"}),e.$router.push("/services")})).catch((function(t){e.$store.dispatch("showAlert",{isVisible:!0,msg:t.response.data.Message,color:"error",type:"error"})}))}}};var o=n(3379),c=n.n(o),l=n(5562),u={insert:"head",singleton:!1};c()(l.Z,u);l.Z.locals;const d=(0,n(1900).Z)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{sm:"12",lg:"5"}},[n("div",{staticClass:"mb-4"},[n("v-breadcrumbs",{staticClass:"pl-0",attrs:{items:e.breadcrumbs,large:""}})],1),e._v(" "),n("h1",{staticClass:"mb-8"},[e._v("Edit category")]),e._v(" "),n("v-text-field",{staticClass:"required",attrs:{label:"Name",clearable:"",outlined:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),n("v-textarea",{staticClass:"required",attrs:{label:"Description",outlined:"",clearable:""},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}}),e._v(" "),n("v-btn",{staticClass:"mt-4 mr-3",attrs:{large:""},on:{click:function(t){return e.$router.back()}}},[e._v("\n                Back\n            ")]),e._v(" "),n("v-btn",{staticClass:"mt-4 mr-3",attrs:{color:"primary",width:"120",large:""},on:{click:e.update}},[e._v("\n                Update\n            ")]),e._v(" "),n("v-btn",{staticClass:"mt-4",attrs:{color:"error",large:""},on:{click:function(t){e.dialogDelete=!0}}},[e._v("\n                Delete\n            ")])],1)],1),e._v(" "),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogDelete,callback:function(t){e.dialogDelete=t},expression:"dialogDelete"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[e._v("Are you sure you want to delete this category?")]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.dialogDelete=!1}}},[e._v("Cancel")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.deleteItemConfirm}},[e._v("Yes")]),e._v(" "),n("v-spacer")],1)],1)],1)],1)}),[],!1,null,null,null).exports}}]);