// Compiled by ClojureScript 0.0-2371
goog.provide('cat_camp.util');
goog.require('cljs.core');
goog.require('cat_camp.session');
goog.require('cat_camp.session');
cat_camp.util.roll = (function roll(){return ((cljs.core.rand_int.call(null,(6)) + (1)) + (cljs.core.rand_int.call(null,(6)) + (1)));
});
/**
* Rotates a collection left while (pred item) is true. Will return a
* unrotated sequence if (pred item) is never true. Executes in O(n) time.
*/
cat_camp.util.rotate_while = (function rotate_while(pred,coll){var head = cljs.core.drop_while.call(null,pred,coll);return cljs.core.take.call(null,cljs.core.count.call(null,coll),cljs.core.concat.call(null,head,coll));
});
cat_camp.util.named_players_names = (function named_players_names(){return cljs.core.set.call(null,cljs.core.remove.call(null,(function (p1__18835_SHARP_){return cljs.core._EQ_.call(null,p1__18835_SHARP_,"");
}),cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.vals.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cat_camp.session.app_state))))));
});
cat_camp.util.named_players = (function named_players(){return cljs.core.count.call(null,cat_camp.util.named_players_names.call(null));
});
cat_camp.util.roll_dice = (function roll_dice(){cat_camp.session.global_put_BANG_.call(null,new cljs.core.Keyword(null,"turn-count","turn-count",1105131756),(cat_camp.session.global_state.call(null,new cljs.core.Keyword(null,"turn-count","turn-count",1105131756)) + (1)));
cat_camp.session.global_put_BANG_.call(null,new cljs.core.Keyword(null,"last-roll","last-roll",-1796461581),cat_camp.util.roll.call(null));
return cat_camp.session.global_put_BANG_.call(null,new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.update_in.call(null,cat_camp.session.global_state.call(null,new cljs.core.Keyword(null,"history","history",-247395220)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cat_camp.session.global_state.call(null,new cljs.core.Keyword(null,"last-roll","last-roll",-1796461581))], null),cljs.core.inc));
});
cat_camp.util.order_players_by_order_roll = (function order_players_by_order_roll(){var unordered = cljs.core.remove.call(null,(function (p1__18836_SHARP_){return cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__18836_SHARP_));
}),cljs.core.vals.call(null,new cljs.core.Keyword(null,"players","players",-1361554569).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cat_camp.session.app_state))));var top_roll = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,new cljs.core.Keyword(null,"order-roll","order-roll",66521682),unordered));var ordered = cat_camp.util.rotate_while.call(null,((function (unordered,top_roll){
return (function (p1__18837_SHARP_){return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"order-roll","order-roll",66521682).cljs$core$IFn$_invoke$arity$1(p1__18837_SHARP_),top_roll);
});})(unordered,top_roll))
,unordered);return ordered;
});

//# sourceMappingURL=util.js.map