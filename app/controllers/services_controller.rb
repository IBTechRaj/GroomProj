class ServicesController < ApplicationController
  def index
    @services = Service.all
    render json: {data: @services}
  end

  def create
    @service = Service.new(service_params)

    if @service.save!
      render json: @service, status: :created, location: @service
    else
      render json: @service.errors, status: :unprocessable_entity
    end
  end

  private

  def service_params
    params.require(:service).permit(:stype, :sduration, :sprice, :salon_id)
  end
end
