import { eq } from 'drizzle-orm';

import { db, schema } from '@eureka-bank/db';

export async function readBlockedContacts(blockerId: number) {
  const blockedContacts = await db
    .select()
    .from(schema.blockedUsers)
    .where(eq(schema.blockedUsers.blockerId, blockerId));

  return blockedContacts;
}
