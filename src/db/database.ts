/*!
 * By:
 * Martin Borg
 */

import * as sqlite3 from 'sqlite3';
import * as path from 'path';

const sqlite = sqlite3.verbose();
let db: sqlite3.Database;

/**
 * Backing file directories becuase 'build' has problems
 *  with copying sqlite files properly.
 */
const fileName: string = process.env.NODE_ENV === 'test'
  ? '../../src/db/test.sqlite'
  : '../../src/db/users.sqlite';

const filePath: string = path.join(__dirname, fileName);

db = new sqlite.Database(filePath);

console.log('Now using Sqlite Database: ', filePath);

export { db };
