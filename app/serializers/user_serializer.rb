class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :email, :mobile, :first_name, :created_at, :usertype, :salon_ids

  has_many :salons

  def salon_ids
    object.salon_ids
  end
end
