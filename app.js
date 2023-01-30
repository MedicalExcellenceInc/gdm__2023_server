
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const compression = require('compression');
const cors = require('cors');
const logger = require('./config/winston');
const bodyparser = require('body-parser');
const gdmrouter = require('./gdm.route');

const session = require('express-session');
const flash = require('connect-flash');
const app = express();

app.use(session({
  secret: 'key',
  resave: false,
  saveUninitialized: true,
  cookie: {secure:false, maxAge: 30000, httpOnly:false}
}));

app.use(morgan('common', { stream: logger.stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));
app.use(compression());
app.use(bodyparser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyparser.json({limit: '50mb'}))
app.use(cors({
  origin: true,
  credentials: true,
}));

// routers(app);
app.use('/', gdmrouter);
 
module.exports = app;