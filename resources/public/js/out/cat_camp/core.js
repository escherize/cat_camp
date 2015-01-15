// Compiled by ClojureScript 0.0-2371
goog.provide('cat_camp.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('goog.history.EventType');
goog.require('cat_camp.views.common');
goog.require('reagent.core');
goog.require('cat_camp.routes');
goog.require('goog.history.EventType');
goog.require('goog.History');
goog.require('goog.events');
goog.require('cat_camp.session');
goog.require('cat_camp.routes');
goog.require('cat_camp.session');
goog.require('secretary.core');
goog.require('cat_camp.views.common');
goog.require('goog.events');
goog.require('secretary.core');
cat_camp.core.page_render = (function page_render(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cat_camp.views.common.header], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cat_camp.session.global_state.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cat_camp.views.common.footer], null)], null);
});
cat_camp.core.page_component = (function page_component(){return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-will-mount","component-will-mount",209708855),cat_camp.routes.app_routes,new cljs.core.Keyword(null,"render","render",-1408033454),cat_camp.core.page_render], null));
});
cat_camp.core.init_BANG_ = (function init_BANG_(){cat_camp.session.global_put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Keyword(null,"home-page","home-page",1804156194));
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cat_camp.core.page_component], null),document.getElementById("app"));
});

//# sourceMappingURL=core.js.map