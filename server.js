// server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Email from './models/Email.js'; // Ensure the '.js' extension is used for ES modules
import Session from './models/Session.js'; // Import the Session model
import SessionBookWithPrice from './models/Session-with-price.js';


const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/Inquiries", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB - Inquiries'))
  .catch((error) => console.log(error));

// Subscribe route
app.post('/api/subscribe', async (req, res) => {
  try {
    const { email } = req.body;

    // Check if the email is missing
    if (!email) {
      console.log('Email not provided in request body');
      return res.status(400).json({ message: 'Email is required' });
    }

    // Check if the email already exists
    const existingEmail = await Email.findOne({ email });
    if (existingEmail) {
      console.log('Duplicate email:', email); // Debugging log
      return res.status(400).json({ message: 'This email is already subscribed.' });
    }

    // Save the new email
    const newEmail = new Email({ email });
    await newEmail.save();

    res.status(200).json({ message: 'Subscription successful' });
  } catch (error) {
    console.error('Error processing subscription:', error); // Debugging log
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// Book session route
app.post('/api/join-us', async (req, res) => {
  try {
    const { name, email, sessionType, preferredDate } = req.body;

    // Check if required fields are missing
    if (!name || !email || !sessionType || !preferredDate) {
      console.log('Missing required fields in request body');
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if a session with the same name and email already exists
    const existingSession = await Session.findOne({ name, email });
    if (existingSession) {
      console.log('Duplicate session for user:', { name, email }); // Debugging log
      return res.status(400).json({ message: 'You have already booked a session.' });
    }

    // Save the new session
    const newSession = new Session({ name, email, sessionType, preferredDate });
    await newSession.save();

    res.status(200).json({ message: 'Session booking successful' });
  } catch (error) {
    console.error('Error processing session booking:', error); // Debugging log
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});
app.post('/api/session-join', async (req, res) => {
  try {
    const { name, email, sessionType, preferredDate, sessionCount, sessionPrice } = req.body;

    // Check if required fields are missing
    if (!name || !email || !sessionType || !preferredDate || !sessionCount || !sessionPrice) {
      console.log('Missing required fields in request body');
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if a session with the same name and email already exists
    const existingSession = await Session.findOne({ name, email });
    if (existingSession) {
      console.log('Duplicate session for user:', { name, email });
      return res.status(400).json({ message: 'You have already booked a session.' });
    }

    // Save the new session
    const newSession = new SessionBookWithPrice({ name, email, sessionType, preferredDate, sessionCount, sessionPrice });
    await newSession.save();

    res.status(200).json({ message: 'Session booking successful' });
  } catch (error) {
    console.error('Error processing session booking:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});