(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01201abc"],{"2fdb":function(t,e,n){"use strict";var a=n("5ca1"),r=n("d2c8"),s="includes";a(a.P+a.F*n("5147")(s),"String",{includes:function(t){return!!~r(this,t,s).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"49b8":function(t,e,n){},5147:function(t,e,n){var a=n("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[a]=!1,!"/./"[t](e)}catch(r){}}return!0}},"5f7f":function(t,e,n){},6762:function(t,e,n){"use strict";var a=n("5ca1"),r=n("c366")(!0);a(a.P,"Array",{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"7ae1":function(t,e,n){"use strict";var a=n("5f7f"),r=n.n(a);r.a},c17f:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.playlist.id?n("div",{staticClass:"playlist-detail"},[n("DetailHeader",{ref:"header",attrs:{playlist:t.playlist,songs:t.songs}}),n("div",{staticClass:"tabs-wrap"},[n("Tabs",{attrs:{tabs:t.tabs,type:"theme"},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}}),n("el-input",{directives:[{name:"show",rawName:"v-show",value:t.activeTab===t.SONG_IDX,expression:"activeTab === SONG_IDX"}],staticClass:"input",class:t.getInputCls(),attrs:{placeholder:"搜索歌单音乐","prefix-icon":"el-icon-search"},on:{blur:t.onInputBlur,focus:t.onInputFocus},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}})],1),t.searchValue&&!t.filteredSongs.length?n("div",{staticClass:"empty"},[t._v("\n    未能找到和\n    "),n("span",{staticClass:"keyword"},[t._v("“"+t._s(t.searchValue)+"”")]),t._v("\n    相关的任何音乐\n  ")]):t._e(),n("SongTable",{directives:[{name:"show",rawName:"v-show",value:t.activeTab===t.SONG_IDX,expression:"activeTab === SONG_IDX"}],staticClass:"table",attrs:{highlightText:t.searchValue,songs:t.filteredSongs}}),n("div",{directives:[{name:"show",rawName:"v-show",value:t.activeTab===t.COMMENT_IDX,expression:"activeTab === COMMENT_IDX"}],staticClass:"comments"},[n("Comments",{attrs:{id:t.id,type:"playlist"},on:{update:t.onCommentsUpdate}})],1)],1):t._e()},r=[],s=(n("8e6e"),n("ac6a"),n("456d"),n("6762"),n("2fdb"),n("c5f6"),n("bd86")),i=(n("96cf"),n("3b8d")),c=(n("7f7f"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.playlist.id?n("div",{staticClass:"header"},[n("div",{staticClass:"img-wrap"},[n("img",{attrs:{src:t.$utils.genImgUrl(t.playlist.coverImgUrl,400)}})]),n("div",{staticClass:"content"},[n("div",{staticClass:"title-wrap"},[n("p",{staticClass:"title"},[t._v(t._s(t.playlist.name))])]),n("div",{staticClass:"creator-wrap"},[n("img",{staticClass:"avatar",attrs:{src:t.playlist.creator.avatarUrl}}),n("p",{staticClass:"creator"},[t._v(t._s(t.playlist.creator.nickname))]),n("p",{staticClass:"create-time"},[t._v("\n        "+t._s(t.$utils.formatDate(t.playlist.createTime,"yyyy-MM-dd"))+" 创建\n      ")])]),n("div",{staticClass:"action-wrap"},[n("NButton",{staticClass:"button",on:{click:t.playAll}},[n("Icon",{staticClass:"icon middle",attrs:{color:"white",type:"play-round"}}),n("span",{staticClass:"middle"},[t._v("播放全部")])],1)],1),n("div",{staticClass:"desc-wrap"},[t.tagsText?n("p",{staticClass:"desc"},[n("span",[t._v("标签："+t._s(t.tagsText))])]):t._e(),t.playlist.description?n("p",{staticClass:"desc"},[n("span",{staticClass:"value"},[t._v("简介："+t._s(t.playlist.description))])]):t._e()])])]):t._e()}),o=[],l=n("e7e6");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(n,!0).forEach(function(e){Object(s["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var d={props:{playlist:{type:Object,default:function(){return{}}},songs:{type:Array,default:function(){return[]}}},methods:p({playAll:function(){this.startSong(this.songs[0]),this.setPlaylist(this.songs)}},Object(l["c"])(["setPlaylist"]),{},Object(l["a"])(["startSong"])),computed:{tagsText:function(){return this.playlist.tags.join("/")}}},f=d,h=(n("7ae1"),n("2877")),v=Object(h["a"])(f,c,o,!1,null,"0c0898f7",null),m=v.exports,b=n("a110"),g=n("961b"),y=n("ed08"),w=n("365c");function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(n,!0).forEach(function(e){Object(s["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}if(window.require)var j=window.require("electron").ipcRenderer;var _=500,S=0,T=1,x={metaInfo:function(){return void 0==this.currentSong.name?{title:this.playlist.name}:{title:this.currentSong.name+" - "+this.currentSong.artistsText}},created:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.SONG_IDX=S,this.COMMENT_IDX=T;case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),data:function(){return{tabs:["歌曲列表","评论"],activeTab:S,playlist:{},songs:[],searchValue:"",inputFocus:!1}},methods:{init:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(w["f"])({id:this.id});case 2:e=t.sent,n=e.playlist,this.playlist=n,this.genSonglist(n);case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),genSonglist:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){var n,a,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.trackIds.map(function(t){var e=t.id;return e}),t.next=3,Object(w["w"])(n.slice(0,_));case 3:a=t.sent,r=a.songs.map(function(t){var e=t.id,n=t.name,a=t.al,r=t.ar,s=t.mv,i=t.dt;return Object(y["createSong"])({id:e,name:n,artists:r,duration:i,mvId:s,albumName:a.name,img:a.picUrl})}),this.songs=r;case 6:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),onCommentsUpdate:function(t){var e=t.total;this.tabs.splice(T,1,"评论(".concat(e,")"))},onInputFocus:function(){this.inputFocus=!0},onInputBlur:function(){this.inputFocus=!1},getInputCls:function(){return this.inputFocus?"":"inactive"},scrollToHeader:function(){var t=this.$refs.header;t&&Object(y["scrollInto"])(t.$el)},onPlay:function(){window.require&&j.send("name",this.currentSong.name)}},computed:C({id:function(){return Number(this.$route.params.id)},filteredSongs:function(){var t=this;return this.songs.filter(function(e){var n=e.name,a=e.artistsText,r=e.albumName;return"".concat(n).concat(a).concat(r).toLowerCase().includes(t.searchValue.toLowerCase())})}},Object(l["d"])(["currentSong"])),watch:{id:{handler:function(){this.searchValue="",this.init(),this.scrollToHeader()},immediate:!0}},components:{DetailHeader:m,SongTable:b["a"],Comments:g["a"]}},I=x,P=(n("c734"),Object(h["a"])(I,a,r,!1,null,"d3e89fd0",null));e["default"]=P.exports},c734:function(t,e,n){"use strict";var a=n("49b8"),r=n.n(a);r.a},d2c8:function(t,e,n){var a=n("aae3"),r=n("be13");t.exports=function(t,e,n){if(a(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(t))}}}]);
//# sourceMappingURL=chunk-01201abc.71352bd5.js.map