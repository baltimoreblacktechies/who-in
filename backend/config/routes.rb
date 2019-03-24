Rails.application.routes.draw do
  resources :users
  resources :reviews
  resources :events do
    resources :attendees
  end
  post "auth/login", to: "authentication#login"
  # get "*/a", to: "application#not_found"
end
