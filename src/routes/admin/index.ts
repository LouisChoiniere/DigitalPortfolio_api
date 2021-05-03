import { Router } from 'express';
import contactRouter from './contact.routes'
import blogRouter from './blog.routes'
import projectRouter from './project.routes';
import experienceRouter from './experience.routes';
import meRouter from './me.routes';

const routes = Router();

routes.use('/me', meRouter);
routes.use('/contact', contactRouter);
routes.use('/blog', blogRouter);
routes.use('/project', projectRouter)
routes.use('/experience', experienceRouter)

export default routes;