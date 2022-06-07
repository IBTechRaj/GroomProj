class ServiceSerializer
  # include FastJsonapi::ObjectSerializer
  include JSONAPI::Serializer
  attributes :getSalonServices

  def getSalonServices(salonId)
    current_services = object.services.where('salon_id = ? ', salonId)
    return current_services
  end
end
