const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/k8s-login', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const User = mongoose.model("User", new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String
}));

app.post('/signup', async (req, res) => {
  
    console.log("Received register request."); 
    console.log("Request body:", req.body);     
    
    const { firstName, lastName, email, password } = req.body;
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("Email already exists:", email);
      return res.status(400).json({ message: "Email already exists" });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
  
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
  
    try {
      const savedUser = await newUser.save();
      console.log("User saved:", savedUser);  
      res.status(201).json(savedUser);
    } catch (err) {
      console.log("Error:", err);
      res.status(400).json(err);
    }
});
  
app.post('/signin', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(400).json({ message: "Email does not exist" });  // <-- Specific message here
      }
  
      const validPassword = await bcrypt.compare(password, user.password);
  
      if (!validPassword) {
        return res.status(400).json({ message: "Incorrect password" });  // <-- Specific message here
      }
  
      res.status(200).json({ message: "Logged in successfully" });  // <-- Success message here
    } catch (err) {
      console.log("Error:", err);
      res.status(400).json(err);
    }
});
  
const PORT = process.env.PORT || 3002;
  
app.listen(PORT, () => {
    console.log(`Login Service running on port ${PORT}`);
});
  