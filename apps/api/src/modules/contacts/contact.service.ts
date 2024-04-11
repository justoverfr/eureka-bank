import { and, eq, or } from 'drizzle-orm';

import { db, schema } from '@eureka-bank/db';

export async function readContacts(userId: number) {
  const contacts = await db
    .select()
    .from(schema.contacts)
    .where(or(eq(schema.contacts.user1Id, userId), eq(schema.contacts.user2Id, userId)));

  return contacts;
}

export async function deleteContact(user1Id: number, user2Id: number) {
  await db
    .delete(schema.contacts)
    .where(
      or(
        and(eq(schema.contacts.user1Id, user1Id), eq(schema.contacts.user2Id, user2Id)),
        and(eq(schema.contacts.user1Id, user2Id), eq(schema.contacts.user2Id, user1Id)),
      ),
    );
}
