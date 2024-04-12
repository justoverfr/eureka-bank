import { and, eq } from 'drizzle-orm';

import { db, schema } from '@eureka-bank/db';

export async function createContactRequest(data: typeof schema.contactRequests.$inferInsert) {
  const newContactRequest = await db
    .insert(schema.contactRequests)
    .values({
      senderId: data.senderId,
      receiverId: data.receiverId,
    })
    .returning()
    .then((rows) => rows[0]);

  return newContactRequest;
}

export async function readReceivedRequests(receiverId: number) {
  const receivedRequests = await db
    .select()
    .from(schema.contactRequests)
    .where(eq(schema.contactRequests.receiverId, receiverId));

  return receivedRequests;
}

export async function readSentRequests(senderId: number) {
  const sentRequests = await db
    .select()
    .from(schema.contactRequests)
    .where(eq(schema.contactRequests.senderId, senderId));

  return sentRequests;
}

export async function declineContactRequest(senderId: number, receiverId: number) {
  await db
    .delete(schema.contactRequests)
    .where(
      and(
        eq(schema.contactRequests.senderId, senderId),
        eq(schema.contactRequests.receiverId, receiverId),
      ),
    );
}

export async function acceptContactRequest(senderId: number, receiverId: number) {
  await db
    .insert(schema.contacts)
    .values({ user1Id: senderId, user2Id: receiverId })
    .returning()
    .then((rows) => rows[0]);
}

export async function cancelContactRequest(senderId: number, receiverId: number) {
  await db
    .delete(schema.contactRequests)
    .where(
      and(
        eq(schema.contactRequests.senderId, senderId),
        eq(schema.contactRequests.receiverId, receiverId),
      ),
    );
}
