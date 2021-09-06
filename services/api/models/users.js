const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String , required: true},
  email: { type: String , required: true},
  phone: { type: String,required: true},
  desig: { type: String , required: true},
  joinDate: { type: Date },
  // imgUrl: { type: String },
});

module.exports = mongoose.model("users", usersSchema);
