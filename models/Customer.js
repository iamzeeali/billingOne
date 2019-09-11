const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  cCode: {
    type: String,
    required: true
  },
  cName: {
    type: String,
    required: true
  },
  crNumber: {
    type: String
  },
  cPerson: {
    type: String
  },
  email: {
    type: String
  },
  mobile: {
    type: String
  },
  phone: {
    type: String
  },
  fax: {
    type: String
  },
  shipAddress: {
    type: String,
    required: true
  },
  shipCity: {
    type: String,
    required: true
  },
  shipState: {
    type: String,
    required: true
  },
  billAddress: {
    type: String,
    required: true
  },
  billCity: {
    type: String,
    required: true
  },
  billState: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Customer = mongoose.model("customer", CustomerSchema);
