import express from 'express';
import routes from './routes/index';

const app = express();
const port = 3000;

app.use('/api', routes);
app.use(express.static('public'));

app.listen(port, () => {
  console.log('listesning');
});

export default app;
