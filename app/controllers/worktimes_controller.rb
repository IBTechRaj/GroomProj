class WorktimesController < ApplicationController
    def index
        @worktimes = Worktime.all
        render json:  @worktimes
      end
    
      # GET /cats/1
  def show
    render json: @worktime
  end

      def create
        @worktime = Worktime.new(worktime_params)
    
        if @worktime.save!
          render json: @worktime, status: :created, location: @worktime
        else
          render json: @worktime.errors, status: :unprocessable_entity
        end
      end
    
      private
    
      def worktime_params
        params.require(:worktime).permit(:weekday, :opens, :closes, :salon_id)
      end
end
