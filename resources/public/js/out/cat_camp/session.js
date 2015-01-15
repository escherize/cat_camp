// Compiled by ClojureScript 0.0-2371
goog.provide('cat_camp.session');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('reagent.core');
cat_camp.session.blank_history = (function blank_history(){return cljs.core.zipmap.call(null,cljs.core.range.call(null,(2),(13)),cljs.core.repeat.call(null,(0)));
});
cat_camp.session.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"debug?","debug?",-1831756173),true,new cljs.core.Keyword(null,"turn-count","turn-count",1105131756),(-1),new cljs.core.Keyword(null,"last-roll","last-roll",-1796461581),(0),new cljs.core.Keyword(null,"history","history",-247395220),cat_camp.session.blank_history.call(null),new cljs.core.Keyword(null,"players","players",-1361554569),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"1","1",-521621649),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Oren",new cljs.core.Keyword(null,"color","color",1011675173),"Red",new cljs.core.Keyword(null,"history","history",-247395220),cat_camp.session.blank_history.call(null)], null),new cljs.core.Keyword(null,"2","2",-1645882217),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Jeff",new cljs.core.Keyword(null,"color","color",1011675173),"Blue",new cljs.core.Keyword(null,"history","history",-247395220),cat_camp.session.blank_history.call(null)], null),new cljs.core.Keyword(null,"3","3",2097825370),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Sarah",new cljs.core.Keyword(null,"color","color",1011675173),"White",new cljs.core.Keyword(null,"history","history",-247395220),cat_camp.session.blank_history.call(null)], null),new cljs.core.Keyword(null,"4","4",-1197948085),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"Bryan",new cljs.core.Keyword(null,"color","color",1011675173),"Orange",new cljs.core.Keyword(null,"history","history",-247395220),cat_camp.session.blank_history.call(null)], null)], null)], null));
/**
* @param {...*} var_args
*/
cat_camp.session.global_state = (function() { 
var global_state__delegate = function (k,p__18763){var vec__18765 = p__18763;var default$ = cljs.core.nth.call(null,vec__18765,(0),null);return cljs.core.get.call(null,cljs.core.deref.call(null,cat_camp.session.app_state),k,default$);
};
var global_state = function (k,var_args){
var p__18763 = null;if (arguments.length > 1) {
  p__18763 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return global_state__delegate.call(this,k,p__18763);};
global_state.cljs$lang$maxFixedArity = 1;
global_state.cljs$lang$applyTo = (function (arglist__18766){
var k = cljs.core.first(arglist__18766);
var p__18763 = cljs.core.rest(arglist__18766);
return global_state__delegate(k,p__18763);
});
global_state.cljs$core$IFn$_invoke$arity$variadic = global_state__delegate;
return global_state;
})()
;
cat_camp.session.global_put_BANG_ = (function global_put_BANG_(k,v){return cljs.core.swap_BANG_.call(null,cat_camp.session.app_state,cljs.core.assoc,k,v);
});
cat_camp.session.local_put_BANG_ = (function local_put_BANG_(a,k,v){return cljs.core.swap_BANG_.call(null,a,cljs.core.assoc,k,v);
});
cat_camp.session.visit = (function visit(path){return window.location = path;
});
cat_camp.session.player = (function player(n){return cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,cat_camp.session.app_state),new cljs.core.Keyword(null,"players","players",-1361554569)),cljs.core.keyword.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n))));
});
cat_camp.session.update_player = (function update_player(n,kw,v){return cljs.core.swap_BANG_.call(null,cat_camp.session.app_state,(function (p1__18767_SHARP_){return cljs.core.update_in.call(null,p1__18767_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"players","players",-1361554569),cljs.core.keyword.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)))], null),(function (p){return cljs.core.assoc.call(null,p,kw,v);
}));
}));
});

//# sourceMappingURL=session.js.map