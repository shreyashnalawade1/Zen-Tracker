const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  resourceName: {
    type: String,
    required: [true, 'Please provide a valid Resource Name'],
    maxlength: [200, 'Resource name must be less than 200 charters long'],
    minlength: [1, 'Resource name must  be more than 1 charters long'],
  },
  link: {
    type: String,
    required: [true, 'Please provide a link'],
    maxlength: [600, 'Resource link must be less than 600 charters long'],
    minlength: [1, 'Resource link must  be more than 1 charters long'],
  },
  icon: {
    type: String,
    default: 'default-icon.jpg',
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Resource = mongoose.model('Resource', resourceSchema);

Resource.init();

module.exports = Resource;
