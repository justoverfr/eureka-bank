import argon2 from 'argon2';
import { eq } from 'drizzle-orm';

import { db, schema } from '@eureka-bank/db';

export async function createUser(data: typeof schema.users.$inferInsert) {
  console.log('data', data);
  const passwordHash = await argon2.hash(data.password);

  const newUser = await db
    .insert(schema.users)
    .values({
      ...data,
      password: passwordHash,
    })
    .returning()
    .then((rows) => rows[0]);

  return newUser;
}

export async function updateUserWalletAddress(
  userId: number,
  newAddress: string,
) {
  const user = await db
    .update(schema.users)
    .set({ walletAddress: newAddress })
    .where(eq(schema.users.id, userId))
    .returning()
    .then((rows) => rows[0]);

  return user;
}

export async function updateUserWalletPrivateKey(
  userId: number,
  newPrivateKey: string,
) {
  const user = await db
    .update(schema.users)
    .set({ walletPrivateKey: newPrivateKey })
    .where(eq(schema.users.id, userId))
    .returning()
    .then((rows) => rows[0]);

  return user;
}
