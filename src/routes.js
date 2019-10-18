import { Router } from 'express';

import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Hello world' }));
routes.post('/session', SessionController.store);

export default routes;
