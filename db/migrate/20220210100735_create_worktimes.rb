class CreateWorktimes < ActiveRecord::Migration[6.1]
  def change
    create_table :worktimes do |t|
      t.integer :weekday
      t.datetime :opens
      t.datetime :closes
      t.references :salon, null: false, foreign_key: true

      t.timestamps
    end
  end
end
