import { db, schema } from '@eureka-bank/db';

export async function createUser(data: typeof schema.users.$inferInsert) {
  const passwordHash = data.password;

  const result = await db
    .insert(schema.users)
    .values({
      ...data,
      password: passwordHash,
    })
    .returning()
    .then((rows) => rows[0]);

  const { password, ...user } = result;

  return user;
}
