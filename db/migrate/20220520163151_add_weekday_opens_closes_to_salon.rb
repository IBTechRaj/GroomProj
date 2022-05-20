class AddWeekdayOpensClosesToSalon < ActiveRecord::Migration[6.1]
  def change
    add_column :salons, :opens, :time
    add_column :salons, :closes, :time
    add_column :salons, :weekday, :integer
  end
end
