(ns cat-camp.views.roller-page
  (:require [cat-camp.util :as u]
            [cat-camp.session :as ses :refer [global-state
                                              global-put!]]
            [reagent.core :as reagent]))

(defn render-player [player]
  (let [players-turn (= (global-state :whose-turn) player)]
    (if players-turn
      [:li.current
       (:name player)]
      [:li (:name player)])))

(defn roller-render []
  [:div
   [:div#d3-node [:svg ]]
   [:input#big-btn.btn {:type "button"
                        :value "Roll!"
                        :on-click #(u/roll-dice)}]]
  #_(let [players (u/->players ses/app-state)]

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
        [:div#d3-node [:svg ]]]]))

(defn roller-did-mount []
  (let [my-data [{:x 1 :y 0}
                 {:x 2 :y 3}
                 {:x 3 :y 4}
                 {:x 4 :y 1}
                 {:x 5 :y 2}]]
    (.addGraph
     js/nv (fn []
             (let [chart (.. js/nv -models lineChart
                             (margin #js {:left 100})
                             (useInteractiveGuideline true)
                             (transitionDuration 350)
                             (showLegend true)
                             (showYAxis true)
                             (showXAxis true))]
               (.. chart -xAxis
                   (axisLabel "x-axis")
                   (tickFormat (.format js/d3 ",r")))

               (.. chart -yAxis
                   (axisLabel "y-axis")
                   (tickFormat (.format js/d3 ",r")))

               (.. js/d3
                   (select "#d3-node svg")
                   (datum (clj->js [{:values my-data
                                     :color "red"}]))
                   (call chart)))))))

(defn roller-page []
  (reagent/create-class {:render roller-render
                         :component-did-mount roller-did-mount}))

(comment

  [:span (str "turn #:" (global-state :turn-count))]

  )
