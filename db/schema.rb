# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_07_16_130655) do

  create_table "personalities", force: :cascade do |t|
    t.integer "practico"
    t.integer "directo"
    t.integer "cercano"
    t.integer "compasivo"
    t.integer "humor"
    t.integer "espiritual"
    t.integer "intuitivo"
    t.integer "cientifico"
    t.integer "therapist_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["therapist_id"], name: "index_personalities_on_therapist_id"
  end

  create_table "therapist_profiles", force: :cascade do |t|
    t.text "profile_description"
    t.text "professional_description"
    t.text "session_description"
    t.integer "therapist_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["therapist_id"], name: "index_therapist_profiles_on_therapist_id"
  end

  create_table "therapists", force: :cascade do |t|
    t.string "name"
    t.integer "phone"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "profile_description"
    t.string "professional_description"
    t.string "session_description"
    t.string "profile_picture_file_name"
    t.string "profile_picture_content_type"
    t.integer "profile_picture_file_size"
    t.datetime "profile_picture_updated_at"
    t.string "cover_picture_file_name"
    t.string "cover_picture_content_type"
    t.integer "cover_picture_file_size"
    t.datetime "cover_picture_updated_at"
  end

end
