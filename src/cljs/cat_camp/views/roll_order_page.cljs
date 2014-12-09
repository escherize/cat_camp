(ns cat-camp.views.roll-order-page
  (:require  [cat-camp.session :as s]
             [cat-camp.util :as u]))

(defn roller-row [pnum]
  (let [player (s/player pnum)]
    [:tr
     [:td (:name player)]
     [:td (if-let [rolled (:order-roll (s/player pnum))]
            [:h2 rolled]
            [:input.roller.btn
             {:type "button"
              :value (str "Roll for " (:name player))
              :on-click #(s/update-player pnum
                                          :order-roll
                                          (u/roll))}])]]))

(defn everyone-rolled? []
  (= (u/named-players)
     (->> (s/global-state :players)
          vals
          (keep :order-roll)
          count)))


(defn roll-order-page []
  [:div
   [:h2 "Catan Roller"]
   [:p "Let's see who goes first!"]
   [:table#roll-order
    [:thead [:td "Player"] [:td "Score"]]
    [:tbody
     [roller-row 1]
     [roller-row 2]
     [roller-row 3]
     [roller-row 4]]]
   (when (everyone-rolled?)
     (let [ordered-players (mapv :name
                                (u/order-players-by-order-roll))
           forward (clojure.string/join " -> "
                                        ordered-players)
           backward (clojure.string/join " -> "
                                         (reverse ordered-players))]
       [:div
        [:h3 "Setup phase!"]
        [:p "The order of play follows:"]
        [:p (str forward " -----> " backward)]
        [:button.btn [:a {:href "#/roller"} "Nice! Let's begin."]]]))])
