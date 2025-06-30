// models/Email.js
import mongoose from 'mongoose';

const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
});

const Email = mongoose.model('Email', emailSchema, 'Email'); // Explicitly using 'Email' collection
export default Email;