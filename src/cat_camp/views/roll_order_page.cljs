(ns cat-camp.views.roll-order-page
  (:require  [cat-camp.session :as s]
             [cat-camp.util :as u]))

(defn roller-row [pnum pname]
  [:tr
   [:td (:name (s/player pnum))]
   [:td (if-let [rolled (:order-roll (s/player pnum))]
          rolled
          [:input.roller.btn
           {:type "button"
            :value (str "Roll for " pname)
            :on-click #(s/update-player pnum
                                        :order-roll
                                        (u/roll))}])]])

(defn everyone-rolled? []
  (= (u/named-players)
     (->> s/app-state
          :players
          vals
          (keep :order-roll)
          count)))

(defn roll-order-page []
  [:div
   [:h2 "Catan Roller"]
   [:p "Let's see who goes first!"]
   [:table#roll-order
    [:thead [:td "Player"] [:td "Score"]]
    [roller-row 1 (s/global-state :p1)]
    [roller-row 2 (s/global-state :p2)]
    [roller-row 3 (s/global-state :p3)]
    [roller-row 4 (s/global-state :p4)]]
   (when (everyone-rolled?)
     (let [ordered-players (map :name (u/->players s/app-state))
           forward (clojure.string/join " -> " ordered-players)
           backward (clojure.string/join " -> " (reverse ordered-players))
           length (apply str (repeat (count forward) " "))]
       [:div
        [:h3 "Setup phase."]
        [:p "The order of play follows:"]
        [:p (str forward " - - -> " backward)]
        [:button.btn [:a {:href "#/roller"} "Nice! Let's begin."]]]))])
