import { Router } from 'express';
import Contact, { IContact } from '../../models/contact.model';
const router = Router();

router.get('/', async (req, res) => {
    const contact: IContact[] = await Contact
        .find({});
    res.send(contact);
});

router.delete('/', async (req, res) => {
    if(req.query.id == null) {
        return res.sendStatus(400);
    }

    Contact.deleteOne({ _id: req.query.id })
        .then(result => {
            console.log(result);
            res.sendStatus(204);
        }).catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
});

export default router;