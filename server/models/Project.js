const mongoose = require('mongoose');

const { Schema } = mongoose;

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  gif: {
    type: String
  },
  link: {
    type: String
  },
  repo: {
    type: String
  },
  
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
