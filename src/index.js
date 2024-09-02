
const express = require('express');
const { Pool } = require('pg');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { Configuration, OpenAIApi } = require('openai');
const { pipeline } = require('transformers');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
require('dotenv').config();

const app = express();
app.use(express.json());

// PostgreSQL connection
const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// OpenAI API setup
const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.PREMIUM_API_KEY,
}));

// Open-Source AI Model
const model = pipeline('text-generation', 'EleutherAI/gpt-j-6B');

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) return res.status(403).send('Token is required');

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(500).send('Failed to authenticate token');
    req.userId = decoded.id;
    next();
  });
};

// Middleware to verify user role
const verifyRole = (role) => (req, res, next) => {
  if (req.user.role !== role) {
    return res.status(403).json({ error: 'Access Denied' });
  }
  next();
};

// Free AI Endpoint
app.post('/ai/free', verifyToken, verifyRole('free'), async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await model(prompt, {
      max_length: 150,
      do_sample: true,
    });

    res.json({ result: response[0].generated_text });
  } catch (error) {
    console.error('Error with Open-Source AI:', error);
    res.status(500).json({ error: 'Open-Source AI failed' });
  }
});

// Premium AI Endpoint
app.post('/ai/premium', verifyToken, verifyRole('premium'), async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await openai.createCompletion({
      model: "gpt-4",
      prompt: prompt,
      max_tokens: 300,
      temperature: 0.7,
    });

    res.json({ result: response.data.choices[0].text });
  } catch (error) {
    console.error('Error with Premium AI:', error);
    res.status(500).json({ error: 'Premium AI failed' });
  }
});

// Stripe Subscription
app.post('/subscribe', async (req, res) => {
  const { email, paymentMethodId } = req.body;

  try {
    const customer = await stripe.customers.create({
      email,
      payment_method: paymentMethodId,
      invoice_settings: { default_payment_method: paymentMethodId },
    });

    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ plan: 'premium_plan_id' }], // Replace with your Stripe plan ID
      expand: ['latest_invoice.payment_intent'],
    });

    res.json({ subscription });
  } catch (error) {
    console.error('Stripe error:', error);
    res.status(500).json({ error: 'Subscription failed' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
