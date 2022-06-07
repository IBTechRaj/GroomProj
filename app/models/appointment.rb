class Appointment < ApplicationRecord
  require 'date'
  belongs_to :salon
  belongs_to :user

  validates :apptdate, presence: true
  validates :appttime, presence: true
  validates :service, presence: true


def self.getSalonDateAppts(salonId, aptdate)
  current_appts = Appointment.where('salon_id = ? AND apptdate = ?', salonId, aptdate).pluck(:appttime)
  today_list = current_appts.map{| apt |
apt.strftime("%H:%M")
  }
  return today_list
end

end
