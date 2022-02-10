class CreateSalons < ActiveRecord::Migration[6.1]
  def change
    create_table :salons do |t|
      t.string :name
      t.string :address1
      t.string :address2
      t.integer :pincode
      t.string :city
      t.string :landline
      t.integer :mobile
      t.string :gstin
      t.string :pan
      t.integer :chairs
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
