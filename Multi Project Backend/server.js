import express from 'express';
import cors from 'cors';
import { loadData, getStore } from './src/config/db.js';
import { loggerMiddleware } from './src/middleware/logger.js';
import { errorHandler } from './src/middleware/errorHandler.js';

import parentsRouter from './src/routes/parents.js';
import childrenRouter from './src/routes/children.js';
import schoolsRouter from './src/routes/schools.js';
import teachersRouter from './src/routes/teachers.js';
import skillsRouter from './src/routes/skills.js';
import verificationsRouter from './src/routes/verifications.js';
import cmsRouter from './src/routes/cms.js';

// Initialize Database
loadData();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);

// API Status Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Multi Project Backend REST API is running',
    timestamp: new Date().toISOString()
  });
});

// Full Dashboard Overview Endpoint
app.get('/api/dashboard/overview', (req, res) => {
  const store = getStore();
  res.json({
    success: true,
    data: {
      stats: store.platformStats,
      children: store.children,
      parents: store.parents,
      pendingTeachers: store.pendingTeachers,
      pendingSchools: store.pendingSchools,
      skillCategories: store.skillCategories,
      agePrograms: store.agePrograms,
      activities: store.activities,
      homeCms: store.homeCms
    }
  });
});

// Register Modular Routes
app.use('/api/parents', parentsRouter);
app.use('/api/children', childrenRouter);
app.use('/api/schools', schoolsRouter);
app.use('/api/teachers', teachersRouter);
app.use('/api/skills', skillsRouter);
app.use('/api/verifications', verificationsRouter);
app.use('/api/cms', cmsRouter);

// Global Error Handler
app.use(errorHandler);

const startServer = (portToTry) => {
  const server = app.listen(portToTry, () => {
    console.log(`🚀 Multi Project Backend API running on http://localhost:${portToTry}`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.warn(`⚠️ Port ${portToTry} is already in use. Server is running on port ${portToTry}.`);
    } else {
      console.error('Server error:', err);
    }
  });
};

startServer(PORT);
