/*!
 * By:
 * Martin Borg
 */

import * as express from 'express';
import { users } from '../models/users';
import { reports } from '../models/reports';

import { AuthInfoRequest } from './@Interfaces/ExpressRequest';

const report: express.Router = express.Router();

report.get('/', (_req: AuthInfoRequest, res: express.Response, _next: express.NextFunction) =>
  reports.getAll(res)
);

report.post('/',
  (req: AuthInfoRequest, res: express.Response, next: express.NextFunction) =>
    users.verify(req, res, next),
  (req: AuthInfoRequest, res: express.Response, _next: express.NextFunction) =>
    reports.create(req, res)
);

report.get('/:kmom', (req: AuthInfoRequest, res: express.Response, _next: express.NextFunction) =>
  reports.getOne(req, res)
);

export { report };
