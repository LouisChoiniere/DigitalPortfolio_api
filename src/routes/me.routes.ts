import { Router } from 'express';
import Experience, { IExperience } from '../models/experience.model';
import Me, { IMe } from '../models/me.model';
import Project, { IProject } from '../models/project.model';

const router = Router();

router.get('/info', async (req, res) => {
    const me: IMe = await Me.find({}, "-_id");
    res.send(me[0]);
});

router.get('/project', async (req, res) => {
    const projects: IProject[] = await Project
        .find({}, "-_id")
        .sort({ displayOrder: 1 });
    res.send(projects);
});

router.get('/experience', async (req, res) => {
    const experience: IExperience[] = await Experience
        .find({}, "-_id")
        .sort({ displayOrder: 1 });
    res.send(experience);
});

export default router;