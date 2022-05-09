class UtilsController < ApplicationController
    def usersalon
        @sid= Salon.select("id").where(user_id: params[:id])
    
        if @sid
          render json: @sid
        else
          render json: @sid.errors, status: :unprocessable_entity 
        end
      end

end
