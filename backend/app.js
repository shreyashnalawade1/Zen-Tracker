const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/userRoutes');
const taskRouter = require('./routes/taskRoutes');
const projectRouter = require('./routes/projectRoutes');
const projectPhaseRouter = require('./routes/projectPhaseRoutes');
const resourceRouter = require('./routes/resourceRoutes');
const resourceGroupRouter = require('./routes/resourceGroupRoutes');
const teamRouter = require('./routes/teamRoutes');

const app = express();
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

app.use('/api/v1/users', userRouter);
app.use('/api/v1/tasks', taskRouter);
app.use('/api/v1/projects', projectRouter);
app.use('/api/v1/project-phases', projectPhaseRouter);
app.use('/api/v1/resources', resourceRouter);
app.use('/api/v1/resource-groups', resourceGroupRouter);
app.use('/api/v1/teams', teamRouter);

module.exports = app;
