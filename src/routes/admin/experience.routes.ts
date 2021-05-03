import { Router } from "express";
import experienceModel, { IExperience } from "../../models/experience.model";

const router = Router();

router.get('/', async (req, res) => {
    const experiences: IExperience[] = await experienceModel
        .find()
        .sort({ displayOrder: 1 });

    res.send(experiences)
});

export default router;