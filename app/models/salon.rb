class Salon < ApplicationRecord
  belongs_to :user

  has_many :appointments, dependent: :destroy 
  has_many :services
  has_many :businesses
  has_many :worktimes

  validates :name, presence: true
  validates :address1, presence: true
  validates :address2, presence: true
  validates :pincode, presence: true, length: { is: 6 }
  validates :city, presence: true
  # validates :landline, presence: true, length
  validates :mobile, presence: true, length: { is: 10 }
  validates :gstin, presence: true
  validates :pan, presence: true, length: { is: 10 }
  validates :chairs, numericality: {message: "%{value} should be 1 or more"}

end
