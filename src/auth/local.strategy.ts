import { Strategy } from 'passport-local';
import bcrypt from 'bcrypt';
import userService from '../users/user.service';

export default new Strategy({
  session: true,
}, async (username, password, done) => {
  try {
    const user = await userService.findByUsername(username);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return done(null, false);
    }

    return done(null, user);
  } catch (err) {
    return done(err);
  }
});
