(ns cat-camp.views.home-page
  (:require [cat-camp.session :as ses]
            [secretary.core :as sec]
            [cat-camp.util :as u]))

(defn player-input [number placeholder]
  (let [player-map (ses/player number)]
    [:div
     [:pre (pr-str player-map)]
     [:input.player-input
      (let [pi {:type "text"
                :value (:name player-map)
                :placeholder placeholder
                :on-change #(ses/update-player number :name (-> % .-target .-value))}]
        (if (= key :p1)
          (assoc pi :autofocus "autofocus")
          pi))]]))

(defn button-title []
  (cond
   (= 3 (u/named-players)) "Play with 3 players"
   (= 4 (u/named-players)) "Play with 4 players"
   :else "Let's Go!"))

(defn next-page-button []
  {:type "button"
   :value (button-title)
   :on-click #(do
                (ses/visit "#roll-order"))})

(defn home-page []
  [:div.home-page
   ;; [:pre (pr-str (assoc @ses/app-state :current-page "this page"))]
   [:p "Enter your names in clockwise (next is to your left) order."]
   [player-input 1 "Red"]
   [player-input 2 "Blue"]
   [player-input 3 "White"]
   [player-input 4 "Orange"]
   [:input.player-input.btn.btn-large
    (if (#(<= 3 (u/named-players)))
      (dissoc (next-page-button) :disabled)
      (assoc (next-page-button) :disabled true))]])

;;roll-for-order
