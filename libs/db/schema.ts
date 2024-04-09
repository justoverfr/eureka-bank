import {
  integer,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 256 }).unique().notNull(),
  password: varchar('password', { length: 256 }).notNull(),
  firstName: text('first_name').notNull(),
  lastName: text('last_name').notNull(),
  phone: varchar('phone', { length: 256 }).unique().notNull(),
  walletAddress: varchar('wallet_address', { length: 256 }).unique(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at'),
  verifiedAt: timestamp('verified_at'),
});

export const contacts = pgTable(
  'contacts',
  {
    user1Id: serial('user1_id')
      .references(() => users.id, { onDelete: 'cascade' })
      .notNull(),
    user2Id: serial('user2_id')
      .references(() => users.id, { onDelete: 'cascade' })
      .notNull(),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.user1Id, t.user2Id] }),
  }),
);

export const contactRequests = pgTable(
  'contact_requests',
  {
    senderId: integer('sender_id')
      .references(() => users.id, { onDelete: 'cascade' })
      .notNull(),
    receiverId: integer('receiver_id')
      .references(() => users.id, { onDelete: 'cascade' })
      .notNull(),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.senderId, t.receiverId] }),
  }),
);

export const blockedUsers = pgTable(
  'blocked_contacts',
  {
    blockerId: serial('blocker_id')
      .references(() => users.id, { onDelete: 'cascade' })
      .notNull(),
    blockedId: serial('blocked_id')
      .references(() => users.id, { onDelete: 'cascade' })
      .notNull(),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.blockerId, t.blockedId] }),
  }),
);
