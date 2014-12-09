// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11641 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11641 = (function (f,fn_handler,meta11642){
this.f = f;
this.fn_handler = fn_handler;
this.meta11642 = meta11642;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11641.cljs$lang$type = true;
cljs.core.async.t11641.cljs$lang$ctorStr = "cljs.core.async/t11641";
cljs.core.async.t11641.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t11641");
});
cljs.core.async.t11641.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11641.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11641.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11641.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11643){var self__ = this;
var _11643__$1 = this;return self__.meta11642;
});
cljs.core.async.t11641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11643,meta11642__$1){var self__ = this;
var _11643__$1 = this;return (new cljs.core.async.t11641(self__.f,self__.fn_handler,meta11642__$1));
});
cljs.core.async.__GT_t11641 = (function __GT_t11641(f__$1,fn_handler__$1,meta11642){return (new cljs.core.async.t11641(f__$1,fn_handler__$1,meta11642));
});
}
return (new cljs.core.async.t11641(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11645 = buff;if(G__11645)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__11645.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11645.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11645);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11645);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_11646 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11646);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11646,ret){
return (function (){return fn1.call(null,val_11646);
});})(val_11646,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4510__auto___11647 = n;var x_11648 = (0);while(true){
if((x_11648 < n__4510__auto___11647))
{(a[x_11648] = (0));
{
var G__11649 = (x_11648 + (1));
x_11648 = G__11649;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11650 = (i + (1));
i = G__11650;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11654 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11654 = (function (flag,alt_flag,meta11655){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11655 = meta11655;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11654.cljs$lang$type = true;
cljs.core.async.t11654.cljs$lang$ctorStr = "cljs.core.async/t11654";
cljs.core.async.t11654.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t11654");
});})(flag))
;
cljs.core.async.t11654.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11654.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11654.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11654.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11656){var self__ = this;
var _11656__$1 = this;return self__.meta11655;
});})(flag))
;
cljs.core.async.t11654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11656,meta11655__$1){var self__ = this;
var _11656__$1 = this;return (new cljs.core.async.t11654(self__.flag,self__.alt_flag,meta11655__$1));
});})(flag))
;
cljs.core.async.__GT_t11654 = ((function (flag){
return (function __GT_t11654(flag__$1,alt_flag__$1,meta11655){return (new cljs.core.async.t11654(flag__$1,alt_flag__$1,meta11655));
});})(flag))
;
}
return (new cljs.core.async.t11654(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11660 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11660 = (function (cb,flag,alt_handler,meta11661){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11661 = meta11661;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11660.cljs$lang$type = true;
cljs.core.async.t11660.cljs$lang$ctorStr = "cljs.core.async/t11660";
cljs.core.async.t11660.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t11660");
});
cljs.core.async.t11660.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11660.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11660.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11662){var self__ = this;
var _11662__$1 = this;return self__.meta11661;
});
cljs.core.async.t11660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11662,meta11661__$1){var self__ = this;
var _11662__$1 = this;return (new cljs.core.async.t11660(self__.cb,self__.flag,self__.alt_handler,meta11661__$1));
});
cljs.core.async.__GT_t11660 = (function __GT_t11660(cb__$1,flag__$1,alt_handler__$1,meta11661){return (new cljs.core.async.t11660(cb__$1,flag__$1,alt_handler__$1,meta11661));
});
}
return (new cljs.core.async.t11660(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11663_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11663_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11664_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11664_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3640__auto__ = wport;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11665 = (i + (1));
i = G__11665;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3640__auto__ = ret;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3628__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3628__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3628__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__11666){var map__11668 = p__11666;var map__11668__$1 = ((cljs.core.seq_QMARK_.call(null,map__11668))?cljs.core.apply.call(null,cljs.core.hash_map,map__11668):map__11668);var opts = map__11668__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__11666 = null;if (arguments.length > 1) {
  p__11666 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11666);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11669){
var ports = cljs.core.first(arglist__11669);
var p__11666 = cljs.core.rest(arglist__11669);
return alts_BANG___delegate(ports,p__11666);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6744__auto___11764 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6744__auto___11764){
return (function (){var f__6745__auto__ = (function (){var switch__6688__auto__ = ((function (c__6744__auto___11764){
return (function (state_11740){var state_val_11741 = (state_11740[(1)]);if((state_val_11741 === (7)))
{var inst_11736 = (state_11740[(2)]);var state_11740__$1 = state_11740;var statearr_11742_11765 = state_11740__$1;(statearr_11742_11765[(2)] = inst_11736);
(statearr_11742_11765[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11741 === (1)))
{var state_11740__$1 = state_11740;var statearr_11743_11766 = state_11740__$1;(statearr_11743_11766[(2)] = null);
(statearr_11743_11766[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11741 === (4)))
{var inst_11719 = (state_11740[(7)]);var inst_11719__$1 = (state_11740[(2)]);var inst_11720 = (inst_11719__$1 == null);var state_11740__$1 = (function (){var statearr_11744 = state_11740;(statearr_11744[(7)] = inst_11719__$1);
return statearr_11744;
})();if(cljs.core.truth_(inst_11720))
{var statearr_11745_11767 = state_11740__$1;(statearr_11745_11767[(1)] = (5));
} else
{var statearr_11746_11768 = state_11740__$1;(statearr_11746_11768[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11741 === (13)))
{var state_11740__$1 = state_11740;var statearr_11747_11769 = state_11740__$1;(statearr_11747_11769[(2)] = null);
(statearr_11747_11769[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11741 === (6)))
{var inst_11719 = (state_11740[(7)]);var state_11740__$1 = state_11740;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11740__$1,(11),to,inst_11719);
} else
{if((state_val_11741 === (3)))
{var inst_11738 = (state_11740[(2)]);var state_11740__$1 = state_11740;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11740__$1,inst_11738);
} else
{if((state_val_11741 === (12)))
{var state_11740__$1 = state_11740;var statearr_11748_11770 = state_11740__$1;(statearr_11748_11770[(2)] = null);
(statearr_11748_11770[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11741 === (2)))
{var state_11740__$1 = state_11740;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11740__$1,(4),from);
} else
{if((state_val_11741 === (11)))
{var inst_11729 = (state_11740[(2)]);var state_11740__$1 = state_11740;if(cljs.core.truth_(inst_11729))
{var statearr_11749_11771 = state_11740__$1;(statearr_11749_11771[(1)] = (12));
} else
{var statearr_11750_11772 = state_11740__$1;(statearr_11750_11772[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11741 === (9)))
{var state_11740__$1 = state_11740;var statearr_11751_11773 = state_11740__$1;(statearr_11751_11773[(2)] = null);
(statearr_11751_11773[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11741 === (5)))
{var state_11740__$1 = state_11740;if(cljs.core.truth_(close_QMARK_))
{var statearr_11752_11774 = state_11740__$1;(statearr_11752_11774[(1)] = (8));
} else
{var statearr_11753_11775 = state_11740__$1;(statearr_11753_11775[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11741 === (14)))
{var inst_11734 = (state_11740[(2)]);var state_11740__$1 = state_11740;var statearr_11754_11776 = state_11740__$1;(statearr_11754_11776[(2)] = inst_11734);
(statearr_11754_11776[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11741 === (10)))
{var inst_11726 = (state_11740[(2)]);var state_11740__$1 = state_11740;var statearr_11755_11777 = state_11740__$1;(statearr_11755_11777[(2)] = inst_11726);
(statearr_11755_11777[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11741 === (8)))
{var inst_11723 = cljs.core.async.close_BANG_.call(null,to);var state_11740__$1 = state_11740;var statearr_11756_11778 = state_11740__$1;(statearr_11756_11778[(2)] = inst_11723);
(statearr_11756_11778[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6744__auto___11764))
;return ((function (switch__6688__auto__,c__6744__auto___11764){
return (function() {
var state_machine__6689__auto__ = null;
var state_machine__6689__auto____0 = (function (){var statearr_11760 = [null,null,null,null,null,null,null,null];(statearr_11760[(0)] = state_machine__6689__auto__);
(statearr_11760[(1)] = (1));
return statearr_11760;
});
var state_machine__6689__auto____1 = (function (state_11740){while(true){
var ret_value__6690__auto__ = (function (){try{while(true){
var result__6691__auto__ = switch__6688__auto__.call(null,state_11740);if(cljs.core.keyword_identical_QMARK_.call(null,result__6691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6691__auto__;
}
break;
}
}catch (e11761){if((e11761 instanceof Object))
{var ex__6692__auto__ = e11761;var statearr_11762_11779 = state_11740;(statearr_11762_11779[(5)] = ex__6692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11740);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11761;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11780 = state_11740;
state_11740 = G__11780;
continue;
}
} else
{return ret_value__6690__auto__;
}
break;
}
});
state_machine__6689__auto__ = function(state_11740){
switch(arguments.length){
case 0:
return state_machine__6689__auto____0.call(this);
case 1:
return state_machine__6689__auto____1.call(this,state_11740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6689__auto____0;
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6689__auto____1;
return state_machine__6689__auto__;
})()
;})(switch__6688__auto__,c__6744__auto___11764))
})();var state__6746__auto__ = (function (){var statearr_11763 = f__6745__auto__.call(null);(statearr_11763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6744__auto___11764);
return statearr_11763;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6746__auto__);
});})(c__6744__auto___11764))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__11964){var vec__11965 = p__11964;var v = cljs.core.nth.call(null,vec__11965,(0),null);var p = cljs.core.nth.call(null,vec__11965,(1),null);var job = vec__11965;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__6744__auto___12147 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6744__auto___12147,res,vec__11965,v,p,job,jobs,results){
return (function (){var f__6745__auto__ = (function (){var switch__6688__auto__ = ((function (c__6744__auto___12147,res,vec__11965,v,p,job,jobs,results){
return (function (state_11970){var state_val_11971 = (state_11970[(1)]);if((state_val_11971 === (2)))
{var inst_11967 = (state_11970[(2)]);var inst_11968 = cljs.core.async.close_BANG_.call(null,res);var state_11970__$1 = (function (){var statearr_11972 = state_11970;(statearr_11972[(7)] = inst_11967);
return statearr_11972;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11970__$1,inst_11968);
} else
{if((state_val_11971 === (1)))
{var state_11970__$1 = state_11970;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11970__$1,(2),res,v);
} else
{return null;
}
}
});})(c__6744__auto___12147,res,vec__11965,v,p,job,jobs,results))
;return ((function (switch__6688__auto__,c__6744__auto___12147,res,vec__11965,v,p,job,jobs,results){
return (function() {
var state_machine__6689__auto__ = null;
var state_machine__6689__auto____0 = (function (){var statearr_11976 = [null,null,null,null,null,null,null,null];(statearr_11976[(0)] = state_machine__6689__auto__);
(statearr_11976[(1)] = (1));
return statearr_11976;
});
var state_machine__6689__auto____1 = (function (state_11970){while(true){
var ret_value__6690__auto__ = (function (){try{while(true){
var result__6691__auto__ = switch__6688__auto__.call(null,state_11970);if(cljs.core.keyword_identical_QMARK_.call(null,result__6691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6691__auto__;
}
break;
}
}catch (e11977){if((e11977 instanceof Object))
{var ex__6692__auto__ = e11977;var statearr_11978_12148 = state_11970;(statearr_11978_12148[(5)] = ex__6692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11970);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11977;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12149 = state_11970;
state_11970 = G__12149;
continue;
}
} else
{return ret_value__6690__auto__;
}
break;
}
});
state_machine__6689__auto__ = function(state_11970){
switch(arguments.length){
case 0:
return state_machine__6689__auto____0.call(this);
case 1:
return state_machine__6689__auto____1.call(this,state_11970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6689__auto____0;
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6689__auto____1;
return state_machine__6689__auto__;
})()
;})(switch__6688__auto__,c__6744__auto___12147,res,vec__11965,v,p,job,jobs,results))
})();var state__6746__auto__ = (function (){var statearr_11979 = f__6745__auto__.call(null);(statearr_11979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6744__auto___12147);
return statearr_11979;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6746__auto__);
});})(c__6744__auto___12147,res,vec__11965,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__11980){var vec__11981 = p__11980;var v = cljs.core.nth.call(null,vec__11981,(0),null);var p = cljs.core.nth.call(null,vec__11981,(1),null);var job = vec__11981;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4510__auto___12150 = n;var __12151 = (0);while(true){
if((__12151 < n__4510__auto___12150))
{var G__11982_12152 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__11982_12152) {
case "async":
var c__6744__auto___12154 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__12151,c__6744__auto___12154,G__11982_12152,n__4510__auto___12150,jobs,results,process,async){
return (function (){var f__6745__auto__ = (function (){var switch__6688__auto__ = ((function (__12151,c__6744__auto___12154,G__11982_12152,n__4510__auto___12150,jobs,results,process,async){
return (function (state_11995){var state_val_11996 = (state_11995[(1)]);if((state_val_11996 === (7)))
{var inst_11991 = (state_11995[(2)]);var state_11995__$1 = state_11995;var statearr_11997_12155 = state_11995__$1;(statearr_11997_12155[(2)] = inst_11991);
(statearr_11997_12155[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11996 === (6)))
{var state_11995__$1 = state_11995;var statearr_11998_12156 = state_11995__$1;(statearr_11998_12156[(2)] = null);
(statearr_11998_12156[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11996 === (5)))
{var state_11995__$1 = state_11995;var statearr_11999_12157 = state_11995__$1;(statearr_11999_12157[(2)] = null);
(statearr_11999_12157[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11996 === (4)))
{var inst_11985 = (state_11995[(2)]);var inst_11986 = async.call(null,inst_11985);var state_11995__$1 = state_11995;if(cljs.core.truth_(inst_11986))
{var statearr_12000_12158 = state_11995__$1;(statearr_12000_12158[(1)] = (5));
} else
{var statearr_12001_12159 = state_11995__$1;(statearr_12001_12159[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11996 === (3)))
{var inst_11993 = (state_11995[(2)]);var state_11995__$1 = state_11995;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11995__$1,inst_11993);
} else
{if((state_val_11996 === (2)))
{var state_11995__$1 = state_11995;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11995__$1,(4),jobs);
} else
{if((state_val_11996 === (1)))
{var state_11995__$1 = state_11995;var statearr_12002_12160 = state_11995__$1;(statearr_12002_12160[(2)] = null);
(statearr_12002_12160[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__12151,c__6744__auto___12154,G__11982_12152,n__4510__auto___12150,jobs,results,process,async))
;return ((function (__12151,switch__6688__auto__,c__6744__auto___12154,G__11982_12152,n__4510__auto___12150,jobs,results,process,async){
return (function() {
var state_machine__6689__auto__ = null;
var state_machine__6689__auto____0 = (function (){var statearr_12006 = [null,null,null,null,null,null,null];(statearr_12006[(0)] = state_machine__6689__auto__);
(statearr_12006[(1)] = (1));
return statearr_12006;
});
var state_machine__6689__auto____1 = (function (state_11995){while(true){
var ret_value__6690__auto__ = (function (){try{while(true){
var result__6691__auto__ = switch__6688__auto__.call(null,state_11995);if(cljs.core.keyword_identical_QMARK_.call(null,result__6691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6691__auto__;
}
break;
}
}catch (e12007){if((e12007 instanceof Object))
{var ex__6692__auto__ = e12007;var statearr_12008_12161 = state_11995;(statearr_12008_12161[(5)] = ex__6692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11995);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12007;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12162 = state_11995;
state_11995 = G__12162;
continue;
}
} else
{return ret_value__6690__auto__;
}
break;
}
});
state_machine__6689__auto__ = function(state_11995){
switch(arguments.length){
case 0:
return state_machine__6689__auto____0.call(this);
case 1:
return state_machine__6689__auto____1.call(this,state_11995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6689__auto____0;
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6689__auto____1;
return state_machine__6689__auto__;
})()
;})(__12151,switch__6688__auto__,c__6744__auto___12154,G__11982_12152,n__4510__auto___12150,jobs,results,process,async))
})();var state__6746__auto__ = (function (){var statearr_12009 = f__6745__auto__.call(null);(statearr_12009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6744__auto___12154);
return statearr_12009;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6746__auto__);
});})(__12151,c__6744__auto___12154,G__11982_12152,n__4510__auto___12150,jobs,results,process,async))
);

break;
case "compute":
var c__6744__auto___12163 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__12151,c__6744__auto___12163,G__11982_12152,n__4510__auto___12150,jobs,results,process,async){
return (function (){var f__6745__auto__ = (function (){var switch__6688__auto__ = ((function (__12151,c__6744__auto___12163,G__11982_12152,n__4510__auto___12150,jobs,results,process,async){
return (function (state_12022){var state_val_12023 = (state_12022[(1)]);if((state_val_12023 === (7)))
{var inst_12018 = (state_12022[(2)]);var state_12022__$1 = state_12022;var statearr_12024_12164 = state_12022__$1;(statearr_12024_12164[(2)] = inst_12018);
(statearr_12024_12164[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12023 === (6)))
{var state_12022__$1 = state_12022;var statearr_12025_12165 = state_12022__$1;(statearr_12025_12165[(2)] = null);
(statearr_12025_12165[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12023 === (5)))
{var state_12022__$1 = state_12022;var statearr_12026_12166 = state_12022__$1;(statearr_12026_12166[(2)] = null);
(statearr_12026_12166[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12023 === (4)))
{var inst_12012 = (state_12022[(2)]);var inst_12013 = process.call(null,inst_12012);var state_12022__$1 = state_12022;if(cljs.core.truth_(inst_12013))
{var statearr_12027_12167 = state_12022__$1;(statearr_12027_12167[(1)] = (5));
} else
{var statearr_12028_12168 = state_12022__$1;(statearr_12028_12168[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12023 === (3)))
{var inst_12020 = (state_12022[(2)]);var state_12022__$1 = state_12022;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12022__$1,inst_12020);
} else
{if((state_val_12023 === (2)))
{var state_12022__$1 = state_12022;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12022__$1,(4),jobs);
} else
{if((state_val_12023 === (1)))
{var state_12022__$1 = state_12022;var statearr_12029_12169 = state_12022__$1;(statearr_12029_12169[(2)] = null);
(statearr_12029_12169[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__12151,c__6744__auto___12163,G__11982_12152,n__4510__auto___12150,jobs,results,process,async))
;return ((function (__12151,switch__6688__auto__,c__6744__auto___12163,G__11982_12152,n__4510__auto___12150,jobs,results,process,async){
return (function() {
var state_machine__6689__auto__ = null;
var state_machine__6689__auto____0 = (function (){var statearr_12033 = [null,null,null,null,null,null,null];(statearr_12033[(0)] = state_machine__6689__auto__);
(statearr_12033[(1)] = (1));
return statearr_12033;
});
var state_machine__6689__auto____1 = (function (state_12022){while(true){
var ret_value__6690__auto__ = (function (){try{while(true){
var result__6691__auto__ = switch__6688__auto__.call(null,state_12022);if(cljs.core.keyword_identical_QMARK_.call(null,result__6691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6691__auto__;
}
break;
}
}catch (e12034){if((e12034 instanceof Object))
{var ex__6692__auto__ = e12034;var statearr_12035_12170 = state_12022;(statearr_12035_12170[(5)] = ex__6692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12022);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12034;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12171 = state_12022;
state_12022 = G__12171;
continue;
}
} else
{return ret_value__6690__auto__;
}
break;
}
});
state_machine__6689__auto__ = function(state_12022){
switch(arguments.length){
case 0:
return state_machine__6689__auto____0.call(this);
case 1:
return state_machine__6689__auto____1.call(this,state_12022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6689__auto____0;
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6689__auto____1;
return state_machine__6689__auto__;
})()
;})(__12151,switch__6688__auto__,c__6744__auto___12163,G__11982_12152,n__4510__auto___12150,jobs,results,process,async))
})();var state__6746__auto__ = (function (){var statearr_12036 = f__6745__auto__.call(null);(statearr_12036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6744__auto___12163);
return statearr_12036;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6746__auto__);
});})(__12151,c__6744__auto___12163,G__11982_12152,n__4510__auto___12150,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__12172 = (__12151 + (1));
__12151 = G__12172;
continue;
}
} else
{}
break;
}
var c__6744__auto___12173 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6744__auto___12173,jobs,results,process,async){
return (function (){var f__6745__auto__ = (function (){var switch__6688__auto__ = ((function (c__6744__auto___12173,jobs,results,process,async){
return (function (state_12058){var state_val_12059 = (state_12058[(1)]);if((state_val_12059 === (9)))
{var inst_12051 = (state_12058[(2)]);var state_12058__$1 = (function (){var statearr_12060 = state_12058;(statearr_12060[(7)] = inst_12051);
return statearr_12060;
})();var statearr_12061_12174 = state_12058__$1;(statearr_12061_12174[(2)] = null);
(statearr_12061_12174[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12059 === (8)))
{var inst_12044 = (state_12058[(8)]);var inst_12049 = (state_12058[(2)]);var state_12058__$1 = (function (){var statearr_12062 = state_12058;(statearr_12062[(9)] = inst_12049);
return statearr_12062;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12058__$1,(9),results,inst_12044);
} else
{if((state_val_12059 === (7)))
{var inst_12054 = (state_12058[(2)]);var state_12058__$1 = state_12058;var statearr_12063_12175 = state_12058__$1;(statearr_12063_12175[(2)] = inst_12054);
(statearr_12063_12175[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12059 === (6)))
{var inst_12044 = (state_12058[(8)]);var inst_12039 = (state_12058[(10)]);var inst_12044__$1 = cljs.core.async.chan.call(null,(1));var inst_12045 = cljs.core.PersistentVector.EMPTY_NODE;var inst_12046 = [inst_12039,inst_12044__$1];var inst_12047 = (new cljs.core.PersistentVector(null,2,(5),inst_12045,inst_12046,null));var state_12058__$1 = (function (){var statearr_12064 = state_12058;(statearr_12064[(8)] = inst_12044__$1);
return statearr_12064;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12058__$1,(8),jobs,inst_12047);
} else
{if((state_val_12059 === (5)))
{var inst_12042 = cljs.core.async.close_BANG_.call(null,jobs);var state_12058__$1 = state_12058;var statearr_12065_12176 = state_12058__$1;(statearr_12065_12176[(2)] = inst_12042);
(statearr_12065_12176[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12059 === (4)))
{var inst_12039 = (state_12058[(10)]);var inst_12039__$1 = (state_12058[(2)]);var inst_12040 = (inst_12039__$1 == null);var state_12058__$1 = (function (){var statearr_12066 = state_12058;(statearr_12066[(10)] = inst_12039__$1);
return statearr_12066;
})();if(cljs.core.truth_(inst_12040))
{var statearr_12067_12177 = state_12058__$1;(statearr_12067_12177[(1)] = (5));
} else
{var statearr_12068_12178 = state_12058__$1;(statearr_12068_12178[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12059 === (3)))
{var inst_12056 = (state_12058[(2)]);var state_12058__$1 = state_12058;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12058__$1,inst_12056);
} else
{if((state_val_12059 === (2)))
{var state_12058__$1 = state_12058;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12058__$1,(4),from);
} else
{if((state_val_12059 === (1)))
{var state_12058__$1 = state_12058;var statearr_12069_12179 = state_12058__$1;(statearr_12069_12179[(2)] = null);
(statearr_12069_12179[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__6744__auto___12173,jobs,results,process,async))
;return ((function (switch__6688__auto__,c__6744__auto___12173,jobs,results,process,async){
return (function() {
var state_machine__6689__auto__ = null;
var state_machine__6689__auto____0 = (function (){var statearr_12073 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12073[(0)] = state_machine__6689__auto__);
(statearr_12073[(1)] = (1));
return statearr_12073;
});
var state_machine__6689__auto____1 = (function (state_12058){while(true){
var ret_value__6690__auto__ = (function (){try{while(true){
var result__6691__auto__ = switch__6688__auto__.call(null,state_12058);if(cljs.core.keyword_identical_QMARK_.call(null,result__6691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6691__auto__;
}
break;
}
}catch (e12074){if((e12074 instanceof Object))
{var ex__6692__auto__ = e12074;var statearr_12075_12180 = state_12058;(statearr_12075_12180[(5)] = ex__6692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12058);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12074;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12181 = state_12058;
state_12058 = G__12181;
continue;
}
} else
{return ret_value__6690__auto__;
}
break;
}
});
state_machine__6689__auto__ = function(state_12058){
switch(arguments.length){
case 0:
return state_machine__6689__auto____0.call(this);
case 1:
return state_machine__6689__auto____1.call(this,state_12058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6689__auto____0;
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6689__auto____1;
return state_machine__6689__auto__;
})()
;})(switch__6688__auto__,c__6744__auto___12173,jobs,results,process,async))
})();var state__6746__auto__ = (function (){var statearr_12076 = f__6745__auto__.call(null);(statearr_12076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6744__auto___12173);
return statearr_12076;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6746__auto__);
});})(c__6744__auto___12173,jobs,results,process,async))
);
var c__6744__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6744__auto__,jobs,results,process,async){
return (function (){var f__6745__auto__ = (function (){var switch__6688__auto__ = ((function (c__6744__auto__,jobs,results,process,async){
return (function (state_12114){var state_val_12115 = (state_12114[(1)]);if((state_val_12115 === (7)))
{var inst_12110 = (state_12114[(2)]);var state_12114__$1 = state_12114;var statearr_12116_12182 = state_12114__$1;(statearr_12116_12182[(2)] = inst_12110);
(statearr_12116_12182[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12115 === (20)))
{var state_12114__$1 = state_12114;var statearr_12117_12183 = state_12114__$1;(statearr_12117_12183[(2)] = null);
(statearr_12117_12183[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12115 === (1)))
{var state_12114__$1 = state_12114;var statearr_12118_12184 = state_12114__$1;(statearr_12118_12184[(2)] = null);
(statearr_12118_12184[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12115 === (4)))
{var inst_12079 = (state_12114[(7)]);var inst_12079__$1 = (state_12114[(2)]);var inst_12080 = (inst_12079__$1 == null);var state_12114__$1 = (function (){var statearr_12119 = state_12114;(statearr_12119[(7)] = inst_12079__$1);
return statearr_12119;
})();if(cljs.core.truth_(inst_12080))
{var statearr_12120_12185 = state_12114__$1;(statearr_12120_12185[(1)] = (5));
} else
{var statearr_12121_12186 = state_12114__$1;(statearr_12121_12186[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12115 === (15)))
{var inst_12092 = (state_12114[(8)]);var state_12114__$1 = state_12114;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12114__$1,(18),to,inst_12092);
} else
{if((state_val_12115 === (21)))
{var inst_12105 = (state_12114[(2)]);var state_12114__$1 = state_12114;var statearr_12122_12187 = state_12114__$1;(statearr_12122_12187[(2)] = inst_12105);
(statearr_12122_12187[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12115 === (13)))
{var inst_12107 = (state_12114[(2)]);var state_12114__$1 = (function (){var statearr_12123 = state_12114;(statearr_12123[(9)] = inst_12107);
return statearr_12123;
})();var statearr_12124_12188 = state_12114__$1;(statearr_12124_12188[(2)] = null);
(statearr_12124_12188[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12115 === (6)))
{var inst_12079 = (state_12114[(7)]);var state_12114__$1 = state_12114;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12114__$1,(11),inst_12079);
} else
{if((state_val_12115 === (17)))
{var inst_12100 = (state_12114[(2)]);var state_12114__$1 = state_12114;if(cljs.core.truth_(inst_12100))
{var statearr_12125_12189 = state_12114__$1;(statearr_12125_12189[(1)] = (19));
} else
{var statearr_12126_12190 = state_12114__$1;(statearr_12126_12190[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12115 === (3)))
{var inst_12112 = (state_12114[(2)]);var state_12114__$1 = state_12114;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12114__$1,inst_12112);
} else
{if((state_val_12115 === (12)))
{var inst_12089 = (state_12114[(10)]);var state_12114__$1 = state_12114;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12114__$1,(14),inst_12089);
} else
{if((state_val_12115 === (2)))
{var state_12114__$1 = state_12114;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12114__$1,(4),results);
} else
{if((state_val_12115 === (19)))
{var state_12114__$1 = state_12114;var statearr_12127_12191 = state_12114__$1;(statearr_12127_12191[(2)] = null);
(statearr_12127_12191[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12115 === (11)))
{var inst_12089 = (state_12114[(2)]);var state_12114__$1 = (function (){var statearr_12128 = state_12114;(statearr_12128[(10)] = inst_12089);
return statearr_12128;
})();var statearr_12129_12192 = state_12114__$1;(statearr_12129_12192[(2)] = null);
(statearr_12129_12192[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12115 === (9)))
{var state_12114__$1 = state_12114;var statearr_12130_12193 = state_12114__$1;(statearr_12130_12193[(2)] = null);
(statearr_12130_12193[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12115 === (5)))
{var state_12114__$1 = state_12114;if(cljs.core.truth_(close_QMARK_))
{var statearr_12131_12194 = state_12114__$1;(statearr_12131_12194[(1)] = (8));
} else
{var statearr_12132_12195 = state_12114__$1;(statearr_12132_12195[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12115 === (14)))
{var inst_12094 = (state_12114[(11)]);var inst_12092 = (state_12114[(8)]);var inst_12092__$1 = (state_12114[(2)]);var inst_12093 = (inst_12092__$1 == null);var inst_12094__$1 = cljs.core.not.call(null,inst_12093);var state_12114__$1 = (function (){var statearr_12133 = state_12114;(statearr_12133[(11)] = inst_12094__$1);
(statearr_12133[(8)] = inst_12092__$1);
return statearr_12133;
})();if(inst_12094__$1)
{var statearr_12134_12196 = state_12114__$1;(statearr_12134_12196[(1)] = (15));
} else
{var statearr_12135_12197 = state_12114__$1;(statearr_12135_12197[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12115 === (16)))
{var inst_12094 = (state_12114[(11)]);var state_12114__$1 = state_12114;var statearr_12136_12198 = state_12114__$1;(statearr_12136_12198[(2)] = inst_12094);
(statearr_12136_12198[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12115 === (10)))
{var inst_12086 = (state_12114[(2)]);var state_12114__$1 = state_12114;var statearr_12137_12199 = state_12114__$1;(statearr_12137_12199[(2)] = inst_12086);
(statearr_12137_12199[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12115 === (18)))
{var inst_12097 = (state_12114[(2)]);var state_12114__$1 = state_12114;var statearr_12138_12200 = state_12114__$1;(statearr_12138_12200[(2)] = inst_12097);
(statearr_12138_12200[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12115 === (8)))
{var inst_12083 = cljs.core.async.close_BANG_.call(null,to);var state_12114__$1 = state_12114;var statearr_12139_12201 = state_12114__$1;(statearr_12139_12201[(2)] = inst_12083);
(statearr_12139_12201[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6744__auto__,jobs,results,process,async))
;return ((function (switch__6688__auto__,c__6744__auto__,jobs,results,process,async){
return (function() {
var state_machine__6689__auto__ = null;
var state_machine__6689__auto____0 = (function (){var statearr_12143 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12143[(0)] = state_machine__6689__auto__);
(statearr_12143[(1)] = (1));
return statearr_12143;
});
var state_machine__6689__auto____1 = (function (state_12114){while(true){
var ret_value__6690__auto__ = (function (){try{while(true){
var result__6691__auto__ = switch__6688__auto__.call(null,state_12114);if(cljs.core.keyword_identical_QMARK_.call(null,result__6691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6691__auto__;
}
break;
}
}catch (e12144){if((e12144 instanceof Object))
{var ex__6692__auto__ = e12144;var statearr_12145_12202 = state_12114;(statearr_12145_12202[(5)] = ex__6692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12114);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12144;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12203 = state_12114;
state_12114 = G__12203;
continue;
}
} else
{return ret_value__6690__auto__;
}
break;
}
});
state_machine__6689__auto__ = function(state_12114){
switch(arguments.length){
case 0:
return state_machine__6689__auto____0.call(this);
case 1:
return state_machine__6689__auto____1.call(this,state_12114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6689__auto____0;
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6689__auto____1;
return state_machine__6689__auto__;
})()
;})(switch__6688__auto__,c__6744__auto__,jobs,results,process,async))
})();var state__6746__auto__ = (function (){var statearr_12146 = f__6745__auto__.call(null);(statearr_12146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6744__auto__);
return statearr_12146;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6746__auto__);
});})(c__6744__auto__,jobs,results,process,async))
);
return c__6744__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6744__auto___12304 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6744__auto___12304,tc,fc){
return (function (){var f__6745__auto__ = (function (){var switch__6688__auto__ = ((function (c__6744__auto___12304,tc,fc){
return (function (state_12279){var state_val_12280 = (state_12279[(1)]);if((state_val_12280 === (7)))
{var inst_12275 = (state_12279[(2)]);var state_12279__$1 = state_12279;var statearr_12281_12305 = state_12279__$1;(statearr_12281_12305[(2)] = inst_12275);
(statearr_12281_12305[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12280 === (1)))
{var state_12279__$1 = state_12279;var statearr_12282_12306 = state_12279__$1;(statearr_12282_12306[(2)] = null);
(statearr_12282_12306[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12280 === (4)))
{var inst_12256 = (state_12279[(7)]);var inst_12256__$1 = (state_12279[(2)]);var inst_12257 = (inst_12256__$1 == null);var state_12279__$1 = (function (){var statearr_12283 = state_12279;(statearr_12283[(7)] = inst_12256__$1);
return statearr_12283;
})();if(cljs.core.truth_(inst_12257))
{var statearr_12284_12307 = state_12279__$1;(statearr_12284_12307[(1)] = (5));
} else
{var statearr_12285_12308 = state_12279__$1;(statearr_12285_12308[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12280 === (13)))
{var state_12279__$1 = state_12279;var statearr_12286_12309 = state_12279__$1;(statearr_12286_12309[(2)] = null);
(statearr_12286_12309[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12280 === (6)))
{var inst_12256 = (state_12279[(7)]);var inst_12262 = p.call(null,inst_12256);var state_12279__$1 = state_12279;if(cljs.core.truth_(inst_12262))
{var statearr_12287_12310 = state_12279__$1;(statearr_12287_12310[(1)] = (9));
} else
{var statearr_12288_12311 = state_12279__$1;(statearr_12288_12311[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12280 === (3)))
{var inst_12277 = (state_12279[(2)]);var state_12279__$1 = state_12279;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12279__$1,inst_12277);
} else
{if((state_val_12280 === (12)))
{var state_12279__$1 = state_12279;var statearr_12289_12312 = state_12279__$1;(statearr_12289_12312[(2)] = null);
(statearr_12289_12312[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12280 === (2)))
{var state_12279__$1 = state_12279;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12279__$1,(4),ch);
} else
{if((state_val_12280 === (11)))
{var inst_12256 = (state_12279[(7)]);var inst_12266 = (state_12279[(2)]);var state_12279__$1 = state_12279;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12279__$1,(8),inst_12266,inst_12256);
} else
{if((state_val_12280 === (9)))
{var state_12279__$1 = state_12279;var statearr_12290_12313 = state_12279__$1;(statearr_12290_12313[(2)] = tc);
(statearr_12290_12313[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12280 === (5)))
{var inst_12259 = cljs.core.async.close_BANG_.call(null,tc);var inst_12260 = cljs.core.async.close_BANG_.call(null,fc);var state_12279__$1 = (function (){var statearr_12291 = state_12279;(statearr_12291[(8)] = inst_12259);
return statearr_12291;
})();var statearr_12292_12314 = state_12279__$1;(statearr_12292_12314[(2)] = inst_12260);
(statearr_12292_12314[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12280 === (14)))
{var inst_12273 = (state_12279[(2)]);var state_12279__$1 = state_12279;var statearr_12293_12315 = state_12279__$1;(statearr_12293_12315[(2)] = inst_12273);
(statearr_12293_12315[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12280 === (10)))
{var state_12279__$1 = state_12279;var statearr_12294_12316 = state_12279__$1;(statearr_12294_12316[(2)] = fc);
(statearr_12294_12316[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12280 === (8)))
{var inst_12268 = (state_12279[(2)]);var state_12279__$1 = state_12279;if(cljs.core.truth_(inst_12268))
{var statearr_12295_12317 = state_12279__$1;(statearr_12295_12317[(1)] = (12));
} else
{var statearr_12296_12318 = state_12279__$1;(statearr_12296_12318[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6744__auto___12304,tc,fc))
;return ((function (switch__6688__auto__,c__6744__auto___12304,tc,fc){
return (function() {
var state_machine__6689__auto__ = null;
var state_machine__6689__auto____0 = (function (){var statearr_12300 = [null,null,null,null,null,null,null,null,null];(statearr_12300[(0)] = state_machine__6689__auto__);
(statearr_12300[(1)] = (1));
return statearr_12300;
});
var state_machine__6689__auto____1 = (function (state_12279){while(true){
var ret_value__6690__auto__ = (function (){try{while(true){
var result__6691__auto__ = switch__6688__auto__.call(null,state_12279);if(cljs.core.keyword_identical_QMARK_.call(null,result__6691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6691__auto__;
}
break;
}
}catch (e12301){if((e12301 instanceof Object))
{var ex__6692__auto__ = e12301;var statearr_12302_12319 = state_12279;(statearr_12302_12319[(5)] = ex__6692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12279);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12301;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12320 = state_12279;
state_12279 = G__12320;
continue;
}
} else
{return ret_value__6690__auto__;
}
break;
}
});
state_machine__6689__auto__ = function(state_12279){
switch(arguments.length){
case 0:
return state_machine__6689__auto____0.call(this);
case 1:
return state_machine__6689__auto____1.call(this,state_12279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6689__auto____0;
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6689__auto____1;
return state_machine__6689__auto__;
})()
;})(switch__6688__auto__,c__6744__auto___12304,tc,fc))
})();var state__6746__auto__ = (function (){var statearr_12303 = f__6745__auto__.call(null);(statearr_12303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6744__auto___12304);
return statearr_12303;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6746__auto__);
});})(c__6744__auto___12304,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6744__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6744__auto__){
return (function (){var f__6745__auto__ = (function (){var switch__6688__auto__ = ((function (c__6744__auto__){
return (function (state_12367){var state_val_12368 = (state_12367[(1)]);if((state_val_12368 === (7)))
{var inst_12363 = (state_12367[(2)]);var state_12367__$1 = state_12367;var statearr_12369_12385 = state_12367__$1;(statearr_12369_12385[(2)] = inst_12363);
(statearr_12369_12385[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12368 === (6)))
{var inst_12356 = (state_12367[(7)]);var inst_12353 = (state_12367[(8)]);var inst_12360 = f.call(null,inst_12353,inst_12356);var inst_12353__$1 = inst_12360;var state_12367__$1 = (function (){var statearr_12370 = state_12367;(statearr_12370[(8)] = inst_12353__$1);
return statearr_12370;
})();var statearr_12371_12386 = state_12367__$1;(statearr_12371_12386[(2)] = null);
(statearr_12371_12386[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12368 === (5)))
{var inst_12353 = (state_12367[(8)]);var state_12367__$1 = state_12367;var statearr_12372_12387 = state_12367__$1;(statearr_12372_12387[(2)] = inst_12353);
(statearr_12372_12387[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12368 === (4)))
{var inst_12356 = (state_12367[(7)]);var inst_12356__$1 = (state_12367[(2)]);var inst_12357 = (inst_12356__$1 == null);var state_12367__$1 = (function (){var statearr_12373 = state_12367;(statearr_12373[(7)] = inst_12356__$1);
return statearr_12373;
})();if(cljs.core.truth_(inst_12357))
{var statearr_12374_12388 = state_12367__$1;(statearr_12374_12388[(1)] = (5));
} else
{var statearr_12375_12389 = state_12367__$1;(statearr_12375_12389[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12368 === (3)))
{var inst_12365 = (state_12367[(2)]);var state_12367__$1 = state_12367;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12367__$1,inst_12365);
} else
{if((state_val_12368 === (2)))
{var state_12367__$1 = state_12367;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12367__$1,(4),ch);
} else
{if((state_val_12368 === (1)))
{var inst_12353 = init;var state_12367__$1 = (function (){var statearr_12376 = state_12367;(statearr_12376[(8)] = inst_12353);
return statearr_12376;
})();var statearr_12377_12390 = state_12367__$1;(statearr_12377_12390[(2)] = null);
(statearr_12377_12390[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6744__auto__))
;return ((function (switch__6688__auto__,c__6744__auto__){
return (function() {
var state_machine__6689__auto__ = null;
var state_machine__6689__auto____0 = (function (){var statearr_12381 = [null,null,null,null,null,null,null,null,null];(statearr_12381[(0)] = state_machine__6689__auto__);
(statearr_12381[(1)] = (1));
return statearr_12381;
});
var state_machine__6689__auto____1 = (function (state_12367){while(true){
var ret_value__6690__auto__ = (function (){try{while(true){
var result__6691__auto__ = switch__6688__auto__.call(null,state_12367);if(cljs.core.keyword_identical_QMARK_.call(null,result__6691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6691__auto__;
}
break;
}
}catch (e12382){if((e12382 instanceof Object))
{var ex__6692__auto__ = e12382;var statearr_12383_12391 = state_12367;(statearr_12383_12391[(5)] = ex__6692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12367);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12382;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12392 = state_12367;
state_12367 = G__12392;
continue;
}
} else
{return ret_value__6690__auto__;
}
break;
}
});
state_machine__6689__auto__ = function(state_12367){
switch(arguments.length){
case 0:
return state_machine__6689__auto____0.call(this);
case 1:
return state_machine__6689__auto____1.call(this,state_12367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6689__auto____0;
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6689__auto____1;
return state_machine__6689__auto__;
})()
;})(switch__6688__auto__,c__6744__auto__))
})();var state__6746__auto__ = (function (){var statearr_12384 = f__6745__auto__.call(null);(statearr_12384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6744__auto__);
return statearr_12384;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6746__auto__);
});})(c__6744__auto__))
);
return c__6744__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6744__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6744__auto__){
return (function (){var f__6745__auto__ = (function (){var switch__6688__auto__ = ((function (c__6744__auto__){
return (function (state_12466){var state_val_12467 = (state_12466[(1)]);if((state_val_12467 === (7)))
{var inst_12448 = (state_12466[(2)]);var state_12466__$1 = state_12466;var statearr_12468_12491 = state_12466__$1;(statearr_12468_12491[(2)] = inst_12448);
(statearr_12468_12491[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12467 === (1)))
{var inst_12442 = cljs.core.seq.call(null,coll);var inst_12443 = inst_12442;var state_12466__$1 = (function (){var statearr_12469 = state_12466;(statearr_12469[(7)] = inst_12443);
return statearr_12469;
})();var statearr_12470_12492 = state_12466__$1;(statearr_12470_12492[(2)] = null);
(statearr_12470_12492[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12467 === (4)))
{var inst_12443 = (state_12466[(7)]);var inst_12446 = cljs.core.first.call(null,inst_12443);var state_12466__$1 = state_12466;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12466__$1,(7),ch,inst_12446);
} else
{if((state_val_12467 === (13)))
{var inst_12460 = (state_12466[(2)]);var state_12466__$1 = state_12466;var statearr_12471_12493 = state_12466__$1;(statearr_12471_12493[(2)] = inst_12460);
(statearr_12471_12493[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12467 === (6)))
{var inst_12451 = (state_12466[(2)]);var state_12466__$1 = state_12466;if(cljs.core.truth_(inst_12451))
{var statearr_12472_12494 = state_12466__$1;(statearr_12472_12494[(1)] = (8));
} else
{var statearr_12473_12495 = state_12466__$1;(statearr_12473_12495[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12467 === (3)))
{var inst_12464 = (state_12466[(2)]);var state_12466__$1 = state_12466;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12466__$1,inst_12464);
} else
{if((state_val_12467 === (12)))
{var state_12466__$1 = state_12466;var statearr_12474_12496 = state_12466__$1;(statearr_12474_12496[(2)] = null);
(statearr_12474_12496[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12467 === (2)))
{var inst_12443 = (state_12466[(7)]);var state_12466__$1 = state_12466;if(cljs.core.truth_(inst_12443))
{var statearr_12475_12497 = state_12466__$1;(statearr_12475_12497[(1)] = (4));
} else
{var statearr_12476_12498 = state_12466__$1;(statearr_12476_12498[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12467 === (11)))
{var inst_12457 = cljs.core.async.close_BANG_.call(null,ch);var state_12466__$1 = state_12466;var statearr_12477_12499 = state_12466__$1;(statearr_12477_12499[(2)] = inst_12457);
(statearr_12477_12499[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12467 === (9)))
{var state_12466__$1 = state_12466;if(cljs.core.truth_(close_QMARK_))
{var statearr_12478_12500 = state_12466__$1;(statearr_12478_12500[(1)] = (11));
} else
{var statearr_12479_12501 = state_12466__$1;(statearr_12479_12501[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12467 === (5)))
{var inst_12443 = (state_12466[(7)]);var state_12466__$1 = state_12466;var statearr_12480_12502 = state_12466__$1;(statearr_12480_12502[(2)] = inst_12443);
(statearr_12480_12502[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12467 === (10)))
{var inst_12462 = (state_12466[(2)]);var state_12466__$1 = state_12466;var statearr_12481_12503 = state_12466__$1;(statearr_12481_12503[(2)] = inst_12462);
(statearr_12481_12503[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12467 === (8)))
{var inst_12443 = (state_12466[(7)]);var inst_12453 = cljs.core.next.call(null,inst_12443);var inst_12443__$1 = inst_12453;var state_12466__$1 = (function (){var statearr_12482 = state_12466;(statearr_12482[(7)] = inst_12443__$1);
return statearr_12482;
})();var statearr_12483_12504 = state_12466__$1;(statearr_12483_12504[(2)] = null);
(statearr_12483_12504[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6744__auto__))
;return ((function (switch__6688__auto__,c__6744__auto__){
return (function() {
var state_machine__6689__auto__ = null;
var state_machine__6689__auto____0 = (function (){var statearr_12487 = [null,null,null,null,null,null,null,null];(statearr_12487[(0)] = state_machine__6689__auto__);
(statearr_12487[(1)] = (1));
return statearr_12487;
});
var state_machine__6689__auto____1 = (function (state_12466){while(true){
var ret_value__6690__auto__ = (function (){try{while(true){
var result__6691__auto__ = switch__6688__auto__.call(null,state_12466);if(cljs.core.keyword_identical_QMARK_.call(null,result__6691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6691__auto__;
}
break;
}
}catch (e12488){if((e12488 instanceof Object))
{var ex__6692__auto__ = e12488;var statearr_12489_12505 = state_12466;(statearr_12489_12505[(5)] = ex__6692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12466);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12488;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12506 = state_12466;
state_12466 = G__12506;
continue;
}
} else
{return ret_value__6690__auto__;
}
break;
}
});
state_machine__6689__auto__ = function(state_12466){
switch(arguments.length){
case 0:
return state_machine__6689__auto____0.call(this);
case 1:
return state_machine__6689__auto____1.call(this,state_12466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6689__auto____0;
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6689__auto____1;
return state_machine__6689__auto__;
})()
;})(switch__6688__auto__,c__6744__auto__))
})();var state__6746__auto__ = (function (){var statearr_12490 = f__6745__auto__.call(null);(statearr_12490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6744__auto__);
return statearr_12490;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6746__auto__);
});})(c__6744__auto__))
);
return c__6744__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj12508 = {};return obj12508;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3628__auto__ = _;if(and__3628__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4277__auto__ = (((_ == null))?null:_);return (function (){var or__3640__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12510 = {};return obj12510;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12732 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12732 = (function (cs,ch,mult,meta12733){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12733 = meta12733;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12732.cljs$lang$type = true;
cljs.core.async.t12732.cljs$lang$ctorStr = "cljs.core.async/t12732";
cljs.core.async.t12732.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12732");
});})(cs))
;
cljs.core.async.t12732.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12732.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12732.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12732.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12732.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12732.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12732.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12734){var self__ = this;
var _12734__$1 = this;return self__.meta12733;
});})(cs))
;
cljs.core.async.t12732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12734,meta12733__$1){var self__ = this;
var _12734__$1 = this;return (new cljs.core.async.t12732(self__.cs,self__.ch,self__.mult,meta12733__$1));
});})(cs))
;
cljs.core.async.__GT_t12732 = ((function (cs){
return (function __GT_t12732(cs__$1,ch__$1,mult__$1,meta12733){return (new cljs.core.async.t12732(cs__$1,ch__$1,mult__$1,meta12733));
});})(cs))
;
}
return (new cljs.core.async.t12732(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6744__auto___12953 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6744__auto___12953,cs,m,dchan,dctr,done){
return (function (){var f__6745__auto__ = (function (){var switch__6688__auto__ = ((function (c__6744__auto___12953,cs,m,dchan,dctr,done){
return (function (state_12865){var state_val_12866 = (state_12865[(1)]);if((state_val_12866 === (7)))
{var inst_12861 = (state_12865[(2)]);var state_12865__$1 = state_12865;var statearr_12867_12954 = state_12865__$1;(statearr_12867_12954[(2)] = inst_12861);
(statearr_12867_12954[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (20)))
{var inst_12766 = (state_12865[(7)]);var inst_12776 = cljs.core.first.call(null,inst_12766);var inst_12777 = cljs.core.nth.call(null,inst_12776,(0),null);var inst_12778 = cljs.core.nth.call(null,inst_12776,(1),null);var state_12865__$1 = (function (){var statearr_12868 = state_12865;(statearr_12868[(8)] = inst_12777);
return statearr_12868;
})();if(cljs.core.truth_(inst_12778))
{var statearr_12869_12955 = state_12865__$1;(statearr_12869_12955[(1)] = (22));
} else
{var statearr_12870_12956 = state_12865__$1;(statearr_12870_12956[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (27)))
{var inst_12737 = (state_12865[(9)]);var inst_12813 = (state_12865[(10)]);var inst_12808 = (state_12865[(11)]);var inst_12806 = (state_12865[(12)]);var inst_12813__$1 = cljs.core._nth.call(null,inst_12806,inst_12808);var inst_12814 = cljs.core.async.put_BANG_.call(null,inst_12813__$1,inst_12737,done);var state_12865__$1 = (function (){var statearr_12871 = state_12865;(statearr_12871[(10)] = inst_12813__$1);
return statearr_12871;
})();if(cljs.core.truth_(inst_12814))
{var statearr_12872_12957 = state_12865__$1;(statearr_12872_12957[(1)] = (30));
} else
{var statearr_12873_12958 = state_12865__$1;(statearr_12873_12958[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (1)))
{var state_12865__$1 = state_12865;var statearr_12874_12959 = state_12865__$1;(statearr_12874_12959[(2)] = null);
(statearr_12874_12959[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (24)))
{var inst_12766 = (state_12865[(7)]);var inst_12783 = (state_12865[(2)]);var inst_12784 = cljs.core.next.call(null,inst_12766);var inst_12746 = inst_12784;var inst_12747 = null;var inst_12748 = (0);var inst_12749 = (0);var state_12865__$1 = (function (){var statearr_12875 = state_12865;(statearr_12875[(13)] = inst_12783);
(statearr_12875[(14)] = inst_12746);
(statearr_12875[(15)] = inst_12748);
(statearr_12875[(16)] = inst_12749);
(statearr_12875[(17)] = inst_12747);
return statearr_12875;
})();var statearr_12876_12960 = state_12865__$1;(statearr_12876_12960[(2)] = null);
(statearr_12876_12960[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (39)))
{var state_12865__$1 = state_12865;var statearr_12880_12961 = state_12865__$1;(statearr_12880_12961[(2)] = null);
(statearr_12880_12961[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (4)))
{var inst_12737 = (state_12865[(9)]);var inst_12737__$1 = (state_12865[(2)]);var inst_12738 = (inst_12737__$1 == null);var state_12865__$1 = (function (){var statearr_12881 = state_12865;(statearr_12881[(9)] = inst_12737__$1);
return statearr_12881;
})();if(cljs.core.truth_(inst_12738))
{var statearr_12882_12962 = state_12865__$1;(statearr_12882_12962[(1)] = (5));
} else
{var statearr_12883_12963 = state_12865__$1;(statearr_12883_12963[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (15)))
{var inst_12746 = (state_12865[(14)]);var inst_12748 = (state_12865[(15)]);var inst_12749 = (state_12865[(16)]);var inst_12747 = (state_12865[(17)]);var inst_12762 = (state_12865[(2)]);var inst_12763 = (inst_12749 + (1));var tmp12877 = inst_12746;var tmp12878 = inst_12748;var tmp12879 = inst_12747;var inst_12746__$1 = tmp12877;var inst_12747__$1 = tmp12879;var inst_12748__$1 = tmp12878;var inst_12749__$1 = inst_12763;var state_12865__$1 = (function (){var statearr_12884 = state_12865;(statearr_12884[(18)] = inst_12762);
(statearr_12884[(14)] = inst_12746__$1);
(statearr_12884[(15)] = inst_12748__$1);
(statearr_12884[(16)] = inst_12749__$1);
(statearr_12884[(17)] = inst_12747__$1);
return statearr_12884;
})();var statearr_12885_12964 = state_12865__$1;(statearr_12885_12964[(2)] = null);
(statearr_12885_12964[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (21)))
{var inst_12787 = (state_12865[(2)]);var state_12865__$1 = state_12865;var statearr_12889_12965 = state_12865__$1;(statearr_12889_12965[(2)] = inst_12787);
(statearr_12889_12965[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (31)))
{var inst_12813 = (state_12865[(10)]);var inst_12817 = done.call(null,null);var inst_12818 = cljs.core.async.untap_STAR_.call(null,m,inst_12813);var state_12865__$1 = (function (){var statearr_12890 = state_12865;(statearr_12890[(19)] = inst_12817);
return statearr_12890;
})();var statearr_12891_12966 = state_12865__$1;(statearr_12891_12966[(2)] = inst_12818);
(statearr_12891_12966[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (32)))
{var inst_12805 = (state_12865[(20)]);var inst_12808 = (state_12865[(11)]);var inst_12806 = (state_12865[(12)]);var inst_12807 = (state_12865[(21)]);var inst_12820 = (state_12865[(2)]);var inst_12821 = (inst_12808 + (1));var tmp12886 = inst_12805;var tmp12887 = inst_12806;var tmp12888 = inst_12807;var inst_12805__$1 = tmp12886;var inst_12806__$1 = tmp12887;var inst_12807__$1 = tmp12888;var inst_12808__$1 = inst_12821;var state_12865__$1 = (function (){var statearr_12892 = state_12865;(statearr_12892[(20)] = inst_12805__$1);
(statearr_12892[(22)] = inst_12820);
(statearr_12892[(11)] = inst_12808__$1);
(statearr_12892[(12)] = inst_12806__$1);
(statearr_12892[(21)] = inst_12807__$1);
return statearr_12892;
})();var statearr_12893_12967 = state_12865__$1;(statearr_12893_12967[(2)] = null);
(statearr_12893_12967[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (40)))
{var inst_12833 = (state_12865[(23)]);var inst_12837 = done.call(null,null);var inst_12838 = cljs.core.async.untap_STAR_.call(null,m,inst_12833);var state_12865__$1 = (function (){var statearr_12894 = state_12865;(statearr_12894[(24)] = inst_12837);
return statearr_12894;
})();var statearr_12895_12968 = state_12865__$1;(statearr_12895_12968[(2)] = inst_12838);
(statearr_12895_12968[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (33)))
{var inst_12824 = (state_12865[(25)]);var inst_12826 = cljs.core.chunked_seq_QMARK_.call(null,inst_12824);var state_12865__$1 = state_12865;if(inst_12826)
{var statearr_12896_12969 = state_12865__$1;(statearr_12896_12969[(1)] = (36));
} else
{var statearr_12897_12970 = state_12865__$1;(statearr_12897_12970[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (13)))
{var inst_12756 = (state_12865[(26)]);var inst_12759 = cljs.core.async.close_BANG_.call(null,inst_12756);var state_12865__$1 = state_12865;var statearr_12898_12971 = state_12865__$1;(statearr_12898_12971[(2)] = inst_12759);
(statearr_12898_12971[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (22)))
{var inst_12777 = (state_12865[(8)]);var inst_12780 = cljs.core.async.close_BANG_.call(null,inst_12777);var state_12865__$1 = state_12865;var statearr_12899_12972 = state_12865__$1;(statearr_12899_12972[(2)] = inst_12780);
(statearr_12899_12972[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (36)))
{var inst_12824 = (state_12865[(25)]);var inst_12828 = cljs.core.chunk_first.call(null,inst_12824);var inst_12829 = cljs.core.chunk_rest.call(null,inst_12824);var inst_12830 = cljs.core.count.call(null,inst_12828);var inst_12805 = inst_12829;var inst_12806 = inst_12828;var inst_12807 = inst_12830;var inst_12808 = (0);var state_12865__$1 = (function (){var statearr_12900 = state_12865;(statearr_12900[(20)] = inst_12805);
(statearr_12900[(11)] = inst_12808);
(statearr_12900[(12)] = inst_12806);
(statearr_12900[(21)] = inst_12807);
return statearr_12900;
})();var statearr_12901_12973 = state_12865__$1;(statearr_12901_12973[(2)] = null);
(statearr_12901_12973[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (41)))
{var inst_12824 = (state_12865[(25)]);var inst_12840 = (state_12865[(2)]);var inst_12841 = cljs.core.next.call(null,inst_12824);var inst_12805 = inst_12841;var inst_12806 = null;var inst_12807 = (0);var inst_12808 = (0);var state_12865__$1 = (function (){var statearr_12902 = state_12865;(statearr_12902[(20)] = inst_12805);
(statearr_12902[(11)] = inst_12808);
(statearr_12902[(12)] = inst_12806);
(statearr_12902[(21)] = inst_12807);
(statearr_12902[(27)] = inst_12840);
return statearr_12902;
})();var statearr_12903_12974 = state_12865__$1;(statearr_12903_12974[(2)] = null);
(statearr_12903_12974[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (43)))
{var state_12865__$1 = state_12865;var statearr_12904_12975 = state_12865__$1;(statearr_12904_12975[(2)] = null);
(statearr_12904_12975[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (29)))
{var inst_12849 = (state_12865[(2)]);var state_12865__$1 = state_12865;var statearr_12905_12976 = state_12865__$1;(statearr_12905_12976[(2)] = inst_12849);
(statearr_12905_12976[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (44)))
{var inst_12858 = (state_12865[(2)]);var state_12865__$1 = (function (){var statearr_12906 = state_12865;(statearr_12906[(28)] = inst_12858);
return statearr_12906;
})();var statearr_12907_12977 = state_12865__$1;(statearr_12907_12977[(2)] = null);
(statearr_12907_12977[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (6)))
{var inst_12797 = (state_12865[(29)]);var inst_12796 = cljs.core.deref.call(null,cs);var inst_12797__$1 = cljs.core.keys.call(null,inst_12796);var inst_12798 = cljs.core.count.call(null,inst_12797__$1);var inst_12799 = cljs.core.reset_BANG_.call(null,dctr,inst_12798);var inst_12804 = cljs.core.seq.call(null,inst_12797__$1);var inst_12805 = inst_12804;var inst_12806 = null;var inst_12807 = (0);var inst_12808 = (0);var state_12865__$1 = (function (){var statearr_12908 = state_12865;(statearr_12908[(20)] = inst_12805);
(statearr_12908[(30)] = inst_12799);
(statearr_12908[(29)] = inst_12797__$1);
(statearr_12908[(11)] = inst_12808);
(statearr_12908[(12)] = inst_12806);
(statearr_12908[(21)] = inst_12807);
return statearr_12908;
})();var statearr_12909_12978 = state_12865__$1;(statearr_12909_12978[(2)] = null);
(statearr_12909_12978[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (28)))
{var inst_12805 = (state_12865[(20)]);var inst_12824 = (state_12865[(25)]);var inst_12824__$1 = cljs.core.seq.call(null,inst_12805);var state_12865__$1 = (function (){var statearr_12910 = state_12865;(statearr_12910[(25)] = inst_12824__$1);
return statearr_12910;
})();if(inst_12824__$1)
{var statearr_12911_12979 = state_12865__$1;(statearr_12911_12979[(1)] = (33));
} else
{var statearr_12912_12980 = state_12865__$1;(statearr_12912_12980[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (25)))
{var inst_12808 = (state_12865[(11)]);var inst_12807 = (state_12865[(21)]);var inst_12810 = (inst_12808 < inst_12807);var inst_12811 = inst_12810;var state_12865__$1 = state_12865;if(cljs.core.truth_(inst_12811))
{var statearr_12913_12981 = state_12865__$1;(statearr_12913_12981[(1)] = (27));
} else
{var statearr_12914_12982 = state_12865__$1;(statearr_12914_12982[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (34)))
{var state_12865__$1 = state_12865;var statearr_12915_12983 = state_12865__$1;(statearr_12915_12983[(2)] = null);
(statearr_12915_12983[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (17)))
{var state_12865__$1 = state_12865;var statearr_12916_12984 = state_12865__$1;(statearr_12916_12984[(2)] = null);
(statearr_12916_12984[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (3)))
{var inst_12863 = (state_12865[(2)]);var state_12865__$1 = state_12865;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12865__$1,inst_12863);
} else
{if((state_val_12866 === (12)))
{var inst_12792 = (state_12865[(2)]);var state_12865__$1 = state_12865;var statearr_12917_12985 = state_12865__$1;(statearr_12917_12985[(2)] = inst_12792);
(statearr_12917_12985[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (2)))
{var state_12865__$1 = state_12865;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12865__$1,(4),ch);
} else
{if((state_val_12866 === (23)))
{var state_12865__$1 = state_12865;var statearr_12918_12986 = state_12865__$1;(statearr_12918_12986[(2)] = null);
(statearr_12918_12986[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (35)))
{var inst_12847 = (state_12865[(2)]);var state_12865__$1 = state_12865;var statearr_12919_12987 = state_12865__$1;(statearr_12919_12987[(2)] = inst_12847);
(statearr_12919_12987[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (19)))
{var inst_12766 = (state_12865[(7)]);var inst_12770 = cljs.core.chunk_first.call(null,inst_12766);var inst_12771 = cljs.core.chunk_rest.call(null,inst_12766);var inst_12772 = cljs.core.count.call(null,inst_12770);var inst_12746 = inst_12771;var inst_12747 = inst_12770;var inst_12748 = inst_12772;var inst_12749 = (0);var state_12865__$1 = (function (){var statearr_12920 = state_12865;(statearr_12920[(14)] = inst_12746);
(statearr_12920[(15)] = inst_12748);
(statearr_12920[(16)] = inst_12749);
(statearr_12920[(17)] = inst_12747);
return statearr_12920;
})();var statearr_12921_12988 = state_12865__$1;(statearr_12921_12988[(2)] = null);
(statearr_12921_12988[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (11)))
{var inst_12766 = (state_12865[(7)]);var inst_12746 = (state_12865[(14)]);var inst_12766__$1 = cljs.core.seq.call(null,inst_12746);var state_12865__$1 = (function (){var statearr_12922 = state_12865;(statearr_12922[(7)] = inst_12766__$1);
return statearr_12922;
})();if(inst_12766__$1)
{var statearr_12923_12989 = state_12865__$1;(statearr_12923_12989[(1)] = (16));
} else
{var statearr_12924_12990 = state_12865__$1;(statearr_12924_12990[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (9)))
{var inst_12794 = (state_12865[(2)]);var state_12865__$1 = state_12865;var statearr_12925_12991 = state_12865__$1;(statearr_12925_12991[(2)] = inst_12794);
(statearr_12925_12991[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (5)))
{var inst_12744 = cljs.core.deref.call(null,cs);var inst_12745 = cljs.core.seq.call(null,inst_12744);var inst_12746 = inst_12745;var inst_12747 = null;var inst_12748 = (0);var inst_12749 = (0);var state_12865__$1 = (function (){var statearr_12926 = state_12865;(statearr_12926[(14)] = inst_12746);
(statearr_12926[(15)] = inst_12748);
(statearr_12926[(16)] = inst_12749);
(statearr_12926[(17)] = inst_12747);
return statearr_12926;
})();var statearr_12927_12992 = state_12865__$1;(statearr_12927_12992[(2)] = null);
(statearr_12927_12992[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (14)))
{var state_12865__$1 = state_12865;var statearr_12928_12993 = state_12865__$1;(statearr_12928_12993[(2)] = null);
(statearr_12928_12993[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (45)))
{var inst_12855 = (state_12865[(2)]);var state_12865__$1 = state_12865;var statearr_12929_12994 = state_12865__$1;(statearr_12929_12994[(2)] = inst_12855);
(statearr_12929_12994[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (26)))
{var inst_12797 = (state_12865[(29)]);var inst_12851 = (state_12865[(2)]);var inst_12852 = cljs.core.seq.call(null,inst_12797);var state_12865__$1 = (function (){var statearr_12930 = state_12865;(statearr_12930[(31)] = inst_12851);
return statearr_12930;
})();if(inst_12852)
{var statearr_12931_12995 = state_12865__$1;(statearr_12931_12995[(1)] = (42));
} else
{var statearr_12932_12996 = state_12865__$1;(statearr_12932_12996[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (16)))
{var inst_12766 = (state_12865[(7)]);var inst_12768 = cljs.core.chunked_seq_QMARK_.call(null,inst_12766);var state_12865__$1 = state_12865;if(inst_12768)
{var statearr_12933_12997 = state_12865__$1;(statearr_12933_12997[(1)] = (19));
} else
{var statearr_12934_12998 = state_12865__$1;(statearr_12934_12998[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (38)))
{var inst_12844 = (state_12865[(2)]);var state_12865__$1 = state_12865;var statearr_12935_12999 = state_12865__$1;(statearr_12935_12999[(2)] = inst_12844);
(statearr_12935_12999[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (30)))
{var state_12865__$1 = state_12865;var statearr_12936_13000 = state_12865__$1;(statearr_12936_13000[(2)] = null);
(statearr_12936_13000[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (10)))
{var inst_12749 = (state_12865[(16)]);var inst_12747 = (state_12865[(17)]);var inst_12755 = cljs.core._nth.call(null,inst_12747,inst_12749);var inst_12756 = cljs.core.nth.call(null,inst_12755,(0),null);var inst_12757 = cljs.core.nth.call(null,inst_12755,(1),null);var state_12865__$1 = (function (){var statearr_12937 = state_12865;(statearr_12937[(26)] = inst_12756);
return statearr_12937;
})();if(cljs.core.truth_(inst_12757))
{var statearr_12938_13001 = state_12865__$1;(statearr_12938_13001[(1)] = (13));
} else
{var statearr_12939_13002 = state_12865__$1;(statearr_12939_13002[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (18)))
{var inst_12790 = (state_12865[(2)]);var state_12865__$1 = state_12865;var statearr_12940_13003 = state_12865__$1;(statearr_12940_13003[(2)] = inst_12790);
(statearr_12940_13003[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (42)))
{var state_12865__$1 = state_12865;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12865__$1,(45),dchan);
} else
{if((state_val_12866 === (37)))
{var inst_12737 = (state_12865[(9)]);var inst_12833 = (state_12865[(23)]);var inst_12824 = (state_12865[(25)]);var inst_12833__$1 = cljs.core.first.call(null,inst_12824);var inst_12834 = cljs.core.async.put_BANG_.call(null,inst_12833__$1,inst_12737,done);var state_12865__$1 = (function (){var statearr_12941 = state_12865;(statearr_12941[(23)] = inst_12833__$1);
return statearr_12941;
})();if(cljs.core.truth_(inst_12834))
{var statearr_12942_13004 = state_12865__$1;(statearr_12942_13004[(1)] = (39));
} else
{var statearr_12943_13005 = state_12865__$1;(statearr_12943_13005[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12866 === (8)))
{var inst_12748 = (state_12865[(15)]);var inst_12749 = (state_12865[(16)]);var inst_12751 = (inst_12749 < inst_12748);var inst_12752 = inst_12751;var state_12865__$1 = state_12865;if(cljs.core.truth_(inst_12752))
{var statearr_12944_13006 = state_12865__$1;(statearr_12944_13006[(1)] = (10));
} else
{var statearr_12945_13007 = state_12865__$1;(statearr_12945_13007[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6744__auto___12953,cs,m,dchan,dctr,done))
;return ((function (switch__6688__auto__,c__6744__auto___12953,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6689__auto__ = null;
var state_machine__6689__auto____0 = (function (){var statearr_12949 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12949[(0)] = state_machine__6689__auto__);
(statearr_12949[(1)] = (1));
return statearr_12949;
});
var state_machine__6689__auto____1 = (function (state_12865){while(true){
var ret_value__6690__auto__ = (function (){try{while(true){
var result__6691__auto__ = switch__6688__auto__.call(null,state_12865);if(cljs.core.keyword_identical_QMARK_.call(null,result__6691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6691__auto__;
}
break;
}
}catch (e12950){if((e12950 instanceof Object))
{var ex__6692__auto__ = e12950;var statearr_12951_13008 = state_12865;(statearr_12951_13008[(5)] = ex__6692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12865);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12950;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13009 = state_12865;
state_12865 = G__13009;
continue;
}
} else
{return ret_value__6690__auto__;
}
break;
}
});
state_machine__6689__auto__ = function(state_12865){
switch(arguments.length){
case 0:
return state_machine__6689__auto____0.call(this);
case 1:
return state_machine__6689__auto____1.call(this,state_12865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6689__auto____0;
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6689__auto____1;
return state_machine__6689__auto__;
})()
;})(switch__6688__auto__,c__6744__auto___12953,cs,m,dchan,dctr,done))
})();var state__6746__auto__ = (function (){var statearr_12952 = f__6745__auto__.call(null);(statearr_12952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6744__auto___12953);
return statearr_12952;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6746__auto__);
});})(c__6744__auto___12953,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj13011 = {};return obj13011;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__13012){var map__13017 = p__13012;var map__13017__$1 = ((cljs.core.seq_QMARK_.call(null,map__13017))?cljs.core.apply.call(null,cljs.core.hash_map,map__13017):map__13017);var opts = map__13017__$1;var statearr_13018_13021 = state;(statearr_13018_13021[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__13017,map__13017__$1,opts){
return (function (val){var statearr_13019_13022 = state;(statearr_13019_13022[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13017,map__13017__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_13020_13023 = state;(statearr_13020_13023[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__13012 = null;if (arguments.length > 3) {
  p__13012 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__13012);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__13024){
var state = cljs.core.first(arglist__13024);
arglist__13024 = cljs.core.next(arglist__13024);
var cont_block = cljs.core.first(arglist__13024);
arglist__13024 = cljs.core.next(arglist__13024);
var ports = cljs.core.first(arglist__13024);
var p__13012 = cljs.core.rest(arglist__13024);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__13012);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t13144 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13144 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13145){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta13145 = meta13145;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13144.cljs$lang$type = true;
cljs.core.async.t13144.cljs$lang$ctorStr = "cljs.core.async/t13144";
cljs.core.async.t13144.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13144");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13144.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13144.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13144.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13144.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13144.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13144.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13144.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13144.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13144.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13146){var self__ = this;
var _13146__$1 = this;return self__.meta13145;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13146,meta13145__$1){var self__ = this;
var _13146__$1 = this;return (new cljs.core.async.t13144(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13145__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13144 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13144(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13145){return (new cljs.core.async.t13144(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13145));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13144(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6744__auto___13263 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6744__auto___13263,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6745__auto__ = (function (){var switch__6688__auto__ = ((function (c__6744__auto___13263,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13216){var state_val_13217 = (state_13216[(1)]);if((state_val_13217 === (7)))
{var inst_13160 = (state_13216[(7)]);var inst_13165 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13160);var state_13216__$1 = state_13216;var statearr_13218_13264 = state_13216__$1;(statearr_13218_13264[(2)] = inst_13165);
(statearr_13218_13264[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13217 === (20)))
{var inst_13175 = (state_13216[(8)]);var state_13216__$1 = state_13216;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13216__$1,(23),out,inst_13175);
} else
{if((state_val_13217 === (1)))
{var inst_13150 = (state_13216[(9)]);var inst_13150__$1 = calc_state.call(null);var inst_13151 = cljs.core.seq_QMARK_.call(null,inst_13150__$1);var state_13216__$1 = (function (){var statearr_13219 = state_13216;(statearr_13219[(9)] = inst_13150__$1);
return statearr_13219;
})();if(inst_13151)
{var statearr_13220_13265 = state_13216__$1;(statearr_13220_13265[(1)] = (2));
} else
{var statearr_13221_13266 = state_13216__$1;(statearr_13221_13266[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13217 === (24)))
{var inst_13168 = (state_13216[(10)]);var inst_13160 = inst_13168;var state_13216__$1 = (function (){var statearr_13222 = state_13216;(statearr_13222[(7)] = inst_13160);
return statearr_13222;
})();var statearr_13223_13267 = state_13216__$1;(statearr_13223_13267[(2)] = null);
(statearr_13223_13267[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13217 === (4)))
{var inst_13150 = (state_13216[(9)]);var inst_13156 = (state_13216[(2)]);var inst_13157 = cljs.core.get.call(null,inst_13156,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13158 = cljs.core.get.call(null,inst_13156,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13159 = cljs.core.get.call(null,inst_13156,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_13160 = inst_13150;var state_13216__$1 = (function (){var statearr_13224 = state_13216;(statearr_13224[(11)] = inst_13159);
(statearr_13224[(7)] = inst_13160);
(statearr_13224[(12)] = inst_13157);
(statearr_13224[(13)] = inst_13158);
return statearr_13224;
})();var statearr_13225_13268 = state_13216__$1;(statearr_13225_13268[(2)] = null);
(statearr_13225_13268[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13217 === (15)))
{var state_13216__$1 = state_13216;var statearr_13226_13269 = state_13216__$1;(statearr_13226_13269[(2)] = null);
(statearr_13226_13269[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13217 === (21)))
{var inst_13168 = (state_13216[(10)]);var inst_13160 = inst_13168;var state_13216__$1 = (function (){var statearr_13227 = state_13216;(statearr_13227[(7)] = inst_13160);
return statearr_13227;
})();var statearr_13228_13270 = state_13216__$1;(statearr_13228_13270[(2)] = null);
(statearr_13228_13270[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13217 === (13)))
{var inst_13212 = (state_13216[(2)]);var state_13216__$1 = state_13216;var statearr_13229_13271 = state_13216__$1;(statearr_13229_13271[(2)] = inst_13212);
(statearr_13229_13271[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13217 === (22)))
{var inst_13210 = (state_13216[(2)]);var state_13216__$1 = state_13216;var statearr_13230_13272 = state_13216__$1;(statearr_13230_13272[(2)] = inst_13210);
(statearr_13230_13272[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13217 === (6)))
{var inst_13214 = (state_13216[(2)]);var state_13216__$1 = state_13216;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13216__$1,inst_13214);
} else
{if((state_val_13217 === (25)))
{var state_13216__$1 = state_13216;var statearr_13231_13273 = state_13216__$1;(statearr_13231_13273[(2)] = null);
(statearr_13231_13273[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13217 === (17)))
{var inst_13190 = (state_13216[(14)]);var state_13216__$1 = state_13216;var statearr_13232_13274 = state_13216__$1;(statearr_13232_13274[(2)] = inst_13190);
(statearr_13232_13274[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13217 === (3)))
{var inst_13150 = (state_13216[(9)]);var state_13216__$1 = state_13216;var statearr_13233_13275 = state_13216__$1;(statearr_13233_13275[(2)] = inst_13150);
(statearr_13233_13275[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13217 === (12)))
{var inst_13176 = (state_13216[(15)]);var inst_13190 = (state_13216[(14)]);var inst_13171 = (state_13216[(16)]);var inst_13190__$1 = inst_13171.call(null,inst_13176);var state_13216__$1 = (function (){var statearr_13234 = state_13216;(statearr_13234[(14)] = inst_13190__$1);
return statearr_13234;
})();if(cljs.core.truth_(inst_13190__$1))
{var statearr_13235_13276 = state_13216__$1;(statearr_13235_13276[(1)] = (17));
} else
{var statearr_13236_13277 = state_13216__$1;(statearr_13236_13277[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13217 === (2)))
{var inst_13150 = (state_13216[(9)]);var inst_13153 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13150);var state_13216__$1 = state_13216;var statearr_13237_13278 = state_13216__$1;(statearr_13237_13278[(2)] = inst_13153);
(statearr_13237_13278[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13217 === (23)))
{var inst_13201 = (state_13216[(2)]);var state_13216__$1 = state_13216;if(cljs.core.truth_(inst_13201))
{var statearr_13238_13279 = state_13216__$1;(statearr_13238_13279[(1)] = (24));
} else
{var statearr_13239_13280 = state_13216__$1;(statearr_13239_13280[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13217 === (19)))
{var inst_13198 = (state_13216[(2)]);var state_13216__$1 = state_13216;if(cljs.core.truth_(inst_13198))
{var statearr_13240_13281 = state_13216__$1;(statearr_13240_13281[(1)] = (20));
} else
{var statearr_13241_13282 = state_13216__$1;(statearr_13241_13282[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13217 === (11)))
{var inst_13175 = (state_13216[(8)]);var inst_13181 = (inst_13175 == null);var state_13216__$1 = state_13216;if(cljs.core.truth_(inst_13181))
{var statearr_13242_13283 = state_13216__$1;(statearr_13242_13283[(1)] = (14));
} else
{var statearr_13243_13284 = state_13216__$1;(statearr_13243_13284[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13217 === (9)))
{var inst_13168 = (state_13216[(10)]);var inst_13168__$1 = (state_13216[(2)]);var inst_13169 = cljs.core.get.call(null,inst_13168__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13170 = cljs.core.get.call(null,inst_13168__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13171 = cljs.core.get.call(null,inst_13168__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_13216__$1 = (function (){var statearr_13244 = state_13216;(statearr_13244[(17)] = inst_13170);
(statearr_13244[(10)] = inst_13168__$1);
(statearr_13244[(16)] = inst_13171);
return statearr_13244;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_13216__$1,(10),inst_13169);
} else
{if((state_val_13217 === (5)))
{var inst_13160 = (state_13216[(7)]);var inst_13163 = cljs.core.seq_QMARK_.call(null,inst_13160);var state_13216__$1 = state_13216;if(inst_13163)
{var statearr_13245_13285 = state_13216__$1;(statearr_13245_13285[(1)] = (7));
} else
{var statearr_13246_13286 = state_13216__$1;(statearr_13246_13286[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13217 === (14)))
{var inst_13176 = (state_13216[(15)]);var inst_13183 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13176);var state_13216__$1 = state_13216;var statearr_13247_13287 = state_13216__$1;(statearr_13247_13287[(2)] = inst_13183);
(statearr_13247_13287[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13217 === (26)))
{var inst_13206 = (state_13216[(2)]);var state_13216__$1 = state_13216;var statearr_13248_13288 = state_13216__$1;(statearr_13248_13288[(2)] = inst_13206);
(statearr_13248_13288[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13217 === (16)))
{var inst_13186 = (state_13216[(2)]);var inst_13187 = calc_state.call(null);var inst_13160 = inst_13187;var state_13216__$1 = (function (){var statearr_13249 = state_13216;(statearr_13249[(18)] = inst_13186);
(statearr_13249[(7)] = inst_13160);
return statearr_13249;
})();var statearr_13250_13289 = state_13216__$1;(statearr_13250_13289[(2)] = null);
(statearr_13250_13289[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13217 === (10)))
{var inst_13176 = (state_13216[(15)]);var inst_13175 = (state_13216[(8)]);var inst_13174 = (state_13216[(2)]);var inst_13175__$1 = cljs.core.nth.call(null,inst_13174,(0),null);var inst_13176__$1 = cljs.core.nth.call(null,inst_13174,(1),null);var inst_13177 = (inst_13175__$1 == null);var inst_13178 = cljs.core._EQ_.call(null,inst_13176__$1,change);var inst_13179 = (inst_13177) || (inst_13178);var state_13216__$1 = (function (){var statearr_13251 = state_13216;(statearr_13251[(15)] = inst_13176__$1);
(statearr_13251[(8)] = inst_13175__$1);
return statearr_13251;
})();if(cljs.core.truth_(inst_13179))
{var statearr_13252_13290 = state_13216__$1;(statearr_13252_13290[(1)] = (11));
} else
{var statearr_13253_13291 = state_13216__$1;(statearr_13253_13291[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13217 === (18)))
{var inst_13176 = (state_13216[(15)]);var inst_13170 = (state_13216[(17)]);var inst_13171 = (state_13216[(16)]);var inst_13193 = cljs.core.empty_QMARK_.call(null,inst_13171);var inst_13194 = inst_13170.call(null,inst_13176);var inst_13195 = cljs.core.not.call(null,inst_13194);var inst_13196 = (inst_13193) && (inst_13195);var state_13216__$1 = state_13216;var statearr_13254_13292 = state_13216__$1;(statearr_13254_13292[(2)] = inst_13196);
(statearr_13254_13292[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13217 === (8)))
{var inst_13160 = (state_13216[(7)]);var state_13216__$1 = state_13216;var statearr_13255_13293 = state_13216__$1;(statearr_13255_13293[(2)] = inst_13160);
(statearr_13255_13293[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6744__auto___13263,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6688__auto__,c__6744__auto___13263,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6689__auto__ = null;
var state_machine__6689__auto____0 = (function (){var statearr_13259 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13259[(0)] = state_machine__6689__auto__);
(statearr_13259[(1)] = (1));
return statearr_13259;
});
var state_machine__6689__auto____1 = (function (state_13216){while(true){
var ret_value__6690__auto__ = (function (){try{while(true){
var result__6691__auto__ = switch__6688__auto__.call(null,state_13216);if(cljs.core.keyword_identical_QMARK_.call(null,result__6691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6691__auto__;
}
break;
}
}catch (e13260){if((e13260 instanceof Object))
{var ex__6692__auto__ = e13260;var statearr_13261_13294 = state_13216;(statearr_13261_13294[(5)] = ex__6692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13216);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13260;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13295 = state_13216;
state_13216 = G__13295;
continue;
}
} else
{return ret_value__6690__auto__;
}
break;
}
});
state_machine__6689__auto__ = function(state_13216){
switch(arguments.length){
case 0:
return state_machine__6689__auto____0.call(this);
case 1:
return state_machine__6689__auto____1.call(this,state_13216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6689__auto____0;
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6689__auto____1;
return state_machine__6689__auto__;
})()
;})(switch__6688__auto__,c__6744__auto___13263,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6746__auto__ = (function (){var statearr_13262 = f__6745__auto__.call(null);(statearr_13262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6744__auto___13263);
return statearr_13262;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6746__auto__);
});})(c__6744__auto___13263,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj13297 = {};return obj13297;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3640__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3640__auto__,mults){
return (function (p1__13298_SHARP_){if(cljs.core.truth_(p1__13298_SHARP_.call(null,topic)))
{return p1__13298_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13298_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3640__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13421 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13421 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13422){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13422 = meta13422;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13421.cljs$lang$type = true;
cljs.core.async.t13421.cljs$lang$ctorStr = "cljs.core.async/t13421";
cljs.core.async.t13421.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13421");
});})(mults,ensure_mult))
;
cljs.core.async.t13421.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13421.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13421.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13421.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13421.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13421.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13421.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13421.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13423){var self__ = this;
var _13423__$1 = this;return self__.meta13422;
});})(mults,ensure_mult))
;
cljs.core.async.t13421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13423,meta13422__$1){var self__ = this;
var _13423__$1 = this;return (new cljs.core.async.t13421(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13422__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13421 = ((function (mults,ensure_mult){
return (function __GT_t13421(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13422){return (new cljs.core.async.t13421(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13422));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13421(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6744__auto___13543 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6744__auto___13543,mults,ensure_mult,p){
return (function (){var f__6745__auto__ = (function (){var switch__6688__auto__ = ((function (c__6744__auto___13543,mults,ensure_mult,p){
return (function (state_13495){var state_val_13496 = (state_13495[(1)]);if((state_val_13496 === (7)))
{var inst_13491 = (state_13495[(2)]);var state_13495__$1 = state_13495;var statearr_13497_13544 = state_13495__$1;(statearr_13497_13544[(2)] = inst_13491);
(statearr_13497_13544[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13496 === (20)))
{var state_13495__$1 = state_13495;var statearr_13498_13545 = state_13495__$1;(statearr_13498_13545[(2)] = null);
(statearr_13498_13545[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13496 === (1)))
{var state_13495__$1 = state_13495;var statearr_13499_13546 = state_13495__$1;(statearr_13499_13546[(2)] = null);
(statearr_13499_13546[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13496 === (24)))
{var inst_13474 = (state_13495[(7)]);var inst_13483 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13474);var state_13495__$1 = state_13495;var statearr_13500_13547 = state_13495__$1;(statearr_13500_13547[(2)] = inst_13483);
(statearr_13500_13547[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13496 === (4)))
{var inst_13426 = (state_13495[(8)]);var inst_13426__$1 = (state_13495[(2)]);var inst_13427 = (inst_13426__$1 == null);var state_13495__$1 = (function (){var statearr_13501 = state_13495;(statearr_13501[(8)] = inst_13426__$1);
return statearr_13501;
})();if(cljs.core.truth_(inst_13427))
{var statearr_13502_13548 = state_13495__$1;(statearr_13502_13548[(1)] = (5));
} else
{var statearr_13503_13549 = state_13495__$1;(statearr_13503_13549[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13496 === (15)))
{var inst_13468 = (state_13495[(2)]);var state_13495__$1 = state_13495;var statearr_13504_13550 = state_13495__$1;(statearr_13504_13550[(2)] = inst_13468);
(statearr_13504_13550[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13496 === (21)))
{var inst_13488 = (state_13495[(2)]);var state_13495__$1 = (function (){var statearr_13505 = state_13495;(statearr_13505[(9)] = inst_13488);
return statearr_13505;
})();var statearr_13506_13551 = state_13495__$1;(statearr_13506_13551[(2)] = null);
(statearr_13506_13551[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13496 === (13)))
{var inst_13450 = (state_13495[(10)]);var inst_13452 = cljs.core.chunked_seq_QMARK_.call(null,inst_13450);var state_13495__$1 = state_13495;if(inst_13452)
{var statearr_13507_13552 = state_13495__$1;(statearr_13507_13552[(1)] = (16));
} else
{var statearr_13508_13553 = state_13495__$1;(statearr_13508_13553[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13496 === (22)))
{var inst_13480 = (state_13495[(2)]);var state_13495__$1 = state_13495;if(cljs.core.truth_(inst_13480))
{var statearr_13509_13554 = state_13495__$1;(statearr_13509_13554[(1)] = (23));
} else
{var statearr_13510_13555 = state_13495__$1;(statearr_13510_13555[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13496 === (6)))
{var inst_13474 = (state_13495[(7)]);var inst_13426 = (state_13495[(8)]);var inst_13476 = (state_13495[(11)]);var inst_13474__$1 = topic_fn.call(null,inst_13426);var inst_13475 = cljs.core.deref.call(null,mults);var inst_13476__$1 = cljs.core.get.call(null,inst_13475,inst_13474__$1);var state_13495__$1 = (function (){var statearr_13511 = state_13495;(statearr_13511[(7)] = inst_13474__$1);
(statearr_13511[(11)] = inst_13476__$1);
return statearr_13511;
})();if(cljs.core.truth_(inst_13476__$1))
{var statearr_13512_13556 = state_13495__$1;(statearr_13512_13556[(1)] = (19));
} else
{var statearr_13513_13557 = state_13495__$1;(statearr_13513_13557[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13496 === (25)))
{var inst_13485 = (state_13495[(2)]);var state_13495__$1 = state_13495;var statearr_13514_13558 = state_13495__$1;(statearr_13514_13558[(2)] = inst_13485);
(statearr_13514_13558[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13496 === (17)))
{var inst_13450 = (state_13495[(10)]);var inst_13459 = cljs.core.first.call(null,inst_13450);var inst_13460 = cljs.core.async.muxch_STAR_.call(null,inst_13459);var inst_13461 = cljs.core.async.close_BANG_.call(null,inst_13460);var inst_13462 = cljs.core.next.call(null,inst_13450);var inst_13436 = inst_13462;var inst_13437 = null;var inst_13438 = (0);var inst_13439 = (0);var state_13495__$1 = (function (){var statearr_13515 = state_13495;(statearr_13515[(12)] = inst_13436);
(statearr_13515[(13)] = inst_13437);
(statearr_13515[(14)] = inst_13439);
(statearr_13515[(15)] = inst_13438);
(statearr_13515[(16)] = inst_13461);
return statearr_13515;
})();var statearr_13516_13559 = state_13495__$1;(statearr_13516_13559[(2)] = null);
(statearr_13516_13559[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13496 === (3)))
{var inst_13493 = (state_13495[(2)]);var state_13495__$1 = state_13495;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13495__$1,inst_13493);
} else
{if((state_val_13496 === (12)))
{var inst_13470 = (state_13495[(2)]);var state_13495__$1 = state_13495;var statearr_13517_13560 = state_13495__$1;(statearr_13517_13560[(2)] = inst_13470);
(statearr_13517_13560[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13496 === (2)))
{var state_13495__$1 = state_13495;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13495__$1,(4),ch);
} else
{if((state_val_13496 === (23)))
{var state_13495__$1 = state_13495;var statearr_13518_13561 = state_13495__$1;(statearr_13518_13561[(2)] = null);
(statearr_13518_13561[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13496 === (19)))
{var inst_13426 = (state_13495[(8)]);var inst_13476 = (state_13495[(11)]);var inst_13478 = cljs.core.async.muxch_STAR_.call(null,inst_13476);var state_13495__$1 = state_13495;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13495__$1,(22),inst_13478,inst_13426);
} else
{if((state_val_13496 === (11)))
{var inst_13436 = (state_13495[(12)]);var inst_13450 = (state_13495[(10)]);var inst_13450__$1 = cljs.core.seq.call(null,inst_13436);var state_13495__$1 = (function (){var statearr_13519 = state_13495;(statearr_13519[(10)] = inst_13450__$1);
return statearr_13519;
})();if(inst_13450__$1)
{var statearr_13520_13562 = state_13495__$1;(statearr_13520_13562[(1)] = (13));
} else
{var statearr_13521_13563 = state_13495__$1;(statearr_13521_13563[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13496 === (9)))
{var inst_13472 = (state_13495[(2)]);var state_13495__$1 = state_13495;var statearr_13522_13564 = state_13495__$1;(statearr_13522_13564[(2)] = inst_13472);
(statearr_13522_13564[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13496 === (5)))
{var inst_13433 = cljs.core.deref.call(null,mults);var inst_13434 = cljs.core.vals.call(null,inst_13433);var inst_13435 = cljs.core.seq.call(null,inst_13434);var inst_13436 = inst_13435;var inst_13437 = null;var inst_13438 = (0);var inst_13439 = (0);var state_13495__$1 = (function (){var statearr_13523 = state_13495;(statearr_13523[(12)] = inst_13436);
(statearr_13523[(13)] = inst_13437);
(statearr_13523[(14)] = inst_13439);
(statearr_13523[(15)] = inst_13438);
return statearr_13523;
})();var statearr_13524_13565 = state_13495__$1;(statearr_13524_13565[(2)] = null);
(statearr_13524_13565[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13496 === (14)))
{var state_13495__$1 = state_13495;var statearr_13528_13566 = state_13495__$1;(statearr_13528_13566[(2)] = null);
(statearr_13528_13566[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13496 === (16)))
{var inst_13450 = (state_13495[(10)]);var inst_13454 = cljs.core.chunk_first.call(null,inst_13450);var inst_13455 = cljs.core.chunk_rest.call(null,inst_13450);var inst_13456 = cljs.core.count.call(null,inst_13454);var inst_13436 = inst_13455;var inst_13437 = inst_13454;var inst_13438 = inst_13456;var inst_13439 = (0);var state_13495__$1 = (function (){var statearr_13529 = state_13495;(statearr_13529[(12)] = inst_13436);
(statearr_13529[(13)] = inst_13437);
(statearr_13529[(14)] = inst_13439);
(statearr_13529[(15)] = inst_13438);
return statearr_13529;
})();var statearr_13530_13567 = state_13495__$1;(statearr_13530_13567[(2)] = null);
(statearr_13530_13567[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13496 === (10)))
{var inst_13436 = (state_13495[(12)]);var inst_13437 = (state_13495[(13)]);var inst_13439 = (state_13495[(14)]);var inst_13438 = (state_13495[(15)]);var inst_13444 = cljs.core._nth.call(null,inst_13437,inst_13439);var inst_13445 = cljs.core.async.muxch_STAR_.call(null,inst_13444);var inst_13446 = cljs.core.async.close_BANG_.call(null,inst_13445);var inst_13447 = (inst_13439 + (1));var tmp13525 = inst_13436;var tmp13526 = inst_13437;var tmp13527 = inst_13438;var inst_13436__$1 = tmp13525;var inst_13437__$1 = tmp13526;var inst_13438__$1 = tmp13527;var inst_13439__$1 = inst_13447;var state_13495__$1 = (function (){var statearr_13531 = state_13495;(statearr_13531[(12)] = inst_13436__$1);
(statearr_13531[(13)] = inst_13437__$1);
(statearr_13531[(14)] = inst_13439__$1);
(statearr_13531[(15)] = inst_13438__$1);
(statearr_13531[(17)] = inst_13446);
return statearr_13531;
})();var statearr_13532_13568 = state_13495__$1;(statearr_13532_13568[(2)] = null);
(statearr_13532_13568[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13496 === (18)))
{var inst_13465 = (state_13495[(2)]);var state_13495__$1 = state_13495;var statearr_13533_13569 = state_13495__$1;(statearr_13533_13569[(2)] = inst_13465);
(statearr_13533_13569[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13496 === (8)))
{var inst_13439 = (state_13495[(14)]);var inst_13438 = (state_13495[(15)]);var inst_13441 = (inst_13439 < inst_13438);var inst_13442 = inst_13441;var state_13495__$1 = state_13495;if(cljs.core.truth_(inst_13442))
{var statearr_13534_13570 = state_13495__$1;(statearr_13534_13570[(1)] = (10));
} else
{var statearr_13535_13571 = state_13495__$1;(statearr_13535_13571[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6744__auto___13543,mults,ensure_mult,p))
;return ((function (switch__6688__auto__,c__6744__auto___13543,mults,ensure_mult,p){
return (function() {
var state_machine__6689__auto__ = null;
var state_machine__6689__auto____0 = (function (){var statearr_13539 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13539[(0)] = state_machine__6689__auto__);
(statearr_13539[(1)] = (1));
return statearr_13539;
});
var state_machine__6689__auto____1 = (function (state_13495){while(true){
var ret_value__6690__auto__ = (function (){try{while(true){
var result__6691__auto__ = switch__6688__auto__.call(null,state_13495);if(cljs.core.keyword_identical_QMARK_.call(null,result__6691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6691__auto__;
}
break;
}
}catch (e13540){if((e13540 instanceof Object))
{var ex__6692__auto__ = e13540;var statearr_13541_13572 = state_13495;(statearr_13541_13572[(5)] = ex__6692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13495);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13540;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13573 = state_13495;
state_13495 = G__13573;
continue;
}
} else
{return ret_value__6690__auto__;
}
break;
}
});
state_machine__6689__auto__ = function(state_13495){
switch(arguments.length){
case 0:
return state_machine__6689__auto____0.call(this);
case 1:
return state_machine__6689__auto____1.call(this,state_13495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6689__auto____0;
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6689__auto____1;
return state_machine__6689__auto__;
})()
;})(switch__6688__auto__,c__6744__auto___13543,mults,ensure_mult,p))
})();var state__6746__auto__ = (function (){var statearr_13542 = f__6745__auto__.call(null);(statearr_13542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6744__auto___13543);
return statearr_13542;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6746__auto__);
});})(c__6744__auto___13543,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6744__auto___13710 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6744__auto___13710,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6745__auto__ = (function (){var switch__6688__auto__ = ((function (c__6744__auto___13710,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13680){var state_val_13681 = (state_13680[(1)]);if((state_val_13681 === (7)))
{var state_13680__$1 = state_13680;var statearr_13682_13711 = state_13680__$1;(statearr_13682_13711[(2)] = null);
(statearr_13682_13711[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13681 === (1)))
{var state_13680__$1 = state_13680;var statearr_13683_13712 = state_13680__$1;(statearr_13683_13712[(2)] = null);
(statearr_13683_13712[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13681 === (4)))
{var inst_13644 = (state_13680[(7)]);var inst_13646 = (inst_13644 < cnt);var state_13680__$1 = state_13680;if(cljs.core.truth_(inst_13646))
{var statearr_13684_13713 = state_13680__$1;(statearr_13684_13713[(1)] = (6));
} else
{var statearr_13685_13714 = state_13680__$1;(statearr_13685_13714[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13681 === (15)))
{var inst_13676 = (state_13680[(2)]);var state_13680__$1 = state_13680;var statearr_13686_13715 = state_13680__$1;(statearr_13686_13715[(2)] = inst_13676);
(statearr_13686_13715[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13681 === (13)))
{var inst_13669 = cljs.core.async.close_BANG_.call(null,out);var state_13680__$1 = state_13680;var statearr_13687_13716 = state_13680__$1;(statearr_13687_13716[(2)] = inst_13669);
(statearr_13687_13716[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13681 === (6)))
{var state_13680__$1 = state_13680;var statearr_13688_13717 = state_13680__$1;(statearr_13688_13717[(2)] = null);
(statearr_13688_13717[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13681 === (3)))
{var inst_13678 = (state_13680[(2)]);var state_13680__$1 = state_13680;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13680__$1,inst_13678);
} else
{if((state_val_13681 === (12)))
{var inst_13666 = (state_13680[(8)]);var inst_13666__$1 = (state_13680[(2)]);var inst_13667 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13666__$1);var state_13680__$1 = (function (){var statearr_13689 = state_13680;(statearr_13689[(8)] = inst_13666__$1);
return statearr_13689;
})();if(cljs.core.truth_(inst_13667))
{var statearr_13690_13718 = state_13680__$1;(statearr_13690_13718[(1)] = (13));
} else
{var statearr_13691_13719 = state_13680__$1;(statearr_13691_13719[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13681 === (2)))
{var inst_13643 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13644 = (0);var state_13680__$1 = (function (){var statearr_13692 = state_13680;(statearr_13692[(7)] = inst_13644);
(statearr_13692[(9)] = inst_13643);
return statearr_13692;
})();var statearr_13693_13720 = state_13680__$1;(statearr_13693_13720[(2)] = null);
(statearr_13693_13720[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13681 === (11)))
{var inst_13644 = (state_13680[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13680,(10),Object,null,(9));var inst_13653 = chs__$1.call(null,inst_13644);var inst_13654 = done.call(null,inst_13644);var inst_13655 = cljs.core.async.take_BANG_.call(null,inst_13653,inst_13654);var state_13680__$1 = state_13680;var statearr_13694_13721 = state_13680__$1;(statearr_13694_13721[(2)] = inst_13655);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13680__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13681 === (9)))
{var inst_13644 = (state_13680[(7)]);var inst_13657 = (state_13680[(2)]);var inst_13658 = (inst_13644 + (1));var inst_13644__$1 = inst_13658;var state_13680__$1 = (function (){var statearr_13695 = state_13680;(statearr_13695[(10)] = inst_13657);
(statearr_13695[(7)] = inst_13644__$1);
return statearr_13695;
})();var statearr_13696_13722 = state_13680__$1;(statearr_13696_13722[(2)] = null);
(statearr_13696_13722[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13681 === (5)))
{var inst_13664 = (state_13680[(2)]);var state_13680__$1 = (function (){var statearr_13697 = state_13680;(statearr_13697[(11)] = inst_13664);
return statearr_13697;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13680__$1,(12),dchan);
} else
{if((state_val_13681 === (14)))
{var inst_13666 = (state_13680[(8)]);var inst_13671 = cljs.core.apply.call(null,f,inst_13666);var state_13680__$1 = state_13680;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13680__$1,(16),out,inst_13671);
} else
{if((state_val_13681 === (16)))
{var inst_13673 = (state_13680[(2)]);var state_13680__$1 = (function (){var statearr_13698 = state_13680;(statearr_13698[(12)] = inst_13673);
return statearr_13698;
})();var statearr_13699_13723 = state_13680__$1;(statearr_13699_13723[(2)] = null);
(statearr_13699_13723[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13681 === (10)))
{var inst_13648 = (state_13680[(2)]);var inst_13649 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13680__$1 = (function (){var statearr_13700 = state_13680;(statearr_13700[(13)] = inst_13648);
return statearr_13700;
})();var statearr_13701_13724 = state_13680__$1;(statearr_13701_13724[(2)] = inst_13649);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13680__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13681 === (8)))
{var inst_13662 = (state_13680[(2)]);var state_13680__$1 = state_13680;var statearr_13702_13725 = state_13680__$1;(statearr_13702_13725[(2)] = inst_13662);
(statearr_13702_13725[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6744__auto___13710,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6688__auto__,c__6744__auto___13710,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6689__auto__ = null;
var state_machine__6689__auto____0 = (function (){var statearr_13706 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13706[(0)] = state_machine__6689__auto__);
(statearr_13706[(1)] = (1));
return statearr_13706;
});
var state_machine__6689__auto____1 = (function (state_13680){while(true){
var ret_value__6690__auto__ = (function (){try{while(true){
var result__6691__auto__ = switch__6688__auto__.call(null,state_13680);if(cljs.core.keyword_identical_QMARK_.call(null,result__6691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6691__auto__;
}
break;
}
}catch (e13707){if((e13707 instanceof Object))
{var ex__6692__auto__ = e13707;var statearr_13708_13726 = state_13680;(statearr_13708_13726[(5)] = ex__6692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13680);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13707;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13727 = state_13680;
state_13680 = G__13727;
continue;
}
} else
{return ret_value__6690__auto__;
}
break;
}
});
state_machine__6689__auto__ = function(state_13680){
switch(arguments.length){
case 0:
return state_machine__6689__auto____0.call(this);
case 1:
return state_machine__6689__auto____1.call(this,state_13680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6689__auto____0;
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6689__auto____1;
return state_machine__6689__auto__;
})()
;})(switch__6688__auto__,c__6744__auto___13710,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6746__auto__ = (function (){var statearr_13709 = f__6745__auto__.call(null);(statearr_13709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6744__auto___13710);
return statearr_13709;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6746__auto__);
});})(c__6744__auto___13710,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6744__auto___13835 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6744__auto___13835,out){
return (function (){var f__6745__auto__ = (function (){var switch__6688__auto__ = ((function (c__6744__auto___13835,out){
return (function (state_13811){var state_val_13812 = (state_13811[(1)]);if((state_val_13812 === (7)))
{var inst_13790 = (state_13811[(7)]);var inst_13791 = (state_13811[(8)]);var inst_13790__$1 = (state_13811[(2)]);var inst_13791__$1 = cljs.core.nth.call(null,inst_13790__$1,(0),null);var inst_13792 = cljs.core.nth.call(null,inst_13790__$1,(1),null);var inst_13793 = (inst_13791__$1 == null);var state_13811__$1 = (function (){var statearr_13813 = state_13811;(statearr_13813[(7)] = inst_13790__$1);
(statearr_13813[(9)] = inst_13792);
(statearr_13813[(8)] = inst_13791__$1);
return statearr_13813;
})();if(cljs.core.truth_(inst_13793))
{var statearr_13814_13836 = state_13811__$1;(statearr_13814_13836[(1)] = (8));
} else
{var statearr_13815_13837 = state_13811__$1;(statearr_13815_13837[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13812 === (1)))
{var inst_13782 = cljs.core.vec.call(null,chs);var inst_13783 = inst_13782;var state_13811__$1 = (function (){var statearr_13816 = state_13811;(statearr_13816[(10)] = inst_13783);
return statearr_13816;
})();var statearr_13817_13838 = state_13811__$1;(statearr_13817_13838[(2)] = null);
(statearr_13817_13838[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13812 === (4)))
{var inst_13783 = (state_13811[(10)]);var state_13811__$1 = state_13811;return cljs.core.async.ioc_alts_BANG_.call(null,state_13811__$1,(7),inst_13783);
} else
{if((state_val_13812 === (6)))
{var inst_13807 = (state_13811[(2)]);var state_13811__$1 = state_13811;var statearr_13818_13839 = state_13811__$1;(statearr_13818_13839[(2)] = inst_13807);
(statearr_13818_13839[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13812 === (3)))
{var inst_13809 = (state_13811[(2)]);var state_13811__$1 = state_13811;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13811__$1,inst_13809);
} else
{if((state_val_13812 === (2)))
{var inst_13783 = (state_13811[(10)]);var inst_13785 = cljs.core.count.call(null,inst_13783);var inst_13786 = (inst_13785 > (0));var state_13811__$1 = state_13811;if(cljs.core.truth_(inst_13786))
{var statearr_13820_13840 = state_13811__$1;(statearr_13820_13840[(1)] = (4));
} else
{var statearr_13821_13841 = state_13811__$1;(statearr_13821_13841[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13812 === (11)))
{var inst_13783 = (state_13811[(10)]);var inst_13800 = (state_13811[(2)]);var tmp13819 = inst_13783;var inst_13783__$1 = tmp13819;var state_13811__$1 = (function (){var statearr_13822 = state_13811;(statearr_13822[(11)] = inst_13800);
(statearr_13822[(10)] = inst_13783__$1);
return statearr_13822;
})();var statearr_13823_13842 = state_13811__$1;(statearr_13823_13842[(2)] = null);
(statearr_13823_13842[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13812 === (9)))
{var inst_13791 = (state_13811[(8)]);var state_13811__$1 = state_13811;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13811__$1,(11),out,inst_13791);
} else
{if((state_val_13812 === (5)))
{var inst_13805 = cljs.core.async.close_BANG_.call(null,out);var state_13811__$1 = state_13811;var statearr_13824_13843 = state_13811__$1;(statearr_13824_13843[(2)] = inst_13805);
(statearr_13824_13843[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13812 === (10)))
{var inst_13803 = (state_13811[(2)]);var state_13811__$1 = state_13811;var statearr_13825_13844 = state_13811__$1;(statearr_13825_13844[(2)] = inst_13803);
(statearr_13825_13844[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13812 === (8)))
{var inst_13783 = (state_13811[(10)]);var inst_13790 = (state_13811[(7)]);var inst_13792 = (state_13811[(9)]);var inst_13791 = (state_13811[(8)]);var inst_13795 = (function (){var c = inst_13792;var v = inst_13791;var vec__13788 = inst_13790;var cs = inst_13783;return ((function (c,v,vec__13788,cs,inst_13783,inst_13790,inst_13792,inst_13791,state_val_13812,c__6744__auto___13835,out){
return (function (p1__13728_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13728_SHARP_);
});
;})(c,v,vec__13788,cs,inst_13783,inst_13790,inst_13792,inst_13791,state_val_13812,c__6744__auto___13835,out))
})();var inst_13796 = cljs.core.filterv.call(null,inst_13795,inst_13783);var inst_13783__$1 = inst_13796;var state_13811__$1 = (function (){var statearr_13826 = state_13811;(statearr_13826[(10)] = inst_13783__$1);
return statearr_13826;
})();var statearr_13827_13845 = state_13811__$1;(statearr_13827_13845[(2)] = null);
(statearr_13827_13845[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6744__auto___13835,out))
;return ((function (switch__6688__auto__,c__6744__auto___13835,out){
return (function() {
var state_machine__6689__auto__ = null;
var state_machine__6689__auto____0 = (function (){var statearr_13831 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13831[(0)] = state_machine__6689__auto__);
(statearr_13831[(1)] = (1));
return statearr_13831;
});
var state_machine__6689__auto____1 = (function (state_13811){while(true){
var ret_value__6690__auto__ = (function (){try{while(true){
var result__6691__auto__ = switch__6688__auto__.call(null,state_13811);if(cljs.core.keyword_identical_QMARK_.call(null,result__6691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6691__auto__;
}
break;
}
}catch (e13832){if((e13832 instanceof Object))
{var ex__6692__auto__ = e13832;var statearr_13833_13846 = state_13811;(statearr_13833_13846[(5)] = ex__6692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13811);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13832;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13847 = state_13811;
state_13811 = G__13847;
continue;
}
} else
{return ret_value__6690__auto__;
}
break;
}
});
state_machine__6689__auto__ = function(state_13811){
switch(arguments.length){
case 0:
return state_machine__6689__auto____0.call(this);
case 1:
return state_machine__6689__auto____1.call(this,state_13811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6689__auto____0;
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6689__auto____1;
return state_machine__6689__auto__;
})()
;})(switch__6688__auto__,c__6744__auto___13835,out))
})();var state__6746__auto__ = (function (){var statearr_13834 = f__6745__auto__.call(null);(statearr_13834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6744__auto___13835);
return statearr_13834;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6746__auto__);
});})(c__6744__auto___13835,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6744__auto___13940 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6744__auto___13940,out){
return (function (){var f__6745__auto__ = (function (){var switch__6688__auto__ = ((function (c__6744__auto___13940,out){
return (function (state_13917){var state_val_13918 = (state_13917[(1)]);if((state_val_13918 === (7)))
{var inst_13899 = (state_13917[(7)]);var inst_13899__$1 = (state_13917[(2)]);var inst_13900 = (inst_13899__$1 == null);var inst_13901 = cljs.core.not.call(null,inst_13900);var state_13917__$1 = (function (){var statearr_13919 = state_13917;(statearr_13919[(7)] = inst_13899__$1);
return statearr_13919;
})();if(inst_13901)
{var statearr_13920_13941 = state_13917__$1;(statearr_13920_13941[(1)] = (8));
} else
{var statearr_13921_13942 = state_13917__$1;(statearr_13921_13942[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (1)))
{var inst_13894 = (0);var state_13917__$1 = (function (){var statearr_13922 = state_13917;(statearr_13922[(8)] = inst_13894);
return statearr_13922;
})();var statearr_13923_13943 = state_13917__$1;(statearr_13923_13943[(2)] = null);
(statearr_13923_13943[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (4)))
{var state_13917__$1 = state_13917;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13917__$1,(7),ch);
} else
{if((state_val_13918 === (6)))
{var inst_13912 = (state_13917[(2)]);var state_13917__$1 = state_13917;var statearr_13924_13944 = state_13917__$1;(statearr_13924_13944[(2)] = inst_13912);
(statearr_13924_13944[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (3)))
{var inst_13914 = (state_13917[(2)]);var inst_13915 = cljs.core.async.close_BANG_.call(null,out);var state_13917__$1 = (function (){var statearr_13925 = state_13917;(statearr_13925[(9)] = inst_13914);
return statearr_13925;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13917__$1,inst_13915);
} else
{if((state_val_13918 === (2)))
{var inst_13894 = (state_13917[(8)]);var inst_13896 = (inst_13894 < n);var state_13917__$1 = state_13917;if(cljs.core.truth_(inst_13896))
{var statearr_13926_13945 = state_13917__$1;(statearr_13926_13945[(1)] = (4));
} else
{var statearr_13927_13946 = state_13917__$1;(statearr_13927_13946[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (11)))
{var inst_13894 = (state_13917[(8)]);var inst_13904 = (state_13917[(2)]);var inst_13905 = (inst_13894 + (1));var inst_13894__$1 = inst_13905;var state_13917__$1 = (function (){var statearr_13928 = state_13917;(statearr_13928[(10)] = inst_13904);
(statearr_13928[(8)] = inst_13894__$1);
return statearr_13928;
})();var statearr_13929_13947 = state_13917__$1;(statearr_13929_13947[(2)] = null);
(statearr_13929_13947[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (9)))
{var state_13917__$1 = state_13917;var statearr_13930_13948 = state_13917__$1;(statearr_13930_13948[(2)] = null);
(statearr_13930_13948[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (5)))
{var state_13917__$1 = state_13917;var statearr_13931_13949 = state_13917__$1;(statearr_13931_13949[(2)] = null);
(statearr_13931_13949[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (10)))
{var inst_13909 = (state_13917[(2)]);var state_13917__$1 = state_13917;var statearr_13932_13950 = state_13917__$1;(statearr_13932_13950[(2)] = inst_13909);
(statearr_13932_13950[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13918 === (8)))
{var inst_13899 = (state_13917[(7)]);var state_13917__$1 = state_13917;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13917__$1,(11),out,inst_13899);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6744__auto___13940,out))
;return ((function (switch__6688__auto__,c__6744__auto___13940,out){
return (function() {
var state_machine__6689__auto__ = null;
var state_machine__6689__auto____0 = (function (){var statearr_13936 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13936[(0)] = state_machine__6689__auto__);
(statearr_13936[(1)] = (1));
return statearr_13936;
});
var state_machine__6689__auto____1 = (function (state_13917){while(true){
var ret_value__6690__auto__ = (function (){try{while(true){
var result__6691__auto__ = switch__6688__auto__.call(null,state_13917);if(cljs.core.keyword_identical_QMARK_.call(null,result__6691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6691__auto__;
}
break;
}
}catch (e13937){if((e13937 instanceof Object))
{var ex__6692__auto__ = e13937;var statearr_13938_13951 = state_13917;(statearr_13938_13951[(5)] = ex__6692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13917);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13937;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13952 = state_13917;
state_13917 = G__13952;
continue;
}
} else
{return ret_value__6690__auto__;
}
break;
}
});
state_machine__6689__auto__ = function(state_13917){
switch(arguments.length){
case 0:
return state_machine__6689__auto____0.call(this);
case 1:
return state_machine__6689__auto____1.call(this,state_13917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6689__auto____0;
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6689__auto____1;
return state_machine__6689__auto__;
})()
;})(switch__6688__auto__,c__6744__auto___13940,out))
})();var state__6746__auto__ = (function (){var statearr_13939 = f__6745__auto__.call(null);(statearr_13939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6744__auto___13940);
return statearr_13939;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6746__auto__);
});})(c__6744__auto___13940,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13960 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13960 = (function (ch,f,map_LT_,meta13961){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13961 = meta13961;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13960.cljs$lang$type = true;
cljs.core.async.t13960.cljs$lang$ctorStr = "cljs.core.async/t13960";
cljs.core.async.t13960.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13960");
});
cljs.core.async.t13960.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13960.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t13960.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13960.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13963 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13963 = (function (fn1,_,meta13961,ch,f,map_LT_,meta13964){
this.fn1 = fn1;
this._ = _;
this.meta13961 = meta13961;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13964 = meta13964;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13963.cljs$lang$type = true;
cljs.core.async.t13963.cljs$lang$ctorStr = "cljs.core.async/t13963";
cljs.core.async.t13963.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13963");
});})(___$1))
;
cljs.core.async.t13963.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13963.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t13963.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__13953_SHARP_){return f1.call(null,(((p1__13953_SHARP_ == null))?null:self__.f.call(null,p1__13953_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t13963.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13965){var self__ = this;
var _13965__$1 = this;return self__.meta13964;
});})(___$1))
;
cljs.core.async.t13963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13965,meta13964__$1){var self__ = this;
var _13965__$1 = this;return (new cljs.core.async.t13963(self__.fn1,self__._,self__.meta13961,self__.ch,self__.f,self__.map_LT_,meta13964__$1));
});})(___$1))
;
cljs.core.async.__GT_t13963 = ((function (___$1){
return (function __GT_t13963(fn1__$1,___$2,meta13961__$1,ch__$2,f__$2,map_LT___$2,meta13964){return (new cljs.core.async.t13963(fn1__$1,___$2,meta13961__$1,ch__$2,f__$2,map_LT___$2,meta13964));
});})(___$1))
;
}
return (new cljs.core.async.t13963(fn1,___$1,self__.meta13961,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3628__auto__ = ret;if(cljs.core.truth_(and__3628__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3628__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t13960.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13960.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13960.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t13960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13962){var self__ = this;
var _13962__$1 = this;return self__.meta13961;
});
cljs.core.async.t13960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13962,meta13961__$1){var self__ = this;
var _13962__$1 = this;return (new cljs.core.async.t13960(self__.ch,self__.f,self__.map_LT_,meta13961__$1));
});
cljs.core.async.__GT_t13960 = (function __GT_t13960(ch__$1,f__$1,map_LT___$1,meta13961){return (new cljs.core.async.t13960(ch__$1,f__$1,map_LT___$1,meta13961));
});
}
return (new cljs.core.async.t13960(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13969 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13969 = (function (ch,f,map_GT_,meta13970){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13970 = meta13970;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13969.cljs$lang$type = true;
cljs.core.async.t13969.cljs$lang$ctorStr = "cljs.core.async/t13969";
cljs.core.async.t13969.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13969");
});
cljs.core.async.t13969.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13969.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t13969.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13969.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13969.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13969.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13971){var self__ = this;
var _13971__$1 = this;return self__.meta13970;
});
cljs.core.async.t13969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13971,meta13970__$1){var self__ = this;
var _13971__$1 = this;return (new cljs.core.async.t13969(self__.ch,self__.f,self__.map_GT_,meta13970__$1));
});
cljs.core.async.__GT_t13969 = (function __GT_t13969(ch__$1,f__$1,map_GT___$1,meta13970){return (new cljs.core.async.t13969(ch__$1,f__$1,map_GT___$1,meta13970));
});
}
return (new cljs.core.async.t13969(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13975 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13975 = (function (ch,p,filter_GT_,meta13976){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13976 = meta13976;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13975.cljs$lang$type = true;
cljs.core.async.t13975.cljs$lang$ctorStr = "cljs.core.async/t13975";
cljs.core.async.t13975.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13975");
});
cljs.core.async.t13975.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13975.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t13975.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13975.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13975.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13975.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13975.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t13975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13977){var self__ = this;
var _13977__$1 = this;return self__.meta13976;
});
cljs.core.async.t13975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13977,meta13976__$1){var self__ = this;
var _13977__$1 = this;return (new cljs.core.async.t13975(self__.ch,self__.p,self__.filter_GT_,meta13976__$1));
});
cljs.core.async.__GT_t13975 = (function __GT_t13975(ch__$1,p__$1,filter_GT___$1,meta13976){return (new cljs.core.async.t13975(ch__$1,p__$1,filter_GT___$1,meta13976));
});
}
return (new cljs.core.async.t13975(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6744__auto___14060 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6744__auto___14060,out){
return (function (){var f__6745__auto__ = (function (){var switch__6688__auto__ = ((function (c__6744__auto___14060,out){
return (function (state_14039){var state_val_14040 = (state_14039[(1)]);if((state_val_14040 === (7)))
{var inst_14035 = (state_14039[(2)]);var state_14039__$1 = state_14039;var statearr_14041_14061 = state_14039__$1;(statearr_14041_14061[(2)] = inst_14035);
(statearr_14041_14061[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14040 === (1)))
{var state_14039__$1 = state_14039;var statearr_14042_14062 = state_14039__$1;(statearr_14042_14062[(2)] = null);
(statearr_14042_14062[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14040 === (4)))
{var inst_14021 = (state_14039[(7)]);var inst_14021__$1 = (state_14039[(2)]);var inst_14022 = (inst_14021__$1 == null);var state_14039__$1 = (function (){var statearr_14043 = state_14039;(statearr_14043[(7)] = inst_14021__$1);
return statearr_14043;
})();if(cljs.core.truth_(inst_14022))
{var statearr_14044_14063 = state_14039__$1;(statearr_14044_14063[(1)] = (5));
} else
{var statearr_14045_14064 = state_14039__$1;(statearr_14045_14064[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14040 === (6)))
{var inst_14021 = (state_14039[(7)]);var inst_14026 = p.call(null,inst_14021);var state_14039__$1 = state_14039;if(cljs.core.truth_(inst_14026))
{var statearr_14046_14065 = state_14039__$1;(statearr_14046_14065[(1)] = (8));
} else
{var statearr_14047_14066 = state_14039__$1;(statearr_14047_14066[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14040 === (3)))
{var inst_14037 = (state_14039[(2)]);var state_14039__$1 = state_14039;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14039__$1,inst_14037);
} else
{if((state_val_14040 === (2)))
{var state_14039__$1 = state_14039;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14039__$1,(4),ch);
} else
{if((state_val_14040 === (11)))
{var inst_14029 = (state_14039[(2)]);var state_14039__$1 = state_14039;var statearr_14048_14067 = state_14039__$1;(statearr_14048_14067[(2)] = inst_14029);
(statearr_14048_14067[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14040 === (9)))
{var state_14039__$1 = state_14039;var statearr_14049_14068 = state_14039__$1;(statearr_14049_14068[(2)] = null);
(statearr_14049_14068[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14040 === (5)))
{var inst_14024 = cljs.core.async.close_BANG_.call(null,out);var state_14039__$1 = state_14039;var statearr_14050_14069 = state_14039__$1;(statearr_14050_14069[(2)] = inst_14024);
(statearr_14050_14069[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14040 === (10)))
{var inst_14032 = (state_14039[(2)]);var state_14039__$1 = (function (){var statearr_14051 = state_14039;(statearr_14051[(8)] = inst_14032);
return statearr_14051;
})();var statearr_14052_14070 = state_14039__$1;(statearr_14052_14070[(2)] = null);
(statearr_14052_14070[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14040 === (8)))
{var inst_14021 = (state_14039[(7)]);var state_14039__$1 = state_14039;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14039__$1,(11),out,inst_14021);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6744__auto___14060,out))
;return ((function (switch__6688__auto__,c__6744__auto___14060,out){
return (function() {
var state_machine__6689__auto__ = null;
var state_machine__6689__auto____0 = (function (){var statearr_14056 = [null,null,null,null,null,null,null,null,null];(statearr_14056[(0)] = state_machine__6689__auto__);
(statearr_14056[(1)] = (1));
return statearr_14056;
});
var state_machine__6689__auto____1 = (function (state_14039){while(true){
var ret_value__6690__auto__ = (function (){try{while(true){
var result__6691__auto__ = switch__6688__auto__.call(null,state_14039);if(cljs.core.keyword_identical_QMARK_.call(null,result__6691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6691__auto__;
}
break;
}
}catch (e14057){if((e14057 instanceof Object))
{var ex__6692__auto__ = e14057;var statearr_14058_14071 = state_14039;(statearr_14058_14071[(5)] = ex__6692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14039);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14057;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14072 = state_14039;
state_14039 = G__14072;
continue;
}
} else
{return ret_value__6690__auto__;
}
break;
}
});
state_machine__6689__auto__ = function(state_14039){
switch(arguments.length){
case 0:
return state_machine__6689__auto____0.call(this);
case 1:
return state_machine__6689__auto____1.call(this,state_14039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6689__auto____0;
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6689__auto____1;
return state_machine__6689__auto__;
})()
;})(switch__6688__auto__,c__6744__auto___14060,out))
})();var state__6746__auto__ = (function (){var statearr_14059 = f__6745__auto__.call(null);(statearr_14059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6744__auto___14060);
return statearr_14059;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6746__auto__);
});})(c__6744__auto___14060,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6744__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6744__auto__){
return (function (){var f__6745__auto__ = (function (){var switch__6688__auto__ = ((function (c__6744__auto__){
return (function (state_14238){var state_val_14239 = (state_14238[(1)]);if((state_val_14239 === (7)))
{var inst_14234 = (state_14238[(2)]);var state_14238__$1 = state_14238;var statearr_14240_14281 = state_14238__$1;(statearr_14240_14281[(2)] = inst_14234);
(statearr_14240_14281[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14239 === (20)))
{var inst_14204 = (state_14238[(7)]);var inst_14215 = (state_14238[(2)]);var inst_14216 = cljs.core.next.call(null,inst_14204);var inst_14190 = inst_14216;var inst_14191 = null;var inst_14192 = (0);var inst_14193 = (0);var state_14238__$1 = (function (){var statearr_14241 = state_14238;(statearr_14241[(8)] = inst_14190);
(statearr_14241[(9)] = inst_14215);
(statearr_14241[(10)] = inst_14193);
(statearr_14241[(11)] = inst_14191);
(statearr_14241[(12)] = inst_14192);
return statearr_14241;
})();var statearr_14242_14282 = state_14238__$1;(statearr_14242_14282[(2)] = null);
(statearr_14242_14282[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14239 === (1)))
{var state_14238__$1 = state_14238;var statearr_14243_14283 = state_14238__$1;(statearr_14243_14283[(2)] = null);
(statearr_14243_14283[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14239 === (4)))
{var inst_14179 = (state_14238[(13)]);var inst_14179__$1 = (state_14238[(2)]);var inst_14180 = (inst_14179__$1 == null);var state_14238__$1 = (function (){var statearr_14244 = state_14238;(statearr_14244[(13)] = inst_14179__$1);
return statearr_14244;
})();if(cljs.core.truth_(inst_14180))
{var statearr_14245_14284 = state_14238__$1;(statearr_14245_14284[(1)] = (5));
} else
{var statearr_14246_14285 = state_14238__$1;(statearr_14246_14285[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14239 === (15)))
{var state_14238__$1 = state_14238;var statearr_14250_14286 = state_14238__$1;(statearr_14250_14286[(2)] = null);
(statearr_14250_14286[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14239 === (21)))
{var state_14238__$1 = state_14238;var statearr_14251_14287 = state_14238__$1;(statearr_14251_14287[(2)] = null);
(statearr_14251_14287[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14239 === (13)))
{var inst_14190 = (state_14238[(8)]);var inst_14193 = (state_14238[(10)]);var inst_14191 = (state_14238[(11)]);var inst_14192 = (state_14238[(12)]);var inst_14200 = (state_14238[(2)]);var inst_14201 = (inst_14193 + (1));var tmp14247 = inst_14190;var tmp14248 = inst_14191;var tmp14249 = inst_14192;var inst_14190__$1 = tmp14247;var inst_14191__$1 = tmp14248;var inst_14192__$1 = tmp14249;var inst_14193__$1 = inst_14201;var state_14238__$1 = (function (){var statearr_14252 = state_14238;(statearr_14252[(8)] = inst_14190__$1);
(statearr_14252[(10)] = inst_14193__$1);
(statearr_14252[(11)] = inst_14191__$1);
(statearr_14252[(12)] = inst_14192__$1);
(statearr_14252[(14)] = inst_14200);
return statearr_14252;
})();var statearr_14253_14288 = state_14238__$1;(statearr_14253_14288[(2)] = null);
(statearr_14253_14288[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14239 === (22)))
{var state_14238__$1 = state_14238;var statearr_14254_14289 = state_14238__$1;(statearr_14254_14289[(2)] = null);
(statearr_14254_14289[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14239 === (6)))
{var inst_14179 = (state_14238[(13)]);var inst_14188 = f.call(null,inst_14179);var inst_14189 = cljs.core.seq.call(null,inst_14188);var inst_14190 = inst_14189;var inst_14191 = null;var inst_14192 = (0);var inst_14193 = (0);var state_14238__$1 = (function (){var statearr_14255 = state_14238;(statearr_14255[(8)] = inst_14190);
(statearr_14255[(10)] = inst_14193);
(statearr_14255[(11)] = inst_14191);
(statearr_14255[(12)] = inst_14192);
return statearr_14255;
})();var statearr_14256_14290 = state_14238__$1;(statearr_14256_14290[(2)] = null);
(statearr_14256_14290[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14239 === (17)))
{var inst_14204 = (state_14238[(7)]);var inst_14208 = cljs.core.chunk_first.call(null,inst_14204);var inst_14209 = cljs.core.chunk_rest.call(null,inst_14204);var inst_14210 = cljs.core.count.call(null,inst_14208);var inst_14190 = inst_14209;var inst_14191 = inst_14208;var inst_14192 = inst_14210;var inst_14193 = (0);var state_14238__$1 = (function (){var statearr_14257 = state_14238;(statearr_14257[(8)] = inst_14190);
(statearr_14257[(10)] = inst_14193);
(statearr_14257[(11)] = inst_14191);
(statearr_14257[(12)] = inst_14192);
return statearr_14257;
})();var statearr_14258_14291 = state_14238__$1;(statearr_14258_14291[(2)] = null);
(statearr_14258_14291[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14239 === (3)))
{var inst_14236 = (state_14238[(2)]);var state_14238__$1 = state_14238;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14238__$1,inst_14236);
} else
{if((state_val_14239 === (12)))
{var inst_14224 = (state_14238[(2)]);var state_14238__$1 = state_14238;var statearr_14259_14292 = state_14238__$1;(statearr_14259_14292[(2)] = inst_14224);
(statearr_14259_14292[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14239 === (2)))
{var state_14238__$1 = state_14238;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14238__$1,(4),in$);
} else
{if((state_val_14239 === (23)))
{var inst_14232 = (state_14238[(2)]);var state_14238__$1 = state_14238;var statearr_14260_14293 = state_14238__$1;(statearr_14260_14293[(2)] = inst_14232);
(statearr_14260_14293[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14239 === (19)))
{var inst_14219 = (state_14238[(2)]);var state_14238__$1 = state_14238;var statearr_14261_14294 = state_14238__$1;(statearr_14261_14294[(2)] = inst_14219);
(statearr_14261_14294[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14239 === (11)))
{var inst_14190 = (state_14238[(8)]);var inst_14204 = (state_14238[(7)]);var inst_14204__$1 = cljs.core.seq.call(null,inst_14190);var state_14238__$1 = (function (){var statearr_14262 = state_14238;(statearr_14262[(7)] = inst_14204__$1);
return statearr_14262;
})();if(inst_14204__$1)
{var statearr_14263_14295 = state_14238__$1;(statearr_14263_14295[(1)] = (14));
} else
{var statearr_14264_14296 = state_14238__$1;(statearr_14264_14296[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14239 === (9)))
{var inst_14226 = (state_14238[(2)]);var inst_14227 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_14238__$1 = (function (){var statearr_14265 = state_14238;(statearr_14265[(15)] = inst_14226);
return statearr_14265;
})();if(cljs.core.truth_(inst_14227))
{var statearr_14266_14297 = state_14238__$1;(statearr_14266_14297[(1)] = (21));
} else
{var statearr_14267_14298 = state_14238__$1;(statearr_14267_14298[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14239 === (5)))
{var inst_14182 = cljs.core.async.close_BANG_.call(null,out);var state_14238__$1 = state_14238;var statearr_14268_14299 = state_14238__$1;(statearr_14268_14299[(2)] = inst_14182);
(statearr_14268_14299[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14239 === (14)))
{var inst_14204 = (state_14238[(7)]);var inst_14206 = cljs.core.chunked_seq_QMARK_.call(null,inst_14204);var state_14238__$1 = state_14238;if(inst_14206)
{var statearr_14269_14300 = state_14238__$1;(statearr_14269_14300[(1)] = (17));
} else
{var statearr_14270_14301 = state_14238__$1;(statearr_14270_14301[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14239 === (16)))
{var inst_14222 = (state_14238[(2)]);var state_14238__$1 = state_14238;var statearr_14271_14302 = state_14238__$1;(statearr_14271_14302[(2)] = inst_14222);
(statearr_14271_14302[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14239 === (10)))
{var inst_14193 = (state_14238[(10)]);var inst_14191 = (state_14238[(11)]);var inst_14198 = cljs.core._nth.call(null,inst_14191,inst_14193);var state_14238__$1 = state_14238;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14238__$1,(13),out,inst_14198);
} else
{if((state_val_14239 === (18)))
{var inst_14204 = (state_14238[(7)]);var inst_14213 = cljs.core.first.call(null,inst_14204);var state_14238__$1 = state_14238;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14238__$1,(20),out,inst_14213);
} else
{if((state_val_14239 === (8)))
{var inst_14193 = (state_14238[(10)]);var inst_14192 = (state_14238[(12)]);var inst_14195 = (inst_14193 < inst_14192);var inst_14196 = inst_14195;var state_14238__$1 = state_14238;if(cljs.core.truth_(inst_14196))
{var statearr_14272_14303 = state_14238__$1;(statearr_14272_14303[(1)] = (10));
} else
{var statearr_14273_14304 = state_14238__$1;(statearr_14273_14304[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6744__auto__))
;return ((function (switch__6688__auto__,c__6744__auto__){
return (function() {
var state_machine__6689__auto__ = null;
var state_machine__6689__auto____0 = (function (){var statearr_14277 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14277[(0)] = state_machine__6689__auto__);
(statearr_14277[(1)] = (1));
return statearr_14277;
});
var state_machine__6689__auto____1 = (function (state_14238){while(true){
var ret_value__6690__auto__ = (function (){try{while(true){
var result__6691__auto__ = switch__6688__auto__.call(null,state_14238);if(cljs.core.keyword_identical_QMARK_.call(null,result__6691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6691__auto__;
}
break;
}
}catch (e14278){if((e14278 instanceof Object))
{var ex__6692__auto__ = e14278;var statearr_14279_14305 = state_14238;(statearr_14279_14305[(5)] = ex__6692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14238);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14278;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14306 = state_14238;
state_14238 = G__14306;
continue;
}
} else
{return ret_value__6690__auto__;
}
break;
}
});
state_machine__6689__auto__ = function(state_14238){
switch(arguments.length){
case 0:
return state_machine__6689__auto____0.call(this);
case 1:
return state_machine__6689__auto____1.call(this,state_14238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6689__auto____0;
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6689__auto____1;
return state_machine__6689__auto__;
})()
;})(switch__6688__auto__,c__6744__auto__))
})();var state__6746__auto__ = (function (){var statearr_14280 = f__6745__auto__.call(null);(statearr_14280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6744__auto__);
return statearr_14280;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6746__auto__);
});})(c__6744__auto__))
);
return c__6744__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6744__auto___14403 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6744__auto___14403,out){
return (function (){var f__6745__auto__ = (function (){var switch__6688__auto__ = ((function (c__6744__auto___14403,out){
return (function (state_14378){var state_val_14379 = (state_14378[(1)]);if((state_val_14379 === (7)))
{var inst_14373 = (state_14378[(2)]);var state_14378__$1 = state_14378;var statearr_14380_14404 = state_14378__$1;(statearr_14380_14404[(2)] = inst_14373);
(statearr_14380_14404[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14379 === (1)))
{var inst_14355 = null;var state_14378__$1 = (function (){var statearr_14381 = state_14378;(statearr_14381[(7)] = inst_14355);
return statearr_14381;
})();var statearr_14382_14405 = state_14378__$1;(statearr_14382_14405[(2)] = null);
(statearr_14382_14405[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14379 === (4)))
{var inst_14358 = (state_14378[(8)]);var inst_14358__$1 = (state_14378[(2)]);var inst_14359 = (inst_14358__$1 == null);var inst_14360 = cljs.core.not.call(null,inst_14359);var state_14378__$1 = (function (){var statearr_14383 = state_14378;(statearr_14383[(8)] = inst_14358__$1);
return statearr_14383;
})();if(inst_14360)
{var statearr_14384_14406 = state_14378__$1;(statearr_14384_14406[(1)] = (5));
} else
{var statearr_14385_14407 = state_14378__$1;(statearr_14385_14407[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14379 === (6)))
{var state_14378__$1 = state_14378;var statearr_14386_14408 = state_14378__$1;(statearr_14386_14408[(2)] = null);
(statearr_14386_14408[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14379 === (3)))
{var inst_14375 = (state_14378[(2)]);var inst_14376 = cljs.core.async.close_BANG_.call(null,out);var state_14378__$1 = (function (){var statearr_14387 = state_14378;(statearr_14387[(9)] = inst_14375);
return statearr_14387;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14378__$1,inst_14376);
} else
{if((state_val_14379 === (2)))
{var state_14378__$1 = state_14378;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14378__$1,(4),ch);
} else
{if((state_val_14379 === (11)))
{var inst_14358 = (state_14378[(8)]);var inst_14367 = (state_14378[(2)]);var inst_14355 = inst_14358;var state_14378__$1 = (function (){var statearr_14388 = state_14378;(statearr_14388[(7)] = inst_14355);
(statearr_14388[(10)] = inst_14367);
return statearr_14388;
})();var statearr_14389_14409 = state_14378__$1;(statearr_14389_14409[(2)] = null);
(statearr_14389_14409[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14379 === (9)))
{var inst_14358 = (state_14378[(8)]);var state_14378__$1 = state_14378;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14378__$1,(11),out,inst_14358);
} else
{if((state_val_14379 === (5)))
{var inst_14355 = (state_14378[(7)]);var inst_14358 = (state_14378[(8)]);var inst_14362 = cljs.core._EQ_.call(null,inst_14358,inst_14355);var state_14378__$1 = state_14378;if(inst_14362)
{var statearr_14391_14410 = state_14378__$1;(statearr_14391_14410[(1)] = (8));
} else
{var statearr_14392_14411 = state_14378__$1;(statearr_14392_14411[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14379 === (10)))
{var inst_14370 = (state_14378[(2)]);var state_14378__$1 = state_14378;var statearr_14393_14412 = state_14378__$1;(statearr_14393_14412[(2)] = inst_14370);
(statearr_14393_14412[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14379 === (8)))
{var inst_14355 = (state_14378[(7)]);var tmp14390 = inst_14355;var inst_14355__$1 = tmp14390;var state_14378__$1 = (function (){var statearr_14394 = state_14378;(statearr_14394[(7)] = inst_14355__$1);
return statearr_14394;
})();var statearr_14395_14413 = state_14378__$1;(statearr_14395_14413[(2)] = null);
(statearr_14395_14413[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6744__auto___14403,out))
;return ((function (switch__6688__auto__,c__6744__auto___14403,out){
return (function() {
var state_machine__6689__auto__ = null;
var state_machine__6689__auto____0 = (function (){var statearr_14399 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14399[(0)] = state_machine__6689__auto__);
(statearr_14399[(1)] = (1));
return statearr_14399;
});
var state_machine__6689__auto____1 = (function (state_14378){while(true){
var ret_value__6690__auto__ = (function (){try{while(true){
var result__6691__auto__ = switch__6688__auto__.call(null,state_14378);if(cljs.core.keyword_identical_QMARK_.call(null,result__6691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6691__auto__;
}
break;
}
}catch (e14400){if((e14400 instanceof Object))
{var ex__6692__auto__ = e14400;var statearr_14401_14414 = state_14378;(statearr_14401_14414[(5)] = ex__6692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14378);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14400;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14415 = state_14378;
state_14378 = G__14415;
continue;
}
} else
{return ret_value__6690__auto__;
}
break;
}
});
state_machine__6689__auto__ = function(state_14378){
switch(arguments.length){
case 0:
return state_machine__6689__auto____0.call(this);
case 1:
return state_machine__6689__auto____1.call(this,state_14378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6689__auto____0;
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6689__auto____1;
return state_machine__6689__auto__;
})()
;})(switch__6688__auto__,c__6744__auto___14403,out))
})();var state__6746__auto__ = (function (){var statearr_14402 = f__6745__auto__.call(null);(statearr_14402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6744__auto___14403);
return statearr_14402;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6746__auto__);
});})(c__6744__auto___14403,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6744__auto___14550 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6744__auto___14550,out){
return (function (){var f__6745__auto__ = (function (){var switch__6688__auto__ = ((function (c__6744__auto___14550,out){
return (function (state_14520){var state_val_14521 = (state_14520[(1)]);if((state_val_14521 === (7)))
{var inst_14516 = (state_14520[(2)]);var state_14520__$1 = state_14520;var statearr_14522_14551 = state_14520__$1;(statearr_14522_14551[(2)] = inst_14516);
(statearr_14522_14551[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14521 === (1)))
{var inst_14483 = (new Array(n));var inst_14484 = inst_14483;var inst_14485 = (0);var state_14520__$1 = (function (){var statearr_14523 = state_14520;(statearr_14523[(7)] = inst_14484);
(statearr_14523[(8)] = inst_14485);
return statearr_14523;
})();var statearr_14524_14552 = state_14520__$1;(statearr_14524_14552[(2)] = null);
(statearr_14524_14552[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14521 === (4)))
{var inst_14488 = (state_14520[(9)]);var inst_14488__$1 = (state_14520[(2)]);var inst_14489 = (inst_14488__$1 == null);var inst_14490 = cljs.core.not.call(null,inst_14489);var state_14520__$1 = (function (){var statearr_14525 = state_14520;(statearr_14525[(9)] = inst_14488__$1);
return statearr_14525;
})();if(inst_14490)
{var statearr_14526_14553 = state_14520__$1;(statearr_14526_14553[(1)] = (5));
} else
{var statearr_14527_14554 = state_14520__$1;(statearr_14527_14554[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14521 === (15)))
{var inst_14510 = (state_14520[(2)]);var state_14520__$1 = state_14520;var statearr_14528_14555 = state_14520__$1;(statearr_14528_14555[(2)] = inst_14510);
(statearr_14528_14555[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14521 === (13)))
{var state_14520__$1 = state_14520;var statearr_14529_14556 = state_14520__$1;(statearr_14529_14556[(2)] = null);
(statearr_14529_14556[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14521 === (6)))
{var inst_14485 = (state_14520[(8)]);var inst_14506 = (inst_14485 > (0));var state_14520__$1 = state_14520;if(cljs.core.truth_(inst_14506))
{var statearr_14530_14557 = state_14520__$1;(statearr_14530_14557[(1)] = (12));
} else
{var statearr_14531_14558 = state_14520__$1;(statearr_14531_14558[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14521 === (3)))
{var inst_14518 = (state_14520[(2)]);var state_14520__$1 = state_14520;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14520__$1,inst_14518);
} else
{if((state_val_14521 === (12)))
{var inst_14484 = (state_14520[(7)]);var inst_14508 = cljs.core.vec.call(null,inst_14484);var state_14520__$1 = state_14520;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14520__$1,(15),out,inst_14508);
} else
{if((state_val_14521 === (2)))
{var state_14520__$1 = state_14520;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14520__$1,(4),ch);
} else
{if((state_val_14521 === (11)))
{var inst_14500 = (state_14520[(2)]);var inst_14501 = (new Array(n));var inst_14484 = inst_14501;var inst_14485 = (0);var state_14520__$1 = (function (){var statearr_14532 = state_14520;(statearr_14532[(7)] = inst_14484);
(statearr_14532[(8)] = inst_14485);
(statearr_14532[(10)] = inst_14500);
return statearr_14532;
})();var statearr_14533_14559 = state_14520__$1;(statearr_14533_14559[(2)] = null);
(statearr_14533_14559[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14521 === (9)))
{var inst_14484 = (state_14520[(7)]);var inst_14498 = cljs.core.vec.call(null,inst_14484);var state_14520__$1 = state_14520;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14520__$1,(11),out,inst_14498);
} else
{if((state_val_14521 === (5)))
{var inst_14484 = (state_14520[(7)]);var inst_14485 = (state_14520[(8)]);var inst_14493 = (state_14520[(11)]);var inst_14488 = (state_14520[(9)]);var inst_14492 = (inst_14484[inst_14485] = inst_14488);var inst_14493__$1 = (inst_14485 + (1));var inst_14494 = (inst_14493__$1 < n);var state_14520__$1 = (function (){var statearr_14534 = state_14520;(statearr_14534[(11)] = inst_14493__$1);
(statearr_14534[(12)] = inst_14492);
return statearr_14534;
})();if(cljs.core.truth_(inst_14494))
{var statearr_14535_14560 = state_14520__$1;(statearr_14535_14560[(1)] = (8));
} else
{var statearr_14536_14561 = state_14520__$1;(statearr_14536_14561[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14521 === (14)))
{var inst_14513 = (state_14520[(2)]);var inst_14514 = cljs.core.async.close_BANG_.call(null,out);var state_14520__$1 = (function (){var statearr_14538 = state_14520;(statearr_14538[(13)] = inst_14513);
return statearr_14538;
})();var statearr_14539_14562 = state_14520__$1;(statearr_14539_14562[(2)] = inst_14514);
(statearr_14539_14562[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14521 === (10)))
{var inst_14504 = (state_14520[(2)]);var state_14520__$1 = state_14520;var statearr_14540_14563 = state_14520__$1;(statearr_14540_14563[(2)] = inst_14504);
(statearr_14540_14563[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14521 === (8)))
{var inst_14484 = (state_14520[(7)]);var inst_14493 = (state_14520[(11)]);var tmp14537 = inst_14484;var inst_14484__$1 = tmp14537;var inst_14485 = inst_14493;var state_14520__$1 = (function (){var statearr_14541 = state_14520;(statearr_14541[(7)] = inst_14484__$1);
(statearr_14541[(8)] = inst_14485);
return statearr_14541;
})();var statearr_14542_14564 = state_14520__$1;(statearr_14542_14564[(2)] = null);
(statearr_14542_14564[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6744__auto___14550,out))
;return ((function (switch__6688__auto__,c__6744__auto___14550,out){
return (function() {
var state_machine__6689__auto__ = null;
var state_machine__6689__auto____0 = (function (){var statearr_14546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14546[(0)] = state_machine__6689__auto__);
(statearr_14546[(1)] = (1));
return statearr_14546;
});
var state_machine__6689__auto____1 = (function (state_14520){while(true){
var ret_value__6690__auto__ = (function (){try{while(true){
var result__6691__auto__ = switch__6688__auto__.call(null,state_14520);if(cljs.core.keyword_identical_QMARK_.call(null,result__6691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6691__auto__;
}
break;
}
}catch (e14547){if((e14547 instanceof Object))
{var ex__6692__auto__ = e14547;var statearr_14548_14565 = state_14520;(statearr_14548_14565[(5)] = ex__6692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14520);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14547;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14566 = state_14520;
state_14520 = G__14566;
continue;
}
} else
{return ret_value__6690__auto__;
}
break;
}
});
state_machine__6689__auto__ = function(state_14520){
switch(arguments.length){
case 0:
return state_machine__6689__auto____0.call(this);
case 1:
return state_machine__6689__auto____1.call(this,state_14520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6689__auto____0;
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6689__auto____1;
return state_machine__6689__auto__;
})()
;})(switch__6688__auto__,c__6744__auto___14550,out))
})();var state__6746__auto__ = (function (){var statearr_14549 = f__6745__auto__.call(null);(statearr_14549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6744__auto___14550);
return statearr_14549;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6746__auto__);
});})(c__6744__auto___14550,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6744__auto___14709 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6744__auto___14709,out){
return (function (){var f__6745__auto__ = (function (){var switch__6688__auto__ = ((function (c__6744__auto___14709,out){
return (function (state_14679){var state_val_14680 = (state_14679[(1)]);if((state_val_14680 === (7)))
{var inst_14675 = (state_14679[(2)]);var state_14679__$1 = state_14679;var statearr_14681_14710 = state_14679__$1;(statearr_14681_14710[(2)] = inst_14675);
(statearr_14681_14710[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14680 === (1)))
{var inst_14638 = [];var inst_14639 = inst_14638;var inst_14640 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_14679__$1 = (function (){var statearr_14682 = state_14679;(statearr_14682[(7)] = inst_14640);
(statearr_14682[(8)] = inst_14639);
return statearr_14682;
})();var statearr_14683_14711 = state_14679__$1;(statearr_14683_14711[(2)] = null);
(statearr_14683_14711[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14680 === (4)))
{var inst_14643 = (state_14679[(9)]);var inst_14643__$1 = (state_14679[(2)]);var inst_14644 = (inst_14643__$1 == null);var inst_14645 = cljs.core.not.call(null,inst_14644);var state_14679__$1 = (function (){var statearr_14684 = state_14679;(statearr_14684[(9)] = inst_14643__$1);
return statearr_14684;
})();if(inst_14645)
{var statearr_14685_14712 = state_14679__$1;(statearr_14685_14712[(1)] = (5));
} else
{var statearr_14686_14713 = state_14679__$1;(statearr_14686_14713[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14680 === (15)))
{var inst_14669 = (state_14679[(2)]);var state_14679__$1 = state_14679;var statearr_14687_14714 = state_14679__$1;(statearr_14687_14714[(2)] = inst_14669);
(statearr_14687_14714[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14680 === (13)))
{var state_14679__$1 = state_14679;var statearr_14688_14715 = state_14679__$1;(statearr_14688_14715[(2)] = null);
(statearr_14688_14715[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14680 === (6)))
{var inst_14639 = (state_14679[(8)]);var inst_14664 = inst_14639.length;var inst_14665 = (inst_14664 > (0));var state_14679__$1 = state_14679;if(cljs.core.truth_(inst_14665))
{var statearr_14689_14716 = state_14679__$1;(statearr_14689_14716[(1)] = (12));
} else
{var statearr_14690_14717 = state_14679__$1;(statearr_14690_14717[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14680 === (3)))
{var inst_14677 = (state_14679[(2)]);var state_14679__$1 = state_14679;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14679__$1,inst_14677);
} else
{if((state_val_14680 === (12)))
{var inst_14639 = (state_14679[(8)]);var inst_14667 = cljs.core.vec.call(null,inst_14639);var state_14679__$1 = state_14679;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14679__$1,(15),out,inst_14667);
} else
{if((state_val_14680 === (2)))
{var state_14679__$1 = state_14679;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14679__$1,(4),ch);
} else
{if((state_val_14680 === (11)))
{var inst_14643 = (state_14679[(9)]);var inst_14647 = (state_14679[(10)]);var inst_14657 = (state_14679[(2)]);var inst_14658 = [];var inst_14659 = inst_14658.push(inst_14643);var inst_14639 = inst_14658;var inst_14640 = inst_14647;var state_14679__$1 = (function (){var statearr_14691 = state_14679;(statearr_14691[(11)] = inst_14659);
(statearr_14691[(7)] = inst_14640);
(statearr_14691[(8)] = inst_14639);
(statearr_14691[(12)] = inst_14657);
return statearr_14691;
})();var statearr_14692_14718 = state_14679__$1;(statearr_14692_14718[(2)] = null);
(statearr_14692_14718[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14680 === (9)))
{var inst_14639 = (state_14679[(8)]);var inst_14655 = cljs.core.vec.call(null,inst_14639);var state_14679__$1 = state_14679;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14679__$1,(11),out,inst_14655);
} else
{if((state_val_14680 === (5)))
{var inst_14643 = (state_14679[(9)]);var inst_14647 = (state_14679[(10)]);var inst_14640 = (state_14679[(7)]);var inst_14647__$1 = f.call(null,inst_14643);var inst_14648 = cljs.core._EQ_.call(null,inst_14647__$1,inst_14640);var inst_14649 = cljs.core.keyword_identical_QMARK_.call(null,inst_14640,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_14650 = (inst_14648) || (inst_14649);var state_14679__$1 = (function (){var statearr_14693 = state_14679;(statearr_14693[(10)] = inst_14647__$1);
return statearr_14693;
})();if(cljs.core.truth_(inst_14650))
{var statearr_14694_14719 = state_14679__$1;(statearr_14694_14719[(1)] = (8));
} else
{var statearr_14695_14720 = state_14679__$1;(statearr_14695_14720[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14680 === (14)))
{var inst_14672 = (state_14679[(2)]);var inst_14673 = cljs.core.async.close_BANG_.call(null,out);var state_14679__$1 = (function (){var statearr_14697 = state_14679;(statearr_14697[(13)] = inst_14672);
return statearr_14697;
})();var statearr_14698_14721 = state_14679__$1;(statearr_14698_14721[(2)] = inst_14673);
(statearr_14698_14721[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14680 === (10)))
{var inst_14662 = (state_14679[(2)]);var state_14679__$1 = state_14679;var statearr_14699_14722 = state_14679__$1;(statearr_14699_14722[(2)] = inst_14662);
(statearr_14699_14722[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14680 === (8)))
{var inst_14643 = (state_14679[(9)]);var inst_14647 = (state_14679[(10)]);var inst_14639 = (state_14679[(8)]);var inst_14652 = inst_14639.push(inst_14643);var tmp14696 = inst_14639;var inst_14639__$1 = tmp14696;var inst_14640 = inst_14647;var state_14679__$1 = (function (){var statearr_14700 = state_14679;(statearr_14700[(14)] = inst_14652);
(statearr_14700[(7)] = inst_14640);
(statearr_14700[(8)] = inst_14639__$1);
return statearr_14700;
})();var statearr_14701_14723 = state_14679__$1;(statearr_14701_14723[(2)] = null);
(statearr_14701_14723[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6744__auto___14709,out))
;return ((function (switch__6688__auto__,c__6744__auto___14709,out){
return (function() {
var state_machine__6689__auto__ = null;
var state_machine__6689__auto____0 = (function (){var statearr_14705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14705[(0)] = state_machine__6689__auto__);
(statearr_14705[(1)] = (1));
return statearr_14705;
});
var state_machine__6689__auto____1 = (function (state_14679){while(true){
var ret_value__6690__auto__ = (function (){try{while(true){
var result__6691__auto__ = switch__6688__auto__.call(null,state_14679);if(cljs.core.keyword_identical_QMARK_.call(null,result__6691__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6691__auto__;
}
break;
}
}catch (e14706){if((e14706 instanceof Object))
{var ex__6692__auto__ = e14706;var statearr_14707_14724 = state_14679;(statearr_14707_14724[(5)] = ex__6692__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14679);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14706;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6690__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14725 = state_14679;
state_14679 = G__14725;
continue;
}
} else
{return ret_value__6690__auto__;
}
break;
}
});
state_machine__6689__auto__ = function(state_14679){
switch(arguments.length){
case 0:
return state_machine__6689__auto____0.call(this);
case 1:
return state_machine__6689__auto____1.call(this,state_14679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6689__auto____0;
state_machine__6689__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6689__auto____1;
return state_machine__6689__auto__;
})()
;})(switch__6688__auto__,c__6744__auto___14709,out))
})();var state__6746__auto__ = (function (){var statearr_14708 = f__6745__auto__.call(null);(statearr_14708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6744__auto___14709);
return statearr_14708;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6746__auto__);
});})(c__6744__auto___14709,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map