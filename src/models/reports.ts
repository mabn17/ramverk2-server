/*!
 * By:
 * Martin Borg
 */

import { Response } from 'express';
import * as showdown from 'showdown';
import { AuthInfoRequest } from '../routes/@Interfaces/ExpressRequest';

import { db } from '../db/database';
import { responses } from '../methods/responses';

const converter = new showdown.Converter();

const reports = {
  /**
   * Gets a spesific Report text
   * @param req Request
   * @param res Response
   */
  getOne: function (req: AuthInfoRequest, res: Response) {
    const requestedKmom: String = req.params.kmom || 'EMPTY';

    if (requestedKmom === 'EMPTY') {
      return res.status(404).json(
        responses.getErrorMessage(req.path, 'Invalid.', 'No parameter was given.', 404)
      );
    }

    db.get('SELECT * FROM report_texts WHERE title = ?',
      requestedKmom,
      (err, rows) => {
        if (err) {
          return res.status(500).json(
            responses.getErrorMessage(req.path, 'Database error.', err.message, 500)
          );
        }

        if (rows === undefined) {
          return res.status(401).json(
            responses.getErrorMessage(req.path, 'Report not found.', 'Report title provided was not found.', 401)
          );
        }

        const text = rows;

        text.data = converter.makeHtml(text.data);

        return res.status(200).json({
          data: text
        });
      });
  }
};

export { reports };
