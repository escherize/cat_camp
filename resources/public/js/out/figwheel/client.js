// Compiled by ClojureScript 0.0-2371
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__11376,args){var map__11378 = p__11376;var map__11378__$1 = ((cljs.core.seq_QMARK_.call(null,map__11378))?cljs.core.apply.call(null,cljs.core.hash_map,map__11378):map__11378);var debug = cljs.core.get.call(null,map__11378__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__11376,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__11376,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__11379){
var p__11376 = cljs.core.first(arglist__11379);
var args = cljs.core.rest(arglist__11379);
return log__delegate(p__11376,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__11380){var map__11382 = p__11380;var map__11382__$1 = ((cljs.core.seq_QMARK_.call(null,map__11382))?cljs.core.apply.call(null,cljs.core.hash_map,map__11382):map__11382);var websocket_url = cljs.core.get.call(null,map__11382__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__11383,callback){var map__11385 = p__11383;var map__11385__$1 = ((cljs.core.seq_QMARK_.call(null,map__11385))?cljs.core.apply.call(null,cljs.core.hash_map,map__11385):map__11385);var msg = map__11385__$1;var dependency_file = cljs.core.get.call(null,map__11385__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__11385__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__11385__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3640__auto__ = dependency_file;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__11385,map__11385__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__11385,map__11385__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__11386,p__11387){var map__11390 = p__11386;var map__11390__$1 = ((cljs.core.seq_QMARK_.call(null,map__11390))?cljs.core.apply.call(null,cljs.core.hash_map,map__11390):map__11390);var opts = map__11390__$1;var url_rewriter = cljs.core.get.call(null,map__11390__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__11391 = p__11387;var map__11391__$1 = ((cljs.core.seq_QMARK_.call(null,map__11391))?cljs.core.apply.call(null,cljs.core.hash_map,map__11391):map__11391);var d = map__11391__$1;var file = cljs.core.get.call(null,map__11391__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__11392,p__11393){var map__11435 = p__11392;var map__11435__$1 = ((cljs.core.seq_QMARK_.call(null,map__11435))?cljs.core.apply.call(null,cljs.core.hash_map,map__11435):map__11435);var opts = map__11435__$1;var on_jsload = cljs.core.get.call(null,map__11435__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__11435__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__11436 = p__11393;var map__11436__$1 = ((cljs.core.seq_QMARK_.call(null,map__11436))?cljs.core.apply.call(null,cljs.core.hash_map,map__11436):map__11436);var files = cljs.core.get.call(null,map__11436__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__6744__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6744__auto__,map__11435,map__11435__$1,opts,on_jsload,before_jsload,map__11436,map__11436__$1,files){
return (function (){var f__6745__auto__ = (function (){var switch__6688__auto__ = ((function (c__6744__auto__,map__11435,map__11435__$1,opts,on_jsload,before_jsload,map__11436,map__11436__$1,files){
return (function (state_11459){var state_val_11460 = (state_11459[(1)]);if((state_val_11460 === (6)))
{var inst_11441 = (state_11459[(7)]);var inst_11450 = (state_11459[(2)]);var inst_11451 = cljs.core.PersistentVector.EMPTY_NODE;var inst_11452 = [inst_11441];var inst_11453 = (new cljs.core.PersistentVector(null,1,(5),inst_11451,inst_11452,null));var inst_11454 = cljs.core.apply.call(null,on_jsload,inst_11453);var state_11459__$1 = (function (){var statearr_11461 = state_11459;(statearr_11461[(8)] = inst_11450);
return statearr_11461;
})();var statearr_11462_11476 = state_11459__$1;(statearr_11462_11476[(2)] = inst_11454);
(statearr_11462_11476[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (5)))
{var inst_11457 = (state_11459[(2)]);var state_11459__$1 = state_11459;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11459__$1,inst_11457);
} else
{if((state_val_11460 === (4)))
{var state_11459__$1 = state_11459;var statearr_11463_11477 = state_11459__$1;(statearr_11463_11477[(2)] = null);
(statearr_11463_11477[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (3)))
{var inst_11441 = (state_11459[(7)]);var inst_11444 = console.debug("Figwheel: loaded these files");var inst_11445 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_11441);var inst_11446 = cljs.core.prn_str.call(null,inst_11445);var inst_11447 = console.log(inst_11446);var inst_11448 = cljs.core.async.timeout.call(null,(10));var state_11459__$1 = (function (){var statearr_11464 = state_11459;(statearr_11464[(9)] = inst_11447);
(statearr_11464[(10)] = inst_11444);
return statearr_11464;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11459__$1,(6),inst_11448);
} else
{if((state_val_11460 === (2)))
{var inst_11441 = (state_11459[(7)]);var inst_11441__$1 = (state_11459[(2)]);var inst_11442 = cljs.core.not_empty.call(null,inst_11441__$1);var state_11459__$1 = (function (){var statearr_11465 = state_11459;(statearr_11465[(7)] = inst_11441__$1);
return statearr_11465;
})();if(cljs.core.truth_(inst_11442))
{var statearr_11466_11478 = state_11459__$1;(statearr_11466_11478[(1)] = (3));
} else
{var statearr_11467_11479 = state_11459__$1;(statearr_11467_11479[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11460 === (1)))
{var inst_11437 = before_jsload.call(null,files);var inst_11438 = figwheel.client.add_request_urls.call(null,opts,files);var inst_11439 = figwheel.client.load_all_js_files.call(null,inst_11438);var state_11459__$1 = (function (){var statearr_11468 = state_11459;(statearr_11468[(11)] = inst_11437);
return statearr_11468;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11459__$1,(2),inst_11439);
} else
{return null;
}
}
}
}
}
}
});})(c__6744__auto__,map__11435,map__11435__$1,opts,on_jsload,before_jsload,map__11436,map__11436__$1,files))
;return ((function (switch__6688__auto__,c__6744__auto__,map__11435,map__11435__$1,opts,on_jsload,before_jsload,map__11436,map__11436__$1,files){
return (function() {
var state_machine__6689__auto__ = null;
var state_machine__6689__auto____0 = (function (){var statearr_11472 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11472[(0)] = state_machine__6689__auto__);
(statearr_11472[(1)] = (1));
return statearr_11472;
});
var state_machine__6689__auto____1 = (function (state_11459){while(true){
var ret_value__6690__auto__ = (function (){try{while(true){
var result__6691__auto__ = switch__6688__auto__.call(null,state_11459);if(cljs.core.keyword_identical_QMARK_.call(null,result__6691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6691__auto__;
}
break;
}
}catch (e11473){if((e11473 instanceof Object))
{var ex__6692__auto__ = e11473;var statearr_11474_11480 = state_11459;(statearr_11474_11480[(5)] = ex__6692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11459);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11473;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11481 = state_11459;
state_11459 = G__11481;
continue;
}
} else
{return ret_value__6690__auto__;
}
break;
}
});
state_machine__6689__auto__ = function(state_11459){
switch(arguments.length){
case 0:
return state_machine__6689__auto____0.call(this);
case 1:
return state_machine__6689__auto____1.call(this,state_11459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6689__auto____0;
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6689__auto____1;
return state_machine__6689__auto__;
})()
;})(switch__6688__auto__,c__6744__auto__,map__11435,map__11435__$1,opts,on_jsload,before_jsload,map__11436,map__11436__$1,files))
})();var state__6746__auto__ = (function (){var statearr_11475 = f__6745__auto__.call(null);(statearr_11475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6744__auto__);
return statearr_11475;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6746__auto__);
});})(c__6744__auto__,map__11435,map__11435__$1,opts,on_jsload,before_jsload,map__11436,map__11436__$1,files))
);
return c__6744__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__11482,link_href){var map__11484 = p__11482;var map__11484__$1 = ((cljs.core.seq_QMARK_.call(null,map__11484))?cljs.core.apply.call(null,cljs.core.hash_map,map__11484):map__11484);var request_url = cljs.core.get.call(null,map__11484__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__11484__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__6744__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6744__auto__,parent){
return (function (){var f__6745__auto__ = (function (){var switch__6688__auto__ = ((function (c__6744__auto__,parent){
return (function (state_11505){var state_val_11506 = (state_11505[(1)]);if((state_val_11506 === (2)))
{var inst_11502 = (state_11505[(2)]);var inst_11503 = parent.removeChild(orig_link);var state_11505__$1 = (function (){var statearr_11507 = state_11505;(statearr_11507[(7)] = inst_11502);
return statearr_11507;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11505__$1,inst_11503);
} else
{if((state_val_11506 === (1)))
{var inst_11500 = cljs.core.async.timeout.call(null,(200));var state_11505__$1 = state_11505;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11505__$1,(2),inst_11500);
} else
{return null;
}
}
});})(c__6744__auto__,parent))
;return ((function (switch__6688__auto__,c__6744__auto__,parent){
return (function() {
var state_machine__6689__auto__ = null;
var state_machine__6689__auto____0 = (function (){var statearr_11511 = [null,null,null,null,null,null,null,null];(statearr_11511[(0)] = state_machine__6689__auto__);
(statearr_11511[(1)] = (1));
return statearr_11511;
});
var state_machine__6689__auto____1 = (function (state_11505){while(true){
var ret_value__6690__auto__ = (function (){try{while(true){
var result__6691__auto__ = switch__6688__auto__.call(null,state_11505);if(cljs.core.keyword_identical_QMARK_.call(null,result__6691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6691__auto__;
}
break;
}
}catch (e11512){if((e11512 instanceof Object))
{var ex__6692__auto__ = e11512;var statearr_11513_11515 = state_11505;(statearr_11513_11515[(5)] = ex__6692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11505);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11512;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11516 = state_11505;
state_11505 = G__11516;
continue;
}
} else
{return ret_value__6690__auto__;
}
break;
}
});
state_machine__6689__auto__ = function(state_11505){
switch(arguments.length){
case 0:
return state_machine__6689__auto____0.call(this);
case 1:
return state_machine__6689__auto____1.call(this,state_11505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6689__auto____0;
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6689__auto____1;
return state_machine__6689__auto__;
})()
;})(switch__6688__auto__,c__6744__auto__,parent))
})();var state__6746__auto__ = (function (){var statearr_11514 = f__6745__auto__.call(null);(statearr_11514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6744__auto__);
return statearr_11514;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6746__auto__);
});})(c__6744__auto__,parent))
);
return c__6744__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__11517){var map__11519 = p__11517;var map__11519__$1 = ((cljs.core.seq_QMARK_.call(null,map__11519))?cljs.core.apply.call(null,cljs.core.hash_map,map__11519):map__11519);var f_data = map__11519__$1;var request_url = cljs.core.get.call(null,map__11519__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__11519__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__11520,files_msg){var map__11542 = p__11520;var map__11542__$1 = ((cljs.core.seq_QMARK_.call(null,map__11542))?cljs.core.apply.call(null,cljs.core.hash_map,map__11542):map__11542);var opts = map__11542__$1;var on_cssload = cljs.core.get.call(null,map__11542__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__11543_11563 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__11544_11564 = null;var count__11545_11565 = (0);var i__11546_11566 = (0);while(true){
if((i__11546_11566 < count__11545_11565))
{var f_11567 = cljs.core._nth.call(null,chunk__11544_11564,i__11546_11566);figwheel.client.reload_css_file.call(null,f_11567);
{
var G__11568 = seq__11543_11563;
var G__11569 = chunk__11544_11564;
var G__11570 = count__11545_11565;
var G__11571 = (i__11546_11566 + (1));
seq__11543_11563 = G__11568;
chunk__11544_11564 = G__11569;
count__11545_11565 = G__11570;
i__11546_11566 = G__11571;
continue;
}
} else
{var temp__4126__auto___11572 = cljs.core.seq.call(null,seq__11543_11563);if(temp__4126__auto___11572)
{var seq__11543_11573__$1 = temp__4126__auto___11572;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11543_11573__$1))
{var c__4410__auto___11574 = cljs.core.chunk_first.call(null,seq__11543_11573__$1);{
var G__11575 = cljs.core.chunk_rest.call(null,seq__11543_11573__$1);
var G__11576 = c__4410__auto___11574;
var G__11577 = cljs.core.count.call(null,c__4410__auto___11574);
var G__11578 = (0);
seq__11543_11563 = G__11575;
chunk__11544_11564 = G__11576;
count__11545_11565 = G__11577;
i__11546_11566 = G__11578;
continue;
}
} else
{var f_11579 = cljs.core.first.call(null,seq__11543_11573__$1);figwheel.client.reload_css_file.call(null,f_11579);
{
var G__11580 = cljs.core.next.call(null,seq__11543_11573__$1);
var G__11581 = null;
var G__11582 = (0);
var G__11583 = (0);
seq__11543_11563 = G__11580;
chunk__11544_11564 = G__11581;
count__11545_11565 = G__11582;
i__11546_11566 = G__11583;
continue;
}
}
} else
{}
}
break;
}
var c__6744__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6744__auto__,map__11542,map__11542__$1,opts,on_cssload){
return (function (){var f__6745__auto__ = (function (){var switch__6688__auto__ = ((function (c__6744__auto__,map__11542,map__11542__$1,opts,on_cssload){
return (function (state_11553){var state_val_11554 = (state_11553[(1)]);if((state_val_11554 === (2)))
{var inst_11549 = (state_11553[(2)]);var inst_11550 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_11551 = on_cssload.call(null,inst_11550);var state_11553__$1 = (function (){var statearr_11555 = state_11553;(statearr_11555[(7)] = inst_11549);
return statearr_11555;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11553__$1,inst_11551);
} else
{if((state_val_11554 === (1)))
{var inst_11547 = cljs.core.async.timeout.call(null,(100));var state_11553__$1 = state_11553;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11553__$1,(2),inst_11547);
} else
{return null;
}
}
});})(c__6744__auto__,map__11542,map__11542__$1,opts,on_cssload))
;return ((function (switch__6688__auto__,c__6744__auto__,map__11542,map__11542__$1,opts,on_cssload){
return (function() {
var state_machine__6689__auto__ = null;
var state_machine__6689__auto____0 = (function (){var statearr_11559 = [null,null,null,null,null,null,null,null];(statearr_11559[(0)] = state_machine__6689__auto__);
(statearr_11559[(1)] = (1));
return statearr_11559;
});
var state_machine__6689__auto____1 = (function (state_11553){while(true){
var ret_value__6690__auto__ = (function (){try{while(true){
var result__6691__auto__ = switch__6688__auto__.call(null,state_11553);if(cljs.core.keyword_identical_QMARK_.call(null,result__6691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6691__auto__;
}
break;
}
}catch (e11560){if((e11560 instanceof Object))
{var ex__6692__auto__ = e11560;var statearr_11561_11584 = state_11553;(statearr_11561_11584[(5)] = ex__6692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11553);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11560;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11585 = state_11553;
state_11553 = G__11585;
continue;
}
} else
{return ret_value__6690__auto__;
}
break;
}
});
state_machine__6689__auto__ = function(state_11553){
switch(arguments.length){
case 0:
return state_machine__6689__auto____0.call(this);
case 1:
return state_machine__6689__auto____1.call(this,state_11553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6689__auto____0;
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6689__auto____1;
return state_machine__6689__auto__;
})()
;})(switch__6688__auto__,c__6744__auto__,map__11542,map__11542__$1,opts,on_cssload))
})();var state__6746__auto__ = (function (){var statearr_11562 = f__6745__auto__.call(null);(statearr_11562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6744__auto__);
return statearr_11562;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6746__auto__);
});})(c__6744__auto__,map__11542,map__11542__$1,opts,on_cssload))
);
return c__6744__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__11586){var map__11591 = p__11586;var map__11591__$1 = ((cljs.core.seq_QMARK_.call(null,map__11591))?cljs.core.apply.call(null,cljs.core.hash_map,map__11591):map__11591);var opts = map__11591__$1;var on_compile_fail = cljs.core.get.call(null,map__11591__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__11591__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__11591__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__11591__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__11591,map__11591__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__11592 = cljs.core._EQ_;var expr__11593 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__11592.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__11593)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__11592.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__11593)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__11592.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__11593)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__11591,map__11591__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__11591,map__11591__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__11591,map__11591__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__11591,map__11591__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__11591,map__11591__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__11591,map__11591__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__11591,map__11591__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__11591,map__11591__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__11591,map__11591__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj11598 = {"detail":url};return obj11598;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__11599){var map__11601 = p__11599;var map__11601__$1 = ((cljs.core.seq_QMARK_.call(null,map__11601))?cljs.core.apply.call(null,cljs.core.hash_map,map__11601):map__11601);var class$ = cljs.core.get.call(null,map__11601__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__11601__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__11602){var map__11608 = p__11602;var map__11608__$1 = ((cljs.core.seq_QMARK_.call(null,map__11608))?cljs.core.apply.call(null,cljs.core.hash_map,map__11608):map__11608);var ed = map__11608__$1;var exception_data = cljs.core.get.call(null,map__11608__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__11608__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__11609_11613 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__11610_11614 = null;var count__11611_11615 = (0);var i__11612_11616 = (0);while(true){
if((i__11612_11616 < count__11611_11615))
{var msg_11617 = cljs.core._nth.call(null,chunk__11610_11614,i__11612_11616);console.log(msg_11617);
{
var G__11618 = seq__11609_11613;
var G__11619 = chunk__11610_11614;
var G__11620 = count__11611_11615;
var G__11621 = (i__11612_11616 + (1));
seq__11609_11613 = G__11618;
chunk__11610_11614 = G__11619;
count__11611_11615 = G__11620;
i__11612_11616 = G__11621;
continue;
}
} else
{var temp__4126__auto___11622 = cljs.core.seq.call(null,seq__11609_11613);if(temp__4126__auto___11622)
{var seq__11609_11623__$1 = temp__4126__auto___11622;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11609_11623__$1))
{var c__4410__auto___11624 = cljs.core.chunk_first.call(null,seq__11609_11623__$1);{
var G__11625 = cljs.core.chunk_rest.call(null,seq__11609_11623__$1);
var G__11626 = c__4410__auto___11624;
var G__11627 = cljs.core.count.call(null,c__4410__auto___11624);
var G__11628 = (0);
seq__11609_11613 = G__11625;
chunk__11610_11614 = G__11626;
count__11611_11615 = G__11627;
i__11612_11616 = G__11628;
continue;
}
} else
{var msg_11629 = cljs.core.first.call(null,seq__11609_11623__$1);console.log(msg_11629);
{
var G__11630 = cljs.core.next.call(null,seq__11609_11623__$1);
var G__11631 = null;
var G__11632 = (0);
var G__11633 = (0);
seq__11609_11613 = G__11630;
chunk__11610_11614 = G__11631;
count__11611_11615 = G__11632;
i__11612_11616 = G__11633;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__3640__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__11634){var map__11636 = p__11634;var map__11636__$1 = ((cljs.core.seq_QMARK_.call(null,map__11636))?cljs.core.apply.call(null,cljs.core.hash_map,map__11636):map__11636);var opts = map__11636__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__11634 = null;if (arguments.length > 0) {
  p__11634 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__11634);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__11637){
var p__11634 = cljs.core.seq(arglist__11637);
return watch_and_reload__delegate(p__11634);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map