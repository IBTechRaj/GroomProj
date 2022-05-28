class Appointment < ApplicationRecord
  belongs_to :salon
  belongs_to :user

  validates :apptdate, presence: true
  validates :appttime, presence: true
  validates :service, presence: true
end
