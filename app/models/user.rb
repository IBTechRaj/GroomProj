class User < ApplicationRecord
 include Devise::JWT::RevocationStrategies::JTIMatcher

  devise :database_authenticatable, :registerable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: self

  has_many :appointments 
  has_many :salons
  # has_one_attached :image
  
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

  # def full_name
  #   return "#{first_name} #{last_name}".strip if first_name || last_name
  #   'Annonymous'
  # end

  def generate_password_token!
 self.reset_password_token = generate_token
 self.reset_password_sent_at = Time.now.utc
 save!
end

def password_token_valid?
 (self.reset_password_sent_at + 4.hours) > Time.now.utc
end

def reset_password!(password)
 self.reset_password_token = nil
 self.password = password
 save!
end
  
private

def generate_token
 SecureRandom.hex(10)
end

end
