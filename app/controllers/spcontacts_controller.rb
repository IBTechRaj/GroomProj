class SpcontactsController < ApplicationController
    def index
   
    end
   
    def new
      # @contact = Contact.new
    end
   
    def create
      @spcontact = Spcontact.new(spcontact_params)
      if @spcontact.save!
        SpcontactsMailer.spcontact_email(@spcontact).deliver_now
      else
        render :new
      end
    end
   
    def show
      @spcontact = Spcontact.find_by(id: params[:id])
    end
   
    private 
   
    def spcontact_params
      params.permit(
        :subject,
        :name,
        :email,
        :message
      )
    end
end
