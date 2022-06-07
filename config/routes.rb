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
  # resources :worktimes
  root 'contacts#index'
  resources :contacts
  resources :appointments
  get '/utils/:id', to: 'utils#usersalon'
  get 'appointments/:salonId/:aptdate', to: 'appointments#getSalonDateAppts'
  get 'services/:salon_id', to: 'services#getSalonServices'
  resources :services
  # get '/services/:salonId/getSalonServices', to: 'services#getSalonServices'

end
