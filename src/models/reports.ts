/*!
 * By:
 * Martin Borg
 */

import { Response } from 'express';
import * as showdown from 'showdown';
import { AuthInfoRequest } from '../routes/@Interfaces/ExpressRequest';

import { db } from '../db/database';
import { escapeHtml } from '../methods/escape';
import { responses } from '../methods/responses';

const converter = new showdown.Converter();
const reports = {
  /**
   * Gets all Report texts
   * @param res Response
   */
  getAll: function (res: Response) {
    db.all('SELECT * FROM report_texts',
    (err, rows) => {
      if (err) {
        return res.status(500).json(
          responses.getErrorMessage('/reports', 'Database error.', err.message, 500)
        );
      }

      if (rows === undefined) {
        return res.status(401).json(
          responses.getErrorMessage('/reports', 'Report not found.', 'Report title provided was not found.', 401)
        );
      }

      const text = rows;

      return res.status(200).json({ data: text });
    });
  },

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
  },

  /**
   * Creates a Report text
   * @param req Request
   * @param res Response
   */
  create: function (req: AuthInfoRequest, res: Response) {
    const title = escapeHtml(req.body.title);
    const text = escapeHtml(req.body.text);

    if (title === '' || text === '') {
      return res.status(401).json(
        responses.getErrorMessage('/reports', 'Missing values.', 'Title or Text is missing in request.', 401)
      );
    }

    db.run('INSERT INTO report_texts(title, data) VALUES (?, ?)',
      title, text,
      (err) => {
        if (err) {
          return res.status(500).json(
            responses.getErrorMessage('/reports', 'Database error.', err.message, 500)
          );
        }

        return res.status(201).json({
          data: {
              message: 'Your report was successfully created.',
              data: {
                title: title,
                data: text
              }
          }
        });
      }
    );
  }
};

export { reports };
