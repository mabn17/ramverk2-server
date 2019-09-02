/*!
 * By:
 * Martin Borg
 */

import { Response, Request } from 'express';
const mongo = require('mongodb').MongoClient;

const messages = {
  dns: process.env.MONGO_DSN || 'mongodb://127.0.0.1:27017/mumin',

  getAll: async function(res: Response) {
    messages.find(messages.dns, 'chat').then((chatMessages) => {
      return res.status(200).json({
        data: chatMessages
      });
    }).catch((err) => {
      return res.status(500).json(err);
    });
  },

  insertData: async function(res: Response, req: Request) {
    const data = req.body.message;

    await messages.deleteAndInsert(messages.dns, 'chat', data)
      .then(() => {
        return res.status(201).json({
          message: 'New messages saved',
          info: data
        });
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  },

  find: async function(
    dsn: string,
    colName: string,
    criteria: object = {},
    projection: object = {},
    limit: number = 0
    ): Promise<any[]> {

      const client  = await mongo.connect(dsn, { useNewUrlParser: true });
      const db = await client.db();
      const col = await db.collection(colName);
      const res = await col.find(criteria, projection).limit(limit).toArray();

      await client.close();

      return res;
    },

  deleteAndInsert: async function(
    dns: string,
    colName: string,
    doc: Array<object>
  ): Promise<any> {

    const client = await mongo.connect(dns, { useNewUrlParser: true });
    const db = client.db();
    const col = await db.collection(colName);

    await col.deleteMany();
    await col.insertMany(doc);
  }
};

export { messages };
