(ns cat-camp.util
  (:require [cat-camp.session :as s]))

(defn roll []
  (+ (inc (rand-int 6))
     (inc (rand-int 6))))

(defn rotate-while
  "Rotates a collection left while (pred item) is true. Will return a
  unrotated sequence if (pred item) is never true. Executes in O(n) time."
  [pred coll]
  (let [head (drop-while pred coll)]
    (take (count coll) (concat head coll))))


(defn named-players-names []
  (->> @s/app-state
       :players
       vals
       (map :name)
       (remove #(= % ""))
       set))

(defn named-players []
  (count (named-players-names)))

(defn roll-dice []
  (s/global-put! :turn-count (inc (s/global-state :turn-count)))
  (s/global-put! :last-roll (roll))
  (s/global-put! :history
                 (update-in (s/global-state :history)
                            [(s/global-state :last-roll)] inc)))

(defn order-players-by-order-roll []
  (let [unordered (->> @s/app-state
                       :players
                       vals
                       (remove #(empty? (:name %))))
        top-roll  (apply max
                         (map :order-roll unordered))
        ordered   (rotate-while #(not= (:order-roll %) top-roll)
                                  unordered)]
    ordered))
