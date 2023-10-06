const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
      name: {
        type: String,
        required: true,
      },
      age: {
        type: Number,
        required: true,
      },
      bloodGroup: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      phoneNumber: {
        type: String,
        required: true,
      },   
});

  const Donor = mongoose.model('Donor', donorSchema);
  module.exports = Donor;