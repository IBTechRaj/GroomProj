class User < ApplicationRecord
 include Devise::JWT::RevocationStrategies::JTIMatcher

  devise :database_authenticatable, :registerable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: self

  has_many :appointments 
  has_many :salons
  
VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i.freeze

enum gender: %i[female male other]
enum usertype: %i[client sprovider admin]
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :gender, presence: true
    validates :date_of_birth, presence: true
    validates :email, presence: true, length:  3..244 ,
        format: { with: VALID_EMAIL_REGEX },
        uniqueness: {
          message: ->(object, data) do
            "Hey #{object.email}, #{data[:value]} is already taken."
          end
        }
    
    validates :usertype, presence: true
    validates :mobile, presence: true, length: { is: 10 }

  def jwt_payload
    super.merge('foo' => 'bar')
  end

  def full_name
    return "#{first_name} #{last_name}".strip if first_name || last_name
    'Annonymous'
  end
end
