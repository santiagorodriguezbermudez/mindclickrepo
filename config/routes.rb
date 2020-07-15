Rails.application.routes.draw do
  resources :therapists, only: [:index, :show]
end
