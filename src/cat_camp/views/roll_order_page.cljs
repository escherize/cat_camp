(ns cat-camp.views.roll-order-page
  (:require  [cat-camp.session :refer [global-state
                                       global-put!
                                       app-state]]
             [cat-camp.util :refer [roll
                                    ->players]]))

(defn roller-row [pp pname]
  [:tr
   [:td
    (str (global-state (keyword pp)))]
   [:td
    (global-state (keyword (str pp "-roll"))
                  [(keyword (str "input#" pp "-roller.roller.btn"))
                   {:type "button"
                    :value (str "Roll for " pname)
                    :on-click #(global-put!
                                (keyword (str pp "-roll"))
                                (roll))}])]])

(defn roll-order-page []
  [:div
   [:h2 "Catan Roller"]
   [:p "Let's see who goes first!"]
   [:table#roll-order
    [:thead [:td "Player"] [:td "Score"]]
    [roller-row "p1" (global-state :p1)]
    [roller-row "p2" (global-state :p2)]
    [roller-row "p3" (global-state :p3)]
    [roller-row "p4" (global-state :p4)]]
   (when (and (global-state :p1-roll)
              (global-state :p2-roll)
              (global-state :p3-roll)
              (global-state :p4-roll))
     (let [ordered-players (map :name (->players app-state))
           forward (clojure.string/join " -> " ordered-players)
           backward (clojure.string/join " -> " (reverse ordered-players))
           length (apply str (repeat (count forward) " "))]
       [:div
        [:p "Now begins the setup phase. The order of play follows below! :)"]
        [:p (str forward " - - -> " backward)]
        [:button [:a {:href "#/roller"} "Nice! Let's begin."]]]))])
