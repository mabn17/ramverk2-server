/*!
 * By:
 * Martin Borg
 */

import * as sqlite3 from 'sqlite3';
import * as path from 'path';

const sqlite = sqlite3.verbose();
let db: sqlite3.Database;

/**
 * Changing test.sqlite path becuase
 *  the tests are going to be run on the compiled code
 *    in another folder.
 */
const fileName: string = process.env.NODE_ENV === 'test'
  ? '../../src/db/test.sqlite'
  : 'users.sqlite';

const filePath: string = path.join(__dirname, fileName);

db = new sqlite.Database(filePath);

console.log('Now using Sqlite Database: ', filePath);

export { db };
