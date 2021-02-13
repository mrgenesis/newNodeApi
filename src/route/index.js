module.exports = (router) => router.get('/test', (req, res) => {
  res.status(200).send({ ok: true });
});
