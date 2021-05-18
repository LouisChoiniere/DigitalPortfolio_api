import { Router } from "express";
import MeModel, { IMe } from "../../models/me.model";
import Auth from './../../auth/auth'

const router = Router();

router.get('/', async (req, res) => {
    if (!Auth.isValid(req.headers.authorization))
        return res.sendStatus(403);

    const me: IMe = await MeModel
        .find()
        .sort({ displayOrder: 1 });

    res.send(me)
});

router.put('/', async (req, res) => {
    if (!Auth.isValid(req.headers.authorization))
        return res.sendStatus(403);

    if (req.body == null) {
        return res.sendStatus(400);
    }

    MeModel.updateOne({ _id: req.body }, req.body)
        .then(result => {
            console.log(result);
            res.sendStatus(204);
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        })

});

export default router;