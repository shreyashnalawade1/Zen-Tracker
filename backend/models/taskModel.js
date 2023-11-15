const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  taskName: {
    type: String,
    required: [true, 'Please provide a task nmae'],
    maxlength: [200, 'Task name must be less than 200 charters long'],
    minlength: [1, 'Task name must  be more than 1 charters long'],
  },
  discription: {
    type: String,
    required: [true, 'Please provide a discription'],
    maxlength: [600, 'Task dicription must be less than 600 charters long'],
    minlength: [1, 'Task discription must  be more than 1 charters long'],
  },
  priority: {
    type: String,
    enum: ['Low', 'Intermidate', 'Heigh'],
    default: 'Low',
  },
  deadLine: {
    type: Date,
    required: [true, 'Please provide a valid deadline for the task '],
    validate: [
      (val) => val.getTime() >= Date.now(),
      'Please provide a valide deadline value',
    ],
  },

  tags: {
    type: [String],
  },
});

const Task = mongoose.model('Task', taskSchema);
Task.init();

module.exports = Task;