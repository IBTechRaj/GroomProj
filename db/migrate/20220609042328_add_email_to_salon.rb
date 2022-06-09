class AddEmailToSalon < ActiveRecord::Migration[6.1]
  def change
    add_column :salons, :email, :string
  end
end
