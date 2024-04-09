import { and, eq } from 'drizzle-orm';

import { db, schema } from '@eureka-bank/db';

export async function readBlockedUsers(blockerId: number) {
  const blocked = await db
    .select()
    .from(schema.blockedUsers)
    .where(eq(schema.blockedUsers.blockerId, blockerId));

  return blocked;
}

export async function deleteBlockedUser(blockerId: number, blockedId: number) {
  await db
    .delete(schema.blockedUsers)
    .where(
      and(
        eq(schema.blockedUsers.blockerId, blockerId),
        eq(schema.blockedUsers.blockedId, blockedId),
      ),
    );
}
