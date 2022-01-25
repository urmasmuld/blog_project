import Http from 'http';
import App from './app';
import { openDatabaseConnection } from './db/database';

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello');
// });

const startServer = async () => {
  const httpServer = Http.createServer(App);
  await openDatabaseConnection();
  httpServer.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
  });
};
startServer();
