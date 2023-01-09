class PasswordMailer < ApplicationMailer
  default :from => 'mymotorwash@gmail.com'
  
  def password_reset(user)
    @user = user
    mail to: @user.email, subject: 'Passwsord Reset'
  end
end
