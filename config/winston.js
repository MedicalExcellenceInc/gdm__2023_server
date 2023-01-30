// import winston from 'winston';
// import appRoot from 'app-root-path';
// import moment from 'moment';
// import 'winston-daily-rotate-file';

const winston = require('winston');
const appRoot = require('app-root-path');
const moment = require('moment');
const WinstonDaily = require('winston-daily-rotate-file');

const timestampFormat = () => {
  return moment().format('YYYY-MM-DD HH24:MI:SS')
};

const dailyTransport = new WinstonDaily({
  filename: `${appRoot}/logs/app_%DATE%.log`,
  datePattern: 'YYYY_MM_DD',
  zippedArchive: true, // 압축여부
  // maxFiles: 180, // 약 6개월치 로그만 보관. Maximum number of logs to keep. If not set, no logs will be removed. This can be a number of files or number of days. If using days, add 'd' as the suffix. (default: null)
  handleExceptions: true,
  timestamp: timestampFormat
});

const exceptionTransport = new WinstonDaily({
  level: 'error',
  filename: `${appRoot}/logs/app_exception_%DATE%.log`,
  datePattern: 'YYYY_MM_DD',
  zippedArchive: true,
  // maxFiles: 180,
  handleExceptions: true,
  timestamp: timestampFormat
});

const consoleTransport = new winston.transports.Console({
  handleExceptions: true,
  colorize: true,
  zippedArchive: true,
  // maxFiles: 180,
  timestamp: timestampFormat
});

const logger = winston.createLogger({
  level: 'debug',
  transports: [ dailyTransport, consoleTransport ],
  exceptionHandlers: [ exceptionTransport, consoleTransport ]
});


logger.stream = {
  write: message => {
    logger.info(message)
  }
};

// export default logger;
module.exports = logger;
