class SalonsController < ApplicationController
  def index
    @salons = Salon.all
    render json: {data: @salons}
  end

  private

  def salons_params
    params.require(:salon).permit(:name, :address1, :address2, :pincode, :city, :landline, :mobile, :gstin, :pan, :chairs)
  end
end
