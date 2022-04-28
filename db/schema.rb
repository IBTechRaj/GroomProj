# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_04_27_122433) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appointments", force: :cascade do |t|
    t.date "apptdate"
    t.datetime "appttime"
    t.string "service"
    t.bigint "salon_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["salon_id"], name: "index_appointments_on_salon_id"
    t.index ["user_id"], name: "index_appointments_on_user_id"
  end

  create_table "contacts", force: :cascade do |t|
    t.string "subject"
    t.string "name"
    t.string "email"
    t.text "message"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "salons", force: :cascade do |t|
    t.string "name"
    t.string "address1"
    t.string "address2"
    t.integer "pincode"
    t.string "city"
    t.string "landline"
    t.string "mobile"
    t.string "gstin"
    t.string "pan"
    t.integer "chairs"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_salons_on_user_id"
  end

  create_table "services", force: :cascade do |t|
    t.string "stype"
    t.integer "sduration"
    t.integer "sprice"
    t.bigint "salon_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["salon_id"], name: "index_services_on_salon_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "jti", null: false
    t.string "first_name"
    t.string "last_name"
    t.integer "gender", default: 0
    t.date "date_of_birth"
    t.string "mobile"
    t.integer "usertype", default: 0
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["jti"], name: "index_users_on_jti", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  create_table "worktimes", force: :cascade do |t|
    t.integer "weekday"
    t.datetime "opens"
    t.datetime "closes"
    t.bigint "salon_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["salon_id"], name: "index_worktimes_on_salon_id"
  end

  add_foreign_key "appointments", "salons"
  add_foreign_key "appointments", "users"
  add_foreign_key "salons", "users"
  add_foreign_key "services", "salons"
  add_foreign_key "worktimes", "salons"
end
