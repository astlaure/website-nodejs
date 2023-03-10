import express from 'express';
import passport from 'passport';
import authMiddleware from './auth.middleware';

const authRouter = express.Router();
const local = passport.authenticate('local', { session: true });

authRouter.post('/login', local, (req, res) => {
  return res.json();
})

authRouter.post('logout', authMiddleware, (req, res) => {
  req.logout(err => {
    res.sendStatus(200);
  })
})

export default authRouter;
