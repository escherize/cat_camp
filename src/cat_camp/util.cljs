(ns cat-camp.util
  (:require [cat-camp.session :refer [global-put!
                                      global-state]]))

(defn roll []
  (+ (inc (rand-int 6))
     (inc (rand-int 6))))

(defn rotate-while
  "Rotates a collection left while (pred item) is true. Will return a
  unrotated sequence if (pred item) is never true. Executes in O(n) time."
  [pred coll]
  (let [head (drop-while pred coll)]
    (take (count coll) (concat head coll))))

(defn roll-dice []
  (let [outcome (roll)
;        whose-roll (global-state :current-player)
        ]
    (global-put! :turn-count (inc (global-state :turn-count)))
    (global-put! :last-roll outcome)
    (global-put! :history (update-in (global-state :history) [(global-state :last-roll)] inc))))

(defn ->players [app-state]
  (let [unordered
        [{:name (get @app-state :p1)
          :order-roll (get @app-state :p1-roll)}
         {:name (get @app-state :p2)
          :order-roll (get @app-state :p2-roll)}
         {:name (get @app-state :p3)
          :order-roll (get @app-state :p3-roll)}
         {:name (get @app-state :p4)
          :order-roll (get @app-state :p4-roll)}]
        top-roll (apply max (map :order-roll unordered))
        ordered (rotate-while #(not= (:order-roll %) top-roll) unordered)]
    ordered))
