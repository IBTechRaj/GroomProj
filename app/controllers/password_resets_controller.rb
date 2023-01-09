class PasswordResetsController < ApplicationController
  def new
  end

  def edit
  end

  def forgot
    # if params[:email].present? # check if email is present
    #   return render json: {error: 'Email not present'}
    # end

    user = User.find_by(email: params[:email]) # if present find user by email
puts user
    if user#.present?
      token=user.generate_password_token! #generate pass token
      # token=SecureRandom.hex(10)
      # user.update!(reset_digest: token)
      if user.reset_password_token != nil
        PasswordMailer.password_reset(user).deliver_now
      # SEND EMAIL HERE
      # render json: {status: 'ok'}, status: :ok
      render json: {alert: 'Reset email sent'}
        else
      render json: {error: ['Email address not found. Please check and try again.']}
        end
    end
  end

  def reset
    token = params[:token].to_s

    # if params[:email].blank?
    #   return render json: {error: 'Token not present'}
    # end

    user = User.find_by(reset_password_token: token)

    if user && user.password_token_valid?
      if user.reset_password!(params[:password])
        render json: {status: 'ok'}, status: :ok
      else
        render json: {error: user.errors.full_messages}, status: :unprocessable_entity
      end
    else
      render json: {error:  ['Link not valid or expired. Try generating a new link.']}, status: :not_found
    end
  end
end
