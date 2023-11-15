const Task = require('../models/taskModel');
const handleFactory = require('./handlefactory');

exports.createTask = handleFactory.createOne(Task);
exports.getTask = handleFactory.getOne(Task);
exports.getAllTasks = handleFactory.getAll(Task);
exports.deleteTask = handleFactory.deleteOne(Task);
exports.updateTask = handleFactory.UpdateOne(Task);
