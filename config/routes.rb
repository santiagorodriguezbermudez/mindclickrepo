Rails.application.routes.draw do
  resources :therapists, only: [:index, :show]
  root to: 'therapists#index'
end
