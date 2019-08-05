/*!
 * By:
 * Martin Borg
 */

import * as express from 'express';
import { texts } from '../models/texts';
import { AuthInfoRequest } from './@Interfaces/ExpressRequest';

const me: express.Router = express.Router();

me.get(
  '/',
  (_req: AuthInfoRequest, res: express.Response, next: express.NextFunction) =>
    texts.getPresentation(res)
);

export { me };
