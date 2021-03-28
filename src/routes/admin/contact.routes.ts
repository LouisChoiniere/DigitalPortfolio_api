import { Router } from 'express';
import Contact, { IContact } from '../../models/contact.model';
const router = Router();

router.get('/', async (req, res) => {
    const contact: IContact[] = await Contact
        .find({}, "-_id");
    res.send(contact);
});

export default router;