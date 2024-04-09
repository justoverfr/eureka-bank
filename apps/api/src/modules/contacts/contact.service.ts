import { eq, or } from 'drizzle-orm';

import { db, schema } from '@eureka-bank/db';

export async function readContacts(userId: number) {
  const contacts = await db
    .select()
    .from(schema.contacts)
    .where(or(eq(schema.contacts.user1Id, userId), eq(schema.contacts.user2Id, userId)));

  return contacts;
}
