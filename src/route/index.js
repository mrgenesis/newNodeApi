const router = require('express').Router();

router.get('/test', (req, res) => {
  res.status(200).send({ ok: true });
});

module.exports = (app) => app.use(router);
