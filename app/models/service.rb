class Service < ApplicationRecord
  belongs_to :salon

  validates :stype, presence: true
  validates :sduration, presence: true
  validates :sprice, presence: true
end
