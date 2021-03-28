import { Router } from 'express';
import contactRouter from './contact.routes'

const routes = Router();

routes.use('/contact', contactRouter);
// routes.use('/me', meRouter);
// routes.use('/admin', admin)

export default routes;