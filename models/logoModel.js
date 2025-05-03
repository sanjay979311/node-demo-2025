// models/logoModel.js

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const logoSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  image: {
    type: String,
  },
}, { timestamps: true });

module.exports = model('Logo', logoSchema); // ✅ CommonJS export
