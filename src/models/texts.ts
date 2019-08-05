/*!
 * By:
 * Martin Borg
 */

import { Response } from 'express';
import * as showdown from 'showdown';

import { db } from '../db/database';
import { responses } from '../methods/responses';

const converter = new showdown.Converter();

const texts = {
  getPresentation: function (res: Response) {
    db.get('SELECT * FROM site_texts WHERE title = ?',
      'me',
      (err, rows) => {
        if (err) {
          return res.status(500).json(
            responses.getErrorMessage('/', 'Database error.', err.message, 500)
          );
        }

        if (rows === undefined) {
          return res.status(401).json(
            responses.getErrorMessage('/', 'Text not found', 'Text title provided was not found.', 401)
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

export { texts };
