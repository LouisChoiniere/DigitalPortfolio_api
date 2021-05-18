import { Router } from 'express';
import Auth from './../auth/auth'
const authRouter = Router();

authRouter.post('/signIn', (req, res) => {

    if (req.body.username == 'LouisChoiniere' && req.body.password == 'yeetus') {
        
        res.status(200).send({ token: Auth.getToken() });
    } else {

        return res.sendStatus(403);
    }

});

export default authRouter;