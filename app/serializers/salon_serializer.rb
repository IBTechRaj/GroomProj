class SalonSerializer
  include FastJsonapi::ObjectSerializer
  # include JSONAPI::Serializer
  attributes :id, :name, :email, :address1, :address2, :pincode, :city, :landline, :mobile, :gstin, :pan, :chairs, :user_id, :weekday, :opens, :closes, :get_image_url
end
