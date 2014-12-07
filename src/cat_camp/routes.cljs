(ns cat-camp.routes
  (:require [secretary.core :as secretary :include-macros true :refer [defroute]]
            [cat-camp.session :as s]
            [cat-camp.views.pages :refer [pages]]
            [goog.events :as events]
            [goog.history.EventType :as EventType])
  (:import goog.History))

;; ----------
;; History
(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))
;; need to run this after routes have been defined

;; ----------
;; Routes
(defn app-routes []
  (secretary/set-config! :prefix "#")

  (defroute "/" []
    (s/global-put! :current-page (pages :home-page)))

  (defroute "/roll-order" []
    (s/global-put! :current-page (pages :roll-order-page)))

  (defroute "/roller" []
    (s/global-put! :current-page (pages :roller-page)))

  (hook-browser-navigation!)
  )
