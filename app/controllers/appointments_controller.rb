class AppointmentsController < ApplicationController
   
    before_action :set_appointment, only: [:show, :update, :destroy]
    
    def index
        @appointments = Appointment.all
        render json: @appointments
    end
    
    def create
        @appointment = Appointment.new(appointment_params)
    
        if @appointment.save!
        render json: @appointment, status: :created, location: @appointment
        else
        render json: @appointment.errors, status: :unprocessable_entity
        end
    end
    
    def getSalonDateAppts
        # @appointments = Appointment.all
        # render json:  @appointments.map { |appt|
        # AppointmentSerializer.new(appt).serializable_hash[:data][:attributes]
    # }
        render json: Appointment.getSalonDateAppts(params[:salonId], params[:aptdate])
    end

           # DELETE /cats/1
    def destroy
        @appointment.destroy
    end
    
    private
    
    def set_appointment
        @appointment = Appointment.find(params[:id])
    end
    
    def appointment_params
        params.permit(:apptdate, :appttime, :service, :salon_id, :user_id, :getSalonDateAppts)
    end
         
end
