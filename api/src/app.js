const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logs = require('./middlewares/logs');
const errorHandling = require('./middlewares/errorHandling');
const db = require('./services/db');
const passport = require('passport');
const session = require('express-session')
const cookieParser = require('cookie-parser')

require('./domian/google.strategy');
require('./domian/facebook.strategy');

const config = require('./services/config');
const userRoutes = require('./routes/users');
const postsRoutes = require('./routes/posts');
const commentsRoutes = require('./routes/comments');
const likesRoutes = require('./routes/likes');
const profileRoutes = require('./routes/profile');
const authRoutes = require('./routes/auth');

const app = express();
const port = config.appPort;

app.use(logs({
  logTableName: 'logs',
  db
}))
app.use(session({ 
  secret: 'SECRET12345',
  resave: false,
  saveUninitialized: true,
  cookie: {secure: true}
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());


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
