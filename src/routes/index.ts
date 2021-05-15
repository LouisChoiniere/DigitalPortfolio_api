import { Router } from 'express';
import homeRouter from './home.routes';
import meRouter from './me.routes';
import adminRouter from './admin';

const routes = Router();

routes.use('/', homeRouter);
routes.use('/me', meRouter);
// routes.use('/admin', adminRouter)

export default routes;