import express from 'express';

export default function createServer() {
  const app = express();

  app.get('/healthcheck', (req, res) => res.send('Healthy'));

  return app;
}

if (require.main === module) {
  createServer().listen(2000, () => console.log('App listening on port 2000!'));
}
