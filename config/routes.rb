Rails.application.routes.draw do
  get 'private/test'
  get '/current_user', to: 'current_user#index'
 devise_for :users, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  resources :salons 
  resources :services
  root 'contacts#index'
  resources :contacts
end
