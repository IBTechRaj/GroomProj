class SpbookingmailersController < ApplicationController
    def index
   
    end
   
    def new
    end
   
    def sp_mails
      SpbookingsMailer.spbooking_email(booking_params).deliver_now
    end
   
    def show
    end
   
    private 
   
    def booking_params
      params.permit(
        :subject,
        :name,
        :email,
        :service,
        :start_date,
        :appt_time,
        :message,
        :salon_name,
        :salon_phone,
        :salon_mobile
      )
    end
  end
  