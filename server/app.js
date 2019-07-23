import '@babel/polyfill';
import express from 'express';
import cors from 'cors';
import routes from './routes/index';

const app = express();

require('dotenv').config();

app.use(cors());

const PORT = process.env.PORT || 3000;
const BASE_URL = '/api/v1';

app.get('/', (request, response) => {
  response.status(200).send('Welcome to Team Lead & QA generator');
});

app.use(`${BASE_URL}`, routes);

app.use('*', (request, response) => {
  response.status(404).send('Not Found');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is up at port ${PORT}`);
});

export default app;
