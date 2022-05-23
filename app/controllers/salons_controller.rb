class SalonsController < ApplicationController
  before_action :set_salon, only: [:show, :update, :destroy]

  def index
    @salons = Salon.all
    render json:  @salons.map { |salon|
    SalonSerializer.new(salon).serializable_hash[:data][:attributes]
  }
  end

  
  # GET /cats/1
  def show
    render json: @salon
  end

  def create
        @salon = Salon.new(salon_params)
    
        if @salon.save!
          render json: SalonSerializer.new(@salon).serializable_hash[:data][:attributes], status: :created, location: @salon
        else
          render json: @salon.errors, status: :unprocessable_entity
        end
  end
  # PATCH/PUT /salons/1
  def update
    if @salon.update(salon_params)
      render json: @salon
    else
      render json: @salon.errors, status: :unprocessable_entity
    end
  end

  

  private
  def set_salon
    @salon = Salon.find(params[:id])
  end

  def salon_params
    # require(:salon).
    params.permit(:name, :address1, :address2, :pincode, :city, :landline, :mobile, :gstin, :pan, :chairs, :user_id, :weekday, :opens, :closes, :image)
  end
end
# before_action :set_cat, only: [:show, :update, :destroy]

#   # GET /cats
#   def index
#     @cats = Cat.all

#     render json: @cats
#   end

#   # GET /cats/1
#   def show
#     render json: @cat
#   end

#   # POST /cats
#   def create
#     @cat = Cat.new(cat_params)

#     if @cat.save
#       render json: @cat, status: :created, location: @cat
#     else
#       render json: @cat.errors, status: :unprocessable_entity
#     end
#   end

#   # PATCH/PUT /cats/1
#   def update
#     if @cat.update(cat_params)
#       render json: @cat
#     else
#       render json: @cat.errors, status: :unprocessable_entity
#     end
#   end

#   # DELETE /cats/1
#   def destroy
#     @cat.destroy
#   end

#   private
#     # Use callbacks to share common setup or constraints between actions.
#     def set_cat
#       @cat = Cat.find(params[:id])
#     end

#     # Only allow a list of trusted parameters through.
#     def cat_params
#       params.require(:cat).permit(:name)
#     end
