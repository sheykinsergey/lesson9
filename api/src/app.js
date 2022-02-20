const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logs = require('./middlewares/logs');
const errorHandling = require('./middlewares/errorHandling');
const db = require('./services/db');

const googleStrategy = require('./domian/google.strategy');
const facebookStrategy = require('./domian/facebook.strategy');

const config = require('./services/config');
const userRoutes = require('./routes/users');
const postsRoutes = require('./routes/posts');
const commentsRoutes = require('./routes/comments');
const likesRoutes = require('./routes/likes');
const profileRoutes = require('./routes/profile');
const authRoutes = require('./routes/auth')

const app = express();
const port = config.appPort;

googleStrategy().registerStrategy();
facebookStrategy().fRegisterStrategy();
app.use(logs({
  logTableName: 'logs',
  db
}))

app.use(googleStrategy().passport.initialize());
app.use(facebookStrategy().passport.initialize());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(__dirname + '../../uploads'));
app.use('/imgPost', express.static(__dirname + '../../imgPost'));

app.use('/users', userRoutes);
app.use('/posts', postsRoutes);
app.use('/comments', commentsRoutes);
app.use('/likes', likesRoutes);
app.use('/profile', profileRoutes);
app.use('/auth', authRoutes)

app.use(errorHandling);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
