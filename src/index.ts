/*!
 * By:
 * Martin Borg
 */

import './lib/env';
import { app } from './app';
import * as http from 'http';

const mode = process.env.NODE_ENV || 'dev';
const port: string = process.env.PORT || '8080';
const server: http.Server = http.createServer(app);

console.log(mode);

switch (mode) {
  case 'test':
    module.exports = server.listen(port, () =>
      console.log(`Listening on port ${port}`)
    );

    break;
  default:
    server.listen(port);
    server.on('error', err => {
      console.error(err);
    });
    server.on('listening', () => {
      console.log(process.env.MODE);
      console.info(`Listening on port ${port}`);
    });
}
