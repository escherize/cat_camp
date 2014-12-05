(ns cat-camp.views.pages
  (:require [cat-camp.views.home-page :refer [home-page]]
            [cat-camp.views.about-page :refer [about-page]]
            [cat-camp.views.roll-order-page :refer [roll-order-page]]))

(def pages {:home-page home-page
            :about-page about-page
            :roll-order-page roll-order-page})
