const express = require('express');
const bodyParser = require('body-parser');

const config = require('./services/config');
const userRoutes = require('./routes/users');

const app = express();
const port = config.appPort;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/users', userRoutes);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
