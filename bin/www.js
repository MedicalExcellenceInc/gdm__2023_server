const app = require('../app');
const http = require('http');
const logger = require('../config/winston');


// 서버 포트 체크
const normalizePort = (val) => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

// 에러 발생 시
const onError = (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  switch (error.code) {
    case 'EACCES':
      logger.error(`${bind} requires elevated privileges`);
      process.exit(1);
    case 'EADDRINUSE':
      logger.error(`${bind} is already in use`);
      process.exit(1);
    default:
      throw error;
  }
}

// 서버 정상 시작 시
const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  logger.debug(`Listening on ${bind}`);
}

// 서버 생성
const server = http.createServer(app);

// 환경 변수 설정 
// 로컬 개발용 임시 포트 40005
const port = '40005'; // normalizePort(process.env.PORT || '40005');
app.set('port', port);


server.listen(port);

// 이벤트 등록
server.on('error', onError); 
server.on('listening', onListening); 

