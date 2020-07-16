class AddFieldsToTherapist < ActiveRecord::Migration[5.2]
  def change
    add_column :therapists, :profile_description, :string
    add_column :therapists, :professional_description, :string
    add_column :therapists, :session_description, :string
    add_column :therapists, :profile_picture_file_name,    :string
    add_column :therapists, :profile_picture_content_type, :string
    add_column :therapists, :profile_picture_file_size,    :integer
    add_column :therapists, :profile_picture_updated_at,   :datetime
    add_column :therapists, :cover_picture_file_name,    :string
    add_column :therapists, :cover_picture_content_type, :string
    add_column :therapists, :cover_picture_file_size,    :integer
    add_column :therapists, :cover_picture_updated_at,   :datetime
  end
end
