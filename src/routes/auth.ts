/*!
 * By:
 * Martin Borg
 */

import * as express from 'express';
import { AuthInfoRequest } from './@Interfaces/ExpressRequest';
import { users } from '../models/users';

const auth: express.Router = express.Router();

auth.post('/register', (req: AuthInfoRequest, res: express.Response, next: express.NextFunction) => users.create(
  res,
  req.body.email || '',
  req.body.pass || '',
  req.body.birthday || null
));

auth.post('/login', (req: AuthInfoRequest, res: express.Response, next: express.NextFunction) => users.login(
  res,
  req.body.email || '',
  req.body.pass || ''
));

export { auth };
