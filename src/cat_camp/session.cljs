(ns cat-camp.session
  (:require [reagent.core :as reagent :refer [atom]]))

(defn blank-history []
  (zipmap (range 2 13) (repeat 0)))

;; ----------
;; State
(def app-state
  (atom {:debug? true
         :turn-count -1
         :last-roll 0
         :history (blank-history)
         :players [{:name "Oren"
                    :color "Red"
                    :history (blank-history)}
                   {:name "Jeff"
                    :color "Blue"
                    :history (blank-history)}
                   {:name "Sarah"
                    :color "White"
                    :history (blank-history)}
                   {:name "Bryan"
                    :color "Orange"
                    :history (blank-history)}]}))

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
  "player 0 is the first player."
  (-> @app-state
      (get :players)
      (nth n)))



(defn update-player [n kw v]
  (swap! app-state
         #(update-in %
                     [:players]
                     (let [new-player (player )])
                     (fn [p] (assoc p kw v)))))
