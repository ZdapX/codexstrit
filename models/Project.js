
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: String,
  language: String,
  type: { type: String, enum: ['CODE', 'FILE'] },
  content: String, // Paste code or file URL
  notes: String,
  previewUrl: String,
  likes: { type: Number, default: 0 },
  downloads: { type: Number, default: 0 },
  authorId: String,
  authorName: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', projectSchema);
