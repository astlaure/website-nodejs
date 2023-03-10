import passport from 'passport';
import { User } from '../users/user.model';
import userService from '../users/user.service';
import localStrategy from './local.strategy';

export default new class SessionSerializer {
  init() {
    passport.use(localStrategy);

    passport.serializeUser((user, done) => {
      done(null, (user as User).id);
    });

    passport.deserializeUser(async (id: number, done) => {
      try {
        const user = await userService.findById(id);

        if (!user || !user.enabled) {
          return done(null, false);
        }

        return done(null, user);
      } catch (err) {
        done(err);
      }
    })
  }
}
