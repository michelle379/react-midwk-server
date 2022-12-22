const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email:{
    type:String,
    required:true
  },
  productname:{
    type:String,
    required:true
  },
  usertime:{
    type:Date,
    required:true
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;