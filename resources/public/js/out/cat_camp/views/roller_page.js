// Compiled by ClojureScript 0.0-2371
goog.provide('cat_camp.views.roller_page');
goog.require('cljs.core');
goog.require('cat_camp.session');
goog.require('cat_camp.session');
goog.require('cat_camp.session');
goog.require('cat_camp.util');
goog.require('cat_camp.util');
cat_camp.views.roller_page.render_player = (function render_player(player){var players_turn = cljs.core._EQ_.call(null,cat_camp.session.global_state.call(null,new cljs.core.Keyword(null,"whose-turn","whose-turn",1106400973)),player);if(players_turn)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.current","li.current",-659325040),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(player)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(player)], null);
}
});
cat_camp.views.roller_page.roller_page = (function roller_page(){var players = cat_camp.util.order_players_by_order_roll.call(null);if(cljs.core._EQ_.call(null,(-1),cat_camp.session.global_state.call(null,new cljs.core.Keyword(null,"turn-count","turn-count",1105131756))))
{cat_camp.util.roll_dice.call(null);
} else
{}
cat_camp.session.global_put_BANG_.call(null,new cljs.core.Keyword(null,"whose-turn","whose-turn",1106400973),cljs.core.nth.call(null,players,cljs.core.rem.call(null,cat_camp.session.global_state.call(null,new cljs.core.Keyword(null,"turn-count","turn-count",1105131756)),cat_camp.util.named_players.call(null))));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-3","div.col-sm-3",1173288798),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#roll.hex1","div#roll.hex1",-1633223138),cat_camp.session.global_state.call(null,new cljs.core.Keyword(null,"last-roll","last-roll",-1796461581))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#big-btn.btn","input#big-btn.btn",2084408838),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Roll!",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (players){
return (function (){return cat_camp.util.roll_dice.call(null);
});})(players))
], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-2","div.col-sm-2",-509844827),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.players","ul.players",-973339033),cljs.core.doall.call(null,(function (){var iter__13285__auto__ = ((function (players){
return (function iter__18829(s__18830){return (new cljs.core.LazySeq(null,((function (players){
return (function (){var s__18830__$1 = s__18830;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__18830__$1);if(temp__4126__auto__)
{var s__18830__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__18830__$2))
{var c__13283__auto__ = cljs.core.chunk_first.call(null,s__18830__$2);var size__13284__auto__ = cljs.core.count.call(null,c__13283__auto__);var b__18832 = cljs.core.chunk_buffer.call(null,size__13284__auto__);if((function (){var i__18831 = (0);while(true){
if((i__18831 < size__13284__auto__))
{var p = cljs.core._nth.call(null,c__13283__auto__,i__18831);cljs.core.chunk_append.call(null,b__18832,cat_camp.views.roller_page.render_player.call(null,p));
{
var G__18833 = (i__18831 + (1));
i__18831 = G__18833;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18832),iter__18829.call(null,cljs.core.chunk_rest.call(null,s__18830__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18832),null);
}
} else
{var p = cljs.core.first.call(null,s__18830__$2);return cljs.core.cons.call(null,cat_camp.views.roller_page.render_player.call(null,p),iter__18829.call(null,cljs.core.rest.call(null,s__18830__$2)));
}
} else
{return null;
}
break;
}
});})(players))
,null,null));
});})(players))
;return iter__13285__auto__.call(null,players);
})())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),("turn #:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cat_camp.session.global_state.call(null,new cljs.core.Keyword(null,"turn-count","turn-count",1105131756))))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-sm-7","div.col-sm-7",-1884513921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#histogram","div#histogram",1963952116),"many gfx"], null)], null)], null);
});

//# sourceMappingURL=roller_page.js.map