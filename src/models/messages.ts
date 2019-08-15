/*!
 * By:
 * Martin Borg
 */

import { Response } from 'express';
const mongo = require('mongodb').MongoClient;

const messages = {
  dns: 'mongodb://127.0.0.1:27017/ramverk2',
  getAll: async function(res: Response) {
    const filter = { 'from.name': 'Auto Connect' };
    const proj = { _id: 0, from: 1, content: 1, action: 0 };
    messages.db(messages.dns, 'chat', filter, proj).then((chatMessages) => {
      return res.status(200).json({
        data: chatMessages
      });
    }).catch((err) => {
      console.log(err);
      return res.status(500).json(err);
    });

    // try {
    //   let filter = { 'from.name': 'Auto Connect' };
    //   let proj = { _id: 0 };
    //   let chatMessages = await messages.db(messages.dns, 'chat', filter, proj);

      // return res.status(200).json({
      //   data: chatMessages
      // });
    // } catch (err) {
    //   console.log(err);
    //   return res.status(500).json(err);
    // }
  },

  /**
   * Find documents in an collection by matching search criteria.
   *
   * @async
   *
   * @param {string} dsn        DSN to connect to database.
   * @param {string} colName    Name of collection.
   * @param {object} criteria   Search criteria.
   * @param {object} projection What to project in results.
   * @param {number} limit      Limit the number of documents to retrieve.
   *
   * @throws Error when database operation fails.
   *
   * @return {Promise<array>} The resultset as an array.
   */
  db: async function(
    dsn: string,
    colName: string,
    criteria: object,
    projection: object,
    limit: number = 0
    ): Promise<any[]> {

      const client  = await mongo.connect(dsn, { useNewUrlParser: true });
      const db = await client.db();
      const col = await db.collection(colName);
      const res = await col.find(criteria, projection).limit(limit).toArray();

      await client.close();

      return res;
    }
};

export { messages };
