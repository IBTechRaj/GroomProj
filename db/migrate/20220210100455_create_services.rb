class CreateServices < ActiveRecord::Migration[6.1]
  def change
    create_table :services do |t|
      t.string :stype
      t.integer :sduration
      t.integer :sprice
      t.references :salon, null: false, foreign_key: true

      t.timestamps
    end
  end
end
