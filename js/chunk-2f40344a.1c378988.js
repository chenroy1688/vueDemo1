(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f40344a"],{"2fdb":function(t,e,n){"use strict";var r=n("5ca1"),o=n("d2c8"),a="includes";r(r.P+r.F*n("5147")(a),"String",{includes:function(t){return!!~o(this,t,a).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},3675:function(t,e,n){"use strict";var r=n("5828"),o=n.n(r);o.a},4127:function(t,e,n){"use strict";var r=n("d233"),o=n("b313"),a={brackets:function(t){return t+"[]"},indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},s=Date.prototype.toISOString,i={delimiter:"&",encode:!0,encoder:r.encode,encodeValuesOnly:!1,serializeDate:function(t){return s.call(t)},skipNulls:!1,strictNullHandling:!1},c=function t(e,n,o,a,s,c,l,u,d,f,p,m){var v=e;if("function"===typeof l)v=l(n,v);else if(v instanceof Date)v=f(v);else if(null===v){if(a)return c&&!m?c(n,i.encoder):n;v=""}if("string"===typeof v||"number"===typeof v||"boolean"===typeof v||r.isBuffer(v)){if(c){var y=m?n:c(n,i.encoder);return[p(y)+"="+p(c(v,i.encoder))]}return[p(n)+"="+p(String(v))]}var h,g=[];if("undefined"===typeof v)return g;if(Array.isArray(l))h=l;else{var b=Object.keys(v);h=u?b.sort(u):b}for(var _=0;_<h.length;++_){var w=h[_];s&&null===v[w]||(g=Array.isArray(v)?g.concat(t(v[w],o(n,w),o,a,s,c,l,u,d,f,p,m)):g.concat(t(v[w],n+(d?"."+w:"["+w+"]"),o,a,s,c,l,u,d,f,p,m)))}return g};t.exports=function(t,e){var n=t,s=e?r.assign({},e):{};if(null!==s.encoder&&void 0!==s.encoder&&"function"!==typeof s.encoder)throw new TypeError("Encoder has to be a function.");var l="undefined"===typeof s.delimiter?i.delimiter:s.delimiter,u="boolean"===typeof s.strictNullHandling?s.strictNullHandling:i.strictNullHandling,d="boolean"===typeof s.skipNulls?s.skipNulls:i.skipNulls,f="boolean"===typeof s.encode?s.encode:i.encode,p="function"===typeof s.encoder?s.encoder:i.encoder,m="function"===typeof s.sort?s.sort:null,v="undefined"!==typeof s.allowDots&&s.allowDots,y="function"===typeof s.serializeDate?s.serializeDate:i.serializeDate,h="boolean"===typeof s.encodeValuesOnly?s.encodeValuesOnly:i.encodeValuesOnly;if("undefined"===typeof s.format)s.format=o["default"];else if(!Object.prototype.hasOwnProperty.call(o.formatters,s.format))throw new TypeError("Unknown format option provided.");var g,b,_=o.formatters[s.format];"function"===typeof s.filter?(b=s.filter,n=b("",n)):Array.isArray(s.filter)&&(b=s.filter,g=b);var w,j=[];if("object"!==typeof n||null===n)return"";w=s.arrayFormat in a?s.arrayFormat:"indices"in s?s.indices?"indices":"repeat":"indices";var x=a[w];g||(g=Object.keys(n)),m&&g.sort(m);for(var C=0;C<g.length;++C){var O=g[C];d&&null===n[O]||(j=j.concat(c(n[O],O,x,u,d,f?p:null,b,m,v,y,_,h)))}var T=j.join(l),L=!0===s.addQueryPrefix?"?":"";return T.length>0?L+T:""}},4328:function(t,e,n){"use strict";var r=n("4127"),o=n("9e6a"),a=n("b313");t.exports={formats:a,parse:o,stringify:r}},"4a36":function(t,e,n){"use strict";var r=n("e675"),o=n.n(r);o.a},"4ec3":function(t,e,n){"use strict";var r=n("bc3a"),o=n.n(r),a=(n("4328"),n("ac6a"),n("7514"),n("2b0e")),s=n("2f62");a["default"].use(s["a"]);new s["a"].Store({state:{count:100,gameText:"1111111111",curVal:1,residence:!1,todos:[{id:1,name:"roy",content:"soniclive.cn",done:!0},{id:2,name:"well",content:"bootstrat.com.tw",done:!1},{id:3,name:"bob",content:"yahoo.com.tw",done:!0},{id:4,name:"jane",content:"stand168.com",done:!0}],todoLists:[{id:1,name:"“我一直认为，乔丹第一次退役，并选择去打棒球的真正原因",status:!0},{id:2,name:"前公牛球员史蒂夫-科尔近日在采访中谈及了迈克尔-乔丹第一次退役的缘由",status:!0},{id:3,name:"沃顿：即使赛季取消 国王今年也算得上成功",status:!1}],newLists:[],tableData:[]},getters:{evenOrOdd:function(t){t.conut},count:function(t){return t.count+103},doneTodos:function(t){return t.todos.filter(function(t){return t.done})},doneTodesCount:function(t,e){return e.doneTodos[1]},getTodoById:function(t){return function(e){return t.todos.find(function(t){return t.id===e})}}},mutations:{addTodoList:function(t,e){t.todoLists.push({id:t.todoLists.length+1,name:e.input,status:!1})},ReduceList:function(t,e){t.todoLists.splice(e.index,1),t.newLists=t.todoLists,t.residence=!1},chgtodoList:function(t,e){switch(t.curVal=e.keys,e.keys){case 1:t.newLists=t.todoLists;break;case 2:t.newLists=t.todoLists.filter(function(t){return t.status});break;case 3:t.newLists=t.todoLists.filter(function(t){return!t.status});break;default:return}},getTabData:function(t,e){t.tableData=e.TabData},checkAll:function(t,e){t.tableData.forEach(function(t){t.check=e.val})},increment:function(t,e){t.count+=100,alert("store的数据 ---"+t.count)},decrement:function(t){return t.count-=50},addText:function(t){return alert(t.gameText+"增加这些文字！！")},getTimes:function(t){t.todos[1].done=!0}},actions:{addListItem:function(t,e){var n=t.commit;n("addTodoList",e)},reduceList:function(t,e){var n=t.commit;n("ReduceList",e)},chgList:function(t,e){var n=t.commit;n("chgtodoList",e)},tableData:function(t,e){var n=t.commit;n("gettableData",e)},decrements:function(t){var e=t.commit;e("decrement")},getTabData:function(t,e){var n=t.commit;n("getTabData",e)},chkAll:function(t,e){var n=t.commit;n("checkAll",e)},actionA:function(t){var e=t.commit;return new Promise(function(t,n){e("increment"),t()})},actionB:function(t){var e=t.dispatch,n=t.commit;return e("actionA").then(function(){n("addText")})}},modules:{}});function i(t,e){return new Promise(function(n,r){o.a.get(t,{params:e}).then(function(t){n(t)}).catch(function(t){r(t)})})}o.a.defaults.timeout=1e4,o.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",n.d(e,"c",function(){return c}),n.d(e,"d",function(){return l}),n.d(e,"b",function(){return u}),n.d(e,"e",function(){return d}),n.d(e,"a",function(){return f});var c=function(){return i("../static/gameData.json")},l=function(){return i("../static/newsDatas.json")},u=function(){return i("https://jsonplaceholder.typicode.com/users")},d=function(){return i("https://jsonplaceholder.typicode.com/users")},f=function(){return i("http://jsonplaceholder.typicode.com/posts")}},5147:function(t,e,n){var r=n("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[r]=!1,!"/./"[t](e)}catch(o){}}return!0}},"57da":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pc_wrap"},[n("div",{staticClass:"right_box"},[n("el-row",[n("el-col",{staticClass:"contnet_main_topic topicOne NumberPosition1",attrs:{span:24}},[n("span",[t._v(t._s(t.TopicText.TopicTxt))]),n("span",[t._v(t._s(t.TopicText.engTxt))])])],1),n("el-row",[n("el-col",{attrs:{span:24}},[n("NewsArea",{attrs:{newsList:t.NewsData}})],1)],1),n("el-row",[n("el-col",{staticClass:"mixinBox",attrs:{span:24}},[n("h3",{on:{click:t.toggleShow}},[t.isshow?n("span",[t._v("Mixin 带入的数据 -- 点击我 改变数据")]):n("span",[t._v("数据改变了！！")])])])],1),n("el-row",[n("el-col",{staticClass:"contnet_main_topic topicOne NumberPosition2",attrs:{span:24}},[n("span",[t._v("体育赛事直播")]),n("span",[t._v("LIVE SPORTS")])])],1),n("el-row",[n("el-col",{staticClass:"el_div",attrs:{span:24}},[n("button",{staticClass:"el-input",attrs:{type:"button"},on:{click:t.getgameData}},[t._v("载入体育赛事")])])],1),n("Sportgame",{attrs:{gameData:t.gameDatas,time:t.date},scopedSlots:t._u([{key:"hasName",fn:function(){return[n("p",{staticStyle:{color:"black",padding:"10px 0"}},[t._v("我是具名slot")])]},proxy:!0},{key:"father",fn:function(e){return[n("p",{staticStyle:{color:"black",padding:"10px 0"}},[t._v("作用域slot ++ "+t._s(e.users.name))])]}}])},[n("p",{staticStyle:{color:"black"}},[t._v("我是默认的 slot")])])],1)])},o=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["right_news",{bos:t.newsCss.noNews}]},[n("el-row",[n("el-col",{attrs:{span:24}},[n("ul",{staticClass:"ulcss basketball"},[n("el-row",[n("el-col",{staticClass:"top_topic",attrs:{span:24}},[n("div",{staticClass:"top_topic_info"},[n("div"),n("div",[t._v(t._s(t.SportNews.Bnews))]),n("div",{},[n("a",{attrs:{href:"javascript:void(0)"}},[t._v("more")])])]),n("span")])],1),t._l(t.newsList[0],function(e,r){return n("li",{key:r,staticClass:"idx_li"},[n("a",{attrs:{href:"javascript:void(0)"}},[n("img",{attrs:{src:e["picAdress"]}}),n("span",[t._v(t._s(e["newsTxt"]))]),n("span",[t._v(t._s(e["time"]))])])])})],2),n("ul",{staticClass:"ulcss football"},[n("el-row",[n("el-col",{staticClass:"top_topic",attrs:{span:24}},[n("div",{staticClass:"top_topic_info"},[n("div"),n("div",[t._v(t._s(t.SportNews.Fnews))]),n("div",{},[n("a",{attrs:{href:"javascript:void(0)"}},[t._v("more")])])]),n("span")])],1),t._l(t.newsList[1],function(e,r){return n("li",{key:r,staticClass:"idx_li"},[n("a",{attrs:{href:"javascript:void(0)"}},[n("img",{attrs:{src:e.picAdress}}),n("span",[t._v(t._s(e.newsTxt))]),n("span",[t._v(t._s(e.time))])])])})],2)])],1),n("div",{staticClass:"el_div"},[t._v(t._s(t.Foottxt))])],1)},s=[],i=n("f5ef"),c={props:{newsList:{type:Array}},data:function(){return{Foottxt:"",SportNews:{Bnews:"最新篮球新闻",Fnews:"最新足球新闻"},newsCss:{isNews:!0,noNews:!1}}},created:function(){var t=this;i["a"].$on("chgThesame",function(e){t.Foottxt=e})}},l=c,u=(n("3675"),n("2877")),d=Object(u["a"])(l,a,s,!1,null,null,null),f=d.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("div",{staticClass:"el_div"},[n("button",{staticClass:"el-input",on:{click:t.chgMsg}},[t._v("传给同层的数据")]),n("div",{},[t._t("default",[t._v("slot没有数据就用这里的数据")]),t._t("hasName"),t._t("father",null,{users:t.father1})],2)]),n("div",{staticClass:"data_box"},[n("div",{staticClass:"date_icon"},[n("h1",[t._v(t._s(t.time.gameTime)+" "+t._s(t.time.week))])]),t._l(t.gameData,function(e){return n("div",{key:e.id,staticClass:"css_table"},[n("div",{staticClass:"css_tr already_over"},[n("div",{staticClass:"css_td"},[t._v(t._s(e.time))]),n("div",{staticClass:"css_td"},[n("span",{staticClass:"team"},[t._v(t._s(e.home))])]),n("div",{staticClass:"css_td2 nba_logo"},[n("img",{attrs:{src:e.homeImg}})]),n("div",{staticClass:"css_td"},[n("span",{staticClass:"gold"},[t._v(t._s(e.homeScore))])]),n("div",{staticClass:"css_td3"},[n("span",{staticClass:"game_type"},[t._v(t._s(e.gameType))])]),n("div",{staticClass:"css_td"},[n("span",{staticClass:"gold"},[t._v(t._s(e.cusScore))])]),n("div",{staticClass:"css_td2 nba_logo"},[n("img",{attrs:{src:e.cusImg}})]),n("div",{staticClass:"css_td"},[n("span",{staticClass:"team"},[t._v(t._s(e.custom))])]),0===e.playType?n("div",{staticClass:"css_td3 btn_Noplay"},[n("a",{attrs:{href:"javascript;void(0)"}},[t._v("尚未开播")])]):n("div",{staticClass:"css_td3 btn_play"},[n("a",{attrs:{href:"javascript;void(0)"}},[t._v("进入直播")])])])])})],2)])},m=[],v=(n("6762"),n("2fdb"),{props:{name:String,type:{validator:function(t){return["success","warning","danger"].includes(t)}},gameData:{type:Array},time:{type:Object}},data:function(){return{footerStyle:{bg:!0,txt:!0},footInfo:{info:"Copyright@ 2019 测试页面 soniclive.cn  ALL Rights Reserved",areaCode:"+86",mail:"3217324595@qq.com",QQ:"3217324595"},father1:{name:"我是作用域slot001數據",age:20},father2:{name:"作用域slot002",age:26}}},methods:{chgMsg:function(){i["a"].$emit("chgThesame",this.footInfo.info)}},mounted:function(){}}),y=v,h=(n("4a36"),Object(u["a"])(y,p,m,!1,null,"10916d29",null)),g=h.exports,b=n("e8c1"),_=n("4ec3"),w={components:{NewsArea:f,Sportgame:g},mixins:[b["a"]],data:function(){return{gameDatas:[],NewsData:[],TopicText:{TopicTxt:"最新体育新闻",engTxt:"SPORTS NEWS"},date:{gameTime:"8月15日",week:"星期三"},fill:[{name:"roy",count:5},{name:"lists",count:10},{name:"bank",count:7}]}},methods:{getgameData:function(){var t=this;Object(_["c"])().then(function(e){t.gameDatas=e.data})},getNews:function(){var t=this;Object(_["d"])().then(function(e){t.NewsData=e.data})},altTxt:function(){alert("一载入就提示我呀")},tapAlt:function(){this.$options.methods.altTxt()}},mounted:function(){this.getNews()}},j=w,x=(n("dbc2"),Object(u["a"])(j,r,o,!1,null,null,null));e["default"]=x.exports},5828:function(t,e,n){},6762:function(t,e,n){"use strict";var r=n("5ca1"),o=n("c366")(!0);r(r.P,"Array",{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"8bfc":function(t,e,n){},"9e6a":function(t,e,n){"use strict";var r=n("d233"),o=Object.prototype.hasOwnProperty,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:r.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},s=function(t,e){for(var n={},r=e.ignoreQueryPrefix?t.replace(/^\?/,""):t,s=e.parameterLimit===1/0?void 0:e.parameterLimit,i=r.split(e.delimiter,s),c=0;c<i.length;++c){var l,u,d=i[c],f=d.indexOf("]="),p=-1===f?d.indexOf("="):f+1;-1===p?(l=e.decoder(d,a.decoder),u=e.strictNullHandling?null:""):(l=e.decoder(d.slice(0,p),a.decoder),u=e.decoder(d.slice(p+1),a.decoder)),o.call(n,l)?n[l]=[].concat(n[l]).concat(u):n[l]=u}return n},i=function(t,e,n){for(var r=e,o=t.length-1;o>=0;--o){var a,s=t[o];if("[]"===s)a=[],a=a.concat(r);else{a=n.plainObjects?Object.create(null):{};var i="["===s.charAt(0)&&"]"===s.charAt(s.length-1)?s.slice(1,-1):s,c=parseInt(i,10);!isNaN(c)&&s!==i&&String(c)===i&&c>=0&&n.parseArrays&&c<=n.arrayLimit?(a=[],a[c]=r):a[i]=r}r=a}return r},c=function(t,e,n){if(t){var r=n.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,a=/(\[[^[\]]*])/,s=/(\[[^[\]]*])/g,c=a.exec(r),l=c?r.slice(0,c.index):r,u=[];if(l){if(!n.plainObjects&&o.call(Object.prototype,l)&&!n.allowPrototypes)return;u.push(l)}var d=0;while(null!==(c=s.exec(r))&&d<n.depth){if(d+=1,!n.plainObjects&&o.call(Object.prototype,c[1].slice(1,-1))&&!n.allowPrototypes)return;u.push(c[1])}return c&&u.push("["+r.slice(c.index)+"]"),i(u,e,n)}};t.exports=function(t,e){var n=e?r.assign({},e):{};if(null!==n.decoder&&void 0!==n.decoder&&"function"!==typeof n.decoder)throw new TypeError("Decoder has to be a function.");if(n.ignoreQueryPrefix=!0===n.ignoreQueryPrefix,n.delimiter="string"===typeof n.delimiter||r.isRegExp(n.delimiter)?n.delimiter:a.delimiter,n.depth="number"===typeof n.depth?n.depth:a.depth,n.arrayLimit="number"===typeof n.arrayLimit?n.arrayLimit:a.arrayLimit,n.parseArrays=!1!==n.parseArrays,n.decoder="function"===typeof n.decoder?n.decoder:a.decoder,n.allowDots="boolean"===typeof n.allowDots?n.allowDots:a.allowDots,n.plainObjects="boolean"===typeof n.plainObjects?n.plainObjects:a.plainObjects,n.allowPrototypes="boolean"===typeof n.allowPrototypes?n.allowPrototypes:a.allowPrototypes,n.parameterLimit="number"===typeof n.parameterLimit?n.parameterLimit:a.parameterLimit,n.strictNullHandling="boolean"===typeof n.strictNullHandling?n.strictNullHandling:a.strictNullHandling,""===t||null===t||"undefined"===typeof t)return n.plainObjects?Object.create(null):{};for(var o="string"===typeof t?s(t,n):t,i=n.plainObjects?Object.create(null):{},l=Object.keys(o),u=0;u<l.length;++u){var d=l[u],f=c(d,o[d],n);i=r.merge(i,f,n)}return r.compact(i)}},b313:function(t,e,n){"use strict";var r=String.prototype.replace,o=/%20/g;t.exports={default:"RFC3986",formatters:{RFC1738:function(t){return r.call(t,o,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},d233:function(t,e,n){"use strict";var r=Object.prototype.hasOwnProperty,o=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}(),a=function(t){var e;while(t.length){var n=t.pop();if(e=n.obj[n.prop],Array.isArray(e)){for(var r=[],o=0;o<e.length;++o)"undefined"!==typeof e[o]&&r.push(e[o]);n.obj[n.prop]=r}}return e},s=function(t,e){for(var n=e&&e.plainObjects?Object.create(null):{},r=0;r<t.length;++r)"undefined"!==typeof t[r]&&(n[r]=t[r]);return n},i=function t(e,n,o){if(!n)return e;if("object"!==typeof n){if(Array.isArray(e))e.push(n);else{if("object"!==typeof e)return[e,n];(o.plainObjects||o.allowPrototypes||!r.call(Object.prototype,n))&&(e[n]=!0)}return e}if("object"!==typeof e)return[e].concat(n);var a=e;return Array.isArray(e)&&!Array.isArray(n)&&(a=s(e,o)),Array.isArray(e)&&Array.isArray(n)?(n.forEach(function(n,a){r.call(e,a)?e[a]&&"object"===typeof e[a]?e[a]=t(e[a],n,o):e.push(n):e[a]=n}),e):Object.keys(n).reduce(function(e,a){var s=n[a];return r.call(e,a)?e[a]=t(e[a],s,o):e[a]=s,e},a)},c=function(t,e){return Object.keys(e).reduce(function(t,n){return t[n]=e[n],t},t)},l=function(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(e){return t}},u=function(t){if(0===t.length)return t;for(var e="string"===typeof t?t:String(t),n="",r=0;r<e.length;++r){var a=e.charCodeAt(r);45===a||46===a||95===a||126===a||a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122?n+=e.charAt(r):a<128?n+=o[a]:a<2048?n+=o[192|a>>6]+o[128|63&a]:a<55296||a>=57344?n+=o[224|a>>12]+o[128|a>>6&63]+o[128|63&a]:(r+=1,a=65536+((1023&a)<<10|1023&e.charCodeAt(r)),n+=o[240|a>>18]+o[128|a>>12&63]+o[128|a>>6&63]+o[128|63&a])}return n},d=function(t){for(var e=[{obj:{o:t},prop:"o"}],n=[],r=0;r<e.length;++r)for(var o=e[r],s=o.obj[o.prop],i=Object.keys(s),c=0;c<i.length;++c){var l=i[c],u=s[l];"object"===typeof u&&null!==u&&-1===n.indexOf(u)&&(e.push({obj:s,prop:l}),n.push(u))}return a(e)},f=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},p=function(t){return null!==t&&"undefined"!==typeof t&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))};t.exports={arrayToObject:s,assign:c,compact:d,decode:l,encode:u,isBuffer:p,isRegExp:f,merge:i}},d2c8:function(t,e,n){var r=n("aae3"),o=n("be13");t.exports=function(t,e,n){if(r(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(t))}},dbc2:function(t,e,n){"use strict";var r=n("8bfc"),o=n.n(r);o.a},e675:function(t,e,n){},e8c1:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r={data:function(){return{isshow:!0}},methods:{toggleShow:function(){this.isshow=!this.isshow}}}},f5ef:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n("2b0e"),o=new r["default"]}}]);
//# sourceMappingURL=chunk-2f40344a.1c378988.js.map