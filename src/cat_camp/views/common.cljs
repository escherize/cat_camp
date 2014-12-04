(ns cat-camp.views.common
  (:require  [cat-camp.session :refer [global-state]]))

(defn active? [state val]
  (if (= state val) "active" ""))

(defn header []
  [:h3 "Catan Companion"]
  )
