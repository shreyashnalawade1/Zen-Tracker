const mongoose = require('mongoose');

const resourceGroupSchema = new mongoose.Schema({
  resourceGroupName: {
    type: String,
    required: [true, 'Please provide a valid Resource Group Name'],
    maxlength: [200, 'Resource Group name must be less than 200 charters long'],
    minlength: [1, 'Resource Group name must  be more than 1 charters long'],
  },
  numResource: {
    type: Number,
    default: 0,
  },
  lastUpdated: {
    type: Date,
    deafult: Date.now(),
  },
  icon: {
    type: String,
    default: 'default-resource-group-icon.jpg',
    maxlength: [200, 'Resource Group icon must be less than 200 charters long'],
    minlength: [1, 'Resource Group icon must  be more than 1 charters long'],
  },
});

const ResourceGroup = mongoose.model('ResourceGroup', resourceGroupSchema);
ResourceGroup.init();
module.exports = ResourceGroup;
