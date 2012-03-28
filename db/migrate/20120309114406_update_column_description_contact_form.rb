class UpdateColumnDescriptionContactForm < ActiveRecord::Migration
  def up
    remove_column :contact_forms, :description
    add_column :contact_forms, :description, :text
  end

  def down
    remove_column :contact_forms, :description
    add_column :contact_forms, :description, :string
    
  end
end
