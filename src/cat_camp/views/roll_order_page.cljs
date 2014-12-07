(ns cat-camp.views.roll-order-page
  (:require  [cat-camp.session :as s]
             [cat-camp.util :as u]))

(defn roller-row [pp pname]
  [:tr
   [:td (str (s/global-state (keyword pp)))]
   [:td (s/global-state (keyword (str pp "-roll"))
                        [(keyword (str "input#" pp "-roller.roller.btn"))
                         {:type "button"
                          :value (str "Roll for " pname)
                          :on-click #(s/global-put!
                                      (keyword (str pp "-roll"))
                                      (u/roll))}])]])

(defn everyone-rolled? []
  (= (u/named-players)
     (->> [:p1-roll :p2-roll :p3-roll
           :p4-roll :p5-roll :p6-roll]
          (keep s/global-state)
          count)))

(defn roll-order-page []
  [:div
   [:h2 "Catan Roller"]
   [:p "Let's see who goes first!"]
   [:table#roll-order
    [:thead [:td "Player"] [:td "Score"]]
    [roller-row "p1" (s/global-state :p1)]
    [roller-row "p2" (s/global-state :p2)]
    [roller-row "p3" (s/global-state :p3)]
    (when (>= (u/named-players) 4)
      [roller-row "p4" (s/global-state :p4)])]
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
