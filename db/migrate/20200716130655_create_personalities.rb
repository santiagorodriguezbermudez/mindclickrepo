class CreatePersonalities < ActiveRecord::Migration[5.2]
  def change
    create_table :personalities do |t|
      t.integer :practico
      t.integer :directo
      t.integer :cercano
      t.integer :compasivo
      t.integer :humor
      t.integer :espiritual
      t.integer :intuitivo
      t.integer :cientifico
      t.references :therapist, foreign_key: true

      t.timestamps
    end
  end
end
