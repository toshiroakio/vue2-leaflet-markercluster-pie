(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("babel-runtime/core-js/object/assign"),require("d3"),require("leaflet"),require("leaflet.markercluster"),require("vue2-leaflet")):"function"==typeof define&&define.amd?define(["babel-runtime/core-js/object/assign","d3","leaflet","leaflet.markercluster","vue2-leaflet"],t):"object"==typeof exports?exports.Vue2LeafletMarkerclusterPie=t(require("babel-runtime/core-js/object/assign"),require("d3"),require("leaflet"),require("leaflet.markercluster"),require("vue2-leaflet")):e.Vue2LeafletMarkerclusterPie=t(e["babel-runtime/core-js/object/assign"],e.d3,e.leaflet,e["leaflet.markercluster"],e["vue2-leaflet"])})(this,function(e,t,r,n,a){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=10)}([function(e,t,r){r(2);var n=r(3)(r(1),r(4),null,null);e.exports=n.exports},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e){return void 0!==window.XMLSerializer?(new window.XMLSerializer).serializeToString(e):void 0!==e.xml?e.xml:""}Object.defineProperty(t,"__esModule",{value:!0});var i=r(5),o=n(i),u=r(7),s=n(u);r(8);var l=r(9),c=r(6),f={keyFunc:{type:Function,custom:!0,default:function(e){return 0}},classFunc:{type:Function,custom:!0,default:function(e){return""}},titleFunc:{type:Function,custom:!0,default:function(e){return""}},styleFunc:{type:Function,custom:!0,default:function(e){return""}},rmax:{type:Number,custom:!0,default:35},options:{type:Object,default:function(e){return{}}}};t.default={props:f,data:function(){return{ready:!1}},mounted:function(){this.parentContainer=(0,l.findRealParent)(this.$parent),this.mapObject=s.default.markerClusterGroup((0,o.default)({},this.options,{iconCreateFunction:this.getClusterIcon()})),s.default.DomEvent.on(this.mapObject,this.$listeners),(0,l.propsBinder)(this,this.mapObject,f),this.ready=!0,this.parentContainer.addLayer(this)},beforeDestroy:function(){this.parentContainer.removeLayer(this)},methods:{bakeThePie:function(e){if(!e.data||!e.valueFunc)return"";var t=e.data,r=e.valueFunc,n=e.outerRadius?e.outerRadius:28,i=e.innerRadius?e.innerRadius:n/1.7>>0,o=e.strokeWidth?e.strokeWidth:1,u=n+o,s=2*u,l=s,f=c.pie(),d=c.arc().innerRadius(i).outerRadius(n),p=document.createElementNS(c.namespaces.svg,"svg"),m=c.select(p).data([t]).attr("class",e.pieClass).attr("style","background-color: #FFF; border-radius: "+this.rmax+"px !important;").attr("width",s).attr("height",l);return m.selectAll("g.arc").data(f.value(r)).enter().append("svg:g").attr("class","arc").attr("transform","translate("+u+","+u+")").append("svg:path").attr("class",this.classFunc).attr("style",this.styleFunc).attr("stroke-width",o).attr("d",d).append("svg:title").text(this.titleFunc),m.append("text").attr("x",u).attr("y",u).attr("class",e.pieLabelClass).attr("style","\n            font-size: "+(this.rmax/2.5>>0)+"px;\n            font-weight: bold; \n            font-family: sans-serif;\n          ").attr("text-anchor","middle").attr("dy",".3em").text(e.pieLabel),a(p)},generateHtmlIcon:function(e,t,r){return new s.default.DivIcon({html:e,className:t,iconSize:new s.default.Point(r,r)})},getClusterIcon:function(){var e=this;return function(t){var r=t.getAllChildMarkers(),n=r.length,a=e.rmax-2-(n<10?12:n<100?8:n<1e3?4:0),i=2*(a+1),o=c.nest().key(e.keyFunc).entries(r,c.map),u=e.bakeThePie({data:o,valueFunc:function(e){return e.values.length},strokeWidth:1,outerRadius:a,innerRadius:a/1.7>>0,pieClass:"marker-cluster-pie",pieLabel:n,pieLabelClass:"marker-cluster-pie-label"});return e.generateHtmlIcon(u,"marker-cluster-pie-icon",i)}},addLayer:function(e,t){t||this.mapObject.addLayer(e.mapObject)},removeLayer:function(e,t){t||this.mapObject.removeLayer(e.mapObject)},setRmax:function(e,t){var r=new Error("rmax = "+e+". rmax not be set more than once. The window will be reloaded.");console.error(r),window.confirm(r),window.location.reload()}}}},function(e,t){},function(e,t){e.exports=function(e,t,r,n){var a,i=e=e||{},o=typeof e.default;"object"!==o&&"function"!==o||(a=e,i=e.default);var u="function"==typeof i?i.options:i;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),r&&(u._scopeId=r),n){var s=u.computed||(u.computed={});Object.keys(n).forEach(function(e){var t=n[e];s[e]=function(){return t}})}return{esModule:a,exports:i,options:u}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticStyle:{display:"none"}},[e.ready?e._t("default"):e._e()],2)},staticRenderFns:[]}},function(e,t){e.exports=require("babel-runtime/core-js/object/assign")},function(e,t){e.exports=require("d3")},function(e,t){e.exports=require("leaflet")},function(e,t){e.exports=require("leaflet.markercluster")},function(e,t){e.exports=require("vue2-leaflet")},function(e,t,r){e.exports=r(0)}])});
//# sourceMappingURL=Vue2LeafletMarkerclusterPie.js.map