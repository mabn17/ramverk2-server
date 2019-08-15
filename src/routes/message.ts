/*!
 * By:
 * Martin Borg
 */

// const mongo = require('mongodb').MongoClient;
// const dsn = process.env.MONGO_DSN || 'mongodb://localhost:27017/ramverk2';

import * as express from 'express';
import { AuthInfoRequest } from './@Interfaces/ExpressRequest';

import { messages } from '../models/messages';

const message: express.Router = express.Router();

message.get('/', (req: AuthInfoRequest, res: express.Response, _next: express.NextFunction) =>
  messages.getAll(res)
);

export { message };
