const Project = require('../models/projectModel');

const handleFactory = require('./handlefactory');

exports.createProject = handleFactory.createOne(Project);
exports.getProject = handleFactory.getOne(Project);
exports.getAllProjects = handleFactory.getAll(Project);
exports.deleteProject = handleFactory.deleteOne(Project);
exports.updateProject = handleFactory.UpdateOne(Project);
