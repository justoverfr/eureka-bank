import argon2 from 'argon2';
import { and, eq, getTableColumns, ilike, or } from 'drizzle-orm';

import { db, schema } from '@eureka-bank/db';

const userColumns = getTableColumns(schema.users);
const { password, ...passwordlessUserColumns } = userColumns;

export async function createUser(data: typeof schema.users.$inferInsert) {
  const passwordHash = await argon2.hash(data.password);

  const newUser = await db
    .insert(schema.users)
    .values({ ...data, password: passwordHash })
    .returning()
    .then((rows) => rows[0]);

  const { password, ...passwordlessNewUser } = newUser;
  return passwordlessNewUser;
}

export async function readUserById(id: number) {
  const user = await db
    .select(passwordlessUserColumns)
    .from(schema.users)
    .where(eq(schema.users.id, id))
    .then((rows) => rows[0]);

  return user;
}

export async function readUsers() {
  const users = await db.select().from(schema.users);
  return users;
}

export async function searchUsers(searchInput: string) {
  const searchParts = searchInput.split(' ');

  const searchConditions = [];
  for (const part of searchParts) {
    searchConditions.push(
      or(
        ilike(schema.users.firstName, `%${part}%`),
        ilike(schema.users.lastName, `%${part}%`),
        ilike(schema.users.email, `%${part}%`),
        ilike(schema.users.phone, `%${part}%`),
      ),
    );
  }

  const users = await db
    .select(passwordlessUserColumns)
    .from(schema.users)
    .where(and(...searchConditions));

  return users;
}
