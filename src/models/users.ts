/*!
 * By:
 * Martin Borg
 */

import { Response, NextFunction } from 'express';
import { AuthInfoRequest } from '../routes/@Interfaces/ExpressRequest';
import { hash, compare } from 'bcrypt';
import { db } from '../db/database';
import { responses } from '../methods/responses';
import { verify, sign } from 'jsonwebtoken';

const users = {
  /**
   * Creates a new user in the database.
   * @param res express.Response
   * @param email user email
   * @param pass user pass
   */
  create: function (res: Response, email: string, pass: string, birthday?: string) {
    if (email === '' || pass === '') {
      return res.status(401).json(
        responses.getErrorMessage('/register', 'Missing values.', 'Email or password missing in request.', 401)
      );
    }

    hash(pass, 10, function(err, encrypted) {
      if (err) {
        return res.status(500).json(
          responses.getErrorMessage('/register', 'bcrypt error.', 'Error encrypting the given password.', 500)
        );
      }
      db.run('INSERT INTO users (email, password, birthday) VALUES (?, ?, ?)',
        email,
        encrypted,
        birthday, (err) => {
          if (err) {
            return res.status(500).json(
              responses.getErrorMessage('/register', 'Database error.', err.message, 500)
            );
          }
          return res.status(201).json({
            data: {
                message: 'User successfully registered.'
            }
          });
      });
    });
  },

  /**
   * Login for usertokens
   * @param res express.Response
   * @param email user email
   * @param pass user password
   */
  login: function(res: Response, email: string, pass: string) {
    if (email === '' || pass === '') {
      return res.status(401).json(
        responses.getErrorMessage('/login', 'Missing values.', 'Email or password missing in request.', 401)
      );
    }

    db.get('SELECT * FROM users WHERE email = ?',
      email,
      (err, rows) => {
        if (err) {
          return res.status(500).json(
            responses.getErrorMessage('/login', 'Database error.', err.message, 500)
          );
        }

        if (rows === undefined) {
          return res.status(401).json(
            responses.getErrorMessage('/login', 'User not found.', 'User with provided email not found.', 401)
          );
        }

        const user = rows;

        compare(pass, user.password, (err, result) => {
          if (err) {
            return res.status(500).json(
              responses.getErrorMessage('/login', 'bcrypt error.', 'bcrypt error.', 500)
            );
          }

          if (result) {
            const payload = { email: user.email };
            const jwtToken = sign(payload, process.env.SECRET, { expiresIn: '24h' });

            return res.status(200).json({
              data: {
                message: 'User logged in',
                user: payload,
                token: jwtToken
              }
            });
          }

          return res.status(401).json(
            responses.getErrorMessage('/login', 'Wrong password.', 'Password is incorrect.', 401)
          );
        });
      });
  },

  /**
   * Middleware to veryfy user accsess.
   * @param req AuthIntoRequest
   * @param res Response
   * @param next NextFunction
   */
  verify: function(req: AuthInfoRequest, res: Response, next: NextFunction) {
    if (process.env.NODE_ENV === 'test') {
      next();

      return undefined;
    }
    /* istanbul ignore next */
    const token = req.headers['x-access-token'];
    /* istanbul ignore next */
    if (token) {
      verify(token.toString(), process.env.SECRET, function(err, decoded) {
        if (err) {
          return res.status(500).json(
            responses.getErrorMessage(req.path, 'Failed authentication.', err.message, 500)
          );
        }

        req.user = decoded;
        next();

        return undefined;
      });
    } else {
      return res.status(401).json(
        responses.getErrorMessage(req.path, 'No token.', 'No token provided in request headers.', 401)
      );
    }
  }
};

export { users };
