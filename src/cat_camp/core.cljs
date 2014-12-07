(ns cat-camp.core
  (:require [reagent.core :as reagent]
            [cat-camp.session :as s]
            [cat-camp.routes :as routes]
            [cat-camp.views.common :as common]))

(defn page-render []
  [:div.container
   [common/header]
   [(s/global-state :current-page)]
   [common/footer]])

(defn page-component [] 
  (reagent/create-class {:component-will-mount routes/app-routes
                         :render page-render}))

;; initialize app
(reagent/render-component [page-component]
                          (.getElementById js/document "app"))
