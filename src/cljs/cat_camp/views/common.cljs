(ns cat-camp.views.common
  (:require  [cat-camp.session :as s]))

(defn active? [state val]
  (if (= state val) "active" ""))

(defn header []
  [:h3 "Catan Companion"])

(defn footer []
  [:div.footer])

