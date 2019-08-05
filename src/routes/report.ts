/*!
 * By:
 * Martin Borg
 */

import * as express from 'express';
import { reports } from '../models/reports';

import { AuthInfoRequest } from './@Interfaces/ExpressRequest';

const report: express.Router = express.Router();

report.get('/:kmom', (req: AuthInfoRequest, res: express.Response, _next: express.NextFunction) =>
  reports.getOne(req, res)
);

export { report };