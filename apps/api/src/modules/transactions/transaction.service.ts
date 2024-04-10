import { db, schema } from '@eureka-bank/db';

export async function createTransaction(data: typeof schema.transactions.$inferInsert) {
  const newTransaction = await db
    .insert(schema.transactions)
    .values(data)
    .returning()
    .then((rows) => rows[0]);

  return newTransaction;
}
