import { Router } from 'express';
import homeRouter from './home.routes';
import meRouter from './me.routes';

const routes = Router();

routes.use('/', homeRouter);
routes.use('/me', meRouter);

export default routes;