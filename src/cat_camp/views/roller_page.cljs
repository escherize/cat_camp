(ns cat-camp.views.roller-page
  (:require [cat-camp.util :as u]
            [cat-camp.session :as ses :refer [global-state
                                              global-put!]]))

(defn render-player [player]
  (let [players-turn (= (global-state :whose-turn) player)]
    (if players-turn
      [:li.current
       (:name player)]
      [:li (:name player)])))

(defn roller-page []
  (let [players (u/->players ses/app-state)]

    ;; first roll
    (when (not (pos? (global-state :turn-count))) (u/roll-dice))

    ;; assign turn
    (global-put!
     :whose-turn
     (nth players (rem (global-state :turn-count)
                       (count players))))
    [:div.row
     [:div.col-sm-3
      [:div#roll.hex1 (global-state :last-roll)]
      [:input#big-btn.btn {:type "button"
                           :value "Roll!"
                           :on-click #(u/roll-dice)}]]
     [:div.col-sm-2
      [:ul.players
       (doall (for [p players] (render-player p)))]]
     [:div.col-sm-7
      [:div#histogram "many gfx"]]]))

(comment
  [:span (str "turn #:" (global-state :turn-count))]
  )
