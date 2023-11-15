const ResourceGroup = require('../models/resourceGroupModel');

const handleFactory = require('./handlefactory');

exports.createResourceGroup = handleFactory.createOne(ResourceGroup);
exports.getResourceGroup = handleFactory.getOne(ResourceGroup);
exports.getAllResourceGroups = handleFactory.getAll(ResourceGroup);
exports.deleteResourceGroup = handleFactory.deleteOne(ResourceGroup);
exports.updateResourceGroup = handleFactory.UpdateOne(ResourceGroup);
