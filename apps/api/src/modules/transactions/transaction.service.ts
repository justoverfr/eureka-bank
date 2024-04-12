import { eq, or } from 'drizzle-orm';

import { db, schema } from '@eureka-bank/db';

export async function createTransaction(data: typeof schema.transactions.$inferInsert) {
  const newTransaction = await db
    .insert(schema.transactions)
    .values(data)
    .returning()
    .then((rows) => rows[0]);

  return newTransaction;
}

export async function readUserTransactions(userId: number) {
  const transactions = await db
    .select()
    .from(schema.transactions)
    .where(or(eq(schema.transactions.senderId, userId), eq(schema.transactions.receiverId, userId)))
    .then((rows) => rows);

  return transactions;
}
