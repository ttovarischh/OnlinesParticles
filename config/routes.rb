Rails.application.routes.draw do
  get 'landing/page'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root :to => 'landing#page'
end
