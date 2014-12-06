(ns cat-camp.views.pages
  (:require [cat-camp.views.home-page :refer [home-page]]
            [cat-camp.views.roll-order-page :refer [roll-order-page]]
            [cat-camp.views.roller-page :refer [roller-page]]))

(def pages {:home-page home-page
            :roll-order-page roll-order-page
            :roller-page roller-page})
