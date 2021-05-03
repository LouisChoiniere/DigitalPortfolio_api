import { Router } from "express";
import BlogModel, { IBlog } from "../../models/blog.model";

const router = Router();

router.get('/', async (req, res) => {
    const blog: IBlog[] = await BlogModel
        .find();

    res.send(blog);
});

router.post('/', async (req, res) => {
    const blog = new BlogModel(req.body);

    blog.save()
        .then(result => {
            res.sendStatus(201);
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        });
})

router.delete('/', async (req, res) => {
    if (req.query.id == null) {
        return res.sendStatus(400);
    }

    BlogModel.deleteOne({ _id: req.query.id })
        .then(result => {
            console.log(result);
            res.sendStatus(204);
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
});

export default router;