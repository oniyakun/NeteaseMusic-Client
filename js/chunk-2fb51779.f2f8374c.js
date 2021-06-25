(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2fb51779"],{"07b7":function(t,e,a){},"1e56":function(t,e,a){"use strict";var i=a("07b7"),s=a.n(i);s.a},"36f6":function(t,e,a){},5108:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.$utils.isDef(t.mvDetail.id)?a("div",{staticClass:"mv"},[a("div",{staticClass:"mv-content"},[a("div",{staticClass:"left"},[a("p",{staticClass:"title"},[t._v("mv详情")]),a("div",{staticClass:"player"},[a("VideoPlayer",{ref:"video",attrs:{url:t.mvPlayInfo.url}})],1),a("div",{staticClass:"author-wrap"},[a("div",{staticClass:"avatar"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.$utils.genImgUrl(t.artist.picUrl,120),expression:"$utils.genImgUrl(artist.picUrl, 120)"}]})]),a("p",{staticClass:"author"},[t._v(t._s(t.artist.name))])]),a("p",{staticClass:"name"},[t._v(t._s(t.mvDetail.name))]),a("div",{staticClass:"desc"},[a("span",{staticClass:"date"},[t._v("发布："+t._s(t.$utils.formatDate(t.mvDetail.publishTime,"yyyy-MM-dd")))]),a("span",{staticClass:"count"},[t._v("播放："+t._s(t.mvDetail.playCount)+"次")])]),a("div",{staticClass:"comments"},[a("Comments",{attrs:{id:t.id,type:"mv"}})],1)]),a("div",{staticClass:"right"},[a("p",{staticClass:"title"},[t._v("相关推荐")]),a("div",{staticClass:"simi-mvs"},t._l(t.simiMvs,function(e){return a("Card",{key:e.id,staticClass:"simi-mv-card",attrs:{desc:"by "+e.artistName,name:e.name},on:{click:function(a){return t.$utils.goMv(e.id)}},scopedSlots:t._u([{key:"img-wrap",fn:function(){return[a("MvCard",{attrs:{duration:e.duration,img:e.cover,playCount:e.playCount}})]},proxy:!0}],null,!0)})}),1)])])]):t._e()},s=[],r=(a("8e6e"),a("456d"),a("ac6a"),a("5df3"),a("768b")),n=(a("96cf"),a("3b8d")),c=a("bd86"),o=(a("7f7f"),a("c5f6"),a("365c")),l=a("ed08"),u=a("e7e6"),m=a("961b"),v=a("6ad1");function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a.push.apply(a,i)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(a,!0).forEach(function(e){Object(c["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var f={mixins:[l["hideMenuMixin"]],props:{id:{type:Number,required:!0}},metaInfo:function(){return{title:this.mvDetail.name}},created:function(){this.init()},data:function(){return{mvDetail:{},mvPlayInfo:"",artist:{},simiMvs:[]}},methods:p({init:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e,a,i,s,n,c,l,u=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([Object(o["i"])(this.id),Object(o["j"])(this.id),Object(o["s"])(this.id)]);case 2:return e=t.sent,a=Object(r["a"])(e,3),i=a[0].data,s=a[1].data,n=a[2].mvs,t.next=9,Object(o["c"])(i.artistId);case 9:c=t.sent,l=c.artist,this.mvDetail=i,this.mvPlayInfo=s,this.artist=l,this.simiMvs=n,this.$nextTick(function(){var t=u.$refs.video.player;t.emit("resourceReady",y(u.mvDetail.brs,s)),t.on("play",function(){u.setPlayingState(!1)})});case 16:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),goMv:function(t){this.$router.push("/mv/".concat(t))}},Object(u["c"])(["setPlayingState"])),watch:{id:"init"},components:{Comments:m["a"],MvCard:v["a"]}};function y(t,e){var a=e.url,i=e.r,s={240:"标清",480:"高清",720:"超清",1080:"1080P"};return Object.keys(t).map(function(e){var r=e===i,n=s[e],c=r?a:t[e];return{url:c,name:n}})}var h=f,b=(a("1e56"),a("2877")),C=Object(b["a"])(h,i,s,!1,null,"78943c64",null);e["default"]=C.exports},"6ad1":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mv-card",on:{click:t.goMv}},[a("div",{staticClass:"img-wrap"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.$utils.genImgUrl(t.img,500,260),expression:"$utils.genImgUrl(img, 500, 260)"}]}),t.playCount?a("div",{staticClass:"play-count-wrap"},[a("Icon",{attrs:{type:"play"}}),t._v("\n      "+t._s(t.$utils.formatNumber(t.playCount))+"\n    ")],1):t._e(),a("div",{staticClass:"play-icon-wrap"},[a("PlayIcon",{staticClass:"play-icon",attrs:{size:48}})],1),t.duration?a("div",{staticClass:"duration-wrap"},[t._v("\n      "+t._s(t.$utils.formatTime(t.duration/1e3))+"\n    ")]):t._e()]),t.name?a("p",{staticClass:"name"},[t._v(t._s(t.name))]):t._e(),t.author?a("p",{staticClass:"author"},[t._v(t._s(t.author))]):t._e()])},s=[],r=a("ed08"),n={props:["id","img","duration","playCount","name","author"],methods:{goMv:function(){Object(r["isDef"])(this.id)&&this.$router.push("/mv/".concat(this.id))}}},c=n,o=(a("c1f2"),a("2877")),l=Object(o["a"])(c,i,s,!1,null,"79ba34db",null);e["a"]=l.exports},c1f2:function(t,e,a){"use strict";var i=a("36f6"),s=a.n(i);s.a}}]);
//# sourceMappingURL=chunk-2fb51779.f2f8374c.js.map