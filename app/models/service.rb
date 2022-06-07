class Service < ApplicationRecord
  belongs_to :salon

  validates :stype, presence: true
  validates :sduration, presence: true
  validates :sprice, presence: true

  def self.getSalonServices(salonId)
    current_services = Service.where('salon_id = ? ', salonId)
    return current_services
  end

end
