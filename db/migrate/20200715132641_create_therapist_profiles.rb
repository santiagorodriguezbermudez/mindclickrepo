class CreateTherapistProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :therapist_profiles do |t|
      t.text :profile_description
      t.text :professional_description
      t.text :session_description
      t.references :therapist, foreign_key: true

      t.timestamps
    end
  end
end
