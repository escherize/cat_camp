(ns cat-camp.views.home-page
  (:require [cat-camp.session :as ses]
            [secretary.core :as sec]))


(defn player-input [key placeholder]
  [:div
   [:input.player-input
    {:type "text"
     :value (ses/global-state key)
     :placeholder placeholder
     :on-change #(ses/global-put! key (-> % .-target .-value))}]])

(defn named-players []
  (->> [:p1 :p2 :p3 :p4]
       (map ses/global-state)
       (remove #(= "" %))
       count))

(defn button-title []
  (cond
   (= 3 (named-players)) "Play with 3 players"
   (= 4 (named-players)) "Play with 4 players"
   :else "Let's Go!"))

(defn next-page-button []
  {:type "button"
   :value (button-title)
   :on-click #(do
                (ses/global-put! :num-players (named-players))
                (sec/dispatch! "/about"))})

(defn home-page []
  [:div.home-page
   [:p "Enter your names in clockwise (next is to your left) order."]
   [player-input :p1 "Red"]
   [player-input :p2 "Blue"]
   [player-input :p3 "White"]
   [player-input :p4 "Orange"]
   [:input.player-input
    (if (#(<= 3 (named-players)))
      (dissoc (next-page-button) :disabled)
      (assoc (next-page-button) :disabled true))]])

;;roll-for-order
