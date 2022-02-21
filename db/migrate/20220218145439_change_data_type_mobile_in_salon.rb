class ChangeDataTypeMobileInSalon < ActiveRecord::Migration[6.1]
  def change
    change_column(:salons, :mobile, :string)
  end
end
