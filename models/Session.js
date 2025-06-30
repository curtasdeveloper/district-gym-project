// models/SessionBook.js
import mongoose from 'mongoose';

const sessionBookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  sessionType: {
    type: String,
    required: true,
    trim: true,
  },
  preferredDate: {
    type: Date,
    required: true,
  },
});

const SessionBook = mongoose.model('SessionBook', sessionBookSchema, 'SessionBook'); // Updated to 'SessionBook' collection
export default SessionBook;