import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import sessionFileStore from 'session-file-store';
import passport from 'passport';
import nunjucks from 'nunjucks';
import sessionSerializer from './auth/session.serializer';
import appRouter from './app.router';
import errorHandler from './core/handlers/error.handler';

const app = express();
const FileStore = sessionFileStore(session);

sessionSerializer.init();
nunjucks.configure('web/views', {
  express: app,
  autoescape: true,
  watch: true,
})

app.use(express.static('public', { index: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  store: new FileStore({
    path: 'var/sessions',
  }),
  secret: process.env.APP_SECRET!,
  saveUninitialized: false,
  resave: false,
  cookie: { sameSite: 'lax' },
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(appRouter);

app.use(errorHandler);

export default app;
