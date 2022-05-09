class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :email, :created_at, :usertype
  
  has_many :salons
end
