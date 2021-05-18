import { Router } from 'express';
import homeRouter from './home.routes';
import meRouter from './me.routes';
import adminRouter from './admin';
import authRouter from './auth.routes';

const routes = Router();

routes.use('/', homeRouter);
routes.use('/me', meRouter);
routes.use('/admin', adminRouter);
routes.use('/auth', authRouter);

export default routes;