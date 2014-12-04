(ns cat-camp.views.pages
  (:require [cat-camp.views.home-page :refer [home-page]]
            [cat-camp.views.about-page :refer [about-page]]))

(def pages {:home-page home-page
            :about-page about-page})
