const Project = require('../models/projectModel');

const handleFactory = require('./handlefactory');

exports.createProject = handleFactory.createOne(Project);
exports.getProject = handleFactory.getOne(Project);
exports.getAllProjects = async function (req, res, next) {
  const items = await Project.find({
    team: req.query.userId,
  });
  res.status(200).json({
    status: 'success',
    data: {
      items,
    },
  });
};
exports.deleteProject = handleFactory.deleteOne(Project);
exports.updateProject = handleFactory.UpdateOne(Project);
