
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const cloudinary = require('cloudinary').v2;
const path = require('path');

const app = express();

// Database Connection
mongoose.connect('mongodb+srv://braynofficial66_db_user:Oh2ivMc2GGP0SbJF@cluster0.zi2ra3a.mongodb.net/website_db')
  .then(() => console.log('Connected to Cyber-DB'))
  .catch(err => console.error(err));

// Cloudinary Config
cloudinary.config({
  cloud_name: 'dnb0q2s2h',
  api_key: '838368993294916',
  api_secret: 'N9U1eFJGKjJ-A8Eo4BTtSCl720c'
});

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'cyber-secret-key',
  resave: false,
  saveUninitialized: true
}));

// Routes logic here...
// (Impor routes/index.js dan routes/admin.js)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`System Online on port ${PORT}`));

module.exports = app;
