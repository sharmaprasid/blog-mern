const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    
  },
  profileUrl: {
    type: String,
    default:"",
  },
});
const User = mongoose.model("User", UserSchema);
module.exports = User;