(ns cat-camp.core
  (:require [reagent.core :as reagent :refer [atom]]
            [secretary.core :as sec :include-macros true]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [cat-camp.session :as s]
            [cat-camp.routes :as routes]
            [cat-camp.views.common :as common])
  (:import goog.History))

;; -------------------------
;; State
;; (defonce app-state
;;   (atom {:text "Hello, this is: "}))

;; (defn global-state [k & [default]]
;;   (clojure.core/get @app-state k default))

;; (defn global-put! [k v]
;;   (swap! app-state assoc k v))

;; -------------------------
;; Views

;; (defmulti page identity)

;; (defmethod page :page1 [_]
;;   [:div [:h2 (global-state :text) "Page 1"]
;;    [:div [:a {:href "#/page2"} "go to page 2"]]])

;; (defmethod page :page2 [_]
;;   [:div [:h2 (global-state :text) "Page 2"]
;;    [:div [:a {:href "#/"} "go to page 1"]]])

;; (defmethod page :default [_]
;;   [:div "Invalid/Unknown route"])

;; -------------------------
;; Routes
;; (sec/set-config! :prefix "#")

;; (sec/defroute "/" []
;;   (global-put! :current-page :page1))

;; (sec/defroute "/page2" []
;;   (global-put! :current-page :page2))

;; (defn main-page []
;;   [:div
;;    [page (global-state :current-page)]])

;; -------------------------
;; Initialize app

(defn page-render []
  [:div.container
   [common/header]
   [(s/global-state :current-page)]
   [common/footer]])

(defn page-component []
  (reagent/create-class {:component-will-mount routes/app-routes
                         :render page-render}))

(defn init! []
  (s/global-put! :current-page :home-page)
  (reagent/render-component [page-component]
                            (.getElementById js/document "app")))

;; -------------------------
;; History
;; (defn hook-browser-navigation! []
;;   (doto (History.)
;;     (events/listen
;;      EventType/NAVIGATE
;;      (fn [event]
;;        (sec/dispatch! (.-token event))))
;;     (.setEnabled true)))
;; ;; need to run this after routes have been defined
;; (hook-browser-navigation!)
