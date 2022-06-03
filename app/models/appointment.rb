class Appointment < ApplicationRecord
  require 'date'
  belongs_to :salon
  belongs_to :user

  validates :apptdate, presence: true
  validates :appttime, presence: true
  validates :service, presence: true

#   def self.getForecast(lat, lon)
#     lat = lat.to_f
#     lon = lon.to_f
#     key = <api key here>
#     url = "https://api.darksky.net/forecast/" + key + "/#{lat},#{lon}"
#     response = HTTParty.get(url)
#     return response.parsed_response
#     ## optionally perform transformation to this data, then return
#  end
def self.getSalonDateAppts(salonId, aptdate)
  current_appts = Appointment.where('salon_id = ? AND apptdate = ?', salonId, aptdate).pluck(:appttime)
  today_list = current_appts.map{| apt |
apt.strftime("%H:%M")
  }
  return today_list
end
def self.getSalonUsersAppts(salonId, suser)
  current_su = Appointment.where(salon_id: :salonId, user_id: :suser)
  return current_su
end
end
