(ns cat-camp.views.home-page
  (:require [cat-camp.session :as ses]))


(defn player-input [key placeholder]
  [:input
   {:type "text"
    :value (ses/global-state key)
    :placeholder placeholder
    :on-change #(ses/global-put! key (-> % .-target .-value))}])

(defn named-players []
  (->> [:p1 :p2 :p3 :p4]
       (map ses/global-state)
       (remove #(= "" %))
       count))

(defn button-title []
  (cond
   (= 3 (named-players)) "Three"
   (= 4 (named-players)) "Four"
   :else "Enter Names"))

(defn home-page []
  [:div
   [:p "Enter your names in clockwise (next is to your left) order."]
   [player-input :p1 "Red"]
   [player-input :p2 "Blue"]
   [player-input :p3 "White"]
   [player-input :p4 "Orange"]
   [:input {:type "button"
            :value (button-title)
            :on-click (println "")}]])

;;roll-for-order
