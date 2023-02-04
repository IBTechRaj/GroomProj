Reference for backend of this project :
https://dakotaleemartinez.com/tutorials/devise-jwt-api-only-mode-for-authentication/

https://betterprogramming.pub/how-to-upload-images-to-a-rails-api-and-get-them-back-again-b7b3e1106a13

Also try this:
https://dakotaleemartinez.com/tutorials/react-redux-auth-for-use-with-rails-api-with-devise-jwt/

# Important guidelines for the Dev:

eval `ssh-agent -s`
ssh-add ~/.ssh/id_ed25519
ssh-add -l



other gmail account pushed last time. now trying to fix today(Jan 5, 2023)
changed ~/.gitconfig file with ibtechraj credentials and trying

# Password Reset steps
user model:
-----
def generate_password_token!
 self.reset_password_token = generate_token
 self.reset_password_sent_at = Time.now.utc
 save!
end

def password_token_valid?
 (self.reset_password_sent_at + 4.hours) > Time.now.utc
end

def reset_password!(password)
 self.reset_password_token = nil
 self.password = password
 save!
end
  
private

def generate_token
 SecureRandom.hex(10)
end
-----
PasswordsController :
...
...
Mailers - password_mailer :
...
...
views - password_reset folder plus two view files
routes.rb :
     post 'forgot_password', to: 'password_resets#forgot'
     post 'reset_password', to: 'password_resets#reset'

To do : 2.2.23
- separate mailers
- after booking, screen moves up
- email copies to me
- 