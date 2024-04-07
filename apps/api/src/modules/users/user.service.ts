import argon2 from 'argon2';
import { eq } from 'drizzle-orm';

import { db, schema } from '@eureka-bank/db';

export async function createUser(data: typeof schema.users.$inferInsert) {
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

export async function getUserByEmail(email: string) {
  const user = await db.query.users.findFirst({
    where: eq(schema.users.email, email),
  });

  return user;
}
