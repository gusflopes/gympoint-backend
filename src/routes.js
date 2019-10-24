import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import StudentController from './app/controllers/StudentController';
import PlanController from './app/controllers/PlanController';
import EnrollmentController from './app/controllers/EnrollmentController';
import CheckinController from './app/controllers/CheckinController';
import HelpOrderController from './app/controllers/HelpOrderController';
import AnswerController from './app/controllers/AnswerController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Hello world' }));
routes.post('/session', SessionController.store);

routes.post('/students/:id/checkins', CheckinController.store);
routes.get('/students/:id/checkins', CheckinController.list);

routes.post('/students/:id/help-orders', HelpOrderController.store);
routes.get('/students/:id/help-orders', HelpOrderController.list);

// middleware
routes.use(authMiddleware);

// Authenticated Routes
routes.post('/help-orders/:id/answer', AnswerController.store);
routes.get('/help-orders/', AnswerController.list);

routes.post('/users', UserController.store);
routes.put('/users', UserController.update);

routes.post('/students', StudentController.store);
routes.get('/students', StudentController.list);
routes.put('/students/:id', StudentController.update);
// routes.delete('/students/:id', StudentController.delete);

routes.post('/plans', PlanController.store);
routes.get('/plans', PlanController.list);
routes.put('/plans/:id', PlanController.update);
routes.delete('/plans/:id', PlanController.delete);

routes.post('/enrollments', EnrollmentController.store);
routes.get('/enrollments', EnrollmentController.list);
routes.get('/enrollments/:id', EnrollmentController.details);
routes.put('/enrollments/:id', EnrollmentController.update);
routes.delete('/enrollments/:id', EnrollmentController.delete);

export default routes;
