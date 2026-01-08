class AddSeasonColumnToOriginalCards < ActiveRecord::Migration[8.0]
  def change
    add_column :original_cards, :season, :integer
  end
end
