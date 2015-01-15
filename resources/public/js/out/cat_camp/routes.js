// Compiled by ClojureScript 0.0-2371
goog.provide('cat_camp.routes');
goog.require('cljs.core');
goog.require('cat_camp.views.pages');
goog.require('goog.history.EventType');
goog.require('goog.history.EventType');
goog.require('cat_camp.views.pages');
goog.require('goog.History');
goog.require('goog.events');
goog.require('cat_camp.session');
goog.require('cat_camp.session');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('secretary.core');
cat_camp.routes.hook_browser_navigation_BANG_ = (function hook_browser_navigation_BANG_(){var G__18454 = (new goog.History());goog.events.listen(G__18454,goog.history.EventType.NAVIGATE,((function (G__18454){
return (function (event){return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__18454))
);
G__18454.setEnabled(true);
return G__18454;
});
cat_camp.routes.app_routes = (function app_routes(){secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__13518__auto___18467 = (function (params__13519__auto__){if(cljs.core.map_QMARK_.call(null,params__13519__auto__))
{var map__18461 = params__13519__auto__;var map__18461__$1 = ((cljs.core.seq_QMARK_.call(null,map__18461))?cljs.core.apply.call(null,cljs.core.hash_map,map__18461):map__18461);return cat_camp.session.global_put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),cat_camp.views.pages.pages.call(null,new cljs.core.Keyword(null,"home-page","home-page",1804156194)));
} else
{if(cljs.core.vector_QMARK_.call(null,params__13519__auto__))
{var vec__18462 = params__13519__auto__;return cat_camp.session.global_put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),cat_camp.views.pages.pages.call(null,new cljs.core.Keyword(null,"home-page","home-page",1804156194)));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__13518__auto___18467);
var action__13518__auto___18468 = (function (params__13519__auto__){if(cljs.core.map_QMARK_.call(null,params__13519__auto__))
{var map__18463 = params__13519__auto__;var map__18463__$1 = ((cljs.core.seq_QMARK_.call(null,map__18463))?cljs.core.apply.call(null,cljs.core.hash_map,map__18463):map__18463);return cat_camp.session.global_put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),cat_camp.views.pages.pages.call(null,new cljs.core.Keyword(null,"roll-order-page","roll-order-page",-861974305)));
} else
{if(cljs.core.vector_QMARK_.call(null,params__13519__auto__))
{var vec__18464 = params__13519__auto__;return cat_camp.session.global_put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),cat_camp.views.pages.pages.call(null,new cljs.core.Keyword(null,"roll-order-page","roll-order-page",-861974305)));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/roll-order",action__13518__auto___18468);
var action__13518__auto___18469 = (function (params__13519__auto__){if(cljs.core.map_QMARK_.call(null,params__13519__auto__))
{var map__18465 = params__13519__auto__;var map__18465__$1 = ((cljs.core.seq_QMARK_.call(null,map__18465))?cljs.core.apply.call(null,cljs.core.hash_map,map__18465):map__18465);return cat_camp.session.global_put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),cat_camp.views.pages.pages.call(null,new cljs.core.Keyword(null,"roller-page","roller-page",-1691291234)));
} else
{if(cljs.core.vector_QMARK_.call(null,params__13519__auto__))
{var vec__18466 = params__13519__auto__;return cat_camp.session.global_put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),cat_camp.views.pages.pages.call(null,new cljs.core.Keyword(null,"roller-page","roller-page",-1691291234)));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/roller",action__13518__auto___18469);
return cat_camp.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map