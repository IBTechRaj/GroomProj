class SalonSerializer
  include FastJsonapi::ObjectSerializer
  attributes :salon_id, :get_image_url
end
