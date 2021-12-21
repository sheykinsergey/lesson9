const express = require('express');
const bodyParser = require('body-parser');

const config = require('./services/config');
const userRoutes = require('./routes/users');
const articlesRoutes = require('./routes/articles');

const app = express();
const port = config.appPort;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/users', userRoutes);
app.use('/articles', articlesRoutes);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
