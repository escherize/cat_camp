(ns cat-camp.views.pages
  (:require [cat-camp.views.home-page :as home]
            [cat-camp.views.roll-order-page :as roll-order]
            [cat-camp.views.roller-page :as roller]))

(def pages
  {:home-page       home/home-page
   :roll-order-page roll-order/roll-order-page
   :roller-page     roller/roller-page})
