class SpcontactsMailer < ApplicationMailer
  default :from => 'support@groomwell.in'
  
  def spcontact_email(spcontact)
    @spcontact = spcontact
    mail( to: @spcontact.email,
    subject: @spcontact.subject )
  end
end
