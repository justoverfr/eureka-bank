import argon2 from 'argon2';
import { and, eq, getTableColumns, ilike, or } from 'drizzle-orm';

import { db, schema } from '@eureka-bank/db';

const userColumns = getTableColumns(schema.users);
const { password, createdAt, updatedAt, verifiedAt, walletPrivateKey, ...readUserColumns } =
  userColumns;

export async function createUser(data: typeof schema.users.$inferInsert) {
  const passwordHash = await argon2.hash(data.password);

  const newUser = await db
    .insert(schema.users)
    .values({ ...data, password: passwordHash })
    .returning(readUserColumns)
    .then((rows) => rows[0]);

  return newUser;
}

export async function validateUserCredentials(email: string, password: string) {
  let userWithPassword = await db
    .select({ ...readUserColumns, password: userColumns.password })
    .from(schema.users)
    .where(eq(schema.users.email, email))
    .then((rows) => rows[0]);

  let isPasswordValid = false;

  if (userWithPassword) {
    isPasswordValid = await argon2.verify(userWithPassword.password, password);
  } else {
    // This is a dummy call to prevent timing attacks
    await argon2.verify('dummyHash', 'dummyPassword');
  }

  if (!isPasswordValid) {
    throw new Error('Invalid credentials');
  }

  const { password: _, ...userWithoutPassword } = userWithPassword;
  return userWithoutPassword;
}

export async function readUserById(id: number) {
  const user = await db
    .select(readUserColumns)
    .from(schema.users)
    .where(eq(schema.users.id, id))
    .then((rows) => rows[0]);

  return user;
}

export async function readUserByEmail(email: string) {
  const user = await db
    .select(readUserColumns)
    .from(schema.users)
    .where(eq(schema.users.email, email))
    .then((rows) => rows[0]);

  return user;
}

export async function readUserByWalletAddress(walletAddress: string) {
  const user = await db
    .select(readUserColumns)
    .from(schema.users)
    .where(eq(schema.users.walletAddress, walletAddress))
    .then((rows) => rows[0]);

  return user;
}

export async function readUsers() {
  const users = await db.select(readUserColumns).from(schema.users);
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
    .select(readUserColumns)
    .from(schema.users)
    .where(and(...searchConditions));

  return users;
}

export async function updateUserWalletAddress(userId: number, newAddress: string) {
  const user = await db
    .update(schema.users)
    .set({ walletAddress: newAddress })
    .where(eq(schema.users.id, userId))
    .returning(readUserColumns)
    .then((rows) => rows[0]);

  return user;
}

export async function updateUserWalletPrivateKey(userId: number, newPrivateKey: string) {
  const user = await db
    .update(schema.users)
    .set({ walletPrivateKey: newPrivateKey })
    .where(eq(schema.users.id, userId))
    .returning(readUserColumns)
    .then((rows) => rows[0]);

  return user;
}

export async function readUserWalletPrivateKey(userId: number) {
  const user = await db
    .select({ walletPrivateKey })
    .from(schema.users)
    .where(eq(schema.users.id, userId))
    .then((rows) => rows[0]);

  return user?.walletPrivateKey;
}
