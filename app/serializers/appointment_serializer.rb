class AppointmentSerializer
  include JSONAPI::Serializer
  require 'date'

  attributes :getSalonDateAppts

  def getSalonDateAppts(salonId, aptdate)
    current_appts = object.appointments.where('salon_id = ? AND apptdate = ?', salonId, aptdate)
    return current_appts
  end
  
end
