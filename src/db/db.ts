import { createConnection, ConnectionOptions } from 'typeorm';

export async function openDatabaseConnection() {
  // await closeDatabaseConnection();
  const options: ConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Tere12345',
    database: 'blog'
  };

  // ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
  // Where root as your user localhost as your URL and password as your password

  // Then run this query to refresh privileges:

  // flush privileges;

  // Try connecting using node after you do so.

  // If that doesn't work, try it without @'localhost' part.

  const conn = await createConnection(options);
  if (!conn.isConnected) {
    throw new Error('Connection to database failed');
  }
  return conn;
}
