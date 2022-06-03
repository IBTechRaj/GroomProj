class AppointmentSerializer
  include JSONAPI::Serializer
  require 'date'

  attributes :getSalonDateAppts, :getSalonUserAppts

  def getSalonDateAppts(salonId, aptdate)
    current_appts = object.appointments.where('salon_id = ? AND apptdate = ?', salonId, aptdate)
    return current_appts
  end
  def getSalonUsersAppts(salonId, suser)
    current_su = Appointment.where(salon_id: :salonId, user_id: :suser)
    return current_su
  end
end
