const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  ccode: {
    type: String,
    required: true
  },
  cname: {
    type: String,
    required: true
  },
  fax: {
    type: String
  },
  crnumber: {
    type: String
  },
  shipaddress: {
    type: String,
    required: true
  },
  shipcity: {
    type: String,
    required: true
  },
  contactperson: {
    type: String,
    required: true
  },
  shipstate: {
    type: String,
    required: true
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
  billaddress: {
    type: String,
    required: true
  },
  billcity: {
    type: String,
    required: true
  },
  billstate: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Customer = mongoose.model("customer", CustomerSchema);
