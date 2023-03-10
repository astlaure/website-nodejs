import express from 'express';

const appRouter = express.Router();

appRouter.get('/', (req, res) => {
  return res.render('index.njk');
})

export default appRouter;
