// Compiled by ClojureScript 0.0-2371
goog.provide('cat_camp.views.home_page');
goog.require('cljs.core');
goog.require('secretary.core');
goog.require('secretary.core');
goog.require('cat_camp.util');
goog.require('cat_camp.util');
goog.require('cat_camp.session');
goog.require('cat_camp.session');
cat_camp.views.home_page.player_input = (function player_input(number,placeholder){var player_map = cat_camp.session.player.call(null,number);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(cat_camp.session.global_state.call(null,new cljs.core.Keyword(null,"debug?","debug?",-1831756173)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.pr_str.call(null,player_map)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.player-input","input.player-input",-1266968618),(function (){var pi = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(player_map),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (player_map){
return (function (p1__18793_SHARP_){return cat_camp.session.update_player.call(null,number,new cljs.core.Keyword(null,"name","name",1843675177),p1__18793_SHARP_.target.value);
});})(player_map))
], null);if(cljs.core._EQ_.call(null,number,(1)))
{return cljs.core.assoc.call(null,pi,new cljs.core.Keyword(null,"autofocus","autofocus",-712814732),"autofocus");
} else
{return pi;
}
})()], null)], null);
});
cat_camp.views.home_page.button_title = (function button_title(){if(cljs.core._EQ_.call(null,(3),cat_camp.util.named_players.call(null)))
{return "Play with 3 players";
} else
{if(cljs.core._EQ_.call(null,(4),cat_camp.util.named_players.call(null)))
{return "Play with 4 players";
} else
{return "Your names, in clockwise order please";

}
}
});
cat_camp.views.home_page.next_page_button = (function next_page_button(){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),cat_camp.views.home_page.button_title.call(null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){return cat_camp.session.visit.call(null,"#roll-order");
})], null);
});
cat_camp.views.home_page.home_page = (function home_page(){return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.home-page","div.home-page",149758333),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cat_camp.views.home_page.player_input,(1),"Red"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cat_camp.views.home_page.player_input,(2),"Blue"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cat_camp.views.home_page.player_input,(3),"White"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cat_camp.views.home_page.player_input,(4),"Orange"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.player-input.btn.btn-large","input.player-input.btn.btn-large",1679068116),(((function (){return ((3) <= cat_camp.util.named_players.call(null));
}).call(null))?cljs.core.dissoc.call(null,cat_camp.views.home_page.next_page_button.call(null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218)):cljs.core.assoc.call(null,cat_camp.views.home_page.next_page_button.call(null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true))], null)], null);
});

//# sourceMappingURL=home_page.js.map