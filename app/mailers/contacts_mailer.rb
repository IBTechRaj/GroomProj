class ContactsMailer < ApplicationMailer
  default :from => 'support@groomwell.in'
 
  def contact_email(contact)
    @contact = contact
    mail( to: @contact.email,
    subject: @contact.subject )
  end
end
