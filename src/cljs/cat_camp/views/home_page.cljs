(ns cat-camp.views.home-page
  (:require [cat-camp.session :as s]
            [cat-camp.util :as u]
            [secretary.core :as sec]))

(defn player-input [number placeholder]
  (let [player-map (s/player number)]
    [:div
     
     (when (s/global-state :debug?)
       [:p (pr-str player-map)])
     [:input.player-input
      (let [pi {:type "text"
                :value (:name player-map)
                :placeholder placeholder
                :on-change #(s/update-player
                             number
                             :name
                             (-> % .-target .-value))}]
        (if (= number 1)
          (assoc pi :autofocus "autofocus")
          pi))]]))

(defn button-title []
  (cond
   (= 3 (u/named-players)) "Play with 3 players"
   (= 4 (u/named-players)) "Play with 4 players"
   :else "Your names, in clockwise order please"))

(defn next-page-button []
  {:type "button"
   :value (button-title)
   :on-click #(do
                (s/visit "#roll-order"))})

(defn home-page []
  [:div.home-page
   ;; [:pre (pr-str (assoc @s/app-state :current-page "this page"))]
   [player-input 1 "Red"]
   [player-input 2 "Blue"]
   [player-input 3 "White"]
   [player-input 4 "Orange"]
   [:input.player-input.btn.btn-large
    (if (#(<= 3 (u/named-players)))
      (dissoc (next-page-button) :disabled)
      (assoc (next-page-button) :disabled true))]])

;;roll-for-order


;; (ns cat-camp.views.home-page)

;; (defn home-page []
;;   [:h2 "home"])
