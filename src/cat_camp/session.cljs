(ns cat-camp.session
  (:require [reagent.core :as reagent :refer [atom]]))

;; ----------
;; State
(def app-state
  (atom {:turn-count -1
         :last-roll 0
         :history (zipmap (range 2 13) (repeat 0))
         :p1 ""
         :p2 ""
         :p3 ""
         :p4 ""}))

;; ----------
;; Helper Functions

(defn global-state [k & [default]]
  (get @app-state k default))

(defn global-put! [k v]
  (swap! app-state assoc k v))

(defn local-put! [a k v]
  (swap! a assoc k v))

(defn visit [path]
  (set! (.-location js/window) path))
