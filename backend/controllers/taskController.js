const Task = require('../models/taskModel');
const handleFactory = require('./handlefactory');

exports.createTask = handleFactory.createOne(Task);
exports.getTask = handleFactory.getOne(Task, {
  path: 'assigned',
  select: 'name',
});
exports.getAllTasks = async function (req, res, next) {
  const items = await Task.find({
    project: req.query.projectId,
  }).populate({
    path: 'assigned',
    strictPopulate: false,
    select: 'name',
  });
  res.status(200).json({
    status: 'success',
    data: {
      items,
    },
  });
};
exports.deleteTask = handleFactory.deleteOne(Task);
exports.updateTask = handleFactory.UpdateOne(Task);
