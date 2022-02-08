class AddFirstNameLastNameGenderDobMobileLoPincodeToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :gender, :integer, default: 0
    add_column :users, :date_of_birth, :date
    add_column :users, :mobile, :integer
    add_column :users, :usertype, :integer, default: 0
  end
end
