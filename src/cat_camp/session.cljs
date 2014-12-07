(ns cat-camp.session
  (:require [reagent.core :as reagent :refer [atom]]))

(defn blank-history []
  (zipmap (range 2 13) (repeat 0)))

;; ----------
;; State
(def app-state
  (atom {:turn-count -1
         :last-roll 0
         :history (blank-history)
         :players {:1 {:name ""
                       :color "Red"
                       :history (blank-history)}
                   :2 {:name ""
                       :color "Blue"
                       :history (blank-history)}
                   :3 {:name ""
                       :color "White"
                       :history (blank-history)}
                   :4 {:name ""
                       :color "Orange"
                       :history (blank-history)}}}))

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

(defn player [n]
  "player 1 is the first player."
  (-> @app-state
      (get :players)
      (get (keyword (str n)))))

(defn update-player [n kw v]
  (swap! app-state
         #(update-in %
                     [:players (-> n str keyword)]
                     (fn [p] (assoc p kw v)))))
