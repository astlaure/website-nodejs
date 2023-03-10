import 'dotenv/config';
import app from './app';
import database from './database';

(async () => {
  await database.authenticate();
  app.listen(3000, () => console.log('server started.'));
})()
