class ServicesController < ApplicationController
  def index
    @services = Service.all
    render json: {data: @services}
  end

  private

  def service_params
    params.require(:service).permit(:stype, :sduration, :sprice, :salon_id)
  end
end
