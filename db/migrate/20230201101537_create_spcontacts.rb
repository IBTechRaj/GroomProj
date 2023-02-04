class CreateSpcontacts < ActiveRecord::Migration[6.1]
  def change
    create_table :spcontacts do |t|
      t.string :subject
      t.string :name
      t.string :email
      t.text :message

      t.timestamps
    end
  end
end
