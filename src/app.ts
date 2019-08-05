/*!
 * By:
 * Martin Borg
 */

import * as express from 'express';
import * as cors from 'cors';
import * as morgan from 'morgan';
import * as bodyparser from 'body-parser';

import { auth } from './routes/auth';
import { me } from './routes/me';
import { report } from './routes/report';
import { responses } from './methods/responses';

const app = express();

// Middlewares
app.use(cors());
app.options('*', cors());
app.disable('x-powered-by');

// Disable loging if NODE_ENV=test
if (process.env.NODE_ENV !== 'test') {
  // use morgan to log at command line
  app.use(morgan('dev')); // 'combined' outputs the Apache style LOGs
}

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// Routes
app.use('/', me);
app.use('/auth', auth);
app.use('/reports', report);

/**
 * |--------------------------------------------------
 * | GET /*
 * | Response for non recognized routes
 * | @retuns statusCode 404
 * |--------------------------------------------------
 */
app.all(
  '/**',
  (
    req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) => {
    res
      .status(404)
      .json(
        responses.getErrorMessage(req.url, 'Unknown route.', `Route '${req.url}' does not exists.`, 404)
      );
  }
);

export { app };
