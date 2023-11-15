const Resource = require('../models/resourceModel');

const handleFactory = require('./handlefactory');

exports.createResource = handleFactory.createOne(Resource);
exports.getResource = handleFactory.getOne(Resource);
exports.getAllResources = handleFactory.getAll(Resource);
exports.deleteResource = handleFactory.deleteOne(Resource);
exports.updateResource = handleFactory.UpdateOne(Resource);
