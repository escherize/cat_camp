(ns cat-camp.routes
  (:require [secretary.core :as sec :include-macros true]
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
       (sec/dispatch! (.-token event))))
    (.setEnabled true)))
;; need to run this after routes have been defined

;; ----------
;; Routes
(defn app-routes []
  (sec/set-config! :prefix "#")

  (sec/defroute "/" []
    (s/global-put! :current-page (pages :home-page)))

  (sec/defroute "/roll-order" []
    (s/global-put! :current-page (pages :roll-order-page)))

  (sec/defroute "/roller" []
    (s/global-put! :current-page (pages :roller-page)))

  (hook-browser-navigation!))
