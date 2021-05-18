import { Router } from "express";
import ProjectModel, { IProject } from "../../models/project.model";
import Auth from './../../auth/auth'

const router = Router();

router.get('/', async (req, res) => {
    if (!Auth.isValid(req.headers.authorization))
        return res.sendStatus(403);

    const projects: IProject[] = await ProjectModel
        .find()
        .sort({ displayOrder: 1 });

    res.send(projects)
});

router.put('/', async (req, res) => {
    if (!Auth.isValid(req.headers.authorization))
        return res.sendStatus(403);

    if (req.body == null) {
        return res.sendStatus(400);
    }

    if (req.body._id) {
        ProjectModel.updateOne({ _id: req.body }, req.body)
            .then(result => {
                console.log(result);
                res.sendStatus(204);
            }).catch(err => {
                console.log(err);
                res.sendStatus(500);
            })
    } else {
        const project = new ProjectModel(req.body);
        project.save()
            .then(result => {
                console.log(result);
                res.sendStatus(201);
            }).catch(err => {
                console.log(err);
                res.sendStatus(500);
            });
    }
});

router.delete('/', async (req, res) => {
    if (!Auth.isValid(req.headers.authorization))
        return res.sendStatus(403);
        
    if (req.query.id == null) {
        return res.sendStatus(400);
    }

    ProjectModel.deleteOne({ _id: req.query.id })
        .then(result => {
            console.log(result);
            res.sendStatus(204);
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
})

export default router;