catan companion
================

This is a small static webapp diceroller. Fun!
---

It's a Clojure/ClojureScript app based on Reagent, with dynamic reloading of Clojure, ClojureScript, and CSS and a browser-connected REPL.

### Development mode

Start the server:

```
lein ring server
```

If you don't plan on using the optional development tools, you will
have to manually compile the cljs files:

```
lein cljsbuild once
```

Wait a bit, then browse to [http://localhost:3000](http://localhost:3000).


#### Reccomended development tools

Automatically push cljs changes to the browser:

```
$ lein repl

(start-figwheel)
```

Start the browser REPL:

```
$ lein repl

(browser-repl)
```

### Building for release

```
lein cljsbuild clean
lein ring uberjar
```
