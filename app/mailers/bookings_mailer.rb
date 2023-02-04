class BookingsMailer < ApplicationMailer
  default :from => 'support@groomwell.in'
 
  def booking_email(booking_params)
    @email = booking_params[:email]
    @subject = booking_params[:subject]
    @name = booking_params[:name]
    @start_date = booking_params[:start_date]
    @appt_time = booking_params[:appt_time]
    @service = booking_params[:service]
    @salon_name = booking_params[:salon_name]
    @salon_phone = booking_params[:salon_phone]
    @salon_mobile = booking_params[:salon_mobile]
    mail( to: @email,
    subject: @subject )
  end
end
