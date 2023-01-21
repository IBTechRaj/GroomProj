class PasswordMailer < ApplicationMailer
  default :from => 'support@groomwell.in'
  
  def password_reset(user)
    @user = user
    mail to: @user.email, subject: 'Passwsord Reset'
  end
end
